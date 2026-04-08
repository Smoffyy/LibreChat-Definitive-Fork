# NPM Installation (Dev)

If you prefer using **NPM** or are actively developing LibreChat, this guide will walk you through building and running the application locally.

## Prerequisites

Before beginning, ensure your system has the following installed:

*   **Node.js**: Version `20.19.0+`, `^22.12.0`, or `>= 23.0.0`.
    *   *Download Link:* [nodejs.org](https://nodejs.org/en/download)
    *   *Note:* LibreChat relies on the **CommonJS (CJS)** module system and requires these specific Node.js versions for compatibility with `openid-client v6`.
*   **Git**: For cloning the repository.
    *   *Download Link:* [git-scm.com](https://git-scm.com/download/)
*   **MongoDB Community Server**
    *   *Download Link:* [MongoDB Community Server](https://www.mongodb.com/try/download/community)

> **Note:** This guide assumes you have already cloned the repository and completed your initial configuration steps. If not, please refer to the standard setup instructions before proceeding.

---

## Step 1: Install and Configure MongoDB

### 1. Launch the Installer
Run the `MongoDB Community Server` installer you downloaded earlier. When prompted, click **Complete Setup**.

![alt text](image-10.png)

You will see a window similar to this:

![alt text](image-11.png)

While you can customize various settings, for a standard development setup, only modify the **Data Directory** and **Log Directory**. Ensure the following options remain selected:
*   [x] Install MongoDB as a Service
*   [x] Run service as Network Service user

For my specific setup, I created a folder named `MongoDB` containing subfolders for data and logs. Configure your paths accordingly (see screenshot below):

![alt text](image-12.png)

### 2. Add a Connection (GUI Method)
*Note: This section covers the MongoDB GUI installed by the installer. If you are not using the GUI, please use command-line tools to configure the connection.*

Click the **Add** icon in the MongoDB Compass or Atlas interface:

![alt text](image-13.png)

Once the new connection window opens:

![alt text](image-14.png)

Keep all default settings and click **Save & Connect**.

### 3. Verify Service Status
If you encounter issues with MongoDB, you may need to restart the service manually. Press `Win + R`, type `services.msc`, and ensure the MongoDB service is running:

![alt text](image-15.png)

*   If it is stopped, click **Start**.
*   If anything appears incorrect, you can fully restart the service via this window or by restarting your computer.

---

## Step 2: Development Setup

Once MongoDB is configured and running, proceed with the development installation in the following order within your terminal:

### 1. Clean Install
Perform a clean install to ensure no previous build artifacts interfere:
```bash
npm ci
```

### 2. Build Frontend
Compile the frontend assets required for the backend to serve them correctly:
```bash
npm run frontend
```

### 3. Start Development Servers
Once the frontend build completes, open **two separate terminals** and execute the following commands in each (one command per terminal):

**Terminal 1:**
```bash
npm run backend:dev
```

**Terminal 2:**
```bash
npm run frontend:dev
```

### Final Access
Open your web browser and navigate to:
```text
http://localhost:3090
```

---

## Troubleshooting

*   **MongoDB Service Issues**: If the service fails to start or stops unexpectedly, use `services.msc` (as detailed in Step 1) to restart it.
*   **Build Errors**: Ensure your Node.js version matches the requirements listed in the Prerequisites section exactly.