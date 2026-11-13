# Northway — Brand direction v2

**Proposal only.** Revised 13 November 2026, Europe/Stockholm, a second time: first to the Eden direction Amos chose, then to his verdict on Codex’s v2 build (generated look; **white canvas, grey as the elevated colour**). For review before anything goes to GitHub. Does not change the repo, Figma, or the existing `template-brand` files.

The warm-paper / copper / Newsreader pass is still superseded. The Eden palette, the display sans, the six signature components and the conversion settlements remain. What changes in this pass is the **canvas and elevation**, the **no-image treatment**, and a set of hard visual bans on the tells Codex v2 made (and that our own wording invited). The critique is in [`CRITIQUE-V2.md`](CRITIQUE-V2.md). The v3 direction for key sections is in [`NOTES-FOR-UX.md`](NOTES-FOR-UX.md). Principles: [`PRINCIPLES.md`](PRINCIPLES.md). Motion: [`MOTION.md`](MOTION.md).

This file is the visual half of one set with [`CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md) and UX Lead’s critiques. Contrast figures were computed with [coloraide](https://facelessuser.github.io/coloraide/), `method='wcag21'`, not guessed.

---

## Direction: Eden-aligned counsel, on a white sheet

Northway remains a strategy and growth consultancy that leaves a team with a plan they can run, at a published price, in a set number of weeks. The site should feel like Eden’s calm green-and-light marketing pages, restated for a consultant, not for a SaaS workspace — and not like a generated template.

**In four words:** pine, white sheet, grey elevated, sans.

**In one look.** A **white** canvas (`#FFFFFF`). Elevated surfaces — the Price Tablet, the Excerpt, the Enquiry Sheet, Strategy’s process panel — in **grey `#E8E8E4`**, with **no drop shadow** (the fill is the elevation). Deep forest-pine bands (`#1F3A2E`) with a fine grain, for the Briefing and the Pine Band. Large centred cream-white sans headlines on those bands. A white pill on green; a pine pill on light. Hanken Grotesk for body; a distinctive sans for display (Bricolage Grotesque, recommended). A peeking **Excerpt** (a quote on a grey panel, never a monogram) stands in for Eden’s product screenshot. Proof is a sentence, not a chip. The base is a light theme; green is a section, not a dark site.

Copper, oxblood and warm paper stay dropped. The previous v2 surface model — a grey page of identical white rounded cards with soft shadows — is also dropped. That is what Codex built, and it is what Amos inverted.

---

## Eden reference notes

We take Eden as a **feel and colour reference**, not as a layout or a product to imitate. “The Workspace That Remembers Your Projects,” in its green, white and light-grey variant: deep forest sections with grain; cream-white display type; white and `#F2F2EF`-ish surfaces; a white pill on green; generous, centred calm.

### What we adopt

- The **palette family**: forest pine, white, light grey, and a green-tinted ink. On Amos’s call, **white is the page** and **grey is elevated**, which is a Northway decision, not a 1:1 Eden section-band.
- **Green bands** as the loud colour fields — used for the Briefing and the Pine Band — with a fine noise grain.
- **Large cream-white display type** on those bands, generous whitespace, a calm pace.
- A **white pill** primary on green, **pine pill** on light.
- The *idea* of a **peeking object** at the foot of the hero — restated as an Excerpt, so it belongs to a consultancy.
- A **tracked uppercase meta line**, used once, as a sans expressive moment (Briefing attribution, not a marketing slogan, not a row label).

### What we deliberately do not copy

- **No product-screenshot SaaS look.** We do not peek a dashboard, an app window, or a tool UI from the bottom of the hero. The peeking object is an **Excerpt** or a **still** — a consultancy deliverable.
- **No app-icon clutter, and no proof chips.** We do not orbit logos around the headline, and we do not set outline pills under it. Proof is a **sentence** of honest figures, or it is omitted.
- **No copying Eden’s layout or copy 1:1.** Their centred product hero, rotating headlines, and “Try risk-free” language are theirs. Our Briefing is result-first, with a published from-price and one “Start a project.”
- **No decorative marketing eyebrows**, and no uppercase sector/year on every row. The uppercase line is factual meta, in the Briefing only, plus “TYPICAL” on Grow.
- **No glassmorphism, mesh, glow, or dark-theme default.** Light base, solid pine bands.
- **No floating-card SaaS language.** We do not adopt Eden’s white rounded cards with soft shadows as a site-wide molecule. Our elevated surface is a grey panel on white, without a drop shadow.
- **We do not copy Eden’s type.** Their current public site and this green variant are a reference for colour and calm, not a font to take.

---

## Open with Designer — settled

The six items from CONVERSION.md and UX-CRITIQUE.md stay closed. The *visual* of two of them is restated in this pass (no-image treatment; proof as a sentence). The conversion rules do not change.

### 1. The hero leads with a result

**Settled, still.** The Kindred result is the first large type in the Briefing, at display size, centred on the green band, before the lede and well before the CTA. Attribution may sit above it as a tracked uppercase meta line (small, cream-muted), **once** — it does not replace the result as the lead, and it is not repeated on the peeking object or on ledger rows. See [CONVERSION.md impacts](#conversionmd-impacts) for the tightened eyebrow carve-out this asks of UX Lead.

### 2. “Work that earns the next project.” leaves the display line

**Settled, still.** That line moves to the footer as the studio promise, now in the display sans at lead size, cream-muted on pine. In the demo, the display line is the result:

> Patients knew who the clinic was for, and booked a first visit from the site.

Fallback heading, only when result and quote are empty:

> A clear offer, a plan your team can run, a price before you start.

The peeking Excerpt and the first ledger entry must **not** restate this sentence verbatim. The Excerpt may use a named quote (“They made the next step obvious.”).

### 3. The from-price has a place in the first view

**Settled, still.** When `showPrices` is on, the from-price sits in the Briefing’s CTA cluster, under or beside the white pill, on the green: **From $8,000.** in Hanken 500 at 16px, **cream `#F7F7F4`** (cream on pine is 11.49:1), text-linked to `#price-tablet`. Tax note in cream-muted caption. Readable without scrolling at 1280. Not a second pill. When prices are off, the cluster is the button alone.

### 4. The Briefing and the Case Ledger work without photographs

**Settled, restated.** Images are optional, never invented, never leave an empty frame. Kindred ships with none. The no-image treatment is now **the Excerpt**, which **replaces the Folio monogram** (withdrawn; it was a tell we invited, and Codex built a giant “K” twice).

The Excerpt is a **grey elevated** panel (`#E8E8E4`, radius 8 or 12, **no shadow**, **no monogram**, **no giant letter**). Inside: a named quote or a one-line result, Bricolage 500 at lead or Heading 2, ink, at a readable measure. Client and a caption underneath, Hanken 400 muted, sentence case (“Health, 2025”). An optional 3–4px pine tick on the left, short, used once. When a still exists, the photograph fills this same panel, clipped, caption below, no letter over the image. In the Briefing, this Excerpt (or a still) is the **peeking object** at the foot of the green band. Quiet ledger rows without a still are text-complete; they do not need a panel.

### 5. An empty `/case-studies` page

**Settled, still.** Home teasers with no content are omitted. On `/case-studies` with zero projects: a short honest empty on a **grey elevated** panel — display-sans heading **No case studies yet.**, one or two sentences, a text link to Services, one pine primary. No waymark required. Never a fake grid, never a redirect (a redirect hides a collection a buyer just emptied). Insights keeps hide-and-redirect.

### 6. “Numbered results” means story figures only

**Settled, still — and “numbered” is not a licence to number a process or a list.** Concrete demo figures only: **$8,000**, **$16,000**, **$28,000**, **6 / 10 / 14 weeks**, **two review rounds**, **one working day**, **one sentence**, **six-week** engagement. Invented percentage lifts are forbidden. A proof **sentence** may carry these figures; outline chips may not. The Kindred display line remains a sentence. Process steps and ledger rows carry **no indexes**.

---

## Colour

Pine close to Eden’s forest green, plus white and light grey. Green-tinted ink. No warm paper, no copper, no oxblood. This pass inverts the surface model.

### Palette

| Role | Hex | OKLCH | Use |
|---|---|---|---|
| **Canvas** | **`#FFFFFF`** | oklch(1.000 0 0) | The page. Nav after the Briefing. Input fills. The white pill. Amos’s call. |
| **Elevated / raised** | **`#E8E8E4`** | oklch(0.930 0.0053 106.5) | The Price Tablet, the Excerpt, the Enquiry Sheet, Strategy’s process panel, honest empties. **Adjusted** from `#F2F2EF`: that grey is only 1.12:1 against white and will not read as a surface. `#E8E8E4` is 1.23:1, same cool family, visibly a panel, still calm. |
| Elevated hover | **`#E3E3DF`** | oklch(0.915 0.0054 106.5) | Fine-pointer fill change on elevated surfaces. |
| Elevated pressed | **`#DEDED9`** | oklch(0.899 0.0067 106.5) | Pressed. |
| Mist (unused as canvas) | `#F2F2EF` | oklch(0.960 0.0040 106.5) | The previously proposed canvas. Kept as a primitive only if a barely-there wash is needed; **not** the page, **not** the elevated surface. |
| **Pine (accent, bands)** | **`#1F3A2E`** | oklch(0.323 0.0398 164.0) | Briefing and Pine Band; primary fill on light; waymark on light. Unchanged. Reads as forest green on a large grained field. |
| Pine hover | **`#142F22`** | oklch(0.279 0.0414 161.1) | Primary hover on light; a slightly deeper band state. |
| Pine pressed | **`#0E1F15`** | oklch(0.221 0.0303 157.0) | Pressed. |
| Cream-white | **`#F7F7F4`** | oklch(0.975 0.0040 106.5) | Display and body on pine bands. Cool off-white, not warm paper. |
| Cream-muted | **`#D5D8D4`** | oklch(0.879 0.0063 137.8) | Lede, tax note, footer supporting type, uppercase meta on green, the proof sentence. |
| Ink | **`#18221D`** | oklch(0.240 0.0172 163.1) | Body and headings on light. Green-tinted near-black. |
| Ink muted | **`#4C5550`** | oklch(0.440 0.0140 161.5) | Captions and meta on white and on elevated grey. |
| Ink disabled | **`#7B827E`** | — | Disabled; AA-exempt, reported below. |
| Input border | **`#636B66`** | — | Form chrome; 3:1 on white and on elevated. |
| Hairline | **`#C8C8C3`** | — | Decorative rules, optional 1px edge on elevated panels. Not required to meet 3:1. |
| Success | **`#324B23`** | — | Form success only. A yellower green than pine, so the two cannot be confused. |
| Success muted | **`#E1ECDB`** | — | Success fill. |
| Danger | **`#782A28`** | — | Errors. |
| Danger muted | **`#F5E3E1`** | — | Error fill. |
| Warning | **`#754B10`** | — | Warnings. |
| Warning muted | **`#F4E6D2`** | — | Warning fill. |

Inverse and the brand-band share pine `#1F3A2E`. The Pine Band and the footer are **one continuous green close**: CTA in the upper part, quiet chrome and the demo disclosure below, separated by a cream hairline at about 20% opacity — not two stacked dark slabs.

**Elevation language.** The grey fill *is* the elevation. Default: **no drop shadow**. Shadows on a white page read as SaaS card UI, which is what Codex v2 produced. Optional 1px decorative hairline in `#C8C8C3`. Fine-pointer hover may deepen the fill to `#E3E3DF`; it does not “lift” a shadow. Quiet rows, insights and FAQ sit directly on white — not every block is a panel.

### Contrast (WCAG 2.2 AA, coloraide `wcag21`)

All required pairs pass on both the white canvas and the elevated grey. Tightest required text: muted on elevated **6.28:1**. Tightest required UI: input border on elevated **4.47:1**. Cream on pine is **11.49:1**, and at a worst-case 8% white grain over pine still **8.97:1**. Unchanged band pairs are restated for a complete table.

| Pair | Ratio | Floor | Result |
|---|---:|---:|---|
| Ink on white (body on canvas) | **16.34:1** | 4.5 | Pass |
| Ink on elevated `#E8E8E4` | **13.30:1** | 4.5 | Pass |
| Ink on elevated hover `#E3E3DF` | 12.70:1 | 4.5 | Pass |
| Ink on cream | 15.22:1 | 4.5 | Pass |
| Muted on white | **7.71:1** | 4.5 | Pass |
| **Muted on elevated** | **6.28:1** | 4.5 | Pass (tightest text) |
| Muted on elevated hover | 5.99:1 | 4.5 | Pass |
| Muted on cream | 7.19:1 | 4.5 | Pass |
| **Cream on pine (display, lede)** | **11.49:1** | 4.5 | Pass |
| White on pine (pill text is the inverse: pine on white) | 12.33:1 | 4.5 | Pass |
| Cream-muted on pine | **8.57:1** | 4.5 | Pass |
| Cream on pine hover | 13.41:1 | 4.5 | Pass |
| White on pine hover | 14.39:1 | 4.5 | Pass |
| **Pine on white** (links, focus ring, tick, pine as a heading on light) | **12.33:1** | 4.5 | Pass |
| Pine on elevated | **10.04:1** | 4.5 | Pass |
| Pine on elevated hover | 9.58:1 | 4.5 | Pass |
| Pine on cream | 11.49:1 | 4.5 | Pass |
| Input border on white (inputs are white fills) | 5.49:1 | 3.0 | Pass |
| **Input border on elevated** | **4.47:1** | 3.0 | Pass (tightest UI) |
| Input border on elevated hover | 4.27:1 | 3.0 | Pass |
| Success on white | 9.69:1 | 4.5 | Pass |
| Success on elevated | 7.89:1 | 4.5 | Pass |
| Danger on white | 9.72:1 | 4.5 | Pass |
| Danger on elevated | 7.91:1 | 4.5 | Pass |
| Warning on white | 7.58:1 | 4.5 | Pass |
| Warning on elevated | 6.17:1 | 4.5 | Pass |
| Cream on pine, 6% white grain (recommended) | 9.56:1 | 4.5 | Pass |
| Cream on pine, 8% white grain (upper bound) | **8.97:1** | 4.5 | Pass |
| Elevated on white (decorative separation) | **1.23:1** | — | Reported; this is the point of the adjustment from `#F2F2EF` at 1.12:1 |
| Hairline on white (decorative) | 1.68:1 | — | Reported; not required |
| Hairline on elevated (decorative) | 1.37:1 | — | Reported; not required |
| Disabled on white (exempt) | 3.94:1 | — | Reported; exempt |
| Disabled on elevated (exempt) | 3.20:1 | — | Reported; exempt |
| Pine against ink (WCAG 1.4.1) | **1.32:1** | 3.0 | **Fails as colour-alone.** Body links are **underlined at rest.** Current and selected use weight 600 and/or a waymark. |

Scrims, white type, ink composited over the ground: `scrim.soft` at 24% is atmospheric only, no type (1.65–1.83:1). `scrim.strong` at 64%: **4.93:1** over white, **5.31:1** over `#F2F2EF`. `scrim.gradient` peak at 72%: **6.46:1** / **6.87:1**. If a caption on a photograph still fails, use a solid pine or white panel. Photographs now sit on or in an elevated panel; the same floors apply.

### Grain on green bands

Allowed, as a subtle asset, on pine bands only (the Briefing, the Pine Band, the continuous footer). Not on white or elevated-grey surfaces, and not over photographs. Codex v2 did ship grain; it stays.

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

A sans-serif display face — **not a serif.** Newsreader and Fraunces are withdrawn. Expressive moments come from **weight contrast**, **size**, and a **tracked uppercase meta line used once**, not from italic serif quotes, and **not from a giant monogram**.

### Recommendation: Bricolage Grotesque for display

**[Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque)**, SIL Open Font Licence 1.1, Mathieu Triay, via Google Fonts. Variable (`wght`, `wdth`). We load **500 and 600** for display (and 500 italic if a quote is set in the display face). Optical / width: default width, or a slight condensation (`wdth` 90–95) on long result lines so the Kindred sentence holds two or three lines.

**Why this face.** It is a handsome, slightly condensed contemporary grotesque with enough character to be remembered, without becoming costume. It looks particularly good as large cream type on a pine band — which is the first impression of this direction. It is not Inter (Skala’s face), not Geist or Outfit or Space Grotesk (current AI-template defaults), and it is free and OFL. A long result line benefits from the condensation. Weight 500 at display size has authority; 600 is reserved for the result when we want a single step more presence, never 700 or 800. **It is not used for decorative indexes or giant initials.** Those uses, in Codex v2, turned a good face into a tell.

**Body and UI remain [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk),** SIL OFL, 400, 400 italic, 500 and 600. Hanken is the wider, calmer neo-grotesk; Bricolage is tighter and more contemporary. The pairing is two sans, with a clear job for each.

### Alternative: Mona Sans

**[Mona Sans](https://fonts.google.com/specimen/Mona+Sans)**, SIL OFL, GitHub, via Google Fonts. Variable (`wght`, `wdth`, `opsz`). Same roles, Hanken unchanged. Calmer, with a true optical-size axis — a more neutral premium. **Decided in `DECISIONS-V2.md`:** Bricolage is the display face; Mona Sans is **not** used. The paragraph above is kept only as the record of why Bricolage was recommended.

Geist, Inter Tight, Outfit, Space Grotesk and Instrument Sans were considered and are not proposed: Geist and Outfit and Space Grotesk are current starter-kit tells; Inter Tight sits too close to Skala’s own Inter.

### Roles

Bind these names, never a family string.

| Role | Token | Face / weight | Use |
|---|---|---|---|
| `font.display` | Bricolage Grotesque 500 (600 for the Briefing result) | Result, fallback H1, case-page Outcome, Pine Band heading, Excerpt quote |
| `font.body` | Hanken Grotesk 400 | Body, lede, proof sentence |
| `font.quote` | Hanken Grotesk 400 italic, or Bricolage 500 for an Excerpt quote | Named quotes |
| `font.ui` | Hanken Grotesk 500; 600 for current and selected | Nav, buttons, labels |
| `font.meta` | Bricolage Grotesque 500, uppercase, tracked | **Only** the Briefing attribution, and “Typical.” Not sector/year on rows. |

### Scale

Body stays **18 / 1.55** in Hanken, locked. Display is sized for a two- or three-line result on the green band. A short fallback heading may use the larger “short” row.

| Style | Mobile | Tablet 768 | Desktop 1024 | Wide 1280 | Face / weight | Tracking | Leading |
|---|---|---|---|---|---|---|---|
| Display (result) | 36–40 clamp / 1.12 | 48 / 1.10 | **56 / 1.08** | **64 / 1.06** | Bricolage 600 | **−0.03em** | as shown |
| Display (short, ≤10 words) | 40 clamp / 1.10 | 56 / 1.08 | 68 / 1.06 | **80 / 1.04** | Bricolage 500 | −0.03em | |
| Heading 1 | 32 / 1.18 | 40 / 1.14 | 48 / 1.12 | 52 / 1.10 | Bricolage 500 | −0.02em | |
| Heading 2 | 24 / 1.25 | 28 / 1.22 | 32 / 1.20 | 32 / 1.20 | Hanken 500 | −0.015em | |
| Heading 3 | 20 / 1.30 | 22 / 1.28 | 24 / 1.28 | 24 / 1.28 | Hanken 500, or Bricolage 500 for client names | −0.01em | |
| Lead | 18 / 1.45 | 18 / 1.45 | **20 / 1.45** | 20 / 1.45 | Hanken 400 | 0 | |
| Quote | 20 / 1.40 | 22 / 1.38 | 24 / 1.35 | 24 / 1.35 | Hanken 400 italic, or Bricolage 500 in an Excerpt | 0 | |
| Body | **18 / 1.55** at every breakpoint | same | same | same | Hanken 400 | 0 | locked |
| **Meta / eyebrow** | **12 / 1.30 / 0.10em**, uppercase | same | **13 / 1.30 / 0.10em** | same | Bricolage 500 | | Briefing and “TYPICAL” only |
| Label | 13 / 1.35 / 0.04em | same | same | same | Hanken 500 | | |
| Caption | 14 / 1.40 / 0.01em | same | same | same | Hanken 400 | | Sector, year, supporting |
| From-price (Briefing cluster) | 16 / 1.4 | same | same | same | Hanken 500 | 0 | cream on pine |
| Button | 16 / 1, optically centred in 44 (md) or 52 (lg) | same | same | same | Hanken 500 | 0 | |
| Proof sentence | 16–18 / 1.45 | same | same | same | Hanken 400 | 0 | cream-muted on pine |

**The uppercase meta line** is used for: the Briefing attribution (`KINDRED CLINIC  ·  HEALTH  ·  2025`), **once per page**; and the word **TYPICAL** on Grow (alongside the pine rule), once. It is **not** used for sector/year on ledger rows (those are Caption, sentence case: “Health, 2025”), and it is **not** a marketing eyebrow above section headings (“CASE STUDIES,” “WHAT WE DO,” “NEW WORK”). Section titles are ordinary headings.

Wordmark: Hanken 500 (or Bricolage 500), 18–20px in the 68px bar, tracking −0.02em, with a 3×16 pine waymark to its left — this is a reserved use of the waymark. Cream on the green Briefing; ink on light sections. A slot, never a billboard.

Font loading: `font-display: swap`; subset Latin (and Latin-ext if needed); preload Bricolage 600 and Hanken 400. Ship both OFL licence files.

---

## Art direction and imagery

Photography is optional. When present, it is proof, not decoration. When absent, the **Excerpt** is the art direction — not a monogram, not an empty frame, not a generated interior.

- Documentary, not stock theatre. Rooms, tables, clinics, materials, hands at work. Overcast or late light. Restrained grade. No teal-and-orange, no Midjourney faces, no handshakes, no “team laughing at a laptop,” no fake logos, no product-UI mockups used as lifestyle.
- Ratios: Ledger stills **3:2**; case-page images **16:9** or up to about **2:1**; the peeking Excerpt about **4:5** (or 3:2 if it holds a still). Explicit width and height. Caption or alt in Caption style.
- Photographs sit **inside** the elevated grey panel (8 or 12px clip), flush. They are not raw full-bleed cuts on the home — except optional full-bleed case-page images after Results, which may go edge to edge on the white sheet.
- Type on a photograph uses `scrim.strong` or `scrim.gradient`, or a solid pine or white panel. `scrim.soft` has no type. No letter painted over the image.
- Never invent an image for Kindred. Never generate “clinic interiors” to fill a gap.

---

## Design assets

### The Waymark (graphic atom)

A short thick vertical bar in **pine** on light, **cream** on green bands. **3×16** beside the wordmark and the current nav item. On a single hero-level moment, **4×48** (4×64 on the Briefing, if used at all). The **4×4 north cut** at the top-right remains — it is our device. Square ends, `radius.none` on the bar itself.

**Reserved uses only:** the wordmark, the current nav item, and **at most one** hero-level moment. It is **not** a section-head prefix, **not** a list bullet, **not** a process-step marker, **not** a floating cream bar above the Pine Band heading. Codex v2 put it on every heading and every row; that invitation is withdrawn.

A 3–4px pine tick on the left of a single Excerpt is a **smaller, different atom**, used once, not a waymark, and not a full-height bar.

### Grain

As specified under Colour. Green bands only.

### The Excerpt (no-image treatment, replaces the Folio)

The Folio — a large Bricolage initial of the client, 120–160px, cropped by a white card — is **withdrawn**. It is a monogram pretending to be a photograph, and it was the most obviously generated asset in Codex v2.

**The Excerpt:** a grey elevated panel (`#E8E8E4`), radius **8 or 12**, **no drop shadow, no monogram, no giant letter.** Inside: a named quote or a one-line result, Bricolage 500 at lead or Heading 2, ink, at a readable measure. Client and a caption underneath, Hanken 400 muted. An optional 3–4px pine tick on the left, short, once. The panel is a pulled quotation from a briefing.

When a still exists, the photograph fills this same panel, clipped, caption below. Kindred ships as a quote Excerpt, never as a “K.” Used as the peeking Briefing object and for a featured no-image case. Quiet ledger rows do not need a panel.

### Proof (in place of Eden’s floating app icons, and of our withdrawn chips)

**No chips, no outline pills, no tags.** At most one cream-muted sentence in Hanken 400 at 16–18, under the Briefing lede: “A six-week engagement, with two review rounds.” Story figures only. Do not repeat the from-price here. If there is no honest figure, omit the sentence. On mobile, the sentence wraps in the same measure as the lede.

Pills are reserved for the one primary (white on pine, pine on light). No outline pills, no pill nav items.

### The peeking Excerpt (in place of Eden’s peeking screenshot)

At the foot of the green Briefing, a grey Excerpt (or a still in the same panel) rises from the band and overlaps the following **white** page by about 40–64px. **No shadow.** The whole panel is the path into the featured case. It must **not** restate the display result verbatim — a named quote is preferred. If there is no featured case, omit the peek — do not leave an empty frame, a monogram, or a fake UI.

### Illustration and icons

No illustration style in the demo. **[Phosphor](https://phosphoricons.com) Regular, MIT, 24px**, one set, only where an icon has a job (menu, close, accordion, form states, pager). Not beside headings, not as orbiting marks, not as the Process spine (a single thin pine rule does that, if one is used). Phosphor, not Lucide — Lucide remains a scaffold tell.

### Cards, radius, shadow

| Token | Value | Use |
|---|---|---|
| `radius.none` | 0 | Waymarks, photographs *inside* a clip, pine bands, tables. |
| `radius.sm` | 8 | Inputs; allowed on the Excerpt if a quieter corner is preferred. |
| `radius.card` | **12** | Price Tablet sheet, Enquiry Sheet, Excerpt (or 8), Strategy’s process panel, honest empty. Moderate, not a 24px “startup” round. |
| `radius.pill` | 999 | **The primary button only.** Not chips (there are none). |
| `shadow.card` | **`none`** (token value `0 0 0 transparent`) | Default. The grey fill is the elevation. |
| `shadow.card-hover` | **`none`** | Fine-pointer hover is a fill change to `#E3E3DF`, or a hairline, not a lift. |

The Price Tablet remains **one sheet**, not three SaaS cards — the rounding is on the sheet, which is now grey on white. Optional 1px decorative hairline `#C8C8C3`.

---

## Layout rhythm

- **Grid.** 12 columns from 768; 4 on mobile. Gutter 16 / 24 / 24. Content max **1280**, measure **66ch**. There is **no waymark rail** on light chapters (the rail invited a waymark on every section). On the **centred Briefing**, any single waymark sits centred above the uppercase meta, or is omitted.
- **The Briefing is centred**, on a full-bleed pine band: result, lede, proof sentence, CTA cluster, peeking Excerpt. This is the Eden adoption. The result still leads; the from-price still sits in the first viewport. The Case Ledger, Price Tablet and Process Path stay **left-weighted, un-numbered and chaptered**, not a centred SaaS stack — we do not centre the whole site.
- **Section openings.** The pattern “heading left, link or dek right, waymark, hairline” may be used **at most once** on a page, if at all. Other sections: a heading, optional one-line dek directly underneath, left-weighted, no waymark. “See all” is a text link at the **end of the content**.
- **Light chapters sit on the white canvas.** They are not alternating grey slabs. Elevation is for objects, not for whole sections.
- **Section spacing**, unchanged in spirit:

  | Token | Mobile | Tablet | Desktop / wide | Typical use |
  |---|---|---|---|---|
  | `space.hero.top` | 96 | 128 | **192** | Top of the Briefing, so the result clears the 68px nav. |
  | `space.section.sm` | 64 | 72 | **80** | Between related chapters. |
  | `space.section` | 96 | 104 | **120** | Default. |
  | `space.section.lg` | 120 | 144 | **176** | After the Briefing (accounting for the peek overlap), before the Pine Band. |

  8pt foundation, plus locked 44, 52, 68, and focus 2. Design from 360; **320 must not overflow.** Prefer vertical space (24–40px) to hairlines between list items.

- **Nav.** 68px, sticky. On the green Briefing: solid pine (the top of the band), cream links, cream wordmark, the primary reduced to quiet cream text **with no underline**. After the Briefing scrolls away: solid **white**, ink links, pine primary. No frosted glass.

---

## Signature components

Six names, 1:1 with UX Lead. Conversion behaviour is theirs; visual treatment is ours. Structural alternatives for v3 are theirs; see NOTES-FOR-UX and UX-CRITIQUE-V2.

### 1. The Briefing (hero)

A full-bleed **pine band** with 6% grain. Centred, generous. Reading order: optional uppercase attribution (`KINDRED CLINIC  ·  HEALTH  ·  2025`, cream-muted meta), **once**; the Kindred **result** in Bricolage 600 at 56 / 64, cream, two or three lines, a centred measure of about 16–22ch; Hanken lede at 20 / 1.45, cream-muted, about 36–42ch, centred; a **proof sentence** in Hanken 400 at 16–18, cream-muted (“A six-week engagement, with two review rounds.”) — not chips; **one white pill**, pine text, **Start a project** → `/contact`; from-price in cream, 16 / 500, in that cluster, linked to `#price-tablet`. At the foot: the **peeking Excerpt** (Kindred as a quote, not a “K”), not restating the display line. No second pill, no Sample chip, no app icons, no product screenshot, no outline chips. On mobile: the same stack; peeking panel still in the first one-and-a-half screens.

Nav CTA is quiet, no underline, while this primary is on screen; the pine pill appears in the nav after the band scrolls away. Fallback heading as settled in item 2.

### 2. The Case Ledger

Text-first, **un-numbered**, on the white canvas. **No indexes, no row waymarks, no uppercase eyebrows.**

- **Featured first case (Kindred):** an Excerpt panel (grey, a quote) beside or above a larger setting of the client (Bricolage 500 at Heading 1 or 2) and a companion or approach line, not the hero sentence verbatim. Sector and year as a caption: “Health, 2025.” More height than its neighbours.
- **The other cases:** quieter text entries, uneven measure, space instead of hairlines (a single rule under the last entry is allowed). Client in Bricolage 500 or Hanken 500 at Heading 3; result in body; caption “Consulting, 2025.”
- The whole row or entry is the target. “See all case studies” is a text link at the **end of the list**. Empty rules as settled in item 5. Case pages: Outcome in Bricolage H1, then Challenge, Approach, Results; optional image after Results. Stills, if present, sit in the Excerpt panel at 3:2.

### 3. The Price Tablet

One **grey elevated rate sheet** (`#E8E8E4`, 12px radius, **no shadow**) on the white canvas — not three SaaS plan-cards, and not a white floating card. Your figures: Position, **Grow** (typical), Brand + growth. Grow has a 4px **pine** rule and the word **TYPICAL** in uppercase meta, once — not a chip, not colour alone. One pine primary on the Grow row, to `/contact?service=grow`. The other two rows do **not** repeat the label “Start a project”; the name and the price are the target, or a quieter verb if a link is required. Heading: **Know the price before we talk.** “See all services,” if present, sits at the end, not opposite the heading. The named Kindred quote should not live here if it already lives on the peeking Excerpt.

### 4. The Enquiry Sheet

A **grey elevated** letter-panel, 12px radius, **no shadow**, an optional 4px **pine** left edge (once; this is a tick, not a waymark). Reply-time above the fields. Four fields, 44px **white** inputs, **Send the brief** as a pine pill. Direct email beside or under. Same behaviour as CONVERSION.md.

### 5. The Process Path

Four steps (Intro, Plan, **Strategy**, Handover), your outcomes. **No numbers of any kind** — the Bricolage index invitation is withdrawn. Names only, Hanken 500 or Bricolage 500 at Heading 3. **One** continuous thin pine spine (a 2px vertical rule on mobile; on desktop, a single horizontal hairline behind the names, or a vertical spine if stacked) — not a waymark on every step.

**Uneven, not four equal columns.** Strategy is the decisive step: it gets the grey elevated panel and the fuller “Strategy your team can put to work” copy, **absorbing the separate Strategy card** so the step is not said twice. The other three are short name + outcome, in body, with more air than a grid cell. All steps in the first HTML. Structural alternative: UX Lead.

### 6. The Pine Band (closing CTA)

Full-bleed pine, 6% grain, cream type — continuous with the footer below. Bricolage heading **Ready when you are.** (Amos chose to keep it, 2026-11-13). Supporting line in Hanken lead, cream-muted: reply-time or from-price. **One white pill**, pine text, **Start a project**. No second button. **No floating cream waymark** above the heading — a heading and a button are enough. Footer, same pine, quieter: wordmark (waymark allowed, as a reserved use), the old slogan in Hanken italic or Bricolage 500 at lead size, nav mirror, email, legal, ©, and the disclosure in cream-muted caption: **Northway is a demonstration studio that ships with this template.**

---

## Updated token values

Existing token **names** are reused. Accent is pine `#1F3A2E`. The copper primitive stays removed. Sample-badge tokens stay unused. This pass inverts canvas and raised, and sets card shadow to none.

### Primitive colour, previous Eden pass → this revision

| Primitive | Previous Eden pass | This revision | Notes |
|---|---|---|---|
| `primitive.color.canvas` | `#F2F2EF` | **`#FFFFFF`** | The page. Amos’s call. |
| `primitive.color.surface` | `#F2F2EF` | **`#E8E8E4`** | Elevated. Adjusted for visible separation from white. |
| `primitive.color.surface-raised` | `#FFFFFF` | **`#E8E8E4`** | Same as surface: raised *is* the grey. White is canvas. |
| `primitive.color.surface-hover` | `#E8E8E4` | **`#E3E3DF`** | |
| `primitive.color.surface-pressed` | `#E3E3DF` | **`#DEDED9`** | |
| `primitive.color.mist` | — | `#F2F2EF` | Optional leftover; not canvas, not elevated. |
| `primitive.color.ink` | `#18221D` | **`#18221D`** | Unchanged. |
| `primitive.color.ink-muted` | `#4C5550` | **`#4C5550`** | 6.28:1 on elevated; 7.71:1 on canvas. |
| `primitive.color.ink-disabled` | `#7B827E` | **`#7B827E`** | |
| `primitive.color.pine` | `#1F3A2E` | **`#1F3A2E`** | Unchanged. |
| `primitive.color.pine-hover` | `#142F22` | **`#142F22`** | |
| `primitive.color.pine-pressed` | `#0E1F15` | **`#0E1F15`** | |
| `primitive.color.cream` | `#F7F7F4` | **`#F7F7F4`** | |
| `primitive.color.cream-muted` | `#D5D8D4` | **`#D5D8D4`** | |
| `primitive.color.inverse` | `#1F3A2E` | **`#1F3A2E`** | Same as pine; one close. |
| `primitive.color.border-hairline` | `#C8C8C3` | **`#C8C8C3`** | |
| `primitive.color.border-input` | `#636B66` | **`#636B66`** | |
| `primitive.font.family.display` | Bricolage Grotesque | **Bricolage Grotesque** | Decided. Mona Sans is not used. |
| `primitive.font.family.body` | Hanken Grotesk | **Hanken Grotesk** | unchanged |
| `primitive.font.size.body` | 18 | **18** | 1.55 leading, locked. |
| `primitive.radius.card` | 12 | **12** | 8 allowed on the Excerpt. |
| `primitive.shadow.card` | `0 8px 24px` at 8% ink | **`none`** (`0 0 0 transparent`) | The fill is the elevation. |
| `primitive.motion.duration.slow` | 400ms | **400ms** | unchanged. |

### Semantic aliases (proposed)

```json
{
  "semantic": {
    "color": {
      "bg": { "$value": "{primitive.color.canvas}" },
      "surface": {
        "default": { "$value": "{primitive.color.surface}" },
        "raised": { "$value": "{primitive.color.surface-raised}" },
        "hover": { "$value": "{primitive.color.surface-hover}" }
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
        "bg": { "$value": "{primitive.color.canvas}" },
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
    "input": {
      "bg": { "$value": "{primitive.color.canvas}" },
      "border": { "$value": "{semantic.color.border.input}" }
    },
    "link": {
      "color": { "$value": "{semantic.color.accent.default}" },
      "decoration": { "$value": "underline" }
    }
  }
}
```

On light, `button.primary` is the pine pill with cream text. On pine bands, use `button.on-band`: **white pill, pine text** (white is `canvas`). Focus: 2px pine ring, 2px offset, `:focus-visible` only; cream ring on pine bands. Pine on elevated is 10.04:1; pine on white is 12.33:1. Body links underlined at rest. The nav primary, while a pill is in view, is an exception: quiet, **no** underline, no heavier weight than its neighbours.

These values are proposed in this file only. The `template-brand` tokens on disk and in the repo are **not** changed in this pass.

---

## CONVERSION.md impacts

Content and behaviour MUSTs are honoured. These are the points that need a note or a wording change on the conversion side — listed so UX Lead can update, not so we silently fight a MUST. UX Lead is already revising rules that pushed toward generic output (fixed section anatomy, numbered steps, a CTA in every section). This list is the visual side of that same pass.

1. **Eyebrow carve-out, tightened.** The Briefing may have one tracked uppercase attribution (`KINDRED CLINIC  ·  HEALTH  ·  2025`). “TYPICAL” on Grow remains, once. **Request:** forbid decorative marketing eyebrows, and also forbid uppercase sector/year on every ledger row. Sector and year are caption sentences. We will not put a marketing eyebrow above section headings.
2. **Briefing layout.** Still a **centred pine band**, now with a peeking **Excerpt** (not a Folio) at the foot. The result still leads; the from-price still sits in the first-view CTA cluster; there is still one primary; Kindred still works with no photograph. Proof is a sentence, not chips. **Request:** update the structural description if it still mentions a 7+5 split, a Folio, or proof chips.
3. **CTA colour.** On green: **white pill, pine text**. On light: **pine pill, cream text**. Nav primary is quiet **with no underline** while a pill is in view. Visual only; CONVERSION defers this.
4. **Footer on inverse tokens.** Inverse is the **same pine** as the Pine Band. Band and footer are one continuous green close. No floating cream waymark above the close heading. The disclosure, nav mirror and legal still live in the footer, as required.
5. **Type and surfaces.** Display is **Bricolage Grotesque** (decided; Mona is not used). **Canvas is white `#FFFFFF`. Elevated is grey `#E8E8E4`, no drop shadow.** Cards are no longer white with a soft shadow. Body 18 / 1.55 is unchanged.
6. **No numbers, no fixed section anatomy, one “see all” placement.** Process and ledger carry no indexes. The heading-left / link-right section head is used at most once; “see all” sits at the end of the content. The separate Strategy highlight card is withdrawn (its copy folds into the Process Path). These align with UX Lead’s intended CONVERSION revisions; listed so the visual and conversion texts say the same thing.
7. **Price-row labels.** Only Grow uses the primary label “Start a project” on the Tablet. The other rows should not repeat it (name and price as the target, or a quieter verb). Listed because it touches the “CTA in every section” revision.

No other conversion MUST is affected. Sample-badge policy, one primary, published prices, Grow’s non-colour cue, text-first cases, optional images, four-field form, story figures, and the page list are unchanged.

---

## Open choices

The accent is pine `#1F3A2E`. The display face is **Bricolage Grotesque** (decided in `DECISIONS-V2.md`; Mona Sans is not used). The canvas is white; elevated is grey. One footer disclosure replaces Sample badges (also decided there). Copper, oxblood, Newsreader, Fraunces, the Folio monogram, process indexes and proof chips are no longer on the table.

1. **Elevated grey `#E8E8E4` (recommended) rather than `#F2F2EF`.** Amos allowed an adjustment. `#F2F2EF` is 1.12:1 against white and does not read as a surface; `#E8E8E4` is 1.23:1, same family, all required text and UI pairs passing (tightest text 6.28:1, tightest UI 4.47:1). Confirm, or pick a neighbour (`#EBEBE6` is quieter, `#E3E3DF` is heavier). This is the only visual choice still open.

Iconography stays Phosphor Regular. The six section names, the result-first Briefing, the fallback heading, the from-price placement, the Excerpt, the `/case-studies` empty, and the story-figure rule remain settled.

A small clash with UX Lead’s Price section (Amira’s quote also sitting under the Price Tablet) is recorded in CRITIQUE-V2. The quote belongs once, on the peeking Excerpt, which is also CONVERSION’s MUST.
