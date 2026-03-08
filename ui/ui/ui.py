import reflex as rx
import random
import time

# --- React Component Bridge for Recharts Sankey ---
class SankeyChart(rx.Component):
    """A custom component bridge for the recharts Sankey diagram."""
    library = "recharts"
    tag = "Sankey"
    
    # Props
    width: rx.Var[int] = 600
    height: rx.Var[int] = 400
    data: rx.Var[dict]
    nodePadding: rx.Var[int] = 50
    nodeWidth: rx.Var[int] = 10
    link_color: rx.Var[str] = "cyan"

class State(rx.State):
    """The application state for the Semantic Squeezer Dashboard."""
    
    # --- Playground State ---
    user_prompt: str = ""
    inference_result: str = ""
    inference_latency: float = 0.0
    routed_to: str = "Awaiting input..."
    
    # --- Telemetry & Audit State ---
    cpu_load_edge: int = 25
    cpu_load_cloud: int = 15
    squeeze_ratio_pct: int = 65
    cloud_calls_avoided: int = 1250
    trust_score: float = 0.98
    bypass_attempts: int = 2
    
    def set_user_prompt(self, val: str):
        self.user_prompt = val
    
    # --- Sankey Flow Data ---
    flow_data: dict = {
        "nodes": [
            {"name": "User Prompt"},
            {"name": "Edge Gateway"},
            {"name": "Local Inferencing (Squeezed)"},
            {"name": "Cloud Fallback (Heavy)"},
            {"name": "Audit Sidecar"}
        ],
        "links": [
            {"source": 0, "target": 1, "value": 100},
            {"source": 1, "target": 2, "value": 65},
            {"source": 1, "target": 3, "value": 35},
            {"source": 2, "target": 4, "value": 65},
            {"source": 3, "target": 4, "value": 35}
        ]
    }
    
    def submit_prompt(self):
        """Simulate sending a prompt through the Semantic Squeezer."""
        if not self.user_prompt.strip():
            return
            
        start_time = time.time()
        
        # Simulate routing logic based on prompt length
        is_complex = len(self.user_prompt) > 50
        
        # Add latency
        time.sleep(random.uniform(0.1, 0.4) if not is_complex else random.uniform(0.8, 2.5))
        
        self.inference_latency = round((time.time() - start_time) * 1000, 2)
        
        if is_complex:
            self.routed_to = "Cloud Fallback (Deep Context Required)"
            self.inference_result = f"Cloud Response to: '{self.user_prompt}'..."
            self.cloud_calls_avoided += 0
        else:
            self.routed_to = "Edge Inference (Squeezed!)"
            self.inference_result = f"Edge Response to: '{self.user_prompt}'..."
            self.cloud_calls_avoided += 1
            
        # Clear prompt
        self.user_prompt = ""
        
        # Update Sankey slightly based on routing
        self.update_sankey(is_complex)

    def update_sankey(self, was_complex: bool):
        squeezed_val = self.flow_data["links"][1]["value"]
        cloud_val = self.flow_data["links"][2]["value"]
        
        if not was_complex:
            squeezed_val += 1
        else:
            cloud_val += 1
            
        total = squeezed_val + cloud_val
        self.squeeze_ratio_pct = int((squeezed_val / total) * 100) if total > 0 else 0
        
        # We must reassign dictionary completely so Reflex detects the change
        self.flow_data = {
            "nodes": [
                {"name": "User Prompt"},
                {"name": "Edge Gateway"},
                {"name": "Local Inferencing (Squeezed)"},
                {"name": "Cloud Fallback (Heavy)"},
                {"name": "Audit Sidecar"}
            ],
            "links": [
                {"source": 0, "target": 1, "value": total},
                {"source": 1, "target": 2, "value": squeezed_val},
                {"source": 1, "target": 3, "value": cloud_val},
                {"source": 2, "target": 4, "value": squeezed_val},
                {"source": 3, "target": 4, "value": cloud_val}
            ]
        }

    def manual_refresh_data(self):
        """Manual refresh logic for the telemetry metrics."""
        self.cpu_load_edge = random.randint(15, 85)
        self.cpu_load_cloud = random.randint(10, 60)
        self.trust_score = round(random.uniform(0.95, 0.99), 3)
        self.bypass_attempts += random.randint(0, 1)


# --- UI Components ---

def glassmorphism_box(*children, **kwargs):
    """Helper for premium dark mode glassmorphism."""
    return rx.box(
        *children,
        background="rgba(255, 255, 255, 0.05)",
        backdrop_filter="blur(16px)",
        border="1px solid rgba(255, 255, 255, 0.1)",
        border_radius="16px",
        box_shadow="0 8px 32px 0 rgba(0, 0, 0, 0.3)",
        padding="24px",
        **kwargs
    )

