---
title: Replacement Fields
description: Dynamic variables and syntax for creating context-aware templates with task data, snippets, and file references.
---

Replacement fields are placeholders in templates that get replaced with actual values when the template is used. They make your templates dynamic and context-aware.

## Syntax Overview

Neova supports several types of replacement fields:

| Syntax | Type | Example |
|--------|------|---------|
| `{task.xxx}` | Task variables | `{task.title}` |
| `{app.xxx}` | App variables | `{app.neovaFolder}` |
| `{key}` | Snippet references | `{coding-standards}` |
| `@filename` | File references | `@package.json` |
| `[if:xxx]...[/if]` | Conditional blocks | `[if:task.description]...[/if]` |

## Task Variables

Task variables insert information about the current task. Use these to make templates adapt to each task's context.

### Available Task Variables

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `{task.id}` | Unique task identifier | `task-1234567890-abc` |
| `{task.title}` | Task name | `Fix login button` |
| `{task.description}` | Full task description | `The login button doesn't respond...` |
| `{task.status}` | Current status | `in-progress` |
| `{task.tags}` | Comma-separated tags | `bug, frontend, urgent` |
| `{task.stage}` | Current stage name | `Implement` |
| `{task.createdAt}` | Creation date | `2024-01-15T10:30:00Z` |
| `{task.updatedAt}` | Last update date | `2024-01-16T14:22:00Z` |
| `{task.history}` | Task activity history | Activity log entries |
| `{task.lastActivity}` | Most recent activity | `Moved to Implement` |
| `{task.lastActivityDate}` | Date of last activity | `2024-01-16T14:22:00Z` |

### Example Usage

```
You are working on the following task:

Title: {task.title}
Description: {task.description}
Tags: {task.tags}
Current Stage: {task.stage}

Please implement this feature following our coding standards.
```

## App Variables

App variables provide paths and configuration values from the Neova application.

### Available App Variables

| Variable | Description | Example Value |
|----------|-------------|---------------|
| `{app.neovaFolder}` | Path to `.neova` folder | `/project/.neova` |
| `{app.tasksFolder}` | Path to tasks folder | `/project/.neova/tasks` |
| `{app.archiveFolder}` | Path to archive folder | `/project/.neova/archive` |
| `{app.snippetsFolder}` | Path to snippets folder | `/project/.neova/snippets` |
| `{app.stagesFile}` | Path to stages config | `/project/.neova/stages.json` |

### Example Usage

```
Project configuration is stored in: {app.neovaFolder}

When you complete tasks, archive them to: {app.archiveFolder}
```

## Snippet References

Snippets are reusable text blocks stored in your project. Reference them by their replacement key.

### Syntax

```
{snippet-key}
```

The key is defined when you create a snippet. For example, if you have a snippet with the key `coding-standards`, use:

```
Follow these standards:

{coding-standards}
```

### Creating Snippets with Keys

1. Go to **Snippets** in the sidebar
2. Create or edit a snippet
3. Set a **Replacement Key** (e.g., `coding-standards`)
4. Use `{coding-standards}` in your templates

:::tip
Snippet keys should be lowercase with hyphens. Avoid spaces and special characters.
:::

## File References

File references include the contents of a file from your project.

### Syntax

```
@filename
```

Reference files by their name:

```
Review the current configuration:

@package.json

And update dependencies as needed.
```

### Using Autocomplete

The template editor helps you find files:

1. Type `@` in the editor
2. An autocomplete dropdown appears
3. Type to filter by filename
4. Select a file to insert the reference

### Limitations

- File references resolve to the file at the time of use
- Very large files may be truncated
- Binary files are not supported

## Conditional Blocks

Conditional blocks let you include or exclude content based on whether a variable has a value.

### Syntax

```
[if:variable]Content to include if variable has a value[/if]
```

### How It Works

- If the variable has a **non-empty value**, the content inside the block is included
- If the variable is **empty or undefined**, the entire block is removed

### Example

```
Task: {task.title}

[if:task.description]
## Description
{task.description}
[/if]

[if:task.tags]
Tags: {task.tags}
[/if]
```

In this example:
- The description section only appears if the task has a description
- The tags line only appears if the task has tags assigned

### Valid Variables for Conditionals

You can use any task variable in conditionals:

