# Domaine: full Refero style

- Site: [Domaine](https://domaineworldwide.com) (domaineworldwide.com)
- Refero style UUID: `693a3f91-ffb5-4c8c-9d7b-b28a32402c5f`
- Retrieved: 13 November 2026, via Refero `refero_get_style`.
- This is the full style guide Refero returned, with em dashes normalized to hyphens so the file matches Northway writing rules. Measurements, tokens and rules are otherwise as returned.

---

# Domaine - commerce as editorial theatre

## Overview

An image-led editorial style with the confidence of a fashion portfolio and the practical detail of a specialist consultancy. Mostly white and black, it lets warm lifestyle photography, tiny green proof panels and occasional mint lettering supply the color. A regular grotesk moves from exceptionally small captions to tightly packed display words; sparse compositions alternate with dense, useful lists. It suits premium products and complex services that need both desire and credible explanation.

### Essentials

- A cinematic scene carries the promise, not a centered sales stack: an 810px full-bleed opening with a white 48px/1 headline, weight 400 and -0.04em tracking, anchored low at the left within a 672px measure. Use a real product-in-context photograph when film is unavailable.
- Editorial scale comes from width and tightness rather than bold weight: 80px/0.9 capability names sit beside stepped photographic strips; ordinary section headlines stay 48px/1, all weight 400.
- Controls look like compact editorial furniture: 3px corners, 12px labels and 10px 15px padding on pale gray buttons, with a small northeast arrow pushed to the far end. The closing action expands to 480px wide with 16px lettering.
- Color belongs primarily to the pictures: white is the main reading canvas, black forms a substantial contrast band and the closing field, while green is concentrated in 400px proof cards and mint in a short headline phrase. Do not spread accent fills across the whole layout.
- Proof is deliberately small beside enormous pictures: 12px metrics sit inside 20px-high gray tags; portrait project images are about 451px × 601px in three columns with 15px gaps and tiny two-line captions below.
- Include the signature stepped image collage and the black closing invitation: stagger flush rectangular image strips around oversized capability words, and finish with a 48px statement, a wide white arrow action, navigation and a compact subscription form. Product details or contextual photography can replace campaign imagery without changing the staging.

## Colors

### Accent

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Headline mint | `#4fd7c8` | `--color-mint` | text, accent | A short future-facing phrase within an otherwise black heading. |
| Resource green | `#048060` | `--color-green` | surface, accent | Small resource callout paired with white text. |
| Proof lime | `#95bf46` | `--color-lime` | surface, accent | Small credential or affiliation callout. |

### Neutral

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Black ink | `#000000` | `--color-ink` | text, background, action | Primary type, dark contrast fields and hover inversion. |
| Charcoal | `#262626` | `--color-charcoal` | surface | Dark newsletter input; also a deep backing for long interface demonstrations. |
| Dark rule | `#484a4c` | `--color-dark-rule` | border | Dividers on dark fields and within translucent editorial panels. |
| Caption gray | `#686c6d` | `--color-muted` | text | Secondary captions, metric numerals and large supporting statements. |
| Smoked glass | `#808080` | `--color-glass` | surface | Visible midpoint of 50% black over white; translucent navigation and editorial panels retain the underlying image through blur. |
| Light rule | `#dbdbdb` | `--color-rule` | border, surface | Fine dividers, outlined actions and closing-action hover fill. |
| Navigation silver | `#e8e8e8` | `--color-nav-text` | text | Small navigation labels over translucent dark chrome. |
| Utility gray | `#ededed` | `--color-soft` | surface, action | Compact buttons, tags, image backing and light form fields. |
| White | `#ffffff` | `--color-canvas` | background, text, action | Main reading canvas; reversed headings and closing action. |

### Semantic

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Focus violet | `#3c00ff` | `--color-focus` | border | Keyboard focus outline, not a decorative marketing accent. |

### Page-type variants

| Only for | Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- | --- |
| warm-toned case studies | Orange project title | `#f18300` | `--color-orange` | text | Monumental title over warm architectural imagery. |
| cool-toned case studies | Powder pink title | `#fce7ef` | `--color-pink` | text | Huge reversed title over beauty photography. |
| warm-toned case studies | Warm project inset | `#c3bbb3` | `--color-warm-panel` | surface | Deeper stone photograph backings and project detail band. |
| warm-toned case studies | Warm project canvas | `#cdc5bc` | `--color-warm-canvas` | background | Continuous warm stone editorial field. |
| cool-toned case studies | Cool project inset | `#c8d0d3` | `--color-cool-panel` | surface | Slightly deeper blue-gray interface backing and project detail band. |
| cool-toned case studies | Cool project canvas | `#d3dbde` | `--color-cool-canvas` | background | Continuous blue-gray editorial field. |

## Typography

- **Suisse Intl** - All editorial text, headings, captions and controls. Neutral neo-grotesk with economical widths, open counters and regular weight throughout. If unavailable, use **Inter**. Use 400; tune line breaks to the narrow editorial measures and retain tight display tracking. Font stack: "Suisse Intl", "Inter", Helvetica, Arial, system-ui, sans-serif.

| Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| capability-display | Suisse Intl | 400 | 80px | 0.9 | -0.04em | fixed | Large stacked capability links beside stepped photography. |
| headline | Suisse Intl | 400 | 48px | 1 | -0.04em | fixed | Opening promise, major section statements and closing invitation. |
| editorial-lead | Suisse Intl | 400 | 40px | 1.1 | -0.04em | fixed | Secondary section statements and extended case-study narrative paragraphs. |
| support-large | Suisse Intl | 400 | 32px | 1.1 | -0.04em | fixed | Short supporting proposition beneath a main heading; gray on the main marketing canvas. |
| section-label | Suisse Intl | 400 | 24px | 1.1 | -0.01em, uppercase | fixed | Section identifiers, channel labels and large directory names. |
| body-large | Suisse Intl | 400 | 18px | 1.2 | -0.02em | fixed | Testimonials, case-study explanations and linked feature group names. |
| action-large | Suisse Intl | 400 | 16px | 21px | normal | fixed | Closing action and footer navigation. |
| body | Suisse Intl | 400 | 14px | 19px | normal | fixed | Concise explanations, article metadata and utility panel copy. |
| card-title | Suisse Intl | 400 | 14px | 1.2 | normal | fixed | Small project names below large media. |
| caption | Suisse Intl | 400 | 12px | 16px | normal | fixed | Compact descriptions, tags, metrics, navigation and ordinary buttons. |

### Page-type variants

| Only for | Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| case-study openings | project-display | Suisse Intl | 400 | 288px | 0.8 | -0.04em | size 20vw | Centered two-line project title over full-bleed hero media. |
| capability directory pages | chapter-display | Suisse Intl | 400 | 216px | 1 | -0.05em | size 15vw | Full-width chapter names with photographic strips behind and around them. |

Sizes are for a 1440px-wide desktop window. Recipes with a viewport formula grow and shrink with the window; use the formula (for example in `clamp()`), not the fixed pixel value.

**Notes:**

- Use one regular weight rather than a bold hierarchy. Negative tracking becomes a major compositional tool at 32px and above.
- Keep the contrast between tiny 12px facts and broad 40px-80px statements; body copy should not inflate to fill the unused canvas.
- Case-study titles are centered, optically enlarged and tightly stacked over photography; this is a separate treatment from the low-left marketing promise.

## Layout

**Density:** Airy at section scale, compact at information scale: open image-led compositions surround dense tags, captions and ruled lists.

### Spacing

| Value | Use |
| --- | --- |
| 5px | Tag wrapping and small internal label gaps. |
| 10px | Card media-to-caption gap, form rows and compact vertical stacks. |
| 15px | Project column gutters, panel padding and ordinary title group gaps. |
| 20px | Channel-card gutters and small content stacks. |
| 28.8px | Desktop outer gutters. |
| 30px | Split-section gaps and case-study media section padding. |
| 40px | Editorial heading grids, large support groups and testimonial inset. |
| 60px | Default vertical padding for text sections and spacing between major subgroups. |
| 80px | Project-feed padding, dark-band padding and interface inset. |
| 120px | Large section breathing room and case-study narrative bottom padding. |
| 180px | Deep pause after the capability collage. |

### Containers and grids

- **full-width editorial canvas**: max width 1440px · side padding 28.8px. At desktop the working content spans about 1382px; media can escape the gutters to full bleed.
- **project grid**: 3 columns · gap 15px. Portrait images around 451px wide, with captions underneath. Portfolio directory uses a tighter 10px gap and about 454px-wide cards.
- **heading split**: 2 columns · gap 40px. A one-third label column beside a two-thirds statement column, leaving the left area visibly open beneath the identifier.
- **hero text measure**: max width 672px. Low-left headline occupies less than half the opening scene.
- **reading measure**: max width 800px. Centered case-study caption pairs use a narrow label beside readable prose; larger narrative paragraphs can extend to about 1000px.
- **resource rail**: max width 400px. Right-aligned colored proof cards, partner lists and editorial sidebar.
- **detail measure**: max width 960px. Centered case-study identity and metadata; right-offset location directory.
- **inquiry form**: max width 640px · 2 columns · gap 10px. Paired short fields and full-width long fields beside a separate section label.

## Corner radius

| Only for | Element | Radius |
| --- | --- | --- |
|  | utility rectangles | 3px |
| notification panels | clock faces | 50% |

## Surfaces and depth

### Shadows

| Only for | Name | Value | Use |
| --- | --- | --- | --- |
| open notification panels | notification haze | `0px 0px 32px rgba(50, 50, 50, 0.463)` | Soft edge around the floating utility panel, not ordinary cards. |

### Surfaces

#### White reading canvas · level 0

**Use:** Default marketing background.

**CSS:** `background: #ffffff; color: #000000`

**Observed:** Broad unboxed areas give text and pictures their own space.

**Transfer:** Separate content through spacing and media scale instead of enclosing every block.

#### Pale utility backing · level 1

**Use:** Tags, controls, small product thumbnails and light form fields.

**CSS:** `background: #ededed; border-radius: 3px`

**Observed:** Flat and almost square, without elevation.

**Transfer:** Keep this as utility furniture, not a dominant section tint.

#### Black contrast field · level 0

**Use:** Large proof band and closing invitation.

**CSS:** `background: #000000; color: #ffffff`

**Observed:** True black with white text and light utility controls.

**Transfer:** Use for a deliberate tonal break from the predominantly white page.

#### Closing field · level 0

**Use:** Final invitation, navigation, newsletter and legal baseline.

**CSS:** `background: #000000; color: #ffffff; border-top: 1px solid #484a4c; padding: 105px 28.8px 20px`

**Observed:** About 900px tall on desktop, with substantial unoccupied black space beneath the main invitation.

**Transfer:** Make the ending a generous editorial scene, not a shallow sitemap strip.

#### Smoked utility glass · level 2

**Use:** Fixed navigation islands and editorial sidebar.

**CSS:** `background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(30px); border-radius: 3px`

**Observed:** Image color remains visible underneath; over white the panel reads medium gray.

**Transfer:** Apply only to compact overlay chrome or a supporting rail.

#### Cool project field · level 0

**Only for:** cool-toned case studies

**Use:** Long-form project narrative.

**CSS:** `background: #d3dbde; color: #000000`

**Observed:** Media rests on deeper #c8d0d3 insets with 80px internal space; details end in the deeper tint.

**Transfer:** Pair closely related neutral tones so the narrative remains continuous.

#### Warm project field · level 0

**Only for:** warm-toned case studies

**Use:** Architectural or material-led project narrative.

**CSS:** `background: #cdc5bc; color: #000000`

**Observed:** Photographic backings and final metadata shift to #c3bbb3; long desktop interfaces can sit on #262626.

**Transfer:** Keep the warm stone field through the story, then return to white for related content.

## Components

### Floating navigation

**Use:** Persistent global orientation above media and reading sections.

**CSS:** `background: rgba(0, 0, 0, 0.5); backdrop-filter: blur(30px); border-radius: 3px; overflow: hidden; width: 348px`

**Text style:** `caption` - Suisse Intl 400 · 12px/16px

**Observed:** Three detached islands: identity and region at left, centered navigation with search beneath, and two square utility icons at right. A fixed 70px header carries the islands, but does not paint a full-width bar. Individual links use 30px height and 12px horizontal padding; the top navigation tier has a translucent pale wash.

**States:** Declared: hover links use white backgrounds and #686c6d text; focus-visible uses a 2px #3c00ff outline with 2px offset and 3px corners.

**Transfer:** Use a short set of product-specific destinations and preserve detached chrome.

### Utility arrow button

**Use:** Ordinary section actions and exploration links.

**CSS:** `display: flex; justify-content: space-between; align-items: center; gap: 7.2px; background: #ededed; color: #000000; border-radius: 3px; padding: 10px 15px`

**Text style:** `caption` - Suisse Intl 400 · 12px/16px

**Observed:** Label sits left and a 10px northeast arrow sits right. Buttons are 36px high and range from content width to broad bars aligned to a text column.

**States:** Declared: hover background #000000 and text #ffffff; focus-visible outline 2px solid #3c00ff, offset 2px, radius 3px.

### Closing arrow action

**Use:** Primary action against the final black field.

**CSS:** `display: flex; justify-content: space-between; align-items: center; gap: 9.6px; background: #ffffff; color: #000000; border-radius: 3px; padding: 10px 15px; max-width: 480px`

**Text style:** `action-large` - Suisse Intl 400 · 16px/21px

**Observed:** Wide horizontal action beneath the closing headline, with a 16px northeast arrow at the far end; desktop height is 41px.

**States:** Declared: hover background #dbdbdb and text #000000; focus-visible outline 2px solid #3c00ff with 2px offset and 3px corners.

### Fact tag

**Use:** Metrics, capabilities, categories and compact factual proof.

**CSS:** `display: flex; gap: 3.2px; background: #ededed; border-radius: 3px; padding: 2px 5px`

**Text style:** `caption` - Suisse Intl 400 · 12px/16px

**Observed:** Numeral or prefix is gray, description black, on one 20px-high line. Adjacent tags wrap with 5px gaps. Linked category variants invert to black and white on hover.

**Transfer:** Use real short facts rather than oversized dashboard counters.

### Project card

**Use:** Selected proof, related items and portfolio directories.

**CSS:** `display: flex; flex-direction: column; gap: 10px`

**Text style:** `card-title` - Suisse Intl 400 · 14px/1.2

**Observed:** A portrait image dominates; a client mark sits near its upper-left corner. Under the image a small square thumbnail precedes the title and gray 12px description. The media backing has 3px corners; the whole card is not enclosed in a colored box.

**Transfer:** Use a product-in-use image, small detail thumbnail and an outcome-led caption.

### Ruled testimonial

**Use:** Human proof below a broad logo row.

**CSS:** `display: flex; flex-direction: column; gap: 20px; border-left: 1px solid #000000; padding: 15px 0px 15px 40px; max-width: 544px`

**Text style:** `body-large` - Suisse Intl 400 · 18px/1.2 · tracking -0.02em

**Observed:** Quote comes first, a gray attribution immediately below, then a black wordmark. A short proof paragraph occupies the opposite side of the section.

**Transfer:** Let the thin rule and modest quote size do the work instead of decorative quotation graphics.

### Colored proof card

**Use:** Compact credential or resource link beside a broad text section.

**CSS:** `display: flex; flex-direction: column; align-items: flex-start; gap: 15px; background: #95bf46; color: #000000; border-radius: 3px; padding: 15px 20px; width: 400px`

**Text style:** `body` - Suisse Intl 400 · 14px/19px

**Observed:** A compact badge or mark precedes a short sentence. The resource variant is #048060, has white text and arranges a square mark beside its copy; its height is about 138px rather than 130px.

**Transfer:** Use a genuine certification, useful guide or product detail mark as the focal point.

### Directory row

**Use:** Location, availability or comparable factual directories.

**CSS:** `display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #dbdbdb; padding: 10px 0px`

**Text style:** `section-label` - Suisse Intl 400 · 24px/1.1 · tracking -0.01em · uppercase

**Observed:** A large uppercase name sits beside a small raised country code. At far right a tiny clock symbol and time create an instrument-like detail. Rows are about 47px high in a right-offset 960px column.

**Transfer:** Retain the large-name/small-status contrast for a product's supported regions or availability data.

### Newsletter field

**Use:** Subscription input in the closing invitation.

**CSS:** `background: #262626; border: 1px solid transparent; border-radius: 3px; padding: 20px 9.6px 4px; width: 480px`

**Text style:** `caption` - Suisse Intl 400 · 12px/16px

**Observed:** Label sits inside the upper part of a 47px-high field. Consent follows below and Submit is a plain uppercase text action, not another filled button. Light inquiry variants use #ededed; paired short fields and a full-width 105px textarea share the same corners.

**Transfer:** Keep persistent labels and an intentionally compact form; limit the light inquiry variant to inquiry sections.

### Editorial sidebar item

**Use:** Short supporting stories beside a large featured article.

**CSS:** `display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; border-top: 1px solid #484a4c; padding: 15px 0px`

**Text style:** `action-large` - Suisse Intl 400 · 16px/21px

**Observed:** A small portrait thumbnail precedes category tag, date and linked title. Items stack in a 400px Smoked utility glass rail; white titles contrast with muted metadata.

**Transfer:** Use related guidance or product stories rather than a second competing hero.

### Capability list row

**Only for:** capability directory pages

**Use:** Dense linked offer details beneath monumental chapter titles.

**CSS:** `display: flex; justify-content: space-between; position: relative; border-bottom: 1px solid #dbdbdb; padding: 8px 0px`

**Text style:** `body` - Suisse Intl 400 · 14px/19px

**Observed:** A small right arrow completes each 540px-wide row. Groups begin with an 18px label and black bottom rule, using 9px vertical padding; detail rows are about 36px high. A black rounded pseudo-element supplies the hover background.

**States:** Declared: hover detail text becomes #ffffff; focus-visible outline 2px solid #3c00ff with 2px offset and 3px corners.

### Notification panel

**Only for:** open utility menus

**Use:** Secondary discovery drawer opened from the header bell.

**CSS:** `display: flex; flex-direction: column; gap: 2px; position: absolute; width: 448px; border-radius: 3px; backdrop-filter: blur(30px); filter: drop-shadow(0px 0px 32px rgba(50, 50, 50, 0.463))`

**Observed:** Tall mosaic panel with a slim announcement strip, two project images, a row of analog clocks, then merchandise and hiring tiles, followed by editorial links. It overlays the page rather than occupying a footer column.

**Transfer:** Adapt the mosaic to secondary product news, resources and useful status information; keep it closed until invoked.

## Imagery and graphics

### Cinematic contextual photography

**Use:** Dominant marketing opening and full-bleed story moments.

**Observed:** A wide softly lit interior with two people on sculptural blush seating fills the opening edge to edge. Pale plaster, concrete, black window grids and natural daylight give the scene material depth; the subject extends behind white lower-left text. Other scenes use richly lit rooms, fashion portraits and product rituals.

**Transfer:** Photograph the new product in a spacious lived setting with an unmistakable material or human focal point. Minimum version is one excellent wide still with calm negative space low-left; do not replace it with generic interface tiles.

### Stepped photographic collage

**Use:** Signature counterpoint to large capability words and the wider proof mosaic.

**Observed:** Rectangular photographic strips form a loose staircase on white: a food-and-fashion portrait, bright shoes and a sunlit sculptural chair. A common narrow strip is 192px × 270px, with wider 384px spans. A separate proof mosaic uses smaller portraits in staggered columns, exposing white notches between groups.

**Transfer:** Select complementary close-ups, human use and environmental views of the new product. Minimum version is three high-quality stills arranged in a stepped rather than uniform grid.

**Build:** Use a CSS grid with narrow equal-width columns, no gap within the staircase and a 270px row rhythm at desktop. Alternate 192px and 384px image spans, offset successive images one column left or right, and leave deliberate unoccupied cells. Set images to object-fit: cover, keep edges straight, and layer large black words in the adjacent open area rather than adding collage shadows.

### Portrait proof imagery

**Use:** Project feeds, related proof and editorial cards.

**Observed:** Approximately 3:4 images nearly fill each column: fashion in outdoor light, shoes against deep green, polished beauty products, tactile furniture and domestic interiors. Color intensity comes from the subjects rather than an imposed universal filter. Small client marks sit directly on the photographs.

**Transfer:** Use tightly art-directed customer or product scenes with rich natural color; pair a broad context view with a tiny object detail beneath.

### Inset interface plates

**Only for:** case-study demonstrations

**Use:** Demonstrate finished desktop and mobile experiences within the project narrative.

**Observed:** Desktop interfaces appear as large flat image plates on a closely related neutral backing with 80px inset; mobile interfaces are tall frameless strips around 346px wide, spaced about 69px apart, with the next strip visibly continuing beyond the right edge. No realistic phone chassis is used.

**Transfer:** Show actual new-product interfaces legibly and at generous scale; keep their internal visual system separate from the marketing typography.

### Warm material study

**Only for:** warm-toned case studies

**Use:** Editorial interludes between technical explanations.

**Observed:** Natural light filters through window coverings onto timber, linen, sculptural lamps and pale walls. Photographs occupy differently sized areas within equal stone-colored panels: one nearly fills its panel while neighboring images sit smaller and vertically offset.

**Transfer:** Pair environmental photography with close material details; use the deeper stone backing to hold uneven image sizes together.

### Icons

**Observed:** Small functional monochrome SVGs: 16px arrows and utility marks, 10px arrows on compact actions, 20px region symbol. Outline utilities use 1px strokes; navigation and image overlays reverse to white. Clocks use thin hands and restrained bright details.

**Transfer:** Use a consistent thin functional SVG set for bell, mail, globe, search and arrows; avoid large illustrated feature icons as substitutes for photography.

## Section recipes

How recurring sections are built.

### First screen: Cinematic promise opening

**Observed:** An 810px edge-to-edge image or film scene sits behind all content, with black only as its backing. A detached Floating navigation spans the top in a 70px fixed header; the centered island includes search beneath its links, while identity and utility islands sit toward the outer edges. The scene, not text, occupies most of the first screen. At lower left, a tiny dark 12px identity label precedes a two-line white headline in a 672px measure, using headline typography and about 60px bottom breathing room. The image's main object spans the middle and lower width; generous architectural space remains above it. Within the first 900px the entire scene, label, headline and the start of the following white section are visible. There is no hero CTA or separate support paragraph; the explanatory promise and actions follow below.

**Transfer:** Use a single strong product-in-context scene with room for low-left type; a carefully composed still is sufficient. Capability directories instead open on white with a one-third uppercase identifier and count beside a two-thirds 32px introduction and small jump tags. Portfolio directories use the same split with a 48px statement and broad filter control. Case studies use full-bleed media and a centered project-display title in two lines, colored to the project's palette.

**Avoid:** Do not turn the opening into a centered oversized slogan above a small floating product mockup, or darken the whole scene until it looks like a generic black SaaS hero.

**Text style:** `headline` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Compact proposition and proof

**Observed:** White reading canvas with 60px vertical padding: a 48px heading and compact 12px explanatory paragraph occupy a broad left measure. Fact tags sit in a short row below. A Colored proof card anchors the far-right 400px rail.

**Transfer:** State the product's operating promise, then add a small set of verified facts and one useful credential or resource.

**Text style:** `headline` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Editorial demonstration split

**Observed:** A broad 48px heading includes a short mint phrase. Below, gray 32px support and a Utility arrow button sit left, while a near-square demonstration occupies roughly the right half. The demonstration's teal and blue surround belongs to the media, not the whole section.

**Transfer:** Show one concrete interaction or workflow with a short future-facing question; preserve a large visible demonstration rather than treating it as a small card.

**Text style:** `support-large` - Suisse Intl 400 · 32px/1.1 · tracking -0.04em

### Capability word collage

**Observed:** Section-label and a small explanatory paragraph form a one-third/two-thirds heading split. Large capability-display links stack down the left, accompanied by the Stepped photographic collage on the right. The block uses 40px top padding and a deep 180px bottom pause before subsequent proof.

**Transfer:** Name the product's most important capabilities in a few short words and interlock them with detail, people and context imagery.

**Text style:** `capability-display` - Suisse Intl 400 · 80px/0.9 · tracking -0.04em

### Social proof without a card wall

**Observed:** A 40px statement introduces a broad horizontal row of black customer marks. Beneath it the Ruled testimonial sits left and a compact explanatory paragraph sits far right. The overall section uses 120px vertical padding and 60px subgroup spacing.

**Transfer:** Present relevant proof with strong marks, one actual testimonial and a concise interpretation of what the proof means.

**Text style:** `editorial-lead` - Suisse Intl 400 · 40px/1.1 · tracking -0.04em

### Black ecosystem band

**Observed:** Black contrast field with 80px vertical padding. A 24px uppercase label, 48px statement and wide white action occupy the left; a right-hand 400px rail stacks 72px-high light partner rows with colored square marks and tiny descriptions.

**Transfer:** Use for integrations, collaborators or enabling technologies that genuinely strengthen the product's story.

**Text style:** `headline` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Image-first three-column section

**Observed:** A small eyebrow, 40px headline and Utility arrow button precede a three-column grid with 20px gaps. Square images dominate, followed by uppercase 24px names, compact 14px paragraphs and a small outlined action where needed. Project-feed variants use portrait Project cards with 15px gaps and 80px vertical padding.

**Transfer:** Explain use cases or customer groups through concrete scenes; use the portrait variant for proof rather than repeating identical feature cards.

**Text style:** `editorial-lead` - Suisse Intl 400 · 40px/1.1 · tracking -0.04em

### Offset factual directory

**Observed:** A 48px heading and short paragraph sit upper-left, followed by a large open interval. The 960px directory is offset to the right, begins with a small globe and stacks Directory rows.

**Transfer:** Use the wide ruled rhythm for supported regions, delivery coverage or similarly concise factual information, without forcing a location theme.

**Text style:** `section-label` - Suisse Intl 400 · 24px/1.1 · tracking -0.01em · uppercase

### Featured editorial cluster

**Observed:** A 24px identifier introduces a large portrait photograph at left, 48px article title and small metadata in the middle, and a smoked 400px rail of Editorial sidebar items at right. A second row returns to three portrait stories with 18px titles and 12px metadata.

**Transfer:** Use for product guidance, news or deeper evidence; give one story clear editorial priority.

**Text style:** `headline` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Black invitation ending

**Observed:** Closing field begins with a two-line 48px white statement in a 720px measure and a Closing arrow action about 25px below it. After an 80px major gap, a small agency label and vertical navigation occupy the left, beside a 480px newsletter column with title, Newsletter field, consent and plain Submit. The bottom baseline carries region, small social icons, email and legal links. The remainder is open black space. A Notification panel is an invoked overlay, not a permanent third footer column.

**Transfer:** Close with one confident shared-purpose sentence and a clear human next step; use the lower area for practical navigation and ongoing communication.

**Text style:** `headline` - Suisse Intl 400 · 48px/1 · tracking -0.04em

### Monumental capability chapter

**Only for:** capability directory pages

**Observed:** A 15vw chapter title spans almost the entire canvas, with isolated product and lifestyle image strips behind or near its edges. Below, the 32px summary is indented into the page and followed by a Utility arrow button and grouped Capability list rows about 540px wide. Large white intervals separate chapters.

**Transfer:** Give each major offer a short noun-led chapter name and organized practical details; use photography as punctuation, not repeated feature icons.

**Text style:** `chapter-display` - Suisse Intl 400 · 216px/1 · tracking -0.05em

### Continuous project narrative

**Only for:** case studies

**Observed:** The full-bleed title scene leads into an 18px summary and 40px project introduction on a continuous warm or cool neutral field. Alternate desktop interface plates, overflowing mobile strips, offset environmental image pairs and text chapters. Compact chapters use an uppercase 24px heading beside 18px prose in an 800px measure; expansive chapters place 40px prose beneath a narrow label. End the tinted narrative with a large black client identity and metadata rows in a 960px measure: service tags, features, partner marks and awards where relevant. Return to white for three related Project cards before the shared Closing field.

**Transfer:** Explain a product or engagement through challenge, decisions and results while letting its own material palette define the story's neutral field.

**Text style:** `editorial-lead` - Suisse Intl 400 · 40px/1.1 · tracking -0.04em

### Direct inquiry

**Only for:** inquiry sections

**Observed:** An uppercase 24px prompt sits left of a 640px form. A short 18px invitation precedes paired 47px fields and full-width fields on pale utility backing; a 105px textarea gives more room for context. Privacy information, consent and a plain uppercase Submit follow. The section uses 140px top and 60px bottom padding.

**Transfer:** Ask only for information that meaningfully supports the next conversation; preserve the spare two-column construction.

**Text style:** `section-label` - Suisse Intl 400 · 24px/1.1 · tracking -0.01em · uppercase

## Page flow

**Storyline:** image-led promise → concise proposition → visual proof → capability explanation → credibility and practical detail → related guidance → human invitation

### Broad marketing landing page establishing desire and depth

1. **Promise** - Full-width cinematic scene and low-left short statement.
2. **Positioning and quantified proof** - Compact proposition, tiny metric tags and colored credential card.
3. **Visual proof** - Portrait project triptych followed by a large demonstration.
4. **Capability explanation** - Large word list with stepped photographic collage.
5. **Credibility** - Customer marks, ruled quote, small technical facts and dark ecosystem band.
6. **Applications and depth** - Square use-case images, staggered project mosaic, offset factual directory and editorial cluster.
7. **Closing call** - Full black invitation with broad white action, navigation and newsletter.

**Transfer:** Let contextual imagery establish value, then reveal practical specificity in small disciplined text blocks; adapt the middle beats to the product rather than reproducing a fixed section count.

### A browsable proof library

1. **Orientation** - Uppercase section label and small count at left, 48px partnership statement and broad filter at right.
2. **Proof inventory** - Three-column portrait card grid with 10px gutters and compact captions.
3. **Closing call** - Shared black invitation, newsletter and legal baseline.

**Transfer:** Use for customer stories, applications or projects where visual evidence is the primary navigation.

### A concise image-led case study with a cool material palette

1. **Identity and desire** - Huge powder-pink two-line title over a close portrait.
2. **Context** - 18px summary, 40px introduction and small metadata on blue-gray.
3. **Demonstration and explanation** - Inset desktop plates and overflowing mobile interfaces alternate with compact uppercase heading/prose pairs.
4. **Delivery proof** - Large identity mark and rows of services, features, partners and awards on deeper blue-gray.
5. **Continuation and closing call** - White related-project triptych followed by shared black invitation.

**Transfer:** Keep the narrative relatively compact and let a few strong demonstrations show the product experience.

### A detailed case study balancing technical depth with material imagery

1. **Identity and desire** - Orange monumental title over architectural photography.
2. **Context and challenge** - Warm stone introduction, offset interior images and extended 40px explanation.
3. **Technical demonstration** - Mobile strips, a long interface plate on charcoal and short explanatory chapters.
4. **Resolution** - Full-bleed environmental imagery, larger narrative paragraphs and a clearly named results chapter.
5. **Delivery proof** - Large black identity and compact metadata on deeper stone.
6. **Continuation and closing call** - White related-project triptych and shared black invitation.

**Transfer:** For complex products, explain the hard decisions explicitly and use environmental imagery to give the technical story a tactile cadence.

### A deep capability directory converting interest into a conversation

1. **Orientation** - Split uppercase identifier/count and 32px introduction with jump tags.
2. **Capability chapters** - 15vw titles interlock with photo strips; indented summary and grouped ruled service lists explain each chapter.
3. **Applications and proof** - Square use-case triptych and portrait featured-work grid.
4. **Direct conversion** - Light two-column inquiry form with a spare text submit action.
5. **Closing call** - Shared black invitation, newsletter and practical navigation.

**Transfer:** Use monumental chapter labels for broad categories and small rows for actionable details; follow dense information with tangible proof and a short inquiry.

## Writing

Assured, collaborative and commercially specific. The tone pairs editorial ambition with concrete operational language, treating good design and technical competence as inseparable.

**Do not copy:** Do not reuse the brand name, proprietary logos, slogans, customer identities, photography, quotes, portfolio metrics, certifications or performance claims. Source examples illustrate syntax and tone only; all new claims must belong to the new product.

- **Addressing the reader:** Use we for the team or product organization and you for the reader when inviting action. Headlines often describe a shared ambition; technical prose names the actual mechanism.
- **Rhythm:** Short noun-led category names contrast with sentence-like headlines and dense, economical explanatory paragraphs. Actions usually contain two to four words. Ampersands appear in compact phrases; uppercase is reserved for identifiers and submit labels.

| Role | Pattern | Typical length | Examples of the pattern |
| --- | --- | --- | --- |
| Opening promise | An assured we-statement connects specialization to an ambitious audience. | 8-12 words | “We are purpose-built for ambitious & beloved brands.” |
| Supporting proposition | Two direct benefit sentences connect a future-facing claim to a practical result. | 10-18 words | “Be the brand AI recommends. Get the traffic that's ready to convert.” |
| Capability heading | Plain category noun or concise two-word discipline; no clever metaphor needed. | 1-3 words | “AI Acceleration”<br>“Migration Expertise” |
| Explanation heading | Name a real constraint and show the benefit of solving it. | 4-10 words | “Mobile-first without sacrifice”<br>“Escaping platform complexity to refocus on growth” |
| Action | Plain invitation or transparent destination with a human tone. | 2-4 words | “Let's Work Together”<br>“Get In Touch”<br>“See All Projects” |
| Inquiry prompt | Short conversational question followed by a warm invitation. | 3-8 words | “Ready to go?” |

**Words and phrasing to use:** purpose-built; ambitious; thoughtful; unified; long-term; growth; experience; foundation; simplify; transformative

**Avoid:** revolutionary magic; game-changing everything; unlimited possibilities; hustle; crush it; vague disruption

**Rules:**

- Tie elevated language to a concrete mechanism, named service or visible proof nearby.
- Use technical terms where they explain a real decision, not as decorative jargon.
- Write image captions as a project name plus one outcome-led sentence fragment.
- Use short human invitations instead of urgency, discounts or aggressive conversion language.

## Do's and Don'ts

### Do

- Keep major headings regular at 48px/1 with -0.04em tracking.
- Make the opening image 810px tall at desktop and keep its headline within 672px.
- Use 3px corners for rectangular controls, tags and media backings.
- Maintain 28.8px desktop gutters and 15px project-grid gaps.
- Stage portrait proof imagery around 3:4 and keep project names at 14px.
- Keep metrics inside compact 12px tags rather than monumental numeral panels.
- Pair large capability words with a stepped photo composition and a deep white pause.
- Give the final black invitation 105px top padding and a broad 480px white arrow action.

### Don't

- Do not use bold display weights to manufacture hierarchy; the visual weight stays 400.
- Do not turn every paragraph into a padded gray card; the white canvas is mostly unboxed.
- Do not make ordinary buttons pill-shaped; 3px is the rectangular control language.
- Do not distribute lime, green, mint and orange equally; project title colors belong only to their case-study themes.
- Do not enlarge compact captions to 18px body text throughout; the 12px/14px versus 40px/80px contrast matters.
- Do not add drop shadows to project triptychs or proof cards; haze belongs to the utility overlay.
- Do not frame mobile demonstrations in realistic phone hardware; use clean frameless interface strips.
- Do not treat the tall news mosaic as permanent footer content; it is a utility menu.
- Do not insert huge decorative feature icons where contextual photographs carry the story.

## Motion and responsive

### Motion

**Observed:**

- Actions declare color and background-color transitions at .3s cubic-bezier(.22, 1, .36, 1).
- Capability links declare opacity .8s cubic-bezier(.22, 1, .36, 1).
- The utility panel declares translate, discrete display and filter transitions at .8s cubic-bezier(.22, 1, .36, 1).
- Other content declares opacity and translate transitions at 1.2s with the same curve; clip-path transitions occur at .8s.

**Transfer:**

- Let media and the stepped collage carry the visual movement; keep button changes compact and based on color inversion.
- Treat the notification mosaic as an explicitly opened layer, not an automatically persistent end-of-page element.

**Unknown:**

- Exact scroll choreography, video playback scheduling and trigger thresholds are not specified.

### Responsive

**Observed:**

- Styles declare width breakpoints at 640px, 768px and 1024px; the project directory also declares 480px.
- Chapter titles use 15vw and case-study titles use 20vw.

**Transfer:**

- Preserve the scene-first opening on narrow widths by choosing a focal crop and keeping the text low-left.
- As an adaptation, stack the split heading and right proof rail, then reduce image grids to fewer columns without converting the stepped collage into generic rounded cards.
- Let utility chrome simplify before it obscures the scene; keep long directory lists as readable vertical rows.

**Unknown:**

- Mobile font sizes, navigation transformations, exact column breakpoints and mobile hero height are not established.

## How to use this guide

1. Start from the Essentials and the first-screen recipe; where the guide offers variants, use the default named for a new marketing page.
2. Plan the page before building: map your content onto the section recipes and page flow, then check the plan against the Do's and Don'ts.
3. Build with the tokens and component specs; recreate signature graphics with their build recipes instead of generic decoration, and use the named font substitutes if a font is unavailable.
4. Render the page at desktop and mobile widths, compare it with the Essentials and the Don'ts, and fix the differences before you finish.