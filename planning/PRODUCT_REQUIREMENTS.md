# Product Requirements

## Document status

- **Status:** Proposed baseline
- **Product:** HTML — The Living Web
- **Primary release under definition:** First Byte vertical slice
- **Planning principle:** Requirements describe outcomes and constraints. Unvalidated implementation choices remain hypotheses and are recorded in [`DECISIONS.md`](DECISIONS.md).

## 1. Problem statement

Working web developers can usually produce functioning HTML but often lack a dependable model of how source becomes a document, how semantics affect users and tools, and which rules are requirements rather than conventions. Existing resources tend to optimize for either introductory syntax, isolated lookup, or specification completeness. They rarely combine a coherent learning journey, exact reference provenance, and observable browser behavior.

The current repository contains valuable authored material but only a conventional documentation shell. It has no formal coverage model, interactive learning system, content provenance workflow, automated quality gates, or evidence that the proposed experience improves developer understanding.

## 2. Product hypothesis

If specification rules are taught through consequential problems, browser-observable experiments, precise reference material, and explanation-based repair tasks, working developers will build more accurate mental models and make better HTML decisions than they do from prose or reference lookup alone.

The first product decision is therefore not “which platform should we build?” It is whether the Journey + Atlas + Laboratory model produces useful learning and reference outcomes for the intended audience.

## 3. Audience and jobs to be done

### Primary audience

Working web developers who:

- can author a complete HTML document and read basic CSS and JavaScript;
- use HTML in production but learned much of it through practice, frameworks, snippets, or reference searches;
- want deeper platform understanding without reading the implementer specification end to end;
- value accessibility, resilience, performance, or standards-based engineering.

Audience research must refine this definition before broad curriculum production. The initial research sample should include frontend specialists, generalist web developers, and developers working primarily through component frameworks.

### Core jobs

Readers need to:

1. understand a browser behavior they cannot currently explain;
2. decide which HTML construct correctly expresses an intent;
3. diagnose markup whose source and resulting behavior differ;
4. verify a claim against an authoritative source;
5. learn a connected area of HTML deeply enough to transfer it to production work;
6. return later and retrieve a precise answer without replaying a course.

### Secondary beneficiaries

Educators, standards contributors, accessibility practitioners, and reviewers may use or contribute to the material. Their needs must not broaden the primary learning experience into a generic standards portal.

## 4. Goals

- **G1 — Understanding:** Improve readers' ability to predict, explain, and repair HTML behavior.
- **G2 — Utility:** Provide fast, trustworthy lookup for developer-relevant HTML concepts.
- **G3 — Coverage:** Make the declared scope and every coverage disposition visible.
- **G4 — Trust:** Make provenance, review state, uncertainty, and freshness auditable.
- **G5 — Inclusion:** Make every core outcome achievable by disabled readers and across supported input and display modes.
- **G6 — Sustainability:** Establish content and technical systems that can grow without multiplying duplicated explanations or silent drift.

## 5. Non-goals

- Teaching first-time developers the complete web stack.
- Preserving existing routes, chapter numbers, Starlight behavior, or implementation APIs.
- Requiring an account, network service, or AI system for the core experience.
- Shipping accounts, synchronization, or AI in the initial vertical slice.
- Reproducing exhaustive CSS, JavaScript, DOM API, or browser-engine documentation.
- Claiming learning efficacy, accessibility, or completeness without defined evidence.

The fresh-start boundary applies to this project's routes, shell, components, deployment, and internal APIs. It does not remove the need to teach and test browser interoperability, historical parsing behavior, or assistive-technology compatibility where those affect HTML outcomes.

## 6. Scope model

### Defining “comprehensive”

Before curriculum expansion, the project must establish a versioned coverage taxonomy. At minimum it must account for:

- developer-relevant concepts and terminology;
- conforming elements and their states;
- global and element-specific attributes;
- content categories and content models;
- document and element processing behavior that changes developer outcomes;
- HTML-defined APIs where markup and browser behavior are inseparable;
- accessibility considerations directly shaped by HTML;
- obsolete or historical behavior only where it explains current parsing, compatibility, or authoring risk.

Each coverage unit receives one state: `unmapped`, `planned`, `drafted`, `reviewed`, `stale`, `deferred`, or `excluded`. Exclusions and deferrals require a rationale. Scope accounting and reviewed coverage are separate measures; neither may be labelled simply “100% coverage.”

### Canonical ownership

