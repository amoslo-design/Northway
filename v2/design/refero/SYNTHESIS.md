# Northway v3: Refero synthesis and reference lock

Written 13 November 2026, Europe/Stockholm, from six full Refero style guides and their preview keyframes. This is the lock Codex should build against. It does not change any v3 decision in `DECISIONS-V2.md` or `design/BRAND-V2.md`. Where a reference conflicts with a locked decision, the lock wins, and the conflict is listed as a question at the end rather than a change.

**Tokens already locked (do not reopen):**

- Canvas `#FFFFFF`. Elevated `#E8E8E4`. No drop shadows. Optional hairline `#C8C8C3`. Hover fill `#E3E3DF`.
- Pine bands `#1F3A2E` with 6% grain: the Briefing and the Pine Band, continuous with the footer.
- Ink `#18221D`. Muted `#4C5550`. Cream `#F7F7F4` on pine.
- Display: Bricolage Grotesque 500 (600 on the Briefing result). Body and UI: Hanken Grotesk. No serif. Mona Sans is not used.
- No numbering anywhere. No monogram. Each quote once per page. Uppercase eyebrow only in the hero (plus "TYPICAL" on Grow, once).
- At most three primary "Start a project" CTAs on Home: hero, Grow, Pine Band. Pine Band heading stays **"Ready when you are."**
- Radius: 0 on bands and photographs; 8 on inputs (or a quieter Excerpt); 12 on the Price Tablet, Enquiry Sheet, Excerpt and Strategy panel; 999 on the **primary button only**.
- Nav 68px, sticky. Body 18 / 1.55, locked. Content max 1280, measure 66ch.

**How to use a reference.** Take craft (spacing, type scale feel, layout move, surface rule). Translate it into the tokens above. Do not copy palettes, typefaces, wordmarks, photography, signature graphics or source copy. Do not average the six styles into a safe middle.

Refero's screen-search library did not return these studio or advisory sites (queries came back as unrelated SaaS product UIs). Visual evidence is therefore the style preview keyframes in `design/refero/<site>/`, plus the observed section recipes in each `*-style.md`. Every measurement below is from those guides or from v3 docs.

---

## Reference lock

```text
Primary reference/direction: Displace Agency (fe0ac316-3a0e-4041-9da6-39c05efe2d59)
Preserve: white reading canvas; one concentrated deep-colour invitation band; elevation by flat fill, not shadow; regular-to-medium grotesk display at real size; a substantial close rather than a legal strip; proof as a short contextual sentence
Borrow only from Munro Partners: ledger discipline at reading size; open field beside substance; "we" writing without hype; utility-then-deep-band ending
Borrow only from V-A-C: 150px-class intervals between quiet entries; bare "see all" at the end of a list; titles allowed to run to their real length
Borrow only from Walden: unboxed text organised by a 1px top rule; 136px-class breathing room around a closing thought
Borrow only from Extract Studio: capabilities as a ruled editorial ledger, not icon cards; a truthful live or reply-time line in the close; "View all" as underlined text
Borrow only from Domaine: ruled testimonial (left edge, 40px inset, modest quote, named attribution, max-width about 544px); direct inquiry as a spare form with reply or privacy text above or below; one large statement beside quieter work
Reject: anyone's typefaces, palettes, wordmarks and photography; rainbow shelves and capability mosaics; outline chips and pill tags; numbered process or ledger indexes; four equal columns; three identical project cards; monograms; repeated section heads; a second appearance of the same quote; drop shadows; serif display; generic slogans; floating glass navigation; black closings (ours is pine)
Token commitments: canvas #FFFFFF; elevated #E8E8E4; band #1F3A2E; ink #18221D; muted #4C5550; cream #F7F7F4; shadow none; radius 8/12/999 as locked; Bricolage + Hanken; primary pill only on the one CTA
```

### Role of each style

