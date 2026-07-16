# Specification Coverage Model

## Purpose

The project cannot responsibly call itself comprehensive until it defines the territory and can account for it. This document is the proposed model; E01 must validate it against the current WHATWG HTML Living Standard before it becomes authoritative.

## Proposed coverage units

The coverage map should represent units at the smallest level that can carry a meaningful independent disposition:

1. foundational concepts and terminology;
2. syntax, parsing, document modes, and conformance concepts that affect authors;
3. conforming elements and materially distinct element states;
4. global and element-specific attributes and materially distinct values;
5. content categories, content models, and authoring constraints;
6. processing models whose behavior materially changes developer or user outcomes;
7. HTML-defined APIs where markup, state, and browser behavior are inseparable;
8. accessibility semantics and author requirements directly shaped by HTML;
9. obsolete/historical behavior only where it explains current parsing, compatibility, security, or authoring risk.

CSS, JavaScript, DOM APIs, URL processing, Fetch, ARIA, and other standards enter only at the boundary needed to explain an included HTML outcome. Their complete specifications remain out of scope.

## Coverage record

Each unit should eventually contain:

- stable local ID and aliases;
- source URL, exact anchor, source view, revision/fingerprint, and last check;
- unit type and parent/related units;
- inclusion rationale or exclusion rationale;
- canonical Atlas destination;
- relevant expeditions and labs;
- author, technical reviewer, accessibility reviewer, and review dates;
- status and known browser/AT evidence dependencies;
- issues, corrections, and freshness flags.

## States

- **Unmapped:** in declared scope but no destination exists.
- **Planned:** destination and intended depth are assigned.
- **Drafted:** content exists but has not passed all reviews.
- **Reviewed:** required reviews and provenance pass.
- **Stale:** source or evidence changed enough to require human review.
- **Excluded:** outside declared scope with a recorded rationale.
- **Deferred:** inside declared scope but intentionally postponed to a named edition or revisit condition.

## Completeness rules

- **Scope accounting:** every declared unit has a visible state; this measures accountability, not completion.
- **Reviewed coverage:** the percentage of declared units that have passed required review; this is reported separately from scope accounting.
- **Edition completion:** an edition freezes its own included-unit set, and every unit in that frozen set must be reviewed. Deferred units remain in the wider product territory but sit outside that edition's completion denominator.
- **Narrative depth:** selected by misconception risk, frequency, user impact, and conceptual dependency—not evenly distributed.
- **Laboratory depth:** required when observable behavior or practice materially improves understanding; absence may be justified.
- **Atlas depth:** carries the exhaustive reference obligation for included units.

## E01 validation questions

- Which WHATWG source representation is canonical for mapping and revision tracking?
- How stable are anchors across the canonical and developer views?
- At what granularity do attributes, states, algorithms, and authoring requirements remain maintainable?
- How are cross-standard boundaries recorded without expanding scope indefinitely?
- What review evidence is required to move each unit to `reviewed`?
- How are generated records kept readable and reviewable by contributors?