- `[if:task.id]` - Task has an ID
- `[if:task.title]` - Task has a title
- `[if:task.description]` - Task has a description
- `[if:task.status]` - Task has a status
- `[if:task.tags]` - Task has tags
- `[if:task.history]` - Task has history entries
- `[if:task.lastActivity]` - Task has recent activity

### Nesting

Conditional blocks cannot be nested. Each `[if:...]` must have exactly one matching `[/if]`.

:::caution
Unmatched conditional blocks will cause validation errors. Always ensure each `[if:variable]` has a corresponding `[/if]`.
:::

## Editor Features

### Syntax Highlighting

The template editor color-codes different variable types:

| Type | Color |
|------|-------|
| Task variables | Blue |
| App variables | Green |
| Snippet references | Purple |
| File references | Amber |
| Conditional blocks | Pink |

This helps you quickly identify variables in complex templates.

### Autocomplete

Trigger autocomplete by typing:

- `{` - Shows task variables, app variables, and snippets
- `@` - Shows project files

Navigate with arrow keys and press **Tab** or **Enter** to insert.

## Nested Replacements

Neova supports nested replacements. If a snippet contains variables, they are resolved in sequence:

```
Template: "Task: {task.title} - {project-intro}"
Snippet (project-intro): "Working in {app.neovaFolder}"
Result: "Task: Fix bug - Working in /project/.neova"
```

The engine processes up to 10 iterations to resolve nested references.

## Example: Brainstorm Template

Here's a complete template demonstrating variables, conditionals, and app references:

```
## Goal
Your goal is to generate ideas and think of creative solutions together
with the user. You bring experience in UX design, Visual Design, Software
Development, and DevOps. You should engage in a dialogue with the user to
discover WHAT he wants to achieve. Think creatively, out-of-the-box. Be a
good sparring partner for the user. Build upon each other's ideas.

[if:task.id]
## Preparation
Read the task {task.id}.json located in {app.tasksFolder}. This is the
topic to brainstorm about.
[/if]

## Process
Follow this process:
- Clarify what the user wants to brainstorm about? This could be anything
  (example: new feature, improvement of an existing feature, or how to
  deal with a bug or issue).
- Once you have identified the goal of the user, gather as much information
  as possible to clarify the requirements. You can ask as many questions
  as needed.
- If needed: Check and validate the current implementation in the codebase.
- You can propose your own ideas or solutions to improve the idea.

Once you both agree that you have found a solution: offer to create a new
task for the user.

## Document your outcome
Here is how to write your findings:
- Each task is stored in a JSON file. You can find an example of the task
  structure in {app.tasksFolder} in the file called '.task-template.json'.
- Open the file and add your findings to the field 'description'. You can
  use markdown formatting. Make sure to use escape characters, otherwise
  the JSON file gets corrupted.
```

This template demonstrates:

- **Conditional blocks** - The "Preparation" section only appears when a task ID exists
- **Task variables** - `{task.id}` inserts the current task's identifier
- **App variables** - `{app.tasksFolder}` provides the path to task storage

## Best Practices

### Variable Selection

- Use `{task.title}` and `{task.description}` for context
- Add `{task.tags}` when categorization matters
- Include `{task.stage}` for stage-specific instructions

### Snippet Organization

- Create snippets for frequently repeated content
- Use descriptive keys: `react-component-template`, `api-error-handling`
- Keep snippets focused and single-purpose

### File References

- Reference configuration files for context
- Avoid referencing files that change frequently
- Use for code examples or standards documentation

### Template Structure

A well-structured template:

```
## Context
Task: {task.title}
Description: {task.description}

## Standards
{coding-standards}

## Reference Files
@tsconfig.json

## Instructions
[Your specific instructions here]
```

## Troubleshooting

### Variable Not Replaced

If a variable appears unchanged:

- Check the syntax (curly braces, correct key name)
- Verify the task has the expected data
- For snippets, confirm the replacement key exists

### File Not Found

If a file reference doesn't resolve:

- Verify the file exists in your project
- Check the exact filename (case-sensitive)
- Ensure the file is in the project directory

### Snippet Not Found

If a snippet reference doesn't resolve:

- Confirm the snippet has a replacement key set
- Check for typos in the key name
- Verify the snippet exists in your snippets list
