# Northway — Brand direction v2

**Proposal only.** Revised 13 November 2026, Europe/Stockholm, to the chosen Eden direction. For review before anything goes to GitHub. Does not change the repo, Figma, or the existing `template-brand` files.

The previous pass of this file (warm paper, copper, Newsreader) is superseded. Structure is kept: DTCG tokens in three tiers, atomic components, light theme as the base, WCAG 2.2 AA, the six signature components, and the conversion rules settled with UX Lead. Personality now follows a brief to stay with **Eden’s green, white and light-grey look, and a handsome sans-serif.**

This file is the visual half of one set with [`CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md) and [`UX-CRITIQUE.md`](/workspace/northway-v2/docs/UX-CRITIQUE.md). Principles are in [`PRINCIPLES.md`](PRINCIPLES.md). Motion is in [`MOTION.md`](MOTION.md).

Contrast figures were computed with [coloraide](https://facelessuser.github.io/coloraide/), `method='wcag21'`, not guessed.

---

## Direction: Eden-aligned counsel

Northway remains a strategy and growth consultancy that leaves a team with a plan they can run, at a published price, in a set number of weeks. The site should feel like Eden’s calm green-and-light marketing pages, restated for a consultant, not for a SaaS workspace.

**In four words:** pine, white, light grey, sans.

**In one look.** A light-grey canvas (`#F2F2EF`) alternating with white sections. Deep forest-pine bands (`#1F3A2E`) with a fine grain, for the Briefing and the Pine Band. Large centred cream-white sans headlines on those bands. A white pill on green; a pine pill on light. White cards, softly rounded, with a quiet shadow. Hanken Grotesk for body; a distinctive sans for display (Bricolage Grotesque, recommended). Proof chips and a peeking case card stand in for Eden’s floating app icons and product screenshot. The base is a light theme; green is a section, not a dark site.

Copper, oxblood and warm paper are dropped. Nothing in that supporting palette earned a place once the brief is green, white and grey.

---

## Eden reference notes

We take Eden as a **feel and colour reference**, not as a layout or a product to imitate. “The Workspace That Remembers Your Projects,” in its green, white and light-grey variant: deep forest sections with grain; cream-white display type; alternating white and `#F2F2EF`-ish bands; white rounded cards with soft shadows; a white pill on green; generous, centred calm.

### What we adopt

- The **palette**: forest pine, white, light grey, and a green-tinted ink.
- **Green bands** as the loud colour fields — used for the Briefing and the Pine Band — with a fine noise grain.
- **Large cream-white display type** on those bands, generous whitespace, a calm pace.
- A **white pill** primary on green, **pine pill** on light.
- **White cards**, moderate rounding, a soft low shadow.
- A **tracked uppercase meta line** as a sans expressive moment (attribution, not a marketing slogan).
- The *idea* of a **peeking object** at the foot of the hero, and of **small proofs around the lead** — restated below so they belong to a consultancy.

### What we deliberately do not copy

- **No product-screenshot SaaS look.** We do not peek a dashboard, an app window, or a tool UI from the bottom of the hero. The peeking object is a **case card** or a **deliverable** (a Folio, a still, a one-page plan).
- **No app-icon clutter.** We do not orbit tool or brand logos around the headline. The equivalent is a **calm row of proof chips** with story figures (weeks, a from-price already in the CTA cluster is not repeated; “two review rounds,” “six-week engagement”). Two chips, aligned, still — not at angles, not floating on a drift animation.
- **No copying Eden’s layout or copy 1:1.** Their centred product hero, rotating headlines, and “Try risk-free” language are theirs. Our Briefing is result-first, with a published from-price and one “Start a project.”
- **No decorative marketing eyebrows** (“NEW WORK,” “WHAT WE DO,” “THE WORKSPACE”). The uppercase line is factual meta only.
- **No glassmorphism, mesh, glow, or dark-theme default.** Light base, solid pine bands.
- **We do not copy Eden’s type.** Their current public site and this green variant are a reference for colour and calm, not a font to take.

---

## Open with Designer — settled

The six items from CONVERSION.md and UX-CRITIQUE.md stay closed. Only the *visual* of the Briefing changes (centred, on a green band). The conversion rules do not.

### 1. The hero leads with a result

**Settled, still.** The Kindred result is the first large type in the Briefing, at display size, centred on the green band, before the lede and well before the CTA. Attribution may sit above it as a tracked uppercase meta line (small, cream-muted) — it does not replace the result as the lead. See [CONVERSION.md impacts](#conversionmd-impacts) for the eyebrow carve-out this asks of UX Lead.

### 2. “Work that earns the next project.” leaves the display line

**Settled, still.** That line moves to the footer as the studio promise, now in the display sans at lead size, cream-muted on pine. In the demo, the display line is the result:

> Patients knew who the clinic was for, and booked a first visit from the site.

Fallback heading, only when result and quote are empty:

> A clear offer, a plan your team can run, a price before you start.

### 3. The from-price has a place in the first view

**Settled, still.** When `showPrices` is on, the from-price sits in the Briefing’s CTA cluster, under or beside the white pill, on the green: **From $8,000.** in Hanken 500 at 16px, **cream `#F7F7F4`** (not a whispered grey — cream on pine is 11.49:1), text-linked to `#price-tablet`. Tax note in cream-muted caption. Readable without scrolling at 1280. Not a second pill. When prices are off, the cluster is the button alone.

### 4. The Briefing and the Case Ledger work without photographs

**Settled, restated.** Images are optional, never invented, never leave an empty frame. Kindred ships with none. The no-image treatment is still **the Folio**, now sans and pine: a white card, 12px radius, soft shadow, a large display-sans initial of the client’s name in pine (for Kindred, a “K” at 120–160px, cropped by the card edge), the one-line result, sector and year in tracked uppercase meta, and an optional named quote in Hanken italic. No copper, no serif. In the Briefing, this Folio (or a still, if one exists) is the **peeking case card** at the foot of the green band. On Ledger rows without a still, the text uses the full row; a smaller Folio initial (64–80px) may mark a featured no-image row.

### 5. An empty `/case-studies` page

**Settled, still.** Home teasers with no content are omitted. On `/case-studies` with zero projects: a short honest empty on a white card — waymark in pine, display-sans heading **No case studies yet.**, one or two sentences, a text link to Services, one pine primary. Never a fake grid, never a redirect (a redirect hides a collection a buyer just emptied). Insights keeps hide-and-redirect.

### 6. “Numbered results” means story figures only

**Settled, still.** Concrete demo figures only: **$8,000**, **$16,000**, **$28,000**, **6 / 10 / 14 weeks**, **two review rounds**, **one working day**, **one sentence**, **six-week** engagement. Invented percentage lifts are forbidden. Proof chips may carry these figures; they may not carry a fabricated lift. The Kindred display line remains a sentence.

---

## Colour

Pine close to Eden’s forest green, plus white and light grey. Green-tinted ink. No warm paper, no copper, no oxblood.

### Palette

| Role | Hex | OKLCH | Use |
|---|---|---|---|
| Light grey / `canvas` | **`#F2F2EF`** | oklch(0.960 0.0040 106.5) | Page ground, alternating chapters. Eden’s light grey, as described. |
| White / raised | **`#FFFFFF`** | oklch(1.000 0 0) | Cards, inputs, the white pill, white sections. |
| Surface hover | **`#E8E8E4`** | oklch(0.930 0.0053 106.5) | Hover on light controls. |
| Surface pressed | **`#E3E3DF`** | oklch(0.915 0.0054 106.5) | Pressed. |
| **Pine (accent, bands)** | **`#1F3A2E`** | oklch(0.323 0.0398 164.0) | Briefing and Pine Band; primary fill on light; waymark on light. The described Eden green, used as-is. Reads as forest green on a large grained field. |
| Pine hover | **`#142F22`** | oklch(0.279 0.0414 161.1) | Primary hover on light; a slightly deeper band state. |
| Pine pressed | **`#0E1F15`** | oklch(0.221 0.0303 157.0) | Pressed. |
| Cream-white | **`#F7F7F4`** | oklch(0.975 0.0040 106.5) | Display and body on pine bands. Cool off-white, not warm paper. |
| Cream-muted | **`#D5D8D4`** | oklch(0.879 0.0063 137.8) | Lede, tax note, footer supporting type, uppercase meta on green. |
| Ink | **`#18221D`** | oklch(0.240 0.0172 163.1) | Body and headings on light. Green-tinted near-black. |
| Ink muted | **`#4C5550`** | oklch(0.440 0.0140 161.5) | Captions and meta on light grey and white. |
| Ink disabled | **`#7B827E`** | — | Disabled; AA-exempt, reported below. |
| Input border | **`#636B66`** | — | Form chrome; 3:1 on white and on grey. |
| Hairline | **`#C8C8C3`** | — | Decorative rules. Not required to meet 3:1. |
| Success | **`#324B23`** | — | Form success only. A yellower green than pine, so the two cannot be confused. |
| Success muted | **`#E1ECDB`** | — | Success fill. |
| Danger | **`#782A28`** | — | Errors. |
| Danger muted | **`#F5E3E1`** | — | Error fill. |
| Warning | **`#754B10`** | — | Warnings. |
| Warning muted | **`#F4E6D2`** | — | Warning fill. |

Inverse and the brand-band share pine `#1F3A2E`. The Pine Band and the footer are **one continuous green close**: CTA in the upper part, quiet chrome and the demo disclosure below, separated by a cream hairline at about 20% opacity — not two stacked dark slabs.

### Contrast (WCAG 2.2 AA, coloraide `wcag21`)

All required pairs pass. Tightest required text: muted on light grey **6.88:1**. Tightest required UI: input border on hover-grey `#E8E8E4` **4.47:1**. Cream on pine is **11.49:1**, and at a worst-case 8% white grain over pine still **8.97:1**.

| Pair | Ratio | Floor | Result |
|---|---:|---:|---|
| Ink on light grey (body on canvas) | **14.57:1** | 4.5 | Pass |
| Ink on white | 16.34:1 | 4.5 | Pass |
| Ink on cream | 15.22:1 | 4.5 | Pass |
| **Muted on light grey** | **6.88:1** | 4.5 | Pass |
| Muted on white | 7.71:1 | 4.5 | Pass |
| Muted on cream | 7.19:1 | 4.5 | Pass |
| Muted on surface-hover | 6.28:1 | 4.5 | Pass |
| **Cream on pine (display, lede)** | **11.49:1** | 4.5 | Pass |
| White on pine (pill text is the inverse: pine on white) | 12.33:1 | 4.5 | Pass |
| Cream-muted on pine | **8.57:1** | 4.5 | Pass |
| Cream on pine hover | 13.41:1 | 4.5 | Pass |
| White on pine hover | 14.39:1 | 4.5 | Pass |
| **Pine on white** (links, pine-pill text is cream; pine as heading on light) | **12.33:1** | 4.5 | Pass |
| Pine on light grey | 10.99:1 | 4.5 | Pass |
| Pine on cream | 11.49:1 | 4.5 | Pass |
| Input border on light grey | 4.89:1 | 3.0 | Pass |
| Input border on white | 5.49:1 | 3.0 | Pass |
| Input border on surface-hover | **4.47:1** | 3.0 | Pass (tightest UI) |
| Success on light grey | 8.64:1 | 4.5 | Pass |
| Danger on light grey | 8.67:1 | 4.5 | Pass |
| Warning on light grey | 6.76:1 | 4.5 | Pass |
| Cream on pine, 6% white grain (recommended) | 9.56:1 | 4.5 | Pass |
| Cream on pine, 8% white grain (upper bound) | **8.97:1** | 4.5 | Pass |
| Hairline on light grey (decorative) | 1.50:1 | — | Reported; not required |
| Disabled on light grey (exempt) | 3.51:1 | — | Reported; exempt |
| Pine against ink (WCAG 1.4.1) | **1.32:1** | 3.0 | **Fails as colour-alone.** Body links are **underlined at rest.** Current and selected use weight 600 and/or a waymark. |

Scrims, white type, ink composited over the ground: `scrim.soft` at 24% is atmospheric only, no type (1.65–1.83:1). `scrim.strong` at 64%: **4.93:1** over white, **5.31:1** over light grey. `scrim.gradient` peak at 72%: **6.46:1** / **6.87:1**. If a caption on a photograph still fails, use a solid pine or white panel.

### Grain on green bands

Allowed, as a subtle asset, on pine bands only (the Briefing, the Pine Band, the continuous footer). Not on light-grey or white sections, and not over photographs.

| Spec | Value |
|---|---|
| Asset | `asset.grain` — a seamless 256×256 (or 512×512 @2x) monochrome noise tile, PNG or SVG. |
| Application | `background-color: #1F3A2E` underneath; grain as a second layer (`background-image`, or a `::after` at the opacity below), `background-size: 256px`, `mix-blend-mode: overlay` or `soft-light`. |
| Opacity | **6%** recommended (cream-on-pine then 9.56:1). Hard ceiling **8%** (8.97:1). Do not go higher. |
| Particle scale | About 1px noise. Fine, like paper tooth, not film grain, not a photograph filter. |
| Motion | None. The grain is still. |
| **Reduced-data fallback** | Under `@media (prefers-reduced-data: reduce)`, when `Save-Data` is on, in print, and if the asset fails to load: **no image, solid `#1F3A2E`.** The background-color is the fallback; the page must not depend on the tile for contrast (cream on solid pine is 11.49:1). High-contrast mode may also drop the grain. |

---

## Type

A sans-serif display face — **not a serif.** Newsreader and Fraunces are withdrawn. Expressive moments come from **weight contrast**, **size**, and a **tracked uppercase meta line**, not from italic serif quotes.

### Recommendation: Bricolage Grotesque for display

**[Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)**, SIL Open Font Licence 1.1, Mathieu Triay, via Google Fonts. Variable (`wght`, `wdth`). We load **500 and 600** for display (and 500 italic if a quote is set in the display face). Optical / width: default width, or a slight condensation (`wdth` 90–95) on long result lines so the Kindred sentence holds two or three lines.

**Why this face.** It is a handsome, slightly condensed contemporary grotesque with enough character to be remembered, without becoming costume. It looks particularly good as large cream type on a pine band — which is the first impression of this direction. It is not Inter (Skala’s face), not Geist or Outfit or Space Grotesk (current AI-template defaults), and it is free and OFL. A long result line benefits from the condensation. Weight 500 at display size has authority; 600 is reserved for the result when we want a single step more presence, never 700 or 800.

**Body and UI remain [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk),** SIL OFL, 400, 400 italic, 500 and 600. Hanken is the wider, calmer neo-grotesk; Bricolage is tighter and more contemporary. The pairing is two sans, with a clear job for each.

### Alternative: Mona Sans

**[Mona Sans](https://fonts.google.com/specimen/Mona+Sans)**, SIL OFL, GitHub, via Google Fonts. Variable (`wght`, `wdth`, `opsz`). Same roles, Hanken unchanged. Calmer, with a true optical-size axis — a more neutral premium. Choose Mona if Bricolage feels too characterful for a consultant audience; choose Bricolage (recommended) if the brief is a sans with presence, which is what “a good-looking sans-serif” asked for.

Geist, Inter Tight, Outfit, Space Grotesk and Instrument Sans were considered and are not proposed: Geist and Outfit and Space Grotesk are current starter-kit tells; Inter Tight sits too close to Skala’s own Inter.

### Roles

Bind these names, never a family string.

| Role | Token | Face / weight | Use |
|---|---|---|---|
| `font.display` | Bricolage Grotesque 500 (600 for the Briefing result) | Result, fallback H1, case-page Outcome, Pine Band heading, Folio initial |
| `font.body` | Hanken Grotesk 400 | Body, lede |
| `font.quote` | Hanken Grotesk 400 italic | Named quotes (no serif italic) |
| `font.ui` | Hanken Grotesk 500; 600 for current and selected | Nav, buttons, labels |
| `font.meta` | Bricolage Grotesque 500, uppercase, tracked | Attribution, sector/year, “Typical.” The expressive uppercase line. |

### Scale

Body stays **18 / 1.55** in Hanken, locked. Display is sized for a two- or three-line result on the green band. A short fallback heading may use the larger “short” row.

| Style | Mobile | Tablet 768 | Desktop 1024 | Wide 1280 | Face / weight | Tracking | Leading |
|---|---|---|---|---|---|---|---|
| Display (result) | 36–40 clamp / 1.12 | 48 / 1.10 | **56 / 1.08** | **64 / 1.06** | Bricolage 600 | **−0.03em** | as shown |
| Display (short, ≤10 words) | 40 clamp / 1.10 | 56 / 1.08 | 68 / 1.06 | **80 / 1.04** | Bricolage 500 | −0.03em | |
| Heading 1 | 32 / 1.18 | 40 / 1.14 | 48 / 1.12 | 52 / 1.10 | Bricolage 500 | −0.02em | |
| Heading 2 | 24 / 1.25 | 28 / 1.22 | 32 / 1.20 | 32 / 1.20 | Hanken 500 | −0.015em | |
| Heading 3 | 20 / 1.30 | 22 / 1.28 | 24 / 1.28 | 24 / 1.28 | Hanken 500 | −0.01em | |
| Lead | 18 / 1.45 | 18 / 1.45 | **20 / 1.45** | 20 / 1.45 | Hanken 400 | 0 | |
| Quote | 20 / 1.40 | 22 / 1.38 | 24 / 1.35 | 24 / 1.35 | Hanken 400 italic | 0 | |
| Body | **18 / 1.55** at every breakpoint | same | same | same | Hanken 400 | 0 | locked |
| **Meta / eyebrow** | **12 / 1.30 / 0.10em**, uppercase | same | **13 / 1.30 / 0.10em** | same | Bricolage 500 | | |
| Label | 13 / 1.35 / 0.04em | same | same | same | Hanken 500 | | |
| Caption | 14 / 1.40 / 0.01em | same | same | same | Hanken 400 | | |
| From-price (Briefing cluster) | 16 / 1.4 | same | same | same | Hanken 500 | 0 | cream on pine |
| Button | 16 / 1, optically centred in 44 (md) or 52 (lg) | same | same | same | Hanken 500 | 0 | |

**The uppercase meta line** is the sans equivalent of the withdrawn italic serif. It is used for: Briefing attribution (`KINDRED CLINIC  ·  HEALTH  ·  2025`); Folio and ledger sector/year; the word **TYPICAL** on Grow (alongside the pine rule). It is **not** used as a marketing eyebrow above section headings (“CASE STUDIES,” “WHAT WE DO,” “NEW WORK”). Section titles are ordinary headings.

Wordmark: Hanken 500 (or Bricolage 500), 18–20px in the 68px bar, tracking −0.02em, with a 3×16 pine waymark to its left. Cream on the green Briefing; ink on light sections. A slot, never a billboard.

Font loading: `font-display: swap`; subset Latin (and Latin-ext if needed); preload Bricolage 600 and Hanken 400. Ship both OFL licence files.

---

## Art direction and imagery

Photography is optional. When present, it is proof, not decoration. When absent, the Folio (white card, pine sans initial) is the art direction.

- Documentary, not stock theatre. Rooms, tables, clinics, materials, hands at work. Overcast or late light. Restrained grade. No teal-and-orange, no Midjourney faces, no handshakes, no “team laughing at a laptop,” no fake logos, no product-UI mockups used as lifestyle.
- Ratios: Ledger stills **3:2**; case-page images **16:9** or up to about **2:1**; the peeking Folio card about **4:5** (or 3:2 if it holds a still). Explicit width and height. Caption or alt in Caption style.
- Photographs sit **inside** the white card (12px clip), flush. They are not raw full-bleed cuts, so they belong to the Eden-aligned card language — except optional full-bleed case-page images after Results, which may go edge to edge on a light section.
- Type on a photograph uses `scrim.strong` or `scrim.gradient`, or a solid pine or white panel. `scrim.soft` has no type.
- Never invent an image for Kindred. Never generate “clinic interiors” to fill a gap.

---

## Design assets

### The Waymark (graphic atom)

A short thick vertical bar in **pine** on light, **cream** on green bands. **4×48px** at section starts (4×64 on the Briefing and Pine Band), **4×24** on ledger and process steps, **3×16** beside the wordmark and the current nav item. The **4×4 north cut** at the top-right remains — it is our device, and it does not depend on copper. Square ends, `radius.none` on the bar itself.

Used at section starts, ledger indexes, process steps, current nav (with Hanken 600), the wordmark. Not a bullet on every heading.

### Grain

As specified under Colour. Green bands only.

### The Folio (no-image treatment)

Reworked. A **white card**, 12px radius, soft shadow, on light grey or peeking from pine. A large **Bricolage** (or Mona) initial of the client, **pine `#1F3A2E`**, 120–160px featured / 64–80px in a ledger, cropped by the card. A 4px pine tick at the top-left. Client, result, tracked uppercase meta, optional Hanken-italic quote. The initial is a graphic device, not a fake photograph. No copper, no serif italic letter.

### Proof chips (in place of Eden’s floating app icons)

Two quiet chips, at most, in a **horizontal, aligned row** under the Briefing lede or beside the CTA cluster — not orbiting the headline, not at angles, not animated on a drift. White or cream-outline, 999-radius (pill), Hanken 500 at 13, pine or cream text depending on the ground. Content is a story figure only: **Six-week engagement**, **Two review rounds**. Do not repeat the from-price here (it already sits in the CTA cluster). No client logos, no tool icons, no emoji. On mobile, the chips stack or wrap on one calm line. If there is no honest figure to show, omit them.

### The peeking case card (in place of Eden’s peeking screenshot)

At the foot of the green Briefing, a white Folio or still-card rises from the band and overlaps the following light-grey section by about 40–64px. Soft shadow, 12px radius. The whole card is the path into the featured case. If there is no featured case, omit the peek — do not leave an empty frame or a fake UI.

### Illustration and icons

No illustration style in the demo. **[Phosphor](https://phosphoricons.com) Regular, MIT, 24px**, one set, only where an icon has a job (menu, close, accordion, form states, pager). Not beside headings, not as orbiting marks, not as the Process spine (the waymark does that). Phosphor, not Lucide — Lucide remains a scaffold tell.

### Cards, radius, shadow

Eden’s white rounded cards are adopted, calmly.

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Waymarks, photographs *inside* a clip, pine bands, tables. |
| `radius.sm` | 8 | Inputs, proof chips’ inner if needed; tags. |
| `radius.card` | **12** | Folio, Ledger still-cards, Price Tablet sheet, Enquiry Sheet, peeking card, honest empty. Moderate, not a 24px “startup” round. |
| `radius.pill` | 999 | Buttons, proof chips. Already locked. |
| `shadow.card` | `0 8px 24px` at **8%** ink (`#18221D` at 0.08) | Rest, on white cards over grey or over pine. No glow, no coloured shadow. |
| `shadow.card-hover` | `0 12px 32px` at **10%** ink | Fine pointer only, 200ms. Optional 8px translate. |

The Price Tablet remains **one sheet**, not three SaaS cards — the rounding and shadow are on the sheet, not on three equal plan-pickers.

---

## Layout rhythm

- **Grid.** 12 columns from 768; 4 on mobile. Gutter 16 / 24 / 24. Content max **1280**, measure **66ch**. A 48–64px waymark rail on light chapters, as before. On the **centred Briefing**, the rail is omitted and the waymark may sit centred above the uppercase meta, or at the left of the content width without pulling the type off-centre.
- **The Briefing is centred**, on a full-bleed pine band: result, lede, CTA cluster, proof chips, peeking card. This is the Eden adoption. The result still leads; the from-price still sits in the first viewport. The Case Ledger, Price Tablet and Process Path stay **left-weighted and chaptered**, not a centred SaaS stack — we do not centre the whole site.
- **Section spacing**, unchanged in spirit:

  | Token | Mobile | Tablet | Desktop / wide | Typical use |
  |---|---|---|---|---|
  | `space.hero.top` | 96 | 128 | **192** | Top of the Briefing, so the result clears the 68px nav. |
  | `space.section.sm` | 64 | 72 | **80** | Between related chapters. |
  | `space.section` | 96 | 104 | **120** | Default. |
  | `space.section.lg` | 120 | 144 | **176** | After the Briefing (accounting for the peek overlap), before the Pine Band. |

  8pt foundation, plus locked 44, 52, 68, and focus 2. Design from 360; **320 must not overflow.**

- **Nav.** 68px, sticky. On the green Briefing: solid pine (the top of the band), cream links, cream wordmark, the primary reduced to quiet cream text. After the Briefing scrolls away: solid white or `#F2F2EF`, ink links, pine primary. No frosted glass.

---

## Signature components

Six names, 1:1 with UX Lead. Conversion behaviour is theirs; visual treatment is ours, now Eden-aligned.

### 1. The Briefing (hero)

A full-bleed **pine band** with 6% grain. Centred, generous. Reading order: optional uppercase attribution (`KINDRED CLINIC  ·  HEALTH  ·  2025`, cream-muted meta); the Kindred **result** in Bricolage 600 at 56 / 64, cream, two or three lines, a centred measure of about 16–22ch; Hanken lede at 20 / 1.45, cream-muted, about 36–42ch, centred; at most two proof chips; **one white pill**, pine text, **Start a project** → `/contact`; from-price in cream, 16 / 500, in that cluster, linked to `#price-tablet`. At the foot: the **peeking case card** (Kindred’s Folio). No second pill, no Sample chip, no app icons, no product screenshot. On mobile: the same stack; peeking card still in the first one-and-a-half screens.

Nav CTA is quiet while this primary is on screen; the pine pill appears in the nav after the band scrolls away. Fallback heading as settled in item 2.

### 2. The Case Ledger

Text-first uneven rows on light grey or white. Pine waymark, Bricolage or Hanken client name, Hanken result, uppercase meta for sector and year. Stills, if present, sit in a white 3:2 card on the right, 12px radius. If not, full-width text or a smaller Folio. “See all case studies” is a text link. Empty rules as settled in item 5. Case pages: Outcome in Bricolage H1, then Challenge, Approach, Results; optional image after Results.

### 3. The Price Tablet

One **white rate sheet**, 12px radius, soft shadow, on light grey — not three SaaS plan-cards. Your figures: Position, **Grow** (typical), Brand + growth. Grow has a 4px **pine** rule and the word **TYPICAL** in uppercase meta, once — not a chip, not colour alone. One pine primary on the Grow row, to `/contact?service=grow`. Heading: **Know the price before we talk.**

### 4. The Enquiry Sheet

A white letter-card, 12px radius, soft shadow, a 4px **pine** left edge. Reply-time above the fields. Four fields, 44px inputs, **Send the brief** as a pine pill. Direct email beside or under. Same behaviour as CONVERSION.md.

### 5. The Process Path

Four steps (Intro, Plan, **Strategy**, Handover), your outcomes. Pine waymarks, uneven widths (Strategy gets more room). Hanken 500 names, body outcomes. A Bricolage index (“1”–“4”) may sit with the waymark. No circled 01–04, no decorative icons, no equal columns. All steps in the first HTML.

### 6. The Pine Band (closing CTA)

Full-bleed pine, 6% grain, cream type — continuous with the footer below. Bricolage heading (**Ready when you are.**, or a result). Supporting line in Hanken lead, cream-muted: reply-time or from-price. **One white pill**, pine text, **Start a project**. No second button. Footer, same pine, quieter: wordmark, the old slogan in Hanken italic or Bricolage 500 at lead size, nav mirror, email, legal, ©, and the disclosure in cream-muted caption: **Northway is a demonstration studio that ships with this template.**

---

## Updated token values

Existing token **names** are reused. Accent is pine `#1F3A2E`. The copper primitive is removed. Sample-badge tokens stay unused.

### Primitive colour, previous proposal → this revision

| Primitive | Superseded (warm paper / copper) | This revision | Notes |
|---|---|---|---|
| `primitive.color.canvas` | `#EEE7D8` | **`#F2F2EF`** | Light grey. |
| `primitive.color.surface` | `#E7DFCE` | **`#F2F2EF`** | Same family as canvas, or white sections use raised. |
| `primitive.color.surface-raised` | `#F6F1E8` | **`#FFFFFF`** | White cards and the white pill. |
| `primitive.color.surface-hover` | `#E0DACC` | **`#E8E8E4`** | |
| `primitive.color.surface-pressed` | `#D7D0C1` | **`#E3E3DF`** | |
| `primitive.color.ink` | `#1A221E` | **`#18221D`** | Green-tinted. |
| `primitive.color.ink-muted` | `#5C584F` | **`#4C5550`** | 6.88:1 on canvas. |
| `primitive.color.ink-disabled` | `#7F7A70` | **`#7B827E`** | |
| `primitive.color.pine` | `#245240` | **`#1F3A2E`** | Eden’s green. |
| `primitive.color.pine-hover` | `#1B4235` | **`#142F22`** | |
| `primitive.color.pine-pressed` | `#16382D` | **`#0E1F15`** | |
| `primitive.color.cream` | (raised, warm) | **`#F7F7F4`** | Type on pine. |
| `primitive.color.cream-muted` | — | **`#D5D8D4`** | |
| `primitive.color.copper` | `#854327` | **removed** | |
| `primitive.color.sage` | `#D8D9CD` | **removed** | Light grey and white do this job. |
| `primitive.color.inverse` | `#12231E` | **`#1F3A2E`** | Same as pine; one close. |
| `primitive.color.border-hairline` | `#C4BBAB` | **`#C8C8C3`** | |
| `primitive.color.border-input` | `#7A7468` | **`#636B66`** | |
| `primitive.font.family.display` | Newsreader | **Bricolage Grotesque** | Mona Sans if that choice wins. |
| `primitive.font.family.body` | Hanken Grotesk | **Hanken Grotesk** | unchanged |
| `primitive.font.size.body` | 18 | **18** | 1.55 leading, locked. |
| `primitive.radius.card` | (none / paper sharp) | **12** | New. |
| `primitive.shadow.card` | (none) | **`0 8px 24px` at 8% ink** | New, quiet. |
| `primitive.motion.duration.slow` | 400ms | **400ms** | unchanged. |

### Semantic aliases (proposed)

```json
{
  "semantic": {
    "color": {
      "bg": { "$value": "{primitive.color.canvas}" },
      "surface": {
        "default": { "$value": "{primitive.color.canvas}" },
        "raised": { "$value": "{primitive.color.surface-raised}" }
      },
      "text": {
        "default": { "$value": "{primitive.color.ink}" },
        "muted": { "$value": "{primitive.color.ink-muted}" }
      },
      "accent": {
        "default": { "$value": "{primitive.color.pine}" },
        "hover": { "$value": "{primitive.color.pine-hover}" },
        "pressed": { "$value": "{primitive.color.pine-pressed}" },
        "contrast": { "$value": "{primitive.color.cream}" }
      },
      "waymark": { "$value": "{primitive.color.pine}" },
      "border": {
        "hairline": { "$value": "{primitive.color.border-hairline}" },
        "input": { "$value": "{primitive.color.border-input}" }
      },
      "focus": { "$value": "{primitive.color.pine}" }
    },
    "inverse": {
      "bg": { "$value": "{primitive.color.pine}" },
      "text": { "$value": "{primitive.color.cream}" },
      "text-muted": { "$value": "{primitive.color.cream-muted}" }
    },
    "brand-band": {
      "bg": { "$value": "{primitive.color.pine}" },
      "text": { "$value": "{primitive.color.cream}" },
      "text-muted": { "$value": "{primitive.color.cream-muted}" },
      "grain": { "$value": "{primitive.asset.grain}" }
    },
    "font": {
      "display": { "$value": "{primitive.font.family.display}" },
      "body": { "$value": "{primitive.font.family.body}" },
      "quote": { "$value": "{primitive.font.family.body}" },
      "ui": { "$value": "{primitive.font.family.body}" },
      "meta": { "$value": "{primitive.font.family.display}" }
    }
  },
  "component": {
    "button": {
      "primary": {
        "bg": { "$value": "{semantic.color.accent.default}" },
        "text": { "$value": "{semantic.color.accent.contrast}" }
      },
      "on-band": {
        "bg": { "$value": "{primitive.color.surface-raised}" },
        "text": { "$value": "{semantic.brand-band.bg}" }
      }
    },
    "waymark": {
      "color": { "$value": "{semantic.color.waymark}" },
      "color-on-band": { "$value": "{semantic.brand-band.text}" }
    },
    "card": {
      "bg": { "$value": "{semantic.color.surface.raised}" },
      "radius": { "$value": "{primitive.radius.card}" },
      "shadow": { "$value": "{primitive.shadow.card}" }
    },
    "link": {
      "color": { "$value": "{semantic.color.accent.default}" },
      "decoration": { "$value": "underline" }
    }
  }
}
```

On light, `button.primary` is the pine pill with cream text. On pine bands, use `button.on-band`: **white pill, pine text**. Focus: 2px pine ring, 2px offset, `:focus-visible` only; cream ring on pine bands. Body links underlined at rest.

---

## CONVERSION.md impacts

Content and behaviour MUSTs are honoured. These are the points that need a note or a wording change on the conversion side — listed so UX Lead can update, not so we silently fight a MUST.

1. **Eyebrow MUST NOT (CONVERSION, Briefing).** We now use a tracked uppercase **attribution** line above the result (`KINDRED CLINIC  ·  HEALTH  ·  2025`). This is factual meta, small, and does not replace the result as the lead. It is a deliberate Eden adoption and a sans expressive moment. **Request:** carve this out of the MUST NOT — forbid decorative marketing eyebrows (“NEW WORK,” “WHAT WE DO”); allow this designed uppercase meta for attribution, sector/year, and “Typical.” We will not put a marketing eyebrow above section headings.
2. **Briefing layout.** The Briefing is a **centred pine band** with a peeking case card at the foot, not the left-weighted 7+5 split described in the earlier NOTES-FOR-UX (which CONVERSION’s “Designer first” and Open items still mention). The result still leads at display scale; the from-price still sits in the first-view CTA cluster; there is still one primary; Kindred still works with no photograph (the peeking Folio). **Request:** update the structural description. No MUST is broken.
3. **CTA colour.** On green: **white pill, pine text**. On light: **pine pill, cream text**. One primary style per ground, still unique in the viewport. Visual only; CONVERSION defers this. Flagged so it is not a surprise.
4. **Footer on inverse tokens.** Inverse is now the **same pine** as the Pine Band. Band and footer are one continuous green close. The disclosure, nav mirror and legal still live in the footer, as required. No MUST change; the visual of “inverse” is pine, not a separate near-black.
5. **Type and surfaces.** Newsreader, copper and “paper surfaces” in CONVERSION’s Open and Designer-first lines are stale. Display is a sans (Bricolage, or Mona). Cards are white, 12px, soft shadow. Body 18 / 1.55 is unchanged.

No other conversion MUST is affected. Sample-badge policy, one primary, published prices, Grow’s non-colour cue, text-first cases, optional images, four-field form, story figures, and the page list are unchanged.

---

## Open choices

The accent is pine `#1F3A2E`. The display face is a sans. Copper, oxblood, Newsreader and Fraunces are no longer on the table.

1. **Display sans: Bricolage Grotesque (recommended) or Mona Sans.** Both OFL, both with Hanken as body. Bricolage has more presence; Mona is calmer and has optical size.
2. **Demo disclosure instead of Sample badges.** Still the joint proposal with UX Lead; still needs confirmation, because it changes an earlier build-spec rule.

Iconography stays Phosphor Regular. The six section names, the result-first Briefing, the fallback heading, the from-price placement, the Folio, the `/case-studies` empty, and the story-figure rule remain settled.
