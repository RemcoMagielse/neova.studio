---
title: Assistant
description: Ask the Neova Assistant about your project and about where things are in Neova.
sidebar:
  order: 1
---

The Assistant answers questions about your project and about where things are in Neova. This page shows it in a tab, so you can keep it open next to the page you are working on.

Open it from **Sidebar › Agents › Assistant**. Press **⌘J** to open it in a large window from any page.

## Header

| Part | What it shows or does |
|---|---|
| **Neova Assistant** | The name, followed by the status: **not started**, **starting…**, **idle**, **thinking…**, **calling tool…**, **done**, **error** or **needs input**. |
| **Conversation** / **Terminal** | Switches between the chat and the Assistant's own terminal. |
| Gear (**Assistant settings**) | Opens **Settings › Assistant** in a new tab. |
| **New chat** | Clears the conversation and resets the Assistant. |

## Conversation

Your messages show on the right, the Assistant's replies on the left.

- While the Assistant works, a bubble shows what it is doing, for example its elapsed time and token count. Without that line it says **Thinking…**.
- When a reply is complete, a **done** label shows under it.
- If a message could not be sent, an error line shows and a **Retry last message** button appears.
- A paper-plane icon marks a message that came in through Telegram.

When the Assistant isn't running, the area says **The assistant isn't running yet**. Click **Start assistant** to start it.

## Message box

At the bottom is the message box.

- The line above the box shows what the Assistant is told about where you are, for example a task, a goal or a wiki page. With two panes open, it describes the page in the other pane.
- **Enter** sends the message. **⇧Enter** starts a new line.
- The box is disabled until the Assistant is running.

## Terminal

Click **Terminal** to see the Assistant's live terminal. It is the same session as in **Settings › Assistant**. You can type into it directly.

## Other places to open the Assistant

All of these show the same conversation.

| Where | How |
|---|---|
| Status bar | Click **Assistant**. A small window opens. |
| Any page | Press **⌘J**. A large window opens. |
| **Project › Overview** | The **Assistant** card. |

The small window has buttons for **Enlarge chat** (⌘J), **Open assistant terminal** (goes to **Settings › Assistant**), **New chat** and **Close**.

## How to ask the Assistant about a page

1. Open the page you have a question about, for example a task.
2. Click **Split the view** in the tab bar and open **Agents › Assistant** in the second pane. Or press **⌘J**.
3. Check the line above the message box. It names the item you are looking at.
4. Type your question and press **Enter**.

## How to start over

1. Click **New chat**.
2. If the area shows **The assistant isn't running yet**, click **Start assistant**.

## Related

- [Settings › Assistant](/settings/agents/#assistant) to turn the Assistant on, set its start command and its system prompt
- [Find your way around](/getting-started/find-your-way-around/#assistant)
- [MCP tools](/reference/mcp-tools/) the Assistant uses to reply: `assistant_reply` and `assistant_typing`
