# Planning

This directory turns the project goal into a product and delivery system. It is the starting point for product decisions, research, implementation planning, and issue creation.

## Document hierarchy

1. [`../GOAL.md`](../GOAL.md) — durable north star, audience, outcomes, constraints, and non-goals.
2. [`VISION.md`](VISION.md) — the intended reader transformation, product concept, experience model, and design principles.
3. [`PRODUCT_REQUIREMENTS.md`](PRODUCT_REQUIREMENTS.md) — product scope, functional and quality requirements, measures, risks, and release criteria.
4. [`ROADMAP.md`](ROADMAP.md) — sequencing, dependencies, phase gates, and release strategy.
5. [`epics/`](epics/) — actionable work packages grouped under top-level phases.
6. [`CONTENT_LEDGER.md`](CONTENT_LEDGER.md) — disposition of existing material during the fresh-start rebuild.
7. [`DECISIONS.md`](DECISIONS.md) — accepted product decisions and open decisions that must be resolved deliberately.
8. [`RISKS.md`](RISKS.md) — principal risks, mitigations, and review triggers.
9. [`TRACEABILITY.md`](TRACEABILITY.md) — requirement families mapped to delivery and evidence.
10. [`DELIVERY_MODEL.md`](DELIVERY_MODEL.md) — definitions of ready/done, issue activation, review roles, and phase gates.
11. [`SPEC_COVERAGE.md`](SPEC_COVERAGE.md) — the proposed scope and coverage-accounting model.
12. [`RESEARCH_BACKLOG.md`](RESEARCH_BACKLOG.md) — questions that need evidence before consequential decisions.

## How to use this plan

- Treat the vision and product requirements as constraints, not a backlog.
- Promote an epic work package into a GitHub issue only when its dependencies and acceptance criteria are understood.
- Keep implementation issues small enough to review independently while preserving their link to an epic outcome.
- Update the roadmap when evidence changes sequencing; do not rewrite history to make execution appear linear.
- Record scope-changing decisions in `DECISIONS.md` and update every affected planning document in the same change.
- Update `CONTENT_LEDGER.md` whenever existing material is moved, split, rewritten, or retired.

## Status vocabulary

Planning and coverage artifacts use these states consistently:

- **Proposed** — described but not accepted for delivery.
- **Ready** — dependencies and acceptance criteria are sufficient to begin.
- **Active** — currently being researched, designed, or implemented.
- **Blocked** — unable to proceed; the blocker and owner must be recorded.
- **In review** — outcome exists and is being evaluated against its gate.
- **Complete** — acceptance criteria and the phase gate are satisfied.
- **Deferred** — intentionally postponed with a reason and revisit condition.

## Current activation

| Item | Status | Gate owner | Last review | Next decision |
|---|---|---|---|---|
| Planning baseline / E00 | In review | Project maintainer | 2026-07-16 | Ratify or revise this planning PR |
| E01 — Discovery and content architecture | Proposed | Unassigned | 2026-07-16 | Assign owners/reviewers and promote bounded packages after E00 ratification |
| E02–E08 | Proposed | Unassigned | 2026-07-16 | Remain inactive until their roadmap entry conditions are met |

Every work package in this initial plan is **Proposed**, not `Ready`. Promotion requires a responsible role, reviewers, package-level uncertainty/risk, and exact requirement traceability as described in [`DELIVERY_MODEL.md`](DELIVERY_MODEL.md).

## Change policy

The planning set is meant to evolve, but changes should remain traceable. Material changes to audience, product scope, architecture, privacy, AI, accessibility, or release gates require an entry in `DECISIONS.md`.
