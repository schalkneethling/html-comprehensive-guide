# Existing Content Ledger

This ledger prevents knowledge loss during the fresh-start rebuild. It is intentionally a section-level seed, not a claim that review is complete.

## Dispositions

- **Retain:** preserve substantially, subject to verification and new presentation.
- **Revise:** preserve the purpose and research while improving accuracy, structure, or voice.
- **Split:** distribute one source section across multiple canonical destinations.
- **Merge:** combine overlapping source material into one new content unit.
- **Research:** do not republish the claim until it is verified.
- **Retire:** do not republish; preserve the ledger entry and reason.

## Source inventory

| Source | Current subject | Initial disposition | Proposed destinations | Required follow-up |
|---|---|---|---|---|
| `src/content/docs/index.mdx` | Generic landing page | Retire | New product home and journey map | Replace it; preserve project/support links only if still relevant; no Starlight copy constraint |
| Introduction: “A living language” | Living Standard and developer view | Revise | Vision-facing introduction; Atlas: specification and conformance | Verify current terminology and source relationships |
| Introduction: “Why this book exists” | Authorial promise | Retain | Product home; expedition introduction | Preserve the “I read the spec…” voice |
| Introduction: “A short history” | HTML history | Split | Time Machine notes; Atlas history | Revise destinations, verify dates, and remove history that does not explain current behavior |
| Introduction: “Scope of this book” | Audience and scope | Revise | Product orientation; coverage documentation | Align with declared taxonomy and working-developer audience |
| Introduction: “Tools to work with HTML” | Validators and references | Revise | Field guide/tooling Atlas entries | Verify tools, purpose, and current links |
| Introduction: “Reading this book” | Old linear structure | Retire | Journey orientation | Replace specification-order promise with Journey/Atlas/Lab model |
| Chapter 1: learning objectives/introduction | Document foundation | Split | First Byte; Document Awakens; Signals from the Head | Rewrite as observable objectives and mission context |
| Chapter 1: doctype | Standards/quirks mode | Split | First Byte; Document Awakens; Atlas: doctype | Revise destinations, verify parsing/mode claims, and build comparison lab |
| Chapter 1: `html`, `lang`, `translate` | Document root, language declaration, and translation control | Revise | Document Awakens; Atlas entries | Add accessibility evidence and language edge cases |
| Chapter 1: `meta charset` | Encoding declaration | Split | First Byte; Signals from the Head; Atlas: encoding | Revise destinations; verify normative wording, 1024-byte rule, and encoding algorithm summary |
| Chapter 1: `meta http-equiv` | `default-style`, `refresh`, and CSP pragma directives | Research | Signals from the Head; Atlas entries | Verify each directive independently, then split destinations and distinguish them from HTTP response headers |
| Chapter 1: named `meta` values | Application name, author, description, generator, keywords, referrer, theme color, and extensions | Research | Signals from the Head; Atlas entries | Verify status and claims, then split destinations |
| Chapter 1: `head` | Metadata container and omission rules | Revise | Document Awakens; Signals from the Head; Atlas | Verify parsing and permitted-content claims |
| Chapter 1: `title` | Document title and APIs | Revise | Signals from the Head; Atlas | Audit accessibility, history, platform UI, and API claims |
| Chapter 1: `base` | URL resolution and default target behavior | Research | Signals from the Head; Paths Through the Web; Atlas | Verify behavior, then split destinations |
| Chapter 2: learning objectives/introduction | External relationships | Split | Signals from the Head; Paths Through the Web | Reframe around user/performance problems |
| Chapter 2: `link`, `rel`, `href` | Link element fundamentals | Split | Signals from the Head; Atlas entries | Revise destinations and correct oversimplifications |
| Chapter 2: stylesheets and `style` | Stylesheet processing | Research | Signals from the Head; laboratory fixtures | Re-test claims, then revise retained material |
| Chapter 2: alternate stylesheets | Alternate style sets | Research | Atlas; optional lab | Confirm current implementations and accessibility value before revising |
| Chapter 2: favicons | Icon relationships | Revise | Signals from the Head; Atlas | Re-check formats, selection behavior, and examples |
| Chapter 2: resource hints | DNS, connection, fetch hints | Research | Signals from the Head; Browser Lens/network labs; Atlas | Verify status and behavior, then split destinations |
| Chapter 2: loading and blocking controls | `blocking`, `rel=expect`, `modulepreload`, `crossorigin`, and related processing | Research | Signals from the Head; Browser Lens; Atlas | Verify freshness-sensitive behavior, then split destinations |
| Chapter 2: document and application relationships | `manifest`, `next`, `prev`, alternate documents, `hreflang`, and `type` | Research | Signals from the Head; Paths Through the Web; Atlas | Verify independently, then split destinations |
| Chapter 2: metadata relationships | canonical, license, privacy, search, pingback | Split | Paths Through the Web; Atlas entries | Verify each relationship independently and retire obsolete guidance with rationale |
| `examples/chapter2/news.html` and CSS | Stylesheet behavior fixture | Revise | Laboratory candidate | Audit and adapt for reuse |
| `examples/chapter2/link-media.html` and CSS | Media/alternate stylesheet fixture | Research | Laboratory candidate | Test modern browser behavior before revising for reuse |
| Chapter 2 Firefox screenshots | Browser evidence | Research | Browser Lens evidence or retire | Determine provenance, date, relevance, and accessible alternative |
| `src/assets/htmlcg-icon.svg` | Existing project mark | Research | Brand exploration | Decide retain or retire; preserve attribution/history |
| `public/favicon.svg` | Current site favicon | Research | Brand exploration | Decide retain or retire with the visual identity decision |
| `README.md` and `WARP.md` | Current contributor and architecture guidance | Revise | Repository onboarding and contributor documentation | Replace stale guidance as foundation decisions land |
| GitHub issues #6–#17 | Old chapter outlines | Split | Coverage map and expansion waves | Map intent before superseding issues |

## Completion rule

Before the public foundation gate, expand this ledger to every source heading, example, citation cluster, and asset. Each entry must record a destination, factual/provenance status, owner/reviewer, and completed disposition. “Retire” is acceptable; “unaccounted” is not.
