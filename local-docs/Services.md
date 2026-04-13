# Services

LibreChat supports two categories of AI services: **pre-configured endpoints** (OpenAI, Anthropic, Google) which are set up via your `.env` file, and **custom endpoints** (Ollama and other third-party providers) which are configured through `librechat.yaml`. This guide covers how to set up and connect each.

---

## Pre-Configured Endpoints

These providers are built into LibreChat and only require adding an API key to your `.env` file.

---

### OpenAI

1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys) and create an account or sign in.
2. Add a payment method, then generate an API key.
3. Set the key in your `.env` file:

```env
OPENAI_API_KEY=your_api_key_here
```

> Set to `user_provided` to let users supply their own key from the frontend instead.

**Optional — restrict available models:**

```env
OPENAI_MODELS=gpt-5,gpt-5-codex,gpt-5-mini,gpt-5-nano,o3-pro,o3,o4-mini,gpt-4.1,gpt-4.1-mini,gpt-4.1-nano,o3-mini,o1-pro,o1,gpt-4o,gpt-4o-mini
```

- If `OPENAI_API_KEY` is set to the actual key and `OPENAI_MODELS` is left commented out, LibreChat will fetch the model list from the API automatically, including any new ones.
- If set to `user_provided`, only models explicitly listed here will appear.

---

### Anthropic (Claude)

1. Create an account at [platform.claude.com](https://platform.claude.com/).
2. Go to [platform.claude.com/settings/keys](https://platform.claude.com/settings/keys) and generate a key.
3. Set it in your `.env` file:

```env
ANTHROPIC_API_KEY=your_api_key_here
```

> Set to `user_provided` to let users supply their own key from the frontend.

**Optional — specify available models:**

```env
ANTHROPIC_MODELS=claude-sonnet-4-6,claude-opus-4-6,claude-opus-4-20250514,claude-sonnet-4-20250514,claude-3-7-sonnet-20250219,claude-3-5-sonnet-20241022,claude-3-5-haiku-20241022,claude-3-opus-20240229,claude-3-sonnet-20240229,claude-3-haiku-20240307
```

---

### Google (Gemini)

Google offers two routes: the **Generative Language API** (simpler, API key only) and **Vertex AI** (more control, requires a service account).

> ⚠️ Free-tier Gemini API usage may have your inputs/outputs used to improve Google's models, accessible to trained reviewers.

#### Option A — Generative Language API (Gemini via AI Studio)

1. Get an API key from [aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey).
2. Add it to your `.env` file:

```env
GOOGLE_KEY=your_api_key_here
```

> Set to `user_provided` to require users to enter it themselves.

**Set the models you want available** (auto-fetch is not supported):

```env
GOOGLE_MODELS=gemini-3.1-pro-preview,gemini-3.1-pro-preview-customtools,gemini-3.1-flash-lite-preview,gemini-2.5-pro,gemini-2.5-flash,gemini-2.5-flash-lite,gemini-2.0-flash,gemini-2.0-flash-lite
```

#### Option B — Vertex AI (Google Cloud)

1. Sign up at [cloud.google.com](https://cloud.google.com/) — new accounts typically receive $300 in free credits.
2. Enable the Vertex AI API from the [Google Cloud Console](https://console.cloud.google.com/vertex-ai).
3. Create a Service Account with at least the **Vertex AI User** role.
4. Under that service account, create a **JSON key**, download it, rename it to `auth.json`, and place it at:

```
/api/data/auth.json
```

5. If using Docker, mount the file in `docker-compose.override.yml`:

```yaml
services:
  api:
    volumes:
      - type: bind
        source: ./api/data/auth.json
        target: /app/api/data/auth.json
```

Alternatively, use the environment variable instead of the file path:

```env
GOOGLE_SERVICE_KEY_FILE=/path/to/auth.json
```

**Set available models:**

```env
GOOGLE_MODELS=gemini-3.1-pro-preview,gemini-3.1-pro-preview-customtools,gemini-3.1-flash-lite-preview,gemini-2.5-pro,gemini-2.5-flash,gemini-2.5-flash-lite,gemini-2.0-flash-001,gemini-2.0-flash-lite-001
```

> You cannot use both Generative Language API and Vertex AI simultaneously — pick one.

---

## Custom Endpoints (librechat.yaml)

Custom endpoints are configured in your `librechat.yaml` file under the `endpoints.custom` key. This is how you connect LibreChat to Ollama and other third-party OpenAI-compatible services.

---

### Ollama (Local Models)

Ollama lets you run models locally on your own machine with no API key or internet required.

#### Step 1 — Install Ollama

Download from [ollama.com](https://ollama.com) and install for your OS.

#### Step 2 — Pull a Model

```bash
ollama pull llama3
```

You can browse available models at [ollama.com/library](https://ollama.com/library). Check model sizes — models that fit in GPU memory will perform best.

#### Step 3 — Verify Ollama is Running

```bash
ollama list
```

Ollama runs on port `11434` by default.

#### Step 4 — Add Ollama to librechat.yaml

Open (or create) your `librechat.yaml` and add the following under `endpoints`:

```yaml
endpoints:
  custom:
    - name: "Ollama"
      apiKey: "ollama"
      baseURL: "http://localhost:11434/v1/"
      models:
        default:
          - "llama3"
          - "mistral"
          - "codellama"
        fetch: true
      titleConvo: true
      titleModel: "current_model"
      summarize: false
      summaryModel: "current_model"
      modelDisplayLabel: "Ollama"
```

> **Running LibreChat in Docker?** Replace `localhost` with `host.docker.internal`:
> ```yaml
> baseURL: "http://host.docker.internal:11434/v1/"
> ```

> `fetch: true` automatically pulls the available model list from Ollama — this only works when the endpoint name starts with `ollama` (case-insensitive).

#### Notes

- `titleModel: "current_model"` is recommended to avoid loading more than one model per conversation.
- The `apiKey` field is required by LibreChat's config schema but is not validated by Ollama — the value `"ollama"` is conventional.
- If you run into a connection error, verify Ollama is running (`ollama list`) and that the `baseURL` matches your setup.

---

## Quick Reference

| Provider | Config Location | Key Variable |
|---|---|---|
| OpenAI | `.env` | `OPENAI_API_KEY` |
| Anthropic | `.env` | `ANTHROPIC_API_KEY` |
| Google (AI Studio) | `.env` | `GOOGLE_KEY` |
| Google (Vertex AI) | `.env` + `auth.json` | `GOOGLE_SERVICE_KEY_FILE` |
| Ollama | `librechat.yaml` | `apiKey: "ollama"` (placeholder) |

---

## Troubleshooting

**OpenAI / Anthropic key not working**
Double-check the key is copied correctly and that there are no leading/trailing spaces in `.env`. Restart LibreChat after any `.env` change.

**Ollama models not showing up**
Make sure `fetch: true` is set and the endpoint name starts with `ollama`. If using Docker, use `host.docker.internal` instead of `localhost` in `baseURL`.

**Ollama model won't stop generating**
Add stop sequences for specific models via `addParams` in `librechat.yaml`, or set them per-conversation from the frontend parameters panel.

**Google 401 / auth errors**
Confirm `auth.json` is in `/api/data/` (or correctly referenced via `GOOGLE_SERVICE_KEY_FILE`) and that the service account has the **Vertex AI User** role assigned.