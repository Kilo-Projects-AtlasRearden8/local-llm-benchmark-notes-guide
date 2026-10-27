# 7. Measuring Speed

Speed matters because it decides whether a local LLM feels useful or frustrating. This section shows what to measure and how.

## What to measure

| Metric | What it means |
|---|---|
| **Tokens per second (t/s)** | How fast the model writes after it starts. Higher is better. Above ~3 t/s feels conversational; below ~1 t/s feels slow. |
| **Time to first token (TTFT)** | How long from pressing Enter until the first character appears. Includes the "thinking" / processing of your prompt. |

A token is roughly a piece of a word — about 0.75 words in English. So 10 t/s ≈ 7–8 words per second.

## How to measure in each tool

**Ollama:**
```bash
ollama ps
```
Lists running models and shows their speed in tokens per second.

**llama.cpp:**
`llama-cli` prints `t/s` at the bottom of its output after generating text.

**LM Studio:**
The chat panel shows a live tokens-per-second readout while a model generates.

## A quick measurement you can run today

With Ollama:

```bash
ollama run llama3.2:3b "Write a 200-word story about a robot learning to garden."
```

Watch the output and note `ollama ps` in another terminal while it generates. Record the t/s.

## What affects speed

1. **Hardware** — GPU (VRAM) is much faster than CPU for models.
2. **Model size** — smaller models generate faster.
3. **Quantization** — 4-bit is faster than 8-bit and FP16 because less data moves per token.
4. **Context length** — very long conversations slow things down (the KV cache grows).
5. **Other apps** — a browser with 50 tabs steals RAM and CPU.

## Realistic expectations

| Setup | Typical speed |
|---|---|
| 3B model, 4-bit, CPU only | 1–4 t/s |
| 8B model, 4-bit, CPU only | 0.5–2 t/s |
| 8B model, 4-bit, GPU offloaded | 5–20+ t/s (depends on GPU) |
| 70B model, 4-bit, high-end GPU | 2–8 t/s |

If you are under ~1 t/s, try a smaller model or more GPU offload. If you are over ~5 t/s, it will feel snappy enough for everyday use.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
