# 11. Checklists

Print these or copy them into your notes.

## Before you download

- [ ] I know my computer's total RAM
- [ ] I know whether I have a dedicated GPU and how much VRAM it has
- [ ] I picked a model small enough to fit (use the RAM/VRAM math worksheet)
- [ ] I chose Q4_K_M quantization to start
- [ ] I have enough free disk space (models are 1–40 GB each)

## After setup

- [ ] The model downloads and runs without error
- [ ] I sent a test message and got an answer
- [ ] I checked the speed (tokens per second) and it feels usable
- [ ] I know how to stop/unload the model (`ollama ps`, close the app, etc.)
- [ ] I know where the model files live on my disk

## Privacy check

- [ ] I tested the model while offline (Wi-Fi off) and it still worked
- [ ] I did not paste real passwords, patient records, or secrets
- [ ] I downloaded from a source I trust (Ollama library, Hugging Face, LM Studio catalog)
- [ ] I know how to delete the model and chat history when finished

## Speed check

- [ ] I measured tokens per second with `ollama ps`, LM Studio's readout, or llama.cpp output
- [ ] Speed is above ~1 t/s (usable) — if not, I will try a smaller model or more GPU offload
- [ ] I closed other heavy apps (browser tabs, games) before measuring

## When to switch to cloud

- [ ] My task needs a capability my local model lacks
- [ ] My hardware cannot run even a small model acceptably
- [ ] I am comfortable with the cloud provider's privacy terms for this task

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
