# Northway — conversion principles and hard rules

**Proposal only.** 13 November 2026, Europe/Stockholm. For Amos to review before anything goes to GitHub. Does not change the repo, the Pages, or Designer’s files.

Visual and brand treatment defers to Designer: [`/workspace/northway-v2/design/`](/workspace/northway-v2/design/). Read that folder first. Layout and rhythm critiques of Codex v2 are in [`UX-CRITIQUE-V2.md`](/workspace/northway-v2/docs/UX-CRITIQUE-V2.md).

---

## Changelog (13 November 2026, Europe/Stockholm — v2 critique pass)

Codex’s v2 build followed this file and still looked “super AI generated with the numbering, the layout etc.” (Amos). These revisions keep every conversion intent (result-first hero, published prices, one primary to `/contact`, text-first cases, omit-when-empty, four-field form, WCAG 2.2 AA) and rewrite the rules that produced the generic result. They align with Designer’s v3 bans in [`NOTES-FOR-UX.md`](/workspace/northway-v2/design/NOTES-FOR-UX.md) (11:02 Europe/Stockholm): no step numbers, no index numbering, limited factual eyebrows, varied section heads, no monogram letter standing in for imagery, white canvas with grey elevated surfaces. [`PRINCIPLES.md`](/workspace/northway-v2/design/PRINCIPLES.md), [`CRITIQUE-V2.md`](/workspace/northway-v2/design/CRITIQUE-V2.md) and a revised [`BRAND-V2.md`](/workspace/northway-v2/design/BRAND-V2.md) landed at 11:06–11:08 Europe/Stockholm, during this pass. This file follows them. Structures that were first proposed here (the uneven Process Path, the editorial Case Ledger, the Excerpt, the section-head rule) now match Designer’s published bans, and are no longer marked pending.

