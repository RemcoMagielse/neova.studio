---
title: Replacement fields
description: The fields you can put in a skill or snippet, and what Neova fills in for each.
sidebar:
  order: 3
---

Replacement fields are placeholders in an action, skill or snippet. When it runs, Neova replaces each field with a value from the task, the wiki, your snippets, the project folder or your project files.

Neova fills in fields when you send an action to an agent, copy it from a task, run it from ⌘K or the menu bar, run it from the chat with `/`, or use it in the Composer.

## Write a field

| Syntax | Fills in |
|---|---|
| `{task.title}` | A task field |
| `{wiki.<page-id>}`, `{wiki.<page-id>.content}` | A wiki page, or one of its fields |
| `{app.tasksFolder}` | A project folder or file path |
| `{<key>}` | The content of the snippet with that replacement key |
| `[if:task.description]…[/if]` | The text between the tags, only when the task or app field has a value |

In the skill editor (**Settings › Skills**), type `{` to pick a field from a list.

A field that has no value stays in the text as you typed it. For example, `{task.tags}` on a task without tags stays `{task.tags}`. Wrap such a field in an `[if:…]` block to leave it out.

## Task fields

These fields take their value from the task the skill runs on.

| Field | Fills in | Example |
|---|---|---|
| `{task.id}` | The task ID | `1770562431528-8h` |
| `{task.title}` | The title | `Add user authentication` |
| `{task.description}` | The full description, in Markdown | |
| `{task.status}` | `pending` or `completed` | `pending` |
| `{task.tags}` | The tags, separated by commas | `feature, backend, auth` |
| `{task.stage}` | The name of the stage | `Implement` |
| `{task.createdAt}` | When the task was created | `2026-02-08T14:53:51.528Z` |
| `{task.updatedAt}` | When the task last changed | `2026-02-10T09:21:33.000Z` |
| `{task.history}` | The change log, one line per entry: source, date in your system's format, and message | `- **[System]** 10-2-2026, 09:21:33: Task created` |
| `{task.lastActivity}` | The message of the latest history entry | `Updated: description` |
| `{task.lastActivityDate}` | The time of the latest history entry | `2026-02-10T09:21:33.000Z` |

## Wiki fields

Use the page ID, as shown in the page's file name. A page in the Standards category with the ID `ux-guidelines` is stored as `.neova/wiki/standards/ux-guidelines.md`.

| Field | Fills in |
|---|---|
| `{wiki.ux-guidelines}` | The path of the page: `.neova/wiki/standards/ux-guidelines.md` |
| `{wiki.ux-guidelines.title}` | The page name |
| `{wiki.ux-guidelines.description}` | The short description of the page |
| `{wiki.ux-guidelines.content}` | The full Markdown content |
| `{wiki.ux-guidelines.id}` | The page ID |


## App fields

These fields fill in full paths in the open project.

| Field | Fills in | Example |
|---|---|---|
| `{app.neovaFolder}` | The `.neova` folder | `/Users/you/code/my-project/.neova` |
| `{app.tasksFolder}` | The tasks folder | `/Users/you/code/my-project/.neova/tasks` |
| `{app.archiveFolder}` | The task archive | `/Users/you/code/my-project/.neova/tasks/archive` |
| `{app.snippetsFolder}` | The snippets folder | `/Users/you/code/my-project/.neova/snippets` |
| `{app.stagesFile}` | The stages file | `/Users/you/code/my-project/.neova/stages.json` |

## Snippet fields

Give a snippet a replacement key in the snippet editor, for example `api-config`. `{api-config}` in a skill then fills in the content of that snippet.

A snippet can contain fields of its own, including other snippet keys. Neova keeps replacing until no field changes, up to 10 rounds.

## Conditional blocks

`[if:<field>]` and `[/if]` keep the text between them only when the field has a value. This works with task fields and app fields. Leave out the braces inside the tag.

```text
Work on {task.title}.
[if:task.description]
Details:
{task.description}
[/if]
```

On a task without a description, Neova leaves out the whole block.

## Order

Neova fills in fields in this order: app and wiki fields, snippet fields, task fields. It then repeats the round until nothing changes, so a field that a snippet adds is filled in too. After that, it removes blank lines beyond one in a row and spaces at the end of lines.

## Related

- [Settings › Skills](/settings/agents/)
- [Snippets](/tools/snippets/)
- [Wiki](/project/wiki/)
- [Composer](/tools/composer/)
