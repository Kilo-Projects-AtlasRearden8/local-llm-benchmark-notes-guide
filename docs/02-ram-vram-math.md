# 2. RAM/VRAM Math — Will It Fit?

This is the section people skip, and then wonder why their computer slows to a crawl. Read it once. It will save you hours.

## The big idea

A model needs to live in memory while it runs. That memory is either:

- **VRAM** — memory on your graphics card (GPU). Fastest. Used by gaming PCs and Macs with unified memory.
- **RAM** — your computer's main memory (CPU). Slower than VRAM, but there is usually more of it.

If the model does not fit, it will either refuse to start, crawl at one token every few seconds, or force your operating system to swap to disk (painfully slow).

## Step 1: Estimate the model's weight size

The weights are the model itself. A rough rule of thumb:

| Precision | Bytes per parameter | What it means |
|---|---|---|
| FP32 | 4 bytes | Full precision; rarely needed locally |
| FP16 / BF16 | 2 bytes | Half precision; good quality |
| INT8 | 1 byte | 8-bit quantization; small quality loss |
| INT4 / 4-bit | 0.5 byte | 4-bit quantization; great for home PCs |

So: **size in GB ≈ parameters × bytes per parameter ÷ 1 billion**

Examples:

- Llama 3.1 8B at 4-bit: 8 × 0.5 = **~4 GB** for weights
- Llama 3.1 8B at 8-bit: 8 × 1 = **~8 GB** for weights
- Llama 3.1 70B at 4-bit: 70 × 0.5 = **~35 GB** for weights
- TinyLlama 1.1B at 4-bit: 1.1 × 0.5 = **~0.55 GB** for weights

## Step 2: Add overhead

Weights are not the whole story. You also need:

- **KV cache** — short-term memory for the current conversation. Grows with context length (how much the model can "remember" at once) and batch size. Roughly 0.5–2 GB for a normal chat.
- **Operating system and other apps** — Windows/macOS/Linux and your browser easily take 2–4 GB.
- **GPU overhead** — if you offload to a graphics card, leave a little headroom so the display keeps working.

A practical rule: **budget model weights + 2–3 GB overhead.**

## Step 3: Compare to what you have

| Your hardware | Comfortable local models |
|---|---|
| 8 GB RAM, no dedicated GPU | 1B–3B models at 4-bit |
| 16 GB RAM, no dedicated GPU | 3B–8B models at 4-bit (CPU, slower) |
| 16 GB RAM, 8 GB VRAM GPU | 7B–14B models at 4-bit |
| 24 GB VRAM GPU (e.g., RTX 3090/4090) | 32B–70B models at 4-bit |
| Mac with 16 GB unified memory | 7B–14B models at 4-bit |
| Mac with 32 GB+ unified memory | 32B–70B models at 4-bit |

## A worked example

You have a laptop with **16 GB RAM** and no separate graphics card. You want to run **Llama 3.1 8B**.

- Weights at 4-bit: ~4 GB
- KV cache + overhead: ~3 GB
- OS and browser: ~4 GB
- Total: ~11 GB

That fits inside 16 GB, so it should run — but expect it to be slow on CPU alone. If you try **Llama 3.1 70B** at 4-bit (~35 GB weights), it will not fit. It will not run on this machine.

## Quick-reference formula

```
weights_GB = parameters_billion × bytes_per_param / 1000
total_GB   = weights_GB + 2  (overhead cushion)
fits?      = total_GB < available_GB
```

If you only remember one thing: **start small, measure what actually fits, and move up only if you have headroom.**

## Monkey wrench: shared memory on Macs and laptops

On Apple Silicon Macs and many laptops, RAM and VRAM are the same pool ("unified memory"). If your Mac has 16 GB unified memory, the model and the operating system share it. Be more conservative than the table suggests — leave 4–6 GB for macOS itself.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
