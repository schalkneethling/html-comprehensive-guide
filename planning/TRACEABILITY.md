# Requirements Traceability

This is the top-level map. Work-package issue creation should add direct links to acceptance evidence.

| Requirement families | Primary epic | Supporting epics | Verification |
|---|---|---|---|
| `JRN-*` | E03 First Byte | E01, E04, E05 | Prototype research, content review, learning tasks, browser tests |
| `ATL-*` | E01 Discovery/content architecture | E02, E04, E05, E08 | Schema validation, search tasks, coverage audit, provenance review |
| `LAB-*` | E02 Experience/platform foundations | E03, E05 | Threat model, automated assertions, recovery tests, accessible task evaluation |
| `BRW-*` | E02 Experience/platform foundations | E03, E05, E08 | Cross-browser comparison, source labelling, non-visual task testing |
| `CNT-*` | E01 Discovery/content architecture | E02, E04, E05, E08 | Ledger audit, schema/link/source CI, editorial and accessibility review |
| `PRG-*` | E03 First Byte | E04, E06 | Local-state tests, export/reset tests, reader research |
| `ACC-*` | E06 Accounts/progress/privacy | E03, E07 | Demand research, lifecycle/conflict tests, privacy/security review |
| `NAV-*` | E02 Experience/platform foundations | E03, E04 | IA research, keyboard/screen-reader journeys, search evaluation |
| `AI-*` | E07 Navigator | E01, E02, E08 | Grounding/citation evals, safety/privacy review, beta research |
| `A11Y-*` | E02 Experience/platform foundations | Every delivery epic | Automated checks plus manual supported-matrix and disabled-user tasks |
| `PERF-*` | E02 Experience/platform foundations | E03–E08 | Route budgets, representative hardware tests, Core Web Vitals |
| `SEC-*` | E02 Experience/platform foundations | E03, E06, E07, E08 | Threat models, security tests, abuse review, incident exercises |
| `PRIV-*` | E06 Accounts/progress/privacy | E02, E03, E07, E08 | Data inventory, consent/retention review, export/deletion tests, incident exercises |
| `REL-*` | E02 Experience/platform foundations | E03–E08 | Failure injection, fallback checks, recovery and portability review |
| `RSR-*` | E01 Discovery/content architecture | E03 | Research-plan review, consent/data evidence, sampling/saturation audit |
| `EDN-*` | E08 First edition/living operations | E05 | Frozen-scope audit, reviewed-coverage audit, reproducible output checks |

This family map is navigational, not sufficient work-package traceability. Before any package becomes `Ready`, add a requirement-by-requirement record naming its primary package, supporting packages, phase gate, verification, and status. Phase 0 cannot pass until the exact map exists for the active and immediately upcoming phases; later phases complete theirs before activation.
