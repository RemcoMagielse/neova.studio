---
title: The .neova folder
description: Every file and folder Neova keeps in a project, what it holds, and what stays out of git.
sidebar:
  order: 4
---

Neova keeps all project data in a `.neova` folder in the project folder. Tasks, goals, the wiki, skills, snippets and agents are plain files there, so agents can read them and you can keep them in git.

Neova creates the folder when you set up a project. It adds missing folders and files each time you open the project, and never deletes anything it finds.

## Layout

```text
.neova/
├── project.md
├── stages.json
├── tag-colors.json
├── links.json
├── starred-files.json
├── assistant-config.json
├── agents-order.json
├── agent-memory-files.json
├── worktrees.json
├── editor-state.json
├── whiteboard.excalidraw
├── mcp-port
├── .gitignore
├── .git/
├── tasks/
│   └── archive/
├── goals/
├── wiki/
│   ├── assets/
│   └── <category>/
├── actions/
├── activities/
├── snippets/
├── agents/
│   └── chat/
├── schedules/
├── images/
├── collections/
├── workspace/
├── connectors/
├── access/
├── browser/
└── logs/
```

## Folders

| Folder | Holds | Format |
|---|---|---|
| `tasks/` | One file per task, named `<task-id>.md`. | Markdown with YAML frontmatter: `id`, `title`, `tags`, `status`, `stage`, `order`, `type`, `assignees`, `pickedUpBy`, `linkedTasks`, `attachments`, `history`, `createdAt`, `updatedAt`. The body is the description. |
| `tasks/archive/` | Archived tasks, in the same format. | Markdown, or JSON for older tasks |
| `goals/` | One file per goal, named `<goal-id>.md`. | Markdown with YAML frontmatter (`id`, `title`, `status`, `taskIds`). The body is the description. |
| `wiki/` | The Wiki. One folder per category, one file per page: `wiki/<category>/<page-id>.md`. | Markdown with a `description` in the frontmatter |
| `wiki/<category>/_category.md` | The category's `label`, `description` and `order`. | YAML frontmatter |
| `wiki/assets/` | Images used across wiki pages. | Image files |
| `actions/` | Actions. One file per action, named `<name>-<timestamp>.json`. Global actions are in the same format in Neova's own folder. | JSON: `id`, `name`, `description`, `template`, `isEnabled`, `order` |
| `activities/` | Skills. One file per skill, named `<name>-<timestamp>.json`. | JSON: `id`, `name`, `description`, `template`, `isEnabled` |
| `snippets/` | One file per snippet, named `<title>-<timestamp>.md`. | Markdown with YAML frontmatter |
| `agents/` | One file per agent, named `<agent-name>.md`, with its settings and instructions. | Markdown with YAML frontmatter. The body is the instructions. |
| `agents/<agent-name>.notebook.md` | The agent's notebook. | Markdown |
| `agents/<agent-name>.backlog.json` | The agent's backlog. Only present when the backlog has items. | JSON |
| `agents/chat/` | The group chat, one file per day: `messages-<YYYY-MM-DD>.jsonl`. | JSON Lines |
| `schedules/` | Scheduled actions, one file per schedule: `<id>.json`. | JSON |
| `images/` | Images attached to tasks, chat messages, notifications and answers, plus screenshots and link icons. | Image files |
| `collections/` | API Tester collections. One folder per collection, with `collection.json` and one JSON file per request. | JSON |
| `workspace/` | The state of **Agents › Activity**, open tabs and terminals. See [workspace/](#workspace). | JSON, JSON Lines |
| `connectors/` | Connector settings, one file per connector. | JSON |
| `access/` | MCP access keys (stored as hashes) and access presets. | JSON |
| `browser/` | **Tools › Browser** sessions, in `browser/sessions/`. Has its own `.gitignore` that keeps the whole folder out of git. | JSON |
| `logs/` | Terminal debug logs. | Text |

When a project is new, Neova seeds the Wiki with two categories, **Standards** (`wiki/standards/`) and **Reference** (`wiki/reference/`). The file `wiki/.initialized` records that this happened, so a category you delete does not come back.

## Files

| File | Holds | Format |
|---|---|---|
| `project.md` | The project description. Agents read it with `get_project_info`. | Markdown |
| `stages.json` | The stages, in order, with their colours and the actions shown as buttons on their tasks. A new project gets Backlog (the default stage), Prepare, Implement, Verify and Done. | JSON |
| `tag-colors.json` | Each tag and its colour. | JSON |
| `links.json` | The links on **Project › Overview**. | JSON |
| `starred-files.json` | The starred files in **Project › Files**. | JSON |
| `quickactions.migrated.json` | The old Quick Actions list, kept after it was copied into `actions/`. Safe to delete. | JSON |
| `assistant-config.json` | The Assistant's settings: start command, whether it is on and starts with the project, and its prompt template. | JSON |
| `agents-order.json` | The order of the agents on **Agents › Team**. | JSON |
| `agent-memory-files.json` | The memory files you added in **Agents › Agent Insights**. | JSON |
| `worktrees.json` | Whether goal worktrees are on, and which folder belongs to which goal. | JSON |
| `editor-state.json` | The state of the Composer: selected skill, task and text. | JSON |
| `whiteboard.excalidraw` | The whiteboard. | Excalidraw JSON |
| `mcp-port` | The port of this project's MCP server. Agents' connectors read it to find the server. | Text |
| `.gitignore` | Which `.neova` files stay out of git. See [What stays out of git](#what-stays-out-of-git). | Text |

Folders with template files contain a `.task-template.json`, `.activity-template.json` or `.snippet-template.json`. These show agents the shape of a file.

## workspace/

| File | Holds |
|---|---|
| `events-<YYYY-MM-DD>.jsonl` | Notifications, questions and answers on **Agents › Activity**, one file per day. |
| `state.json` | What you have read on **Agents › Activity**, and workspace settings such as how many days to keep events and whether agents are linked by name. |
| `tab-session.json` | The open tabs and split view, restored when you open the project again. |
| `terminal-links.json` | Which MCP connection is linked to which agent. |
| `schedule-state.json` | The run state of scheduled actions. The schedules themselves are in `schedules/`. |
| `avatars/` | Avatar images you uploaded for agents. |

## What stays out of git

Neova manages a block in `.neova/.gitignore`, between these two lines:

```text
# >>> Neova managed — do not edit inside this block
# <<< Neova managed
```

Neova rewrites only the lines inside the block. Anything you add outside it stays as it is.

The block keeps these out of git:

| Pattern | Why |
|---|---|
| `mcp-port`, `logs/`, `editor-state.json`, `agent-workspace.json`, `agent-workspace-state.json`, `workspace/`, `history.json`, `recovered/`, `tasks.json.backup`, `.DS_Store` | Runtime and per-machine state |
| `collections/history.json`, `collections/**/.responses/` | API Tester request history and saved responses |
| `agents/*.backlog.json`, `agents/chat/` | Agent backlogs and the chat log |
| `connectors/`, `access/`, `browser/` | Personal data, keys and logins |
| `images/` | Large binary files |

Everything else in `.neova` is kept in git: tasks, goals, the wiki, skills, snippets, agents and their notebooks, stages, tags, links and the other project files.

In **Settings › Git** you can stop keeping a history of some folders. Each choice you turn off adds its patterns to the block:

| Choice | Adds |
|---|---|
| **tasks/** | `tasks/` |
| **wiki/** | `wiki/` |
| **agents/ (incl. notebooks)** | `agents/` |
| **goals/ · skills/** | `goals/`, `activities/` |
| **snippets/** | `snippets/` |

When a project has no `.neova/.gitignore`, Neova creates it with the block when you open the project.

## Neova Git

Neova Git keeps a history of the `.neova` folder in its own git repository, in `.neova/.git`. It is separate from your code repository and uses the branch `neova`.

Set it up in **Settings › Git** with **Set up Neova Git**. Setup adds `.neova/` to your code repository's `.git/info/exclude`. That file is local and is not committed.

After setup, Neova commits changes in `.neova` by itself, 3 seconds after files stop changing. When you open the project, it also commits changes made while Neova was closed. Each commit records the name of the computer it was made on. The `.gitignore` block above decides which files Neova Git keeps.

Browse the history on **Tools › Git**. The **Neova Git** item in the status bar shows its state.

## Related

- [Settings › Git](/settings/system/)
- [Git](/tools/git/)
- [Wiki](/project/wiki/)
- [Settings › Skills](/settings/agents/)
- [Connect a coding agent](/reference/connect-a-coding-agent/)
