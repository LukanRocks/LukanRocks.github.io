---
title: 'Mac Setup'
description: 'How I set up a new Mac: defaults, apps, and tools.'
layout: 'page'
toc: 'side'
---

I have been using Macs for a long time now and during this process I polished my setup and workflow countless times to improve my relationship with my computer.

Here I have everything that's earned a permanent spot on my Mac in order of installation when setting up a brand new machine, plus a few I'm still trying out in the end. I update this whenever something new sticks or gets replaced.

## Hide the Dock faster

The default auto-hide delay is unbearably slow, but luckily there is a way around it by running the following commands on the terminal app:

> [!WARNING]
> Don't go around running commands on your terminal from random people on the internet, these are safe but do your research too before running them on your machine.

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
defaults delete com.apple.dock autohide-time-modifier;
killall Dock
```

> [!NOTE]
> I'm a weirdo that doesn't like the dock at the bottom of the screen. So usually, after this change, I also move the dock to the right.

## Install Homebrew and some apps

[Homebrew](https://brew.sh/) is a package manager that works great on Macs and since I'm already working on the terminal, this is a great moment to install it.

To do so, access the Homebrew website and follow their official documented way to install.

### Apps from Homebrew

#### Zen Browser

[Website](https://zen-browser.app/) |
[Homebrew](https://formulae.brew.sh/cask/zen)

You probably thought a setup list would start with a browser but it got third spot on mine. Zen is my go-to browser given it has everything I loved from Arc plus it's open source which makes it even better.

Also worth mentioning, there are two extensions I must have installed:

- 1Password
- Karakeep

#### IsThereNet

[Github](https://github.com/FuzzyIdeas/IsThereNet)
[Homebrew](https://formulae.brew.sh/cask/istherenet)

Since a browser is typically used to surf the interwebs, I like to know if my connection is working (or not) at a glance. And this app is perfect for it! It adds a pretty light strip on the top of the screen whenever the internet connection status changes. A great quality of life item that is always running in the background.

#### Node.js

[Website](https://nodejs.org/) |
[Homebrew](https://formulae.brew.sh/formula/node)

Node is a JavaScript runtime built on Chrome's V8 engine, used for running JS outside the browser and for most frontend tooling. Given that everything I do around code is essentially full-stack JS, having Node installed is a must.

#### GitHub CLI

[Website](https://cli.github.com/) |
[Homebrew](https://formulae.brew.sh/formula/gh)

On the topic of code, I host all my projects on GitHub, so a must-have is GitHub's official CLI, for managing pull requests, issues, and repos without leaving the terminal or my IDE.

#### Fira Code

[GitHub](https://github.com/tonsky/FiraCode) |
[Homebrew](https://formulae.brew.sh/cask/font-fira-code)

It's not enough for me to just ship code but I also like when it looks pretty and this monospaced coding font makes even the worst code look at least a little nicer. It has support for programming ligatures, so multi-character operators like `=>` or `!=` render as single glyphs.

#### 1Password and CLI

[Website](https://1password.com/) |
[CLI Docs](https://developer.1password.com/docs/cli/) |
[Homebrew App](https://formulae.brew.sh/cask/1password) |
[Homebrew CLI](https://formulae.brew.sh/cask/1password-cli)

1Password is my go-to password manager that also has a great CLI that allows me to use my secure keys whenever I commit code or SSH into a server using the Mac Touch ID, which is awesome.

#### Bruno

[Website](https://www.usebruno.com/) |
[Homebrew](https://formulae.brew.sh/cask/bruno)

Bruno is an open-source API client and Postman/Insomnia alternative that stores collections as plain text files, so they're easy to version control with git. Most of the time I keep the collection of APIs alongside the code which makes things way easier to manage.

#### Markdown Preview

[Github](https://github.com/pluk-inc/markdown-preview) |
[Homebrew](https://formulae.brew.sh/cask/markdown-preview)

This is a lightweight markdown editor that, most importantly, comes with a Quick Look preview extension, meaning you can press "space" when the file is selected to properly preview it without opening it.

<!-- !TODO - Continue the WIP -->

## Apps I download from their websites

Everything else, downloaded straight from the source instead of Homebrew.

### Alfred 5

[Website](https://www.alfredapp.com/)

My app launcher of choice, it replaces Spotlight with custom workflows for anything I do repeatedly as well basic jumping through apps.

### Rectangle Pro

[Website](https://rectangleapp.com/pro)

Keyboard-driven window snapping and tiling, since macOS still doesn't do this natively as well as it should.

### VLC

[Website](https://www.videolan.org/vlc/)

Plays pretty much any video file format without a fuss.

### Notion Calendar

[Website](https://calendar.notion.so/)

Syncs all my calendar accounts into one clean view.

### SideNotes

A menu bar notes app that stays one click away without cluttering my desktop with sticky notes.

### Unify Endpoint

Direct VPN connection to my home LAN.

### CleanMyMac

[Website](https://cleanmymac.com/)

The easiest way to find and clear out the junk files that pile up over time.

### Vivid

Controls brightness and contrast on external monitors that don't expose native controls.

### Development

#### Claude

[Website](https://claude.ai/download)

Both the desktop app for everyday questions and Claude Code in the terminal for actually building things — this site included.

- App
- CLI

#### VS Code

[Website](https://code.visualstudio.com/)

My editor for everything Claude Code doesn't handle directly.

<!-- !TODO Add VS Code Extensions -->

#### GitHub Desktop

[Website](https://desktop.github.com/)

A GUI on top of git for when I'd rather click through a diff than read one in the terminal.

#### Xcode

[Website](https://developer.apple.com/xcode/)

Only here because it's required to build anything for iOS or macOS — not my daily driver.

#### ClickUp

[Website](https://clickup.com/)

Where I track tasks and projects.

## Documents

### Keynote

Apple's presentation app — clean output with a lot less fuss than PowerPoint.

### Pages

Apple's word processor, for the rare document that doesn't need Word compatibility.

### Numbers

Apple's spreadsheet app, for quick, lightweight number crunching.

### Others

#### Affinity

[Website](https://affinity.serif.com/)

The Adobe Creative Cloud alternative — Photo, Designer, and Publisher, without the subscription.

#### Balena Etcher

[Website](https://etcher.balena.io/)

Flashes OS images onto USB drives and SD cards without the drama of using `dd` directly.

#### Bambu Studio

[Website](https://bambulab.com/en/download/bambu-studio)

Slicer software for my Bambu Lab 3D printer.

#### Insta360 Link Controller

Controls framing and tracking for my Insta360 Link webcam.

#### Tolaria

[GitHub](https://github.com/refactoringhq/tolaria)

My personal knowledge base — this is what Claude reads from and writes to when I ask it to look something up or take a note.

#### Pearcleaner

[GitHub](https://github.com/alienator88/Pearcleaner)

Free, open-source app uninstaller — removes the leftover files a normal drag-to-trash leaves behind.

## Deciding

Still evaluating these — nothing here has earned a permanent spot yet.

### Ghost Pepper

<!-- TODO: write a line for this one -->

### Lunar

[GitHub](https://github.com/alin23/Lunar)

Syncs brightness across all my displays and adds adaptive brightness for monitors that don't support it natively.

### LocalCan

<!-- TODO: write a line for this one -->

### theboring.name

[Website](https://theboring.name/)

<!-- TODO: write a line for this one -->

### LocalSend

[GitHub](https://github.com/localsend/localsend)

An open-source AirDrop alternative that works across Mac, Windows, Linux, and mobile.

### MusicDecoy

[GitHub](https://github.com/FuzzyIdeas/MusicDecoy)

<!-- TODO: write a line for this one -->

### KeepingYouAwake

[GitHub](https://github.com/newmarcel/KeepingYouAwake)

Keeps my Mac from falling asleep during long builds, downloads, or screen shares.

### Antinote

[Website](https://antinote.io/)

A fast scratchpad for quick notes and simple math, without opening a full notes app.

### ONLYOFFICE Desktop Editors

[GitHub](https://github.com/ONLYOFFICE/DesktopEditors)

An open-source office suite for when I need Word/Excel-compatible files without a Microsoft subscription.

<!--
### Notch Nook

### Bartender 4

[Website](https://www.macbartender.com/)

Keeps my menu bar from turning into a wall of icons I never asked for.
-->
