# E03 — First Byte Vertical Slice

## Outcome

One complete expedition demonstrates whether the product improves working developers' understanding of parsing, error recovery, DOM construction, conformance, and quirks mode.

## Work packages

| ID | Work package | Requirements | Dependencies | Acceptance evidence |
|---|---|---|---|---|
| WP-300 | Preregister misconceptions, objectives, rubric, sampling, effect, severity, and pilot decision rules | JRN-05–06, RSR-01–03 | E01, E02 | Practical-effect threshold, scoring reliability, task/segment coverage, accessibility severity, and continue/iterate/stop rules accepted before evaluation |
| WP-301 | Author mission, causal explanation, field notes, and Archive change | JRN-02–06, CNT-03–04 | WP-300 | Editorial, specification, technical, and accessibility reviews |
| WP-302 | Author canonical parsing, DOM, conformance, and quirks Atlas entries | ATL-01–06 | WP-300 | Structured provenance and coverage validation pass |
| WP-303 | Build source-to-DOM Browser Lens | BRW-01–04 | E02, WP-301–302 | Fidelity comparisons and non-visual task equivalence pass |
| WP-304 | Build quirks-mode comparison and malformed-markup prediction | LAB-01–04, LAB-08 | WP-303 | Assertions, feedback causality, labels, keyboard/AT tasks, and reset states pass |
| WP-305 | Build repair lab with hint ladder and solution explanation | LAB-01–08 | E02, WP-301–304 | Threat model, recovery, deterministic assertions, accessible alternative, and performance budget pass |
| WP-306 | Build explanation checkpoint and local progress/export/reset | JRN-06, PRG-01–04 | WP-300, WP-305 | Rubric and state migration tests; content remains usable after state failure |
| WP-307 | Complete integrated quality review | `A11Y-*`, `PERF-*`, `SEC-*`, `REL-*` | WP-301–306 | No unresolved high-severity defect; supported-matrix evidence linked |
| WP-308 | Run representative pilot including disabled participants | G1–G6, RSR-01–03 | WP-307 | Consent, compensation, accommodations, data handling, recruitment, method, baseline, outcomes, barriers, and findings documented |
| WP-309 | Decide continue, iterate, or stop and update planning | All | WP-308 | Explicit gate decision; requirements, risks, decisions, and roadmap updated from evidence |

## Gate

Pass the ten vertical-slice criteria in the PRD. Pilot thresholds are interpreted with sample and method, not as standalone proof.
