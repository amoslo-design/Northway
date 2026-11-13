# Northway visual v3: analysis and proposed build plan

Prepared 13 November 2026, Europe/Stockholm, for Amos and the UX lead.

**Status: analysis only, awaiting Amos's approval.** This report records the audit and proposals presented in chat. It does not approve implementation or change a locked decision. No source code was changed and no branch or pull request was created during the analysis.

## Review basis

The v3 kit was reviewed from `origin/northway-v3-refero-kit` at commit `5749412`, associated with [PR #3](https://github.com/amoslo-design/Northway/pull/3). The review included the rebuild brief, locked decisions, synthesis, quality bar, remaining briefs, all six full Refero guides, the 34 preview keyframes and the duplicate images in `refs/`.

The current working source, content, tokens and tests were also reviewed. The checkout remained on `add-northway-context` because it contains substantial uncommitted work. The fetched kit was read separately to preserve that work.

Primary source documents:

- [Rebuild brief](https://github.com/amoslo-design/Northway/blob/northway-v3-refero-kit/v2/REBUILD-BRIEF-V3.md)
- [Locked decisions](https://github.com/amoslo-design/Northway/blob/northway-v3-refero-kit/v2/DECISIONS-V2.md)
- [Refero synthesis and reference lock](https://github.com/amoslo-design/Northway/blob/northway-v3-refero-kit/v2/design/refero/SYNTHESIS.md)
- [Website quality bar](https://github.com/amoslo-design/Northway/blob/northway-v3-refero-kit/v2/design/WEBSITE-QUALITY-BAR.md)
- [Conversion rules](https://github.com/amoslo-design/Northway/blob/northway-v3-refero-kit/v2/docs/CONVERSION.md)

This is a source-and-reference audit, not a fresh runtime certification. The implementation quality gate has not been run for this proposed rebuild.

## Direction

Northway should feel like a carefully edited consultancy: decisive typography, useful detail, open white space and a few substantial grey objects. The pine Briefing and closing band frame the reading chapters.

Displace is the primary craft reference. Munro supplies disciplined comparisons, V-A-C supplies unboxed entries and spacing, Domaine informs quotation and enquiry treatments, and Extract and Walden contribute specific editorial details. Their branding and signature effects stay out.

The result needs to feel finished with no photography. The named quote Excerpt, editorial cases, rate sheet and uneven process carry that responsibility.

### Non-negotiable locks

- White `#FFFFFF` canvas, elevated `#E8E8E4` surfaces and no shadows.
- Pine `#1F3A2E` bands with grain.
- Bricolage Grotesque display and Hanken Grotesk body. No serif.
- No section, step or index numbering. No monogram.
- No two consecutive sections share a heading treatment or layout.
- At least two Home sections are not grids.
- At most three primary Home CTAs, at the hero, Grow and Pine Band.
- Uppercase eyebrow only in the hero. The separate `TYPICAL` recommendation-label interpretation is recorded below for review.
- Closing heading: **Ready when you are.**
- Each quote appears once per page.
- No em dashes in copy.

## Current build audit

The checkout is already partway through v3. Home has a white canvas, grey Excerpt, proof sentence, unnumbered cases, an expanded Strategy stage and the correct closing heading. The main problem is that these changes are scoped to Home while inner pages retain the earlier system.

### Foundations and behaviour to preserve

- Next.js App Router, TypeScript, Tailwind and the token-generation pipeline.
- Existing routes, unknown-slug handling and `/work` 301 redirects.
- Settings and typed Markdown collections, collection ordering and publication controls.
- Supplied cases, packages, prices, timelines, FAQs and named quote.
- Result to named quote to heading hero fallback.
- `showPrices`, service preselection and omit-when-empty behaviour.
- Four-field enquiry validation, retained values after failure, honeypot, pending/success/error states and production endpoint forwarding.
- Local fonts and licences, static grain, skip link, mobile-dialog focus handling and instant FAQ expansion.

These are source findings, not claims that the current build has passed a new test run.

### Page and section audit

| Page / section | Keep | Rebuild or correct |
| --- | --- | --- |
| Global foundations | Semantic token architecture and font assets | Replace the old global grey-canvas/white-card/shadow values. Remove the separate Home surface system. |
| Navigation | Sitemap, current-page indication, mobile dialog | Consistent surfaces and quiet CTA treatment. Resolve the Home CTA-cap conflict below. |
| Home Briefing | Result-first pine band, single ask, price cluster, quote | Refine wrapping, spacing, first-viewport fit and the transition through the peeking Excerpt. |
| Home cases | Featured Kindred and quieter entries | Strengthen editorial hierarchy and deliberate width differences. Preserve the companion challenge copy. |
| Home Insights | Featured article, quieter posts, end link | Give its opening and composition a clearer distinction from Cases. |
| Home pricing | One sheet, Grow primary, package-specific secondary links | Refine comparison alignment, mobile stacking and restrained separators. |
| Home process | Named vertical path and expanded Strategy | Refine uneven widths and spine termination. Keep Strategy copy together. |
| Home studio / FAQ / close | Audience statement, accordion behaviour, approved close | Differentiate their heading treatments and section spacing. |
| Case studies index | Records, links and honest empty state | Replace numbered hairline rows and the giant initial. |
| Case pages | Outcome, Challenge, Approach, Results and optional media order | Replace repeated body-block composition with an editorial reading hierarchy, quieter metadata and a considered exit. |
| Services | Package data, comparison logic, price toggle and FAQ | Remove duplicate pricing heading, numbered process, excessive waymarks, repeated CTA labels and pricing testimonial. |
| About | Approach, principles and team records | Remove initial-based portraits and uppercase roles. Recompose as text, with distinct approach, principles and people sections. |
| Insights index / posts | Titles, dates, excerpts, publication logic and prose | Replace the uniform ruled index and generic inner-page wrapper with an editorial index and measured article layout. |
| Contact | Form and endpoint logic | Grey Enquiry Sheet, white controls, reply sentence, direct email and refined states. Remove unnecessary heading decoration. |
| Legal / 404 | Routes, supplied notices and recovery links | Apply the shared white canvas, reading measure and quiet chrome. |
| `/components` | Useful component documentation | Update specimens so retired monograms, chips and shadow treatments cannot be reintroduced accidentally. |

The clearest legacy violations remain in `src/components/molecules/CaseCard.tsx`, `src/components/organisms/Process.tsx` and `src/components/organisms/CtaBand.tsx`. The global values in `design/tokens/tokens.json` still contain the earlier surface model and card shadows.

## Planned design tokens

These follow the locked scale, rather than averaging the references.

### Type

| Type role | Mobile | Desktop / wide | Treatment |
| --- | --- | --- | --- |
| Briefing result | 36-40px | 56 / 64px | Bricolage 600, leading 1.12 to 1.06, tracking -0.03em |
| Short display / closing | 40px | 68 / 80px | Bricolage 500, leading 1.10 to 1.04 |
| Major heading / case Outcome | 32px | 48 / 52px | Bricolage 500, tracking -0.02em |
| Section heading | 24px | 32px | Hanken 500, leading 1.25 to 1.20 |
| Subheading | 20px | 24px | Hanken or Bricolage 500, according to its role |
| Excerpt quote | 28px | 32px | Bricolage 500, leading 1.20 |
| Lead | 18px | 20px | Hanken 400, leading 1.45 |
| Body | 18px | 18px | Hanken 400, leading 1.55, maximum 66ch |
| Caption | 14px | 14px | Hanken 400, sentence case |
| Hero attribution | 12px | 13px | Bricolage 500, uppercase, tracking 0.10em |
| Button / from-price | 16px | 16px | Hanken 500 |

Heading appearance can vary through these existing roles, alignment and measure while retaining correct semantic heading levels.

### Spacing and layout

- Spacing ladder: 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 104, 120, 128, 144, 176 and 192px, assigned named roles.
- Section spacing: mobile 64 / 96 / 120; tablet 72 / 104 / 144; desktop 80 / 120 / 176.
- Hero top: 96 / 128 / 192, with a documented compact-height treatment.
- Content maximum: 1280px.
- Page gutters: 16 / 24 / 24px.
- Twelve-column alignment from 768px. Reading and form measures remain narrower.

### Colour roles

| Role | Value |
| --- | --- |
| Canvas | `#FFFFFF` |
| Elevated objects | `#E8E8E4` |
| Elevated hover / pressed | `#E3E3DF` / `#DEDED9` |
| Ink / muted | `#18221D` / `#4C5550` |
| Bands and primary actions | `#1F3A2E` |
| Pine hover / pressed | `#142F22` / `#0E1F15` |
| Inverse text / supporting text | `#F7F7F4` / `#D5D8D4` |
| Decorative rule | `#C8C8C3` |
| Functional input border | `#636B66` |

### Surfaces, radius and motion

- Grey only where an object earns a panel: Excerpt, Price Tablet, Strategy and Enquiry Sheet. Quiet content sits directly on white.
- Radius: 0 for bands and standalone media; 8px inputs; 12px panels; 999px primary buttons only.
- Shadows: none, including hover states.
- Grain: static 6% on pine only, with solid-pine reduced-data and print fallbacks.
- Motion: 120ms colour/fill feedback, 200ms small state transitions, standard easing `cubic-bezier(0.2, 0.8, 0.2, 1)`.
- No entrance choreography planned. Reduced motion resolves to 0ms. Accordions and mobile navigation open instantly.

## Home layout plan

Reference paths in this section are relative to `v2/design/refero/`. The mapping follows `SYNTHESIS.md`.

| Section | Planned layout and measurements | Reference and AI tells avoided |
| --- | --- | --- |
| Briefing | Centred pine band. Result, narrower lede, one proof sentence, one white primary and linked from-price. Excerpt follows below the ask and overlaps white by 48px. | Displace display recipe; Munro `00-hero-landscape`; Walden opening recipe. Avoid twin buttons, proof chips, slogan stacks and photo dependence. |
| Excerpt | Grey quotation panel, 32-40px padding, 32px quote, quieter named attribution. No decorative quotation graphic. | Displace `05-quote-excerpt`; Domaine ruled-testimonial recipe. Avoid monogram, repeated result, shadow and anonymous studio note. |
| Case Ledger | Compact Hanken section heading; large Kindred client name and companion challenge; quieter offset entries with roughly 40px gaps. End link below the work. | Domaine `00-projects-statement`; V-A-C `00-editorial-opening`; Displace gallery recipe. Avoid numbered database rows, identical cards and a second quotation panel. |
| Insights | Smaller editorial opening with dek; one substantial article followed by quieter text entries in a narrower, offset reading field. | V-A-C intervals and Extract `03-work-and-editorial-bridge`. Avoid a second Case Ledger, date-column index and tinted news slab. |
| Price Tablet | Larger Bricolage statement above one grey sheet. Comparable scope, weeks and prices; Grow has the rule and sole primary. Tax note closes the information. | Munro `01-orientation-ruled-facts` and `02-ledger-rows`; Displace detailed-offer and Extract capabilities recipes. Avoid three SaaS cards, oversized price numerals and repeated enquiry labels. |
| Process Path | Hanken heading with supporting sentence. Left-weighted named path; short Intro and Plan, wider Strategy panel, short Handover. One spine ends with the content. | Munro principles, Walden reassurance and V-A-C chronology recipes. Avoid numbers, equal columns, repeated stage marks and a separate Strategy band. |
| Studio short | A Bricolage audience statement on white, left aligned at a narrower measure, followed by its text link. No separate decorative heading. | Extract editorial bridge and Munro's open-field discipline. Avoid manifesto cards and thin copy padded into a large empty slab. |
| FAQ | Small sentence-case heading attached to a narrow disclosure column. Answers closed by default; continuation link after the questions. | Displace question-row recipe. Avoid another heading/link split, boxed questions and excessive ruling. |
| Pine Band | Centred short-display heading: **Ready when you are.** Reply-time sentence and one white pill. | Displace invitation/closing recipes; Walden's closing breathing room. Avoid floating waymark, ticker, chip reassurance and extra ask. |
| Footer | Continuous pine, quieter asymmetric groups, email, navigation, legal and one disclosure. | Munro `04-closing-utility` / `05-legal-band`; Walden `06-footer-utility`; V-A-C footer. Avoid a second promotional banner or primary button. |

Briefing, Studio short, FAQ and the closing band provide clear non-grid sections. Adjacent sections will differ in both heading treatment and composition. The resulting sequence also needs checking when optional sections disappear.

## Other-page layout plan

| Page / sequence | Layout and reference | AI tells avoided |
| --- | --- | --- |
| Case studies: introduction, featured case, quieter cases, close | Domaine's statement/work relationship; V-A-C's unboxed catalogue spacing, translated to 64-80px intervals. Grey honest empty when needed. | Monograms, numbered rows, equal empty cards and fake media. |
| Case: Outcome, Challenge, Approach, Results, optional media, exit | Outcome at Bricolage H1 scale; Challenge in a narrow reading column; Approach as labelled editorial material; Results and one attributed quote. Displace `03-case-opening`, `04-case-gallery` and Extract's context recipe inform hierarchy. | Repeated section anatomy, image-first dependency, statistic counters and repeated outcome copy. |
| Services: introduction, rate sheet, comparison, process, exclusions, FAQ, close | One pricing introduction, Munro comparison discipline, Displace operational detail, uneven shared Process Path, compact exclusions and narrow FAQ. | Duplicate headings, plan-card row, numbered timeline and identical split sections. |
| About: introduction, approach, principles, people, close | Munro's substance beside open space; Extract's capabilities ledger used narrowly for principles. Team names, roles and bios remain unboxed. | Initial portraits, invented photography, feature-icon grids and uppercase kickers. |
| Insights: introduction, featured essay, quieter entries, close | V-A-C's natural title lengths and spacing, with Extract's editorial pause. | Uniform ruled rows, fixed-height cards and truncated titles. |
| Post: title/date, prose, quiet continuation, close | White reading canvas and 66ch measure, using Displace's editorial hierarchy. | Oversized empty hero, decorative pull quote and repeated primary asks. |
| Contact: introduction, reply expectation, Enquiry Sheet, email | Domaine's approximately 640px form measure and Displace's practical reply sentence. Four fields remain single column, with white controls on grey. | Paired cramped fields, newsletter treatment, placeholder-only labels and a second closing ask. |
| Legal / 404 | Narrow white reading layouts and restrained recovery links, using the quiet utility principles from Walden and V-A-C. | Promotional slabs, decorative cards and excess whitespace around minimal content. |

## Conflicts, uncertainties and proposed resolutions

Amos's locks remain authoritative. The following records disagreements inside the kit and between references and Northway. Proposed interpretations remain subject to review; they are not new approved decisions.

| Conflict | Proposed resolution |
| --- | --- |
| References use 400-weight display and several use smaller body text. | Keep Bricolage 600 for the result, 500 elsewhere and Hanken 18/1.55. |
| References use rectangular buttons, smaller targets and different panel corners. | Keep the locked primary pill, 44/52px targets and 8/12px radii. |
| References introduce oat, mint, lime, black closings, gradients or additional colour bands. | Keep white, elevated grey and pine. Translate spacing and hierarchy only. |
| Several references open without an action or rely on photographic scenery. | Keep the result-first pine Briefing, one primary and visible from-price. |
| Munro and Walden process recipes contain numbers and equal columns. | Keep named stages and unequal widths. No numbering. |
| Displace and Extract use floating navigation, launchers, shadows or moving typography. | Keep solid 68px navigation, no launcher, no shadow and no ticker. |
| References repeat heading-left/link-right openings. | Use that pattern at most once. The proposed Home does not need it. |
| `SYNTHESIS.md` suggests an Excerpt on featured Kindred, while conversion rules explicitly reject a second Home Excerpt. | Keep the quote only in the hero peek. Featured Kindred uses client and challenge copy. |
| The synthesis's case-page paragraph forbids the Home quote there, while conversion rules explicitly allow it once on each separate page. | Follow the locked once-per-page rule. Amira may appear once in Kindred Results and once on Home. |
| The synthesis borrows paired Domaine fields; conversion rules require a single-column form. | Keep four single-column fields. Borrow measure and spacing only. |
| Some documents call inputs elevated grey; the detailed form recipe specifies white inputs on a grey sheet. | Use white controls on the grey Enquiry Sheet. |
| The brief says eyebrow only in the hero, while synthesis and conversion allow `TYPICAL` on Grow. | Retain `TYPICAL` as an inline recommendation label beside Grow, never as a section eyebrow. |
| Conversion rules require a nav pill after the hero, while the literal Home cap permits only hero, Grow and Pine Band primaries. | Conservative proposal: a quiet text CTA throughout Home navigation, leaving exactly three primary placements. This is the main interpretation to confirm. |
| Older About instructions request team initials, conflicting with the global no-monogram lock. | Show names, roles and bios without initial graphics. |
| Synthesis mentions roughly 90-105px closing padding, while the named section ladder is 80/120/176. | Translate that reference to existing spacing tokens. Do not introduce arbitrary measured padding. |
| Older documents suggest replacing Ready when you are. | Ignore that suggestion. Preserve the exact locked heading. |
| References and older briefs favour uniform section headings; Amos requires stronger variation. | Apply the stricter rule: adjacent heading treatments and layouts both differ. |
| A 192px hero top, long result and first-viewport price can compete on shorter screens. | Retain the documented compact-height treatment and verify actual wrapping and visibility. |
| Refero guides leave many mobile details unknown; no keyframe shows the exact unnumbered four-stage path. | Treat mobile reflow and the path as Northway adaptations, not measured copies. Verify them at all required widths. |

### Existing implementation gaps and scope questions

- `calendarUrl` exists but currently does not reveal a calendar slot.
- Case/post previous-next navigation and the older spec's case filters are absent.
- `heroImage` is not consumed as its own setting; the peek uses the selected project.
- Hero attribution combines settings with metadata from the selected project, which could mismatch after editing.
- Home studio copy is partly duplicated in `home.json`, so changing `studioBody` does not update the displayed statement.
- The Services payment FAQ still exposes the builder instruction "Replace before launch."
- Several empty-state wrappers and the quote-only case state need closer verification.
- Legal pages are minimal replacement notices. The visual pass will not turn them into finished legal content.
- Existing tests still expect retired `.folio`, `.case-card` and numbered-process structures. Their earlier completion record cannot certify this checkout.

Proposed scope: include small corrections needed to honour existing content contracts. Explicitly scope larger additions such as filters and calendar integration before implementation.

### Points for the UX lead to review

- Confirm the Home navigation interpretation against the literal three-primary cap.
- Confirm that `TYPICAL` is an inline recommendation label, with no eyebrow treatment outside the hero.
- Reconcile the synthesis with conversion rules on the second Home Excerpt and quote reuse across separate pages.
- Confirm the single-column enquiry form and white-input/grey-sheet treatment.
- Review adjacent section headings and layouts, including the sequence when optional content is removed.
- Separate required content-contract corrections from larger missing functionality.

## Build order and estimate

Implementation starts only after Amos approves. The required new branch is `visual-v3`.

| Order | Work | Rough effort |
| --- | --- | ---: |
| Baseline | Preserve current work, establish the build baseline, create `visual-v3` after approval and carry in the reference kit | 2-3 hours |
| Foundations | Unify global tokens, regenerate theme, retire Home-only surface overrides and update atoms/chrome | 4-6 hours |
| Home | Rebuild section composition, typography, responsive rhythm and CTA hierarchy | 8-10 hours |
| Cases and Services | Index, case reading layout, rate sheet, comparison and shared Process Path | 6-8 hours |
| Remaining pages | About, Insights, post, Contact, legal, 404 and component specimens | 4-6 hours |
| Verification and critique | Functional regression, accessibility, full-page captures, scored gate, fixes and recaptures | 6-9 hours |
| Handoff | Evidence, filled checklist, reference notes and PR | 1-2 hours |

**Approximately 31-44 focused hours, or 4-6 working days**, allowing for visual correction passes. Larger missing functionality would affect that estimate.

## Required verification and handoff

Before handoff:

- Run lint, TypeScript, production build and relevant behaviour checks.
- Recheck routes, redirects, unknown slugs, content fallbacks, empty collections, price-off behaviour, service preselection and enquiry error recovery.
- Check keyboard navigation, focus, contrast, reduced motion and responsive wrapping at 390, 768, 1024 and 1440px, with 320px overflow protection.
- Run the quality bar against full-page **1440px and 390px** screenshots. Include Home, Case studies, a case, Services, About, Insights, a post and Contact, plus key interaction states.
- Score the quality-bar checklist. Any blocker or two craft misses triggers fixes and recapture.
- If a design reviewer is available, obtain screenshot review before handoff to Amos.

The final handoff will include `visual-v3`, screenshots, the filled checklist, reference-to-section notes and an open pull request. The PR will remain unmerged.

**Current stopping point: report saved for review. The build remains on hold pending Amos's approval.**
