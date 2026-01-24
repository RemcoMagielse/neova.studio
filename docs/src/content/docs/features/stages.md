---
title: Stages
description: Organize your workflow with customizable stages and activities for task management.
---

Stages define your workflow pipeline in Neova. Each stage represents a phase in your development process, and tasks move through stages as they progress from idea to completion.

## Understanding Stages

A typical workflow might include stages like:

- **Backlog** - Ideas and future work
- **Prepare** - Tasks being planned or designed
- **Implement** - Active development work
- **Verify** - Testing and review
- **Done** - Completed tasks

You can customize stages to match your team's workflow, whether you follow Kanban, Scrum, or your own process.

## Accessing Stage Configuration

To configure stages:

1. Navigate to **Settings** in the sidebar
2. Click the **Stages** tab
3. You'll see your current stages listed with their activities

## Managing Stages

### Adding a Stage

1. Click the **+ Add Stage** button in the top right
2. Enter a name for your stage
3. Select a color from the palette
4. Click **Save**

The new stage appears at the bottom of the list. You can reorder it afterward.

### Editing a Stage

1. Click the **pencil icon** on any stage
2. Modify the name or color
3. Click **Save**

:::note
When you rename a stage, all tasks assigned to that stage are automatically updated to use the new name.
:::

### Deleting a Stage

1. Click the **trash icon** on the stage you want to remove
2. Confirm the deletion

:::caution
You cannot delete the last remaining stage. Neova requires at least one stage to function.
:::

### Reordering Stages

Drag and drop stages to change their order:

1. Hover over the stage to reveal the **drag handle** (six dots on the left)
2. Click and hold the drag handle
3. Drag the stage to its new position
4. Release to drop

The order of stages determines how they appear in the task board and other views.

### Setting a Default Stage

The default stage is where new tasks are created. To set a default:

1. Click the **checkmark icon** on the stage you want as default
2. The "Default" badge moves to that stage

Only one stage can be the default at a time.

## Activities

Activities are predefined actions you can perform on tasks within a stage. They connect to templates that provide instructions for AI agents.

### What Are Activities?

Each activity links to a template that defines:

- Instructions for an AI coding agent
- Context about the task
- Expected outputs or actions

For example, a "Debug" activity might link to a template that instructs the AI to analyze code, identify root causes, and document findings.

### Adding Activities to a Stage

1. Click the **expand arrow** on a stage to reveal its activities
2. Click the **+ button** to add an activity
3. Select a template from the picker (project templates or global templates)
4. The activity is added to the stage

:::tip
Activities create a snapshot of the template at the time they're added. This means your stage configuration won't break if the original template is modified later.
:::

### Editing an Activity

1. Click the **pencil icon** on the activity
2. Modify the display name
3. Click **Save**

The display name is independent of the template name, allowing you to customize how activities appear in your workflow.

### Deleting an Activity

1. Click the **trash icon** on the activity
2. Confirm the deletion

### Reordering Activities

Within a stage, you can reorder activities:

1. Hover over the activity to reveal the **drag handle**
2. Drag the activity to its new position within the same stage
3. Release to drop

## Storage

Stage configuration is stored in your project at:

```
.neova/stages.json
```

This file contains:

- All stage definitions (name, color, order, default status)
- Activities for each stage (including template snapshots)
- Version information

:::tip
The `stages.json` file is designed to be version-controlled. Commit it to share your workflow configuration with your team.
:::

## Example Configuration

Here's what a typical stages configuration looks like:

| Stage | Color | Activities |
|-------|-------|------------|
| Bugs | Red | Debug, Discuss |
| Backlog | Gray | (default stage) |
| Prepare | Blue | Design, Write Tech Specs |
| Implement | Indigo | Build, Unit Tests |
| Verify | Orange | Manual Testing, Review |
| Done | Green | Summarize, Archive |

## Best Practices

### Designing Your Workflow

- **Keep it simple**: Start with 4-6 stages that match your actual process
- **Use meaningful names**: Stage names should be verbs or states (Prepare, Review, Done)
- **Choose distinct colors**: Colors help visually identify stages at a glance

### Managing Activities

- **Stage-specific activities**: Add activities that make sense for each stage (e.g., "Debug" in a Bugs stage)
- **Reuse templates**: The same template can be used as an activity in multiple stages
- **Custom names**: Give activities descriptive names even if they use generic templates

### Team Collaboration

- **Commit your configuration**: Share `.neova/stages.json` with your team
- **Document your workflow**: Use stage and activity names that are self-explanatory
- **Review periodically**: Update stages as your process evolves
