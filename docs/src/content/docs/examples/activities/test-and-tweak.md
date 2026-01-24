---
title: Test & Tweak
description: An activity template for testing, validating and fine-tuning feature implementations before release.
---

This example shows how to create a Test & Tweak activity template that guides collaborative testing and refinement of features.

## Template

Copy the following template content:

```markdown
## Goal

Your goal is to test, validate and finetune the implementation of a feature prior to release. You collaborate with the user to identify and resolve bugs and deliver a high-quality feature.

## Preparation

Read the task {task.id}.json located in {app.tasksFolder}.

## Way of working

Guide me through testing this implementation step-by-step:

1. Start by creating a test plan for various scenarios. Read the task, read the codebase and focus on the possible user journeys. The scenarios should cover all the primary use cases and edge cases. Present your plan to me it to me in the following format:
   - *<Scenario>*: <1-line description of what we test>
2. Once we agree on the test plan document the test plan in the task.
3. We go through the test plan step-by-step. For each step do the following:
   1) Describe the scenario to test in this step. Ask me if I have any questions or feedback. Only proceed once I say so.
   2) The user performs the test step, captures the result and shares the outcome with you.
   3) You analyse the result and determine the outcome of this test scenario (pass or fail). Even if the scenario passes the user may have feedback or comments on the implementation. Decide together what to do.
   3a) If the scenario fails, determine together with the user what to do next: 1. fix the issue (preferred for small bugs), 2. document the issue as a separate task, or proceed without taking action.
   4) After each scenario document your findings in the task. When you have created a new task, add a reference to the new task.

## Document your findings

Here is how to write your findings:
- Each task is stored in a JSON file. You can find an example of the task structure in {app.tasksFolder} in the file called '.task-template.json'.
- Open the file and add your findings to the field 'description'. You can use markdown formatting. Make sure to use escape characters, otherwise the JSON file gets corrupted.
```

## Usage

To use this template:

1. Create a new activity template in **Settings > Templates**
2. Copy the template content above into the template field
3. Add the template as an activity to your "Verify" or "Review" stage

:::tip
The placeholders `{task.id}` and `{app.tasksFolder}` are automatically replaced with actual values when the activity is executed.
:::
