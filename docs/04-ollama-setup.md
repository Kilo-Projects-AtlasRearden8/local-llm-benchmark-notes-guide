# 4. Ollama Setup

Ollama is the friendliest way to run local LLMs. One download, one command, and you are chatting with a model on your own machine.

## Step 1: Install Ollama

1. Go to **ollama.com** and download the installer for Windows, Mac, or Linux.
2. Run the installer and follow the prompts.
3. Open a terminal (Command Prompt or PowerShell on Windows, Terminal on Mac/Linux).
4. Confirm it installed: `ollama --version`

## Step 2: Run your first model

```bash
ollama run llama3.2:1b
```

The first time, Ollama downloads the model (~1–2 GB). After that it runs offline. Type a message and press Enter. Type `/bye` to exit, or just close the window.

## Step 3: Try a bigger model

```bash
ollama pull llama3.2:3b
ollama run llama3.2:3b
```

`pull` downloads without starting the chat. Useful if you want to queue up models.

## Useful commands

| Command | What it does |
|---|---|
| `ollama list` | Shows downloaded models |
| `ollama ps` | Shows models currently running (and their speed) |
| `ollama pull <name>` | Download a model |
| `ollama rm <name>` | Delete a model to free space |
| `ollama run <name>` | Start chatting with a model |

## Custom models with a Modelfile

You can tweak a model's behavior without programming. Create a file named `Modelfile`:

```
FROM llama3.2:3b
SYSTEM You are a helpful, concise writing assistant. Answer in plain English.
```

Then create and run it:

```bash
ollama create my-assistant -f Modelfile
ollama run my-assistant
```

## Where models are stored

Ollama keeps models in `~/.ollama/models` (Mac/Linux) or `%USERPROFILE%\.ollama\models` (Windows). These files can be several gigabytes each — keep an eye on disk space.

## Privacy note with Ollama

Models you download are stored locally. Ollama does not send your chats to its servers just because you use the app. However, downloading a model does connect to Ollama's servers once. If you are offline after the download, nothing leaves your machine.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
