# E07 — Navigator Beta

## Outcome

Optional assistance provides useful, cited navigation and hints grounded only in reviewed material, without becoming the source of truth.

## Entry conditions

WP-700–WP-701 may begin once a representative reviewed corpus and reliable provenance exist. WP-702 onward requires the resulting corpus policy and evaluation set, privacy/cost boundaries, and evidence of value beyond authored tools.

## Work packages

| ID | Work package | Requirements | Dependencies | Acceptance evidence |
|---|---|---|---|---|
| WP-700 | Define corpus admission, chunking, source-use, and removal policy | AI-01–03, CNT-03–05 | E05 maturity | Only reviewed, licensed/approved, stable-ID material can enter; stale/removal flow works |
| WP-701 | Build factual, adversarial, citation, hint-quality, refusal, and accessibility evals | AI-02–05 | WP-700 | Representative dataset and human-review rubric accepted before implementation tuning |
| WP-702 | Decide retrieval, generation, gateway, quota, and portability architecture | REL-03, PRIV-02 | WP-700–701 | Provider/cost/latency/privacy/operations decision records accepted |
| WP-703 | Implement citation-resolving retrieval and insufficient-evidence behavior | AI-02–03 | WP-702 | Every returned citation resolves; unsupported/conflicting prompts refuse or redirect correctly |
| WP-704 | Implement contextual reading and Socratic lab-help UX | AI-04–05, A11Y-01–05 | WP-703 | Hint intent, solution reveal, streaming/failure, keyboard/AT, and no-AI paths pass |
| WP-705 | Implement consent, retention, quotas, abuse controls, export/deletion as applicable | AI-05, PRIV-02, SEC-03 | WP-702–704 | Privacy/security/abuse test suite and user-facing explanations pass |
| WP-706 | Run a gated beta and make go/iterate/stop decision | AI-01–05 | WP-701–705 | Factual support, citation resolution, safety, usefulness, latency, accessibility, and cost report published |

## Exit principle

Passing model metrics is insufficient. The beta must show reader value beyond authored search, cross-links, and deterministic hint ladders.
