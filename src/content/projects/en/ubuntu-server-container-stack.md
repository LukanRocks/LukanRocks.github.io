---
title: 'Ubuntu Home Server'
description: 'Docker Compose stack and documentation for a self-hosted Ubuntu home server.'
pubDate: 2025-01-06
tags: ['Self-host', 'Docker', 'Home Lab']
featured: false
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/ubuntu-server-container-stack'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Overview

This project documents the Docker Compose stack that runs my Ubuntu home server.
It collects the compose definitions, secret-management conventions, and backup
setup I use to keep a small fleet of self-hosted services running and recoverable.

## Highlights

- Docker Compose as the single source of truth for every service.
- Docker secrets locked down to the `root` user (`chmod 600`) for credentials.
- Per-service backups via Duplicati, pushed over FTP to a local TrueNAS Scale box.
- A reusable Duplicati config template to add new folders and passwords quickly.
- VS Code Remote-SSH workflow, including Material Icon markers for backed-up folders.

## Notes

The repo doubles as living documentation — a reference for how the machine is
set up so services can be rebuilt or restored without relying on memory.
