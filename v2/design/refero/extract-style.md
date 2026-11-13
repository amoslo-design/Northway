# Extract Studio: full Refero style

- Site: [Extract Studio](https://extract.studio) (extract.studio)
- Refero style UUID: `4cb9b719-ff16-4db4-9fcb-b0ad5eba8fd6`
- Retrieved: 13 November 2026, via Refero `refero_get_style`.
- This is the full style guide Refero returned, with em dashes normalized to hyphens so the file matches Northway writing rules. Measurements, tokens and rules are otherwise as returned.

---

# Extract - editorial billboard rhythm

## Overview

An editorial studio aesthetic with a billboard-sized identity, elegant serif statements and matter-of-fact grotesk captions. White and near-black carry most of the design, with pale green social spaces and vivid color contained inside image-led work. Large photographic scenes, physical mockups and moving image sit in an airy grid, making this well suited to visually rich products, creative services and carefully curated portfolios.

### Essentials

- Identity behaves like a billboard, while the proposition stays conversational: a 1320×233px wordmark spans the opening container, followed by a 44.3px regular serif statement occupying half its width.
- Navigation is a floating index rather than a header bar: a white 418×75px rounded rectangle with a 1px ink outline, 9.3px inner padding and four plain-text destinations sits centered 45px above the desktop window bottom.
- Headlines feel typeset, not engineered: Feature Deck at weight 400, normal tracking and 1.25 line height contrasts with ABC Diatype captions at 21px, with bold names followed inline by an em dash and regular descriptors.
- Color belongs to the work and to social bands: the main canvas remains white, pale green #e7feda fills broad supporting sections, and a near-black inset closing panel provides the strongest page-level contrast. Saturated hues stay inside media rather than tinting every component.
- Images are exhibits, not card backgrounds: 4:3 previews sit in two columns with a 37.1px gutter and 74.2px row gap; their corners are 9.3px and their captions live outside the image. Include a large staged media exhibit; when moving assets are unavailable, use a finished still or a carefully lit product composition.
- The closing invitation becomes moving typography: repeat a short question in a clipped horizontal serif ticker at 103.9px/1.5 inside the near-black panel, beneath small newsletter and contact columns. This monumental line and the floating index remain signature devices across page types.

## Colors

### Accent

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Pale social green | `#e7feda` | `--color-social-green` | background, surface, accent, action | Full-width editorial updates and proof bands, active navigation backgrounds and selected text. Keep vivid project-specific color within imagery. |

### Neutral

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| White paper | `#ffffff` | `--color-canvas` | background, surface, text, border | Default canvas, navigation and proof cards; reversed lettering and form outlines on ink. |
| Near-black ink | `#070707` | `--color-ink` | text, background, border | Primary lettering, hairlines and the inset closing panel. |

## Typography

- **Feature Deck** - Propositions, editorial statements and monumental closing invitations. High-contrast editorial serif with fine hairlines, tall proportions and expressive curves; used in regular weight. If unavailable, use **Instrument Serif**. Use weight 400 and tune line breaks to preserve the tall, lightly drawn editorial texture. Font stack: "Feature Deck", "Instrument Serif", Georgia, serif.
- **ABC Diatype** - Navigation, section labels, body copy and captions. Direct, unshowy grotesk with regular body text and bold compact names. If unavailable, use **Inter**. Use 400 and 700 with normal tracking. Font stack: "ABC Diatype", "Inter", Arial, sans-serif.

| Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| closing-ticker | Feature Deck | 400 | 103.9px | 1.5 | normal | fixed | Repeated invitation running horizontally through the closing panel. |
| editorial-statement | Feature Deck | 400 | 44.3px | 1.25 | normal | size clamp(1.74974rem, 1.52755rem + 1.11097vw, 2.97181rem) | Default landing proposition and later editorial statements. |
| section-label | ABC Diatype | 400 | 33.6px | 1.25 | normal | size clamp(1.42383rem, 1.28998rem + 0.669247vw, 2.16rem) | Plain section labels paired with an edge-aligned text link. |
| body | ABC Diatype | 400 | 21px | 1.5 | normal | size clamp(1rem, 0.954545rem + 0.227273vw, 1.25rem) | Inline project descriptions, short links and small introductory labels. |
| caption-name | ABC Diatype | 700 | 21px | 1.25 | normal | size clamp(1rem, 0.954545rem + 0.227273vw, 1.25rem) | Bold image names, news titles and capability group labels. |
| small-copy | ABC Diatype | 400 | 18px | 1.5 | normal | size clamp(0.888889rem, 0.861111rem + 0.138889vw, 1.04167rem) | Floating navigation, update summaries and status tags. |
| footer-copy | ABC Diatype | 400 | 18px | 1.4 | normal | fixed | Contact, address and social columns on the closing panel. |
| form-label | ABC Diatype | 400 | 18px | 1.25 | normal | size clamp(0.888889rem, 0.861111rem + 0.138889vw, 1.04167rem) | Newsletter heading above the compact email form. |

### Page-type variants

| Only for | Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| case studies and company profiles | detail-title | Feature Deck | 400 | 69px | 1.25 | normal | size clamp(2.41904rem, 1.96679rem + 2.2613vw, 4.90647rem) | Descriptive multi-line opening title beneath a compact identity. |
| collection indexes | index-title | Feature Deck | 400 | 54.2px | 1.25 | normal | size clamp(2.02729rem, 1.71725rem + 1.55018vw, 3.73248rem) | Medium-scale editorial introduction before category filtering. |
| case studies, capabilities and testimonial sections | reading-copy | ABC Diatype | 400 | 21px | 1.4 | normal | fixed | Longer explanation, discipline lists and quotations. |
| collection indexes | filter-link | ABC Diatype | 400 | 21px | 1.75 | normal | fixed | Unboxed horizontal category links. |

Sizes are for a 1440px-wide desktop window. Recipes with a viewport formula grow and shrink with the window; use the formula (for example in `clamp()`), not the fixed pixel value.

**Notes:**

- Use sentence case and normal tracking throughout. The identity is graphic artwork rather than a heavier version of the serif proposition.
- Keep the serif statements at weight 400; make names and short category headings bold in the grotesk instead.
- The same sans size supports two rhythms: 1.5 for captions and 1.4 for sustained reading. Keep the bold name and its regular descriptor on one baseline when space allows.

## Layout

**Density:** Airy, with wide media stages and generous chapter breaks balanced by compact captions and utility text.

### Spacing

| Value | Use |
| --- | --- |
| 9.3px | Navigation inset, small label-to-form gap and tight interface spacing. |
| 18.5px | Horizontal navigation-link padding and news title-to-summary spacing. |
| 23.2px | Media-to-caption separation in portfolio tiles. |
| 32.5px | Paired case-study media gutter and separation between successive large exhibits. |
| 37.1px | Portfolio column gutters and three-column editorial gaps. |
| 64.9px | Section-label-to-media grid separation and top inset within closing panel. |
| 74.2px | Portfolio row spacing, major section lead-in and bottom space outside the closing panel. |
| 92.7px | Opening identity-to-proposition interval and proposition-to-main-media spacing. |
| 111.3px | Major chapter separation and green-band vertical padding. |

### Containers and grids

- **Main container**: max width 1320px · side padding 60px. At 1440px, the centered content occupies eleven twelfths of the viewport. Continue this proportional edge relationship rather than imposing a narrow blog column.
- **Portfolio grid**: 2 columns · gap 37.1px. Equal 641px-wide media tiles with captions below; vertical row gap is 74.2px.
- **Editorial updates**: 3 columns · gap 37.1px. Three 415px-wide items within a full-width pale green band.
- **Opening statement measure**: max width 660px. Half-container serif proposition on the default landing opening; right half remains open.
- **Prose ceiling**: max width 836px. Upper bound for explanatory prose; actual split-layout paragraphs are narrower.
- **Detail title measure** (only for case studies and company profiles): max width 880px. Broad left-aligned title measure beneath the small identity.

## Corner radius

| Element | Radius |
| --- | --- |
| Media and panels | 9.3px |
| Form end corners | 4.6px |
| Status tag | 5px |

## Surfaces and depth

### Shadows

| Only for | Name | Value | Use |
| --- | --- | --- | --- |
| testimonial sections | Testimonial stack | `0px 2px 10px 0px rgba(0, 0, 0, 0.07)` | A faint lift behind the outlined paper cards; other surfaces stay flat. |

### Surfaces

#### Paper canvas · level 0

**Use:** Default marketing page field.

**CSS:** `background: #ffffff; color: #070707`

**Observed:** Untextured white supports large gaps and black hairlines.

**Transfer:** Keep the surrounding structure neutral so the media supplies visual variety.

#### Social band · level 0

**Use:** Editorial updates, proof and their adjacent closing area.

**CSS:** `background: #e7feda; color: #070707; padding: 111.3px 0px`

**Observed:** A flat pale green field spans the viewport rather than wrapping individual cards.

**Transfer:** Use it to distinguish a supporting editorial or social chapter from the principal product story.

#### Ink closing panel · level 1

**Use:** Shared final invitation and contact destination.

**CSS:** `background: #070707; color: #ffffff; border-radius: 9.3px; overflow: hidden`

**Observed:** Inset to the main container, 1320×658px at desktop; green surrounds it in the default treatment, white in detail and index variants.

**Transfer:** Preserve the contrast and inset framing whatever content precedes the ending.

#### Outlined paper · level 1

**Use:** Navigation and small proof tiles.

**CSS:** `background: #ffffff; border: 1px solid #070707; border-radius: 9.3px`

**Observed:** A crisp dark edge and restrained corners, without glass, texture or drop shadow.

**Transfer:** Use as a functional frame, not as a background around every content item.

## Components

### Floating index

**Use:** Persistent navigation between major destinations.

**CSS:** `background: #ffffff; color: #070707; border: 1px solid #070707; border-radius: 9.3px; padding: 9.3px; display: flex; position: fixed; bottom: 45px; z-index: 50`

**Text style:** `small-copy` - ABC Diatype 400 · 18px/1.5

**Observed:** A compact four-link island centered horizontally; links have 13.9px vertical and 18.5px horizontal padding. The active destination uses a pale green rounded fill, while the default landing version leaves all links white.

**Transfer:** Keep the labels short enough to retain an index-like silhouette. Use equivalent destinations appropriate to the new product.

### Underlined text action

**Use:** Secondary navigation beside section labels or beneath editorial statements.

**CSS:** `color: #070707; position: relative; text-decoration-line: underline; text-decoration-thickness: 1px`

**Text style:** `body` - ABC Diatype 400 · 21px/1.5

**Observed:** Plain text rather than a filled button; aligned with the far right of heading rows or left beneath a statement.

**Transfer:** Use direct, brief labels that name the next destination.

### Portfolio tile

**Use:** Image-led proof links in featured and related-work grids.

**CSS:** `border-radius: 9.3px; object-fit: cover; width: 100%; aspect-ratio: 4 / 3; margin-bottom: 23.2px`

**Text style:** `caption-name` - ABC Diatype 700 · 21px/1.25

**Observed:** The CSS describes the media element. Beneath it, a bold name joins an em dash and regular body descriptor; the whole item is a link, without an enclosing border or raised card.

**Transfer:** Show one strong application per tile and describe its benefit in a short inline caption.

### Update item

**Use:** Three-column editorial stories on the green field.

**CSS:** `color: #070707`

**Text style:** `small-copy` - ABC Diatype 400 · 18px/1.5

**Observed:** Rounded image or short video first, bold caption-name title second, regular small-copy summary third. Image proportions vary with the artwork rather than forcing every update into a tall card.

**Transfer:** Use two or three concise sentences to explain the work or change rather than a generic teaser.

### Availability tag

**Use:** Status marker on an unreleased proof item.

**CSS:** `background: #ffffff; color: #070707; border: 1px solid #070707; border-radius: 5px; padding: 12px 16px; position: absolute; top: 25px; right: 25px`

**Text style:** `small-copy` - ABC Diatype 400 · 18px/1.5

**Observed:** Small white tag floats inside the top-right image corner; it is not the conversion button.

**Transfer:** Use only where availability actually needs clarification.

### Newsletter input

**Use:** Compact email collection in the upper left of the closing panel.

**CSS:** `background: #070707; color: #ffffff; border: 1px solid #ffffff; border-radius: 4.6px 0px 0px 4.6px; padding: 9.3px 18.5px; width: 263px; height: 47px; box-sizing: border-box`

**Text style:** `form-label` - ABC Diatype 400 · 18px/1.25

**Observed:** A small label sits above it. The field joins the arrow submit button with a single shared vertical seam.

**Transfer:** Keep the form compact within the much larger closing panel.

### Arrow submit

**Use:** Submit the adjoining newsletter field.

**CSS:** `background: #070707; color: #ffffff; border: 1px solid #ffffff; border-left-width: 0px; border-radius: 0px 4.6px 4.6px 0px; width: 40px; height: 47px; display: flex; align-items: center; justify-content: center`

**Observed:** Only a small white right arrow is visible; provide the action name as an accessible label.

### Closing invitation

**Use:** Monumental conversion prompt within the shared ending.

**CSS:** `color: #ffffff; display: inline-flex; white-space: nowrap`

**Text style:** `closing-ticker` - Feature Deck 400 · 103.9px/1.5

**Observed:** The phrase repeats across a strip clipped by the enclosing Ink closing panel. The strip is much larger than the contact text and runs through the lower half of the panel.

**Transfer:** Write a warm short question connected to the desired relationship, and retain repetition rather than centering a single static heading.

### Client tile

**Only for:** company profiles and client proof bands

**Use:** Monochrome customer marks in a horizontally overflowing row.

**CSS:** `background: #ffffff; border: 1px solid #070707; border-radius: 9.3px; width: 200px; height: 200px; display: flex; align-items: center; justify-content: center`

**Observed:** White square tiles sit on green with about 18.5px between them; marks are centered and black, with partial tiles cut by the viewport edges.

**Transfer:** Use marks with permission, normalized by optical size rather than identical logo width.

### Testimonial paper stack

**Only for:** testimonial sections

**Use:** Substantial quotations as a tactile proof object.

**CSS:** `background: #ffffff; color: #070707; border: 1px solid #070707; border-radius: 9.3px; box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.07); position: absolute`

**Text style:** `reading-copy` - ABC Diatype 400 · 21px/1.4

**Observed:** Three overlapping white cards form an offset deck on green; the front card is about 588×512px with 46.4px inner padding. Quote sits at the top, author and role low on the card. This is a stack, not three adjacent columns.

**Transfer:** Use a genuine quotation of enough substance to occupy the upper half, leaving a deliberate gap before attribution.

## Imagery and graphics

### Billboard identity

**Use:** The large typographic graphic in the default opening.

**Observed:** A solid black, exceptionally heavy sans wordmark occupies nearly the full 1320px container, with an artwork height of 233px. It is isolated on white and not accompanied by an illustration.

**Transfer:** Use the new identity as a similarly commanding graphic. If no custom wordmark exists, construct a tightly fitted heavy sans name treatment rather than substituting the serif proposition.

**Build:** Create an SVG with a 1320×233 viewBox. Fit the new name to the width using a heavy grotesk outline or editable text, preserving counters and a clear solid silhouette. Keep all artwork ink-colored on white; use 74.2px space above and 92.7px below the graphic.

### Large media exhibit

**Use:** Main product demonstration and repeated visual proof.

**Observed:** Large rounded rectangular scenes dominate the page width. Editorial print spreads, responsive websites and physical brand applications are shown as finished objects; dark material backings, photographic environments and neutral studio spaces give them weight.

**Transfer:** Create a finished product still, a real-use photograph or a composited interface scene. Minimum acceptable treatment is one well-composed product view on a deliberate neutral backing, with convincing scale and lighting; do not replace it with decorative empty media.

### Physical digital scenes

**Only for:** digital product case studies

**Use:** Showing interfaces in use and across formats.

**Observed:** A tilted tablet rests on deep blue ribbed fabric under warm directional light; a phone is laid on dark soft material; cream interface views float over close-cropped fashion portraits. Full-width compositions alternate with paired portrait panels and a three-phone overview on charcoal.

**Transfer:** Ground a new interface in a tactile environment related to its use, preserve directional shadows and legible screen content, and alternate object detail with broader system views.

### Campaign application system

**Only for:** visual identity and campaign case studies

**Use:** Demonstrating how one graphic idea survives across channels.

**Observed:** Bright cyan-to-green graphics and black tapered radial shapes appear inside campaign artwork, billboards, social formats and broadcast layouts. Architectural mockups use gray ribbed walls, tiled concourses and airport interiors; full-color people provide contrast to flat graphics.

**Transfer:** Develop a product-specific graphic motif and show it in both flat artwork and real application contexts. The marketing typography and white outer grid stay consistent even when the campaign palette is intense.

**Build:** For an equivalent system demonstration, draw a simple SVG unit and repeat it around a center in one panel; in adjacent panels, crop and rescale the same unit into a product-specific layout. Use the new campaign's own palette within those media panels, not on the site navigation or body text.

### Working environment mosaic

**Only for:** company profiles

**Use:** Human context before capabilities and social proof.

**Observed:** One tall photograph sits beside two landscape photographs in equal-width columns. People reading and working, books, plants and wall materials appear in soft natural light with muted green, charcoal and warm neutral tones.

**Transfer:** Photograph real work and physical details in consistent natural light. Pair a human scene with material or process details rather than using identical posed headshots.

### Icons

**Observed:** Icons are rare and functional: a white 15×8px arrow in the newsletter button and a white 21×21px clock with 1px butt-capped strokes beside local opening status.

**Transfer:** Choose minimal arrows and thin circular utility outlines. Let typography and imagery carry the hierarchy rather than adding feature icons everywhere.

## Section recipes

How recurring sections are built.

### First screen: Billboard and editorial opening

**Observed:** White paper is the back layer. The heavy identity graphic spans the eleven-twelfths-width container after 74.2px top space and occupies a 233px-high band; 92.7px of space separates it from a left-aligned editorial-statement in a 660px measure. The proposition takes two lines while the right half stays empty. After a further 92.7px gap, the rounded main media stage begins, showing only its upper portion within the first 900px; its full 880px height continues below. The Floating index overlays the media near the bottom of the window and supplies the initial actions. No extra support paragraph or filled hero CTA competes with this composition.

**Transfer:** Fit the new identity to a wide graphic silhouette, then write a short serif proposition that wraps naturally in the half-width measure. Stage a finished product still if motion assets are unavailable. Detail pages instead use a compact 165×31px identity, a short label and detail-title; collection indexes use index-title and category links before the same media vocabulary.

**Avoid:** Do not turn the opening into a centered SaaS headline with two pill CTAs, a gradient background and a tiny logo. Do not preserve a dark empty media frame as the main object.

**Text style:** `editorial-statement` - Feature Deck 400 · 44.3px/1.25

### Ruled heading and portfolio field

**Observed:** A 1px ink rule introduces a section-label with an Underlined text action at the far right. Media begins 64.9px below the label row. Portfolio tile items use two columns, 37.1px gutters and 74.2px between rows.

**Transfer:** Use this for product examples, customer outcomes or selected work; captions should name the item and its specific benefit.

### Editorial bridge

**Observed:** A broad editorial-statement appears alone in a roughly 770px measure, followed by an underlined destination link. It provides a text pause after dense visual proof.

**Transfer:** Use a short statement of method or benefit to reconnect visual demonstrations to the proposition.

### Green editorial desk

**Observed:** Social band contains a section-label/action row, then three Update item components separated by 37.1px. The band has 111.3px vertical padding and leads naturally into the green-surrounded Ink closing panel.

**Transfer:** Group updates, recent outcomes or supporting stories without wrapping each in its own colored box.

### Shared monumental ending

**Observed:** Ink closing panel sits inside the main container with a 64.9px top inset and roughly 55.6px side inset. Its top row gives half the width to the newsletter area and divides the right half into contact and social columns. A clock and local availability line sit beneath the contacts. Closing invitation spans the panel below, clipped on both sides. A small policy link finishes the lower left; 74.2px of outer background continues beneath the panel. Floating index remains above it.

**Transfer:** Combine one compact low-pressure form, direct contact details and a monumental relational question. Use truthful live status only where useful; keep the ticker and small utility information at radically different scales.

### Case-study context and exhibit sequence

**Only for:** case studies

**Observed:** After the large opening media, a reading-copy description occupies the left side, while bold metadata labels and regular discipline/sector lists occupy smaller right columns. Full-width media stages alternate with paired panels; approximately 32.5px separates adjacent exhibits. A ruled related-work section with two Portfolio tiles precedes the shared ending.

**Transfer:** Explain what changed and why, then show the result at several scales and in context. Use only enough exhibits to prove the system rather than repeating one mockup.

### Capabilities ledger

**Only for:** company profiles and service explanations

**Observed:** A 1px ink top rule spans the content container. A section-label occupies the left half; four bold-labeled groups with reading-copy lists form a two-by-two arrangement on the right. A second ruled row pairs a left label with a right-side paragraph and underlined email.

**Transfer:** Present related product capabilities as an editorial index, not a wall of icon cards.

### Green proof objects

**Only for:** company profiles and social proof sections

**Observed:** An editorial-statement introduces a horizontal Client tile row on green. A separate green proof chapter places a serif statement left and the Testimonial paper stack right, with generous empty space surrounding both.

**Transfer:** Choose the proof format suited to the content: a strip of recognizable marks or a substantial quotation deck.

## Page flow

**Storyline:** Identity and proposition → immersive demonstration → curated evidence → editorial explanation or social proof → monumental invitation.

### General marketing landing

1. **Promise** - Oversized identity and a modest serif proposition introduce the offer.
2. **Demonstration** - A large moving-image or finished-media exhibit makes the offer tangible.
3. **Selected proof** - A ruled section introduces two-column image-and-caption tiles.
4. **Positioning** - A standalone serif statement articulates the approach.
5. **Ongoing activity** - Three editorial updates sit on a green field.
6. **Closing call** - The inset black panel combines compact contacts, email subscription and the repeated serif invitation.

**Transfer:** Use a few strong examples to establish credibility before explaining more; retain the visual-to-editorial contrast without requiring a fixed chapter count.

### Digital product case study

1. **Framing** - Compact identity, short item label and a large descriptive serif title.
2. **Context** - A hero scene is followed by narrative copy and two metadata lists.
3. **Demonstration** - Paired detail images, full-width compositions, device scenes and multi-screen views show the system at different scales.
4. **Further exploration** - Two related examples precede the white-surrounded shared closing panel.

**Transfer:** Explain one product story through specific interface details and real usage rather than adopting the demonstration's own typography as site typography.

### Campaign case study

1. **Framing** - Compact identity, campaign label and descriptive serif title.
2. **Context** - Environmental hero media leads to a longer rationale with compact metadata.
3. **System proof** - Full-width key visuals alternate with palette/motion explanations, application pairs, environmental displays and contextual photography.
4. **Further exploration** - Related examples and the shared closing panel finish the narrative.

**Transfer:** Let campaign assets become visually intense while the surrounding editorial structure stays restrained.

### Collection index

1. **Orientation** - Compact identity above a medium serif introduction.
2. **Selection** - Unboxed category links precede a hairline divider.
3. **Browsable evidence** - A long two-column field uses consistent image ratios and inline descriptive captions; the final item may stand alone in one column.
4. **Closing call** - The same black invitation panel sits on white.

**Transfer:** Allow the number of genuine items to determine the length; do not add filler to complete the last row.

### Company or service profile

1. **Positioning** - Compact identity and broad serif title introduce the organization.
2. **Human context** - Asymmetric working-environment photo mosaic.
3. **Method** - Serif statement and explanatory prose sit side by side.
4. **Social proof** - A green client-mark strip provides recognition.
5. **Capability explanation** - Ruled ledger rows organize service groups and collaboration information.
6. **Trust and closing** - A green quotation stack leads into the shared black invitation panel.

**Transfer:** Use real people, process and substantiated proof to provide context for the product, with the same editorial hierarchy.

## Writing

Confident, thoughtful and lightly warm. Claims are grounded in what the work does, with editorial language about clarity, form and stories rather than exaggerated performance promises.

**Do not copy:** Do not reuse the studio name or wordmark, client names and logos, campaign identities, source photographs, contact information, founding dates, project claims or testimonial quotations as assets or facts for another product. The examples below show the pattern only; write new copy for the new product.

- **Addressing the reader:** Use we and our for the maker, with you or your appearing sparingly in benefits and the closing invitation. Descriptive project captions are often impersonal.
- **Rhythm:** Sentence-case headlines read as complete ideas rather than slogans. Short labels punctuate longer descriptive titles; summaries use a few fluid sentences and actions stay terse.

| Role | Pattern | Typical length | Examples of the pattern |
| --- | --- | --- | --- |
| Opening proposition | State the kind of offer and the transformation it enables in one natural sentence. | About 10-16 words | “A design and branding studio giving form to new ideas” |
| Descriptive title | Name a distinctive outcome and who or what it serves. | About 8-14 words | “An immersive portfolio website for a style photographer” |
| Image caption | Bold name, em dash, brief benefit or character phrase. | Name plus 3-8 words | “Machine Discovery - Accelerating your next big discovery” |
| Section label | Plain descriptive category, with occasional editorial warmth. | 1-3 words | “Recent projects”<br>“Newsworthy” |
| Text action | Direct destination label without sales pressure. | 2-3 words | “View all”<br>“About us” |
| Closing invitation | A warm, open question about a shared next step. | 4-6 words | “Want to work together?” |

**Words and phrasing to use:** form; clarity; stories worth telling; thoughtful; crafted; order; communicate; tailored

**Avoid:** disruptive magic; 10x everything; unlock limitless potential; crushing it; urgent conversion language

**Rules:**

- Explain a concrete communication or user benefit before describing the craft.
- Keep category labels literal; allow personality in short captions and relational questions.
- Use editorially paced prose rather than stacking fragments and exclamation marks.
- Summaries can name work in progress plainly; distinguish availability from a conversion pitch.

## Do's and Don'ts

### Do

- Keep the default proposition at 44.3px regular serif with a 1.25 line height and normal tracking.
- Give the opening identity a full-container graphic presence, distinct from the serif proposition.
- Retain the 37.1px horizontal gutter and 74.2px vertical interval for two-column proof grids.
- Use 9.3px media corners and place the caption about 23.2px below the image.
- Use 1px ink rules to separate editorial chapters and capability ledgers.
- Maintain a 103.9px serif invitation against the small 18px utility columns in the ending.
- Keep the pale green as a flat social field and white as the primary reading canvas.

### Don't

- Do not make every headline bold grotesk; the regular serif carries the propositions.
- Do not turn the floating index into a full-width top navigation bar.
- Do not apply the testimonial shadow to all media and content blocks.
- Do not use pill-shaped primary buttons throughout; the main action vocabulary is underlined text and rounded rectangular utility controls.
- Do not use broad gradients as page surfaces; vivid gradients belong within the demonstrated work.
- Do not place proof captions over the images; keep the bold name and regular descriptor below.
- Do not convert the testimonial deck into three evenly spaced pricing-style cards.

## Motion and responsive

### Motion

**Observed:**

- The repeated closing invitation uses a ticker animation declared at 40s, linear, infinite.
- Navigation color transitions are declared at 0.2s with cubic-bezier(0.4, 0, 0.2, 1).
- Transform and opacity transitions include 0.3s ease-in-out; intro animation is declared at 0.3s ease-in-out.
- Testimonial cards declare a 0.32s transition with cubic-bezier(0.18, 0.98, 0.45, 1).

**Transfer:**

- Keep the closing text moving as a continuous typographic strip rather than a sequence of fading slogans.
- Use the testimonial deck as one layered object when changing quotations; retain visible paper offsets.

**Unknown:**

- Exact event triggers, media playback sequences and complete hover/focus appearance are unspecified.

### Responsive

**Observed:**

- Declared width breakpoints are 640px, 767px, 768px, 1024px, 1280px and 1536px.
- The portfolio grid changes from one to two columns at the medium breakpoint.
- The desktop update grid has a smaller-screen carousel alternative.
- The hero video uses a square aspect on narrower layouts; desktop media is wider.
- Footer columns use a vertical arrangement before the wide-screen split; client tiles have a 150px smaller-screen variant.

**Transfer:**

- Preserve the full-width identity silhouette and left-aligned serif proposition on narrow screens, letting the provided fluid type formulas do the scaling.
- Stack proof tiles while retaining external captions; keep the floating index compact enough to fit rather than expanding it into a full-width bar.
- Keep the closing ticker clipped horizontally and stack its utility columns above it.

**Unknown:**

- Exact mobile paddings, final navigation fit, touch behavior and complete small-screen layouts are not specified.

## How to use this guide

1. Start from the Essentials and the first-screen recipe; where the guide offers variants, use the default named for a new marketing page.
2. Plan the page before building: map your content onto the section recipes and page flow, then check the plan against the Do's and Don'ts.
3. Build with the tokens and component specs; recreate signature graphics with their build recipes instead of generic decoration, and use the named font substitutes if a font is unavailable.
4. Render the page at desktop and mobile widths, compare it with the Essentials and the Don'ts, and fix the differences before you finish.

---

