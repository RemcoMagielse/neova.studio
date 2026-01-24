---
title: Debug
description: An activity template for identifying root causes of bugs and proposing solutions.
---

This example shows how to create a Debug activity template that guides an AI agent through systematic bug analysis.

## Template

Copy the following template content:

```markdown
## Goal

Your goal is to identify the root-cause of a bug or issue and propose a solution to fix the issue.

## Preparation

Read the task {task.id}.json located in {app.tasksFolder}.

## Analyse the problem

When you analyse the problem, do the following:
- Always inspect the codebase to understand the structure of the problem.
- Always generate multiple possible explanations of the root-cause. Look at the problem from different angles.
- Once you have possible explanations for the issue you must validate your assumptions. Do this in the following way:
  - Check what is actually *implemented* in this codebase. Can you logically explain that this causes the issue described?
  - Run a scenario step-by-step to analyze when the problem occurs.
- If you need any additional information from external sources, such as logs, code examples, public documentation, or anything else: ask the user to provide this information.

## Present your findings

Once you are confident that you have identified the root-cause present your conclusion to the user. Keep your explanation short and to the point. Use a format as follows:
**<Issue>**: <Explanation in maximum 3 lines>
**Scenario**: <Describe the scenario when the problem occurs>
**Evidence**: <List what you have found in the code>

If you have a proposed solution for the issue, present your solution to the user.

## Document your findings

If the user is satisfied, document your findings back to the task. Here is how to write your findings:
- Each task is stored in a JSON file. You can find an example of the task structure in {app.tasksFolder} in the file called '.task-template.json'.
- Open the file and add your findings to the field 'description'. You can use markdown formatting. Make sure to use escape characters, otherwise the JSON file gets corrupted.
```

## Usage

To use this template:

1. Create a new activity template in **Settings > Templates**
2. Copy the template content above into the template field
3. Add the template as an activity to your "Bugs" or "Prepare" stage

:::tip
The placeholders `{task.id}` and `{app.tasksFolder}` are automatically replaced with actual values when the activity is executed.
:::
