# 0. Introduction — Why Run LLMs Locally?

Welcome. This manual is written for anyone who has heard about AI, maybe played with a chatbot in a browser, and now wonders: *"Can I run this on my own computer?"*

The short answer is: **yes.** And for many people, running models locally is the better way to start.

This guide assumes nothing. You do not need to be a programmer. You do not need a powerful gaming PC. You do not need to understand machine learning math. If you can download a program and type into a chat box, you can follow along.

## What "local" means

When you use a chatbot on a website, your message travels to a company's server, the server thinks, and an answer comes back. Your words leave your computer.

When you run an LLM locally, the model lives on your machine. It thinks using your computer's processor (CPU) and/or graphics card (GPU). Your messages never leave your house. No account. No monthly fee. No internet required after you download the model once.

## Who this is for

- People curious about AI who want privacy and no subscriptions
- Writers, students, and small-business owners who want a tool they control
- Anyone on a metered or slow internet connection who doesn't want to stream every chat
- Healthcare workers and educators exploring AI safely (educational use only — never medical advice)

## What you will learn

1. How to pick a model that fits your computer's memory
2. The RAM/VRAM math behind the scenes (with worked examples)
3. What quantization means and why it matters
4. How to install and use Ollama, LM Studio, and llama.cpp
5. How to measure speed in tokens per second
6. What stays private and what doesn't
7. When cloud AI still makes sense

Each section is written like a friend explaining it over coffee: plain English, step by step, no condescension.

## A note on tone and accuracy

This guide is produced by Asdale Dynamics, LLC, a small AI education and tools company founded by Dylan Asdale in Indiana in October 2026. Dylan is a registered nurse turned AI author; his book *The Massive AI Manual* and hub site dylanasdale.github.io explain AI "like a friend would."

We aim for clear, warm, tested, local-first content. Hardware and software change fast, so treat the specific model names and numbers here as examples, not permanent recommendations. When in doubt, check the project's own website (ollama.com, lmstudio.ai, github.com/ggerganov/llama.cpp).

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License (see LICENSE). Credit Asdale Dynamics, LLC when sharing or adapting this manual.
