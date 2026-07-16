# Project Goal

## North Star

Create the definitive, specification-grounded journey through modern HTML: an authored, interactive experience that helps working web developers understand not only what correct HTML looks like, but how browsers interpret it, why the platform behaves as it does, and how to make durable engineering decisions.

## Who This Is For

The primary audience is working web developers who already know basic HTML and want a deeper, reliable mental model of the language and the browser behavior behind it.

The project is not designed as a first introduction to web development. It should remain approachable, but it may assume that readers have built web pages and can read HTML, CSS, and small amounts of JavaScript.

## Core Goals

1. **Make the HTML Living Standard useful to practitioners.** Translate normative rules, algorithms, and historical compromises into accurate explanations, examples, and production guidance without weakening their meaning.
2. **Teach durable mental models.** Organize learning around parsing, semantics, browser behavior, accessibility, resilience, and user outcomes rather than presenting an inventory of elements.
3. **Make deep learning active.** Use browser visualizations, prediction exercises, repair missions, and a persistent project to turn specification knowledge into practical understanding.
4. **Be demonstrably comprehensive.** Maintain a coverage model that accounts for every developer-relevant part of the declared HTML scope and makes omissions, stale material, and review status visible.
5. **Earn long-term trust.** Cite primary sources, distinguish normative requirements from advice, review changes to the Living Standard, and treat accessibility as a product-wide quality attribute.
6. **Remain complete without AI.** The authored journey, reference material, and laboratories must stand on their own. Any AI assistance is optional, grounded in reviewed content, cited, and introduced only after the core experience is trustworthy.

## Success Looks Like

- Working developers voluntarily complete expeditions and can explain and repair the misconceptions each expedition targets.
- Every in-scope specification concept has a visible state: unmapped, planned, drafted, reviewed, stale, deferred, or excluded with a rationale.
- Every published normative or platform-behavior claim can be traced to a primary source or clearly identified, dated practitioner evidence.
- Every interactive pattern is operable with a keyboard, understandable with assistive technology, and useful without motion, color, sound, dragging, or client-side JavaScript alone.
- The first edition freezes a versioned subset of the declared product territory, reviews every unit in that frozen scope, passes its quality gates, and reports wider scope accounting separately.
- Readers describe the experience as a journey they want to continue, not a reference they consult only when blocked.

## Non-Goals

- A beginner crash course in HTML, CSS, JavaScript, or general web development.
- A thin restatement of MDN or the HTML specification.
- A catalogue of elements organized only by specification order.
- A certification product, competitive coding platform, or engagement system built around streaks and points.
- A compatibility shell around the current Starlight site, its routes, chapter numbering, or technical architecture.
- Preservation of outdated claims, incomplete prose, or current chapter boundaries merely because they already exist.
- An AI-first tutor whose generated output becomes the source of truth.
- Exhaustive coverage of CSS, JavaScript, browser internals, or non-standard platform features except where they materially explain HTML.

## Principles and Constraints

- **Fresh product, preserved knowledge.** The implementation may begin from a clean foundation. Existing prose, examples, research, and authorial voice must be inventoried and deliberately retained, revised, split, merged, researched, or retired with a reason.
- **Primary sources first.** The WHATWG HTML Living Standard is authoritative for HTML behavior. Supporting standards, accessibility specifications, browser tests, and implementation evidence are cited when relevant.
- **Authored authority.** Human-reviewed content defines the curriculum and reference corpus.
- **Progressive enhancement.** Core reading and navigation work without client-side JavaScript. Interactive experiences include meaningful static fallbacks.
- **Accessibility is architectural.** It is designed, researched, tested, and reviewed from the first vertical slice rather than audited at the end.
- **Public vertical slices.** Prove the full experience with one excellent expedition before scaling content production.
- **Measured scope.** Comprehensiveness is governed through a coverage map, not asserted in marketing copy.
- **Privacy by default.** Anonymous use is first-class. Accounts and data collection exist only where they create clear reader value.

## Current Focus

Establish the product foundation and validate it through the **First Byte** vertical slice: parsing, error recovery, DOM construction, conformance, and quirks mode taught through the complete journey, Atlas, and laboratory experience.

## Planning Authority

The documents under [`planning/`](planning/) define the current vision, product requirements, roadmap, and implementation epics. If a tactical issue conflicts with these documents, resolve the conflict explicitly rather than silently expanding scope.
