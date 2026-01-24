---
title: Getting Started
description: Install and set up Neova on your Mac.
---

This guide will help you install Neova and get started with your first project.

## System Requirements

- **macOS** 12.0 (Monterey) or later
- **Apple Silicon** (M1, M2, M3, or later)
- 4GB RAM minimum (8GB recommended)
- 500MB disk space

## Installation

1. Download the latest version of Neova from the [homepage](/)
2. Open the downloaded `.dmg` file
3. Drag Neova to your Applications folder
4. Launch Neova from Applications

:::note
On first launch, macOS may ask you to confirm opening the app. Click "Open" to continue.
:::

## Creating Your First Project

When you first open Neova, you'll see the project selector. Here's how to get started:

### 1. Create a New Project

Click **New Project** and choose a folder for your project. Neova will create a `.neova` folder to store your tasks, snippets, and templates.

### 2. Set Up Stages

Navigate to **Settings > Stages** to customize your workflow stages. Default stages include:

- **Backlog** - Ideas and future tasks
- **Prepare** - Tasks being planned
- **Implement** - Active development
- **Review** - Code review and testing
- **Done** - Completed tasks

### 3. Create Your First Task

Click the **+** button to create a new task. Add:

- A descriptive title
- Tags for organization
- A detailed description (supports Markdown)

### 4. Build a Prompt

Open the **Prompt Builder** to create instructions for your AI assistant:

```markdown
## Task: {{task.title}}

### Context
{{snippet:project-context}}

### Requirements
{{task.description}}

### Instructions
Please implement this feature following our coding standards.
```

## Next Steps

- Explore the [Snippet Library](/reference/snippets/) to create reusable content
- Learn about [Templates](/reference/templates/) for dynamic prompts
- Check out [Keyboard Shortcuts](/reference/shortcuts/) for power users

## Need Help?

If you run into issues, check the [FAQ](/reference/faq/) or visit our [GitHub repository](https://github.com) for support.