- The **Atlas** owns canonical concept definitions, normative source mapping, and compact reference facts.
- The **Journey** owns narrative explanation, sequencing, examples, and mental-model development; it links to canonical Atlas concepts instead of duplicating reference records.
- The **Laboratory** owns fixtures, assertions, hint ladders, and observable evidence; its explanatory feedback cites the relevant Journey and Atlas material.

Shared content may be rendered in multiple contexts only from one structured source.

### Evidence classes

Claims use the evidence class appropriate to their nature: normative source; dated implementation observation; accessibility or user research; reproducible project test/fixture; or clearly labelled editorial recommendation. Primary standards are not treated as the source for observed usability or project behavior, and recommendations are not presented as normative rules.

## 7. Core user journeys

### UJ1 — Follow an expedition

A reader enters through the journey map, understands prerequisites and outcomes, completes predictions and repair work, can inspect supporting Atlas entries, and leaves with a visible summary of what changed in the Living Archive and what they can now explain.

### UJ2 — Enter from search or a direct concept link

A reader reaches an Atlas entry, obtains the answer and provenance quickly, then optionally follows a related explanation or lab. Narrative labels must always be paired with direct concept labels so the fiction does not weaken findability.

### UJ3 — Run a laboratory independently

A reader receives a self-contained fixture, task context, expected capabilities, safety constraints, and supporting concepts. Persistent-project context may enrich the exercise but is never required to understand it.

### UJ4 — Verify a claim

A reader can distinguish the project's interpretation from normative wording, reach an exact primary-source anchor, see when it was reviewed, and report a correction.

### UJ5 — Continue anonymously

A reader can store and export local progress without creating an account. Loss or unavailability of progress must not block content or labs.

## 8. Functional requirements

### Journey

- **JRN-01:** Provide an ordered journey map with direct concept labels, outcomes, prerequisites, status, and estimated scope for each expedition.
- **JRN-02:** Support non-linear entry without assuming completion of the persistent project; supply standalone fixtures and prerequisite summaries where needed.
- **JRN-03:** Provide reusable expedition components for mission briefings, predictions, Spec Lens, Browser Lens, repair tasks, field notes, checkpoints, and Archive changes.
- **JRN-04:** Allow authors to omit a component when it does not advance the learning outcome.
- **JRN-05:** Record observable learning objectives and misconception targets for each expedition.
- **JRN-06:** Present checkpoints that require prediction, explanation, diagnosis, or repair rather than recall alone.

### Spec Atlas

- **ATL-01:** Provide stable entries for every included coverage unit with structured relationships and aliases.
- **ATL-02:** Record canonical source URLs, exact anchors, source classification, reviewed revision/date, and content state.
- **ATL-03:** Distinguish normative requirements, observed browser behavior, accessibility evidence, production recommendations, and historical context.
- **ATL-04:** Support search by technical term, common phrasing, element/attribute name, and likely developer question.
- **ATL-05:** Generate a coverage dashboard showing dispositions and stale or broken provenance.
- **ATL-06:** Avoid duplicating canonical facts across entries, expeditions, and feedback.

### Laboratory

- **LAB-01:** Support at least `predict`, `repair`, `explore`, and `build` modes through a versioned manifest.
- **LAB-02:** Declare fixture files, allowed capabilities, assertions, hints, solution explanation, relevant concepts, and progress key.
- **LAB-03:** Provide deterministic feedback that explains causality, not only pass/fail state.
- **LAB-04:** Use a documented hint ladder that protects productive struggle and permits an explicit solution reveal.
- **LAB-05:** Isolate reader-authored code according to a reviewed threat model; network, navigation, forms, popups, and scripting are denied unless the lab explicitly requires them.
- **LAB-06:** Recover gracefully from infinite loops, invalid documents, focus traps, and renderer failures.
- **LAB-07:** Provide an accessible static or guided equivalent that achieves the same learning objective when the live environment cannot be used.
- **LAB-08:** Clearly label pedagogical simulations. Browser-derived views must identify the browser/version or standards-based parser that produced them.

### Browser Lens

- **BRW-01:** Synchronize only the views relevant to a lesson: source, parsed DOM, accessibility semantics, focus order, and network behavior.
- **BRW-02:** Offer non-visual representations of every relationship conveyed visually.
- **BRW-03:** Document the supported browser/assistive-technology observation matrix and how dated observations are refreshed.
- **BRW-04:** Never present an approximation of the accessibility tree or network model as exact browser output.

### Content operations

