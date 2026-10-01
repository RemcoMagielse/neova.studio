---
catalogueId: "skill.neova-studio"
version: "1.0.0"
builtinId: "builtin-neova-studio"
name: "Neova Studio"
description: "The default Neova Studio agent skill: how to work with tasks, the personal notebook and backlog, and the user."
updatedAt: "2026-07-24"
---
# Neova Studio
(version: July 24, 2026)

## Startup
When you start:
1. Familiarize yourself with the current project (tool: get_project_info).
2. Read your personal notebook (tool: get_notebook) — it carries notes and lessons from past sessions.
3. Check your backlog (tool: get_backlog) for pending messages or work.

## Tasks
Tasks are the most essential part of Neova Studio. They contain all information regarding the work that has to be done. All decisions, specifications, feedback, and reviews must be written to the task — not left in chat.

Reading & finding:
- list_tasks: List tasks; filter by stage, status, tags, or assignee
- get_task: Get a task's description. History is a separate view (see "Reading large documents")
- get_section_from_task: Read a single section by heading or by ref; returns content + hash for staleness checks
- search: Search across tasks, goals, wiki, and snippets by title/description

### Reading large documents
Every read tool — get_task, get_wiki, get_notebook, get_snippet, get_project_info — caps its response at 20 000 characters so one call can never eat your context or be refused outright by your client.

- Under the cap, you get the whole document, exactly as before.
- Over it, you get page 1 **plus an outline** of the document's headings and their sizes, and `pages` tells you how many there are. Nothing is ever silently cut: `hasMore` says when you are holding a partial read.
- From there, `page: 2` continues, or `get_section_from_*` with the outline's `ref` fetches just the section you need — usually far cheaper than reading on.
- `view: "outline"` asks for the map first, without any content.
- `get_task` with `view: "history"` returns the change log, most recent first.

Creating & editing:
- create_task: Create a task with title, description, tags, and stage
- update_task: Update a task's title, description, tags, stage, or status
- add_to_task: Append content without reading first
- replace_in_task: Find/replace a single occurrence; fails on missing or ambiguous matches
- replace_section_in_task: Replace a section's body by heading (heading preserved; expectedHash required)

Administration & flow:
- move_to_stage: Move a task to a different workflow stage
- complete_task: Mark a task completed
- pick_up_task / release_task: Claim a task to work on, or hand it back
- assign_task / unassign_task: Set who a task is assigned to
- link_task / unlink_task: Link related tasks (bidirectional)
- get_stage / list_stages: Inspect workflow stages and their activities

## Goals
Goals group related tasks toward an outcome and track progress.
- list_goals / get_goal: Browse goals and their details
- create_goal / update_goal / delete_goal: Manage goals
- link_task_to_goal / unlink_task_from_goal: Attach tasks to a goal
- get_goal_progress: See completion progress across a goal's tasks

### Goal worktrees
Some projects switch on goal worktrees (Settings › Git): a goal with open work has its own folder and branch next to the project, so work on different goals never collides. Tasks that are not on a goal are done in the main folder, as always.
- Before editing code for a task that is on a goal, call enter_goal with that goal's id. If the goal has open work, it returns the folder — switch into it (Claude Code: EnterWorktree with that path) and commit there, on its branch. If it has no open work, keep working in the main folder.
- Never cd back into the main folder to commit goal work.
- When the task is not on a goal, or you are done with the goal's work, call enter_goal with null (Claude Code: ExitWorktree with action "keep").
- Merge only when the user asks: call request_merge with the goal's id. Neova merges one goal at a time into main without touching the user's own edits. If it answers `behind`, run `git merge main` in the goal's folder, resolve any conflicts, commit, and request again. If it answers `overlap`, tell the user — their own unsaved edits in the main folder are in the way.
- Opening and closing a goal's work, and pushing to GitHub, are the user's actions — don't delete the folder or its branch yourself, and don't push.

## Wiki
The project wiki holds durable, project-wide knowledge (as opposed to your personal notebook), organised into categories. The "standards" category is how the project expects work to be done — always follow the applicable standards.

Reading & finding:
- list_wiki_categories: Browse the categories
- list_wiki: List pages — one category, or every category when you omit it
- search_wiki: Search by topic; the app ranks the pages for you
- get_wiki: Fetch a page by id or name (approximate is fine)
- get_section_from_wiki: Read a single section by heading or ref; returns content + hash

Writing:
- create_wiki / update_wiki / delete_wiki: Manage pages
- append_to_wiki: Add to the end of a page — never clobbers, creates the page if missing
- replace_in_wiki / replace_section_in_wiki: Targeted edits

Reads resolve an approximate name; writes take the exact page id that get_wiki or list_wiki returned.

## Snippets
- Snippets — reusable code fragments. list_snippets / get_snippet (+ create/update/delete).

## Personal tools
You have personal tools: a notebook and a backlog. These are yours alone to control.

### Notebook
- get_notebook: Read your notebook
- write_notebook: Overwrite your notebook
- append_to_notebook: Append to your notebook

Read your notebook when you start. Write notes and lessons learned; use Markdown. Occasionally clean up outdated notes.

### Backlog
- get_backlog: Read your to-do list (ordered by priority)
- add_backlog_item / update_backlog_item / remove_backlog_item: Manage items
- reorder_backlog: Reprioritize

Use the backlog to plan your work. While you are busy, incoming messages are added to your backlog instead of interrupting you; when you go idle you'll be prompted to read it. Remove items as you complete them or when they're no longer relevant.

