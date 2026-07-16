# E02 — Experience and Platform Foundations

## Outcome

A fresh, production-capable foundation supports authored, referenced, progressively enhanced, accessible, performant, and safely interactive content.

## Scope

Validated architecture and representative fixtures, not the complete site or curriculum.

## Work packages

| ID | Work package | Requirements | Dependencies | Acceptance evidence |
|---|---|---|---|---|
| WP-200 | Evaluate application, content, deployment, and provider architecture | REL-03, PERF-01 | E01 | Decision records compare Astro and alternatives, hosting/runtime, portability, authoring ergonomics, and operations |
| WP-201 | Replace the Starlight shell with representative fresh-product routes | NAV-01–04, REL-01 | WP-200 | Journey, Atlas, and lab fixtures navigate without legacy UI or client JS dependency |
| WP-202 | Prototype and validate cartographic design language | A11Y-01–05, PERF-01 | E01, WP-201 | Mobile/desktop, forced-color, reduced-motion, zoom, and non-narrative findability evidence |
| WP-203 | Define and implement accessible navigation/layout primitives | NAV-01–04, A11Y-01–05 | WP-201–202 | Supported-matrix keyboard, screen-reader, reflow, focus, and landmark tests |
| WP-204 | Define versioned schemas for expeditions, Atlas, labs, sources, coverage, and progress | CNT-01, ATL-01–03, LAB-01–02, PRG-03 | E01 | Valid/invalid fixtures and generated types pass CI |
| WP-205 | Establish provenance, citation, terminology, and editorial governance | CNT-01, CNT-03–05, ATL-02–03 | WP-204 | Style guide, review authority, corrections, source-use policy, and validator fixtures accepted |
| WP-206 | Generate coverage and freshness reports | ATL-05, CNT-05 | WP-204–205 | Broken anchors, missing mappings, state transitions, and changed-source candidates produce actionable reports |
| WP-207 | Threat-model and prototype laboratory isolation | LAB-05–07, SEC-01–02, REL-02 | E01 | Capability-deny model, CSP/origin choice, infinite-loop recovery, focus escape, and failure reset pass review |
| WP-208 | Prototype Browser Lens fidelity and non-visual views | BRW-01–04, A11Y-03 | E01, WP-207 | Source/DOM outputs match declared parsers/browsers; approximations labelled; equivalent textual tasks pass |
| WP-209 | Establish CI quality baseline | CNT-01, PERF-01–03, A11Y-01–03, SEC-03 | WP-201–208 | Formatting, types, schemas, links, provenance, units, browser smoke tests, accessibility, and budgets run reliably |
| WP-210 | Repair package-manager and preview/deployment workflow | REL-01–03 | WP-200, WP-209 | pnpm install/build and preview deployment succeed from a clean checkout |
| WP-211 | Publish contributor and content-review templates | CNT-03–04 | WP-204–205 | A new contributor can create valid sample content and understand review states |
| WP-212 | Replace stale repository onboarding and agent guidance | CNT-03–04, REL-03 | WP-200–211 | README, WARP.md, and related guidance describe the accepted package manager, architecture, authoring flow, and quality checks |

## Gate

The Phase 2 exit gate passes with linked automated and manual evidence. No live-editor architecture is accepted solely because a prototype renders.

WP-200 and WP-209 are foundation containers, not issue-ready tasks. Before activation, split WP-200 into application/content, deployment/runtime, and provider/portability decisions; split WP-209 into formatting/types, schema/provenance/links, unit/browser, accessibility, security, and performance packages with exact requirement IDs.
