---
title: Activity
description: The timeline of agent questions, notifications and actions, where you answer what agents ask you.
sidebar:
  order: 6
---

Activity is a timeline of what agents ask you, tell you and do. A question waits here until you answer or ignore it.

Open it from **Sidebar › Agents › Activity**, or click **Activity** in the status bar. The badge on **Activity** in the sidebar shows the open questions and unread notifications. Opening the page marks the notifications as seen.

## Tabs and buttons

| Tab | Shows |
|---|---|
| **All** | Everything, newest first. |
| **Action Required** | Questions you haven't answered or ignored, and notifications you haven't dismissed. |
| **Info** | Answered and ignored questions, dismissed notifications, and agent actions. |

Each tab shows a count.

| Button | What it does |
|---|---|
| **Mark all as read** | Dismisses all notifications. Shows when there are notifications to dismiss. |
| **Refresh** | Reloads the timeline. |

## Timeline

Items are in time order, newest first, with the agent's avatar on the line. A divider shows **n new since last visit**. At the bottom, click **Load earlier...** to see older items. When there are none, it says **Beginning of history**.

### Questions

An open question shows the agent's name with **needs input**, the question, up to three options and **Click to respond**. High-priority questions are tinted.

- Click the card to answer it.
- **View related task** opens the task the question is about.
- **×** (**Ignore**) ignores the question. The agent gets no answer.

Some questions ask you to fill something in: a checklist to tick off, or a box for an ID or a number. When the question has no options, you fill it in right on the card and click **Send**. **Send** stays off until everything is filled in correctly, and a wrong entry tells you what is expected. If the question also has options, click it to answer in the answer window. These questions can't be answered from the phone.

An answered question collapses to **You responded:** with your answer. An ignored question collapses to **Ignored**.

### Notifications

A notification shows the agent's name, the message and its level: info (blue), success (green) or warning (amber). Long messages are cut off with **Click to read more**.

- Click the card to read the whole message.
- **View related task** opens the task.
- **×** (**Dismiss**) dismisses it. It moves to **Info**.

A notification can carry images and buttons:

| Item | What happens when you click it |
|---|---|
| Image | Opens the image in your Mac's image viewer. |
| Link button | Opens the web page in your browser. |
| Go-to button | Opens a page in Neova. |
| Command button | The command shows next to the button. Clicking opens a new terminal under **Tools › Terminal** and runs the command there. |

Nothing runs until you click.

### Agent actions

One line per action an agent took through Neova, for example updating a task, with the agent's name and the time. Actions that Neova refused have an amber dot.

## Answer window

Clicking a question opens a window titled **[Agent] is asking:**. The question shows on the left, your answer on the right.

| Part | What it does |
|---|---|
| **Select an option:** | Choose one option, or several when the agent allows it. Some options have a short explanation. |
| **Your response:** / **Additional feedback (optional):** | Type a free answer. Not shown when the agent only accepts options. |
| **Attach images** | Add up to 5 images. You can also drop images onto the window. A single dropped image opens **Annotate image** first. |
| **Go to task** | Closes the window and opens the related task. |
| **Ignore** | Ignores the question. |
| **Cancel** | Closes the window. If you started an answer, Neova asks **Discard response?** |
| **Send Response** | Sends your answer to the agent. |

An answered question opens read-only with **You selected:**, **You filled in:**, **Your feedback:** and the time. An ignored question says **No response was sent to the agent.** Click **Respond anyway** to answer it after all.

Clicking a notification opens **Message from [Agent]** with the whole message, its images and buttons. Click **Dismiss** or **Close**.

## How to answer a question

1. Open **Action Required**.
2. Click the question.
3. Choose an option, type an answer, or both.
4. Click **Send Response**.

The question moves to **Info**. The agent gets your answer, through its **Question answered** event if that is on.

## How to clear notifications

- To dismiss one: click **×** on it.
- To dismiss all: click **Mark all as read**.

## How to run a command an agent suggests

1. Read the command next to the button.
2. Click the button.

A new terminal opens under **Tools › Terminal** and runs the command.

## Other places questions show

- **Agents › Chat** shows questions and notifications between the messages.
- **Agents › Sessions** has a **Requests** button above each terminal with that agent's open questions (**Needs an answer**) and notifications (**Info**).
- The **Activity** item in the status bar has an amber dot when a question is waiting.

## Related

- [Agent Editor](/agents/agent-editor/#events) for the **Question answered** event
- [MCP tools](/reference/mcp-tools/) agents use for this page: `ask_user`, `notify_user`, `get_response` and `get_responses`
