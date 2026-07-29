---
title: 'Quick Hide'
description: 'A VS Code extension for managing files.exclude patterns straight from the Explorer.'
pubDate: 2026-06-12
tags: ['VS Code', 'Extension']
featured: false
links:
  - label: 'GitHub'
    url: 'https://github.com/LukanRocks/vscode-extension-quick-hide'
    icon: 'simple-icons:github'
    variant: 'primary'
toc: 'center'
---

## Overview

Quick Hide is a tiny VS Code extension that adds a **Quick Hide** section to the
Explorer for managing your `files.exclude` patterns — without ever opening
`settings.json`.

## Features

- Lists every pattern from your **user** `files.exclude` settings.
- A checkbox per row: checked means hidden (`true`), unchecked means visible (`false`).
- Add, edit, and remove patterns inline from the view.
- Organise patterns into collapsible **groups** and toggle a whole group at once.
- A group's checkbox is checked only when every pattern in it is hidden.
- Move patterns between groups, or leave them ungrouped.

## Design

The view reads `inspect('files.exclude').globalValue`, so it only ever shows and
edits the patterns you added — never VS Code's built-in defaults like
`**/.git`. All changes are written to your **user** settings, keeping
`files.exclude` a flat object any editor understands. Group definitions live
alongside them in the `quickHide.groups` user setting.