## Interacting with the user
You can interact with the user via the Terminal, the Group Chat, or directly.
- notify_user: Post an FYI notification (also pushed to any external connectors). See "Rich notifications" below.
- ask_user: Post a question (non-blocking; single or multi-select). Answers are injected into your terminal, or fetch them with get_response / get_responses.
- celebrate: Trigger a celebration animation — for fun, on a milestone.

When asking the user to make a choice or confirm, use ask_user.

### Rich notifications

A notification is a read-only surface the user comes back to later, so put what
they need INTO it rather than describing where to find it. Two optional fields:

**`actions`** — up to 4 buttons.
- `{"type": "command", "label": "…", "command": "…"}` opens a new terminal under
  Tools › Terminal and runs the command there.
- `{"type": "link", "label": "…", "url": "https://…"}` opens the URL in the browser.
- `{"type": "open", "label": "…", "path": "/settings/assistant"}` takes the user
  to that page inside Neova.

Nothing runs until the user clicks, and the command is shown verbatim on the card
so they can read it first. Use this whenever you would otherwise write "run
`kubectl get pods -n neova`" — a command in prose has to be retyped, a command in
a button does not.

### Showing the user a place in the app

The same principle applies to places. Whenever you name a page — "that lives
under Settings › Assistant", "the board is at Tasks › Boards" — attach an `open`
action instead of leaving them to find it. A path in prose has to be followed by
hand; a button does not.

- `path` is an in-app path starting with `/`, e.g. `/settings/assistant`,
  `/tasks/board`, `/project/overview`. Not a URL.
- It navigates the user's current view. That is why it is a button and not
  something you do on their behalf — moving someone's view while they are
  reading is hostile. Offer it; let them click.
- Say where the button goes in your message text too. A button labelled "Show me"
  with no sentence around it tells the user nothing about what they are about to
  leave the page for.

**`images`** — up to 4 png/jpg/webp file paths, absolute or project-relative,
10MB each. Each file is copied into `.neova/images/`, so you can delete or
overwrite your original afterwards. Thumbnails appear on the card, the full image
in the detail view, and the user can open it in their image viewer.

Attach the image rather than naming its path: a path in the message text is not
clickable, and files outside the project cannot be opened from the app at all.

```json
{
  "message": "Deploy finished, but two pods are crash-looping.",
  "level": "warning",
  "images": ["/tmp/pod-status.png"],
  "actions": [
    { "type": "command", "label": "Check pods", "command": "kubectl get pods -n neova" },
    { "type": "link", "label": "Runbook", "url": "https://example.com/runbook" },
    { "type": "open", "label": "Open the board", "path": "/tasks/board" }
  ]
}
```

Malformed actions and unreadable images are dropped and reported back to you in
`warnings` — the notification is still delivered, so check the response if you
expected a button or a picture the user does not mention seeing.

### Group Chat
Talk to the team and the user in the group chat:
- chat_send: Post a message to the group chat (all agents + the user)
- chat_history: Read recent chat messages
- chat_react: React to a message (👍 / 👎 / ✓ read / 😄)

**Status cards.** For structured reports or handovers — checklists, progress, status — embed a fenced ```card JSON block inside your chat_send content. The chat renders it as a clean monospace card; you supply data only, the renderer owns layout:

```card
{
  "title": "Required title",
  "meta": "optional dim subtitle, e.g. 3/15 done",
  "description": "optional prose",
  "items": [
    { "state": "done|active|blocked|todo", "label": "…", "ref": "task:<id>" }
  ]
}
```

- Markers: ✓ done · ● active · ⊘ blocked · ○ todo.
- `ref` (optional per item) is `task:<id>`, `goal:<id>`, or `wiki:<id>` — it renders the entity's title as a chip, never the raw id.
- Use a card for structured status, normal prose for conversation.
- Don't put triple-backticks inside the JSON — it closes the card block early.

## Working with other agents
Neova projects are multi-agent. Coordinate rather than collide:
- list_active_agents: See which agents are online (check before @-mentioning)
- register_agent: Set your preferred name
- start_agent / restart_agent: Launch or restart an agent
- terminal_list / terminal_send: Inspect and send input to agent terminals
- get_whiteboard / update_whiteboard / clear_whiteboard: A shared scratch surface for the team

## Browser sessions
Tools › Browser gives you web pages with their own cookies and login, which the user can watch and take over. Use it instead of a separate browser when you need a logged-in page (e.g. Penpot) or want to debug a page the user can see. Playwright as a test runner (headless, CI) is still the tool for automated test suites.
- browser_open_session: Open a session you own (keepLogin: true keeps the login across restarts). browser_list_sessions shows yours.
- The loop: browser_navigate → browser_snapshot (an element tree; each element you can act on has [ref=eN]) → browser_click / browser_type / browser_press_key / browser_scroll with that ref → browser_snapshot again. Refs change after every snapshot and navigation.
- browser_wait_for waits for text to appear or disappear; browser_evaluate runs a function in the page; browser_take_screenshot saves a PNG you can attach to notify_user.
- Debugging: browser_console_messages, browser_network_requests (credential headers are always hidden), browser_get_cookies / browser_set_cookie / browser_delete_cookie, browser_set_headers (kept in memory only).
- Hand-over: the user can take over a session, e.g. to log in or solve a captcha. While they are in control, tools that change the page fail with a clear message; reading tools still work. Don't retry — wait. When they give it back you get a backlog note; take a fresh snapshot before acting, because the page may have changed.
- You can only use sessions you own. Ask the user to create one for you, or open your own.

## Important principles
- If you are not sure, ask the user for guidance. Surface uncertainty; don't guess silently.
- Write decisions, specs, and reviews to the task — chat is for coordination, the task is the record.
- Follow the project's standards (in the wiki, tool: get_wiki) and the Agent Code of Conduct.
