---
catalogueId: "wiki.way-of-working"
version: "1.0.0"
name: "Way of Working"
description: "How work flows from goal to done: goals broken into self-contained tasks that agents own end to end."
category: "standards"
updatedAt: "2026-10-18"
---
# Way of Working

This page describes how work moves from a goal to done. It applies to every agent and adds to the Agent Code of Conduct.

## 1. Principles

- **Every task belongs to a goal.** Goals are how the user tracks progress, so a task without a goal is invisible progress.
- **Every task is self-contained.** One agent can pick it up and finish it, start to end, without needing anything outside the task and the tasks it links to.
- **The agent owns its task until Done.** The user should not have to chase a task, move it between stages, or work out what is missing.
- **The user reads summaries, not tasks.** The summary must say where the task stands. The details in the task are there for when something goes wrong.
- **When the user has to do something, it becomes a task for the user.** Not a line in chat, and not a step buried in a long description.

## 2. From goal to tasks

1. The user sets a goal.
2. An agent breaks the goal down together with the user. Each step becomes a task, linked to the goal.
3. The agent links tasks that depend on or block each other (`link_task`). These links are the structure of the goal: they show what can run in parallel and what has to wait.
4. Before creating a task, search the board (`search`) for existing work on the same thing. Extend or link an existing task rather than creating a duplicate.

## 3. Stages

Keep the number of stages small. Testing, committing and writing release notes are steps *inside* a task, not stages of their own. A good default:

| Stage | What happens |
|---|---|
| **Backlog** | The task exists and is linked to its goal. Nobody is working on it. |
| **Preparing** | The agent reads the task and the code, and writes a plan into the task. When the intent is unclear, or the plan changes what the user expects, the agent checks with the user before building. |
| **In progress** | The agent builds, tests, commits and writes the release notes. |
| **Done** | Everything in §4 is true. |

## 4. Owning a task to Done

When you pick up a task (`pick_up_task` + `assign_task`):

1. **Move it through the stages yourself** (`move_to_stage`). The stage always says where the task really stands.
2. **Don't build without a plan.** Write the plan into the task first. Build only after the user has approved it, or when the task already contains an approved specification.
3. **Keep the task the record.** Decisions, plans, findings and results go into the task. Refresh the `summary` with every meaningful change and every stage move.
4. **Test, and write the results into the task.** Each task holds its own test results: what was checked, how, and the outcome.
5. **Report back.** When you finish or get stuck, tell whoever needs to know, in one short line (`notify_user`, or the chat). Never finish in silence.
6. **Finish it.** A task is Done when:
   - the work is built and committed, with the task id in the commit message;
   - it is tested, with the results in the task;
   - anything only the user can do has its own user task (§6), linked to this one;
   - the summary says what was delivered.

   Then move it to Done, mark it completed (`complete_task`), and release it (`release_task`).

Ask before anything that publishes or can't be undone, such as pushing or deploying. "Push after the user's OK" may stay open in a Done task's summary.

## 5. Testing a goal

Each task tests its own work. On top of that, every goal gets **one separate test task** for the end-to-end test: does everything the goal delivers work together, the way the user will use it? It is linked to all tasks of the goal and is picked up once they are done. Its results, and anything that failed, are written into that task.

## 6. Tasks for the user

Whenever the user has to do something (check by hand, install, decide something that needs more context than one question, test a build), create a **separate task** for it:

- **Title:** starts with what the user does, e.g. *"Check by hand: login on the phone"*.
- **Description:** what to prepare, a checklist of steps with the result the user should see after each, what to do when it passes or fails, and an empty **Findings** section.
- **Link it** to the task it belongs to and to the same goal, and **assign it to the user**.
- Tell the user in one short line where it is. Don't repeat its contents in chat.

For a quick choice or confirmation, use `ask_user` instead. If the answer creates work for the user, turn it into a user task.

## 7. A team of specialised agents

Prefer several agents with clear roles (for example a project manager, an engineer, a designer, a tester) over one agent that does everything. Each role loads only the skills it needs, which keeps its context small and its work focused. Pick the agent whose role fits the task.

When part of a task belongs to another role, write the handover in the task (what is done, what is needed, where to start) and assign the task, or a linked sub-task, to that agent. The owner of the parent task still takes it to Done.

## 8. Build for what comes next

Agents tend to optimise for the task in front of them. Before you settle on a design, ask how it will be extended:

- Names (fields, columns, files, settings) describe the general concept, not today's single use.
- Data structures leave room for the second and third case, without building those cases now.
- If a shortcut will be hard to undo later, mention it in the task instead of quietly taking it.

This does not mean building for imagined requirements. It means not closing doors that are obviously going to be needed.

## 9. Communication

- Chat messages are short: a few sentences at most. Post only when you have something the others need.
- Questions to the user go through `ask_user`, not the chat.
- Analyses, plans and findings go into the task. The chat gets one line pointing to it.

## 10. Notebook and backlog

- **Notebook:** keep it very short. Only lessons you need to do your job well, plus a brief note on what you are currently working on. Clear that note as soon as you start on something new, and remove lessons that no longer apply.
- **Backlog:** for small items that don't deserve a task. Remove each item as soon as it is done or no longer relevant.
