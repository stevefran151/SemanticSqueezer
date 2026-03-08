import redis
import time
from typing import Optional

class TokenBudgeter:
    def __init__(self, redis_url: str):
        self.client = redis.from_url(redis_url, decode_responses=True)
        # Window size in seconds (e.g., limit per hour)
        self.window_size = 3600 

    def check_and_deduct(self, user_hash: str, required_tokens: int, limit: int = 10000) -> bool:
        """
        Atomically checks if the user has enough tokens and deducts them.
        Returns True if successful, False if the limit is exceeded.
        """
        # Determine the current time window bucket
        current_window = int(time.time() // self.window_size)
        key = f"token_budget:{user_hash}:{current_window}"

        pipeline = self.client.pipeline()
        
        # Retry loop for Optimistic Concurrency Control (OCC)
        while True:
            try:
                # 1. Watch the key for changes by other requests
                pipeline.watch(key)
                
                # 2. Get current usage
                current_usage = pipeline.get(key)
                current_usage = int(current_usage) if current_usage else 0

                # 3. Assert capacity
                if current_usage + required_tokens > limit:
                    pipeline.unwatch()
                    return False # Rate limit exceeded

                # 4. Transaction Block
                pipeline.multi()
                pipeline.incrby(key, required_tokens)
                # Set TTL to 2x window size to ensure it drops off safely
                pipeline.expire(key, self.window_size * 2)
                
                # 5. Execute atomically
                pipeline.execute()
                return True

            except redis.WatchError:
                # Another client modified the key between our GET and EXECUTE.
                # Loop will restart and try again.
                continue
            finally:
                pipeline.reset()
