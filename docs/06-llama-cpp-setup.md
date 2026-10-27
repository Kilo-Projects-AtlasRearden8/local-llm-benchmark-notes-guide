# 6. llama.cpp Setup

llama.cpp is the engine under the hood of many local LLM tools. It is written in C++, fast, and runs on almost any hardware. Using it directly is for people who want maximum control — or who want to understand what Ollama and LM Studio are doing behind the scenes.

## What you need

- A computer with a C compiler (gcc, clang, or MSVC)
- Git (to download the source)
- A GGUF model file (see the Quantization section)

## Step 1: Download the source

```bash
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
```

## Step 2: Build it

On Mac or Linux:

```bash
make llama-cli
```

On Windows, use Visual Studio or follow the build instructions in the repo's README. The build produces `llama-cli` (a chat program) and `llama-server` (a local API server).

If you have an NVIDIA GPU, rebuild with CUDA support for speed:

```bash
make llama-cli LLAMA_CUDA=1
```

(This requires the NVIDIA CUDA toolkit installed.)

## Step 3: Run a model

Download a GGUF model (from Hugging Face or Ollama's library), then:

```bash
./llama-cli -m models/llama-3.2-3b-instruct-q4_k_m.gguf -p "Hello, who are you?"
```

Useful flags:

| Flag | Meaning |
|---|---|
| `-m` | Path to the GGUF model file |
| `-p` | Prompt to start with |
| `-c` | Context length (default 512; raise for longer conversations) |
| `-n` | Number of tokens to generate |
| `-t` | Number of CPU threads |

The program prints tokens per second at the end — that is your speed measurement (see the next section).

## Step 4: Run a local server

```bash
./llama-server -m models/llama-3.2-3b-instruct-q4_k_m.gguf --host 127.0.0.1 --port 8080
```

Now other programs can send requests to `http://127.0.0.1:8080`, just like a cloud API, but everything runs locally.

## Where llama.cpp fits

- **Ollama** uses llama.cpp under the hood on many platforms.
- **LM Studio** uses llama.cpp-compatible engines.
- Using llama.cpp directly gives you the most control but the least hand-holding. Start with Ollama or LM Studio; come here when you want to squeeze out performance or run a server.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
