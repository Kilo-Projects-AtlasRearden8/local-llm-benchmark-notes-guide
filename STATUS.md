# STATUS

## What was built

A beginner manual for choosing and running local LLMs on a home PC, produced for Asdale Dynamics, LLC (Indiana, formed October 2026) by Dylan Asdale.

**`docs/` — Markdown manual (12 sections):**
- 00-introduction.md — why run LLMs locally, who this is for
- 01-choosing-a-model.md — model families, sizes, where to get them
- 02-ram-vram-math.md — weight-size estimation, overhead, fit rules, worked example
- 03-quantization.md — FP16/INT8/INT4, GGUF suffixes, how to choose
- 04-ollama-setup.md — install, first model, commands, Modelfile
- 05-lm-studio-setup.md — install, download, GPU offload slider, local server
- 06-llama-cpp.md — build from source, run, local server, CUDA
- 07-measuring-speed.md — tokens/sec, TTFT, per-tool measurement, expectations table
- 08-privacy.md — what stays local, what touches internet, privacy checklist
- 09-cloud-vs-local.md — when to use each, cost comparison
- 10-worked-examples.md — MacBook Air M2 8 GB, RTX 3060 PC, old laptop 16 GB, worksheet
- 11-checklists.md — before download, after setup, privacy, speed

**`static-site/` — polished offline-friendly HTML version:**
- index.html — all 12 sections, internal nav, table of contents
- assets/style.css — responsive CSS
- assets/app.js — RAM/VRAM calculator (model size × quantization + overhead vs. available memory)

**Root files:**
- LICENSE — MIT, copyright line exactly `Copyright (c) 2026 Asdale Dynamics, LLC`
- README.md — manual overview, credits Asdale Dynamics, LLC

## How to run it

- Read the Markdown manual: open any file in `docs/` (e.g. `docs/00-introduction.md`) in a text editor or Markdown viewer.
- View the static site: open `static-site/index.html` in any browser, or serve it locally:
  ```
  cd static-site && python3 -m http.server 8000
  # then open http://localhost:8000
  ```
- Use the calculator: open `static-site/index.html`, scroll to the RAM/VRAM Calculator section, enter model size, quantization, and available memory.

## Verification results

- HTML structure: balanced open/close tags (verified with Python HTMLParser); all 13 internal `#` anchors resolve to 19 section ids; no dangling links.
- Assets: `index.html`, `assets/style.css`, `assets/app.js` all served and fetched successfully over HTTP (200 OK).
- Calculator logic (Node simulation):
  - 8B Q4, 16 GB → "Fits with room to spare" (weights 4.00 GB)
  - 70B Q4, 16 GB → "Probably too large" (weights 35.00 GB)
  - 70B Q4, 64 GB → fits
  - 3B Q4, 8 GB → fits (weights 1.50 GB)
- LICENSE: contains exact line `Copyright (c) 2026 Asdale Dynamics, LLC`.
- README: contains "Asdale Dynamics, LLC" credit.
- Git: initialized, all files staged and committed as `6588466` under existing identity (Dylan Asdale / dylanasdale@users.noreply.github.com). No co-author trailers. No push, no remote created.

No test framework was configured for this repo; verification was done via the HTML parser check, asset fetch check, and calculator logic simulation above.

## Known gaps

- No automated test suite or linter configured (no package.json / Makefile / test scripts present). Manual verification performed instead.
- Static site is a single HTML file; no build step or minification.
- Model names/sizes are illustrative; hardware and software change quickly — users should check ollama.com, lmstudio.ai, and github.com/ggerganov/llama.cpp for current details.
- Calculator is an estimate (adds a fixed 2.5 GB overhead cushion); actual fit depends on OS, apps, and context length.
- No `.github/workflows` files added (per instructions).
- No secrets, API keys, or personal data in any file.
