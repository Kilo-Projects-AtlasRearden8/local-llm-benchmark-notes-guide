# 1. Choosing a Model

There are thousands of models. For a beginner, the choice comes down to one practical question: **will it run on my computer?**

## Size is the first thing to look at

Models are sized by parameters — the internal "knobs" the model adjusts while learning. You will see names like:

- **1B** — 1 billion parameters (tiny, fast, runs on almost anything)
- **3B** — 3 billion parameters (small, good for laptops)
- **8B** — 8 billion parameters (the sweet spot for many home PCs)
- **70B** — 70 billion parameters (needs serious hardware)

Bigger is generally smarter, but bigger also needs more memory and runs slower. For everyday writing, summarizing, and coding help, an 8B or 14B model is often more than enough.

## Look for these beginner-friendly families

| Model family | Typical sizes | Good for | Notes |
|---|---|---|---|
| Llama 3.2 | 1B, 3B | Fast chat on low-end machines | Very beginner-friendly |
| Llama 3.1 | 8B, 70B | Strong general assistant | 8B fits many home PCs |
| Phi-3 / Phi-4 | 3.8B, 14B | Coding and reasoning | Efficient, Microsoft |
| Qwen 2.5 | 1.5B, 7B, 32B | Multilingual, coding | Strong small models |
| Gemma 2 | 2B, 9B, 27B | General use | Google, efficient |
| TinyLlama | 1.1B | Old or weak hardware | Basic, slow, but tiny |

## Where to get models

- **Ollama library** (ollama.com/library) — easiest for Ollama users
- **Hugging Face** (huggingface.co/models) — the biggest public model collection
- **LM Studio** — has a built-in model discoverer with compatibility hints

Start small. Download a 1B or 3B model first, confirm it runs, then move up.

## A caution about "uncensored" models

You will see models advertised as "uncensored" or "unfiltered." They often lack safety training and can produce harmful, biased, or incorrect output. As a beginner, stick to mainstream instruction-tuned models. Treat all model output as a draft, not a fact.

## Your first model: a concrete suggestion

If you have never run a local LLM, try **Llama 3.2 3B** (about 2 GB at 4-bit). It runs on most computers with 8 GB of RAM and answers quickly. If that goes well, try **Llama 3.1 8B** (about 5 GB at 4-bit) if your machine has the memory.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
