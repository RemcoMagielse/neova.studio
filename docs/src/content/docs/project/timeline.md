---
title: Timeline
description: What happened in the project over the last two weeks, day by day, in tracks for goals, commits, chat and agents.
sidebar:
  order: 2
---

Timeline shows what happened in the project, day by day: work on goals and tasks, commits, chat and what agents did, one week at a time.

Open it from **Sidebar › Project › Timeline**.

## Header

The header shows the week on display, for example **8 Oct – 14 Oct**, between two buttons:

| Button | What it does |
|---|---|
| **‹** (**Previous week**) | Shows the week before. You can go back one week. |
| **›** (**Next week**) | Shows the next week, up to the current one. |

## Days

The timeline has seven columns, one per day, with the most recent day on the right. Each column header shows the weekday and the date. The current day says **Today**. Weekend days are shaded.

When tasks were finished on a day, its header shows a green badge such as **✓ 3**. Hover over it to see how many tasks were done.

In the current week, a vertical line marked **now** shows the present time.

## Sections

The rows are grouped in four sections. Click a section's name to fold it. A folded section shows how many rows it holds, for example **GOALS · 4**. Neova remembers which sections are folded, per project.

### Goals

One row per goal that is open or had task activity in the week. The label shows the goal's title and how many of its tasks are done, for example **3 of 8 done**. A goal created in the week shows **new**, and a diamond on the day it was created.

The last row, **Not on a goal**, holds tasks that are not linked to a goal.

Each mark on a row is something that happened to one of the goal's tasks:

| Mark | What happened |
|---|---|
| Hollow circle | A task was created. |
| Triangle | A task moved to another stage. |
| Small square | A task's text was edited. |
| Green dot | A task was done. |
| Diamond | A task was added to or removed from the goal. |

### Code

The **Commits** row has a dot for each git commit in the project. The label shows how many commits were made that week.

### Chat

The **Messages** row shows the group chat in blocks of four hours. The bigger the dot, the more messages in that block. The label shows how many messages were sent that week.

### Agents

One row per agent that was active in the week, in alphabetical order.

- A grey bar is a period when the agent was working.
- An amber dot is a question the agent asked you.
- A hollow amber ring is a question still waiting for your answer.

When no agent was active, the section says **No agent activity this week**.

## Details

Hover over any mark to see its details:

| Mark | Details |
|---|---|
| Task | The task title, what happened, who did it and when. **You** means you did it. |
| Commit | The commit message, its short hash, the author and the time. |
| Messages | How many messages, and the time span. |
| Working bar | The agent, the time span and how long it worked. |
| Question | The question and when it was asked. |

Hover over a row label to see the goal or agent name in full.

The legend at the bottom of the page explains the marks.

## How to see what happened last week

1. Open **Project › Timeline**.
2. Click **‹** in the header.
3. Hover over the marks to see what happened. Click **›** to return to this week.

## How to see what an agent did

1. Open **Project › Timeline**.
2. Find the agent's row under **AGENTS**.
3. Hover over a grey bar to see when the agent worked and for how long. Hover over an amber dot to read its question.

To focus on one part, click the names of the other sections to fold them.

## Related

- [Goals](/project/goals/) for the goals and their tasks.
- [Activity](/agents/activity/) to answer the questions agents ask.
- [Chat](/agents/chat/) for the messages.
- [Git](/tools/git/) for the commits.
