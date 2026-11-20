#!/usr/bin/env python3
"""Lightweight template checks, not proof of requirements coverage."""
from pathlib import Path
import re
import sys

root = Path(__file__).resolve().parents[1]
required = ["AGENTS.md", "README.md", "specs/README.md",
            ".github/pull_request_template.md", "docs/architecture/workflow.md"]
errors = [f"Missing required file: {p}" for p in required if not (root / p).is_file()]
for spec in sorted((root / "specs").glob("*/spec.md")):
    if spec.parent.name == "_template":
        continue
    content = spec.read_text(encoding="utf-8")
    if not re.search(r"\b[A-Z][A-Z0-9]*-\d{3,}\b", content):
        errors.append(f"{spec.relative_to(root)}: missing requirement IDs")
    for name in ("plan.md", "tasks.md"):
        if not (spec.parent / name).is_file():
            errors.append(f"{spec.parent.relative_to(root)}: missing {name}")
if errors:
    print("\n".join(errors), file=sys.stderr)
    sys.exit(1)
print("Repository structure and specification checks passed.")
