---
title: 'ExcaliHome'
description: 'Self-hosted Excalidraw board manager for your own hardware.'
pubDate: 2026-07-10
tags: ['Self-host', 'Docker', 'Excalidraw']
featured: true
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/excalihome'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Overview

ExcaliHome is a self-hosted manager for [Excalidraw](https://excalidraw.com/)
boards. It wraps the Excalidraw canvas in a small app that lets you create and
organise your drawings on your own hardware, with every board persisted locally.

## Features

- Create and organise Excalidraw boards from a single interface.
- Full Excalidraw canvas embedded in the app.
- Local persistence — boards live in your own database, not a third-party cloud.
- Runs as one Docker container for easy homelab deployment.

## Tech Stack

| Layer     | Technology                |
| --------- | ------------------------- |
| Backend   | Node.js + Express         |
| Frontend  | React + Vite + Excalidraw |
| UI        | Tailwind CSS              |
| Database  | SQLite via Drizzle ORM    |
| Container | Docker (single container) |

## Deployment

ExcaliHome runs from a single Docker image published to GHCR. The schema is
initialised on first run and all boards are stored in the mounted `/app/data`
volume. Built for the homelabbing community — no external services required.
