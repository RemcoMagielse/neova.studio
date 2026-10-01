---
catalogueId: "skill.neova-onboarding"
version: "1.0.0"
builtinId: "builtin-neova-onboarding"
name: "Neova Onboarding & Configuration"
description: "How to help someone find their way around Neova and get it set up: where every page lives, what the Assistant needs in order to run, and how to read the symptoms when it does not."
updatedAt: "2026-09-13"
---
# Neova Onboarding & Configuration
(Version 1.0, date 13-09-2026)

How to help someone find their way around Neova, and how to get them set up. Read
this when the user is new, is lost, is asking where something is, or is trying to
make part of the app work.

The general working patterns — tasks, the wiki, your notebook, how to talk to the
user — are in the **Neova Studio** skill. This one is only about the app itself.

## The one habit that matters

**Never leave someone to find a page by hand.** Whenever you name a place —
"that's under Settings › Assistant", "your tasks are on the board" — attach an
`open` action to `notify_user` so they can click through:

```json
{
  "message": "The start command lives on the Assistant settings page.",
  "actions": [
    { "type": "open", "label": "Show me", "path": "/settings/assistant" }
  ]
}
```

Say where the button goes in the message text as well. A lone button labelled
"Show me" tells the user nothing about what they are about to leave the page for.

It is a button, not something you do on their behalf: moving someone's view while
they are reading is hostile. Offer; let them click.

## Where things live

Every destination below is a real path you can put in an `open` action.

<!-- BEGIN GENERATED NAV MAP -->

**Project**

- `/project/overview` — **Overview**: the project dashboard — its description, search, who is running, what changed, and saved links
- `/project/goals` — **Goals**: outcomes that group related tasks, each with its own progress
- `/project/standards` — **Wiki**: durable project knowledge, in categories. The "standards" category is binding policy — how this project expects work to be done
- `/project/files` — **Files**: the project's file tree
- `/project/images` — **Images**: every image in the project pool, to browse and clean up

**Agents**

- `/agents/assistant` — **Assistant**: this assistant, open as a tab — keep it in a side panel next to the page you are asking about
- `/agents/team` — **Team**: every agent defined in this project, and what each one is working on
- `/agents/sessions` — **Sessions**: the running agent terminals
- `/agents/chat` — **Chat**: group chat — all the agents and the user together
- `/agents/activity` — **Activity**: the log of what agents have actually done
- `/agents/schedules` — **Schedules**: prompts set to run on an agent at a time, or on a repeat

**Tasks**

- `/tasks/board` — **Boards**: the board — tasks laid out by stage, and where stages are configured
- `/tasks/list` — **Tasks**: every task as a filterable list
- `/tasks/archive` — **Archive**: search finished, archived work — read-only

**Tools**

- `/tools/snippets` — **Snippets**: reusable fragments to drop into prompts
- `/tools/composer` — **Composer**: assemble agent instructions from templates and snippets, with a live preview
- `/tools/whiteboard` — **Whiteboard**: a shared scratch surface the whole team can write on
- `/tools/terminal` — **Terminal**: plain shell terminals, not tied to any agent
- `/tools/browser` — **Browser**: browser sessions that each keep their own login; agents can use them and you can take over
- `/tools/memory` — **Memory**: the memory files and permission rules the coding agents are running under
- `/tools/git` — **Git**: version history for the project's own .neova data
- `/tools/api` — **API Tester**: saved requests, environments, and request history

**Settings**

- `/settings/general` — **General**: project-wide preferences
- `/settings/stages` — **Stages**: the workflow stages tasks move through
- `/settings/types` — **Types**: the task types available in this project
- `/settings/tags` — **Tags**: the tag vocabulary and its colours
- `/settings/agents` — **Agents**: how agents behave — event templates, activity retention
- `/settings/templates` — **Templates**: instruction templates and quick actions
- `/settings/assistant` — **Assistant**: the Assistant itself — its start command, its system prompt, and its terminal
- `/settings/connectors` — **Connectors**: outside channels such as Telegram
- `/settings/server` — **Server**: the MCP server — its port, and the config that points a CLI at it
- `/settings/git` — **Git**: whether the project data is versioned, and where it backs up to

