# Brief for Codex: rebuild the Northway visual layer (v3)

13 November 2026, Europe/Stockholm.

The v1 and v2 coded builds looked generated (see `codex-v1-screenshot.png` and `codex-v2-screenshot.png`). v3 decisions and a Refero style kit are now in this folder. Rebuild the **visual layer** so the site looks like a crafted counsel studio, and is sellable.

## What happens to the work already built

Do **not** throw the existing project away, and do **not** overwrite `main` (or the current default branch) directly.

1. Create a **new branch** from the current code, named `visual-v3`.
2. Keep the existing stack, routes, content model, case studies, services, FAQs, enquiry form logic, price-toggle behaviour and demo writing **where they already match the docs**.
3. Redo tokens, theme, layout, section components and styling on that branch, against this brief.
4. The v2 build stays in git history and on the previous branch. Nothing is deleted. If a visual change is wrong, it can be compared or reverted.

If a route, field or piece of copy in the current code disagrees with `DECISIONS-V2.md` or `docs/CONVERSION.md`, the docs win. Do not invent new pages, new services or new quotes.

## Reading order

Read in this order. Later files override earlier ones only where they say so. `DECISIONS-V2.md` still wins on every locked token and v3 decision.

1. **This file** (`REBUILD-BRIEF-V3.md`): the job, the branch, the gate.
2. `DECISIONS-V2.md`: what Amos approved, including the eight v3 decisions.
3. `design/refero/SYNTHESIS.md`: the reference lock, the type and spacing ladder, and the section-by-section map to Refero images and measurements. Build against this lock.
4. `design/WEBSITE-QUALITY-BAR.md`: the quality skill. Follow every step, including the AI-tells list and the self-critique gate.
5. `design/PRINCIPLES.md`: principles and hard rules.
6. `design/BRAND-V2.md`: palette, type scale, radius, signature components (Briefing, Case Ledger, Price Tablet, Enquiry Sheet, Process Path, Pine Band).
7. `docs/CONVERSION.md`: testable MUST / MUST NOT conversion rules.
8. `design/CRITIQUE-V2.md` and `docs/UX-CRITIQUE-V2.md`: why v2 still looked generated, and the ranked v3 fixes. These override `CRITIQUE.md` and `UX-CRITIQUE.md` where they conflict.
9. `design/MOTION.md`: motion outline. Implement only what it marks as allowed, last, and respect reduced motion.
10. `design/refero/README.md` and the full style guides in `design/refero/*-style.md`, plus the keyframes in `design/refero/<site>/`, when you need a measurement or a picture of a component in use. `design/REFERENCES.md` is a shorter earlier pass; if it disagrees with `SYNTHESIS.md`, SYNTHESIS wins.

## What to build

Signature components, on the locked tokens (white `#FFFFFF`, elevated `#E8E8E4`, no shadows, pine `#1F3A2E` with grain, Bricolage Grotesque display, Hanken Grotesk body):

- **The Briefing:** centred pine band, named result first, one white pill, from-price, proof as a sentence (no chips), peeking grey Excerpt with a named quote (no monogram), overlap 40-64px.
- **The Case Ledger:** one editorial featured case plus quieter text entries, no numbers, "See all case studies" at the end.
- **The Price Tablet:** one grey sheet, Grow marked "TYPICAL" with a pine rule, one primary on Grow only.
- **The Process Path:** Intro, Plan, Strategy, Handover; names only; uneven widths; one spine; Strategy in a grey panel. No numerals.
- **The Enquiry Sheet:** grey panel, reply-time above four fields, "Send the brief."
- **The Pine Band:** "Ready when you are.", one white pill, continuous with a quieter pine footer and the single demo disclosure.

Home section order, CTA cap (three primaries: hero, Grow, Pine Band), and "no two consecutive sections share a head or a layout" are in DECISIONS-V2 and BRAND-V2. At least two Home sections are not grids. Uppercase eyebrow only in the hero.

Translate Refero craft into these tokens. Do not copy anyone's palette, typeface, wordmark, photography or copy. The primary visual direction is Displace; secondary borrows are listed in the SYNTHESIS reference lock. If a reference conflicts with a lock, the lock wins (see SYNTHESIS, "Conflicts and questions"). Do not resolve those questions by changing a token.

## Quality gate (required before you hand back)

Follow Step 10 of `design/WEBSITE-QUALITY-BAR.md`:

1. Capture **full-page** screenshots at **desktop 1440px** wide and **mobile 390px** wide, of Home at least, and of Case study, Services or price, and Contact if you touched them. The full page, not a hero crop.
2. Score the checklist in that file. Any **block** item marked no, or two or more craft misses, must be fixed in the build.
3. Recapture. Do not present a page that still has numbered steps, identical card grids, a monogram, outline chips, or a repeated Kindred sentence.
4. Hand back the branch, the screenshots, the filled checklist, and a short note of which Refero images you built against and what you refused to copy.

If a design reviewer is available, they should see the screenshots before Amos does.

## Done when

- Visual tokens match v3. The page is a white sheet with grey elevated objects and pine bands, no drop shadows.
- Every v3 decision in `DECISIONS-V2.md` is visible in the build.
- CONVERSION.md MUST / MUST NOT rules still hold.
- The quality-bar gate has been run and passed, with 1440 and 390 full-page shots in the handoff.
- Existing routes, content and form logic still work.
- No em dashes in any new or rewritten copy. No banned buzzwords. Studio "we" voice.
