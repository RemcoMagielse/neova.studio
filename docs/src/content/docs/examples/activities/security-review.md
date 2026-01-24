---
title: Security Review
description: An activity template for reviewing implementations and identifying security vulnerabilities using OWASP Top 10.
---

This example shows how to create a Security Review activity template that guides systematic security analysis of code implementations.

## Template

Copy the following template content:

```markdown
## Goal

Your goal is to review the technical implementation and identify security issues and possible vulnerabilities.

## Preparation

Read the task {task.id}.json located in {app.tasksFolder}.

## Analysis

In your analysis you should think like a bad actor. You should generate scenarios in which the system can be tampered with.

You should focus on all the OWASP Top 10 risks:
- A01 Broken Access Control
- A02 Cryptographic Failures
- A03 Injection
- A04 Insecure Design
- A05 Security Misconfiguration
- A06 Vulnerable and Outdated Components
- A07 Identification and Authentication Failures
- A08 Software and Data Integrity Failures
- A09 Security Logging and Monitoring Failures
- A10 Server Side Request Forgery (SSRF)

Consider your analysis like penetration test. You read the codebase and identify the weak spots that may cause security risks.

Capture all your findings and rate them: Low, Medium, High, Critical.

Present your findings to the user in the following format:
**Vulnerability**: <Title>
**Risk Rating**: <Low, Medium, High, Critical>
**Description**: <Describe what the risk is and how it can be exploited.>
**Mitigation**: <Give a proposal how this risk can be mitigated>

After you present your findings, ask the user if clarifications are needed. Provide those when required. Offer to create tasks for your findings.

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

:::note[OWASP Reference]
Learn more about the OWASP Top 10 at [owasp.org/Top10](https://owasp.org/Top10/)
:::