<!-- END GENERATED NAV MAP -->

This section is generated from the app's own navigation, so it is never out of
date. If a user describes a page that is not in this list, do not invent a path
for it — say you are not sure and ask what they are trying to do.

## Setting up

### What the Assistant needs to run

Four things have to be true, in this order. Most "the assistant does not work"
reports are one of these missing, and the symptoms look alike — so check them in
order rather than guessing.

1. **A CLI that speaks MCP is installed** — `claude`, and the user must be able
   to run it in a terminal themselves.
2. **The start command is set** — `Settings › Assistant`, the *Start command*
   field. This is the command that launches the CLI in the Assistant's terminal.
3. **The MCP server is running** — `Settings › Server`. It shows the port.
4. **The project's MCP config points at that port** — also `Settings › Server`,
   which can write the config into the project for the user. A config written
   against an old port looks identical to a correct one until a tool call fails.

Only after all four does the Assistant register itself and become reachable.

### Reading the symptoms

| What the user sees | Where it actually is |
|---|---|
| "Not started" and Start does nothing | No start command (2), or the CLI is not installed (1) |
| The terminal runs, but the agent never answers | The CLI started without MCP tools — (3) or (4) |
| Tools work but the agent has no name | It never called `register_agent` |
| It worked yesterday, not today | The port moved — re-check (4) |

When you are not certain which it is, say so and ask the user what they see in
the Assistant terminal, rather than sending them through all four.

### Other things worth setting up

- **A project description** — `Project › Overview`. Agents read it to understand
  what they are working on; an empty one makes every agent guess.
- **Stages** — `Settings › Stages`. The workflow tasks move through.
- **Connectors** — `Settings › Connectors`. Telegram, so the user can reach their
  agents away from the desk.
- **Project data versioning** — `Settings › Git`. Version history for tasks and
  wiki pages.
- **Goal worktrees** — `Settings › Git`, off by default. For working on several
  goals at once without agents colliding; see below.

### Goal worktrees — several goals at once

When a user wants agents working on different features in parallel, or asks why
two agents keep overwriting each other, this is the answer. Explain it as five
steps, in their words, not git's:

1. **Switch it on** — `Settings › Git › Goal worktrees`. Off changes nothing.
2. **Open work on a goal** — `Project › Goals`, the goal, *Open work*. The goal
   gets its own folder next to the project and a fresh branch from main.
   Tasks that are not on a goal stay in the main folder, as before.
3. **Put an agent there** — on an offline agent's page, *Start Terminal ▾* →
   the goal. A running Claude agent can also switch itself when it picks up a
   task on that goal. The agent card shows which goal an agent is in.
4. **Bring it back** — in the goal's Work section: *Update from main* when main
   has moved on, then *Merge into main*. The merge never touches the user's own
   unsaved edits; if it cannot go cleanly it changes nothing and says why.
   *Push to GitHub* is there when they want the branch backed up or shared.
5. **Close work** — removes the folder. Neova refuses while there is
   uncommitted work or an agent still inside, and keeps the branch if it has
   commits main does not.

`Tools › Git › Worktrees` shows every goal folder in one list. If a user is
unsure what state a goal is in, send them to its Work section first.

None of these block anything. Suggest them when they are relevant, not as a
checklist to work through.

## Helping someone who is lost

- **Ask what they are trying to do, not which page they want.** People describe
  the page they think they need, which is often not the one that solves it.
- **One destination at a time.** A reply with four `open` buttons is a menu, and
  a menu is what they were already stuck in.
- **Prefer showing to explaining.** A button plus one sentence beats a paragraph
  describing a route through the sidebar.
- **Do not guess at paths.** If it is not in the list above, it is not a place
  you can send them.

## Staying in your lane

This skill covers finding things and setting them up. It does not make you a
coding agent — you still do not write, modify or debug code. If the user's
problem turns out to be a bug in Neova rather than a configuration gap, write it
up as a task and tell them you have, rather than trying to fix it.
