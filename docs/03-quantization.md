# 3. Quantization Explained

You will see names like `Q4_K_M`, `Q8_0`, `FP16`, and `GGUF`. This section explains what they mean, in plain language.

## What quantization means

Imagine a photograph. The original has millions of subtle colors. A compressed JPEG looks almost the same but takes far less space because it throws away detail your eye barely notices.

Quantization does the same thing to a model's numbers (its weights). Instead of storing every weight with high precision, it stores them more coarsely.

- **FP16** (16-bit): high precision, 2 bytes per weight. High quality, large file.
- **INT8** (8-bit): 1 byte per weight. Smaller, tiny quality loss.
- **INT4 / 4-bit**: 0.5 byte per weight. Half the size of FP16, small quality loss, runs on far more computers.

## Why it matters for home PCs

Without quantization, an 8B model needs ~16 GB just for weights (FP16). That rules out most home computers.

At 4-bit, that same 8B model needs ~4 GB. Suddenly it runs on a laptop.

The tradeoff: the more you compress, the more the model's reasoning can dull — especially on hard math, logic, or nuanced writing. For everyday chat, summarization, and coding help, 4-bit is usually indistinguishable.

## GGUF: the file format you will see

Local LLM tools usually use **GGUF** files (a format from the llama.cpp project). A GGUF file bundles the model and its quantization level. You will see filenames like:

- `llama-3.2-3b-instruct-q4_k_m.gguf`
- `llama-3.1-8b-instruct-q8_0.gguf`

The suffix tells you the quantization:

| Suffix | Meaning | Best for |
|---|---|---|
| Q4_K_M | 4-bit, medium quality | Daily use on home PCs (recommended start) |
| Q8_0 | 8-bit | Near-original quality, needs more RAM |
| FP16 | No quantization | Best quality, needs a lot of RAM |

`Q4_K_M` is the default recommendation. Try it first.

## Quantization does not change the model's "size" label

An 8B model quantized to 4-bit still has 8 billion parameters — it just stores them more efficiently. It is not a smaller, dumber model; it is the same model, compressed.

## How to choose

1. Look at what fits your RAM/VRAM (see the previous section).
2. Start with Q4_K_M.
3. If it feels too dim-witted, try Q8_0 — if you have the memory.
4. If Q4_K_M does not fit, try a smaller model (e.g., 3B instead of 8B) before you try a bigger model with heavier quantization.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
