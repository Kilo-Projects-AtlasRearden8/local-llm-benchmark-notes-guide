# 8. Privacy

Privacy is the main reason people run AI locally. This section explains exactly what stays on your machine and what does not.

## What stays local (the good part)

Once a model is downloaded:

- Your prompts and the model's answers never leave your computer.
- No company sees your writing, your journal entries, your code, or your patient notes (educational use only).
- You can disconnect the internet and the model keeps working.
- You can delete the model and your chat history whenever you want.

## What touches the internet

- **Downloading the model** the first time connects to Ollama, Hugging Face, LM Studio, or wherever you got it. That is one connection, not a continuous one.
- **Checking for updates** to the app itself may phone home. You can turn this off in settings.
- **Cloud features** (if you turn them on) — for example, syncing settings or using a model hosted by the app maker. Do not turn these on if you want full privacy.

## Practical privacy checklist

- [ ] Download models from sources you trust (Ollama library, Hugging Face, LM Studio's built-in catalog)
- [ ] Run offline after downloading: turn off Wi-Fi and confirm chats still work
- [ ] Avoid "uncensored" models from unknown creators — you do not know what is inside them
- [ ] Do not paste real patient records, passwords, or secrets into any model, local or cloud (local reduces risk but does not eliminate mistakes)
- [ ] Delete chat history and models when you are done with a project

## Important limits

Local AI keeps your data on your machine, but it does not make the model trustworthy. Models hallucinate (make things up), reflect bias, and can give wrong answers. Always verify important information yourself.

This guide is educational only. It is not medical advice. If you are a healthcare worker exploring AI, never use it for actual patient decisions without professional oversight.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
