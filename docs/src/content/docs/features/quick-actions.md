---
title: Quick Actions
description: Configure fast-access shortcuts to your most-used templates for rapid task execution.
---

Quick Actions provide one-click access to your most frequently used templates. Instead of navigating through menus, you can execute common actions instantly from the task view.

## Understanding Quick Actions

Quick Actions are shortcuts to templates. When you add a template as a Quick Action:

- It appears in the Quick Actions bar on tasks
- You can execute it with a single click
- The order can be customized to prioritize your most-used actions

Quick Actions can reference both **Project Templates** and **Global Templates**, giving you flexibility in how you organize your workflow.

## Accessing Quick Actions Settings

To configure Quick Actions:

1. Navigate to **Settings** in the sidebar
2. Click the **Templates** tab
3. Select the **Quick Actions** sub-tab

You'll see a two-column interface:

| Column | Purpose |
|--------|---------|
| **Active Quick Actions** | Templates currently enabled as quick actions (drag to reorder) |
| **Available Templates** | All templates not yet added as quick actions |

## Adding a Quick Action

1. In the **Available Templates** column, find the template you want
2. Click the **plus icon** on that template
3. The template moves to the **Active Quick Actions** column

Templates are labeled to show their source:

- **Project** badge - Project-specific templates
- **Global** badge - Templates available across all projects

## Removing a Quick Action

1. In the **Active Quick Actions** column, find the template
2. Click the **minus icon**
3. The template returns to the **Available Templates** column

Removing a Quick Action doesn't delete the template—it only removes the shortcut.

## Reordering Quick Actions

The order of Quick Actions determines how they appear in the task view. To reorder:

1. In the **Active Quick Actions** column, hover over a template
2. Grab the **drag handle** (six dots on the left)
3. Drag the template to its new position
4. Release to drop

Place your most-used actions at the top for faster access.

## Using Quick Actions

Once configured, Quick Actions appear in the task detail view:

1. Open any task
2. Look for the Quick Actions bar (usually near the top)
3. Click an action to execute it

When you click a Quick Action:

1. The template content is loaded
2. Replacement fields are populated with task data
3. The instruction is ready to copy or send to your AI agent

## Best Practices

### Choosing Quick Actions

- **Prioritize frequency** - Add templates you use daily
- **Consider context** - Different stages may need different actions
- **Limit quantity** - Too many quick actions can be overwhelming

### Organizing Your Actions

- **Order by workflow** - Put related actions near each other
- **Most used first** - Your top 2-3 actions should be at the start
- **Review periodically** - Remove actions you no longer use frequently

### Mixing Project and Global

- Use **Global Templates** for actions that work across any project
- Use **Project Templates** for project-specific workflows
- Both can coexist in your Quick Actions bar

## Storage

Quick Actions configuration is stored in your project at:

```
.neova/quickactions.json
```

This file contains:

```json
{
  "items": [
    { "templateId": "custom-123-abc", "order": 0 },
    { "templateId": "custom-456-def", "order": 1 }
  ]
}
```

The configuration:

- References templates by ID (both project and global)
- Stores the display order
- Is project-specific (each project can have different Quick Actions)

:::tip
Commit `quickactions.json` to version control to share your Quick Actions configuration with your team.
:::

## Troubleshooting

### Quick Action Not Appearing

If a Quick Action doesn't show up:

- Verify the source template still exists
- Check if it's in the Active column in settings
- Reload the application if needed

### Template Was Deleted

If you delete a template that was a Quick Action:

- The Quick Action is automatically removed
- No manual cleanup is required

### Order Not Saving

If reordering doesn't persist:

- Ensure you complete the drag-and-drop action
- Check that the project folder is writable
- Look for error messages in the console
