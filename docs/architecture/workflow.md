# Agentic SDLC

## System of record
- GitHub Issues: backlog, ownership and discussion.
- Versioned specs: approved requirements and acceptance criteria.
- Git commits/PRs: implementation, review and change history.
- GitHub Actions: objective checks.
- ADRs: consequential architecture decisions.

## Lifecycle
1. Create Issue and scope.
2. Draft and approve spec; assign stable requirement IDs.
3. Plan implementation and test strategy.
4. Delegate agent to isolated branch/worktree.
5. Agent adds code, tests and relevant spec updates.
6. CI validates; independent agent reviews as an advisory reviewer.
7. Human reviews and approves merge.
8. Deploy through protected environments; track follow-ups as Issues.

## Guardrails
Agents cannot approve their own PRs. Keep GitHub token permissions minimal. Do not run untrusted PR code with privileged credentials. Pin third-party GitHub Actions to full commit SHAs when introduced. Store secrets in protected GitHub environments or approved secret stores. Retain critical audit records outside expiring CI artifacts.

## Adoption
The template is stack-neutral. CI includes a basic repository-structure and traceability check. Add language-specific build, lint, typecheck and tests when generating a project. Do not treat the starter CI as application test coverage.
