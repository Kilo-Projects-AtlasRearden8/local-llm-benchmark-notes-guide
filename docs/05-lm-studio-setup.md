# 5. LM Studio Setup

LM Studio is a polished desktop app with a visual interface. Good if you prefer clicking over typing commands, or if you want to compare several models side by side.

## Step 1: Install LM Studio

1. Go to **lmstudio.ai** and download the app for Windows, Mac, or Linux.
2. Install and open it.

## Step 2: Download a model

1. Click the **Discover** or search icon in the left sidebar.
2. Search for a model (try `Llama 3.2 3B` or `Phi-3.5 mini`).
3. Pick a version marked **4-bit** or **Q4_K_M** — these fit most home PCs.
4. Click **Download**. Wait for the progress bar.

## Step 3: Start chatting

1. Click **Chat** in the left sidebar.
2. Choose your downloaded model from the model picker at the top.
3. Type a message and press Enter.

## The GPU offload slider

In the chat panel, you will see a slider that decides how much of the model goes to your graphics card (GPU) versus main memory (RAM).

- Move it right = more GPU, faster, uses VRAM
- Move it left = less GPU, uses more system RAM

Start in the middle. If chats are slow, slide right until it speeds up or hits your VRAM limit. If the app crashes, slide left.

## Local server (advanced but useful)

LM Studio can turn your computer into a local API server, so other programs can talk to your model like they talk to a cloud AI — but everything stays on your machine.

1. Click the **Developer** or **Local Server** icon in the sidebar.
2. Load a model and click **Start server**.
3. The server runs at `http://localhost:1234` by default.

This is how you connect local tools, scripts, or MCP servers to your model without using the cloud.

## License and credit

© 2026 Asdale Dynamics, LLC. Released under the MIT License. Credit Asdale Dynamics, LLC when sharing or adapting this manual.
