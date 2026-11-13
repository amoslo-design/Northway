# Northway — UX critique of Codex v1

**Proposal only.** 13 November 2026, Europe/Stockholm. For Amos to review before anything goes to GitHub. Does not change the repo, the Pages, or Designer's files.

Visual and brand treatment defers to Designer: [`/workspace/northway-v2/design/`](/workspace/northway-v2/design/). Read that folder first. This file is the conversion reading of the screenshot; Designer is critiquing the same build from the visual side.

Screenshot: [`/workspace/northway-v2/codex-v1-screenshot.png`](/workspace/northway-v2/codex-v1-screenshot.png) (2080×5570, full homepage). Every critique below is tied to what is visible there.

Hard rules this critique assumes are in [`CONVERSION.md`](CONVERSION.md).

---

## Summary

Codex v1 follows the IA and a lot of the brief, but it reads as a generic AI template: sparse equal columns, Sample badges on almost every block, and a slogan where a result should be.

The hero fails a ten-second test. The outcome sits in a small, disclaimed sidebar; the only large type is “Work that earns the next project.” — a line any studio could say.

Section rhythm repeats (heading, “See all →”, three hairline cards, a lone arrow), so nothing feels designed or memorable. Case and Insight cards look empty.

Pricing figures and the final inverse band are the only stronger moments, and even they are undercut by Sample chips and three identical ghost buttons.

Four sections need a signature moment, named to match Designer: the Briefing, the Case Ledger (and the case-page Outcome), the Price Tablet, and the Process Path.

---

## Designer first

As of 13 November 2026, 09:52 Europe/Stockholm, [`/workspace/northway-v2/design/`](/workspace/northway-v2/design/) holds [`NOTES-FOR-UX.md`](/workspace/northway-v2/design/NOTES-FOR-UX.md). Full tokens are still to land in `BRAND-V2.md`.

This critique aligns with that note wherever it already agrees: no Sample badges, no empty cards, one primary per view, secondary paths as text or as the work, proof near asks, a split Briefing rather than a centred stack, a ledger rather than three equal grey cards, a rate-sheet Price Tablet, a process that is not 01–04 equal columns, a Pine Band rather than a second black slab competing with the footer, one footer disclosure.

