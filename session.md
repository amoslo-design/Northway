# Northway session handoff

13 November 2026, Europe/Stockholm.

## Current status

**The current visual design is not approved.** Amos reviewed the preview and said it still looks too similar to the previous design and does not meet the quality he expects from a $149 template. The next priority is visual design and a convincing conversion journey. Further technical expansion is deferred while that design is resolved.

The earlier implementation handoff overstated visual completion. Technical checks passed, but they do not establish design quality or commercial readiness. The checked quality-bar record is evidence of that implementation pass, not approval from Amos, the UX lead or the designer of the rendered result.

No further visual or application-code changes were made after that feedback. This commit records the handoff and corrects the review status.

## Branch and saved work

- The existing uncommitted work was saved as `71d6afc` on `add-northway-context` and pushed before creating the implementation branch.
- `visual-v3` was created from that saved work.
- The Refero kit was merged from `origin/northway-v3-refero-kit` in `b6ac4d6`.
- The current implementation is `48cbdaa`, already pushed to `origin/visual-v3`.
- [PR #4](https://github.com/amoslo-design/Northway/pull/4) contains the implementation and review evidence. It remains open and unmerged. [PR #3](https://github.com/amoslo-design/Northway/pull/3) is separate and unchanged.
- [Exact implementation comparison, 71d6afc to 48cbdaa](https://github.com/amoslo-design/Northway/compare/71d6afc...48cbdaa).

## What was actually changed

This comparison is against the code saved immediately before the implementation, not against an older screenshot. Several of the v3 ideas were already present in that saved Home.

| Area | Actual change in this pass |
| --- | --- |
| Hero | Retained the centred pine composition, headline and lede. Changed spacing, height and CTA labels, corrected attribution matching and tightened Excerpt fallback behaviour. This was an adjustment, not a new composition. |
| Case Ledger | Added the large statement beside the work. Moved featured and quiet entries into the right-hand column. |
| Insights | Changed the arrangement to a featured article beside two quieter entries. Used the single heading-left/link-right opening here. |
| Price Tablet | Added the dek, adjusted proportions and made Grow first on mobile. Kept the existing rate-sheet concept. |
| Process | Removed the visible title block and reduced the Strategy lead. The vertical path and Strategy panel already existed on Home. |
| Studio and FAQ | Adjusted type and alignment; added the FAQ top rule. Kept the basic statement and accordion concepts. |
| Closing band | Changed the close from centred to left aligned, applied the larger short-display role and changed its CTA label. |
| Global system | Applied white canvas, grey elevated objects and no shadows across the inner pages instead of relying on Home-only overrides. Added the complete type-role table and generated tokens. |
| Indexes and case pages | Removed remaining case numbers and monograms; made indexes featured-plus-quiet entries; rebuilt the case narrative layout and added next-case text navigation. Removed Amira's quote from the case page so it appears only in the Home Excerpt. |
| Services | Removed the repeated title and quote, used the rate sheet, made comparison an unboxed capability ledger and restacked it for mobile. Used a text closing invitation with Grow as the page's primary. |
| About and Contact | Removed team initials and repeated uppercase metadata. Applied the text-led team layout and grey Enquiry Sheet with white controls. |
| Navigation and conversion | Made the nav CTA permanently quiet, retained the three Home primary actions, preserved service preselection and the existing enquiry logic. |

The pine colour, Bricolage/Hanken pairing, centred hero, Home section order and much of the Home component structure were already present. They should not be credited as new design achievements of this pass.

## Where the design fell short

The references were received and examined, but their translation was too conservative. The implementation borrowed surface rules, spacing and some layout arrangements while retaining too much of the previous composition.

- Displace's quote has substantial editorial presence. The current Excerpt still reads as a small card beneath a familiar hero.
- Domaine's statement controls its composition. The Home case statement borrows the split but does not achieve comparable strength of scale and hierarchy.
- VAC and Munro informed quiet entries and ledgers, but the overall page still reads as a sequence of template sections.
- Added whitespace does not consistently serve a strong focal point. Some areas feel sparse rather than deliberately composed.
- The technical and rule-based gate was given too much weight when judging whether the design was ready to present.

These are the design problems to resolve. More tests, new dependencies or additional documentation will not resolve them.

## Reference material for the review

Keep Displace as the primary reference. Use the specific secondary traits recorded in the approved synthesis rather than averaging the sites together.

| Reference | Material and intended contribution |
| --- | --- |
| Displace | [Style guide](v2/design/refero/displace-style.md), [quote frame](v2/design/refero/displace/05-quote-excerpt.jpg), [closing frame](v2/design/refero/displace/07-closing-form-footer.jpg). Editorial scale, proof, concentrated bands and a substantial close. |
| Domaine | [Style guide](v2/design/refero/domaine-style.md), [projects statement](v2/design/refero/domaine/00-projects-statement.jpg). Statement scale and relationships between the statement and featured work. |
| VAC | [Style guide](v2/design/refero/vac-style.md). Quiet entries, title lengths, intervals and continuation links. |
| Munro | [Style guide](v2/design/refero/munro-partners-style.md). Reading-size facts, ledgers and useful open field. |
| Extract and Walden | [Extract guide](v2/design/refero/extract-style.md), [Walden guide](v2/design/refero/walden-style.md). Capability structure, reply-time details, unboxed text and closing rhythm. |

Use the [Refero synthesis](v2/design/refero/SYNTHESIS.md) for the complete map and measurements. Source identities, photographs, palettes and fonts are not assets for Northway to copy.

## Review evidence

The existing captures document the current implementation. They are not a new design proposal produced after Amos's feedback.

| Page | Desktop, 1440px | Mobile, 390px |
| --- | --- | --- |
| Home | [Full page](v2/review/visual-v3/screenshots/home-1440.png) | [Full page](v2/review/visual-v3/screenshots/home-390.png) |
| Kindred | [Full page](v2/review/visual-v3/screenshots/case-1440.png) | [Full page](v2/review/visual-v3/screenshots/case-390.png) |
| Services | [Full page](v2/review/visual-v3/screenshots/services-1440.png) | [Full page](v2/review/visual-v3/screenshots/services-390.png) |
| Contact | [Full page](v2/review/visual-v3/screenshots/contact-1440.png) | [Full page](v2/review/visual-v3/screenshots/contact-390.png) |

The [implementation review record](v2/review/visual-v3/QUALITY-GATE.md) also links About, indexes, an essay and interaction states. The [older coded v2 screenshot](v2/codex-v2-screenshot.png) is useful historical context, but predates the immediate saved baseline and must not be used to exaggerate the changes in this pass.

## Design and conversion priorities for the next pass

Start with one complete Home design at 1440 and 390. Review it alongside both the immediate baseline and the selected reference frames before carrying the treatment through the inner pages.

The visual work should establish stronger composition, typography, proportion, density and transitions across the whole page. The result should show an immediately visible improvement while remaining recognisably Northway.

Conversion remains part of that design work:

- Make it immediately clear who Northway helps, what work it does and what the visitor can do next.
- Give the featured case and honest proof enough visual presence to support the offer.
- Make package scope, price, timeline and fit easy to compare. Keep Grow's recommendation understandable through its label and rule.
- Make the primary enquiry action easy to find without adding competing filled buttons.
- Keep the path from case or package to the enquiry form direct, with service preselection preserved.
- Compose mobile deliberately, preserving reading hierarchy, the first-screen ask and usable controls.

There is no measured conversion lift to claim. The review should judge clarity and the intended enquiry journey; outcome claims would require real visitor evidence later.

## Questions for the UX lead and designer

- Which specific reference compositions should drive the next Home pass, and where is the current translation visibly too weak?
- How should headline scale, line length, column proportions and content density change within the existing locks?
- Where should the page create a clear focal point, and where should it provide a deliberate pause?
- Does the result-led hero explain the offer clearly enough, or does its supporting hierarchy need revision?
- Do the case proof and package presentation create enough confidence before the enquiry ask?
- What concrete visual differences must be visible in the next desktop and mobile comparison for the design to proceed to the other pages?

Please return a specific visual punch list, ideally annotated against the screenshots and reference frames, rather than another general checklist. No approval of the current rendered design is assumed.

## Locks remain in force

White #FFFFFF canvas. Elevated #E8E8E4 objects. No shadows. Pine #1F3A2E bands with grain. Bricolage Grotesque display and Hanken Grotesk body, no serif. No numbering or monograms. No repeated adjacent heading/layout treatment. At least two Home sections are not grids. At most three Home primary CTAs. Home nav stays quiet text without an underline. Hero-only uppercase attribution, with TYPICAL once on Grow as the exception. Closing heading exactly "Ready when you are." No em dashes in copy.

Keep the later UX-approved CTA labels: "Tell us about your brief" in the Briefing, "Start a project" on Grow and "Let's talk" in the Pine Band. Keep the existing content model, routes, /work 301 redirects and enquiry behaviour. The [build contract](v2/VISUAL-V3-BUILD-CONTRACT.md) records the detailed approved constraints and current implementation choices. The next visual pass must distinguish those hard locks from compositional choices that can be improved.

## Technical work already completed

Recorded at implementation commit `48cbdaa`: typecheck, lint and production build passed; 3 content tests and 19 browser tests passed; 42 required contrast pairs passed; eight Lighthouse accessibility runs scored 100 with no failed automated audits. Production form states were exercised using a loopback-only receiver, with no external messages sent.

Those results are retained as engineering evidence. They do not override the current design feedback. This documentation-only handoff does not rerun the application tests or claim a new visual iteration. The next work is design-first; the technical checks follow once the revised visual direction has been reviewed.