- **CNT-01:** Validate content schemas, stable IDs, relationships, sources, review state, and required metadata in CI.
- **CNT-02:** Maintain a ledger giving every existing source unit an explicit retain/revise/split/merge/verify/retire disposition and destination.
- **CNT-03:** Define editorial rules for normative language, citations, terminology, examples, inclusive language, corrections, and review authority.
- **CNT-04:** Support technical review and accessibility review as distinct publish gates.
- **CNT-05:** Detect broken anchors and potentially changed mapped source fragments without automatically rewriting educational claims.

### Progress

- **PRG-01:** The vertical slice stores progress locally without requiring identity.
- **PRG-02:** Readers can export and reset local progress.
- **PRG-03:** Progress records are versioned and tolerate content revisions without blocking access.
- **PRG-04:** Completion reflects demonstrated activities, not time-on-page or arbitrary engagement.
- **PRG-05:** Account synchronization remains a separately validated, optional capability and is not a prerequisite for the public foundation.

### Optional accounts and synchronization

- **ACC-01:** Account implementation begins only after research demonstrates cross-device value beyond local progress.
- **ACC-02:** Anonymous reading, search, labs, local export/reset, and core completion remain fully available.
- **ACC-03:** Before activation, define identity-provider loss, account linking, recovery, session lifecycle, and account-deletion behavior.
- **ACC-04:** Define deterministic merge, idempotency, stale-client, retry, explicit-reset, and content-version semantics before synchronization implementation.
- **ACC-05:** Export and deletion cover every account-linked data category and provide understandable completion/failure states.
- **ACC-06:** Identity requirements for optional AI are decided separately; having progress synchronization does not automatically authorize AI data use.

### Navigation and discovery

- **NAV-01:** Clearly expose Journey, Atlas, and Laboratory as distinct but connected modes.
- **NAV-02:** Provide stable human-readable URLs in the new information architecture without a requirement to preserve current URLs.
- **NAV-03:** Provide breadcrumbs, related concepts, learning prerequisites, and return paths that remain understandable outside the narrative metaphor.
- **NAV-04:** Ensure site search and external indexing can surface direct technical terminology.

### Optional Navigator

- **AI-01:** The Navigator may enter development only after a sufficiently reviewed corpus and evaluation set exist.
- **AI-02:** Every factual answer cites reviewed local material and exact primary-source anchors where applicable.
- **AI-03:** The system states when evidence is insufficient or conflicting and does not invent an answer.
- **AI-04:** Lab help defaults to hints; complete solutions require explicit reader intent.
- **AI-05:** AI is labelled, optional, quota-controlled, privacy-reviewed, and never required for core outcomes.

## 9. Quality requirements

### Accessibility

- **A11Y-01:** Target WCAG 2.2 AA as a baseline, supplemented by task-based manual evaluation.
- **A11Y-02:** Define a supported browser and assistive-technology matrix before the vertical-slice pilot.
- **A11Y-03:** Test keyboard operation, screen-reader use, focus entry and escape, error discovery, 400% zoom/reflow, forced colors, reduced motion, touch targets, and non-visual alternatives.
- **A11Y-04:** Include disabled participants in vertical-slice research and require remediation of blocking findings before the public foundation.
- **A11Y-05:** Provide captions/transcripts for media and pause/control for meaningful animation.

### Performance

- **PERF-01:** Define route-class JavaScript, CSS, font, and media budgets during technical foundation work.
- **PERF-02:** Load editors, visualizations, and optional services only when required.
- **PERF-03:** Measure Core Web Vitals on representative mobile hardware and network conditions before public release.

### Security and privacy

- **SEC-01:** Complete a laboratory threat model and isolation spike before selecting the execution architecture.
- **SEC-02:** Enforce capability-deny defaults and a restrictive content security policy for reader-authored code.
- **SEC-03:** Conduct dependency, input-boundary, and abuse-case review for every service-enabled release.
- **PRIV-01:** Anonymous use is first-class; collect no personal data without a specific, documented reader benefit.
- **PRIV-02:** Before accounts or AI, document data inventory, purpose, retention, consent, deletion/export, incident handling, and service-provider boundaries.

### Reliability and portability

- **REL-01:** Reading and reference content remain available when interactive code or optional services fail.
- **REL-02:** Lab and progress failures produce recoverable, actionable errors and must not lose authored content.
- **REL-03:** Platform-specific services require decision records and adapters at durable domain boundaries; provider choices are hypotheses until evaluated.

### Research operations