Type, colour, waymark, paper surfaces and exact layout are Designer’s. This file does not propose a palette or a font. Conflicts are in [Open with Designer](#open-with-designer), not resolved here.

---

## What the screenshot shows

A factual pass, so the critiques have a shared picture. Light grey canvas, near-black type, one yellow “Sample” chip as the only colour, plus a “Typical” chip on Grow.

| Region | What is on the page |
|---|---|
| Nav | Wordmark **Northway** left. Text links: Case studies, Services, About, Insights, Contact. **No primary CTA.** Hairline under the bar. |
| Hero, left | Yellow **Sample** chip. Body-size copy: “Sample result, for demo only: patients understood who the clinic was for, and how to book.” Attribution: “Kindred Clinic (sample).” |
| Hero, right | Display line: **“Work that earns the next project.”** Lede: “We are a strategy and growth consultancy. We help companies clarify their offer, shape their brand and build a marketing plan their team can run.” Quiet grey: “From $8,000. Prices excl. VAT/sales tax.” Two pills: filled **Start a project →**, outline **See case studies**. |
| Case Ledger | Heading **Selected case studies**, text link **See all case studies →**. Three equal columns, top and bottom hairlines. Each: sector · year, **Sample** chip, client name, the same “Sample result, for demo only:” prefix, a lone arrow in a tall empty middle. Kindred Clinic (Health · 2025), Holloway Advisors (Consulting · 2025), Eastport Kitchen (Hospitality · 2024). No images, and no typographic weight to make up for them. |
| Insights | Same pattern as the cases: heading, **See all insights →**, three equal hairline cards, **Sample** chips, dates, titles, one-line excerpts, lone arrows. Titles: “How we price a fixed project,” “What to brief a consultancy,” “Why we show the weeks.” |
| “Proof” | A paler band. Three lines: **Fixed price.** **Set timeline.** **A result we agree before we start.** Tiny caption: “Sample principles, editable.” |
| Price Tablet | Heading **Know the price before we talk.** **See all services →**. Three pale cards. All three have a **Sample** chip. Mid card (Grow) has a **Typical** chip and a slightly stronger edge. Prices are the strongest type in the section: $8,000 / 6 weeks, $16,000 / 10 weeks, $28,000 / 14 weeks. A one-line typical scenario at the foot of each card. Three identical outline pills, all **Start a project**. Tax note under the row. |
| Process | **How a project runs.** Four equal columns, 01–04, Intro / Plan / Strategy / Handover, short body, hairlines on 02–04. Caption: “Sample process, editable.” |
| Studio | **A studio built around the work.** Two sentences on usefulness after the presentation, then **About the studio →**. A large empty band around thin copy. |
| FAQ | **Before we start.** **More questions →**. Four accordion rows, each with a yellow **Sample** chip on the question and a plus. |
| Closing band | Full-bleed black. **Ready to start a project?** “Fixed price. Set timeline. A short enquiry.” One white pill, **Start a project →**. The cleanest moment on the page. |
| Footer | Black. Northway, the same slogan, `hello@northway.example`, nav mirror, © 2026 Northway, Privacy · Terms · Cookies. **No demo disclosure.** |

The bones of the IA are right. The writing under the Sample wrappers is often fine. The page fails on hierarchy, rhythm, honesty-as-chrome, and the absence of any moment you would remember.

---

## Critiques

Each item: the problem as seen, why it hurts conversion or a premium feel, and the fix. The fix is structural and content-level. Surfaces, type and motion are Designer’s.

### 1. The hero leads with a slogan; the result is a disclaimed sidebar

**Problem.** The only large type is “Work that earns the next project.” The approved lead — a specific result — is body-size, on the left, under a Sample chip, and opens with “Sample result, for demo only:”. The from-price is smaller still, in grey. Two pills sit side by side.

**Why it hurts.** NN/g: a visitor decides in about ten seconds whether to stay, and a homepage has to say who you are and what you do without making people guess. Headings have to be specific and useful; a line any studio could say has low information scent. The one concrete proof on the screen is visually the weakest element, and the prefix tells the visitor not to believe it. Twin pills split the ask. This is why the first screen feels like “generic AI slop” rather than a studio worth $149.

**Fix.** The Briefing (Designer’s name) must make a specific result — “Patients knew who the clinic was for, and booked a first visit from the site.” — the lead a visitor can get in one glance, attributed to Kindred Clinic, with one primary CTA and a from-price when prices are on. No Sample prefix, no second pill. The featured case can be the secondary path (Designer: the work itself, not a twin button). How this meets Designer’s “promise first, proof under the CTA” is [open](#open-with-designer); the conversion requirement is that the result leads, at a clearly larger scale than the lede.

### 2. Every section uses the same rhythm

**Problem.** After the hero, the page is a loop: a heading on the left, “See all … →” on the right, then three (or four) equal columns with a top hairline, a title, a thin line of body, and a small arrow. Cases, Insights, the principles band, Process, and even the FAQ’s stacked rules are the same idea at a different count.

**Why it hurts.** Premium sites have a rhythm — tight, then open, a full-width moment, a different kind of block. When every section is the same component, the page feels generated. Nothing earns a pause. A buyer on skala.design is being asked to pay for craft they cannot see.

**Fix.** Give four sections a distinct structure (see [Signature moments](#signature-moments)): a split Briefing, a Case Ledger of uneven rows, a Price Tablet that reads as a rate sheet, a Process Path with a spine and uneven step widths. Insights, studio and FAQ can be quieter, but they must not clone the ledger. Visual form is Designer’s; the conversion rule is that a visitor can tell the sections apart at a glance.

### 3. Case and Insight cards look empty

**Problem.** Each case is a top rule, meta, a Sample chip, a name, a prefixed one-line result, a large vacant middle, a lone arrow, and a bottom rule. Insights repeat the identical scaffold. There is no image, which is allowed — and also no typographic weight, no outcome at a distinctive scale, and no sense that the card is finished.

**Why it hurts.** Amos asked for cards that work without photos, not cards that look like unused slots. Empty-looking work is the opposite of proof. A consultant-buyer with no project photography will look at this and assume the kit cannot make text-first work feel premium. The floating arrow is a weak affordance in a void; the whole card is supposed to be the target.

**Fix.** Every ledger row is complete: client, a specific result at a readable lead size, sector and year. No vacant middle, no empty image frame, no Sample chip. Kindred stays imageless and must still feel like a finished row. Designer: text-first rows, a waymarked index, uneven rhythm, a still only when one exists.

### 4. Sample badges and builder notes destroy proof and a premium feel

**Problem.** A yellow Sample chip sits on the hero result, every case, every insight, every package and every FAQ question. Outcomes start “Sample result, for demo only:”. The principles band is captioned “Sample principles, editable.” Process is captioned “Sample process, editable.” Client names append “(sample).” Those yellow chips are the only colour on the page, so they become the identity by accident.

**Why it hurts.** Proof only works when it is credible and specific (NN/g, CXL). Labelling every piece of proof as fake, and leaking “editable” (a builder note) onto a public page, trains the visitor to distrust the site. It also looks like a scaffold, which is unsellable on skala.design. Honesty is required; this is the wrong place and the wrong dose.

**Fix.** Write the demo as a complete fictional studio (see `CONVERSION.md`). One footer disclosure, in Designer’s wording: “Northway is a demonstration studio that ships with this template.” Optional dismissible first-visit note, never covering the Briefing. No per-item badges, no “for demo only” prefixes, no “editable” captions. This is a proposed change from the earlier spec, for Amos to confirm.

### 5. The CTA system is unclear, and the nav is missing its ask

**Problem.** The nav has no **Start a project** — only a text Contact. The hero has two pills. The Price Tablet has three identical outline **Start a project** buttons, one per card, all the same quiet style. “See all … →” repeats as a pattern of exits. The closing black band is the first time a single primary sits alone and at a proper weight.

**Why it hurts.** Baymard: several similarly styled buttons cause hesitation; the primary needs unique styling, prominence and consistent placement. A visitor looking for the ask has to hunt, then is offered the same ask three times at once, weakly. The nav, where a returning or mid-page visitor expects the action, does not have it. The Price Tablet’s buttons also violate “one primary in view.”

**Fix.** One primary label sitewide, **Start a project**, always to `/contact`. One primary-styled control per viewport. Nav carries that CTA once the Briefing’s primary has scrolled away; while the Briefing CTA is on screen, the nav CTA is hidden or quiet (Designer’s invited call; this is the answer). Price Tablet: the recommended row (Grow) may have the one primary, to `/contact?service=grow`; other rows are text links or the row itself. No second hero pill. The Pine Band keeps a single primary — that part of v1 is right.

### 6. “Proof” is a principles strip, labelled as sample

**Problem.** The band between Insights and pricing is three studio slogans — “Fixed price. Set timeline. A result we agree before we start.” — and a caption that says they are sample and editable. There is no named client, no quote, no result.

**Why it hurts.** This is not proof. It is a feature list wearing a proof slot, then telling the visitor it is fictional. Principles belong on About. On Home, a proof slot that cannot show a result or a name should be omitted (no fake proof). The actual proof — the Kindred result, the case outcomes — has already been disclaimed higher up.

**Fix.** Put a specific result or named quote next to asks (Briefing, ledger row, Price Tablet, Pine Band), as Designer already wants. Drop this band. Do not replace it with a logo row.

### 7. Type hierarchy is flat, so the wrong things are loud

**Problem.** The slogan is the only display-size line on the page. The Kindred result, the from-price, package names and process outcomes all sit in a narrow mid range. Section titles (“Selected case studies,” “Insights,” “How a project runs.”) are close in weight to card titles. The prices ($8,000, $16,000, $28,000) are the one place scale is used well — and they sit a long way down.

**Why it hurts.** NN/g: hierarchy guides the eye in order of importance; if you cannot tell where to look, the layout has no hierarchy. Here the eye goes to a vague promise, skips the result, and only later finds the numbers that would actually help a B2B visitor (NN/g: price is a top information need). The page feels calm in a default way, not in a designed way.

**Fix.** A clear order: result (and, when prices are on, the from-price or the Price Tablet) outranks the slogan; package prices stay strong; section titles and meta stay quiet. Exact sizes are Designer’s (proposed Newsreader display, Hanken body at 18 / 1.55). Conversion only requires that a glance lands on outcome, price path and ask, in that kind of order.

### 8. Whitespace is sparse, not generous

**Problem.** Vertical padding is large, but the content does not fill the rooms it is given: vacant card middles, a studio section that is a heading and two sentences in a tall grey field, process steps with more rule than matter, a hero that is mostly unused canvas.

**Why it hurts.** Premium restraint is dense enough that every pause feels intended. This reads as a wireframe that was never finished — especially next to cards that already look empty. It lengthens the page without adding information, so the stronger moments (prices, closing CTA) arrive late.

**Fix.** Keep comfortable section spacing (the build spec’s 96 / 128 is a floor, not a look). Fill each section with finished content at a decisive scale, or shorten it. Designer owns density and the paper/pine surfaces that will do most of this work.

### 9. Several classic AI-template tells sit in plain sight

**Problem.** Together, not just as a list: Sample chips as the colour story; “for demo only” and “editable” on a public page; a slogan H1; three-then-three-then-three equal grids; lone arrows in empty cards; “A studio built around the work.” (circular, empty); FAQ questions badged as sample; perfect symmetry; no ownable device; builder meta leaking into the canvas.

**Why it hurts.** Amos’s brief was a site worthy of skala.design, not “the default output of a code model given a complete spec.” These tells are what a buyer will screenshot. They also fight the reference-board feel: calm, typographic, work-first craft — not a UI kit.

**Fix.** The signature moments below, the demo-writing bar in `CONVERSION.md`, and Designer’s waymark, type pairing and surfaces. No decorative icons on every heading (Designer: Phosphor only where an icon has a job; Lucide is itself a scaffold tell). No mesh, neon, logo marquee, or generated faces — already forbidden, and thankfully not in this screenshot.

### 10. Pricing is the strongest section, and it still looks like a SaaS card row

**Problem.** “Know the price before we talk.” is the best heading on the page — more specific than the hero. The figures, weeks, typical scenarios and the Typical mark on Grow are right. What’s wrong is the costume: three equal pale cards, Sample chips, and three identical ghost CTAs. What’s included is only a sentence; the comparison table is not on Home, which is fine, but the teaser does not yet feel like a studio tariff.

**Why it hurts.** Published fixed prices are a product difference for this kit (NN/g: state the price; show typical scenarios). If that difference is dressed as a generic pricing grid, the advantage is easy to miss, and the section blends into the same three-column rhythm as Cases and Insights.

**Fix.** Designer’s Price Tablet: a typed rate sheet, a pine rule on the recommended engagement (not a “Most popular” chip), name, scope, price, timeline, and one CTA on the row being chosen. Conversion rules: prices visible, Grow anchored with a non-colour cue, what’s included or a typical scenario on the row, tax note, one primary path to `/contact?service=`.

### 11. Process is a numbered row, not a path

**Problem.** Four equal columns, 01–04, a hairline, a title, two lines, and “Sample process, editable.” The steps themselves (Intro, Plan, Strategy, Handover) and their copy are reasonable.

**Why it hurts.** A process exists to lower risk: the visitor should see a journey and an outcome per step. Equal columns with no progression look like a feature grid. The “editable” caption again leaks the kit.

**Fix.** Designer’s Process Path: a spine of waymarks, uneven step widths (more room for the decisive step), a short outcome per step, no decorative icons. Four steps in the demo. Reduced motion: all steps in the final pose in the first HTML.

---

## Signature moments

Four home (and case-page) moments that should be memorable, on-brand, and distinct from each other. Names match Designer so they map 1:1. Visual treatment is Designer’s. Every moment stays inside: reduced motion settles in the **final pose** in the server HTML; WCAG 2.2 AA; 44px targets; semantic tokens only; no autoplay; no height/width/left animation; hover translate at most 8px and only on fine pointers.

Designer also treats the **Enquiry Sheet** and the **Pine Band** as signature. That is aligned, not a fifth competing request: the Pine Band is already the strongest close in v1 and should stay a single, quiet ask; the Enquiry Sheet is the conversion endpoint (four fields, reply-time in a real sentence, **Send the brief**, one primary). Their look is in `NOTES-FOR-UX.md`.

### 1. The Briefing (hero)

The first viewport is a split briefing, left-weighted, never a centred stack, never a three-card row. A specific result from a named case is the thing a visitor can recall after ten seconds; a short supporting line names who it is for; a from-price shows when prices are on; **one** primary CTA (**Start a project**). The featured case — client, one-line result, optional photograph — is the secondary path, not a second pill. If there is no image, the right side stays a finished typographic case, with no empty frame. Under reduced motion, the result is already in its final pose; there is no count-up and no hidden-then-revealed line. (Reading order vs Designer’s “promise first” is [open](#open-with-designer).)

### 2. The Case Ledger, and the case-page Outcome

On Home, selected work is a ledger of uneven, text-first rows — not three equal grey cards. Each row: client, a specific result, sector, year, optional still. Four fully written cases; Kindred has no image and still holds. “See all” is a text link.

On `/case-studies/[slug]`, the product of the kit is the **Outcome** at the top: the one-line result at display or H1 scale, then client, sector and the agreed goal. Challenge, Approach and Results follow as a reading path. An image block only after Results, and only if it exists. Reduced motion: the outcome is visible on first paint, not staged in.

### 3. The Price Tablet

Published fixed prices, presented as a studio tariff, not a SaaS plan row. Each engagement: name, scope in sentences, what’s included or a typical scenario, price, weeks. Grow is recommended, marked with a non-colour cue (Designer: a pine rule, not a “Most popular” chip). One primary CTA, on the row being chosen. Tax note visible. When `showPrices` is off, weeks and scenarios stay; prices go; the sheet still holds. This is a conversion signature (NN/g: state the price; show typical cases) as much as a visual one.

### 4. The Process Path

How a project runs is a path: Intro, Plan, Strategy, Handover, each with a short outcome (“You leave the Intro knowing the price and the weeks”). A spine, uneven widths, more room for the decisive step. Not 01–04 equal columns, not decorative icons. All four steps are visible in the final pose under reduced motion; no autoplay along the spine.

---

## Open with Designer

The same list as `CONVERSION.md`, stated from this critique. Do not implement a choice until it is closed.

1. **Briefing reading order.** This critique, the locked Amos decision, and the ten-second principle want the result to lead at a larger scale than the lede. Designer’s Briefing leads on the Newsreader promise (“Work that earns the next project.” still holds) and puts the result under the CTA, with a featured case on the right. Needs a shared Briefing.
2. **The slogan as display type.** Conversion reading treats it as a weak lead (a line any studio could say). It can stay as a footer promise. Designer currently keeps it as the display line.
3. **From-price in the first viewport.** Visible in the screenshot but almost whispered. This critique wants it readable in the first screen when prices are on. Designer’s Briefing note does not place it.
4. **Photographs in the Briefing and Ledger.** Designer describes a featured-case photograph and stills on rows. Kindred — and any buyer case without photography — must work with no image and no empty frame.
5. **Empty destination pages.** Designer: “do not ship a designed empty.” This critique: no fake grids, no empty cards; a short honest empty (or hide-and-redirect) on `/case-studies` if a buyer has zero projects.
6. **“Numbered results.”** Concrete story figures, yes. Invented percentage lifts, no. A large Briefing metric has to be one of the honest figures.
7. **Tokens, type and motion.** Newsreader / Hanken, pine, copper waymark, paper, Pine Band (not a second black footer — v1’s inverse close should move to that band), body at 18 / 1.55, Phosphor icons, motion: all Designer’s. If a later `BRAND-V2.md` fights a conversion MUST, list it rather than improvising.

A known tension with the older [reference board](/workspace/template-refs/REFERENCE-BOARD.md), not with the current design folder: that board treated photography as proof. Amos locked text-first cases with optional images, for an audience that often has no project photography. The Ledger and Briefing have to feel premium in type. Designer is already writing them that way; this is a reminder, not a disagreement.
