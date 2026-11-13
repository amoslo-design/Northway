# UX critique of Codex’s Northway v2

**Proposal only.** 13 November 2026, Europe/Stockholm. For Amos to review before anything goes to GitHub. Does not change the repo, the Pages, or Designer’s files.

**Screenshot:** [`/workspace/northway-v2/codex-v2-screenshot.png`](/workspace/northway-v2/codex-v2-screenshot.png), 1440×7039. Amos: “It looks super AI generated with the numbering, the layout etc.” He also set the canvas to **white**, with **grey as the elevated colour**.

This is the layout, rhythm and conversion half. Type, colour, grain, elevation, the waymark and surfaces are Designer’s, in [`NOTES-FOR-UX.md`](/workspace/northway-v2/design/NOTES-FOR-UX.md) (11:02), [`CRITIQUE-V2.md`](/workspace/northway-v2/design/CRITIQUE-V2.md) (11:06), [`PRINCIPLES.md`](/workspace/northway-v2/design/PRINCIPLES.md) (11:06) and [`BRAND-V2.md`](/workspace/northway-v2/design/BRAND-V2.md) (11:08), all Europe/Stockholm, this afternoon. The two halves use the same section names and the same bans. After those files landed, this critique was aligned to them. **No conversion/visual fight is recorded.**

Codex followed our v2 docs closely. The Kindred result leads, prices are published, Grow is marked TYPICAL, Sample badges are gone, and the disclosure sits in the footer. The conversion intent is visible. The page still reads as a generated template, and several of the tells came from rules in `CONVERSION.md` and the earlier design files. Those rules are rewritten in this pass; the intent is kept.

---

## Top 5

1. **Numbering on the cases (01–04) and the process (1 2 3 4).** This is the tell Amos named. Case studies are not a sequence the buyer has to count. Process names already give the order; the numerals turn a path into a SaaS “how it works” widget. The reference board already flags this on Last Studio: numbered work (“Relation 001”) can feel like a gimmick — use client, sector, year, and a one-line result. **Ban: no step numbers, no index numbering.**

2. **The same section-head anatomy, five times.** Case studies, Insights, the Price Tablet, the Process Path and the FAQ all open as a waymark, an H2, and a text link or dek on the right (Insights and Process are close variants). Once is a pattern; five times is a template stamp. **Ban: varied section heads; that exact pattern at most once on a page.**

3. **The Case Ledger is a hairline index.** Four identical rows: waymark, index, uppercase meta, name, one-liner. Kindred’s result is then repeated at display scale for a third time, next to a second giant “K.” A crafted studio site leads with one editorial case and lets the others sit quieter, with space instead of rules. **Rework: editorial layout, as in PRINCIPLES and NOTES-FOR-UX.**

4. **The Briefing is a centred stack of chips and a monogram.** Result-first copy is right. What reads as generated is the equal-air column: uppercase attribution, result, lede, two outline pills that look like extra buttons, the white CTA, then a peeking white card whose giant pine “K” stands in for a photograph and restates the same Kindred sentence. **Ban: no monogram letter standing in for imagery; no outline proof pills; the peeking Excerpt must not repeat the display result.** The centred pine band itself stays, as Designer asked.

5. **“Start a project” is asked too often, and almost every block is the same card.** The enquire label appears in the Briefing, three times on the Price Tablet (a pine pill on Grow, text links of the same words on Position and Brand + growth), and again on the Pine Band. The nav is correctly quiet while the hero pill is in view — that part of the rule worked. The rest, plus four equal process columns and a studio short that is another rounded white card, is a uniform rhythm. **Cap: three primary placements on Home, named; at least two section layouts that are not a grid; elevated grey, no shadow, not a white card on a grey page.**

