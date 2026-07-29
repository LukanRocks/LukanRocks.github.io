---
title: 'Tally'
description: 'Self-hosted board game collection manager and session tracker.'
pubDate: 2026-04-25
tags: ['Self-host', 'Docker', 'React']
featured: true
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/tally'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Overview

Tally is a self-hosted web app for managing a board game collection and tracking
play sessions. Log games, rank players, and follow your group's leaderboard —
all on your own hardware, with every bit of data staying on your machine.

## Features

- Manage your collection with cover images, rulebooks, player count, price, and more.
- Log play sessions and rank players with drag-and-drop.
- Global and per-game leaderboards with points, wins, and win rate.
- Head-to-head comparison between any two players.
- Filter and sort your library by name, player count, owner, or date added.
- Optional BoardGameGeek integration for game name autocomplete.
- Countdown timer, dice roller, and a "Who Goes First" randomizer.
- Light, dark, and system themes.

## Tech Stack

| Layer     | Technology                |
| --------- | ------------------------- |
| Backend   | Node.js + Express         |
| Frontend  | React + Vite              |
| UI        | shadcn/ui + Tailwind CSS  |
| Database  | SQLite via Drizzle ORM    |
| Container | Docker (single container) |

## Deployment

Tally ships as a single Docker container. On first run the SQLite schema is
initialised automatically, and all data — the database file plus uploaded
assets — is persisted in a mounted `/app/data` volume, so the whole collection
lives wherever you choose to host it.
