---
title: Replacement Fields
description: Reference for dynamic replacement fields in activity templates.
sidebar:
  order: 6
---

Replacement fields are dynamic placeholders that get filled in automatically when you render an activity template. They let you create reusable prompts that pull in context from the current task, project, and snippets.

Syntax: `{variable.name}` or `@filename`

## Task Variables

Insert information from the current task.

| Pattern | Description | Example Output |
|---------|-------------|----------------|
| `{task.id}` | Task ID | `1770562431528-8h` |
| `{task.title}` | Task title | `Add user authentication` |
| `{task.description}` | Full description | *(markdown content)* |
| `{task.status}` | Current status | `pending` or `completed` |
| `{task.tags}` | Tags as comma-separated list | `feature, backend, auth` |
| `{task.stage}` | Current stage name | `Implement` |
| `{task.createdAt}` | Creation timestamp | `2026-02-08T14:53:51.528Z` |
| `{task.updatedAt}` | Last update timestamp | `2026-02-10T09:21:33.000Z` |
| `{task.history}` | Full history log | *(JSON array)* |
| `{task.lastActivity}` | Most recent history message | `Updated: description` |
| `{task.lastActivityDate}` | Most recent activity date | `2026-02-10T09:21:33.000Z` |

## App Variables

Insert paths and configuration from the project.

| Pattern | Description | Example Output |
|---------|-------------|----------------|
| `{app.neovaFolder}` | Neova data folder | `.neova` |
| `{app.tasksFolder}` | Tasks folder path | `.neova/tasks` |
| `{app.archiveFolder}` | Archive folder path | `.neova/tasks/archive` |
| `{app.snippetsFolder}` | Snippets folder path | `.neova/snippets` |
| `{app.stagesFile}` | Stages config path | `.neova/stages.json` |

## Standards

Insert project standard content. Replace `key` with your standard's ID (e.g., `ux-guidelines`).

| Pattern | Description |
|---------|-------------|
| `{standards.key}` | File path (default) |
| `{standards.key.title}` | Display name |
| `{standards.key.description}` | Short description |
| `{standards.key.content}` | Full markdown content |
| `{standards.key.id}` | Kebab-case ID |

**Example:**

```
Follow the guidelines in {standards.api-design.content}
```

## Snippets

Insert reusable text snippets. Each snippet can have a **replacement key** set in Settings → Snippets.

| Pattern | Description |
|---------|-------------|
| `{snippet-key}` | Inserts the snippet content |

**Example:** If you have a snippet with key `read-task`:

```
{read-task}
```

Becomes:

```
Read the task description and understand the requirements.
```

## File References

Reference project files by name. Returns the file path.

| Pattern | Description |
|---------|-------------|
| `@filename` | Path to file |

**Example:**

```
Check the configuration in @package.json
```

## Try It Yourself

Copy this template into an activity to see all replacement fields in action:

```markdown
## Task Information
- **ID:** {task.id}
- **Title:** {task.title}
- **Stage:** {task.stage}
- **Status:** {task.status}
- **Tags:** {task.tags}
- **Created:** {task.createdAt}
- **Updated:** {task.updatedAt}

## Task Description
{task.description}

## Last Activity
{task.lastActivity} ({task.lastActivityDate})

## Project Paths
- Neova folder: {app.neovaFolder}
- Tasks folder: {app.tasksFolder}
- Archive folder: {app.archiveFolder}
- Snippets folder: {app.snippetsFolder}
- Stages file: {app.stagesFile}
```

## Nested Replacements

Replacement fields are processed iteratively. If a snippet contains other replacement fields, they will also be resolved.

**Example:**

- Snippet `read-task` contains: `Read task {task.id} titled "{task.title}"`
- Template contains: `{read-task}`
- Final output: `Read task 1770562431528-8h titled "Add user authentication"`
