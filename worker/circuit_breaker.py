import pybreaker
import logging
from httpx import AsyncClient, TimeoutException, HTTPStatusError

logger = logging.getLogger(__name__)

# Configure the Circuit Breaker
# We trip if 5 consecutive errors occur.
# We stay open (fast failing) for 60 seconds.
# We only count TimeoutExceptions or specific 5xx HTTP Errors as "failures".
db_breaker = pybreaker.CircuitBreaker(
    fail_max=5, 
    reset_timeout=60, 
    state_storage=pybreaker.CircuitMemoryStorage() 
    # NOTE: For a multi-worker setup, use pybreaker.CircuitRedisStorage(redis_client) 
    # to share the breaker state across all worker containers.
)

llm_breaker = pybreaker.CircuitBreaker(
    fail_max=3, 
    reset_timeout=120, # Cloud APIs may need longer to recover
    state_storage=pybreaker.CircuitMemoryStorage()
)

class RemoteServiceError(Exception):
    pass

@db_breaker
async def fetch_vector_context(qdrant_url: str, vector: list):
    """
    Fetches context from Qdrant. Tripped by timeouts or 500s.
    """
    async with AsyncClient(timeout=2.0) as client:
        try:
            # Example Qdrant request
            response = await client.post(f"{qdrant_url}/collections/docs/points/search", json={"vector": vector})
            response.raise_for_status()
            return response.json()
        except TimeoutException as e:
            logger.error("Qdrant Request Timed Out")
            raise e
        except HTTPStatusError as e:
            if e.response.status_code >= 500:
                logger.error(f"Qdrant 5xx Error: {e}")
                raise e # 5xx trip the breaker
            else:
                return None # 4xx (not found, bad request) shouldn't trip it

@llm_breaker
async def query_cloud_llm(model_url: str, auth_key: str, payload: dict):
    """
    Queries the Cloud LLM. This is the most critical and expensive call to protect.
    """
    headers = {"Authorization": f"Bearer {auth_key}"}
    async with AsyncClient(timeout=10.0) as client:
        try:
            response = await client.post(model_url, json=payload, headers=headers)
            
            # Special handling for LLM specific rate limits
            if response.status_code == 429:
                logger.warning("Cloud LLM Rate Limited (429)! Tripping breaker.")
                raise RemoteServiceError("429 Too Many Requests")
                
            response.raise_for_status()
            return response.json()
        except (TimeoutException, RemoteServiceError) as e:
            logger.error(f"LLM Service Failure: {e}")
            raise e
        except HTTPStatusError as e:
            if e.response.status_code >= 500:
                logger.error(f"LLM 5xx Error: {e}")
                raise e