| Style | UUID | Job on this build |
| --- | --- | --- |
| [Displace](https://displace.agency) `fe0ac316-3a0e-4041-9da6-39c05efe2d59` | Primary | White canvas, one green invitation, flat grey offer surfaces (`#ededed`, no shadow), quote with a left tick, substantial close with a real reply-time sentence. Full guide: `displace-style.md`. |
| [Munro Partners](https://munropartners.com) `83fcbacf-7eb7-49ce-b7f8-07f5f6f4d3e3` | Ledger and voice | Facts at body size, ruled rows, open field, continuous deep-colour disclosure band. Do not copy oat canvas or the colourful shelf. `munro-partners-style.md`. |
| [Walden](https://walden.us) `c6f2c718-4cef-4e20-bc4b-448ea995a50c` | Quiet structure | Unboxed proof, 40px gutters, 68px editorial padding, 136px closing breath. Do not copy a photo hero or numbered process markers. `walden-style.md`. |
| [V-A-C Foundation](https://v-a-c.org) `f8a0de9f-438a-442f-b7d4-5e48e977be96` | Quiet lists | 150px intervals, unboxed entries, continuation at the end, shallow utility footer. Do not copy the wired masthead. `vac-style.md`. |
| [Extract Studio](https://extract.studio) `4cb9b719-ff16-4db4-9fcb-b0ad5eba8fd6` | Studio close and ledgers | Ruled capabilities ledger, pale supporting band, closing panel with contact and a clock or availability line. Do not copy the serif, the billboard wordmark, or the floating bottom nav. `extract-style.md`. |
| [Domaine](https://domaineworldwide.com) `693a3f91-ffb5-4c8c-9d7b-b28a32402c5f` | Quote and enquiry craft | Ruled testimonial measurements; spare inquiry form (140px top padding, 640px measure, paired fields); a large statement beside a work list. Do not copy mint headlines, lime proof cards, or the black close. `domaine-style.md`. |

---

## Type scale (locked, informed by the references)

Do not change the BRAND-V2 scale. The table records how the references support it, and where they differ (those differences are not invitations to reopen the lock).

| Role | Locked Northway | Closest Refero craft | Note |
| --- | --- | --- | --- |
| Display / Briefing result | Bricolage **600**, 56 / 1.08 (desktop), **64 / 1.06** (wide), tracking -0.03em | Displace 64px/62px Suisse 400, tracking -0.045em. Munro 68px/1, weight 400, normal tracking. Domaine 48px/1, 400, -0.04em. | Keep 600 and -0.03em as locked. The lesson is size and tightness, not a weight change. See Questions. |
| Display, short (Pine Band, short H1) | Bricolage **500**, 68-80 / 1.04-1.06, -0.03em | Displace heading 48px/1, -0.04em. Extract closing invitation is a 104px serif ticker (do not copy the serif or the ticker). | Keep Bricolage 500. Pine Band heading is "Ready when you are." at this role. |
| Heading 1 | Bricolage 500, 48-52 / 1.10-1.12, -0.02em | Munro heading-lg 43px/1.05. Walden heading 32px/1.1. | Use for case-page Outcome and a featured client name if it needs more presence than H2. |
| Heading 2 | Hanken 500, **32 / 1.20**, -0.015em | Displace editorial-lead 32px/1.1. Walden heading 32. | Good size for the Excerpt quote (BRAND allows lead or Heading 2, in Bricolage 500). Prefer **Bricolage 500 at 32 / 1.20** for the Excerpt, which sits inside the locked range. |
| Heading 3 | Hanken 500 or Bricolage 500, **24 / 1.28** | Munro principle-heading 22px/31px. Process names live here. | Process: names only, no numerals. |
| Lead | Hanken 400, **20 / 1.45** | Displace support 16px/21px. Extract body 21/1.5. | Keep 20 on the Briefing lede, measure about 36-42ch, centred on the band. |
| Quote | Bricolage 500 (Excerpt) or Hanken 400 italic, **24 / 1.35** | Displace editorial note: 32px quote, two-line attribution, 960px measure, 80px left padding, 120px vertical. Domaine ruled testimonial: 18px/1.2, max-width 544px, 40px left padding, 1px left rule. | For the hero Excerpt, prefer the Displace scale (32px, generous padding) on `#E8E8E4`. For a quieter quote elsewhere, Domaine's 18-24px and 544px measure. One quote per page, so Home uses only the Excerpt. |
| Body | Hanken 400, **18 / 1.55**, every breakpoint, 66ch | Munro 16px/1.5. Displace 16/21. Extract 21/1.5. Domaine 14-18. | Keep **18**. Do not shrink ledgers to 16 to make a table fit; restack on small screens (Munro's own responsive note). |
| Meta / eyebrow | Bricolage 500, 12-13 / 1.30 / 0.10em, uppercase | Munro 14px uppercase labels. | **Once**: the Briefing attribution. "TYPICAL" on Grow, once. Nowhere else. |
| Caption | Hanken 400, 14 / 1.40 | Walden 13.5px, 16px below media. VAC 20px metadata. Displace 12px captions. | Sector and year: "Health, 2025." Sentence case. |
| From-price | Hanken 500, 16 / 1.4, cream on pine | Displace 28px starting-price line (larger than ours). | Keep 16, in the CTA cluster, linked to `#price-tablet`. |
| Button | Hanken 500, 16 / 1, in 44 (md) or 52 (lg) | Displace 36px high, 13px labels, 3px corners. Walden 52px, 2px corners. Domaine closing action 480px wide, 16px. | Primary is a **pine or white pill**, 44 or 52 tall, as locked. Secondary actions are **text**, underlined, Hanken 500, not ghost pills. |

---

## Spacing and surface ladder (locked tokens, Refero measurements applied)

Section spacing stays the BRAND-V2 8pt scale: `space.hero.top` 192 desktop, `space.section.sm` 80, `space.section` 120, `space.section.lg` 176. Gutter 16 / 24 / 24. Grid 12 columns from 768. Content max 1280.

Apply these reference measurements **inside** those tokens, translated to Northway surfaces:

| Token or object | Use | Source |
| --- | --- | --- |
| Page gutter | 24px desktop (already in BRAND). Nearly full-width bands; inner content 1280. | Displace 28.8px edge-led; Munro and VAC 20px; Walden 40px. 24 is the lock, between those. |
| List item gap | 24-40px of vertical space instead of hairlines between quiet Case Ledger rows. A single rule under the last entry is allowed. | BRAND already prefers 24-40. V-A-C uses 150px between editorial rows: use the larger end (40px) on Home quiet rows; on `/case-studies` a more generous 64-80px interval is allowed without a new token. |
| Excerpt padding | 32-40px inside the grey panel; optional 3-4px pine tick on the left, short, once; 40-64px overlap of the white page. | Displace quote: 80px left, 120px vertical, 1px graphite rule, 960px measure. Domaine testimonial: 15px 0 15px 40px, 1px left rule, max-width 544px. Translate: grey `#E8E8E4`, radius 8 or 12, **no shadow**, Bricolage 500 at 32, attribution in Hanken 400 muted, tick not a full-height bar. |
| Price Tablet | One grey sheet, radius 12, 24-32px inner padding, 24-40px between rows. Pine 4px rule and "TYPICAL" on Grow only. | Munro ledger: 16px values, 1px rules, footnotes for conditions. Displace detailed offer: ruled scope and price, flat grey promise panel, no floating cards. |
| Process | One 2px pine spine. Strategy in a grey panel (radius 12, 24-32px padding), visually larger. The other three: name + short outcome, more air than a grid cell. | Munro principles: 22px title, 16px body, fine borders. Walden: unboxed columns, 1px top rule, **but numbered markers: reject the numbers**. V-A-C: spine ends at the last entry. |
| Pine Band inner padding | About 90-105px top, generous bottom, heading measure around 720px. | Displace green invitation: 90px vertical, about 382px tall, 48px statement. Displace closing: 105px top, 720px headline measure. |
| Enquiry | Grey sheet, radius 12, optional 4px pine left tick once. 44px **white** inputs. Reply-time above the fields. | Displace close: "We reply within 2 working hours, Monday to Friday, 9:00 to 18:00 Madrid." Domaine inquiry: 140px top, 60px bottom, 640px form, paired 47px fields, 105px textarea. Extract close: a clock and availability line. Translate reply-time into Northway's real sentence, not their hours. |
| Footer | Same pine as the Pine Band, cream hairline at about 20% opacity between them. Quiet links, disclosure in cream-muted caption. | Munro 353px-class deep legal band after a utility close. V-A-C 212px grey band (take quietness, not the grey). Walden: no second promotional banner in the legal area. |

Surfaces: canvas white, elevated grey, bands pine. **No drop shadow.** Displace's offer cards are `background: #ededed; border-radius: 3px; box-shadow: none` ("Use flat fill rather than elevation"). Ours are `#E8E8E4` at radius 12, same idea, locked values. Do not wrap quiet rows, insights or FAQ in panels.

---

## Section mapping

Home order (locked): Briefing, Case Ledger, Insights teaser (omit if empty), Price Tablet, Process Path, Studio short, FAQ short, Pine Band, Footer.

### Nav

- **Locked:** 68px, sticky. On the Briefing: solid pine, cream wordmark and links, primary reduced to quiet cream text with **no underline**. After the band: solid white, ink links, pine pill. No frosted glass. Waymark only on the wordmark and the current nav item.
- **Take:** Quiet chrome. Extract and Displace float a search or index over the page; **do not copy that**. Walden's compact architectural actions (2px corners) inform secondary controls only.
- **Images:** `walden/00-hero-forest.jpg` (top bar, quiet). `extract/00-hero-billboard.jpg` shows a floating bottom index: a useful "do not copy."
- **Do not copy:** Glass toolbars, 40px translucent search rows, persistent "Talk to us" launchers, a bottom-centred pill dock.

### The Briefing (hero)

- **Locked:** Full-bleed pine, 6% grain, centred. Optional uppercase attribution once; Kindred result in Bricolage 600 at 56/64, cream, 16-22ch; lede 20 / 1.45, 36-42ch; proof as one cream-muted sentence (no chips); one white pill, "Start a project"; from-price 16 / 500 cream, linked to `#price-tablet`; peeking Excerpt (quote, not a monogram) overlapping white by 40-64px, not restating the display line.
- **Take from Munro** (`munro-partners/00-hero-landscape.jpg`): one concise promise, regular-to-medium display, **no second pill, no chip row, no slogan stack**. Proof may continue below, but we still keep from-price and one CTA in the first viewport (locked).
- **Take from Walden** (`walden/00-hero-forest.jpg`): one action, reserved space for copy, support at a narrower measure than the title. Do not replace the pine band with a photograph.
- **Take from Displace** (recipe "Cinematic promise opening", and `displace/00-hero-display.jpg` for display size): regular-weight-feeling display at real size, proof as a sentence, actions visible before the fold. Do not use a name-as-billboard, a laptop mockup, or a dark media hero on Home.
- **Take from Extract** (`extract/00-hero-billboard.jpg`, as a negative): its "Avoid" list matches us: no centred SaaS headline with two pills and a gradient. Do not copy the serif proposition or the billboard wordmark.
- **Excerpt (peeking):** see Quotes below. The panel is `#E8E8E4`, no shadow, named quote.

### Quotes and the Excerpt

- **Locked:** Grey panel, radius 8 or 12, no monogram, optional short 3-4px pine tick once, named client, caption in sentence case. Each quote once per page. Preferred in the peeking Briefing slot and for a featured no-image case.
- **Primary take: Displace** (`displace/05-quote-excerpt.jpg` and recipe "Editorial note and specifications"). Observed: short left hairline, display-size quote, two-line attribution ("Displace", "Studio note"), large empty field. Recipe: 960px measure, 1px left rule, 80px left padding, 32px quote, 120px vertical padding. "A quote is not a testimonial unless attributed accordingly."
- **Secondary take: Domaine** component "Ruled testimonial": `border-left: 1px solid #000000; padding: 15px 0 15px 40px; max-width: 544px`. Quote first, grey attribution below. "Let the thin rule and modest quote size do the work instead of decorative quotation graphics."
- **Translate:** `#E8E8E4` fill, ink quote in Bricolage 500 at 32 / 1.20, Hanken 400 muted attribution, pine tick (3-4px, short) instead of a 1px black full-height rule, radius 8 or 12, no shadow. A named client, not "Studio note."
- **Do not copy:** The black full-bleed around the Displace quote (this frame is a case-study stage). The Services/Features **chip rows** under that quote. Domaine's lime/green proof cards. Extract's "Testimonial paper stack" shadow (the style itself says not to spread that shadow). A second use of the same Kindred line.

### The Case Ledger

- **Locked:** Featured Kindred as an editorial Excerpt (or a still) beside or above a larger client name and a **companion** line, not the hero sentence. Other cases: quieter text entries, uneven measure, space instead of hairlines, caption "Consulting, 2025." "See all case studies" at the **end**, as a text link. No indexes, no row waymarks, no row eyebrows.
- **Take from V-A-C** (`vac/00-editorial-opening.jpg`, `vac/04-load-more-and-footer.jpg`): intervals instead of card chrome; titles wrap to real length; a bare continuation at the end; no shadows. Use this quietness for the secondary entries. The three-column **picture** grid is for a case-studies **index**, not for the Home featured treatment.
- **Take from Munro** (`munro-partners/01-orientation-ruled-facts.jpg`): a split (substance or media beside an open field); facts at body size. `02-ledger-rows.jpg` shows reading-size rows and "See more" at the end. **Do not copy that uniform hairline table as the Home Ledger** (it is the tell v3 rejected). Use it only as the craft of captions, end-of-list links, and reading-size evidence.
- **Take from Domaine** (`domaine/00-projects-statement.jpg`): a large statement on one side, work below or beside, not a heading-left / three-equal-cards pattern. Translate the statement into Northway's Case Ledger heading and one dek, left-weighted (the left/right head may be used at most once on the page; if used here, do not repeat it on Price or Process).
- **Take from Displace** (recipe "Case-study gallery chapter"): "Choose the arrangement that suits the material rather than repeating one card layout." Featured is large and editorial; the next cases must not repeat it. `06-related-projects.jpg` is a three-column portrait row: fine as a case-page "related" exit, **not** the Home Ledger.
- **Take from Extract** (`extract/02-project-tiles.jpg`, `03-work-and-editorial-bridge.jpg`): captions outside the image, 74px-class row gaps, "View all" as underlined text. Do not use two equal image tiles as the only Home work section.
- **Do not copy:** Munro's colourful resource shelf (`03-editorial-shelf-do-not-copy-colours.jpg`). Walden's equal product trio (`walden/02-product-trio.jpg`). Category badges. Anyone's photography as a requirement (Kindred ships as a quote).

### Insights teaser

- Omit when empty. If present: a quiet text list on white, not a second hairline index, not a card grid. "See all" at the end. Heading pattern must differ from the Case Ledger if that used heading-left / link-right.

### The Price Tablet

- **Locked:** One grey `#E8E8E4` sheet, radius 12, no shadow. Position, Grow (typical), Brand + growth. Grow has a 4px pine rule and "TYPICAL" once, and the only "Start a project" in this section (`/contact?service=grow`). Heading: "Know the price before we talk." "See all services" at the end if present. No Kindred quote here if it already lives in the Excerpt.
- **Take from Munro** (`01-orientation-ruled-facts.jpg`, `02-ledger-rows.jpg`): comparable figures in a sheet, values at reading size (18px for us), a footnote for conditions (tax note), not three plan-cards, not giant numerals.
- **Take from Displace** (recipe "Detailed offer chapter"): ruled scope and price rows beside a flat grey promise; thin rules rather than floating cards. Do not copy the 216px single-word chapter heading.
- **Take from Extract** (recipe "Capabilities ledger"): "Present related product capabilities as an editorial index, not a wall of icon cards."
- **Do not copy:** SaaS toggles, outline "Most popular" chips, three equal price cards.

### The Process Path

- **Locked:** Intro, Plan, Strategy, Handover. Names only, Hanken or Bricolage 500 at Heading 3 (24px). One continuous 2px pine spine, ending with Handover (V-A-C: the spine terminates at the final entry). **Uneven widths.** Strategy is a grey elevated panel and absorbs "Strategy your team can put to work," so there is no separate Strategy card. No numerals, no "Step," no waymark on every stage. No primary CTA in this section.
- **Take from Munro** (recipe "Statement and principles"): a short page-width statement, then named stages with compact 22px-class titles and body descriptions, fine dividers, not boxes.
- **Take from Walden** (recipe "Three-step reassurance"): unboxed columns organised by a top rule; names as subheadings. **Reject** "small dark circular numbered markers."
- **Take from V-A-C** (recipe "Dashed chronology"): one spine that stops with the content, then white before the next chapter. Reject dashed museum leaders and dates as a second index.
- **Honesty:** no Refero keyframe in this set shows a four-stage path without numbers. Build from the recipes and the v3 lock, not from a guessed screenshot.
- **Do not copy:** Equal 335px columns. Numbered markers. Colourful icon discs. A second Strategy highlight band.

### Studio short and FAQ

- On white, left-weighted heading, no waymark. FAQ as closed disclosure rows (Displace: "Do not expose every FAQ answer by default"). Not a card grid. Must not reuse the previous section's head or layout.

### The Enquiry Sheet (and the Contact page)

- **Locked:** Grey letter-panel, radius 12, no shadow, optional 4px pine left tick once. Reply-time above four fields. 44px white inputs. Submit is **"Send the brief"** as a pine pill. Direct email beside or under. Same behaviour as CONVERSION.md.
- **Take from Displace** (`displace/07-closing-form-footer.jpg`): a real reply-time sentence, "this is not a newsletter signup" honesty, a narrow supporting column, the right side left open. Translate hours into Northway's actual reply-time.
- **Take from Domaine** (recipe "Direct inquiry", and `domaine/01-closing-invitation-form.jpg` for the close): 140px-class top padding, about 640px form measure, paired short fields then full-width, privacy text, a spare two-column construction. **Do not** use an uppercase "SUBMIT" or a 24px uppercase prompt (eyebrow only in the hero). The submit label stays "Send the brief."
- **Take from Extract** (`extract/05-closing-form-invitation.jpg`): contact details and a truthful availability or reply-time line at a much smaller scale than the invitation. Do not copy the serif ticker ("Want to work together?") or the floating index over the form.
- **Do not copy:** Newsletter-as-the-main-ask (our primary is "Start a project" / "Send the brief"). Black or charcoal field fills (ours are white inputs on grey). 3px corners on the sheet (ours is 12).

### The Pine Band

- **Locked:** Full-bleed pine, 6% grain, cream type, continuous with the footer. Heading **"Ready when you are."** Supporting line: reply-time or from-price, Hanken lead, cream-muted. One white pill, "Start a project." No second button. **No floating cream waymark** above the heading.
- **Take from Displace** (recipe "Green invitation"): a concentrated coloured interval, 90px-class vertical padding, 48px-class statement on one side, support on the other, one primary, "explicit practical conditions, not a generic slogan." The heading is already chosen; the support line carries the condition (reply-time or from-price).
- **Take from Displace closing and Domaine** (`displace/07-closing-form-footer.jpg`, `domaine/01-closing-invitation-form.jpg`): 105px-class top padding, a wide measure for the statement, breathing room on the trailing side. Translate their **black** ending into **pine**.
- **Take from Munro** (`munro-partners/04-closing-utility.jpg`, `05-legal-band.jpg`): left invitation / right utility as a model for Band-then-footer; a deep-colour band that carries disclosure. Do not copy teal, or a wall of legal prose (one honest footer sentence is enough).
- **Take from Walden** (recipe "Open-line ending"): no second promotional banner in the legal area; 136px-class breath around the thought. Do not drop the Pine Band in favour of a white-only close.
- **Do not copy:** Extract's moving serif ticker. Rainbow cards above the close. Translucent reassurance chips on the band. A 480px arrow button (ours is the white pill, 44 or 52 tall).

### Footer

- **Locked:** Same pine, quieter. Wordmark (waymark allowed, reserved). Old slogan at lead size, nav mirror, email, legal, copyright, disclosure: "Northway is a demonstration studio that ships with this template."
- **Take from V-A-C** (`vac/04-load-more-and-footer.jpg`): four quiet groups, no campaign slogan, space above the band.
- **Take from Walden** (`walden/06-footer-utility.jpg`): links that look like links, unused space, no second primary.
- **Take from Extract** (`extract/05-closing-form-invitation.jpg`): small contact and policy columns under a large invitation (the invitation is the Pine Band, not a second slogan here).
- **Do not copy:** Grey or cream footers, a black CTA slab, Munro's dense legal essay as a visual feature.

### Case study page

- **Locked:** Outcome (Bricolage H1), Challenge, Approach, Results, optional image after Results. Stills in the Excerpt panel at 3:2. No numbering.
- **Take from Displace** (`03-case-opening.jpg`, `04-case-gallery.jpg`, recipes "Case-study gallery" and "Case-study exit"): explain a decision, then show it; alternate arrangements; a quiet exit to a related case or to contact. The quote treatment may appear here only if it is **not** the same quote as the Home Excerpt.
- **Take from Extract** (recipe "Case-study context and exhibit sequence"): narrative on one side, compact metadata on the other; only enough exhibits to prove the work.
- **Do not copy:** Source client names, photographs, or "related projects" that are not Northway cases.

---

## Motion (do last)

Follow `design/MOTION.md`. Refero notes that support it: Munro state changes at 0.1-0.2s, opacity and fill; Displace 0.8s only for a specific nav layer (do not import that delay site-wide). Walden and V-A-C keep motion subordinate to type. Honour `prefers-reduced-motion`. No staggered fade-up on every block.

---

## Image index

All images are Refero style preview keyframes (images.refero.design), named for the section they show. There is no separate component-photograph set in the style API: colour, type, components and CSS live in the `*-style.md` files; the frames show those components in use.

| File | Shows | Use for |
| --- | --- | --- |
| `displace/00-hero-display.jpg` | Large regular display on a dark media stage | Display size, not a Home photo hero |
| `displace/05-quote-excerpt.jpg` | Left hairline, named quote, space | The Excerpt |
| `displace/06-related-projects.jpg` | Three project portraits, small captions | Case-page related work only, not Home |
| `displace/07-closing-form-footer.jpg` | Reply-time, email field, open right side | Enquiry and Pine Band breath |
| `munro-partners/00-hero-landscape.jpg` | One promise, no CTA cluster | Hero craft (not scenery) |
| `munro-partners/01-orientation-ruled-facts.jpg` | Split, 16px facts, footnote | Price Tablet and splits |
| `munro-partners/02-ledger-rows.jpg` | Reading-size rows, "See more" at the end | Evidence size; not Home Ledger rhythm |
| `munro-partners/03-editorial-shelf-do-not-copy-colours.jpg` | Four colourful cards | Negative example |
| `munro-partners/04-closing-utility.jpg` | Left form, right sitemap | Band-to-footer asymmetry |
| `munro-partners/05-legal-band.jpg` | Deep-colour disclosure band | Continuous pine close |
| `walden/00-hero-forest.jpg` | One action, reserved copy | Hero craft (not a photo Briefing) |
| `walden/06-footer-utility.jpg` | Underlined email, four link groups | Quiet footer |
| `vac/00-editorial-opening.jpg` | Unboxed rows, 150px intervals | Quiet Case Ledger entries |
| `vac/04-load-more-and-footer.jpg` | Bare continuation, grey utility | "See all" at the end |
| `extract/00-hero-billboard.jpg` | Billboard identity, half-width proposition | Negative (serif, floating nav) and open right field |
| `extract/03-work-and-editorial-bridge.jpg` | Captions outside images, a text pause | Work captions, section variety |
| `extract/04-green-updates-band.jpg` | Pale supporting band, "View all" | Insights only if needed; not a Home colour slab |
| `extract/05-closing-form-invitation.jpg` | Form, contacts, availability, monumental question | Enquiry + close (translate to pine, keep our heading) |
| `domaine/00-projects-statement.jpg` | Large statement beside projects | Case Ledger opening variety |
| `domaine/01-closing-invitation-form.jpg` | Statement, wide action, form, footer | Pine Band + Enquiry craft (not black) |

Other frames in each folder (`displace/01` through `04`, Walden product stills, V-A-C middle rows, Extract profiles) are included as complete preview sets. They are secondary.

---

## Conflicts and questions (do not resolve these by changing a lock)

Flag only. Leave the locked decision in place unless Amos answers.

1. **Display weight.** Displace, Munro, Walden, Domaine and Extract all set large headlines at weight 400. Northway locks Bricolage **600** on the Briefing result and **500** elsewhere. Recommendation: keep the lock. 600 on a pine band, at 64, is the approved presence. Do not lighten it to 400 to "match Refero."
2. **Hero CTA count.** Munro, V-A-C and Extract open with no primary button (or only a floating index). Northway locks **one** "Start a project" in the Briefing, plus the from-price. Keep the one CTA. The useful lesson is "not two."
3. **Body size.** Several references use 16px body. Northway locks **18 / 1.55**. Keep 18.
4. **Corner and pill language.** References prefer 2-3px rectangular actions and almost no pills. Northway locks a **pill for the one primary** and 8/12 on panels. Keep that. All secondary actions stay text, which already agrees with Extract and V-A-C.
5. **Closing ground.** Displace, Extract and Domaine close on near-black. Northway locks a **pine** close, continuous with the footer. Keep pine. Take padding, measure and honesty of reply-time, not the black fill.
6. **Process numerals.** Munro allows a 30px numbered marker. Walden places numbered circles on process columns. v3 bans all numbering. Keep the ban. This is not a question; it is a recorded conflict with those two recipes.
7. **Heading-left / link-right.** Extract and Munro use "label left, View all right" often. Northway allows that pattern **at most once** per page. If used, use it on one section only (suggested: Case Ledger or Insights, not both, and not on Price or Process).
8. **Serif.** Extract's Feature Deck statements are central to that style. Northway locks **no serif**. Do not introduce Instrument Serif or any serif "for premium."
9. **Photography dependence.** Walden, Extract, Domaine and Displace are image-led. Northway must work without photographs (Kindred ships as a quote). The Excerpt is the locked no-image treatment. Do not leave empty frames.
10. **Open question for Amos, only if he wants to revisit (default is no):** should the Excerpt quote sit at 32px (Displace, recommended, still inside BRAND's "lead or Heading 2") or at the smaller 24px Quote row? Recommend 32px in Bricolage 500. No other lock is in doubt.
