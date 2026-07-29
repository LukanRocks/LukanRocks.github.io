---
title: 'Stack'
description: 'How I set up a new Mac: defaults, apps, and tools.'
layout: 'page'
toc: false
---

I have been a Mac user for a long time now and during this process I've polished my setup and workflow countless times to improve my relationship with my computer.

Here I have everything that's earned a permanent spot on my Mac in order of installation when setting up a brand new machine, plus a few I'm still trying out in the end. I update this whenever something new sticks or gets replaced.

<details>
<summary>Not an app but a Dock tweak</summary>

The default auto-hide delay is unbearably slow, but luckily there is a way around it by running the following commands on the terminal app:

> [!WARNING]
> Don't go around running commands on your terminal from random people on the internet. These are safe but do your research too before running them on your machine.

```sh
defaults write com.apple.dock autohide-delay -float 0
defaults write com.apple.dock autohide-time-modifier -float 0
killall Dock
```

The first two commands set the hide and reveal animation time to zero, and the last one restarts the Dock process so the change takes effect immediately.

Feel free to try other float values like 0.1 or 0.25 and see what looks best for you.

And in the case you want to revert back to normal, you can run:

```sh
defaults delete com.apple.dock autohide-delay
defaults delete com.apple.dock autohide-time-modifier
killall Dock
```

> [!NOTE]
> I'm a weirdo who doesn't like the dock at the bottom of the screen. So usually, after this change, I also move the dock to the right.

</details>

# Apps

::::tabs
:::tab{title="Must Haves"}

These are the basic ones I wish were default features on macOS.

