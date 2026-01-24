---
title: Templates
description: Create reusable instruction templates for AI coding agents with dynamic content and variables.
---

Templates are reusable instruction sets for AI coding agents. They define what an agent should do when working on a task, and can include dynamic content that adapts to each task's context.

## Understanding Templates

A template contains:

- **Name** - A short, descriptive title
- **Description** - What the template does (max 120 characters)
- **Template Content** - The actual instructions with optional replacement fields

Templates can be used directly or assigned to stages as activities. When assigned to a stage, the template provides context-aware instructions for tasks in that stage.

## Template Types

Neova supports two types of templates:

| Type | Scope | Storage | Use Case |
|------|-------|---------|----------|
| **Project Templates** | Single project | `.neova/activities/` | Project-specific workflows |
| **Global Templates** | All projects | User data folder | Reusable across projects |

### Project Templates

Project templates are stored within your project and are only available in that project. They're ideal for:

- Project-specific coding standards
- Custom workflows unique to your codebase
- Templates that reference project-specific files or patterns

### Global Templates

Global templates are stored in your user data folder and available across all projects. They're ideal for:

- General-purpose instructions (debugging, code review, testing)
- Personal productivity templates
- Templates you want to reuse across multiple projects

## Accessing Templates

To manage templates:

1. Navigate to **Settings** in the sidebar
2. Click the **Templates** tab
3. Select either **Project Templates** or **Global Templates**

## Creating a Template

1. Click the **Add Template** button
2. Fill in the template details:
   - **Title** - A descriptive name (e.g., "Code Review", "Write Unit Tests")
   - **Description** - Brief explanation of what it does
   - **Template Content** - The instructions for the AI agent
3. Click **Create Template**

### Writing Template Content

Template content is plain text with optional replacement fields. Write clear, specific instructions:

```
Review the following task and provide implementation guidance.

Task: {task.title}
Description: {task.description}

Please analyze the requirements and suggest:
1. Implementation approach
2. Potential challenges
3. Testing strategy
```

See [Replacement Fields](/features/replacement-fields) for all available variables.

### Using the Editor

The template editor provides:

- **Syntax highlighting** - Variables are color-coded by type
- **Autocomplete** - Type `{` to see available variables
- **File references** - Type `@` to reference project files

## Editing a Template

1. Click on a template row in the list
2. The edit modal opens with current values
3. Make your changes
4. Click **Save Changes**

:::note
Changes to a template do not affect activities that already use it. Activities store a snapshot of the template at the time they were created.
:::

## Duplicating a Template

To create a copy of an existing template:

1. Click the **copy icon** on the template row
2. A new template opens with the content pre-filled
3. The name is automatically numbered (e.g., "Code Review 2")
4. Modify as needed and save

## Deleting a Template

1. Click the **trash icon** on the template row
2. Confirm the deletion

:::caution
Deleting a template cannot be undone. However, activities that use the template are not affected since they store their own copy.
:::

## Searching and Filtering

### Search

Use the search box to filter templates by name or description. The list updates in real-time as you type.

### Filter by Stage

Use the stage dropdown to show only templates that are used as activities in a specific stage. This helps you find templates associated with particular workflow phases.

## Importing Templates

You can import templates from another Neova project:

1. Click **Import Templates**
2. Select the source project's `.neova/activities` folder
3. Choose which templates to import
4. Resolve any naming conflicts
5. Complete the import

This is useful for:

- Sharing templates between projects
- Migrating to a new project
- Backing up and restoring templates

## Storage

### Project Templates

Stored as individual JSON files in:

```
.neova/activities/{name}-{timestamp}.json
```

Each file contains the template definition:

```json
{
  "id": "custom-1234567890-abc",
  "name": "Code Review",
  "description": "Review code for quality and best practices",
  "template": "Review the following code...",
  "isEnabled": true
}
```

### Global Templates

Stored in your user application data folder:

- **macOS**: `~/Library/Application Support/neova/activities/`
- **Windows**: `%APPDATA%/neova/activities/`
- **Linux**: `~/.config/neova/activities/`

## Best Practices

### Writing Effective Templates

- **Be specific** - Clear instructions produce better results
- **Use variables** - Dynamic content makes templates more reusable
- **Structure your output** - Tell the agent what format you expect
- **Include context** - Reference relevant task information

### Organizing Templates

- **Use descriptive names** - "Debug React Component" vs "Debug"
- **Write clear descriptions** - Help future you understand the purpose
- **Separate concerns** - Create focused templates rather than all-in-one

### Project vs Global

- Start with **global templates** for general tasks
- Create **project templates** when you need project-specific context
- Consider moving useful project templates to global for reuse