Companion rules live in [`CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md), changelog at the top.

---

## What our rules invited

These are on us, not only on Codex.

| Tell in the screenshot | Rule that invited it | What changes, intent kept |
|---|---|---|
| Process `1 2 3 4` in equal columns | “Process is four steps… reads as a path, not four equal columns.” We forbade the equal columns more clearly than the numerals, and still called them “steps.” | Four **named stages**, each with an outcome. **MUST NOT** numerals, “step 1,” or four equal columns. Uneven path below, as in PRINCIPLES and NOTES-FOR-UX. |
| Case `01–04` hairline rows | “Home Case Ledger: each row… Folio or a full-width text row.” “Ledger” and “row” invited an index. | Editorial featured case plus quieter text entries. No index numbers, no hairline list. Conversion intent: complete without images, specific result, omit when empty. As in PRINCIPLES and NOTES-FOR-UX. |
| Giant “K” on the peeking card and again on Kindred | “The no-image treatment is the Folio (white card, pine sans initial).” We specified the monogram. | The **Excerpt** (Designer’s name): a grey elevated panel with a named quote or a result, never a letter standing in for a picture. Kindred still ships with no photograph. |
| Outline chips “Six-week engagement” / “Two review rounds” | “MAY: at most two still proof chips.” | One muted sentence under the lede. Story figures stay; they are not controls. |
| Uppercase `HEALTH · 2025` on every row and on the Folio | The factual-eyebrow carve-out allowed ledger and Folio meta in the same uppercase form as the Briefing. | **Limited:** at most one uppercase factual attribution, in the Briefing only. Case meta is a caption sentence (“Health, 2025”). **TYPICAL** on Grow stays. |
| “See all…” opposite every H2 | We never forbade a repeated head. The section-name table read like one component. | That anatomy at most once. “See all” sits at the **end of the content**. |
| Three “Start a project” labels on the Price Tablet | “Other rows use a text link (‘Start this engagement’ or the same `ctaLabel`).” Plus “one primary per viewport,” which Codex met by putting an enquire in almost every section. | Three named primary placements on Home (Briefing, Grow, Pine Band). Other package rows must not repeat the exact enquire label. |
| White rounded cards with a soft shadow on a grey canvas | Earlier visual direction (white cards, canvas `#F2F2EF`). Amos has inverted this. | White canvas, grey elevated, no drop shadow. Exact elevated hex is Designer’s; contrast is re-checked when tokens land. |

---

## Ranked critiques

Worst first. Each one: what is in the screenshot, why it reads as generated, what a crafted studio site does instead.

### 1. Index and step numbering

**In the shot.** Under “Selected case studies,” four hairline rows are numbered **01 02 03 04**, each with a waymark. Further down, “How a project runs.” is four equal columns numbered **1 2 3 4**, again with a waymark on each name: Intro, Plan, Strategy, Handover.

**Why it reads as generated.** Sequential indexes are a default in AI and SaaS layout kits. They tell the visitor to scan a list, not to read a case. Process numerals turn four outcomes into a widget. Amos called the numbering out by name. The reference board’s Last Studio note is the same tell on a marketplace template: “Relation 001” feels like a gimmick; a client, a sector, a year and a one-line result do not.

**Instead.** Cases are not ordered work — no 01–04, no “1.”, no circled indexes. Process is ordered, but the **names** are the order (Intro, then Plan, then Strategy, then Handover). No “step 1.” The path is in [Process](#process) below. Designer withdraws the visual indexes and specifies a single thin spine, not a waymark on every stage. The structure matches PRINCIPLES and NOTES-FOR-UX.

### 2. Identical section heads

**In the shot.** These heads share one anatomy:

- Selected case studies — waymark, H2, “See all case studies.”
- Insights — waymark, H2, a dek, “See all insights.”
- Know the price before we talk. — waymark, H2, “See all services.”
- How a project runs. — waymark, H2, dek on the right.
- Before we start. — waymark, H2, “More questions.”

**Why it reads as generated.** A crafted site varies how a section arrives. Repeating “label, title, end-link” at the same alignment, five times, is how a component library looks when every block uses `SectionHeader`. Andersen’s work index, in the reference board’s shot, is a short typographic header and then the work — not a mirrored link in the same corner every time. Gretel’s “New Work:” is already listed as an eyebrow to avoid, and as a reminder not to label every case.

**Instead.** That exact pattern at most once on a page, if at all. Other sections: a heading, optional one-line dek directly underneath, left-weighted, no waymark. “See all” is a text link at the end of the content. The waymark is Designer’s device: reserved for the wordmark, the current nav item, and at most one hero-level moment — not a bullet on every heading. Visual how is Designer’s; the conversion check is in `CONVERSION.md` under Rhythm and anti-template.

### 3. The Case Ledger as identical hairline rows

**In the shot.** After the head, a hairline list. Kindred (01) gets a large title, the same result as the hero, and a floating Folio with another “K” and a “Case study” link. Holloway Advisors (02), Eastport Kitchen (03) and Cedar Workshop (04) follow: waymark, index, `CONSULTING · 2025` (and the same form on 03 and 04), name, one line. Equal anatomy, equal rules, equal air.

**Why it reads as generated.** An index is a database dump. Kindred’s sentence appears three times in one scroll (hero, peeking card, first row), so the page feels padded rather than edited. Pentagram, in the reference board’s shot, puts a short title and one sentence on the work itself, not as card chrome and not as a numbered row. Gretel opens with one large case (title on the left, work on the right), not four identical entries. Order’s case *is* the home: a current project shown at a scale you can read, not a generic card grid.

**Instead, conversion intent kept.** Four complete cases, each with a client, a specific result, a sector and a year, and a 44px-equivalent target, omitting the section when the collection is empty. Layout, following NOTES-FOR-UX, PRINCIPLES and CRITIQUE-V2:

- **Kindred, featured:** an editorial opening, without a second Excerpt and without the Amira quote (that quote lives **once**, on the peeking Briefing Excerpt). Client at heading scale; a companion challenge or approach line; sector and year as a caption sentence (“Health, 2025”), not `HEALTH · 2025`. More height than its neighbours. The whole block is the target to the case. The one-line result remains the Outcome on the case page.
- **The other three:** quieter text entries, uneven measure, **space instead of hairlines** (or a single rule under the last entry only). Client, result, caption (“Consulting, 2025.”). No panel required; they are complete as text. No waymark-as-bullet.
- “See all case studies” at the **end of the list**, not opposite the title.

### 4. Briefing stack: outline chips and a monogram Folio

**In the shot.** A full-bleed pine band, content on a centre axis: `KINDRED CLINIC · HEALTH · 2025`; the Kindred result at display scale; a centred lede; two outline pills (“Six-week engagement,” “Two review rounds”); a white “Start a project” pill; “From $8,000.” and the tax note; a white card peeking from the foot, with a giant pine “K,” a waymark, `HEALTH · 2025`, Kindred Clinic, the same result again, and “Read the case study.”

**What is working.** The result is the first large type. The from-price sits in the CTA cluster. There is one primary pill. The nav CTA is quiet cream text, so two primaries are not in view. The slogan is not the hero. Those settlements hold.

**Why it still reads as generated.** The failure is the stack, not the result. Outline chips look like extra buttons (the reference board’s “Do not let every control become a pill”). A large initial standing in for a photograph is a logo-maker default; we specified it, and Designer has withdrawn it. Repeating the result on the card wastes the first scroll. AREA 17’s opening, in the board’s shot, is a large typographic promise, no eyebrows, no metrics, no logo row, then a single supporting visual. Walker is “type, then work, no theatre.” Gretel is a short statement, then a case — a title, not a monogram.

**Instead.** Keep the **centred pine band**, result-first, from-price in the cluster, one white pill, peeking object at the foot that is not first focus, stacked below the CTAs on mobile (Designer: the band stays; layout refinements are ours). Changes:

- Replace the chips with one cream-muted sentence under the lede: “A six-week engagement, with two review rounds.” Story figures stay; they are not pills, tags, or a row of chips.
- The peeking object is the **Excerpt**, not a Folio monogram: a grey elevated panel, no shadow, no letter. For Kindred, a named quote — **“They made the next step obvious.”** — Amira Mendez, clinic manager — with a caption, not a second copy of the display result. If a later case has a still, the photograph fills this same panel; no letter over the image.
- The uppercase attribution may stay **once**, in the Briefing only, smaller than the result. It is not repeated on the Excerpt or on the cases.
- **MUST NOT** a monogram, an empty frame, or a second pill.

Visual treatment of the Excerpt (grey `#E8E8E4`, radius, optional pine tick, type) is Designer’s, in BRAND-V2 and CRITIQUE-V2.

### 5. Repeated enquire labels, equal columns, and one card language

**In the shot.** “Start a project” is the hero pill, the Grow pine pill, text on Position and on Brand + growth (three asks on one sheet), and the Pine Band pill. Process is four equal columns. The Folio, the Price Tablet and the studio short (“Strategy your team can put to work.”) are all rounded white cards with a soft shadow, on a light-grey canvas. The Pine Band is another centred stack (heading, line, pill), a bookend of the hero. Section widths and vertical air are nearly uniform.

**Why it reads as generated.** “One primary per viewport” was read as “an enquire in every section.” Three identical labels on the rate sheet make Grow less obvious, not more (Baymard: several similarly styled or similarly worded actions cause hesitation). Four equal columns are a grid default. One card component used for work, price and a manifesto is a kit, not an edit. Amos’s canvas change (white page, grey elevation) also makes the current grey-page-plus-white-shadow-cards the inverted, leftover system.

**What is working.** The Price Tablet as **one rate sheet**, with TYPICAL and a pine rule on Grow, is the strongest section on the page. Keep that structure. Clay’s filled Contact pill, Andersen’s single “See our work,” and Last Studio’s one nav CTA are the reference pattern: one obvious primary, not a pill on every row.

**Instead.**

- Home has **three** primary-styled placements only: Briefing, Grow, Pine Band. They never share a viewport. The nav is chrome: quiet or hidden while a pill is in view; the pine pill after the Briefing leaves.
- Position and Brand + growth may stay as quieter paths, but they **must not repeat the exact label “Start a project.”** The package name and the price can be the target, or a quieter verb (“Ask about Position”) can be used. Settled with Designer (`CRITIQUE-V2.md` tell 15).
- Process is uneven, not four equal columns — see [Process](#process).
- Elevation: white canvas `#FFFFFF`, grey fill `#E8E8E4`, **no drop shadow**. The Price Tablet and the Excerpt are raised surfaces; the studio short is left-weighted text, not a third card. Pine pill and focus ring against `#E8E8E4` are **10.04:1**, independently computed, agreeing with Designer.

### 6. Insights as a second hairline index

**In the shot.** “Insights” / “Notes on the decisions behind the work.” / “See all insights,” then three hairline rows: 8 October, 15 September, 22 August 2026, each with a real title and excerpt (“How we price a fixed project,” and the two others). The copy is good. The layout clones the Case Ledger.

**Instead.** One featured post at heading scale, with its excerpt at a reading measure; the other two quieter, with dates as captions, not as an index column. A different head from the cases. “See all insights” at the end. Omit the whole section when there are no posts — that rule is unchanged. The three demo essays stay.

### 7. Studio short as a leftover card, and Strategy said twice

**In the shot.** After the process, a white rounded card on grey: waymark, “Strategy your team can put to work.”, a paragraph about consultants and small firms, and “About the studio.” It looks like a second Folio and a second Price sheet, and it repeats “Strategy” just after the Strategy column.

**Instead.** Left-weighted text, no card. The line “Strategy your team can put to work” moves into the Process Path’s Strategy stage (Designer’s request), so the studio short can use its existing body — who it is for — and the “About the studio” link. Omit when empty.

---

## Section by section

Crafted alternatives for Home. Conversion intent is in each one. Visual finish is Designer’s. Structures now match PRINCIPLES, CRITIQUE-V2 and NOTES-FOR-UX.

### Hero (The Briefing)

Keep: centred pine band; Kindred result as the first large type; from-price in the CTA cluster; one white pill to `/contact`; peeking object at the foot, secondary in tab order, below the cluster on mobile; optional factual uppercase attribution once, smaller than the result; slogan in the footer.

Change: proof as one sentence, not chips; Excerpt instead of a monogram Folio; no verbatim repeat of the result; no second pill, no empty frame, no three-card row, no return to a 7+5 split.

A visitor in the first viewport at 1280, without scrolling, can still answer who this is for, what outcome to expect, what to do next, and (when prices are on) the from-price. That MUST is unchanged.

### Case studies (The Case Ledger)

Editorial, not an index — as in critique 3. Case pages stay text-first: Outcome, Challenge, Approach, Results, then an optional image block, omit empty. The Home featured case is the path into Kindred. Work cards and the index page must still work without photographs; quiet entries are text-complete. Public label remains `settings.workLabel`, default **Case studies**.

### Services / pricing (The Price Tablet)

Keep the one-sheet comparison, three packages, Grow as typical with **TYPICAL** and a non-colour pine rule, published prices, and the tax note. **No pull quote under the sheet.** Amira Mendez’s “They made the next step obvious.” lives only on the peeking Briefing Excerpt; it must not appear a second time on Home (settled with Designer). Change the section head (no cloned “See all services” opposite the title; that link can sit at the end, or the heading can stand with a short dek). One primary: the pine pill on Grow, to `/contact?service=grow`. On the white canvas the sheet is grey elevated `#E8E8E4`, no shadow (Designer). This remains the signature pricing moment.

### Process (The Process Path)

**Structure**, matching PRINCIPLES, BRAND-V2 and NOTES-FOR-UX. Designer asked for a structural alternative and will not re-specify a four-column grid; this is that alternative. Conversion intent: four named outcomes, in order, all visible in the first HTML under reduced motion, reading as a path from the first conversation to a plan the team can use.

- **Names only:** Intro, Plan, Strategy, Handover. **MUST NOT** 1–4, 01–04, circled indexes, or “step 1.”
- **One continuous thin spine** (Designer’s visual: 2px vertical on mobile; on desktop a single horizontal hairline behind the names, or a vertical spine if stacked). Not a waymark on every stage.
- **Uneven.** Strategy is the decisive stage: it gets the grey elevated panel and the fuller copy — “Strategy your team can put to work,” plus the outcome (positioning, messaging and the plan, with two review rounds; work you can brief, share, and run with). This absorbs the separate studio-ish card, so “Strategy” is not said twice.
- Intro, Plan and Handover are short: name plus one outcome sentence, with more air than a grid cell. They are not equal columns.

A left-weighted reading path on desktop (short, short, expanded Strategy, short) and a vertical stack on mobile. Demo copy stays the existing outcomes, written as names, not as a numbered list.

### Insights

As in critique 6. Still a primary nav item and a Home section of two or three complete posts. Featured-plus-quiet, not a hairline twin of the cases. Omit when empty.

### About / studio short

Left-weighted text, not a centred rounded card. Distinct from Strategy. Link to `/about`. Team on About stays initials, no generated faces, hidden if removed.

### Enquiry (The Enquiry Sheet)

Not on this Home screenshot — it remains `/contact`. Conversion rules are unchanged: four fields, labels above, “We reply within one working day,” **Send the brief**, one primary. Visual: grey elevated sheet on the white canvas, no shadow (Designer). Direct email beside or under the form, never in an empty-looking column.

### Close and footer (The Pine Band)

Keep: continuous pine with the footer; heading; “We reply within one working day.”; one white pill; no second button; quieter footer with the promise **Work that earns the next project.**, email, nav mirror, legal, and the one disclosure (**Northway is a demonstration studio that ships with this template.**). The centred close is allowed, as Designer said. Do not add a waymark or a chip row that copies the Briefing beat for beat — a heading and a button are enough. Footer links stay cream-muted text, never a second pill.

---

## Rhythm checks (mirrored in CONVERSION.md)

A review fails the page if any of these is visible:

1. Two consecutive sections share the same head anatomy, or the “waymark + H2 + opposite link” pattern appears more than once.
2. Two consecutive sections share the same layout (same grid, or the same hairline list).
3. Any step number, index number, or monogram letter standing in for imagery.
4. A factual uppercase eyebrow outside the Briefing (except **TYPICAL** once on Grow, with the pine rule).
5. More than three primary-styled CTAs on Home, or a primary-styled control outside Briefing, Grow and the Pine Band, or two of those in one viewport.
6. Fewer than two Home layouts that are not a grid and not a repeating row list.
7. Outline pills used as proof, tags, or nav items. Pills are the primary only (and the white-on-pine equivalent).
8. The Kindred display result repeated verbatim on the peeking Excerpt.
9. The same named quote or testimonial appearing twice on a page (demo: Amira Mendez’s line is only on the peeking Excerpt on Home; it is not under the Price Tablet and not on the featured case).

Section padding is Designer’s variable set (80 / 120 / 176). Home must vary width or alignment at least twice (the pine bands already bleed; a featured case taller than its neighbours, a narrower reading measure, or an uneven process counts). Uniform full-width blocks with the same head and the same air is the v2 failure.

---

## Open with Designer

**No remaining conversion/visual fight.** The one clash Designer recorded — Amira Mendez’s quote on both the peeking Excerpt and as a pull quote under the Price Tablet — is closed in this pass: the quote lives **once, on the peeking Excerpt**; the Price Tablet keeps only the tax note; no testimonial appears twice on a page. After `PRINCIPLES.md`, `CRITIQUE-V2.md` and `BRAND-V2.md` landed (11:06–11:08 Europe/Stockholm), the two halves otherwise already agreed: no step or index numbers; editorial Case Ledger; Excerpt, not a monogram; limited eyebrows; varied section heads; white `#FFFFFF` / elevated `#E8E8E4` / no shadow; proof as a sentence; three named primary placements; Grow only uses “Start a project” on the Tablet; Strategy absorbs “Strategy your team can put to work”; nav CTA quiet with **no underline** while a pill is in view; featured Kindred does not repeat the display result.

Designer’s Coordination section was written before this file existed. There is nothing to list as a clash.

FYIs, not fights:

1. **Display sans.** We follow `DECISIONS-V2.md` (Bricolage; Mona is not used). Designer’s Open choices still lists both. No conversion impact.

2. **Demo disclosure.** We follow `DECISIONS-V2.md` as decided. Designer’s Open choices and PRINCIPLES still describe it as needing confirmation.

3. **Elevated grey is `#E8E8E4`.** Independently confirmed in this pass, agreeing with Designer: muted `#4C5550` on `#E8E8E4` **6.28:1**; input border `#636B66` on `#E8E8E4` **4.47:1** (floor 3:1, pass); pine focus ring `#1F3A2E` on `#E8E8E4` **10.04:1**. If a later brief picks a neighbour, re-check. Not pending.

4. **`DECISIONS-V2.md` still records the canvas as `#F2F2EF`.** Amos has inverted that. This file does not edit `DECISIONS-V2.md`.

Optional: Designer offered to set a more specific Pine Band heading than “Ready when you are.” A possible line is **A price before you start, a reply within a day.** Not a MUST.
