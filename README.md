# LibreChat Static — The Definitive v0.8.4 Edition

A fork of [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4) created to *freeze* this version, preserving its core functionality while introducing minimal enhancements such as Quality of Life improvements and ensuring everything is local.

<p align="center">
  <img src="logo.svg" alt="LibreChat Logo" width="200"/>
</p>

If you want the original, **unmodified version** of LibreChat v0.8.4, check out the [LibreChat-0.8.4-base](https://github.com/Smoffyy/LibreChat-Static/tree/librechat-0.8.4-base) branch.

This project is licensed under the same MIT License as the original LibreChat. By downloading, using, or modifying this project, you agree to the terms of the [original license](https://github.com/Smoffyy/LibreChat-Static/blob/librechat-0.8.4-base/LICENSE) of version v0.8.4.

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

#### Open Source Contributors
- [LibreChat Contributors](https://github.com/danny-avila/LibreChat/graphs/contributors) – 300+ open-source contributors who helped build and maintain the project  


### Whats the Goal?

The goal of the project is to maintain the original [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4), while keep all the original code intact. 

Specifically, this project aims to:

* Keep the original **v0.8.4** of [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4)
* Minimal edits to the code and overall feel of the software
* Archive v0.8.4 of LibreChat for anyone to use.
* Maintain the original MIT License


### Design

This is **not** intended to be a full redesign or overhaul.

The intent is:
* Preserve the **original LibreChat** look and functionality.
* Modernize certain aspects
* Freeze packages and versions
* Add optional improvements

Think of it as:
> Original LibreChat, forked for Longevity and sustainability.

### TL:DR
In short: this branch keeps the **original** functionality of LibreChat, frozen at a certain state for anyone to use no matter what.


## Prerequisites
TBD...

## Docker Installation
For most people, using Docker Desktop is the easiest way of getting LibreChat running. Below is what/how you're going to get Docker Desktop working with LibreChat:

First you need the following:
- [Git](https://git-scm.com/install/)
- [Docker](https://www.docker.com/products/docker-desktop/)


Next, installation:
1. Clone the repository
  ```
  git clone https://github.com/Smoffyy/LibreChat-Static.git
  cd LibreChat-Static
  ```
2. Create the Eviorment File
  ```
  copy .env.example .env
  ```
  > Note this is for windows. This command is different depending on the operating system you're on

3. Mount the librechat.yaml
  ```
  copy docker-compose.override.yml.example docker-compose.override.yml
  ```
  Ensure that inside your docker override it looks like this:
  ```
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
  > This setup is for a **fully local installation**. Docker will pull other required images from the internet.

4. Build the images
  ```
  docker compose build --no-cache
  docker compose up -d
  ```
5. Open LibreChat in browser
  Go to `http://localhost:3080/` and begin chatting!

## Old files/configs

Anytime you'd like to see the original example files, look for files that have `_old` at the end, such as `librechat.example_old.yaml` or `.env.example_old`.