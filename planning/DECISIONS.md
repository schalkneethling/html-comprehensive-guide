# Decision Log

Decisions marked **Accepted** guide current planning. Proposed decisions require evidence or an architecture decision record before implementation lock.

| ID | Status | Decision | Consequence |
|---|---|---|---|
| D-001 | Accepted | Rebuild as a fresh product without route, chapter-number, Starlight, component API, or deployment compatibility requirements. | No redirects, legacy-reading route, or parity gate. Git history remains intact. |
| D-002 | Accepted | Preserve existing knowledge through a content ledger rather than preserving its current structure or wording. | Every source unit receives a retain/revise/split/merge/research/retire disposition. |
| D-003 | Accepted | Serve working developers with basic HTML experience as the primary audience. | Beginner curriculum and generic web-development instruction stay out of scope. |
| D-004 | Accepted | Organize the product as Journey, Spec Atlas, and Laboratory with distinct canonical ownership. | Narrative, reference, and exercises link to shared structured facts instead of duplicating them. |
| D-005 | Accepted | Keep the authored core anonymous, progressively enhanced, and complete without AI. | Accounts and AI remain optional and outside the initial critical path. |
| D-006 | Accepted | Treat accessibility as an architectural and research requirement. | Disabled-reader evaluation and manual accessibility evidence are phase gates. |
| D-007 | Accepted | Define comprehensiveness through a versioned coverage taxonomy and explicit dispositions. | “Complete” means declared-scope accountability, not identical depth for every concept. |
| D-008 | Proposed | Retain Astro as the content/application foundation while replacing the Starlight shell. | Requires an architecture spike against fresh alternatives, authoring ergonomics, progressive enhancement, and maintenance cost. |
| D-009 | Proposed | Implement interactive islands as standards-oriented custom elements. | Validate accessibility, state boundaries, testing ergonomics, and contributor experience before accepting. |
| D-010 | Proposed | Use the Living Archive and editorial cartography as the narrative and visual system. | Validate motivation, comprehension, direct-entry clarity, accessibility, and performance at low fidelity. |
| D-011 | Open | Select the browser/parser source of truth and supported observation matrix. | Browser Lens fidelity and freshness cannot be finalized until resolved. |
| D-012 | Open | Select the laboratory execution and isolation architecture. | Requires threat modelling, accessibility prototypes, failure recovery, and bundle-cost evidence. |
| D-013 | Open | Select hosting/runtime providers and define portability boundaries. | Cloudflare is a candidate, not a product requirement. |
| D-014 | Open | Define corpus excerpt, citation, and licensing policy. | Must precede large-scale ingestion, fingerprinting, or AI indexing. |
| D-015 | Open | Decide whether account synchronization creates enough reader value to justify operational and privacy cost. | Research after local progress is validated. |
| D-016 | Open | Define minimal analytics and research telemetry policy. | No tracking implementation until purpose, retention, consent, and decision use are explicit. |
| D-017 | Open | Decide product naming and relationship to “HTML: A Comprehensive Guide.” | Naming must preserve project recognition without constraining the new identity. |

## Decision process

Material decisions document context, options, evidence, accessibility/privacy/security impact, reversibility, chosen direction, and revisit conditions. Update linked requirements, risks, roadmap gates, and epic tasks in the same change.
