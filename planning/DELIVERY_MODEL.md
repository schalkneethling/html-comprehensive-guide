# Delivery Model

## From planning to issues

Epic files are the canonical future backlog. Create GitHub issues only for the active and immediately upcoming phase. This keeps the issue tracker actionable and prevents detailed tasks from becoming stale before their dependencies are understood.

Each issue created from a work package must include:

- stable work-package ID and parent epic/phase;
- intended outcome and user/developer value;
- linked requirement IDs and decision records;
- dependencies and explicit non-scope;
- acceptance evidence and verification method;
- owner role and reviewers;
- risks, uncertainty, and expected follow-ups.

All packages in this initial baseline are `Proposed`. Before promotion, add a responsible role, named or role-based reviewers, package-level uncertainty/risk, and exact requirement IDs. Umbrella wave packages are planning containers and must be decomposed into independently reviewable issues before activation.

## Definition of ready

A work package is ready when:

- its outcome and boundary are understood;
- blocking decisions and research are complete;
- dependencies are satisfied or actively coordinated;
- acceptance evidence is observable;
- accessibility, privacy, security, performance, content, and operations implications have been considered;
- it is small enough to review coherently or has a documented decomposition plan.

## Definition of done

A work package is done when:

- its acceptance evidence exists and has been reviewed;
- linked requirements, coverage records, decisions, and risks are updated;
- relevant automated and manual verification passes;
- no unresolved high-severity defect remains;
- documentation and operational ownership are sufficient;
- follow-up work is captured explicitly rather than hidden in prose.

Content and laboratory work must also meet the specialized definitions in E05.

## Review roles

Depending on the work, evidence should include distinct perspectives:

- product/learning review;
- specification/technical review;
- editorial review;
- accessibility review;
- security/privacy review;
- performance/operations review.

One person may hold multiple roles, but a checklist from the author alone is not independent evidence for high-risk claims or interactions.

## Phase gates

A phase gate is a short evidence review with links to outputs, research, metrics, unresolved defects, risk changes, and decision changes. It concludes with one explicit outcome:

- **Continue** — the next phase may proceed.
- **Iterate** — repeat targeted work; record what evidence is missing.
- **Stop** — abandon or materially change the premise; preserve the learning.

## Change control

Changes to audience, declared scope, core product layers, canonical ownership, accessibility baseline, data collection, accounts, AI, release gates, or provider lock-in require a decision-log update and synchronized changes to affected requirements, roadmap items, risks, and epics.

## Task sizing

Prefer independently reviewable outcomes. Split a work package when it contains multiple acceptance demonstrations, crosses several unrelated systems, or cannot be reversed without coordinating multiple teams. Do not split research into arbitrary activity tickets; preserve the decision it is meant to inform.
