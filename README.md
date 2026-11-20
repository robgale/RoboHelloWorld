# RoboDevAgentTemplate

A reusable GitHub-native, specification-driven agentic development template.

## Workflow

Issue → specification → implementation plan → task list → isolated feature branch → tests and checks → reviewed pull request → release.

This repository is a starter template. See `AGENTS.md`, `specs/README.md`, and `docs/architecture/workflow.md` once the bootstrap pull request is merged.

## Principles

- GitHub and versioned repository files are the source of truth.
- Human approval for behavior-changing specs, merges, and production deployments.
- Agents operate with least privilege on isolated branches.
- CI provides objective verification; AI review is advisory.
- Never store credentials in the repository.
