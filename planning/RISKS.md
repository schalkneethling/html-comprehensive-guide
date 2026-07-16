# Risk Register

Probability and impact are initial qualitative assessments and must be revisited at each phase gate.

| ID | Risk | Probability | Impact | Mitigation and trigger |
|---|---|---:|---:|---|
| R-01 | “Comprehensive” creates unbounded scope. | High | High | Version the taxonomy, require dispositions, prioritize narrative depth by reader risk/frequency, and let Atlas carry exhaustive reference coverage. Trigger: unmapped scope grows faster than reviewed scope. |
| R-02 | Journey, Atlas, and labs duplicate facts and drift. | High | High | Enforce canonical ownership, stable IDs, shared structured data, and CI relationship checks. Trigger: the same claim requires multiple independent edits. |
| R-03 | Narrative or cartographic styling weakens retrieval, authority, or accessibility. | Medium | High | Pair narrative labels with direct technical labels; test low-fidelity IA and disabled-user tasks. Trigger: readers cannot predict destinations or find direct answers. |
| R-04 | Browser Lens presents simulations as browser truth. | Medium | High | Label data sources/versions, distinguish approximation, test against supported browsers, and date observations. Trigger: unexplained divergence from browser output. |
| R-05 | Live code execution is unsafe or inaccessible. | High | High | Threat model and prototype before architecture lock; deny capabilities by default; provide static/guided equivalents. Trigger: focus traps, code escape, unrecoverable loops, or unsupported assistive-tech tasks. |
| R-06 | Existing authored knowledge is lost during the fresh rebuild. | Medium | High | Maintain the section-level ledger and prohibit public-foundation exit with unaccounted material. Trigger: source deletion without a destination or rationale. |
| R-07 | Specification change creates stale or noisy alerts. | High | Medium | Track exact anchors/revisions, tune human triage, distinguish normative from editorial changes, and avoid auto-rewrites. Trigger: alert volume exceeds review capacity. |
| R-08 | Platform work outpaces product validation. | Medium | High | Prototype learning mechanics before shell investment; First Byte is a stop/iterate gate. Trigger: infrastructure milestones complete while reader evidence remains absent. |
| R-09 | Accessibility becomes an end-stage audit. | Medium | High | Put accessibility acceptance and disabled participants in every interaction gate. Trigger: patterns reach implementation review without accessible prototypes. |
| R-10 | Accounts create disproportionate privacy and operational burden. | Medium | High | Keep anonymous/local progress first-class; require demand evidence and a data/threat model. Trigger: account work enters the critical path before local progress validation. |
| R-11 | AI produces unsupported claims, cost, abuse, or distraction. | Medium | High | Defer until corpus/evals are ready; require citations, refusals, quotas, privacy controls, and an explicit beta gate. Trigger: AI is proposed to compensate for incomplete authored content. |
| R-12 | Authoring and review throughput cannot sustain the scope. | High | High | Measure authoring/review time, use templates and schemas, publish coherent waves, and adjust edition scope. Trigger: review backlog grows across two consecutive gates. |
| R-13 | Primary-source excerpts or generated corpora create licensing concerns. | Medium | High | Accept an excerpt/citation policy before ingestion and preserve attribution. Trigger: stored source text expands beyond minimal quotation needs. |
| R-14 | The pilot sample produces misleading confidence. | Medium | Medium | Record recruitment, baseline, task method, uncertainty, and decision rules; combine quantitative and qualitative evidence. Trigger: a threshold is reported without method or baseline. |
| R-15 | Fresh implementation choices lock the project to a vendor prematurely. | Medium | Medium | Keep provider choices in decision records, design durable domain boundaries, and test portability where it matters. Trigger: product requirements name a provider without an accepted rationale. |

## Review policy

Every active phase assigns owners and review dates to its relevant risks. A phase gate cannot pass with an unowned critical risk or a high-impact trigger that has occurred without a recorded response.
