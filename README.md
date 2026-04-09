# LibreChat Definitive Fork — The Definitive v0.8.4 Edition

A fork of [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4) created to *freeze* this version, preserving its core functionality while introducing minimal enhancements such as Quality of Life improvements and ensuring everything is local and self-contained.

<p align="center">
  <img src="logo.svg" alt="LibreChat Original Logo" width="200"/>
</p>

If you want the original, **unmodified version** of LibreChat v0.8.4, check out the [LibreChat-0.8.4-base](https://github.com/Smoffyy/LibreChat-Static/tree/librechat-0.8.4-base) branch.

This project is licensed under the same MIT License as the original LibreChat. By downloading, using, or modifying this project, you agree to the terms of the [original license](https://github.com/Smoffyy/LibreChat-Static/blob/librechat-0.8.4-base/LICENSE) of version v0.8.4.

> **This is not an overhaul. It is a stable, long-term maintenance fork intended to preserve v0.8.4 exactly as-is.**

---

### Credits / Shoutouts (Original Creators)

#### Original Creator
- [Danny Avila](https://github.com/danny-avila) - Original Creator, Founder, and Lead Maintainer

#### Core Contributors
- [David Avila](https://github.com/david-avila) – Early contributor / collaborator
- [Berry (berry-13)](https://github.com/berry-13) – Core collaborator and contributor
- [Fuegovic](https://github.com/fuegovic) – Contributor and open-source collaborator
- [RubenT (rubentalstra)](https://github.com/rubentalstra) – Contributor

#### Notable Contributors
- [nhtruong](https://github.com/nhtruong) – Contributor
- [AmgadHasan](https://github.com/AmgadHasan) – Contributor
- [austin-barrington](https://github.com/austin-barrington) – Contributor
- [hofq](https://github.com/hofq) – Contributor
- [mawburn](https://github.com/mawburn) – Contributor
- [rba100](https://github.com/rba100) – Contributor
- [sbruel](https://github.com/sbruel) – Contributor
- [leblancfg](https://github.com/leblancfg) – Contributor
- [pnancarrow](https://github.com/pnancarrow) – Contributor
- [ruggishop](https://github.com/ruggishop) – Contributor

#### Additional Contributors
- [jakubmieszczak](https://github.com/jakubmieszczak) – Contributor
- [DenisPalnitsky](https://github.com/DenisPalnitsky) – Contributor
- [nidasfly](https://github.com/nidasfly) – Contributor
- [achhabra2](https://github.com/achhabra2) – Contributor
- [arthurian](https://github.com/arthurian) – Contributor
- [techwithanirudh](https://github.com/techwithanirudh) – Contributor
- [bsu3338](https://github.com/bsu3338) – Contributor
- [pxz2016](https://github.com/pxz2016) – Contributor
- [eshack94](https://github.com/eshack94) – Contributor
- [ventz](https://github.com/ventz) – Contributor
- [derkoe](https://github.com/derkoe) – Contributor
- [btribonde](https://github.com/btribonde) – Contributor

#### Custom Fonts
- [Frank Grießhammer](https://fonts.google.com/?query=Frank+Grie%C3%9Fhammer) - Source Serif 4 open-sourced Font.
- [The Open Sans Project Authors](https://github.com/googlefonts/opensans) - Open Sans open-sourced Font.
- [The B612 Project Authors](https://github.com/polarsys/b612) - B612 open-sourced Font.

#### Open Source Contributors
- [LibreChat Contributors](https://github.com/danny-avila/LibreChat/graphs/contributors) – 300+ open-source contributors who helped build and maintain the project

---

### What's the Goal?

The goal of the project is to maintain the original [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4), while keeping all the original code intact.

Specifically, this project aims to:

- Keep the original **v0.8.4** of LibreChat frozen in time
- Minimal edits to the code and overall feel of the software
- Archive v0.8.4 of LibreChat for anyone to use
- Ensure everything builds **100% from source** — no pulling pre-built images at runtime
- Maintain the original MIT License

---

### Design

This is **not** intended to be a full redesign or overhaul.

The intent is:
- Preserve the **original LibreChat** look and functionality
- Modernize certain aspects
- Freeze packages and versions
- Add optional improvements

Think of it as:
> Original LibreChat, forked for longevity and sustainability.

---

## What's Different From the Original LibreChat

There's nothing different from the Original LibreChat, just a few changes that are Quality of Life features. Other than that, this is strictly the base [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4), meant to be maintained for as long as possible, without the worry of features breaking or losing access.

### Docker wise
The original LibreChat relied on Docker Hub to pull several pre-built images at runtime whenever you ran `docker compose up`. This means your setup depended on those images remaining available on Docker Hub forever — if any of them got deleted, moved, or changed, your installation would break.

This fork changes that by building **every single service from source**, bundled directly inside this repository. Nothing is pulled at runtime.

### What the original LibreChat pulled

When you ran `docker compose up` in the original LibreChat, Docker would reach out to the internet and download:

- `registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest` — the RAG API service
- `mongo:8.0.20` — the MongoDB database
- `getmeili/meilisearch:v1.35.1` — the search engine
- `pgvector/pgvector:0.8.0-pg15-trixie` — the vector database for RAG

This meant your build was only as stable as those external registries.

### What this fork does instead

Every service now has its own Dockerfile bundled inside the `docker/` folder of this repository, and the `rag_api` source code is bundled directly in the `rag_api/` folder. When you run `docker compose build`, Docker builds every image locally from these sources — no external registry is contacted for any of the core services.

The folder structure for the added Dockerfiles is:

```
docker/
  mongodb/
    Dockerfile        ← Installs MongoDB 8.0 from MongoDB's official apt repository
  meilisearch/
    Dockerfile        ← Downloads Meilisearch v1.35.1 binary from GitHub Releases
  vectordb/
    Dockerfile        ← Installs PostgreSQL 15 + pgvector from the official PostgreSQL apt repo
    entrypoint.sh     ← Initializes the database, creates the user, and enables the vector extension
rag_api/              ← Full source code of danny-avila/rag_api, bundled directly
```

Each Dockerfile installs its service from the **official upstream package repository** of that software rather than relying on a pre-built Docker Hub image. This is significantly more resilient — the official MongoDB apt repo, PostgreSQL apt repo, and GitHub Releases are far more permanent than any specific Docker Hub tag.

### Why this matters

If `mongo:8.0.20` disappears from Docker Hub tomorrow, the original LibreChat breaks. With this fork, MongoDB is installed from MongoDB Inc.'s own apt repository inside a standard `debian:bookworm-slim` base image — something that will remain available essentially forever. The same logic applies to every other service.

The only internet access that happens at build time is fetching packages from official package repositories and the `debian:bookworm-slim` base image, which is maintained by Docker itself and is essentially permanent.

---

## Prerequisites (Easiest way to install)

- **[Git](https://git-scm.com/install/)**
- **[Docker](https://www.docker.com/products/docker-desktop/)**

---

## NPM Installation (Dev)

If you prefer using NPM, or are actively developing it, please refer to the [NPMInstallation.md](https://github.com/Smoffyy/LibreChat-Definitive-Fork/blob/dev/setupdocs/NPMInstallation.md) file.

## Docker Installation

For most people, using Docker Desktop is the easiest way to get LibreChat running.

1. Clone the repository
```
git clone https://github.com/Smoffyy/LibreChat-Definitive-Fork
cd LibreChat-Definitive-Fork
```

2. Create the Environment File
```
copy .env.example .env
```
> Note: this command is for Windows. On macOS/Linux use `cp .env.example .env`

3. Mount the librechat.yaml
```
copy docker-compose.override.yml.example docker-compose.override.yml
```

Ensure that inside your docker override it looks like this:
```yaml
services:
  api:
    image: librechat
    build:
      context: .
      target: node
    volumes:
      - type: bind
        source: ./librechat.yaml
        target: /app/librechat.yaml
    depends_on:
      - mongodb
      - meilisearch
```

4. Build the images
```
docker compose build --no-cache
docker compose up -d
```

> This will build all services locally from source. The first build takes several minutes as it compiles LibreChat, installs the RAG API dependencies, and sets up the databases. Subsequent builds are faster due to Docker's layer cache.

5. Open LibreChat in browser

Go to `http://localhost:3080/` and begin chatting!

---

## Data Persistence

Your data persists across restarts automatically. Here is where each service stores its data:

- **MongoDB** (chat history, users) → `./data-node/` folder in the repo root
- **Meilisearch** (search index) → `./meili_data_v1.35.1/` folder in the repo root
- **pgvector** (RAG vector data) → `librechat_pgdata2` Docker named volume

A normal `docker compose down` followed by `docker compose up -d` keeps all data intact. Only `docker compose down -v` (with the `-v` flag) will delete the pgvector named volume. The MongoDB and Meilisearch data folders on disk are never touched by Docker and survive everything.

---

## Old files/configs

Anytime you'd like to see the original example files, look for files that have `_old` at the end, such as `librechat.example_old.yaml` or `.env.example_old`.