- **New: [Rhythm and anti-template](#rhythm-and-anti-template).** Testable checks: no two consecutive sections share a head anatomy or a layout; numbering only where order is meaningful, and then as names, never as numerals; at most three primary-styled CTAs on Home, at named placements; at least two Home layouts that are not a grid; no monogram; limited eyebrows; varied measure.
- **Process Path.** Was “four steps… not four equal columns.” Now four **named stages** (Intro, Plan, Strategy, Handover), each with an outcome. **MUST NOT** step numbers, 01–04, or four equal columns. Uneven path, Strategy as the expanded stage, as in PRINCIPLES and NOTES-FOR-UX. Intent: a path from the first conversation to a plan the team can use, all visible under reduced motion.
- **Case Ledger.** Was “rows” plus a Folio. Now an **editorial** featured case and quieter text entries, not hairline index rows. **MUST NOT** index numbers. “See all” at the end of the list. Intent: complete without images, specific results, omit when empty. As in PRINCIPLES and NOTES-FOR-UX.
- **Folio monogram withdrawn.** The no-image treatment is the **Excerpt** (Designer’s name): a grey elevated panel with a named quote or a result, never a letter standing in for a picture. Kindred still ships with no photograph. The peeking Briefing object is that Excerpt, and **MUST NOT** repeat the display result verbatim.
- **Proof chips withdrawn.** Story figures stay as **one muted sentence** under the Briefing lede, not outline pills.
- **Eyebrows limited.** Factual uppercase attribution at most once, in the Briefing only. Case meta is a caption sentence. **TYPICAL** on Grow stays. Marketing eyebrows still forbidden.
- **CTAs.** “One primary per viewport” stays, and is no longer readable as “an enquire in every section.” Home allows three primary-styled placements only: Briefing, Grow, Pine Band. Other Price Tablet rows must not repeat the exact label “Start a project.”
- **Colour.** Canvas is **white** (`#FFFFFF`). Elevated surfaces are **grey `#E8E8E4`** (hover `#E3E3DF`). Pine bands (`#1F3A2E`) are unchanged; previously computed pine / cream / white contrast still holds. CTA and focus-ring contrast against `#E8E8E4` was re-checked independently in this file and agrees with Designer’s coloraide table (pine on elevated **10.04:1**). White cards with a soft shadow on a grey page are withdrawn.
- **Sample badges and Bricolage.** Both are now decided in [`DECISIONS-V2.md`](/workspace/northway-v2/DECISIONS-V2.md): one footer disclosure, no per-item badges; **Bricolage Grotesque** for display, Mona Sans not used. The “for Amos to confirm” sections below are closed to match. Designer has also closed these on their side (`CRITIQUE-V2.md` coordination).
- **One quote per page.** Amira Mendez’s “They made the next step obvious.” lives **once on Home, on the peeking Excerpt**. It is not a pull quote under the Price Tablet and not on the featured case. **MUST NOT** a testimonial or named quote appearing twice on the same page. (Settled with Designer; this was the one clash they recorded.)
- **Contrast against `#E8E8E4`, independently verified**, agreeing with Designer: muted `#4C5550` on elevated **6.28:1**; input border `#636B66` on elevated **4.47:1** (floor 3:1, pass); pine focus ring `#1F3A2E` on elevated **10.04:1**. Elevated grey is this hex; it is not pending.

---

## Summary

A first-time visitor must, within about ten seconds, know who Northway is for, the outcome they can expect, a published price if prices are on, and what to do next.

There is one primary action: **Start a project**, always to `/contact`. Every other path is a text link or the work itself. On Home, that primary is styled as a button in **three named placements only** (Briefing, Grow, Pine Band).

Proof is specific, named and believable — or the block is omitted. Never fake it, never a logo wall, never a “Sample” label on the proof.

Demo content is a fully written fictional studio, with **one** honest site-level disclosure. This replaces per-item Sample badges. Decided in `DECISIONS-V2.md` (Amos, 13 November 2026).

The page must not read as a generated template: no step or index numbers, no monogram as imagery, no repeated section-head anatomy, no uniform grid rhythm. These are conversion and content rules, not a visual system. Type, colour, tokens and motion stay with Designer.

---

## Designer first

As of 13 November 2026, 11:08 Europe/Stockholm, read these first. `PRINCIPLES.md`, `CRITIQUE-V2.md` and a revised `BRAND-V2.md` landed at 11:06–11:08, after the first draft of this pass, and this file is aligned to them. There is no conversion/visual fight.

- [`/workspace/northway-v2/design/NOTES-FOR-UX.md`](/workspace/northway-v2/design/NOTES-FOR-UX.md) — v3 visual direction after Codex v2.
- [`/workspace/northway-v2/design/PRINCIPLES.md`](/workspace/northway-v2/design/PRINCIPLES.md) — hard bans: no step or index numbers, no monogram, limited eyebrows, varied section heads, white canvas, grey elevated.
- [`/workspace/northway-v2/design/CRITIQUE-V2.md`](/workspace/northway-v2/design/CRITIQUE-V2.md) — Designer’s visual critique of the same screenshot. This file is the layout and conversion half; we do not restate their type, colour, grain or waymark fixes at length.
- [`/workspace/northway-v2/design/BRAND-V2.md`](/workspace/northway-v2/design/BRAND-V2.md) — palette, tokens, contrast, the Excerpt, and signature components. Elevated grey is **`#E8E8E4`** (hover `#E3E3DF`).

**Direction, in brief:** pine `#1F3A2E` bands (unchanged) on a **white** canvas (`#FFFFFF`), with **grey `#E8E8E4`** as the elevated colour (hover `#E3E3DF`). Elevation is the grey fill, **no drop shadow**. **Bricolage Grotesque** for display (decided in `DECISIONS-V2.md`; Mona Sans is not used); **Hanken Grotesk** for body, 18 / 1.55.

This document uses Designer’s section names so the two sets map 1:1. Visual specifics (faces, pine, elevated grey, the Price Tablet as a rate sheet, the Enquiry as a letter, the Pine Band, the Excerpt’s type and tick) are Designer’s and are not restated as conversion rules. Settled items are in [Settled with Designer](#settled-with-designer). What remains is in [Still open](#still-open).

---

## Section names (1:1 with Designer)

| This document | Designer (`NOTES-FOR-UX.md`) | Route / role |
|---|---|---|
| The Briefing | The Briefing (hero) | `/` first viewport. Centred pine band; peeking object is the Excerpt. |
| The Case Ledger | The Case Ledger | Home teaser, **editorial** (featured case + quieter entries), not an index. Index page is `/case-studies`. |
| The Excerpt | The Excerpt (replaces the Folio) | No-image treatment: grey elevated panel, named quote or result, **no monogram**. On Home, Kindred’s Excerpt is the peeking Briefing object only; the featured case does not get a second panel with the same quote. |
| Case study | (page, not a home section) | `/case-studies/[slug]` — text-first: Outcome, Challenge, Approach, Results |
| Insights teaser | (page exists; not a signature) | Home section; index `/insights`. Omit when there are no posts. |
| The Price Tablet | The Price Tablet | Home teaser and `/services`. One rate sheet, grey elevated. |
| The Process Path | The Process Path | Home and `/services`. Named stages, no numerals, uneven, Strategy expanded. |
| Studio short | Studio short | Home; links to `/about`. Left-weighted text, not a card. |
| FAQ short | — | Home; full list on `/services#faq` |
| The Enquiry Sheet | The Enquiry Sheet | `/contact` |
| The Pine Band | The Pine Band (closing CTA) | End of most pages |
| Footer | Footer, quieter, under the Pine Band | Holds the single demo disclosure |

The name **Folio**, and the “white card with a large pine sans initial,” are withdrawn. Public label for the work index is `settings.workLabel`, default **Case studies** (Amos, locked). Routes stay `/case-studies`.

---

## Principles

Short, cited, and not given a number we did not verify. Full URLs are in [Sources](#sources). Every source below was fetched on 13 November 2026.

1. **The first ten seconds decide if the visitor stays.** People often leave a page in 10–20 seconds. To earn a longer look, the value proposition has to be clear within about ten seconds: who it is for, what changes, and what to do next. (NN/g, *How Long Do Users Stay on Web Pages?*, citing Liu, White and Dumais, 2010.)
2. **The homepage is an elevator pitch.** It must say who the studio is and what it does, without making people guess. Show that through real examples, then prompt a clear action. Keep the page simple. (NN/g, *Homepage Design: 5 Fundamental Principles*.)
3. **Headings have to work out of context, and be useful.** Specific beats clever. A line any studio could say has low information scent; visitors will not spend time inferring what it means. (NN/g, *Headings Are Pick-Up Lines*.)
4. **Publish the price, and show it on typical work.** On B2B sites, price is a top information need. Hiding it feels evasive; people go to a competitor who shows it. If a single exact figure is hard, give prices for representative engagements — a simple sample beats a complicated calculator. (NN/g, *State the Price…* and *Show Prices for Common Scenarios*.)
5. **One obvious primary action, visually distinct from everything else.** If several buttons share the same style, people hesitate. The primary control needs its own styling, prominence, consistent placement and descriptive label. Secondary paths should not compete with it. (Baymard, *Button Design*.)
6. **Proof works when it is credible, relevant and specific, and sits near the ask.** It backfires when it looks thin, generic or fake. If there is no real proof, do not invent it — omit the block. (NN/g, *Social Proof in the User Experience*; CXL, *Social Proof: Definition, Types, Examples…*.)
7. **Forms: few fields, visible labels, one column, say what happens next.** Cutting a field improves completion. Labels sit above empty fields, never as placeholder-only text. Mark optional fields. Errors are text (and a non-colour cue), not a red border alone. Tell the visitor when they will hear back, and what the submit button does. (NN/g, *Website Forms Usability* and *Placeholders in Form Fields Are Harmful*; Baymard, field-label research; CXL, *10 Principles of Effective Pricing Pages*, “Tell them what happens next.”)
8. **Visual hierarchy is a conversion tool.** Guide the eye in order of importance, with a clear range of scale. If everything is the same size and weight, nothing is. (NN/g, *5 Principles of Visual Design in UX*.) The exact type scale is Designer’s. The same principle applies to section rhythm: if every section has the same head, the same grid and the same air, nothing is a moment.

A recommended check before sale, not a week-one blocker: a 5-second test (can people say what the studio does, for whom, and what to do next?) and a first-click test for “start a project” and “see the case studies,” on the demo, mobile first. (NN/g, *5-Second Usability Test*; already in the build spec.)

---

## Hard rules

Testable. **MUST** / **MUST NOT**. A rule fails if a reviewer can see the forbidden state on a shipped page. Visual how is Designer’s; these rules are about content, order, behaviour, honesty and rhythm.

### Rhythm and anti-template

Added after Codex v2. These are the checks that would have failed that build. They sit with conversion because a page that looks generated does not sell at $149–$249.

- **MUST.** No two consecutive sections on a page share the same **head anatomy**. Anatomies include: (A) waymark + heading + a text link or dek opposite; (B) heading with an optional dek directly underneath, left-weighted, no waymark; (C) heading only; (D) a band with a heading, a supporting line and a button, no waymark. **Pattern A may be used at most once on a page, if at all.** “See all” (and “More questions,” “See all services,” “See all insights”) sits at the **end of the content**, as a text link, not opposite the title — unless this is the single use of pattern A. Fail if two consecutive sections use the same anatomy, or if pattern A appears twice.
- **MUST.** No two consecutive sections share the same **layout**. Layouts include: a centred pine band, an editorial featured case, a rate sheet, an uneven named path, a featured-plus-quiet list, a left-weighted manifesto, an accordion, a closing band. Fail if two consecutive sections are the same equal-column grid, or the same hairline list.
- **MUST.** At least two section layouts on Home are **not a grid and not a repeating row list**. In the demo, the Briefing, the Price Tablet, the Process Path and the featured case satisfy this. Fail if every section is a 2-, 3- or 4-column equal grid, or a same-anatomy list.
- **MUST.** Home varies width or alignment at least twice. Pine bands already bleed to the edge; a featured case taller than its neighbours, a narrower reading measure, or an uneven process also counts. Section padding is Designer’s variable set (`space.section.sm` 80, `space.section` 120, `space.section.lg` 176); conversion requires that variation, not a single metronomic pad. Fail if every section is the same content-width slab with the same air.
- **MUST NOT.** Step numbers, index numbers, or any numeral used as a list index on cases, process, insights or FAQs — including `01`–`04`, `1 2 3 4`, circled digits, “01,” and “step 1.” Process order is given by **names** (Intro, Plan, Strategy, Handover). Case studies are not a sequence. Dates on Insights are dates, not indexes. Numbering is allowed only where the number is a fact in the story (a price, a number of weeks, “two review rounds”), never as a row or step index.
- **MUST NOT.** A monogram, a giant initial, or any single letter standing in for imagery, including on the peeking Briefing object and on a no-image case.
- **MUST.** Home has at most **three** primary-styled controls, at these placements only: (1) the Briefing’s white pill, (2) the Price Tablet’s Grow pine pill, (3) the Pine Band’s white pill. They must not share a viewport. The nav CTA is chrome: quiet or hidden while any of those three is in view; the pine pill after the Briefing leaves. Fail if a fourth control uses the primary button style, or if a primary-styled control appears in another section.
- **MUST NOT.** Outline pills used as proof chips, tags, or nav items. The only pills are the primary (and the white-on-pine equivalent). See [The Briefing](#the-briefing-hero) for how story figures now appear.

### The Briefing (hero)

The Briefing is a **centred pine band** (`#1F3A2E`, full bleed), with a peeking Excerpt at the foot. It is not a left-weighted 7+5 split. The centred band stays (Designer). The Codex v2 failure was the equal-air stack of outline chips, a monogram card, and a repeated result — not the result-first lead itself.

- **MUST.** In the first viewport (desktop 1280, without scrolling), a visitor can answer: who this is for, what outcome to expect, and what to do next. If `showPrices` is on and a from-price is set, that from-price is also visible in this first view.
- **MUST.** The hero leads with a specific result or a named quote when one is set. That result is the **first large type**, at display scale, before the lede and well before the CTA. If both `heroResult` and `heroQuote` are empty, fall back to heading and lede — no empty lead slot. Fallback H1 (only then): **A clear offer, a plan your team can run, a price before you start.** Never invent a result, quote or image. (Amos, locked. Settled with Designer: the Kindred result is the display lead; “Work that earns the next project.” moves to the footer as the studio promise.)
- **MUST.** One primary CTA in the Briefing, label from `settings.ctaLabel` (default **Start a project**), href `/contact`. On the pine band this is a **white pill with pine text** (see [CTAs](#ctas)). No second pill. The featured case is the secondary path — as the peeking Excerpt, or as a text link — not as a second equal button.
- **MUST.** When `showPrices` is on, the from-price sits in the Briefing’s **CTA cluster**, under or beside the white pill: **From $8,000.** as a text link to `#price-tablet`, with the tax note as a caption. Not a second pill. When prices are off, the cluster is the button alone. (Settled with Designer.)
- **MUST.** Story figures under the lede, when used, are **one muted sentence**, not chips, not pills, not a row of tags. Demo: **A six-week engagement, with two review rounds.** They must not repeat the from-price, must not be logos or orbiting icons, and must not compete with the primary CTA. At most one such sentence.
- **MUST.** At the foot of the band, a **peeking object** overlaps the next (light) section. For Kindred, which ships with no photograph, this is the **Excerpt**: a grey elevated panel, no drop shadow, **no monogram**, no empty frame, no product screenshot. It carries a named quote (demo: **“They made the next step obvious.”** — Amira Mendez, clinic manager) or a line that is **not** a verbatim repeat of the display result. When a featured case has a still, the photograph fills this same panel, caption below, no letter over the image. Images remain optional, never invented. Visual treatment of the Excerpt is Designer’s (`BRAND-V2.md`: grey `#E8E8E4`, optional short pine tick, no monogram).
- **MUST.** The peeking object is a secondary path and **cannot** be the first focus or compete with the primary CTA. Testable checks:
  - **Tab order.** After the skip link and the nav (including a quiet nav-text CTA, if present), the first Briefing focus is the primary **Start a project** control, then the from-price link if present, **then** the peeking Excerpt. Fail if the Excerpt receives focus before the primary CTA.
  - **Visual competition.** The Excerpt does not use the primary button style, does not autoplay, and does not cover, crop or visually out-rank the result, the primary CTA or the from-price.
  - **Mobile reflow.** Below 768, the same vertical stack: attribution (if any), result, lede, proof sentence (if any), CTA cluster, then the peeking Excerpt **below** the cluster — no side overlap, no crop of the result or the button. The Excerpt remains a 44px-equivalent target, fully visible, and sits within about the first one-and-a-half screens.
- **MUST NOT.** A generic slogan as the only large statement, with the result visually or verbally secondary (a small sidebar, or only under the button, with no result at display scale). That is the failure mode of Codex v1. It is now closed with Designer.
- **MUST NOT.** Twin pills, a three-card row in the first screen, a 7+5 split as the Briefing, “Sample result, for demo only” (or any demo disclaimer) inside the hero copy, an empty image frame, a monogram, outline proof chips, or a verbatim repeat of the display result on the peeking Excerpt.
- **MUST NOT.** A marketing eyebrow in the Briefing (or anywhere else). A narrow, limited carve-out for factual uppercase meta is in [Eyebrows](#eyebrows).

### Eyebrows

Marketing eyebrows stay forbidden. Factual uppercase is **limited**: at most once, in the Briefing only. The result is still the first large type. This tightens the earlier carve-out, which Codex applied to every case row and to the Folio, and which read as a generated kicker.

- **MUST NOT.** A marketing eyebrow above a section heading, or as a kicker to the result — for example **NEW WORK**, **WHAT WE DO**, **CASE STUDIES**, **THE WORKSPACE**, or any uppercase slogan that is not factual meta. Fail if such a line is present.
- **MAY (carve-out, limited).** A single tracked uppercase line of **factual attribution**, smaller than the result, **once, in the Briefing only**, in the form Client · sector · year, e.g. **KINDRED CLINIC · HEALTH · 2025**. Fail if this line appears on the peeking Excerpt, on a case entry, on Insights, or anywhere else. Fail if more than one such line stacks as a kicker above a section title. Fail if the uppercase line equals or exceeds the result in size, or if it replaces the result as the lead.
- **MUST.** On case entries and on the Excerpt, sector and year are a **caption sentence** (“Health, 2025”), not `HEALTH · 2025`. (Designer, NOTES-FOR-UX.)
- **MAY.** The recommended-plan label **TYPICAL**, once, on Grow, always with a non-colour cue (Designer’s pine rule). Not a “Most popular” chip. This is the only other factual uppercase on the page.
- **MUST.** In the Briefing, if the attribution line is used, it sits above the result and is clearly smaller (meta size). The Kindred result remains the first large type.

### Proof

- **MUST.** Proof is a specific outcome, a named quote (name required), or a named client — tied to a real demo record and placed near an ask.
- **MUST.** If there is no result, quote or name to show, omit the proof slot. The page still has to work.
- **MUST.** A named quote or testimonial appears **at most once on any given page**. Fail if the same quotation, or a verbatim restatement of it, is visible in two places on that page. Demo, on Home: Amira Mendez’s **“They made the next step obvious.”** lives **only on the peeking Excerpt**. It may appear once in Results on the Kindred case page (a different page). It MUST NOT appear under the Price Tablet, on the featured Case Ledger entry, or anywhere else on Home.
- **MUST NOT.** Invented testimonials, logo walls, placeholder avatars, percentage lifts, or a “principles” strip presented as if it were client proof. Studio principles may exist on About; they are not a substitute for proof on Home.
- **MUST NOT.** A builder-facing note on a public proof element (“Sample principles, editable.”).
- **MUST NOT.** Fake scarcity, fake review scores, or JSON-LD review ratings.

### CTAs

- **MUST.** One primary action sitewide. Same label (`settings.ctaLabel`, default **Start a project**). Same destination: `/contact`. Service CTAs go to `/contact?service={slug}` and pre-select the field.
- **MUST.** In any one viewport, only one control uses the primary button style. Secondary actions are text links, the work itself, or a clearly quieter style, and are visually separated from the primary. (Baymard: several similarly styled buttons cause hesitation.)
- **MUST.** On Home, primary-styled controls appear only in the three placements named under [Rhythm and anti-template](#rhythm-and-anti-template): Briefing, Grow, Pine Band.
- **MUST.** The primary is a descriptive verb phrase, never “Submit,” “Learn more,” or “Click here.” The form’s submit label is **Send the brief** (proposed; the earlier spec said “Send message” — see [proposed copy change](#proposed-copy-changes-small)).
- **MUST.** After the Briefing scrolls out of view, the nav shows the primary CTA (on a light nav: the **pine pill with cream text**). While any of the three Home primaries is on screen, the nav CTA is either hidden or reduced to quiet cream text, **with no underline**, at no heavier weight than the other nav links, so two primaries are not in view at once. (The underline is what competed in Codex v2; Designer withdraws it. The behaviour is conversion’s.)
- **MUST.** Primary fill and type, per ground (pine bands unchanged; elevated grey now `#E8E8E4`). Contrast computed independently for this file, WCAG 2.2 relative luminance, 13 November 2026, and agrees with Designer’s coloraide `wcag21` table in `BRAND-V2.md`.
  - On pine bands (Briefing, Pine Band): **white pill, pine text** — fill `#FFFFFF`, type `#1F3A2E`. Text contrast **12.33:1** (floor 4.5). Pill against pine, as non-text, **12.33:1** (floor 3.0). Both pass AA.
  - On light backgrounds (Price Tablet, nav after scroll, forms, empty states): **pine pill, cream text** — fill `#1F3A2E`, type `#F7F7F4`. Text contrast **11.49:1** (floor 4.5). Pill against **white** (`#FFFFFF`) **12.33:1**; against elevated **`#E8E8E4` 10.04:1**; against elevated hover `#E3E3DF` **9.58:1** (floor 3.0). Hover fill `#142F22` with cream type: **13.41:1**. All pass AA.
- **MUST.** Focus ring: 2px width, **2px offset**, `:focus-visible` only, never removed.
  - On white: a **pine** ring (`#1F3A2E`). Against white **12.33:1**. Against elevated `#E8E8E4` **10.04:1**. Against elevated hover **9.58:1**. All pass the 3:1 non-text floor.
  - On pine bands: a **cream** ring (`#F7F7F4` on `#1F3A2E`, **11.49:1**). Passes 3:1. The 2px offset is required: the ring sits in a pine gap, so both adjacent colours are pine. A cream ring flush against the white pill would be cream on white at **1.07:1** and would **fail** 3:1.
  - **MUST NOT.** A pine ring on a pine band (**1.00:1**, invisible). The focus ring has to stay visible on pine.
- **MUST NOT.** A primary-styled button on every Price Tablet row. The recommended engagement (Grow) has the one primary, to `/contact?service=grow` in the demo. The other rows **MUST NOT** repeat the exact primary label (**Start a project**). The package name and the price may be the target, or a quieter verb (“Ask about Position”) may be used. Settled with Designer (`CRITIQUE-V2.md` tell 15, `BRAND-V2.md` impact 7).
- **MUST NOT.** Clever alternate labels invented per section.

**Contrast note.** Elevated grey is **`#E8E8E4`**. The pairs above were computed independently (WCAG 2.2 relative luminance, 13 November 2026) and agree with `BRAND-V2.md`. Independently confirmed on this surface:
- Muted `#4C5550` on `#E8E8E4`: **6.28:1** (floor 4.5). Pass. Tightest required text.
- Input border `#636B66` on `#E8E8E4`: **4.47:1** (floor 3.0 for non-text UI). Pass. Tightest required UI. On elevated hover `#E3E3DF`: **4.27:1**, also pass. On white: **5.49:1**.
- Pine focus ring `#1F3A2E` on `#E8E8E4`: **10.04:1** (floor 3.0). Pass. On elevated hover: **9.58:1**.

Earlier figures against canvas `#F2F2EF` (pill 10.99:1) are historical and must not be reused for the new surface. If a later brief changes the elevated hex, re-check these three pairs.

### Case studies (Case Ledger and case page)

- **MUST.** Case pages are text-first, in this order: **Outcome, Challenge, Approach, Results**, then an optional image block. Omit any block whose field is empty. (Amos, locked.)
- **MUST.** The Outcome is the lead of the case page: the one-line result at a clearly larger scale than the body, then client, sector and the agreed goal. If `oneLineResult` is empty, lead with the title and the goal. No required image at the top.
- **MUST.** Home Case Ledger: three to six featured or latest cases (demo ships four). The layout is **editorial, not a hairline index**, as in PRINCIPLES and NOTES-FOR-UX:
  - **Featured first case (Kindred):** more height than its neighbours. **No second Excerpt and no Amira quote** — that quote lives only on the peeking Briefing Excerpt. Client at heading scale; a companion line (a challenge or approach, not a third copy of the hero sentence); sector and year as a caption sentence (“Health, 2025”). The one-line result remains the Outcome on the case page. The whole block is the target (44px-equivalent) to the case.
  - **The other cases:** quieter text entries, uneven measure, **space instead of hairlines** (or a single rule under the last entry only). Each is complete without an image and without a panel: client, a specific one-line result, sector and year as a caption. The whole entry is the target.
  - “See all case studies” is a text link at the **end of the list**, not opposite the title (unless this is the page’s single use of head pattern A).
- **MUST.** Every case is complete without an image: client, a specific one-line result, sector and year. No empty photo frame, no collapsed hole, no floating arrow in a void. When a still exists, it may fill the Excerpt panel on the featured case, caption below, no letter over the image. Images remain optional, never invented.
- **MUST.** Results are plain, specific words, framed as this demo’s story (weeks, agreed goal, what the client could do afterwards). Named quotes sit in Results on the case page (name required; photo optional, never a generated face), **once on that page**. A quote already used on Home’s peeking Excerpt may appear again on the case page; it MUST NOT be reused a second time on Home. See [Proof](#proof).
- **MUST NOT.** Index numbers on the Case Ledger or the `/case-studies` index — no `01`–`04`, no “1.”, no circled indexes. (The reference board already flags Last Studio’s “Relation 001” as a gimmick.)
- **MUST NOT.** A waymark used as a bullet on every entry. A factual uppercase eyebrow on every entry. Identical equal-height cards as the only ledger layout. A result prefixed with “Sample result, for demo only.”
- **MUST NOT.** Invented percentage outcomes (“+47% leads”). A number is allowed when it is a concrete fact in the demo story (a price, a number of weeks, “two review rounds,” “one sentence”), not a fake lift.
- **MUST NOT.** A fake grid when the Projects collection is empty. On Home, omit the Case Ledger section (do not leave a hole of empty entries). On `/case-studies` with zero projects: a short honest empty on the canvas or on one grey elevated panel — heading **No case studies yet.**, one or two sentences, a text link to Services, and one primary CTA. Never a fake grid, never a redirect (a redirect hides a collection a buyer just emptied). Insights keeps hide-and-redirect. No placeholder cases. (Settled with Designer, surface updated to the new elevation language.)

### The Price Tablet (pricing)

- **MUST.** Published prices are on by default (`settings.showPrices = true`). One switch hides every price and from-figure, including the Briefing from-price and the comparison-table price row. Weeks and typical-project scenarios stay. (Amos, locked.)
- **MUST.** Each engagement shows: name, what it is in sentences, what’s included (or a typical scenario), a fixed price when prices are on, a timeline in weeks, and the tax note (**Prices excl. VAT/sales tax.**).
- **MUST.** One recommended engagement is marked (demo: **Grow**). The mark is not colour alone (WCAG 1.4.1) and is not a “Most popular” chip. Designer specifies a pine rule **and** the factual uppercase **TYPICAL**, once — allowed under the [eyebrow carve-out](#eyebrows).
- **MUST.** Anchoring is honest: three clear packages, the middle one typical, easy to compare (CXL: keep options simple; help people choose; highlight the mid recommended plan). A “what’s included” comparison lives on `/services`.
- **MUST.** One primary path to enquire from the Tablet: the pine pill on Grow, to `/contact?service=grow` in the demo. See [CTAs](#ctas) so the other rows do not repeat “Start a project.”
- **MUST.** The section head is not a clone of the Case Ledger head. “See all services,” if used, sits at the end of the sheet, or the heading stands with a short dek. The one-sheet structure stays; on a white canvas the sheet is grey elevated `#E8E8E4`, no shadow (Designer). The Tablet **MUST NOT** carry a pull quote or testimonial; the tax note is the close of the sheet. (Amira Mendez’s quote is not repeated here.)
- **MUST NOT.** “From $X” as the only pricing, with the real number hidden behind a call. “Contact us for pricing” as the default. A price calculator as the only way to see a number.
- **MUST NOT.** Sample badges on packages, or builder notes (“Sample prices — replace”) on the public surface. Replacement is a launch-checklist matter, not on-page chrome. The site-level disclosure covers the fiction.

### The Enquiry Sheet (form)

- **MUST.** Exactly four visible fields, in this order, and no others: **Name** (required, 2–80 characters); **Email** (required, valid email); **Service** (required select: the three packages plus **Not sure yet**; pre-filled from `?service=`); **Message** (optional, max 1000, labelled optional). Single column. Labels above empty fields, never placeholder-only. Input height 44px.
- **MUST.** Above the fields, a real sentence for what happens next, from `settings.replyTime` (default: **We reply within one working day.**).
- **MUST.** Submit: **Send the brief**. While submitting: button disabled, `aria-busy`. Success replaces the form, announced with `aria-live="polite"`: **Thanks — we’ll reply within one working day.** Invalid submit keeps values, shows a specific error under the field plus a non-colour cue, and a form-level **Check the highlighted fields and try again.**
- **MUST.** A hidden honeypot named `website` must be empty. Direct email from `settings.email` sits beside or under the form (Designer: never in an empty-looking column). Calendar renders only when `settings.calendarUrl` is a non-empty URL; hidden in the demo.
- **MUST NOT.** Phone, company, budget or “how did you hear” fields in v1. Reset/Clear buttons. Placeholder-only labels. Colour-only errors.

### Navigation and footer

- **MUST.** Desktop from 1024: logo (home); **Case studies** (`workLabel`) / Services / About / Insights (omit Insights when published posts = 0) / Contact; plus the primary CTA under the [one-primary-in-view](#ctas) rule. Height 68px, sticky, solid surface. `aria-current="page"` on the current item, with a non-colour cue. Skip link is the first focusable element.
- **MUST.** Below 1024: 44×44 menu button (name **Menu** / **Close**), full-screen overlay, same links, CTA at the foot. Escape closes; focus moves in and returns. Reduced motion: instant open, no slide.
- **MUST.** Inverse colour is the **same pine** (`#1F3A2E`) as the Pine Band. The Pine Band and the footer form **one continuous green close**: the closing CTA in the upper part, quieter chrome below, separated by a cream hairline (about 20% opacity) — not two stacked dark slabs, and not a near-black footer under a green band.
- **MUST.** Footer content: studio name, promise (**Work that earns the next project.** lives here, cream-muted, not as a Briefing display line), nav mirror (same Insights rule), email, legal (Privacy, Terms, Cookies). Credit (**Template by Skala**) off by default. Hide empty phone or social lines.
- **MUST.** The footer carries the **one** site-level demo disclosure, once, in a quiet cream-muted line: **Northway is a demonstration studio that ships with this template.** (Designer’s wording.) An optional first-visit note may repeat that line; it must be dismissible, must not cover the Briefing’s result or CTA, and must not look like a per-item Sample badge.
- **MUST.** The single closing CTA is not diluted by footer links. Testable checks:
  - In the entire green close, **only one** control uses the primary button style: the Pine Band’s **Start a project** (white pill, pine text).
  - The footer has **no** second **Start a project** button, and no other pill. Nav mirror, email and legal are cream-muted text links, visually quieter than the Band CTA, and not styled as buttons.
  - Fail if a footer link uses the primary pill, if two primary-styled controls appear in the close, or if footer links sit at the same visual weight as the closing ask.
- **MUST NOT.** Pricing or Process as nav items. A hamburger on desktop. A second disclosure on every card. A near-black or black footer under the Pine Band.

### The Process Path, Pine Band, Insights, studio, FAQ

- **MUST.** Process is four **named stages** in the demo (Intro, Plan, Strategy, Handover), each with a short, specific outcome. It reads as a path. Structure, as in PRINCIPLES, BRAND-V2 and NOTES-FOR-UX:
  - **Names only.** No numerals, no “step 1,” no circled indexes, no `01`–`04`.
  - **Uneven, not four equal columns.** Strategy is the decisive stage: it gets the grey elevated panel and the fuller copy, including **Strategy your team can put to work**, so the studio short does not repeat that line. Intro, Plan and Handover are short name-plus-outcome, with more air than a grid cell.
  - Visual spine (a single thin pine rule) is Designer’s. Not a waymark on every stage.
  - Reduced motion: all stages visible in the final pose in the first HTML; no height animation, no autoplay. (Designer allows three or four; demo stays at four.)
- **MUST.** Pine Band: the closing ask, on the same pine as the footer, continuous with it. Heading, a short supporting line (reply-time or a result — the slogan, if used, is the footer promise), **one** primary CTA (**Start a project** → `/contact`), as a white pill with pine text. No second button. The centred close is allowed. Do not add a waymark or chip row that copies the Briefing beat for beat. See [Navigation and footer](#navigation-and-footer) so footer links do not dilute this ask.
- **MUST.** Insights is a primary nav item and a Home section of the latest two or three posts, each with a real title, date and excerpt that can stand alone. The Home layout is **not** a hairline twin of the Case Ledger: one featured post at heading scale, the others quieter; “See all insights” at the end. Omit nav, footer link and Home section when there are no published posts. Do not leave a public empty blog. The head must not clone the Case Ledger’s anatomy (see [Rhythm](#rhythm-and-anti-template)).
- **MUST.** Studio short and FAQ omit when their content is empty. Studio short is **left-weighted text, not a rounded card**, and does not reuse the Strategy heading. FAQ is an accordion, 44px headers, `aria-expanded`, instant open under reduced motion, with a head that is not a fifth clone of pattern A.
- **MUST NOT.** “Sample process, editable.” or Sample badges on FAQ questions. Decorative icons beside every heading. Motion on body text. Step or index numbers on Process, Insights or FAQ.

### Demo content quality

- **MUST.** The live demo is a fully written, believable fictional studio: Northway, a strategy and growth consultancy. Specific prices, weeks and outcomes are part of that story. Names feel like names. Every case, package, post, FAQ, team member and quote is complete enough to ship as a demonstration — no lorem, no “coming soon” cards, no empty slots in a row of four.
- **MUST.** One honest site-level disclosure, as above. Buyers still get a replace-before-launch checklist (`LAUNCH.md`). A launch check fails if default demo records are still published on a buyer’s live site.
- **MUST.** The template **hides any block that has no content** (omit-when-empty). This is the buyer-facing rule and it stays. It is how a real studio site stays honest after they delete sample work.
- **MUST NOT.** A “Sample” badge, “Sample result, for demo only” prefix, “(sample)” after a name, or “editable” builder note on any public card, FAQ, principle, process stage, package or quote. (This is the [change from the earlier rule](#change-from-the-sample-badge-rule), now decided.)
- **MUST NOT.** Midjourney or generated faces, fake avatars, placeholder logos, or lorem ipsum anywhere a visitor can see, including empty states and legal openers that read as unfinished junk. Legal pages may still open with a clear “replace with counsel-reviewed copy before launch” line — that is counsel, not a Sample badge.

---

## Change from the Sample-badge rule

The earlier build spec required a Sample badge on every demo record, a “Sample result, for demo only” prefix on outcomes, and a launch check that fails if those badges are still present.

**Decision (Amos, in `DECISIONS-V2.md`, 13 November 2026):** drop the per-item badges and prefixes. Write the demo as a complete fictional studio. Keep **one** site-level disclosure (footer line, wording above; optional dismissible first-visit note). Keep omit-when-empty, the replace-before-launch checklist, and the rule that default demo records must not remain on a buyer’s live site.

**Why.** On Codex v1, yellow Sample chips and “for demo only” prefixes sat on the hero, every case, every insight, every package and every FAQ. They made the site look like a template scaffold, undercut every piece of proof, and are the opposite of a premium product on skala.design. Honesty still matters; it lives in one clear place, not on every card. Codex v2 already follows this, and the footer disclosure is in the screenshot.

---

## Proposed copy changes (small)

Listed so they are not silent.

| Item | Earlier spec | Now |
|---|---|---|
| Form submit | Send message | **Send the brief** (Designer’s offered label; it says what happens.) |
| Hero secondary pill | “See case studies” as a second button | No second pill. The featured case (or a text link) is the secondary path. Aligns with Designer. |
| Public “Sample” in meta titles | e.g. “Northway (Sample)” | Ordinary titles; the footer disclosure covers the fiction. Decided with the badge rule. |
| Briefing proof | Two outline chips | One sentence: **A six-week engagement, with two review rounds.** |
| Peeking object | Folio monogram, repeating the Kindred result | Excerpt with the Amira Mendez quote, not a letter, not a repeat of the display result. |
| Studio short heading | “Strategy your team can put to work.” | That line moves to the Process Path’s Strategy stage. The studio body (“We work with consultants…”) stands as the lead. |

---

## Demo studio writing — quality bar

Voice stays: studio “we,” international English, short, clear beats clever. No founder name. No hype (“unlock,” “elevate,” “leverage,” “in today’s market”).

Numbers that appear are the demo’s published offer and story (prices, weeks, review rounds, what a client could do), not market statistics and not percentage lifts.

### Studio

**Northway** is a strategy and growth consultancy. We help companies clarify their offer, shape their story, and leave with a plan their team can run — at a fixed price, in a set number of weeks.

Email: `hello@northway.example`. No phone, no street address, no JSON-LD address.

The Home studio short uses this body as the lead, with an “About the studio” link. It does not reuse the Strategy heading.

### Briefing — result and supporting lines

Optional attribution (factual uppercase, smaller than the result, **once, Briefing only**): **KINDRED CLINIC · HEALTH · 2025**

Result (the first large type): **Patients knew who the clinic was for, and booked a first visit from the site.**

Lede: **We are a strategy and growth consultancy. A clear position, a plan your team can run, and a price before you start.**

Proof sentence, not chips: **A six-week engagement, with two review rounds.**

From-price, when on, in the CTA cluster: **From $8,000.** Tax note: **Prices excl. VAT/sales tax.**

Peeking Excerpt, Kindred: **“They made the next step obvious.”** — Amira Mendez, clinic manager. Not a monogram. Not a second copy of the result.

The slogan **Work that earns the next project.** is the footer promise, not a Briefing display line.

Do not write: “Sample result, for demo only: patients understood who the clinic was for, and how to book.”

### Four cases (all complete; Kindred has no image)

| Client | Sector, year | Outcome line | Agreed goal (for the case page) |
|---|---|---|---|
| Kindred Clinic | Health, 2025 | Patients knew who the clinic was for, and booked a first visit from the site. | A single offer, and a booking message the front desk could use. Six-week positioning and messaging engagement. |
| Holloway Advisors | Consulting, 2025 | The partners could explain the firm in one sentence, and knew which two packages to offer first. | A clear offer and a package structure the partners would actually use. |
| Eastport Kitchen | Hospitality, 2024 | Bookings came from the diners they wanted, not just from more diners. | A sharper idea of who the room was for, and a message that reached them. |
| Cedar Workshop | Product, 2024 | The launch had a named buyer, and a message the team reused in every channel. | A buyer, a promise, and a short plan the team could run without the studio in the room. |

Captions on the Case Ledger use this sentence form (“Health, 2025”), not uppercase meta. Kindred is the featured editorial opening; the other three are quieter text. On the featured Kindred block, do not restate the display result, and do not repeat the Amira quote: lead with the client and a companion challenge line (for Kindred: the clinic had many services, and no one could tell who it was for). The outcome line in the table remains the case-page Outcome.

Case-page body follows Outcome → Challenge → Approach → Results. Challenge is two or three sentences about the real problem (many services, no one could tell who it was for). Approach is short labelled lines (Research, Positioning, Messaging, Plan). Results are plain words plus an optional named quote, once on that page.

Kindred quote, used **once on Home** (the peeking Excerpt only) and **once on the Kindred case page** (Results): **“They made the next step obvious.”** — Amira Mendez, clinic manager. Not under the Price Tablet. Not on the featured Case Ledger entry.

### Three engagements (Grow is typical)

| Name | Price | Weeks | For | What’s in the teaser |
|---|---|---|---|---|
| Position | $8,000 | 6 | A specialist firm whose work is hard to explain. | Positioning and messaging you can use in the first conversation. |
| Grow (typical) | $16,000 | 10 | A consultancy that wants a clearer offer and a plan it can run. | Brand strategy and a marketing plan aimed at the enquiries you want. |
| Brand + growth | $28,000 | 14 | A firm changing how it goes to market. | Positioning, brand strategy and a marketing system as one engagement. |

What’s not included (Services page): media spend, ad account management, website design and build, and photography, unless agreed. Payment terms in the demo: 50% to start, 50% before handover. Two review rounds; further rounds are a fixed add-on.

Only Grow carries “Start a project.” Position and Brand + growth do not repeat that label.

### Insights (three complete posts)

- **How we price a fixed project** — Why the price and the weeks are on the site, not behind a call. (8 October 2026)
- **What to brief a consultancy** — A short brief is enough: the goal, the audience, and what “done” looks like. (15 September 2026)
- **Why we show the weeks** — A published timeline is part of the offer, not a decoration. (22 August 2026)

Each post is a real short essay at `layout.measure` (66ch), not a title over a one-line stub. On Home, one of these is featured; the others are quieter.

### Process (four named stages, each with an outcome)

Written as names, never as a numbered list.

**Intro** — A short call. We agree the goal and the package. You leave knowing the price and the weeks.

**Plan** — The brief, the research, and how we will measure success.

**Strategy** — Positioning, messaging and the plan, with two review rounds. This is the expanded stage: it also carries **Strategy your team can put to work**, and the sense of work you can brief, share, and run with.

**Handover** — We deliver the work, then hold a short results review. The plan stays with your team.

### Team and FAQs

Team (About; initials, no photos): **Alex Reed**, Strategy. **Jordan Keane**, Growth. Hide the section if a buyer removes them.

Home FAQ, no badges, no indexes: **How does a project start?** A short enquiry, then a call to agree the goal and the package. **Are the prices fixed?** Yes. The number and the weeks are published; if the scope changes we pause and re-quote a fixed change. **Who is this for?** Consultants, specialist firms and small practices that want a clearer offer and a plan they can run. **What happens after we enquire?** We reply within one working day.

---

## What stays locked from the build spec

Unchanged by this proposal, unless Amos says otherwise:

- One name: Northway is the product and the demo studio. Audience: consultants, strategists and small non-design agencies.
- Code edition ($149) ships first. Prices of the kit stay $149 / $199 / $249.
- `Start a project` → `/contact`. `workLabel` default Case studies. Routes `/case-studies`.
- Prices on by default; `showPrices` hides every price. Grow is the typical package, at the figures above.
- Text-first cases; optional images; no-image Excerpt (no monogram); omit empty blocks.
- Hero result or quote, with heading+lede fallback. Insights in nav and on Home, omitted when empty.
- Four-field form, reply time, light theme only, footer credit off, no Skala marketing in shipped files.
- WCAG 2.2 AA, 44px targets, 2px focus ring with 2px offset, skip link, semantic tokens only.
- Reduced motion: every component is in its final pose in the server HTML. No height, width or left animation. No autoplay. Hover translate at most 8px, and only under `(hover: hover)` and `(pointer: fine)`.

---

## Sources

Fetched and read on 13 November 2026. Claims above use only what these pages actually say. Where a page did not give a figure, this document states a principle, not a number.

1. [How Long Do Users Stay on Web Pages?](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) — Nielsen Norman Group, Jakob Nielsen, 11 September 2011. First 10 seconds; 10–20 second departures; value proposition within 10 seconds. Cites Chao Liu, Ryen W. White and Susan Dumais, SIGIR 2010.
2. [Homepage Design: 5 Fundamental Principles](https://www.nngroup.com/articles/homepage-design-principles/) — NN/g, Huei-Hsin Wang, 15 March 2024. Communicate who you are and what you do; reveal content through examples; prompt action; keep the homepage simple.
3. [Headings Are Pick-Up Lines](https://www.nngroup.com/articles/headings-pickup-lines/) — NN/g, Hoa Loranger, 9 August 2015. Headlines must work out of context, be specific and useful, and avoid cute or generic phrasing.
4. [State the Price to Give B2B Sites a Competitive Advantage](https://www.nngroup.com/articles/show-price/) — NN/g, Hoa Loranger, 1 December 2013. Price as a top B2B information need; hiding it feels evasive; people leave for sites that show it.
5. [Show Prices for Common Scenarios](https://www.nngroup.com/articles/show-prices-for-common-scenarios/) — NN/g, Jakob Nielsen, 9 April 2006. Representative sample prices beat complex calculators in early research.
6. [Social Proof in the User Experience](https://www.nngroup.com/articles/social-proof-ux/) — NN/g, Jen Cardello, 19 October 2014. Social proof can raise confidence; thin or overused proof can backfire or distract from the action.
7. [Social Proof: Definition, Types, Examples & How to Work With It](https://cxl.com/blog/is-social-proof-really-that-important/) — CXL, Shanelle Mullin, updated 5 November 2026. Proof should be credible, relevant and specific, and sit near the ask; do not fake it.
8. [Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/) — NN/g, Kathryn Whitenton, 1 May 2016. Keep forms short; labels next to fields; single column; no placeholder-only labels; visible, specific errors; no Reset. Cites Seckler et al., CHI 2014: 78% first-try successful submits on guideline-compliant forms vs 42% on forms that violated them.
9. [Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/) — NN/g, Katie Sherwin, 11 May 2014 (reviewed 10 September 2018). Labels and hints outside empty fields.
10. [Field Label UX: Place Labels Above the Field](https://baymard.com/research-articles/mobile-form-usability-label-position) — Baymard Institute. On mobile, labels above the field so the input is wide enough to show what was typed.
11. [Button Design: Best Practices for Optimal UI Buttons](https://baymard.com/blog/button-design) — Baymard, Christian Holst, 15 December 2021 (updated 4 June 2026). Unique styling, prominence, consistent placement, descriptive copy; if there is more than one button, the primary is more prominent and separated. Several similarly styled buttons caused hesitation in testing.
12. [10 Principles of Effective Pricing Pages](https://cxl.com/blog/10-principles-of-effective-pricing-pages/) — CXL, Peep Laja, 30 June 2019 (updated 23 December 2022). Simple pricing; easy comparison; help people choose a plan; a clear CTA; tell them what happens next.
13. [8 Keys to Value-Based SaaS Pricing Pages](https://cxl.com/blog/saas-pricing-pages/) — CXL, Patrick Campbell, 2 January 2019 (updated 23 December 2022). Keep options simple; highlight the recommended mid-priced plan as an anchor. (The article’s monetization percentages are about pricing strategy, not page layout, and are not used here.)
14. [5 Principles of Visual Design in UX](https://www.nngroup.com/articles/principles-visual-design/) — NN/g, Kelley Gordon, 1 March 2020 (reviewed 1 September 2026). Scale and hierarchy guide attention in order of importance.
15. [5-Second Usability Test](https://www.nngroup.com/videos/5-second-usability-test/) — NN/g, 20 April 2018. First-impression test used as a recommended QA, not a numeric claim.
16. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — W3C. AA as the floor; 1.4.1 Use of Colour; 2.5.5 target size (44px is our locked floor); 2.3.3 Animation from Interactions.

Internal, already agreed, not re-researched here:

- [Northway build-ready site spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51)
- [Northway proposal](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6)
- [Designer notes (v3)](/workspace/northway-v2/design/NOTES-FOR-UX.md)
- [Brand direction v2](/workspace/northway-v2/design/BRAND-V2.md)
- [UX critique of Codex v2](/workspace/northway-v2/docs/UX-CRITIQUE-V2.md)
- [Reference board](/workspace/template-refs/REFERENCE-BOARD.md)
- [Decisions v2](/workspace/northway-v2/DECISIONS-V2.md)

---

## Settled with Designer

The six items from the Eden pass remain settled, with two of them **updated** in this v3 pass so they no longer prescribe the monogram Folio or proof chips. New v3 settlements from `NOTES-FOR-UX.md` follow.

Eden pass, still settled:

1. **Briefing reading order.** The Kindred result is the first large type, at display scale, centred on the pine band, before the lede and the CTA. An optional factual uppercase attribution may sit above it, smaller, **once, in the Briefing only**; it does not replace the result as the lead. The Briefing is a centred pine band with a peeking object, not a 7+5 split.
2. **The slogan.** “Work that earns the next project.” moves to the footer as the studio promise. The display line in the demo is the Kindred result. Fallback H1, only when result and quote are empty: “A clear offer, a plan your team can run, a price before you start.”
3. **From-price.** When prices are on, it sits in the Briefing’s CTA cluster, under or beside the white pill, as a cream text link to `#price-tablet`, with the tax note as a caption. Visible without scrolling at 1280. Not a second pill.
4. **Photographs (updated).** Images are optional, never invented, never leave an empty frame. Kindred ships with none. The no-image treatment is the **Excerpt** (grey elevated panel, named quote or result, **no monogram**). In the Briefing, that Excerpt — or a still, if one exists — is the peeking object, and it must not repeat the display result verbatim. The withdrawn Folio (white card, pine sans initial) must not return.
5. **Empty `/case-studies`.** Home teasers with no content are omitted. On `/case-studies` with zero projects: a short honest empty on the canvas or one grey elevated panel, never a fake grid, never a redirect. Insights keeps hide-and-redirect.
6. **Story figures (updated).** Concrete demo story figures only ($8,000, weeks, two review rounds, one sentence). Invented percentage lifts are forbidden. In the Briefing they appear as **one muted sentence**, not as proof chips.

Also decided, and no longer open:

- **Display sans.** Bricolage Grotesque. Mona Sans is not used. Body stays Hanken Grotesk 18 / 1.55. (`DECISIONS-V2.md`.)
- **Demo disclosure instead of Sample badges.** One footer line, wording above. (`DECISIONS-V2.md`.)
- **CTA and footer colour on pine.** White pill with pine text on green; pine pill with cream text on light; continuous pine close. Pine-band contrast figures in [CTAs](#ctas) still hold.
- **Canvas and elevation.** White canvas `#FFFFFF`, elevated `#E8E8E4` (hover `#E3E3DF`), no drop shadow. Pine bands unchanged. Contrast against `#E8E8E4` is in [CTAs](#ctas), independently computed, and agrees with Designer.
- **Package-row labels, studio short, nav underline, featured Kindred companion.** Settled in this pass with `CRITIQUE-V2.md` and `BRAND-V2.md` impacts. Grow only uses “Start a project” on the Tablet; “Strategy your team can put to work” lives on the Process Path; the nav CTA has no underline while a pill is in view; the featured case does not repeat the display result.

v3 bans, agreed in NOTES-FOR-UX and written as MUSTs above: no step numbers; no index numbering; limited factual eyebrows; varied section heads (pattern A at most once); no monogram; “See all” at the end of the content; Strategy absorbs “Strategy your team can put to work”; pills are the primary only.

---

## Still open

Nothing is pending Designer’s structure, and the elevated hex is not pending. The one clash Designer recorded (Amira Mendez’s quote used twice) is **closed**: the quote lives once on the peeking Excerpt; the Price Tablet keeps only the tax note; no testimonial appears twice on a page.

Settled with Designer in this pass: Process Path, editorial Case Ledger, Excerpt (no monogram), section heads, package-row labels (only Grow uses “Start a project”), studio short heading, Insights as one featured post plus two quiet, white canvas `#FFFFFF`, elevated `#E8E8E4` with no shadow, and contrast against that surface (muted **6.28:1**, input border **4.47:1**, pine focus ring **10.04:1**, independently verified).

FYIs, not fights and not pending:

1. **Display sans and Sample badges** are decided in `DECISIONS-V2.md` (Bricolage; one footer disclosure), and Designer has closed both in `CRITIQUE-V2.md` coordination. If `BRAND-V2.md` Open choices still lists them, that is leftover wording on their side, not a conversion conflict.

2. **`DECISIONS-V2.md` still records the canvas as `#F2F2EF`.** Amos has inverted that. This file does not edit `DECISIONS-V2.md`. Tokens in this proposal: canvas `#FFFFFF`, elevated `#E8E8E4`.

3. **Later token revisions.** Colour, type, the waymark, elevated surfaces and motion stay in Designer’s files. If a later pass fights a MUST / MUST NOT in this document, list it rather than improvising.

Optional, not open: Designer offered that the Pine Band heading “Ready when you are.” is generic, and will set a more specific line if we prefer one. A possible heading is **A price before you start, a reply within a day.** The supporting line can stay the reply-time. Not a MUST.
