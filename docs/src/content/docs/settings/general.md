---
title: General, Themes, Sounds and Voice
description: Appearance, tabs, task files, notifications, message routing, debugging, colours and fonts, sounds, and voice.
sidebar:
  order: 1
---

These settings pages hold your personal preferences: how Neova looks, how it behaves, which sounds it plays, and how you talk to it.

Settings has a rail on the left with four groups. **Profile**, **General**, **Themes**, **Sounds** and **Voice** sit at the top of the rail, without a group caption. Click a page in the rail to show it on the right.

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

## Voice

Open it from **Settings › Voice**.

Voice lets you talk to Neova instead of typing, and lets agents talk back. Speech is turned into text, and text into speech, on your Mac. Neova downloads the two voice models once, from Hugging Face. After that, no audio leaves your Mac. Changes save immediately.

### Speech input

| Setting | What it does |
|---|---|
| **Speech model** | The model that turns your speech into text: Parakeet v3, about 670 MB, for English and Dutch. Click **Download** to install it. While it downloads, a progress bar and **Cancel** show. Once installed, the setting shows **✓ Installed** and **Remove**. |
| **Talk shortcut ⌥ Space** | **Hold**: hold ⌥ Space while you talk. **Tap**: tap to start, tap again to stop. The default is **Hold**. |

### Agent voices

| Setting | What it does |
|---|---|
| **Voices** | The model agents speak with: Supertonic 3, about 390 MB, for English and Dutch. **Download** and **Remove** work as for the speech model. |
| **Play voice messages automatically** | **Off**, **When Neova is in the background** (the default) or **Always**. Otherwise a voice message waits, marked with a dot, until you press play. |
| **Playback speed** | From 0.75× to 2×. The default is 1×. Applies to every voice message. |

Neova asks for the microphone the first time you talk. If access is off, Neova says **Neova can't use the microphone** and offers **Open System Settings**, where you turn it on under **Privacy & Security › Microphone**.

### Dictation

Dictation types what you say into the field you are in: a task, a goal, a wiki page, a search box or an agent's terminal.

- Hold **⌥ Space** while you talk, or tap it, depending on **Talk shortcut**.
- A pill under the field shows **Listening · Esc to stop** and the words so far. When you stop, it shows **Writing out…** and then puts the text at the cursor.
- In an agent's terminal, the text is typed but not sent. Press Enter to send it.
- When no field has focus, the text goes to the Chat draft.
- **⌘Z** undoes a whole dictation in one step.
- In text editors, the microphone button in the toolbar (**Dictate**) does the same.

Dictation keeps no audio.

### Voice messages

In **Agents › Chat**, the microphone in the message box records a voice message:

- Hold the microphone while you talk and let go to stop. Or click it once to talk hands-free, and click **Stop recording** when you are done.
- Press Esc, slide left or click **Discard recording** to throw the recording away.
- Recording stops by itself after 15 seconds of silence, or after 2 minutes.

When you stop, the text appears in the message box. Agent names you say become @mentions. The recording waits above the box, with **Play recording** and **Remove recording**, until you send the message. It is saved in the project's `.neova/audio/` folder.

Your voice message shows in the chat with a player and a folded **Transcript**. An agent's voice message shows as a card with a player and a speed button (1×, 1.5×, 2×). A dot means you have not played it yet.

While a voice message plays, the status bar shows who is speaking and the time. From there you can pause, stop all voice messages, or click the name to go to the message.

### Talking to the Assistant

The Assistant's message box has the same microphone. When you stop talking, your message is sent. The Assistant answers out loud, and briefly says something like **Got it.** as soon as your message arrives. When you type, it answers in text only.

### Agents that speak

An agent can send you a voice message in the chat when **Can send voice messages** is on for it. You choose its voice in the [Agent Editor](/agents/agent-editor/#voice). Agents use the `send_voice_message` MCP tool for this.

**Read aloud** reads a chat message, a notification or a task summary out loud in the agent's voice. Click **Stop reading** to stop.

### How to start using voice

1. Open **Settings › Voice**.
2. Under **Speech model**, click **Download**. Wait until it shows **✓ Installed**.
3. To hear agents, click **Download** under **Voices** too.
4. Click in a field, hold **⌥ Space** and talk. Let go to stop.

## Related

- [Find your way around](/getting-started/find-your-way-around/) for tabs and split view
- [Activity](/agents/activity/) for questions and notifications from agents
- [Chat](/agents/chat/)
- [Archive](/tasks/archive/)
