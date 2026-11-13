# Displace Agency: full Refero style

- Site: [Displace Agency](https://displace.agency) (displace.agency)
- Refero style UUID: `fe0ac316-3a0e-4041-9da6-39c05efe2d59`
- Retrieved: 13 November 2026, via Refero `refero_get_style`.
- This is the full style guide Refero returned, with em dashes normalized to hyphens so the file matches Northway writing rules. Measurements, tokens and rules are otherwise as returned.

---

# Displace - gallery meets operating manual

## Overview

An image-led, Swiss-grotesk style that makes commercial products feel curated rather than packaged. Cinematic photography and oversized regular-weight language alternate with white editorial grids, compact labels and matter-of-fact pricing. Black and white dominate; a deep green invitation and small brightly colored capability tiles interrupt the restraint. It suits design-conscious products and services that need both an emotional introduction and unusually clear operational detail.

### Essentials

- A cinematic promise with an operational receipt: an 810px full-bleed media stage carries a left-aligned 64px/62px regular headline, -0.045em tracking, short supporting text and a compact proof strip before the actions.
- The interface floats like a small desktop toolbar: a centered 392px-wide navigation stack combines a 40px light tab row with a 40px translucent black search row; identity and utility controls remain separate at the sides.
- Regular-weight type does the heavy lifting: 48px/1 section statements with -0.04em tracking sit beside much smaller 12px captions; uppercase 24px/1.1 headings mark image collections rather than shouting sales claims.
- Actions are short rectangular instruments, not pills: 36px high with 3px corners, 15px side padding and 13px/1 labels; pair a solid white action with a fine white-outline alternative over dark media.
- Color is concentrated, not sprinkled: keep the structural majority black, white and pale gray; put deep green in a full-width conversion band and saturated hues in a compact 3-column capability mosaic, not in every section.
- Proof is staged as an exhibition: large photographic panels combine real environments with smaller floating interface windows; use 451×601px portrait panels in 3-column project rows. For products without lifestyle media, photograph a real usage context and overlay one credible working view.
- The ending is a spacious black invitation, not a utility afterthought: a 48px/1 statement, a 480px-wide white arrow action, a narrow navigation column, a direct email callback form and two dark ecosystem panels create a substantial closing world. Carry the floating 261×70px contact launcher throughout.

## Colors

### Brand

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Review green | `#048060` | `--color-review` | background | Single broad invitation band; white text and pale translucent reassurance chips. |

### Accent

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Electric blue | `#146ef5` | `--color-capability-blue` | surface | A capability tile with a white symbol and label. |
| Signal red | `#f03e2f` | `--color-capability-red` | surface | A capability tile with a white symbol and label. |
| Violet | `#635bff` | `--color-capability-violet` | surface | A capability tile with a white symbol and label. |
| Leaf green | `#95bf46` | `--color-capability-green` | surface | One tile in a compact capability mosaic; not a replacement for the deep green invitation. |

### Neutral

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| White | `#ffffff` | `--color-paper` | background, text, action | Default reading canvas, inverse text and primary actions on dark backgrounds. |
| Black | `#000000` | `--color-ink` | text, background, action | Primary text on light sections; dark hero foundation and closing canvas. |
| Warm black | `#171715` | `--color-launcher` | surface | Persistent contact launcher, visually distinct from the pure black page ending. |
| Near black | `#1c1c1c` | `--color-tile-dark` | surface | One dark tile in the compact capability mosaic. |
| Recessed charcoal | `#262626` | `--color-recess` | surface | Email field, ecosystem thumbnails and dark metadata chips. |
| Graphite | `#484a4c` | `--color-support` | text, border | Readable supporting paragraphs and fine rules on black. |
| Caption gray | `#686c6d` | `--color-muted` | text, link | Secondary captions, category labels and subdued link hover text. |
| Warm gray | `#cfcdc4` | `--color-launcher-caption` | text | Small launcher descriptor. |
| Light rule | `#dbdbdb` | `--color-rule` | border, text | Separators on light information lists; hover fill for the wide closing action and light labels on dark metadata. |
| Pale gray | `#ededed` | `--color-panel` | surface | Pricing cards, category labels and the light navigation row. |
| Warm ivory | `#f3f1e9` | `--color-launcher-text` | text, border | Launcher title and waveform; also the source hue of its 17% border. |

### Page-type variants

| Only for | Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- | --- |
| case-study editorial notes | Silver gray | `#b3b3b3` | `--color-attribution` | text | Secondary attribution on dark editorial quotes. |

## Typography

- **Suisse Intl** - All marketing headings, paragraphs, prices, labels and navigation. Neutral neo-grotesk with a high x-height; regular weight keeps even monumental lettering unforced. If unavailable, use **Inter**. Use 400 throughout; preserve tight display tracking and check line breaks. Font stack: "Suisse Intl", "Inter", Helvetica, Arial, system-ui, sans-serif.

| Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| display | Suisse Intl | 400 | 64px | 62px | -0.045em | fixed | Default landing-page promise over photographic media. |
| heading | Suisse Intl | 400 | 48px | 1 | -0.04em | fixed | Offer statements, invitation band and the substantial closing statement. |
| price | Suisse Intl | 400 | 44px | 46px | -0.045em | fixed | Prices in landing-page offer cards. |
| hero-price | Suisse Intl | 400 | 28px | 30px | -0.02em | fixed | Starting-price line in the photographic opening. |
| section-label | Suisse Intl | 400 | 24px | 1.1 | -0.01em, uppercase | fixed | Image collection headings and short editorial section markers. |
| support-lead | Suisse Intl | 400 | 24px | 26px | -0.02em | fixed | Promise text below an offer and descriptive copy in the conversion band. |
| feature-title | Suisse Intl | 400 | 18px | 1.2 | -0.02em | fixed | Benefit titles below landscape demonstrations; also short case-study introductions. |
| body | Suisse Intl | 400 | 16px | 21px | normal | fixed | Main explanatory paragraphs. |
| utility | Suisse Intl | 400 | 16px | 21px | normal | fixed | Utility labels and footer navigation; use this explicit body-derived line box for implementation. |
| launcher-title | Suisse Intl | 400 | 15px | 1.1 | -0.016em | fixed | Persistent contact launcher title. |
| small-body | Suisse Intl | 400 | 14px | 19px | normal | fixed | Short scope summaries inside pricing cards. |
| card-title | Suisse Intl | 400 | 14px | 1.2 | normal | fixed | Project names beneath portrait media. |
| caption | Suisse Intl | 400 | 13px | 1 | normal | fixed | Compact control text with an explicit line box. Navigation tabs, category text and project descriptions use the smaller 12px size with normal line height. |
| action | Suisse Intl | 400 | 13px | 1 | normal | fixed | Compact primary and secondary conversion buttons. |
| proof-copy | Suisse Intl | 400 | 13px | 17px | normal | fixed | Result sentence inside the compact hero proof strip. |
| launcher-label | Suisse Intl | 400 | 10px | 1.1 | 0.065em, uppercase | fixed | Descriptor beneath the launcher title. |

### Page-type variants

| Only for | Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| case-study openings | project-display | Suisse Intl | 400 | 288px | 0.8 | -0.04em | size 20vw | Centered, tightly stacked project name over a full-bleed image; the title layer is enlarged with scale(1.3672). |
| detailed service and pricing pages | service-display | Suisse Intl | 400 | 216px | 0.92 | -0.05em | size clamp(88px, 15vw, 216px) | Single-word service chapter headings. |
| detailed service and pricing pages | service-price | Suisse Intl | 400 | 64px | 0.9 | -0.045em | fixed | Right-aligned price above ruled scope rows. |
| case studies | project-body | Suisse Intl | 400 | 40px | 1.1 | -0.04em | fixed | Large editorial explanation and case-study closing invitation. |
| capability directories and case-study notes | editorial-lead | Suisse Intl | 400 | 32px | 1.1 | -0.04em | fixed | Asymmetric directory introduction and editorial quotations. |
| detailed service and pricing pages | promise-heading | Suisse Intl | 400 | 30px | 1.1 | -0.03em | fixed | Large plain-language promise in a gray disclosure panel. |
| detailed service and pricing pages | faq-question | Suisse Intl | 400 | 24px | 1.1 | -0.01em | fixed | Sentence-case questions in ruled disclosure rows. |
| detailed service and pricing pages | faq-answer | Suisse Intl | 400 | 14px | 1.3 | normal | fixed | Subdued answers below disclosure questions. |

Sizes are for a 1440px-wide desktop window. Recipes with a viewport formula grow and shrink with the window; use the formula (for example in `clamp()`), not the fixed pixel value.

**Notes:**

- Use one regular cut rather than weight changes to separate roles. Headline hierarchy comes from size, width and placement.
- Tracking tightens from normal at 12-16px to -0.04em at 48px and -0.045em at 64px. Uppercase section labels remain only lightly tightened.
- Keep body measures narrow even when media spans almost the entire viewport: the hero support paragraph is capped at 560px; the closing headline at 720px. The default hero headline occupies roughly the left half visually, with an 880px content limit.

## Layout

**Density:** Airy at section scale, compact at interface scale: large image fields and long pauses contrast with tiny chips and tight toolbar controls.

### Spacing

| Value | Use |
| --- | --- |
| 3.2px | Internal separation of tiny metadata fragments. |
| 5px | Category chip gaps and compact vertical labels. |
| 10px | Button pair gaps, card image-to-caption spacing and pricing card gutters. |
| 15px | Primary project-grid gutters, tile padding and action side padding. |
| 20px | Offer-card padding and common text-stack gaps. |
| 28.8px | Desktop page side gutters. |
| 30px | Major editorial column gaps and case-study image-section padding. |
| 60px | Capability-grid row separation, secondary section padding and detailed pricing-column gaps. |
| 80px | Project-feed vertical padding and footer group separation. |
| 90px | Green invitation-band vertical padding. |
| 105px | Top padding of the black closing section. |
| 120px | Lead-in to major white sections and editorial pauses around case-study captions. |

### Containers and grids

- **page-gutters**: side padding 28.8px. Nearly full-width desktop canvas; do not constrain all sections to a centered narrow container.
- **offer-split**: 2 columns · gap 30px. One-third introductory statement beside two-thirds cards or supporting copy.
- **project-grid**: 3 columns · gap 15px. Equal 451px-wide portrait project panels across the desktop canvas.
- **hero-copy**: max width 880px. Left-aligned text stack over a full-bleed image; support paragraphs stop at 560px.
- **closing-copy**: max width 720px. Broad but deliberately incomplete-width closing statement; leave the right half black.
- **editorial-measure** (only for case studies): max width 960px. Large case-study paragraphs and centered specification or quote areas.
- **service-columns** (only for detailed service and pricing pages): 2 columns · gap 60px. Two equal 553px columns offset 216px from the page gutter; scope and prices left, gray promise panel right.
- **faq-measure** (only for detailed service and pricing pages): max width 860px. Left-offset question column with answers capped at 640px.

## Corner radius

| Element | Radius |
| --- | --- |
| controls-and-panels | 3px |
| proof-thumbnail | 2px |
| launcher | 0px |

## Surfaces and depth

### Shadows

| Name | Value | Use |
| --- | --- | --- |
| launcher | `rgba(0, 0, 0, 0.133) 0px 6px 24px 0px` | Small persistent contact control, not general-purpose cards. |

### Surfaces

#### Reading canvas · level 0

**Use:** Default marketing body and directory background.

**CSS:** `background: #ffffff; color: #000000`

#### Black stage · level 0

**Use:** Image-led opening foundation, closing section and extended case-study gallery.

**CSS:** `background: #000000; color: #ffffff`

#### Pale panel · level 1

**Use:** Offer cards and compact labels.

**CSS:** `background: #ededed; border-radius: 3px; box-shadow: none`

**Transfer:** Use flat fill rather than elevation to group commercial information.

#### Invitation band · level 0

**Use:** Concentrated conversion break.

**CSS:** `background: #048060; color: #ffffff; padding: 90px 28.8px`

**Observed:** Full-width horizontal interruption; reassurance labels use white at 16% alpha.

**Transfer:** Keep one strong chromatic interval against otherwise neutral sections.

#### Closing canvas · level 0

**Use:** Substantial final invitation and contact area.

**CSS:** `background: #000000; color: #ffffff; border-top: 1px solid #484a4c; padding: 105px 28.8px 20px`

**Observed:** A 1090px-tall desktop ending with substantial negative space rather than a narrow final bar.

**Transfer:** Let contact and related destinations occupy a real section.

#### Proof glass · level 1

**Use:** Small evidence strip on moving photographic media.

**CSS:** `background: rgba(0, 0, 0, 0.58); backdrop-filter: blur(14px); border-radius: 3px`

**Observed:** The image remains visible through the darkened material.

**Transfer:** Reserve glass for overlays, not ordinary white-page cards.

#### Promise panel · level 1

**Only for:** detailed service and pricing pages

**Use:** Explicit guarantee and conditions beside prices.

**CSS:** `background: #ededed; border-radius: 0px; box-shadow: none`

**Observed:** An unrounded disclosure panel accompanies a ruled scope list.

**Transfer:** Make the promise and its limits equally available.

## Components

### Floating navigation

**Use:** Persistent global orientation.

**CSS:** `display: flex; align-items: center; justify-content: center; width: 392px; height: 40px; padding: 5px; gap: 2px; background: #ededed; border-radius: 3px 3px 0px 0px`

**Text style:** `caption` - Suisse Intl 400 · 13px/1

**Observed:** Centered under a fixed 70px header, independent from the dark identity block at left and small square utility buttons at right. A same-width dark translucent search row sits directly below, with 15px side padding and a small magnifier. Its enclosing layer has 30px backdrop blur. Tabs are 30px high with 12px side padding; the selected tab is white.

**States:** Declared: hover tabs use white background and #686c6d text; focus-visible uses a 2px solid #3c00ff outline with 2px offset and 3px corners.

**Transfer:** Keep a small floating control cluster rather than a full-width navigation bar.

### Primary button

**Use:** Main action over dark imagery or a colored band.

**CSS:** `display: flex; align-items: center; gap: 10px; height: 36px; padding: 0px 15px; background: #ffffff; color: #000000; border: 1px solid transparent; border-radius: 3px`

**Text style:** `action` - Suisse Intl 400 · 13px/1

**Observed:** Compact text followed by an 11px diagonal arrow. The light-body variant is black with white lettering; the neutral alternative uses pale gray.

**States:** Declared: hover opacity 0.86; focus-visible outline 2px solid #3c00ff, offset 2px, radius 3px.

**Transfer:** Keep the label specific to the next step, not an abstract promise.

### Outline button

**Use:** Secondary action beside the primary on photographic media.

**CSS:** `display: flex; align-items: center; gap: 10px; height: 36px; padding: 0px 15px; background: transparent; color: #ffffff; border: 1px solid rgba(255, 255, 255, 0.6); border-radius: 3px`

**Text style:** `action` - Suisse Intl 400 · 13px/1

**Observed:** A small downward arrow signals continuation below, contrasting with the primary action's outward diagonal arrow.

**States:** Declared: hover opacity 0.86; focus-visible outline 2px solid #3c00ff with 2px offset.

### Proof strip

**Use:** Put a concrete result close to the opening promise.

**CSS:** `display: flex; align-items: center; gap: 14px; max-width: 600px; padding: 12px 14px; background: rgba(0, 0, 0, 0.58); backdrop-filter: blur(14px); border-radius: 3px`

**Text style:** `proof-copy` - Suisse Intl 400 · 13px/17px

**Observed:** A 56px square thumbnail precedes a compact two-level result: project name at 14px/17px, then one short outcome sentence. The strip is about 80px high and sits above the action pair.

**Transfer:** Use one substantiated result and a related image; keep context next to the number.

### Offer card

**Use:** A compact comparable offer on the main landing page.

**CSS:** `display: flex; flex-direction: column; padding: 20px; background: #ededed; border-radius: 3px`

**Text style:** `price` - Suisse Intl 400 · 44px/46px · tracking -0.045em

**Observed:** Name first in utility type, a large regular-weight price after a 26px pause, then a short small-body scope statement. Three equal cards sit within the wider side of the offer split; the shared promise and action pair sit beneath rather than inside every card.

**Transfer:** Use short packages with comparable scope; keep the cards flat and typographic.

### Project card

**Use:** Visual proof and related-work recommendations.

**CSS:** `display: flex; flex-direction: column; gap: 10px; color: #000000`

**Text style:** `card-title` - Suisse Intl 400 · 14px/1.2

**Observed:** A 3:4 portrait media area with 3px corners precedes a caption row: small square thumbnail at left, name and 12px muted description at right. Media combines an environmental photograph, client identity at its top edge and a smaller floating working interface. Cards have no encompassing border or fill.

**States:** Declared: focus-visible outline 2px solid #3c00ff, offset 2px, radius 3px.

**Transfer:** Make each card an authored visual case rather than a generic icon-and-text benefit.

### Capability tile

**Use:** Small colorful capability mosaic alongside editorial copy.

**CSS:** `display: flex; flex-direction: column; justify-content: space-between; align-items: flex-start; gap: 10px; padding: 15px; background: #95bf46; color: #000000; border-radius: 3px`

**Text style:** `utility` - Suisse Intl 400 · 16px/21px

**Observed:** About 203×99px, with a 40px mark above a small label. The 3-column mosaic mixes leaf green, blue, red, violet, pure black and near black. Non-green tiles use white text; labels are visually small, not display type.

**Transfer:** Use meaningful product categories or integrations. For a new ecosystem, use original simple symbols, maintaining the colored-block construction.

### Closing arrow action

**Use:** Wide invitation immediately beneath the closing statement.

**CSS:** `display: flex; justify-content: space-between; align-items: center; gap: 9.6px; max-width: 480px; padding: 10px 15px; background: #ffffff; color: #000000; border-radius: 3px`

**Text style:** `utility` - Suisse Intl 400 · 16px/21px

**Observed:** A long low white bar, about 41px high, with text aligned left and a 16px diagonal arrow pushed to the far end.

**States:** Declared: hover background #dbdbdb and text #000000; focus-visible outline 2px solid #3c00ff with 2px offset.

### Callback field

**Use:** Direct contact form inside the black closing section.

**CSS:** `width: 480px; padding: 20px 9.6px 4px; background: #262626; border: 1px solid transparent; border-radius: 3px`

**Text style:** `caption` - Suisse Intl 400 · 13px/1

**Observed:** One email field, about 47px high, with a small label inside; explanatory reply expectations follow below, then an unboxed uppercase send action. The form is not presented as a newsletter subscription.

**Transfer:** Ask for the minimum contact detail and explain the actual next response.

### Contact launcher

**Use:** Persistent lower-right contact entry.

**CSS:** `display: flex; position: fixed; align-items: center; gap: 20px; width: 261px; height: 70px; padding: 16px 20px; background: #171715; color: #f3f1e9; border: 1px solid rgba(243, 241, 233, 0.17); border-radius: 0px; box-shadow: rgba(0, 0, 0, 0.133) 0px 6px 24px 0px`

**Text style:** `launcher-title` - Suisse Intl 400 · 15px/1.1 · tracking -0.016em

**Observed:** Five ivory waveform bars precede a two-line title and tiny uppercase descriptor; a fine right arrow closes the control. It floats near the lower-right corner across light and dark content.

**States:** Declared: hover background rgb(52, 52, 46) and translateY(-2px); focus-visible solid 2px outline with 3px offset.

**Transfer:** Retain a compact persistent help entry with a truthful channel descriptor.

### Category chip

**Only for:** capability directories and project metadata

**Use:** Compact filtering and taxonomy beside small provenance labels.

**CSS:** `display: flex; gap: 3.2px; padding: 2px 5px; background: #ededed; color: #686c6d; border-radius: 3px`

**Text style:** `caption` - Suisse Intl 400 · 13px/1

**Observed:** Only about 20px high, never pill-shaped. Directory chips form a tight horizontal filter row; dark case-study metadata reverses to charcoal with light lettering.

**States:** Declared: hover black background and white text; focus-visible outline 2px solid #3c00ff with 2px offset.

### Question row

**Only for:** detailed service and pricing pages

**Use:** Objection handling with restrained disclosures.

**CSS:** `border-bottom: 1px solid #dbdbdb; color: #000000`

**Text style:** `faq-question` - Suisse Intl 400 · 24px/1.1 · tracking -0.01em

**Observed:** An 860px-wide list with a top rule and roughly 80px closed rows. The details wrapper has 15px vertical padding; summary has 10px vertical padding, question left and a small plus right. Answers use faq-answer type and stop at 640px. Closed rows, not exposed answer paragraphs, define the resting view.

**Transfer:** Use genuine questions, explicit answers and native accessible disclosure behavior.

## Imagery and graphics

### Cinematic usage stage

**Use:** Full-bleed opening media and large photographic proof.

**Observed:** Candid sports-fashion footage shows a person close to camera against teal fencing and grass, with slightly muted, darkened color. Elsewhere warm furnished rooms and dark sculptural lighting show real material context. Media fills the whole 1440×810px opening, with text laid over it rather than alongside a separate mockup.

**Transfer:** Use a single photograph or short film of the new product in use: tactile, inhabited and directional in its light. Keep a clear enough region for the promise. A strong still image is the minimum version; a generic mesh gradient is not equivalent.

**Build:** Place a cover-fit image across the stage; add a black translucent veil between image and text, strengthening the veil where necessary for white-text contrast. Keep natural image color and avoid tinting it to the accent palette.

### Interface in an environment

**Use:** Portrait project panels and landscape feature demonstrations.

**Observed:** A warm interior, grayscale still life, dim gym or lit object occupies the background. A smaller bright interface window floats over it with restrained depth. Project panels are 3:4; directory feature panels are 4:3. Brand marks sit at the upper edge; one working task is shown at a readable visual scale, not an entire collage of screens.

**Transfer:** Show a real product environment plus one relevant interaction. For physical products, use a close detail or small information card in place of a software window.

**Build:** Use a cover-fit photo as the back layer. Add one rectangular white content window at roughly one-third to one-half panel width, inset from an edge, with a very soft black shadow. Use a small title or original identity mark at the upper-left. Keep window rounding subordinate to the page's 3px frames; internal product styling belongs to the demonstrated product.

### Waveform contact mark

**Use:** Inside the persistent contact launcher.

**Observed:** Five narrow vertical ivory bars vary symmetrically in height, from about 10px at the ends to 24px at center, each 3px wide with 3px gaps.

**Transfer:** Recreate the signal directly with simple shapes rather than an unrelated chat bubble.

**Build:** Use five 3px-wide rectangles in a centered flex row with 3px gaps and heights 10px, 17px, 24px, 17px, 10px. Fill with warm ivory; place beside the launcher title.

### Paper-backed gallery plates

**Only for:** case studies

**Use:** Long-form visual demonstration chapters.

**Observed:** Large interface views sit on warm off-white rectangular boards against pure black. The board is about 1222px wide inside the page; the view is further inset with broad breathing room and a soft physical shadow. Alternation includes large single plates, 684×912px paired portraits and 346×260px miniatures that extend horizontally beyond the viewport.

**Transfer:** Present a few complete, legible product states as gallery plates rather than decorating every paragraph with a small mockup. Preserve both the black outer space and warm backing.

**Build:** Create a warm off-white board around a white product view, leaving a generous border on all sides. Add a soft low-contrast shadow beneath the view, not beneath the board; the board itself stays flat against black. Alternate 4:3 plates and paired 3:4 plates.

### Icons

**Observed:** Small utilitarian SVGs: mostly 12-20px with 1px strokes, simple magnifier, globe, envelope, bell and diagonal arrows. Action arrows are 11px with roughly 1.3px strokes. White on dark, black on light; larger 40px marks occur only in capability tiles.

**Transfer:** Choose thin geometric outlines and use filled shapes only for identity or integration marks. Avoid enclosing every icon in a decorative colored circle.

## Section recipes

How recurring sections are built.

### First screen: Cinematic promise opening

**Observed:** An 810px-tall edge-to-edge image stage fills almost the first desktop screen. Layers run black foundation, cover-fit moving photograph, dark readability veil, left-aligned text stack, Proof strip, button pair, then the Floating navigation and Contact launcher. The 64px/62px headline spans roughly the left half in two lines, below a tiny audience eyebrow; the human or product subject carries the center and right. Support copy is 16px/21px, followed by a 28px starting-price line and one practical assurance. The proof strip and 36px actions remain visible before the stage ends. Within the first 900px all of those elements appear, plus a slim white beginning of the next section; the next section's heading remains below the fold.

**Transfer:** Use one arresting real-context image with a calm left area and put the problem-to-outcome promise over it. If film is unavailable, use a strong still with the same framing. Directory pages instead open on white with a 24px uppercase title at left and a 32px editorial introduction at one-third width; detailed offer pages use a monumental single word and a pair of small product previews; case studies use the project-display title centered over photography.

**Avoid:** Do not turn the default opening into a centered SaaS headline above a laptop, remove the proof strip, or shrink the image into a card beside the text.

**Text style:** `display` - Suisse Intl 400 · 64px/62px · tracking -0.045em

### Offer with shared promise

**Observed:** Reading canvas with 120px top padding. The offer-split places a 48px heading and short body paragraph at left; three Offer cards fill the wider right side with 10px gutters. A support-lead promise and a compact dark action pair sit below the cards, aligned with their left edge.

**Transfer:** Pair the emotional promise with clear choices, scope and one shared risk-reducing statement; the same split can compare product editions or service levels.

**Text style:** `heading` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Portrait proof gallery

**Observed:** 80px vertical padding, section-label aligned left and a small all-work link at right. Three Project cards use 15px gutters and almost the full page width. Large media dominates; names and descriptions stay very small beneath it.

**Transfer:** Create a short row of visually distinct examples; prioritize authored imagery over long descriptive text.

**Text style:** `section-label` - Suisse Intl 400 · 24px/1.1 · tracking -0.01em · uppercase

### Green invitation

**Observed:** Invitation band uses the offer-split: 48px statement left, 24px support-lead right, followed by three translucent reassurance labels and a Primary button. At desktop the band is about 382px tall.

**Transfer:** Use the colored interval for a low-friction next step with explicit practical conditions, not a generic slogan.

**Text style:** `heading` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Capability mosaic

**Observed:** A 60px-padded white editorial split places a 48px statement, small explanatory paragraph and inline gray fact chips opposite a tight 3-column, 2-row Capability tile mosaic. Color is confined to the compact right block.

**Transfer:** Use concise capabilities and verified contextual facts; the device can explain a product system or compatible ecosystem without becoming a full-page rainbow grid.

**Text style:** `heading` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Substantial closing world

**Observed:** Closing canvas opens with a 48px statement capped at 720px and Closing arrow action below. After a large pause, a narrow utility-link column sits beside a 480px Callback field and direct reply explanation. Lower down, two ecosystem links pair 199×132px charcoal identity panels with brief text; the final baseline distributes locale, social icons, email and legal links across the width. The right side remains deliberately spacious. This ending is shared across page types.

**Transfer:** Re-express the product's promise once, offer a direct next step and give two meaningful related destinations or product modes; preserve the black breathing room even with fewer links.

**Text style:** `heading` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Feature directory

**Only for:** capability directories

**Observed:** White opening with 140px top padding, a small uppercase title with count at left and a 512px-wide editorial-lead at one-third width. Category chips precede a 3-column grid of 451×338px landscape demonstrations. Feature-title links follow images after 10px; category and live-use context appear below. Column gutters are 15px, row gaps 60px. The grid ends directly in Closing canvas.

**Transfer:** Index capabilities by user outcomes, showing one contextual demonstration per task.

**Text style:** `editorial-lead` - Suisse Intl 400 · 32px/1.1 · tracking -0.04em

### Case-study gallery chapter

**Only for:** case studies

**Observed:** Black stage carries 40px editorial paragraphs and Paper-backed gallery plates. Small uppercase headings can sit left of 18px explanatory paragraphs in an 800px centered two-column caption, or at the outer gutter above a wider 40px explanation. Image chapters alternate full plates, horizontal miniatures and paired portraits, with 30px image-section padding and 120px pauses beneath captions.

**Transfer:** Explain a design or product decision, then let a substantial visual demonstrate it. Choose the arrangement that suits the material rather than repeating one card layout.

**Text style:** `project-body` - Suisse Intl 400 · 40px/1.1 · tracking -0.04em

### Editorial note and specifications

**Only for:** case studies

**Observed:** A 960px centered note has a 1px graphite left rule, 80px left padding, 32px quote and small two-line attribution, within 120px vertical padding. A following specification area aligns 24px uppercase row labels with compact charcoal tags, partner marks and very small result lines. Results do not become oversized statistic counters.

**Transfer:** Use the quote for a real decision or philosophy, and compact specifications for capabilities and measured outcomes; a quote is not a testimonial unless attributed accordingly.

**Text style:** `editorial-lead` - Suisse Intl 400 · 32px/1.1 · tracking -0.04em

### Detailed offer chapter

**Only for:** detailed service and pricing pages

**Observed:** White canvas with a 216px single-word chapter heading. Supporting content is shifted right by 216px; two 553px columns separated by 60px contain ruled scope and price rows beside a flat gray promise disclosure. Plan tabs are 180×52px rectangular controls, black for selected and pale gray otherwise. Follow-on monthly plans and add-ons use thin rules rather than floating cards; Question rows close the informational content.

**Transfer:** Separate the overview's compact offer cards from the detailed page's operational lists. Make inclusions, limits, terms and starting prices directly comparable.

**Text style:** `service-display` - Suisse Intl 400 · 216px/0.92 · tracking -0.05em

### Case-study exit

**Only for:** case studies

**Observed:** A black horizontal invitation with 80px vertical padding pairs a 40px question at left with a compact white action at right. It transitions to a white Portrait proof gallery of related projects before entering Closing canvas.

**Transfer:** Let an interested reader either start a conversation or continue to a related example.

**Text style:** `project-body` - Suisse Intl 400 · 40px/1.1 · tracking -0.04em

## Page flow

**Storyline:** Emotional promise → explicit offer or context → visual demonstration → practical proof → low-friction invitation → substantial contact ending.

### General marketing landing page

1. **promise** - Cinematic usage stage with practical price, assurance, proof strip and paired actions.
2. **offer** - Editorial statement beside compact comparable packages and a shared promise.
3. **visual proof** - Portrait project gallery.
4. **conversion** - Deep green invitation with reassurance labels.
5. **capability breadth** - Compact colorful mosaic beside a broad editorial statement and small facts.
6. **closing call** - Substantial black contact ending.

**Transfer:** Move from desire to believable operational detail; adapt the sequence to the new product rather than requiring the same section count.

### Image-led product or project case study

1. **identity** - Monumental white project name over full-bleed warm or dark photography.
2. **context** - Short introduction followed by a large editorial account and tiny metadata.
3. **demonstration** - Paper-backed interfaces, horizontal detail sequence and paired portraits separated by short decision captions.
4. **interpretation** - Ruled editorial quote and compact specifications with small results.
5. **conversion** - Simple black invitation row.
6. **continuation** - White related-project gallery followed by the shared black ending.

**Transfer:** For a premium product, let the narrative explain choices while imagery establishes material quality.

### Operational case study with multiple buyer journeys

1. **identity** - Huge centered title over a warmly lit interior.
2. **context** - Large explanation plus restrained result metadata.
3. **capability chapters** - Large gallery plates alternate with small screenshot sequences and captions explaining distinct user tasks.
4. **proof** - Compact service tags, partner symbols and modest numerical results.
5. **conversion** - Black invitation, white related examples and the shared black ending.

**Transfer:** Use distinct visual chapters for distinct product journeys; keep technical detail compact and secondary to demonstration.

### Capability or feature index

1. **orientation** - Asymmetric title, small count and editorial introduction on white.
2. **navigation** - Tightly grouped category filters.
3. **demonstration** - Repeated landscape contextual images with outcome-led titles and small category and deployment labels.
4. **closing call** - Shared substantial black contact ending without an extra colored intermediate CTA.

**Transfer:** Organize features around the work users accomplish; keep each item short enough to browse visually.

### Detailed offer and buying guidance

1. **offer** - Single-word monumental heading, small product previews and short practical positioning.
2. **comparison** - Plan tabs, large price and ruled inclusions beside a gray promise panel.
3. **ongoing value** - Second monumental chapter with monthly scope rows and explicit conditions.
4. **alternatives** - Two compact ruled add-on columns and a custom-work starting point.
5. **objection handling** - Long but visually restrained question disclosure list.
6. **closing call** - Shared black contact ending.

**Transfer:** Let the landing page sell the direction while this page makes the purchase legible; retain explicit timing, inclusions and boundaries.

## Writing

Practical, design-literate and unusually direct about the work after the sale. Confidence comes from concrete delivery details and plain admissions of limits rather than inflated adjectives.

**Do not copy:** Do not reuse Displace names, client identities, logos, project imagery, proprietary quotations, prices, delivery promises, response-time commitments or growth figures as claims for a different product. Replace them with truthful original equivalents. The examples below show the pattern only; write new copy for the new product.

- **Addressing the reader:** Use we for the team and you or your for the reader; speak about the reader's actual tools and responsibilities rather than an abstract audience.
- **Rhythm:** Headlines are compact statements or single-word chapter labels. Explanations are one or two plain sentences; operational detail can be longer when it answers a real buying question. Avoid exclamation marks and decorative fragments.

| Role | Pattern | Typical length | Examples of the pattern |
| --- | --- | --- | --- |
| Opening promise | Contrast a familiar failure with the durable outcome the offer supports. | About 8-14 words | “Most stores are built to launch, not to be run.” |
| Section statement | Concrete desired quality joined to a practical commitment. | About 10-16 words | “A store as good as your product, live on a date we write down.” |
| Capability title | Lead with a verb and say what the user can now do. | About 5-10 words | “Let customers reserve incoming stock”<br>“Catch stock changes before customers do” |
| Editorial caption | A short pointed claim about the design decision, with explanation nearby. | About 4-8 words | “A lamp is not a SKU.”<br>“The catalogue is the content.” |
| Action | Name the next interaction, its commitment or the thing being discussed. | About 3-6 words | “Tell us about the project”<br>“Free 15-minute store review” |
| Reassurance | State boundaries and conditions as plainly as benefits. | One short sentence | “No cost, no card, no hard sell”<br>“We never promise sales.” |

**Words and phrasing to use:** built; run; live; your team; included; what moves; first month; from; one roof; care; date we agree

**Avoid:** revolutionary; game-changing; unlock limitless potential; world-class solutions; seamless digital transformation; guaranteed growth

**Rules:**

- Put the operational consequence next to the benefit: who uses it, what changes, what is included.
- Attach context and a time window to numerical outcomes.
- Use an honest starting price only when there is a real offer behind it.
- Write UI labels in everyday language; reserve uppercase for small visual markers, not whole paragraphs.
- Make a guarantee conditional and explicit rather than implying a promise of business results.

## Do's and Don'ts

### Do

- Keep the default headline regular at 64px/62px with -0.045em tracking.
- Use the 28.8px desktop page gutter consistently across text, grids and the footer.
- Pair 36px actions with 3px corners and compact 13px labels.
- Use 15px gutters for the 3-column image gallery; let photography be much larger than its captions.
- Use deep green as one concentrated invitation interval and keep bright tiles compact.
- Give the black ending its 105px top padding, 720px headline measure and wide low arrow action.
- Keep small result lines contextual; use a 56px thumbnail and concise result in the opening proof strip.
- Scope 216px single-word headings and ruled pricing columns to detailed buying pages.

### Don't

- Do not replace regular grotesk type with heavy bold headings or a contrasting serif.
- Do not round controls into pills or inflate the default 3px corners to soft app-card radii.
- Do not constrain every section to a 1200px centered content box; this style uses almost the full width.
- Do not apply gradients or colorful washes behind ordinary reading sections.
- Do not add shadows to flat pale-gray offer cards; depth belongs to staged media and the contact launcher.
- Do not turn the final section into a small logo-and-legal strip or fill its empty right half with unrelated content.
- Do not enlarge every metric into a dashboard-style counter; many results here are intentionally caption-sized.
- Do not expose every FAQ answer by default or underline all its body text; use restrained closed disclosure rows.

## Motion and responsive

### Motion

**Observed:**

- Declared action color and background transitions commonly use .3s cubic-bezier(.22, 1, .36, 1); primary button opacity uses the same duration and curve.
- Declared navigation layer transitions use .8s cubic-bezier(.22, 1, .36, 1); search collapse also transitions max-height, padding and opacity over .8s.
- Declared contact-launcher transitions are background 0.2s and transform 0.2s, with a -2px hover lift.
- The opening uses video media, and project panels include videos; case-study titles have an enlarged transform layer.

**Transfer:**

- Keep toolbar and control changes understated and separate from cinematic media.
- Retain a still-image alternative with the same composition when moving media is unavailable; the proof and actions must not depend on playback.

**Unknown:**

- Exact on-scroll choreography, media playback cadence and duration of title enlargement are not established.

### Responsive

**Observed:**

- Declared width breakpoints include 380px, 480px, 640px, 678px, 700px, 760-769px, 860px, 960px and 1024-1025px; some page types also declare 400px, 800px, 900px and 1100px.
- Project titles use 20vw; detailed service chapter headings use clamp(88px, 15vw, 216px).

**Transfer:**

- As design guidance, collapse editorial splits and 3-column galleries into a reading order that keeps the headline before supporting detail; retain image proportions and compact captions.
- As design guidance, replace the centered desktop toolbar with a compact control arrangement before it collides with identity and utilities. Keep the contact entry accessible without covering actions.

**Unknown:**

- Exact mobile layouts, gutter sizes, navigation transformation and launcher placement at narrow widths are not established.

## How to use this guide

1. Start from the Essentials and the first-screen recipe; where the guide offers variants, use the default named for a new marketing page.
2. Plan the page before building: map your content onto the section recipes and page flow, then check the plan against the Do's and Don'ts.
3. Build with the tokens and component specs; recreate signature graphics with their build recipes instead of generic decoration, and use the named font substitutes if a font is unavailable.
4. Render the page at desktop and mobile widths, compare it with the Essentials and the Don'ts, and fix the differences before you finish.

---

