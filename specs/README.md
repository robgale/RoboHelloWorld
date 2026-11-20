# Specifications

Each feature lives in `specs/NNN-short-name/` with:
- `spec.md`: user goals, requirements, acceptance criteria and stable requirement IDs.
- `plan.md`: design, affected components, alternatives and verification strategy.
- `tasks.md`: actionable checklist and links to Issues/PRs.
- `contracts/`: optional OpenAPI, JSON Schema or other machine-checkable contracts.

Copy the examples in `specs/_template/` to start. Keep specifications and code changes in the same pull request when behavior changes. A requirement-to-test mapping is evidence of intent, not proof of adequate coverage.