- **RSR-01:** Human research uses informed consent, accessible recruitment/materials, appropriate compensation, accommodations, and a clear withdrawal process.
- **RSR-02:** Research plans minimize, classify, anonymize, retain, and delete recordings, transcripts, disability-related information, and contact data under a documented policy.
- **RSR-03:** Research evidence records segment coverage, sampling limitations, saturation/decision rules, and when an additional tranche is required.

### First-edition outputs

- **EDN-01:** Freeze a versioned first-edition scope; every unit inside that frozen scope must be reviewed before the edition is called complete.
- **EDN-02:** Report scope-accounting percentage separately from reviewed-coverage percentage; deferred units outside the frozen edition remain visible but do not count as reviewed completion.
- **EDN-03:** Provide an accessible, reproducible static/downloadable edition and dated snapshot without requiring accounts or AI.

## 10. Measurement plan

Targets must be finalized after baseline research. Each measure records its sample, method, baseline, target, and decision rule.

- **Learning:** pre/post prediction and repair performance; explanation rubric; delayed transfer where feasible; final-hint usage.
- **Reference utility:** search success, time to a verified answer, unsuccessful-query themes, and direct-entry task completion.
- **Experience:** expedition and lab completion, voluntary continuation, abandonment reason, and qualitative confidence—not raw time on site.
- **Coverage and trust:** disposition percentage, reviewed percentage, stale items, broken anchors, correction volume, and review turnaround.
- **Coverage and trust:** scope-accounting percentage and reviewed-coverage percentage are reported separately, alongside stale items, broken anchors, corrections, and review turnaround.
- **Accessibility:** task completion and severity-weighted barriers across the supported matrix and disabled-participant research.
- **Performance and reliability:** route budgets, Core Web Vitals, lab error recovery, and progress-loss rate.
- **Sustainability:** authoring time per content type, duplicated-fact count, review effort, and contributor throughput.

Analytics must be minimal, privacy-reviewed, documented, and unnecessary for core use. Vanity metrics such as page views are contextual rather than primary success criteria.

## 11. Vertical-slice acceptance

Before recruiting the **First Byte** pilot, WP-300 must preregister the practical-effect threshold, scoring/reliability method, segment and task-coverage rules, accessibility severity threshold, and explicit `continue`, `iterate`, and `stop` boundaries. The slice may proceed to public-foundation work when:

1. representative developers can understand the information architecture and the Living Archive premise without facilitation;
2. the complete Journey + Atlas + Laboratory loop produces measurable improvement on the targeted parsing misconceptions;
3. readers can enter the Atlas and lab independently and succeed;
4. disabled participants can achieve the same learning outcomes without unresolved high-severity barriers under the preregistered severity rubric;
5. source-to-DOM behavior is technically validated and all simulation boundaries are labelled;
6. the sandbox threat model and recovery behavior pass review;
7. static alternatives communicate the same causal model, even if they cannot reproduce every interaction;
8. content schemas, provenance, link checking, lab assertions, and accessibility smoke tests run in CI;
9. representative pages meet the agreed performance budgets;
10. findings, target thresholds, and the decision to continue, revise, or stop are documented.

## 12. Dependencies

- Audience and misconception research before learning-outcome lock.
- Coverage taxonomy before declaring information architecture or completeness.
- Content ledger before rewriting existing material.
- Interaction and accessibility prototypes before committing to an editor or visualization framework.
- Threat model before live code execution architecture.
- Deployment and data decisions before accounts or AI services.
- Reviewed corpus and evaluation suite before Navigator development.

## 13. Principal risks

The detailed register lives in [`RISKS.md`](RISKS.md). The largest product risks are:

- scope multiplication across Journey, Atlas, labs, accounts, and AI;
- an unbounded definition of comprehensive;
- ornamental narrative or visuals weakening retrieval and accessibility;
- simulated browser behavior being mistaken for platform truth;
- inaccessible or unsafe in-browser editing;
- duplicated canonical content drifting across product layers;
- premature provider and platform commitments;
- investing in a polished shell before validating the learning mechanic.

## 14. Requirement traceability

Epic files provide planning-level mappings. Before a work package becomes `Ready`, it must map exact requirement IDs and include:

- intended outcome;
- parent phase and epic;
- covered requirement IDs;
- dependencies;
- acceptance evidence;
- responsible role;
- delivery risk or uncertainty.

[`TRACEABILITY.md`](TRACEABILITY.md) provides the top-level requirement-to-epic map.
