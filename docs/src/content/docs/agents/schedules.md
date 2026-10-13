---
title: Schedules
description: Run a prompt on an agent at a set time or on a repeat.
sidebar:
  order: 7
---

Schedules run a prompt on an agent at a time you choose, once or on a repeat. Use them for a daily briefing, an end-of-day retro or a reminder in two hours. Schedules only run while Neova Studio is running.

Open it from **Sidebar › Agents › Schedules**.

## Header

| Button | What it does |
|---|---|
| **Pause all** / **Resume all** | Pauses or resumes every schedule. Shows when there is at least one schedule. |
| **New schedule** | Opens the schedule form. Disabled until the project has an agent. |

While schedules are paused, a banner says **All schedules are paused. Nothing will fire, and no agent will be started.**

## Schedule list

Schedules are sorted by when they fire next. Schedules that have already run their one time show last.

| Column | Shows |
|---|---|
| **When** | How often it fires, for example `Daily 09:00`, `Weekdays 09:00`, `Mon, Wed 09:00`, `Every 30 min` or a date and time. Below it: when it fires next. |
| **Who** | The agent, or **All agents**. A power icon means it starts the agent if it isn't running. **set by the agent itself** marks a schedule an agent made for itself. |
| **What** | The first line of the prompt. Hover to see all of it. Below it, a status line (see below). |

Each row has buttons:

| Button | What it does |
|---|---|
| **Disable** / **Enable** | Turns the schedule off or on without deleting it. |
| **Edit** | Opens the schedule form. |
| **Delete** | Click, then click **Confirm**. |

A schedule an agent set for itself has only **Delete**: you can cancel it, but not change it. So does a one-time schedule that has run.

### Status line

The status line under **What** says what happened the last time it fired, and when:

| Text | Meaning |
|---|---|
| **ran the action** | The prompt was sent to the agent. |
| **started [agent], then ran the action** | The agent was off, Neova started it, then sent the prompt. |
| **[agent] was busy — queued to its backlog** | The agent was working, so the prompt went to its backlog. |
| **skipped — [agent] was not running** | The agent was off and the schedule may not start it. |
| **skipped — [agent] has scheduled actions turned off** | The agent's **Scheduled actions** event is off. |
| **skipped — [agent] was busy starting up** | The agent was starting. |
| **[agent] never came up** / **[agent] could not be started** | Starting the agent failed. |
| **could not be delivered to [agent]** | Sending the prompt failed. |
| **spent** | A one-time schedule that is done. |

For **All agents** it says how many agents it reached, for example **reached 3 of 4 agents**.

## Schedule form

The form asks three things: when, who and what.

### When

Choose one:

| Option | Fields |
|---|---|
| **Once** | A date and a time. |
| **Repeat** | Day buttons **M T W T F S S** and a time. All seven days means daily. New schedules start on weekdays at 09:00. |
| **Every** | A number of **minutes**, at least 1. |

### Who

| Field | What it does |
|---|---|
| **Who** | **All agents**, or one agent. For two agents, make two schedules. |
| **Start the agent if it isn't running** | On by default. With **All agents**, the form warns how many agents it can start. |

### What

The prompt. It runs on the agent as if you had typed it. Its first line names the schedule in the list.

At the bottom, the form shows **Next fire:** with the date and time, and the number of agents. If the settings can never fire, it says so, for example **This would never fire — check the date.** Click **Save**.

## When a schedule fires

For each agent, Neova checks the agent's state at that moment:

| Agent state | What happens |
|---|---|
| **Scheduled actions** event turned off | Skipped. Does not apply to schedules the agent set for itself. |
| Offline, with **Start the agent if it isn't running** on | Neova starts the agent, waits until it is ready, then sends the prompt. |
| Offline, without it | Skipped. |
| Starting, or not connected to Neova | Tried again a few seconds later. |
| Idle | The prompt is typed into the terminal and sent. |
| Working or needs attention | The prompt goes to the agent's backlog. If the same schedule already has an item waiting there, it is replaced. |

A one-time schedule is done (**spent**) after it reaches the agent, or after it is skipped.

If Neova Studio was closed at the scheduled time:

- A one-time schedule fires once when Neova runs again. The prompt gets a note that it is overdue.
- A repeating schedule skips the times it missed and fires at its next time.

## How to create a daily briefing

1. Click **New schedule**.
2. Under **When**, choose **Repeat**, keep the weekdays and set the time.
3. Under **Who**, choose the agent.
4. Under **What**, type the prompt, for example `Post a briefing of open tasks in chat.`
5. Click **Save**.

## How to set a one-time reminder

1. Click **New schedule**.
2. Choose **Once** and set the date and time.
3. Choose the agent and type the prompt.
4. Click **Save**.

## How to stop schedules for a while

- One schedule: click **Disable** on its row.
- All schedules: click **Pause all**. Click **Resume all** to start again.
- One agent: turn off **Scheduled actions** on the agent's **Events** tab in the [Agent Editor](/agents/agent-editor/#events).

## Related

- [Agent Editor](/agents/agent-editor/#events) for the **Scheduled actions** event
- [Sessions](/agents/sessions/) for the agent's backlog
- [MCP tools](/reference/mcp-tools/) agents use for their own reminders: `schedule_action`, `list_schedules` and `cancel_schedule`
