# 10. Worked Examples

Three realistic setups. Follow the one that matches your computer.

## Example A: MacBook Air, M2, 8 GB RAM

This is a common, modest machine. Unified memory means the model and macOS share 8 GB.

- **Model:** Llama 3.2 3B at 4-bit (~2 GB weights + overhead)
- **Tool:** Ollama
- **Command:** `ollama run llama3.2:3b`
- **Expected speed:** 3–6 t/s
- **Fits?** Yes, comfortably. Leave other heavy apps closed while chatting.

If you want to try bigger, `llama3.2:1b` is even faster and lighter.

## Example B: Windows gaming PC, RTX 3060, 12 GB VRAM, 32 GB RAM

Strong graphics card, plenty of memory.

- **Model:** Llama 3.1 8B at 4-bit Q4_K_M (~4–5 GB weights)
- **Tool:** LM Studio or Ollama
- **LM Studio:** download the model, set GPU offload slider high (most layers to GPU)
- **Expected speed:** 10–20 t/s
- **Fits?** Yes, easily. You could even try a 14B or a quantized 32B.

With 12 GB VRAM you have headroom. Try Q8_0 (8-bit) if you want higher quality and it still fits.

## Example C: Old laptop, 16 GB RAM, no dedicated GPU

No graphics card means the CPU does all the work. Expect slower speeds.

- **Model:** TinyLlama 1.1B or Phi-3.5 mini 3.8B at 4-bit
- **Tool:** Ollama (`ollama run tinyllama` or `ollama run phi3.5`)
- **Expected speed:** 1–3 t/s
- **Fits?** Yes. Keep context short (fewer previous messages) so the KV cache stays small.

If it feels too slow, `llama3.2:1b` is the lightest practical option.

## Worksheet for your own computer

Fill this in before downloading:

1. Total RAM: ______ GB
2. Dedicated VRAM (if any): ______ GB, or "none / shared"
3. Model you want: ______ (size in B)
4. Quantization: Q4_K_M (recommended start)
5. Weight size: params × 0.5 = ______ GB
6. Plus overhead: + 2–3 GB = ______ GB total
7. Does total fit in your RAM/VRAM? Yes / No

If No: pick a smaller model or heavier quantization, then redo the math.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
