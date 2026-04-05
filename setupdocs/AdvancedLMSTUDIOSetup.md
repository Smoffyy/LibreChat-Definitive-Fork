# Advanced setup with LM-Studio

If you're already at this page, I'm guessing you know how to setup LM-Studio and everything, you have already read the LocalServicesSetup.md. 

This is the setup *I* personally use, and you can adapt to your liking. Theres multiple different things you can do, but I'll start with the basics on how to make your UI look cleaner and nicer, without having all these other providers. *These edits will remove all providers besides LM-Studio*.

As of now, you're probably a developer or an experienced user who has already read the `librechat.yaml` and all the config types. We're going to be utilizing them now!


#### 1. Edit librechat.yaml againn
First, we're going to disable everything but out LM-Studio instance in the UI. We need to edit `librechat.yaml` to do this.

Open up `librechat.yaml` and locate the `inference:` code. It should already look something like this:

```yaml
# Custom interface configuration
interface:
  customWelcome: 'Welcome to LibreChat! Enjoy your experience.'
  # Enable/disable file search as a chatarea selection (default: true)
  # Note: This setting does not disable the Agents File Search Capability.
  # To disable the Agents Capability, see the Agents Endpoint configuration instead.
  fileSearch: true

  modelSelect: true
  parameters: true
  presets: true
  prompts:
    use: true
    create: true
    share: false
    public: false
  bookmarks: true
  multiConvo: true
  agents:
    use: true
    create: true
    share: false
    public: false
  peoplePicker:
    users: true
    groups: true
    roles: true
  marketplace:
    use: false
  fileCitations: true
```

We need to disable the default model picker. Set `modelSelect` to `false`. This prevents LibreChat from automatically loading other configured endpoints (like OpenAI or Anthropic) into the dropdown, ensuring only our custom models appear later in this guide.

```yaml
interface:
  # ... (keep your welcome message and other settings)
  
  modelSelect: false  # <--- CRITICAL: Hides default provider list
  
  parameters: true
  sidePanel: true
  presets: true
  prompts:
    use: true
    create: true
    share: false
    public: false
  bookmarks: true
  multiConvo: true
  agents:
    use: true
    create: true
    share: false
    public: false
  peoplePicker:
    users: true
    groups: true
    roles: true
  marketplace:
    use: false
  fileCitations: true
```

#### 2. Define and Enforce Custom Models (`modelSpecs`)

Now that we've disabled the default model picker, we need to force LibreChat to use only the models you want. We do this by editing the `modelSpecs` section in `librechat.yaml`. 

By default, this section is commented out. You will need to **uncomment** it and fill in your details.

```yaml
# modelSpecs:  # <--- Uncomment this block
#   enforce: true      # Forces only these models to appear (hides others)
#   prioritize: true   # Puts these models at the top of the list
#   list:              # Your custom model definitions go here
```

Here is how you structure a single model entry. You can copy this block for every model you want to add:

```yaml
- name: "Qwen 3.5"
  label: "Qwen 3.5"
  description: "Latest multimodal model, best for deep reasoning and coding."
  iconURL: "http://192.168.X.XXXX:3080/assets/qwen3-color.svg" # <--- Use a public URL or local IP
  #group: "Current Generation" # Optional: Groups models together visually
  preset:
    endpoint: "lm-studio"      # Must match your LM-Studio endpoint name
    model: "qwen3.5-9b"        # The exact model ID in LM-Studio
    maxContextTokens: 100000   # Adjust based on your model's actual limit
```

**Key Fields Explained:**

*   **`name`:** An internal identifier (can be anything, but keep it unique).
*   **`label`:** The text the user sees in the dropdown menu.
*   **`description`:** A tooltip or short description shown when hovering over the model name.
*   **`iconURL`:** The image displayed next to the model. 
    *   *Note:* If you use a local IP (like `192.168...`), ensure your server is accessible from the browser. For public sharing, use HTTPS URLs hosted on GitHub or similar.
*   **`preset.endpoint`:** Must match exactly what you defined in your `endpoints.custom` section (usually `"lm-studio"`).
*   **`preset.model`:** The specific model name inside LM-Studio (e.g., `qwen3.5-9b`).

**Example: Organizing Models with Groups**

You can organize models into collapsible sections using the `group` field. This helps keep your list tidy if you have many models.

```yaml
# Example of grouping older versions together
- name: "Qwen 2.5 VL"
  label: "Qwen 2.5 VL"
  description: "Vision-language model for image and text tasks."
  group: "Previous Generation(s)" # Creates a collapsible section header
  iconURL: "http://192.168.X.XXXX:3080/assets/qwen-color.svg"
  preset:
    endpoint: "lm-studio"
    model: "qwen2.5-vl-7b-instruct"

# Example of a standalone model (no group)
- name: "Qwen 3"
  label: "Qwen 3"
  description: "Third-gen open-weight general LLM."
  # No 'group' field defined - appears at the top level
  preset:
    endpoint: "lm-studio"
    model: "qwen3-8b"
```

Once you have added your models, save `librechat.yaml` and restart LibreChat. The UI should now only show your LM-Studio models in the dropdown!