# Outcome Roadmap

This roadmap sequences evidence and outcomes rather than promising dates. Dates and estimates should be added only after discovery, prototypes, and technical spikes make them defensible.

## Critical path

`Phase 0 → Phase 1 → Phase 2 → Phase 3 pilot decision → Phases 4–5 → Phase 8`

Optional accounts may begin after local progress is validated in Phase 3. The Navigator may begin only after the reviewed corpus and provenance system meet its entry gate.

## Phase 0 — Align the product contract

**Outcome:** Contributors can explain what is being built, for whom, how decisions are made, and what evidence permits work to advance.

**Includes:** [`E00`](epics/E00-strategy-and-governance.md)

**Exit gate:**

- Goal, vision, PRD, roadmap, decisions, risks, and delivery rules agree.
- Uncertainty is labelled rather than hidden inside requirements.
- Every requirement family maps to an epic and verification type; exact requirement-to-package mapping exists for E01 before activation.
- No unresolved question invalidates Phase 1.

## Phase 1 — Define the territory

**Outcome:** The audience, declared specification scope, current-content disposition, learning model, and information architecture are evidence-backed.

**Includes:** [`E01`](epics/E01-discovery-and-content-architecture.md)

**Parallel tracks:** audience research, misconception research, existing-content inventory, competitive gap analysis, and specification taxonomy.

**Exit gate:**

- Every existing section, fixture, citation cluster, and asset has a disposition.
- The taxonomy is accepted, representative sections prove its granularity is workable, and a generated plan exists to seed the remaining declared scope.
- Journey, Atlas, and Laboratory ownership boundaries are validated.
- First Byte has observable learning outcomes, misconception targets, and research briefs.
- The Living Archive premise and direct-entry experience have been tested at low fidelity.

## Phase 2 — Prove the foundations

**Outcome:** A fresh technical and experience foundation can support authored, referenced, accessible, and safely interactive content.

**Includes:** [`E02`](epics/E02-experience-and-platform-foundations.md)

**Parallel tracks:** design language, interaction prototypes, schema/provenance work, platform decisions, quality automation, and sandbox research.

**Exit gate:**

- Representative Journey, Atlas, and lab fixtures build from validated schemas.
- Core reading and navigation work without client-side JavaScript.
- Accessibility baselines pass across the agreed matrix.
- The laboratory threat model and isolation prototype pass review.
- Provenance, coverage, links, schemas, and representative tests run in CI.
- Deployment, performance budgets, and provider boundaries have accepted decision records.

## Phase 3 — Validate First Byte

**Outcome:** One complete expedition proves—or disproves—the central product hypothesis before curriculum-scale investment.

**Includes:** [`E03`](epics/E03-first-byte-vertical-slice.md)

**Exit gate:** the vertical-slice acceptance criteria in the PRD are satisfied and the evidence review records an explicit `continue`, `iterate`, or `stop` decision. A checklist alone cannot pass this gate.

## Phase 4 — Establish the public foundation

**Outcome:** The new product stands on its own, exposes all three product layers, and incorporates every valuable part of the current corpus as **foundation wave zero**, without a legacy compatibility shell.

**Includes:** [`E04`](epics/E04-public-foundation-and-corpus.md)

**Exit gate:**

- Every retained existing claim has provenance and review state.
- The content ledger has no unaccounted source material.
- The new home, journey map, Atlas, Laboratory index, search, First Byte local progress, and contribution flow are coherent.
- The public foundation passes accessibility, performance, security, editorial, and operational review.

## Phase 5 — Expand the authored journey

**Outcome:** Narrative learning, canonical reference coverage, and laboratories expand together in coherent waves.

**Includes:** [`E05`](epics/E05-journey-atlas-and-lab-expansion.md)

**Waves:**

1. Remaining document structure, metadata, semantics, and navigation gaps not delivered by foundation wave zero.
2. Images, embedding, media, and tables.
3. Forms, controls, validation, and native interaction.
4. Templates, custom elements, canvas, and the integrated final audit.

**Per-expedition gate:** learning objectives, provenance, technical/editorial/accessibility review, passing assertions, meaningful fallback, performance budget, and no unresolved high-severity defect.

## Phase 6 — Validate optional synchronization

**Outcome:** Readers who need cross-device continuity can opt into it without weakening anonymous use or privacy.

**Includes:** [`E06`](epics/E06-accounts-progress-and-privacy.md)

**Discovery entry:** WP-600 may begin after Phase 3 demonstrates stable local-progress semantics.

**Implementation entry:** WP-601–WP-606 require positive synchronization-demand evidence, accepted semantics, and a named operational owner or accountable role for data inventory, retention and consent, provider boundaries, export and deletion, abuse controls, incident response, and ongoing privacy/security review.

**Exit gate:** authentication, offline replay, conflicts, export, reset, deletion, accessibility, privacy, and security pass their acceptance evidence.

This phase may run alongside Phase 5 after its entry gate.

## Phase 7 — Evaluate the Navigator

**Outcome:** Optional assistance is demonstrably grounded, cited, safe, accessible, affordable, and useful.

**Includes:** [`E07`](epics/E07-navigator-beta.md)

**Research entry:** WP-700–WP-701 may begin when the reviewed corpus and provenance model are mature enough to define corpus policy and a representative evaluation set.

**Implementation entry:** WP-702 onward requires an accepted corpus policy, representative evaluation suite, privacy/cost boundaries, and evidence that authored search and hints do not already solve the need.

**Exit gate:** factual support and citation-resolution targets pass, severe safety or privacy defects are absent, and reader research shows value beyond existing authored navigation and hints.

This phase is never on the critical path to a complete core product.

## Phase 8 — Publish and sustain the first edition

**Outcome:** A frozen first-edition scope is fully reviewed, a dated edition can be released, and wider product scope remains transparently accounted for as the standard changes.

**Includes:** [`E08`](epics/E08-first-edition-and-living-operations.md)

This phase does not depend on accounts or the Navigator unless a deliberate edition decision includes those optional capabilities.

**Exit gate:**

- The frozen first-edition scope is 100% reviewed; scope accounting for the wider declared product territory is reported separately.
- The integrated Living Archive audit and complete quality review pass.
- Static/downloadable output preserves the educational value of interactive material.
- Anchor checks, change reports, human freshness triage, corrections, changelog, and edition snapshots operate in practice.

## Decision points

The roadmap stops or changes direction at these explicit points:

1. **After audience and scope research:** narrow or revise the audience, coverage claim, narrative, or information architecture.
2. **After interaction and sandbox prototypes:** select, revise, or reject the proposed Browser Lens and live-editing architecture.
3. **After First Byte:** continue, iterate, or stop large-scale production based on learning, accessibility, utility, and sustainability evidence.
4. **Before accounts:** require observed demand and an accepted privacy/security model.
5. **Before AI:** require corpus readiness, a representative evaluation suite, and evidence that authored tools do not already solve the need.

## Work activation policy

- Keep future work packages in planning until their phase is approaching.
- Create GitHub issues for the active and immediately upcoming phase, not the entire multi-year roadmap.
- A phase may begin discovery before the prior phase exits, but implementation may not bypass an unmet dependency or gate.
- Every gate review records evidence, risk changes, decision changes, and an explicit outcome.