def playground_panel():
    return glassmorphism_box(
        rx.heading("🌐 Inference Playground", size="6", color="white", mb="4"),
        rx.text("Send a query to the aggregator. Short prompts squeeze into the edge, long ones hit the cloud.", color="gray.400", mb="4"),
        
        rx.hstack(
            rx.input(
                placeholder="Enter prompt... (e.g. 'Short request' vs 'Very long complex analysis please...')", 
                value=State.user_prompt,
                on_change=State.set_user_prompt,
                bg="rgba(0,0,0,0.5)",
                color="white",
                border_color="gray.600",
                width="100%"
            ),
            rx.button(
                "Squeeze", 
                on_click=State.submit_prompt,
                bg="cyan",
                color="black",
                _hover={"bg": "lightcyan"}
            ),
            width="100%",
            mb="4"
        ),
        
        rx.divider(border_color="gray.700", mb="4"),
        
        rx.vstack(
            rx.hstack(
                rx.badge("Route Decision:", color_scheme="blue", variant="solid"),
                rx.text(State.routed_to, font_weight="bold", color="white")
            ),
            rx.hstack(
                rx.badge("Latency:", color_scheme="green", variant="solid"),
                rx.text(State.inference_latency, " ms", color="white")
            ),
            rx.box(
                rx.text("Output:", color="gray.400", font_size="sm"),
                rx.code_block(State.inference_result, language="python", bg="rgba(0,0,0,0.4)"),
                width="100%"
            ),
            align_items="start",
            width="100%",
            spacing="3"
        ),
        width="100%",
        min_width="400px"
    )

def sankey_panel():
    return glassmorphism_box(
        rx.heading("📉 Traffic Flow (Edge vs Cloud)", size="6", color="white", mb="4"),
        rx.center(
            SankeyChart.create(
                data=State.flow_data,
                width=600,
                height=300,
                nodePadding=50,
                nodeWidth=15
            ),
            width="100%"
        ),
        width="100%"
    )

def telemetry_panel():
    return glassmorphism_box(
        rx.hstack(
            rx.heading("📈 SRE Telemetry Metrics", size="6", color="white"),
            rx.spacer(),
            rx.button(
                "Sync",
                on_click=State.manual_refresh_data,
                size="2",
                bg="gray.700",
                color="white",
                _hover={"bg": "gray.600"}
            ),
            width="100%",
            mb="4"
        ),
        rx.grid(
            # Edge CPU
            rx.vstack(
                rx.text("Edge CPU Core Load", color="gray.400", font_size="sm"),
                rx.hstack(
                    rx.progress(value=State.cpu_load_edge, color_scheme="cyan", width="100px"),
                    rx.text(State.cpu_load_edge, "%", color="cyan.300", font_weight="bold"),
                ),
                align_items="center"
            ),
            # Cloud CPU
            rx.vstack(
                rx.text("Cloud Fallback Load", color="gray.400", font_size="sm"),
                rx.hstack(
                    rx.progress(value=State.cpu_load_cloud, color_scheme="purple", width="100px"),
                    rx.text(State.cpu_load_cloud, "%", color="purple.300", font_weight="bold"),
                ),
                align_items="center"
            ),
            # Bypass Attempts
            rx.vstack(
                rx.text("Ethical Guard Bypass", color="gray.400", font_size="sm"),
                rx.heading(State.bypass_attempts, color="red.400"),
                align_items="center"
            ),
            columns="3",
            spacing="4",
            width="100%",
            mb="4"
        ),
        rx.divider(border_color="gray.700", mb="4"),
        rx.hstack(
            rx.vstack(
                rx.text("Trust Score", color="gray.400", font_size="sm"),
                rx.heading(State.trust_score, color="green.300"),
            ),
            rx.spacer(),
            rx.vstack(
                rx.text("Squeeze Ratio", color="gray.400", font_size="sm"),
                rx.heading(State.squeeze_ratio_pct, "%", color="cyan.300"),
            ),
            rx.spacer(),
            rx.vstack(
                rx.text("Cloud Calls Avoided", color="gray.400", font_size="sm"),
                rx.heading(State.cloud_calls_avoided, color="yellow.300"),
            ),
            width="100%"
        ),
        width="100%"
    )


def index() -> rx.Component:
    """The main view."""
    return rx.box(
        rx.vstack(
            # Header
            rx.hstack(
                rx.heading("Semantic Squeezer", size="8", color="white", weight="bold"),
                rx.text("📉", font_size="3em"),
                rx.spacer(),
                rx.badge("Status: Auditing Active", color_scheme="green", variant="solid", size="2"),
                width="100%",
                padding="24px 48px",
                border_bottom="1px solid rgba(255,255,255,0.1)",
                bg="rgba(0,0,0,0.5)",
                align_items="center",
            ),
            
            # Content
            rx.box(
                rx.grid(
                    rx.vstack(playground_panel(), sankey_panel(), width="100%", spacing="6"),
                    rx.vstack(telemetry_panel(), width="100%", spacing="6"),
                    columns="2",
                    spacing="6",
                    width="100%"
                ),
                padding="48px",
                width="100%",
                max_width="1400px",
                margin="0 auto"
            ),
            
            width="100%",
            min_height="100vh",
            bg="radial-gradient(circle at top left, #1a1a2e, #0f0f1a)",
            font_family="Inter, sans-serif"
        )
    )

app = rx.App(
    theme=rx.theme(appearance="dark", has_background=True, radius="large", accent_color="cyan")
)
app.add_page(index, title="Semantic Squeezer Dashboard")
