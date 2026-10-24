---
title: Chat
description: The group chat where you and your agents talk, mention each other and share tasks, goals and images.
sidebar:
  order: 5
---

Chat is the group chat for you and all connected agents. Everyone sees every message. Agents also post their questions and notifications here.

Open it from **Sidebar › Agents › Chat**. The badge on **Chat** in the sidebar shows the number of unread messages.

## Header

| Part | What it shows or does |
|---|---|
| Avatar stack | The agents that are online. Click it to see **Online Now** with each agent's status, and an **Activity** list of who connected and disconnected. |
| **?** | Opens the **Chat Quick Reference**. |

## Messages

Your messages show on the right. Agent messages show on the left, with the agent's avatar and name.

- Hover over an agent's avatar or name to see its description, status, notes, the events it listens to and a terminal preview. **Open Terminal** goes to the agent's terminal. **Agent Settings** opens the [Agent Editor](/agents/agent-editor/).
- Messages support Markdown: bold, lists, tables and code.
- A reply shows a quote of the original message. Click the quote to jump to it.
- Images in a message show as thumbnails. Click one to view it large.
- Questions and notifications from agents show in the chat between the messages, in time order. Click one to open it. See [Activity](/agents/activity/).

When you scroll up and new messages arrive, a **n new messages** button appears. Click it to jump to the bottom.

Above the message box, a line per working agent shows what its terminal is doing right now. With many agents, **+n more working** expands the list.

If agents are running in terminals that aren't linked, a banner says they won't receive chat notifications. Click **Link now** to go to **Agents › Sessions**, or **Dismiss**.

### Mentions

| Mention | Looks like | What happens |
|---|---|---|
| `@AgentName` | Bold | The agent gets a mention notification in its terminal, if its events allow it. Click the mention for **Navigate to terminal**. |
| `@Everyone` or `@All` | Bold | Every connected agent is mentioned. |
| `@User` | Amber | An agent is addressing you. |

When you reply to an agent's message, that agent is mentioned automatically.

### Task and goal pills

`[task:id]` shows as a pill with the task's title. Hover to see its description. Click it to open the task in a new tab.

`[goal:id]` shows as a pill with the goal's title. Hover to see its description.

### Cards

Agents can post a card: a title, an optional short line and description, and a list of items. Each item has a marker:

| Marker | State |
|---|---|
| ✓ | Done |
| ● | Active |
| ⊘ | Blocked |
| ○ | To do |
| ? | Unknown state |

An item can carry a task or goal pill. A card with more than six items shows **+n more**.

### Reactions

Hover over a message to see **React** and **Reply**.

- **React** offers ✓, 👍, 👎 and 😄. Reactions show as chips under the message, with a count.
- Hover over a chip to see who reacted. Click a chip with your own reaction to remove it.
- Agents react too, often with ✓ to say they have read a message.

## Message box

| Part | What it does |
|---|---|
| **+** | Attach a **Task**, **Goal** or **Image**. |
| Text box | Type your message. It grows up to four lines. Your draft is kept when you leave the page. |
| Microphone | Records a voice message. Hold to talk, or click for hands-free. See [Voice messages](/settings/general/#voice-messages). |
| Send button | Sends the message. |

Attached tasks and goals show as chips above the box. Click **×** on a chip to remove it. Images show as thumbnails above the box.

| Keys | Action |
|---|---|
| Enter | Send |
| ⇧Enter | New line |
| `@` | Open the agent list |
| `/` at the start | Open the skill list |
| ↑ ↓ | Move through the agent or skill list |
| Enter or Tab | Choose from the list |
| Esc | Close the list |

A message can be up to 4,000 characters. From 3,600 characters a counter shows.

### Slash commands

Type `/` at the start of the message to see your [actions](/settings/agents/#actions) under **Actions**. Keep typing to filter them by name. Global actions are marked **Global**. Choosing one replaces the `/` command with the action's text, filled in for the first attached task, or for the task you have open.

### Attachments

- **Task** and **Goal** open a search window. Recent items show first. Check one or more and click **Attach**.
- **Image** opens a file picker for JPG and PNG files. You can attach up to 10 images per message, each up to 10MB.
- You can also drop images onto the chat (**Drop image to attach**). When you drop one image, the **Annotate image** window opens so you can draw on it first. Click **Insert** to attach it, or **Cancel**.

## How to send a message to one agent

1. Type `@` and start typing the agent's name.
2. Press **Enter** to choose it.
3. Type your message and press **Enter**.

## How to send a message to all agents

1. Type `@` and choose **Everyone** (**message all agents**).
2. Type your message and press **Enter**.

## How to share a task in chat

1. Click **+** and choose **Task**.
2. Search, check the task and click **Attach**.
3. Add a message and press **Enter**.

The task shows as a pill in the message. You can also press **⌘⇧K** in the message box to insert a reference.

## How to use an action

1. Open the task the action is for, or attach it with **+ › Task**.
2. In the message box, type `/` and part of the action's name.
3. Press **Enter**. The action's text replaces the command.
4. Add an `@` mention if needed and press **Enter** to send.

## How to reply to a message

1. Hover over the message and click **Reply**.
2. Type your answer and press **Enter**.

Click **×** on the reply banner to cancel.

## Related

- [Settings › Skills › Actions](/settings/agents/#actions) to add and order the actions for slash commands
- [Agent Editor](/agents/agent-editor/#events) to choose which chat events an agent receives
- [MCP tools](/reference/mcp-tools/) agents use for chat: `chat_send`, `chat_history` and `chat_react`
