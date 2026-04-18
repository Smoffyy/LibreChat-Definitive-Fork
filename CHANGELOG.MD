# Changelog
All notable changes will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-04-17 — The Definitive v0.8.4 Edition
### ✨ Added
- Qwen3.5, Qwen3.5-397B model context window tokens.


### 🔧 Changed
- Patch dependency updates across all workspaces (`api`, `client`, `packages/*`).
- Wrong link for librechat v0.8.4 in readme.



## [1.0.2] - 2026-04-17 — The Definitive v0.8.4 Edition

### 🔧 Changed
- Patch dependency updates across all workspaces (`api`, `client`, `packages/*`).

### 🐛 Fixed
- Unknown or unsupported file types no longer error out on upload. Non-binary files are now treated as plain text, with `.txt` appended to the original filename (e.g. `test.hx` → `test.hx.txt`) so the AI retains context of the original format. Binary files (image, audio, video) that are unsupported by the active endpoint are still rejected as before.

## [1.0.1] - 2026-04-13 — The Definitive v0.8.4 Edition

### 🔧 Changed
- Patch dependency updates across all workspaces (`api`, `client`, `packages/*`).



## [1.0.0] - 2026-04-12 — The Definitive v0.8.4 Edition

> This release focuses on quality-of-life features, self-hosting improvements, and proper documentation.
> **All changes are opt-in and non-breaking unless noted.**

### ✨ Added
- **Live Thinking Preview** — toggleable setting that shows a semi-opaque box with the last 5 lines of the AI's reasoning as it streams, with a fade-to-invisible gradient at the bottom and a collapse animation when reasoning ends.
- **Streaming Cursor Shape Selector** — dropdown in Chat settings to choose between Circle (default), Square, Square (Blinking), and Triangle cursor shapes while the AI generates a response.
- **Model Selector in Input Bar** — setting to move the endpoint/model selector into the input box.
- **Selectable UI Fonts** — additional fonts available in the UI settings.
- Additional logos not shipped with the original LibreChat.
- More examples in YAML and config files.
- Step-by-step documentation for installing from source and running the backend.

### 🔧 Changed
- Package version renamed to `0.8.4-definitive` — all packages are now pinned and static.
- Removed `README.zh.md`. The final `README.md` will be translated to common languages.
- Removed external links from the UI.
- `rag_api` source added directly to the repo — no longer pulled from an external registry.
- Added `docker/mongodb/Dockerfile` — builds from the official MongoDB apt repo.
- Added `docker/meilisearch/Dockerfile` — builds from GitHub releases binary.
- Added `docker/vectordb/Dockerfile` + `entrypoint.sh` — Postgres 15 + pgvector from the official apt repo.
- Updated `docker-compose.yml` to build all services locally. No external images are pulled at runtime.
- Live Thinking Preview hides automatically when the user expands the Thinking dropdown.
- Cursor shape setting is fully local, stored in `localStorage`, with zero impact on streaming latency.
- Default Circle cursor uses the original unmodified code path — no behavior changes when set to default.

### 🐛 Fixed
- Unknown file upload types now fall back to plain text instead of erroring out.
- Model icon reverted to the default robot icon when the user stopped generation mid-stream. The server never returns `iconURL` on its abort response, it is now restored from the original request snapshot in `finalHandler`.