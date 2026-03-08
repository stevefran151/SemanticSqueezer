# Semantic Squeezer 🍋📉

**Hybrid-Edge AI Inference & Asynchronous Ethical Auditing Dashboard**

Semantic Squeezer is a Proof-of-Concept system that implements a highly optimized **Edge → Cloud → Audit AI architecture**. It intelligently routes AI queries to either a fast, local edge model or a complex, scalable cloud fallback provider dynamically, reducing expensive cloud latency while maximizing hardware ROI. 

This repository contains the `Squeezer UI`, a sleek real-time Site Reliability Engineering (SRE) monitoring dashboard and inference playground built on top of [Reflex](https://reflex.dev/) (Pure Python UI).

---

## 🌟 Key Philosophy

1. **Local Inference First (The Squeeze):** Route short or simplistic prompts to local hardware (like lightweight OpenVINO instances or NPU runtime models) targeting a **< 15ms response time**. 
2. **Dynamic Fallback:** Automatically hand off heavy, deeply contextual tasks (or long inputs) over to your centralized Cloud Orchestrators (LiteLLM/FastAPI connected to GPT/Gemini).
3. **Asynchronous Trust Checks:** Pass LLM outputs asynchronously through a Sidecar Evaluation layer (RAGAS Metrics) checking for *Faithfulness*, *Relevance*, and *Malicious Overrides* before allowing data back fully into the main pipeline. 

---

## 📸 Dashboard Features

- **🌐 The Playground:** A live inference engine testing ground tracking token squeezes, deterministic latency hashes, and simulated output generation.
- **🛡️ Asynchronous Trust Guard:** Real-time gauges indicating the simulated evaluation score and prompt instruction bypass attempts. 
- **📈 SRE Telemetry Metrics:** Track granular infrastructure statistics on demand, including simulated local CPU loads, inference flow changes, and token budgets. 
- **💰 Real-Time ROI Ticker:** View instant visualizations of your **Squeeze Ratio**, cloud calls avoided, and total cost savings driven dynamically by application use.

---

## 🛠️ Built With

- **UI Framework:** [Reflex](https://reflex.dev/) (Python 3.13)
- **Design Aesthetic:** High-contrast Dark Mode with Glassmorphism
- **Charting Tools:** Recharts (Embedded)
- **Proposed Architecture Stack:** 
  - Rust + Axum (Edge Gateway)
  - PyBreaker & Token buckets (Rate Limiting)
  - Qdrant Vector DB (Semantic Caching)

---

## 🚀 Quickstart

1. Clone the repository and navigate to the UI directory:
   ```bash
   git clone https://github.com/your-username/semantic_squeezer.git
   cd semantic_squeezer/ui
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\Activate.ps1
   # MacOS / Linux
   source venv/bin/activate
   
   pip install -r requirements.txt
   pip install psutil
   ```

3. Launch the Reflex Interface:
   ```bash
   reflex run
   ```

4. Check your Localhost!
   ```text
   http://localhost:3000
   ```

---

## 📌 Architecture Goals

We aim to prove that Edge → Cloud proxy handling can successfully:
* Divert **> 50%** of general prompt queries strictly to edge/local inferencing.
* Quantitatively reduce Cloud API spending by **40 - 60%**.
* Post-Audit inference responses without blocking standard Edge response times.
