# E06 — Accounts, Progress, and Privacy

## Outcome

Readers who demonstrate a need for cross-device continuity can opt into reliable synchronization without weakening anonymous use or data rights.

## Entry conditions

WP-600 may begin after local progress semantics are validated in E03. WP-601–WP-606 require positive demand evidence from WP-600 plus accepted privacy/security operating responsibility.

## Work packages

| ID | Work package | Requirements | Dependencies | Acceptance evidence |
|---|---|---|---|---|
| WP-600 | Research value and define synchronized progress semantics | PRG-01–05, ACC-01–06 | E03 | Demand evidence; merge/reset/version rules and non-goals accepted |
| WP-601 | Complete data inventory, privacy model, and threat model | PRIV-01–02, SEC-03 | WP-600 | Purpose, retention, consent, export/deletion, providers, abuse, and incident paths reviewed |
| WP-602 | Decide identity, API, storage, and portability architecture | REL-03 | WP-600–601 | Decision records compare providers, cost, operations, accessibility, and migration boundaries |
| WP-603 | Implement authentication and account lifecycle | PRIV-02, A11Y-01–05 | WP-602 | State/CSRF/session/security tests and supported-matrix account journeys pass |
| WP-604 | Implement synchronization, offline replay, and conflicts | PRG-03–05, REL-02 | WP-603 | Idempotency, stale client, concurrent edits, retry, and data-loss tests pass |
| WP-605 | Implement export, reset, deletion, and recovery | PRIV-02, PRG-02–05 | WP-603–604 | End-to-end rights and failure-state verification pass |
| WP-606 | Run security, privacy, accessibility, and operational readiness review | `SEC-*`, `PRIV-*`, `REL-*`, `A11Y-*` | WP-603–605 | No unresolved high-severity issue; incident and rollback procedures exercised |

## Non-scope

Accounts never gate reading, Atlas search, labs, exports of local progress, or core completion.
