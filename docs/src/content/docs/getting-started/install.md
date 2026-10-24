---
title: Install
description: Download Neova Studio for macOS and keep it up to date.
---

Neova Studio runs on macOS, on both Apple silicon and Intel Macs. The app is signed and notarized by Apple.

## Download and install

1. Go to the [latest release on GitHub](https://github.com/RemcoMagielse/neova.studio/releases/latest).
2. Download the file for your Mac:
   - **Apple silicon** (M-series): `Neova Studio-<version>-arm64.dmg`
   - **Intel**: `Neova Studio-<version>.dmg`
3. Open the `.dmg` and drag **Neova Studio** into **Applications**.
4. Open **Neova Studio** from Applications.

The release also has `.zip` files with the same app, for each type of Mac.

## What you need for agents

Agents run as command-line tools in Neova's terminals. Install the coding agent you want to use, for example Claude Code, so that its command (such as `claude`) works in your own terminal. Neova starts it with the same command.

The agent needs to support MCP to work with Neova's tasks, wiki and chat.

## Updates

Neova checks for a new version on GitHub 10 seconds after it starts. When a newer version is out, a notification shows **Neova &lt;version&gt; is available** with two buttons:

- **Download** downloads the `.dmg` for your Mac in your browser.
- **What's new** opens the release notes.

Each version is announced once. Install it the same way as above: drag the new app into Applications and replace the old one.

To check yourself, use either of these:

- **Neova Studio › Check for Updates…** in the menu bar. It always tells you the result, including **You're up to date**.
- **Settings › Advanced › About**. Click **Check for updates** next to **Version**. The result appears in the row.
