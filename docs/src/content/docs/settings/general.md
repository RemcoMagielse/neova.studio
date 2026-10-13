---
title: General, Themes and Sounds
description: Appearance, tabs, task files, notifications, message routing, debugging, colours and fonts, and sounds.
sidebar:
  order: 1
---

These three settings pages hold your personal preferences: how Neova looks, how it behaves, and which sounds it plays.

Settings has a rail on the left with four groups. **General**, **Themes** and **Sounds** sit at the top of the rail, without a group caption. Click a page in the rail to show it on the right.

## General

Open it from **Settings › General**.

Changes on this page save as soon as you make them.

### Appearance

| Setting | What it does |
|---|---|
| **Theme** | Choose **Light**, **Dark** or **System**. **System** follows your Mac's appearance. The default is **Light**. |

### Tabs

| Setting | What it does |
|---|---|
| **Reopen my tabs when I open a project** | When on, each project opens with the tabs and split view you left it with. On by default. |

### Tasks

| Setting | What it does |
|---|---|
| **Task file naming** | How new task files are named on disk. Choose **Timestamp + ID** (for example `1740000000000-ab.json`), **Human-readable Date** (`20260220-1430.json`) or **Title-based** (`my-task-title.json`). An example of the chosen format shows under the setting. |
| **Delete images when archiving** | When on, images attached to a task are deleted when you archive the task. On by default. |

### Notifications

| Setting | What it does |
|---|---|
| **Notification position** | Where toast notifications appear: **Top Left**, **Top Center**, **Top Right**, **Bottom Left**, **Bottom Center** or **Bottom Right**. The default is **Top Right**. |

### Message Routing

| Setting | What it does |
|---|---|
| **Routing mode** | How messages are delivered to agent terminals. |

- **Direct** (the default): a message is written into the agent's terminal right away, also while the agent is working.
- **Smart**: while the agent is working, a message goes to the agent's backlog instead of the terminal.

In both modes, Neova does not write into a terminal while you are typing in it.

### Onboarding

| Setting | What it does |
|---|---|
| **Reset welcome tour** | Click **Reset Tour**. The welcome tour shows again the next time you start Neova. |

### Debugging

| Setting | What it does |
|---|---|
| **Performance logging** | When on, Neova writes timing data to log files. |
| **Performance logs folder** | Click **Open Folder** to open the folder with the performance log files. |
| **Developer Tools** | Click **Open DevTools** to open Chrome DevTools. |

### About

| Row | What it shows |
|---|---|
| **Version** | The installed version, with a **Check for updates** button. |
| **Build date** | The date this version was built. |
| **Data storage** | `.neova/`, the folder in your project where Neova keeps its data. See [The .neova folder](/reference/neova-folder/). |

Below the rows is a link to the Neova website.

Click **Check for updates**. The result shows under the version:

- **You're up to date.**
- **Neova *x.y.z* is available.** with the links **What's new** and **Download**.
- **Couldn't check for updates.** followed by the reason.

## Themes

Open it from **Settings › Themes**.

Pick colours and fonts from fixed presets. Changes apply and save immediately.

### Colours

| Setting | What it changes | Options |
|---|---|---|
| **Accent colour** | Buttons, links, focus rings and the active item | **Terracotta (default)**, **Blue**, **Indigo**, **Purple**, **Green**, **Teal**, **Black & white** |
| **Neutral tone** | Backgrounds, borders and text | **Warm (default)**, **Cool**, **Neutral**, **Grey** |

A dot next to **Accent colour** shows the current accent.

### Fonts

| Setting | What it changes | Options |
|---|---|---|
| **Interface font** | Menus, lists, chat and most text | **Lato (default)**, **Inter**, **IBM Plex Sans**, **Source Sans 3**, **System font** |
| **Document font** | Task titles and cards, and the text of tasks, wiki pages and other documents | **Lusitana (default)**, **Source Serif 4**, **Lora**, **Merriweather**, **Same as interface font** |
| **Code font** | Code, file paths and other monospaced text | **Courier Prime (default)**, **JetBrains Mono**, **Fira Code**, **IBM Plex Mono**, **System monospace** |

## Sounds

Open it from **Settings › Sounds**.

Neova plays short chimes when something happens that you may want to know about. Changes save immediately.

### Sounds

| Setting | What it does |
|---|---|
| **Play sounds** | Turns all sounds on or off. On by default. When off, the other settings are hidden. |
| **Volume** | A slider from 0 to 100 that applies to every sound. The default is 60. |
| **Only when Neova is in the background** | When on, Neova stays silent while you are looking at it. Off by default. |

### Which sounds

Each sound has a play button to hear it and a switch to turn it on or off. All are on by default.

| Sound | When it plays |
|---|---|
| **You’re mentioned** | An agent writes @User, @all or @everyone in chat |
| **A question for you** | An agent is waiting for your answer |
| **Agent is done** | An agent stops after working for at least 10 seconds |
| **Notification** | An agent sends you an FYI |
| **Agents chatting** | Agents talk to each other in chat. One soft tick per burst. |

## Related

- [Find your way around](/getting-started/find-your-way-around/) for tabs and split view
- [Activity](/agents/activity/) for questions and notifications from agents
- [Chat](/agents/chat/)
- [Archive](/tasks/archive/)