|                                      | Name                                                             | What it's for                               | Status     | Download                                                   |
| :----------------------------------: | ---------------------------------------------------------------- | ------------------------------------------- | ---------- | ---------------------------------------------------------- |
|     ![](/img/stack/homebrew.svg)     | [Homebrew](https://brew.sh/)                                     | Package manager that works great on macOS   | Active     |                                                            |
|      ![](/img/stack/alfred.png)      | [Alfred 5](https://www.alfredapp.com/)                           | Spotlight replacement with custom workflows | Active     |                                                            |
| ![](/img/stack/markdown-preview.png) | [Markdown Preview](https://github.com/pluk-inc/markdown-preview) | Quick Look preview for markdown files       | Active     | [Homebrew](https://formulae.brew.sh/cask/markdown-preview) |
|  ![](/img/stack/rectangle-pro.png)   | [Rectangle Pro](https://rectangleapp.com/pro)                    | Keyboard-driven window snapping and tiling  | Active     | [Homebrew](https://formulae.brew.sh/cask/rectangle-pro)    |
|    ![](/img/stack/istherenet.png)    | [IsThereNet](https://github.com/FuzzyIdeas/IsThereNet)           | A light strip that flags when Wi-Fi drops   | Active     | [Homebrew](https://formulae.brew.sh/cask/istherenet)       |
|     ![](/img/stack/supercmd.png)     | [SuperCmd](https://supercmd.sh/)                                 | Alfred and Rectangle alternative, maybe?    | Trying Out | [Homebrew]()                                               |

:::

:::tab{title="Productivity"}

|                                      | Name                                                | What it's for                                | Status     | Download                                                    |
| :----------------------------------: | --------------------------------------------------- | -------------------------------------------- | ---------- | ----------------------------------------------------------- |
|       ![](/img/stack/zen.png)        | [Zen Browser](https://zen-browser.app/)             | My open-source Arc replacement               | Active     | [Homebrew](https://formulae.brew.sh/cask/zen)               |
|      ![](/img/stack/claude.png)      | [Claude](https://claude.ai/download)                | Desktop app for everyday questions and chats | Active     | [Homebrew](https://formulae.brew.sh/cask/claude)            |
|     ![](/img/stack/clickup.png)      | [ClickUp](https://clickup.com/)                     | Where I track tasks and projects             | Active     | [Homebrew](https://formulae.brew.sh/cask/clickup)           |
| ![](/img/stack/notion-calendar.webp) | [Notion Calendar](https://calendar.notion.so/)      | Great calendar app with menu bar countdown   | Active     | [Homebrew](https://formulae.brew.sh/cask/notion-calendar)   |
|    ![](/img/stack/1password.png)     | [1Password](https://1password.com/)                 | Passwords and secure keys, everywhere        | Active     | [Homebrew](https://formulae.brew.sh/cask/1password#default) |
|     ![](/img/stack/tolaria.png)      | [Tolaria](https://github.com/refactoringhq/tolaria) | My personal knowledge base                   | Trying Out | [Homebrew](https://formulae.brew.sh/cask/tolaria)           |
|     ![](/img/stack/antinote.png)     | [Antinote](https://antinote.io/)                    | A fast scratchpad for notes and quick math   | Trying Out |

:::

:::tab{title="Development"}

|                                    | Name                                                       | What it's for                                    | Status | Download                                                     |
| :--------------------------------: | ---------------------------------------------------------- | ------------------------------------------------ | ------ | ------------------------------------------------------------ |
|  ![](/img/stack/claude-code.png)   | [Claude Code](https://claude.com/claude-code)              | Terminal coding agent                            | Active | [Homebrew](https://formulae.brew.sh/cask/claude-code)        |
|                                    | [Fira Code](https://github.com/tonsky/FiraCode)            | Monospaced coding font with ligatures            | Active | [Homebrew](https://formulae.brew.sh/cask/font-fira-code)     |
|     ![](/img/stack/vscode.png)     | [VS Code](https://code.visualstudio.com/)                  | Editor for everything Claude Code doesn't handle | Active | [Homebrew](https://formulae.brew.sh/cask/visual-studio-code) |
| ![](/img/stack/github-desktop.svg) | [GitHub Desktop](https://desktop.github.com/)              | A GUI for git when I'd rather click              | Active | [Homebrew](https://formulae.brew.sh/cask/github)             |
|   ![](/img/stack/github-cli.svg)   | [GitHub CLI](https://cli.github.com/)                      | PRs and issues without leaving the terminal      | Active | [Homebrew](https://formulae.brew.sh/formula/gh)              |
| ![](/img/stack/1password-cli.png)  | [1Password CLI](https://developer.1password.com/docs/cli/) | SSH keys and env variables one Touch ID away     | Active | [Homebrew](https://formulae.brew.sh/cask/1password)          |
|     ![](/img/stack/nodejs.png)     | [Node.js](https://nodejs.org/)                             | JS runtime behind all my tooling                 | Active | [Homebrew](https://formulae.brew.sh/formula/node)            |
|     ![](/img/stack/bruno.png)      | [Bruno](https://www.usebruno.com/)                         | Git-friendly, open-source API client             | Active | [Homebrew](https://formulae.brew.sh/cask/bruno)              |
|     ![](/img/stack/xcode.png)      | [Xcode](https://developer.apple.com/xcode/)                | Only here to build for iOS/macOS                 | Active |                                                              |

:::

:::tab{title="Documents"}

|                                | Name                                                       | What it's for                               | Status     |
| :----------------------------: | ---------------------------------------------------------- | ------------------------------------------- | ---------- |
|  ![](/img/stack/keynote.png)   | Apple Keynote                                              | Presentations, cleaner than PowerPoint      | Active     |
|  ![](/img/stack/numbers.png)   | Apple Numbers                                              | Quick, lightweight spreadsheets             | Active     |
|   ![](/img/stack/pages.png)    | Apple Pages                                                | Word processor for the rare non-Word doc    | Active     |
| ![](/img/stack/onlyoffice.png) | [ONLYOFFICE](https://github.com/ONLYOFFICE/DesktopEditors) | Word/Excel-compatible docs, no subscription | Trying Out |

:::

:::tab{title="Utilities"}

|                                     | Name                                                            | What it's for                               | Status     |
| :---------------------------------: | --------------------------------------------------------------- | ------------------------------------------- | ---------- |
|    ![](/img/stack/affinity.png)     | [Affinity](https://affinity.serif.com/)                         | Photo, Designer, Publisher, no subscription | Active     |
|       ![](/img/stack/vlc.png)       | [VLC](https://www.videolan.org/vlc/)                            | Plays pretty much any video format          | Active     |
|   ![](/img/stack/pearcleaner.png)   | [Pearcleaner](https://github.com/alienator88/Pearcleaner)       | Uninstaller that removes the leftovers      | Active     |
|      ![](/img/stack/lunar.png)      | [Lunar](https://github.com/alin23/Lunar)                        | Syncs brightness across every display       | Trying Out |
| ![](/img/stack/keepingyouawake.png) | [KeepingYouAwake](https://github.com/newmarcel/KeepingYouAwake) | Keeps my Mac awake during builds and demos  | Trying Out |
|    ![](/img/stack/localsend.png)    | [LocalSend](https://github.com/localsend/localsend)             | Open-source AirDrop, cross-platform         | Trying Out |

:::

:::tab{title="Hardware"}

|                                   | Name                                                          | What it's for                          | Status |
| :-------------------------------: | ------------------------------------------------------------- | -------------------------------------- | ------ |
| ![](/img/stack/bambu-studio.png)  | [Bambu Studio](https://bambulab.com/en/download/bambu-studio) | Slicer for my Bambu Lab printer        | Active |
| ![](/img/stack/balena-etcher.png) | [Balena Etcher](https://etcher.balena.io/)                    | Flashes OS images to USB/SD, fuss-free | Active |
|   ![](/img/stack/insta360.png)    | Insta360 Link Controller                                      | Framing and tracking for my webcam     | Active |
|     ![](/img/stack/unify.png)     | Unify Endpoint                                                | Direct VPN into my home LAN            | Active |

:::

::::

<!--

# Extensions

::::tabs
:::tab{title="Zen"}

| Name          | What it's for                    | Status |
| ------------- | -------------------------------- | ------ |
| [1Password]() | My open-source Arc replacement   | Active |
| [Karakeep]()  | Where I track tasks and projects | Active |

:::

:::tab{title="VS Code"}

| Name | What it's for | Status |
| ---- | ------------- | ------ |

:::

:::: -->
