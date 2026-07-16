# Product Vision: HTML — The Living Web

## The opportunity

HTML is the substrate of the web, yet most developers encounter it in one of two unsatisfying forms: introductory tutorials that stop at syntax, or reference material that answers isolated questions without building a coherent mental model. The HTML Living Standard contains the real rules, but it is written principally to make implementations interoperable. Its precision is essential and its shape is difficult to learn from.

This project can occupy the missing middle: rigorous enough to earn trust, authored for practitioners, and experiential enough that developers want to keep exploring.

The promise remains simple:

> I read the specification so you do not have to—and I built the experiments that let you see what it means.

## The reader transformation

The experience begins with a developer who can write HTML but often relies on convention, snippets, or browser forgiveness. It ends with a developer who can:

- predict how a browser will parse and repair markup;
- choose elements and attributes based on semantics and user outcomes;
- explain the relationship between source, DOM, accessibility semantics, focus behavior, and network effects;
- distinguish conformance requirements from stylistic advice and implementation quirks;
- diagnose failures using the specification and browser tools;
- build resilient, accessible documents with intent rather than habit.

The aim is not memorization. It is judgment.

## Product concept

**HTML — The Living Web** is a narrative, specification-grounded expedition with three inseparable layers.

### The Journey

A sequence of authored expeditions gives the reader a reason to continue. Readers restore and evolve a realistic fictional site, **The Living Archive**, while learning how browsers transform source into experiences.

The persistent project supplies continuity, but each expedition remains independently useful. A reader may follow the entire route or enter through a specific concept without receiving a diminished explanation.

### The Spec Atlas

The Atlas is the exhaustive field guide behind the journey. It covers developer-relevant concepts, elements, attributes, states, algorithms, and processing rules with exact source provenance.

The Atlas is not a second curriculum. It supports precise lookup, links related concepts, exposes content status, and makes the project's claim of comprehensiveness auditable.

### The Laboratory

Laboratories turn explanation into evidence. Readers predict browser behavior, inspect transformations, break examples, repair defects, and receive deterministic feedback. Labs emphasize observable platform behavior rather than toy syntax exercises.

Together, these layers support motivation, reference, and mastery. None is sufficient alone.

## Narrative route

The proposed first-edition journey is organized around mental models:

1. **First Byte** — syntax, parsing, error recovery, DOM construction, conformance, and quirks mode.
2. **The Document Awakens** — doctype, `html`, `head`, `body`, language, and global attributes.
3. **Signals from the Head** — metadata, titles, base URLs, relationships, resource loading, and performance.
4. **Architecture of Meaning** — sections, headings, landmarks, grouping content, and document structure.
5. **The Document Finds Its Voice** — text semantics, quotations, code, edits, dates, and bidirectional text.
6. **Paths Through the Web** — URLs, anchors, navigation, downloads, link security, and relationships.
7. **Windows into Other Worlds** — responsive images, figures, iframes, embedded content, SVG, and MathML.
8. **Sound and Motion** — audio, video, tracks, captions, playback, and accessibility.
9. **Data Has Shape** — tables, captions, headers, relationships, and complex datasets.
10. **A Conversation with the User** — forms, submission, encoding, validation, labels, and errors.
11. **The Native Control Room** — inputs, buttons, selections, meters, progress, and platform behavior.
12. **The Web Responds** — disclosure, dialogs, popovers, focus, inertness, and native interaction.
13. **Templates of the Future** — templates, slots, custom elements, and extensibility.
14. **The Drawing Surface** — canvas, fallback content, accessibility, and appropriate use.
15. **Ship the Archive** — an integrated semantics, accessibility, resilience, privacy, and performance audit.

This route is a hypothesis until the coverage map and reader research validate its boundaries and ordering.

## The expedition grammar

Each expedition uses a shared grammar so depth feels coherent rather than repetitive:

- **Mission briefing:** a human or engineering problem worth solving.
- **Prediction:** an opportunity to commit to an explanation before observing the browser.
- **Spec Lens:** the exact source, its classification, and a plain-language interpretation.
- **Browser Lens:** synchronized views of source, parsed DOM, accessibility semantics, focus order, and relevant network behavior.
- **Break the Web:** malformed, misleading, or incomplete markup whose outcome is not obvious.
- **Repair mission:** an editable exercise with deterministic assertions and layered hints.
- **Time Machine:** history only where it explains present behavior.
- **Field notes:** concise production guidance and pitfalls.
- **Checkpoint:** explanation-based evidence of understanding rather than recall trivia.
- **Archive change:** a visible improvement to the persistent project.

The grammar is a design system, not a mandatory page template. An expedition uses only the components that serve its learning outcome.

## Experience principles

### Reveal the browser

The browser is not a neutral code renderer. The product should make parsing, correction, semantics, focus, and fetching visible wherever doing so improves understanding.

### Begin with a consequential question

Start with a prediction, defect, or user need. Introduce terminology and rules as tools for resolving that tension.

### Separate kinds of truth

Clearly distinguish:

- normative requirements from the Living Standard;
- observed implementation behavior;
- accessibility requirements and tested user impact;
- production recommendations and editorial judgment;
- historical explanation.

### Make failure useful

Incorrect predictions and broken markup are learning material. Feedback should explain the causal model, not merely reveal the expected output.

### Reward understanding, not activity

Progress represents meaningful outcomes. Avoid streaks, arbitrary points, manipulative reminders, and completion mechanics disconnected from mastery.

### Authored before generated

The core experience is written, reviewed, and cited by people. Optional AI may help readers navigate that body of knowledge but may not become an uncited authority or a prerequisite.

### Accessibility is part of the subject and the medium

The site must embody the principles it teaches. Accessibility decisions belong in interaction design, content design, engineering, research, and acceptance criteria from the beginning.

## Visual world

The visual metaphor is editorial cartography. The specification is territory; expeditions are routes; anchors are coordinates; discoveries become field notes; and the reader gradually gains a usable map of the platform.

The result should feel authored, curious, and technically precise rather than like generic documentation or a gamified learning dashboard. Expressive editorial typography pairs with a technical monospace face. Source, DOM, accessibility, focus, and network layers receive consistent visual identities.

The metaphor must never obscure usability. Motion respects user preferences, and no meaning or operation depends solely on animation, color, dragging, sound, or pointer input.

## A fresh foundation

This is a new product, not a redesign constrained by the current site.

“Fresh” applies to this project's implementation, routes, shell, and internal interfaces. It does not mean ignoring browser interoperability, legacy parsing behavior, or assistive-technology compatibility where those are essential to understanding HTML.

- Current routes, chapter numbering, Starlight templates, and component choices do not require compatibility.
- Existing prose, examples, research, and authorial voice remain valuable source material.
- Every existing content unit receives an explicit disposition: retain, revise, split, merge, research, or retire with a reason.
- No legacy route, redirect layer, compatibility abstraction, or migration-parity release gate is required.
- New content contracts and information architecture are designed for the vision rather than inferred from the old tree.

## What makes the product trustworthy

Trust comes from visible practice:

- claims cite primary sources;
- source anchors and review dates are recorded;
- coverage gaps and stale material are public;
- examples are tested where practical;
- accessibility includes disabled readers and manual evaluation;
- browser differences are observed and dated rather than generalized;
- AI answers, if introduced, cite reviewed material and admit insufficient evidence;
- corrections are welcomed and reflected in a public change history.

## Product horizons

### Horizon 1: prove the experience

Define the content system, coverage model, visual language, and laboratory architecture; then validate them through the complete **First Byte** vertical slice.

### Horizon 2: establish the public foundation

Ship the new shell, Journey, Atlas, Laboratory, local progress, contribution model, and migrated source knowledge without legacy implementation constraints.

### Horizon 3: complete the authored journey

Expand in coherent waves, building narrative, reference coverage, and laboratories together until every in-scope concept has a reviewed disposition.

### Horizon 4: add optional services

Introduce account synchronization and, later, a grounded Navigator only when reader value, privacy boundaries, operating cost, and content quality justify them.

### Horizon 5: keep the work living

Detect specification change, conduct human review, publish dated editions and change reports, and improve weak explanations based on reader evidence.

## Vision test

A product decision belongs when it strengthens at least one of these outcomes without undermining the others:

1. The reader gains a more accurate and durable mental model.
2. The platform's behavior becomes more observable and explainable.
3. The project's coverage or trustworthiness becomes more auditable.
4. The experience becomes more accessible, inviting, or coherent.
5. The work becomes easier to maintain as the standard changes.

Features that primarily add novelty, engagement metrics, or technical sophistication without advancing these outcomes should not enter the roadmap.
