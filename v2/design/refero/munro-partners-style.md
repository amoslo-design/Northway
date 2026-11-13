# Munro Partners: full Refero style

- Site: [Munro Partners](https://munropartners.com) (munropartners.com)
- Refero style UUID: `83fcbacf-7eb7-49ce-b7f8-07f5f6f4d3e3`
- Retrieved: 13 November 2026, via Refero `refero_get_style`.
- This is the full style guide Refero returned, with em dashes normalized to hyphens so the file matches Northway writing rules. Measurements, tokens and rules are otherwise as returned.

---

# Munro Partners - landscape meets ledger

## Overview

A landscape-led editorial style that pairs expansive natural scenery with the discipline of a financial ledger. Warm cream and brown carry most of the reading, while teal, plum and bright sorbet colors animate compact editorial blocks. Regular-weight neo-grotesk typography, fine rules and small utilitarian actions make it suited to considered products, advisory services and information-rich marketing.

### Essentials

- The first impression is scenery, not a sales dashboard: a 620px-high edge-to-edge landscape, a 68px regular headline near its lower left and a vertical wordmark artwork occupying a 140px × 580px strip at the right. Every new landing page needs this oversized typographic counterweight; a rotated product name is the fallback.
- The page reads like a warm ledger: #fff9ee canvas, #3f322a text, 20px outer gutters and 1px translucent brown rules. Keep the majority of long-form content on cream rather than distributing colored backgrounds across every chapter.
- Headlines remain unusually unforced: weight 400, normal tracking, 68px/1 for the opening, 43px/1.05 for major statements and 30px/1.2 for card titles. Uppercase 14px/1.3 section labels do the organizing.
- Actions are small rectangular instruments: the default outline button has 2px corners, 8px 12px padding and 10px uppercase text. A right arrow extends the label rather than turning the action into a pill.
- Color arrives as a shelf of editorial objects: 320px-wide cards with 20px padding and 15px clipped corners, pairing teal with ice blue, plum with yellow, and ice blue with plum. Include a bright text-led proof or resource shelf even when no photography exists for individual items.
- Evidence stays at reading size: 16px/24px values sit at the right of finely ruled rows, never balloon into giant statistics. Wide compositions alternate full-width ledgers with half-width content beside deliberately open cream space.

## Colors

### Brand

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Deep teal | `#004e4e` | `--color-teal` | surface, background | Editorial cards and the final legal band. |

### Accent

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Electric blue | `#3074f9` | `--color-blue` | surface, action, text | Category markings, editorial cards and product-specific conversion actions. |
| Ochre | `#c67700` | `--color-ochre` | surface | Editorial cards and explanatory diagrams. |
| Lemon | `#feed5a` | `--color-yellow` | surface, text, accent | Bright editorial cards and lettering against plum or blue. |
| Lavender | `#a56eff` | `--color-lavender` | surface, text | Editorial pairing with plum; process diagrams. |
| Deep plum | `#560e4b` | `--color-plum` | surface, text | Editorial card fill and titles on ice blue or lavender. |
| Ice blue | `#bfebfe` | `--color-ice` | surface, text | Editorial cards, colored wordmark rails and light text on teal. |

### Neutral

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Peat ink | `#3f322a` | `--color-ink` | text, action | Default text and filled subscription action. |
| Soft peat | `#9f968c` | `--color-muted` | text, link | Secondary labels and navigation; visible result of peat at 50% over oat. |
| Peat hairline | `#c5bdb3` | `--color-rule` | border | Visible brown separators; peat at 30% over oat. |
| Peat wash | `#ece5da` | `--color-wash` | surface | Feature card and form wash; peat at 10% over oat. |
| Warm footer paper | `#fff7e8` | `--color-footer-paper` | background | Subscription and sitemap background. |
| Oat canvas | `#fff9ee` | `--color-canvas` | background, text | Primary page ground and light lettering over landscapes or dark surfaces. |

## Typography

- **neue-haas-grotesk-display** - Headlines, paragraphs, numbers and section labels. A close-set neo-grotesk with economical width, open counters and a light-looking regular cut. If unavailable, use **Inter**. Use regular 400 for display and body; preserve normal tracking rather than adding fashionable compression. Font stack: "neue-haas-grotesk-display", "Inter", Arial, sans-serif.
- **neue-haas-grotesk-text** - Micro labels, menu text and outline actions. A sturdier companion grotesk, medium weight and compact in uppercase. If unavailable, use **Inter**. Use 500 for micro actions and navigation. Font stack: "neue-haas-grotesk-text", "Inter", Arial, sans-serif.

| Recipe | Font | Weight | Size | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- | --- |
| display | neue-haas-grotesk-display | 400 | 68px | 1 | normal | Opening headline over landscape. |
| heading-lg | neue-haas-grotesk-display | 400 | 43px | 1.05 | normal | Major editorial statements and subscription heading. |
| heading | neue-haas-grotesk-display | 400 | 30px | 1.2 | normal | Introductory statement and editorial card titles. |
| column-heading | neue-haas-grotesk-display | 400 | 24px | 1.1 | normal | Sitemap column headings. |
| lead | neue-haas-grotesk-display | 400 | 22px | 31px | 0.009em | Short, ruled introductory paragraphs. |
| body | neue-haas-grotesk-display | 400 | 16px | 1.5 | 0.0125em | Paragraphs, supporting copy and tabular content. |
| link | neue-haas-grotesk-display | 400 | 16px | 1.5 | normal | Sitemap links and plain navigation. |
| eyebrow | neue-haas-grotesk-display | 600 | 14px | 1.3 | normal, uppercase | Section identifiers and chapter labels. |
| form-label | neue-haas-grotesk-display | 400 | 14px | 1.5 | normal | Subscription option labels. |
| menu | neue-haas-grotesk-text | 500 | 12px | 1.5 | normal | Compact menu trigger. |
| action | neue-haas-grotesk-text | 500 | 10px | 1.8 | normal, uppercase | Outline buttons and product navigation actions. |
| micro | neue-haas-grotesk-text | 500 | 10px | 1 | normal, uppercase | Category tags, table headers and small bio actions. |

### Page-type variants

| Only for | Recipe | Font | Weight | Size | Line height | Tracking | Use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| method and philosophy explanations | principle-heading | neue-haas-grotesk-display | 400 | 22px | 31px | normal | Titles in four-column explanatory summaries. |
| inner-page onward navigation | crosslink | neue-haas-grotesk-display | 400 | 22px | 1.3 | normal | Full-width onward navigation rows. |

**Notes:**

- Scale is achieved through size and placement rather than bold weight or negative tracking. Keep the long headline and the giant rotated wordmark as separate visual objects.
- Body copy uses 0.2px tracking while link text does not. Do not force these into a single universal paragraph recipe.
- The wordmark is artwork, not a second text family. Rotate a carefully fitted word as an equivalent rather than stretching individual letters.

## Layout

**Density:** Airy at chapter scale, compact within ledgers and forms: open cream areas separate content groups while 20px padding keeps individual objects economical.

### Spacing

**Spacing system:**

- **step** 10px - Dominant layout rhythm, with 20px as the usual doubled step; exceptions remain for controls.

| Value | Use |
| --- | --- |
| 10px | Small flex gaps and footer heading margins. |
| 20px | Outer gutters, grid gaps, editorial card padding and ruled-row vertical padding. |
| 30px | Text-to-action separation. |
| 40px | Heading-to-grid separation and footer top padding. |
| 45px | Space beneath team grid items. |
| 80px | Chapter bottom breathing room and subscription area bottom padding. |
| 100px | Breathing space after major introductory statements. |

### Containers and grids

- **edge-led container**: max width 1440px · side padding 20px. At a 1440px desktop width, content spans 1400px between narrow gutters. Continue the edge-led proportion on wider canvases rather than turning everything into a narrow blog column.
- **split editorial**: 2 columns · gap 40px. Two 680px content fields within the desktop canvas: small section identifier or media at left, prose, facts or reports at right.
- **editorial shelf**: 4 columns · gap 20px. Four-up resource and feature shelves. Text-led resource objects are 320px wide; category cards are 335px wide in their full content grid.
- **subscription field**: max width 600px. Email input within the left half of the footer.
- **people grid** (only for people directories): 3 columns · gap 20px. Three equal portrait columns with roughly 453px × 298px pictures and 45px spacing below each item.

## Corner radius

| Only for | Element | Radius |
| --- | --- | --- |
|  | outline actions | 2px |
|  | editorial cards | 15px |
| product detail pages | product navigation | 4px |
| method explanations | diagram circles | 50% |

## Surfaces and depth

### Surfaces

#### Oat canvas · level 0

**Use:** Default ground for all reading sections.

**CSS:** `background: #fff9ee; color: #3f322a`

**Observed:** A continuous warm paper field rather than separate floating white panels.

**Transfer:** Use rules and alignment to subdivide content.

#### Quiet wash · level 1

**Use:** Feature cards and email field backing.

**CSS:** `background: rgba(63, 50, 42, 0.1)`

**Observed:** A flat translucent brown wash; no shadow or glass.

**Transfer:** Keep the tint visually subordinate to text and landscape.

#### Editorial color block · level 1

**Use:** Text-led resources and proof objects.

**CSS:** `background: #004e4e; color: #bfebfe; border-radius: 15px; overflow: hidden`

**Observed:** Other pairings are plum with lemon or lavender lettering, ice blue with plum, lavender with plum, ochre with oat, and lemon with peat.

**Transfer:** Use solid pairings, not gradients, for distinct editorial items.

#### Subscription paper · level 0

**Use:** Final subscription and sitemap area.

**CSS:** `background: #fff7e8; border-top: 1px solid rgba(63, 50, 42, 0.3); padding: 40px 0px 80px`

**Observed:** A slightly warmer ground separates utility content from the main reading canvas.

**Transfer:** Retain the subtle change rather than using a large promotional banner.

#### Legal teal · level 0

**Use:** Final legal and policy region.

**CSS:** `background: #004e4e; border-top: 1px solid rgba(63, 50, 42, 0.3)`

**Observed:** Full-width teal with subdued cream policy links, a fine light rule and dense legal prose; the subscription layer reveals it as the page ends.

**Transfer:** Use a compact, low-contrast legal finish, distinct from the open sitemap.

## Components

### Outline action

**Use:** Default marketing action beside a section label or beneath copy.

**CSS:** `color: #3f322a; background: transparent; border: 1px solid rgba(63, 50, 42, 0.3); border-radius: 2px; padding: 8px 12px`

**Text style:** `action` - neue-haas-grotesk-text 500 · 10px/1.8 · uppercase

**Observed:** Label followed by a small thin right arrow; download variants use a downward arrow. Width follows content.

**States:** Declared: hover background #3f322a, color #ffffff and border-color #3f322a; focus-visible not specified.

**Transfer:** Keep the action visually smaller than the surrounding headline.

### Menu rail

**Use:** Primary navigation beneath the opening scene and at the top while reading.

**CSS:** `background: #fff9ee; border-bottom: 1px solid rgba(63, 50, 42, 0.3); padding: 14px 20px; display: flex; justify-content: space-between; align-items: center`

**Text style:** `menu` - neue-haas-grotesk-text 500 · 12px/1.5

**Observed:** A compact hamburger plus label at left, small horizontal wordmark at right. The initial rail is about 52px high and becomes the persistent reading navigation.

**Transfer:** Preserve this minimal strip rather than displaying a full row of destination links.

### Ledger row

**Use:** Comparable products, metrics and short facts.

**CSS:** `display: grid; grid-template-columns: repeat(8, 1fr); gap: 20px; padding: 20px 8px; border-top: 1px solid rgba(63, 50, 42, 0.3); color: #3f322a`

**Text style:** `body` - neue-haas-grotesk-display 400 · 16px/1.5 · tracking 0.0125em

**Observed:** The identity occupies half the row, followed by a small category badge and evenly aligned values. Secondary description is muted. A simpler two-cell version puts a label at left and a modest value at right.

**States:** Declared: hover background rgba(63, 50, 42, 0.1); focus-visible not specified.

**Transfer:** Use genuine comparable values, not oversized promotional number tiles.

### Category badge

**Use:** Compact product type labels inside ledgers.

**CSS:** `background: rgba(63, 50, 42, 0.1); color: #3074f9; padding: 6px 8px; border-radius: 2px`

**Text style:** `micro` - neue-haas-grotesk-text 500 · 10px/1 · uppercase

**Observed:** A small uppercase tag sits in a dedicated table column. Alternate category lettering is lavender.

**Transfer:** Use a short classification, not a marketing claim.

### Resource card

**Use:** Editorial proof, news and resource collections.

**CSS:** `background: #004e4e; color: #bfebfe; padding: 20px; border-radius: 15px; min-height: 300px; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden`

**Text style:** `heading` - neue-haas-grotesk-display 400 · 30px/1.2

**Observed:** Date at top, regular-weight title in the middle and a small sentence-case media action at bottom. Four-up shelf with 20px gaps. Long titles grow the card, including a 415px-tall variant.

**Transfer:** Give resources the visual force normally assigned to image thumbnails; vary the approved solid color pairings.

### Feature card

**Use:** A four-up collection of visual categories or capabilities.

**CSS:** `background: rgba(63, 50, 42, 0.1); border-radius: 15px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between`

**Text style:** `heading` - neue-haas-grotesk-display 400 · 30px/1.2

**Observed:** Tall 335px × 580px object with a 300px-high media area above a padded title area; a tiny outline symbol anchors the lower left.

**States:** Declared: hover background #bfebfe; focus-visible not specified.

**Transfer:** Use a real illustration or photograph relevant to the new category in the media area, maintaining the pale backing.

### Email field

**Use:** Newsletter subscription entry.

**CSS:** `background: rgba(63, 50, 42, 0.1); max-width: 600px; height: 50px; padding: 8px 0px; border-radius: 0px`

**Observed:** Full-width rectangle above radio and checkbox preference groups. Labels are subdued and explanatory group prompts are bold.

**Transfer:** Use only preference groups the new product actually needs.

### Subscribe action

**Use:** Commit the subscription form.

**CSS:** `background: #3f322a; color: #fff9ee; padding: 9px 15px; height: 46px; border-radius: 0px`

**Observed:** Small dark rectangular submit below the options, followed by a muted italic unsubscribe reassurance.

**Transfer:** Do not enlarge this into the dominant closing headline.

### Sitemap link

**Use:** Footer destination lists.

**CSS:** `color: rgba(63, 50, 42, 0.5); padding: 0px 20px 10px 0px; display: block`

**Text style:** `link` - neue-haas-grotesk-display 400 · 16px/1.5

**Observed:** Four narrow vertical lists share the right half, under regular 24px headings.

**States:** Declared: hover color #3f322a; focus-visible not specified.

### Onward row

**Only for:** inner-page onward navigation

**Use:** Full-width links to adjacent subjects before the closing image.

**CSS:** `display: flex; justify-content: space-between; align-items: center; background: #fff9ee; color: rgba(63, 50, 42, 0.5); border-top: 1px solid rgba(63, 50, 42, 0.3); padding: 20px 24px`

**Text style:** `crosslink` - neue-haas-grotesk-display 400 · 22px/1.3

**Observed:** 70px-high row, label on the left and thin right arrow at the far edge. Usually paired with a second row.

**States:** Declared: hover background #3f322a, color #ffffff and text-decoration underline; focus-visible not specified.

### Report cover

**Only for:** product detail resource downloads

**Use:** Downloadable reports presented as physical editorial objects.

**CSS:** `background: #004e4e; color: #fff9ee; padding: 20px 60px 20px 20px; height: 420px; display: flex; flex-direction: column; justify-content: space-between`

**Text style:** `heading-lg` - neue-haas-grotesk-display 400 · 43px/1.05

**Observed:** Square-edged teal face with a 40px electric-blue strip attached at right; one variant caps the strip with lemon. Large two-line title and a small outlined download action at the bottom. Two covers occupy the right half of a split section.

**Transfer:** Use this treatment for substantial downloadable guides, not every small link.

### Product conversion button

**Only for:** product detail navigation

**Use:** Conversion within a persistent product-specific rail.

**CSS:** `background: #3074f9; color: #feed5a; padding: 10px 12px; border-radius: 4px`

**Text style:** `action` - neue-haas-grotesk-text 500 · 10px/1.8 · uppercase

**Observed:** Sits after two pale section-navigation buttons at the right of the product rail.

**States:** Declared: hover background #3f322a and color #ffffff; focus-visible not specified.

## Imagery and graphics

### Cinematic terrain

**Use:** Dominant opening media and occasional explanatory video thumbnail.

**Observed:** Wide Highland-like ridges, paths, lakes and rock formations in natural green, slate and blue. Daylight has real cloud and atmospheric depth; the landscape fills the frame with the title directly over it. No contained device frame, tint panel or soft decorative blobs.

**Transfer:** Choose an expansive real environment connected to the product's outlook or working world. With no bespoke footage, a high-quality still landscape is the minimum equivalent; retain natural texture and a dark enough lower-left region for the light headline.

### Vertical word sculpture

**Use:** Required typographic counterweight in the opening.

**Observed:** A huge uppercase wordmark rotated clockwise, roughly 140px wide and 580px tall at desktop. It reads down the right edge, cream directly over the image by default; inner-page variants put dark lettering on ice or lemon, or lemon on electric blue.

**Transfer:** Set the new product name or a concise ownable descriptor as oversized rotated type. Fit the word into a slim rail rather than introducing a different decorative emblem.

**Build:** Create a positioned SVG with a 140px × 580px viewBox or a CSS wrapper of that size. Rotate an uppercase regular neo-grotesk text line 90 degrees around its center and fit its text length to 580px. Place it 20px from the image top and right edge. Default fill is #fff9ee with no backing; inner-page rail backing is a solid approved accent, 180px wide across the 620px scene.

### Liquid landscape ribbon

**Only for:** inner-page closings

**Use:** A 300px-high full-bleed bridge between onward links or conversion strip and the subscription area.

**Observed:** The opening terrain reappears as a liquid, marbled distortion. Rock, cloud, green land and blue sky remain recognizable but flow into tightly rippled contour islands. The band has no text, frame or overlay.

**Transfer:** Transform an alternate piece of the opening scenery into a richly textured horizontal ribbon. Keep its natural palette so the ending recalls the opening.

**Build:** Use the landscape as an SVG image beneath a filter combining feTurbulence and feDisplacementMap. Start with fractal noise at baseFrequency 0.012 0.025, 3 octaves, and a displacement scale near 45; tune until the terrain becomes visibly liquid without losing its palette. Fill a 1440px × 300px clipped band edge to edge.

### Studio portrait wall

**Only for:** people directories

**Use:** Repeated biographies in three-column grids.

**Observed:** Consistent waist-up studio portraits against flat warm gray-beige backgrounds. Dark business clothing, soft even light and natural skin tones; each roughly 453px × 298px rectangle has square corners and no decorative frame. Names and roles sit directly below on cream, followed by a tiny outlined bio action.

**Transfer:** Use consistently lit and framed portraits of the new team, with equal head scale and neutral backing rather than varied lifestyle photographs.

### Set and selection circles

**Only for:** method explanations

**Use:** Large diagram chapters aligned to the right half of an otherwise open page.

**Observed:** Flat circles make the reasoning tangible: nested 540px teal, 360px lavender and 180px plum circles, and a separate descending sequence of 540px ochre, blue, plum and lemon circles. Centered light labels sit high in each colored disc. Discs overlap as the reader advances.

**Transfer:** Use nested circles for progressively narrower sets, or equal discs for distinct tests. Their size is diagrammatic, not a substitute for feature cards.

**Build:** Create border-radius:50% discs in a right-aligned 540px-wide column. Nest the 360px disc at the lower center of the 540px disc and the 180px disc over their bottom edge. For sequential evaluation use 540px discs with sticky stacking; use the approved solid fills and 54px or 81px top padding for centered labels. Provide a readable static overlap arrangement when sticky behavior is unsuitable.

### Icons

**Observed:** Small, spare outline symbols: hamburger, arrows, category motifs and principle markers. Arrows stay thin and compact; full-width onward rows use a 16px arrow, while category symbols are about 30px. Icons use the surrounding text color rather than multicolor badges.

**Transfer:** Choose restrained line icons with consistent apparent stroke weight. Use them as directional marks or small anchors, not as oversized feature illustrations.

## Section recipes

How recurring sections are built.

### First screen: Landscape opening

**Observed:** The landscape fills the first 620px from edge to edge. Above it sits no conventional navigation bar. A regular 68px/1 cream headline is anchored near the lower left with a 20px side inset and about 50px breathing room beneath; its short phrase takes a little over one third of the width. The rotated word sculpture occupies nearly the full image height at right. Layers are photograph, headline and word sculpture, then a separate 52px cream Menu rail immediately below. Within the first 900px, the entire image, rail and a 30px introductory statement are visible; proof and detail begin below. There is no hero button cluster.

**Transfer:** Use an atmospheric still if motion footage is unavailable, preserving the landscape-to-word-sculpture tension. A different product needs one concise promise and its own rotated name. Inner-page openings retain the 620px landscape but use an accent-backed word rail and a straightforward subject title; product detail adds section controls beneath, while directory and method pages move directly into their content.

**Avoid:** Do not replace this with a centered headline above a product mockup, a top-heavy navigation bar or multiple hero CTAs.

**Text style:** `display` - neue-haas-grotesk-display 400 · 68px/1

### Ruled editorial chapter

**Observed:** A 1px brown rule establishes the chapter. The uppercase Eyebrow sits at left; prose, facts or Outline actions begin in the right 680px field. Content uses Body, with 20px paragraph spacing, 30px before actions and typically 80px bottom breathing room.

**Transfer:** Use the left side for a concise category identifier and let the right side deliver the substance; retain the open field rather than filling it with ornamental copy.

**Text style:** `body` - neue-haas-grotesk-display 400 · 16px/1.5 · tracking 0.0125em

### Ledger proof

**Observed:** The Ledger row fills the width for comparison, with a tiny uppercase header and subtle Category badges. For introductory proof, the same ruling is reduced to two cells in the right half alongside a landscape video. Numbers remain 16px rather than becoming display type.

**Transfer:** Adapt to measurable benefits, specifications or plan comparisons without making every value a separate card.

**Text style:** `body` - neue-haas-grotesk-display 400 · 16px/1.5 · tracking 0.0125em

### Editorial shelf

**Observed:** A ruled section heading places its uppercase identifier at left and an Outline action at right. After 40px, Resource cards appear four across. The sequence alternates approved solid color pairings and allows taller titles to increase individual card height.

**Transfer:** Use this signature shelf for reports, customer evidence, research or other useful reading; retain a mix of colors rather than forcing one accent onto every card.

**Text style:** `heading` - neue-haas-grotesk-display 400 · 30px/1.2

### Closing utility composition

**Observed:** The default marketing ending moves from the editorial shelf into Subscription paper. A 43px subscription heading and form occupy the left half; four sitemap columns occupy the right. The Email field leads into investor radio options and topic checkboxes, then Subscribe action, reassurance and low-key social icons. The area is about 745px tall, followed by a 353px Legal teal band with horizontal policy links, a small mark at right, a fine light rule and dense disclosure text.

**Transfer:** Use an appropriately simpler subscription form for other products while preserving the left-form/right-sitemap asymmetry and teal legal finish. Inner-page endings add Onward rows and the Liquid landscape ribbon; product detail instead has a short full-width teal conversion strip before the ribbon.

**Text style:** `heading-lg` - neue-haas-grotesk-display 400 · 43px/1.05

### Statement and principles

**Only for:** method and philosophy explanations

**Observed:** A 43px statement spans the page, followed by a four-column summary with 335px columns, 20px gaps and fine right borders between items. Each item has either a small line symbol or a 30px numbered marker, a 22px title and 16px body copy.

**Transfer:** Use a small set of distinct ideas or stages, keeping each description compact enough to scan across the row.

**Text style:** `principle-heading` - neue-haas-grotesk-display 400 · 22px/31px

### Media and expandable principles

**Only for:** philosophy and explanatory pages

**Observed:** A split chapter pairs a landscape video on the left with a 680px-wide accordion on the right. Five compact 70px rows are divided by bottom hairlines; 22px labels sit at left and small plus controls at right.

**Transfer:** Use this for a modest set of objections or principles that benefit from progressive disclosure; provide meaningful video artwork rather than a decorative empty media rectangle.

### Directory chapter

**Only for:** people directories

**Observed:** An uppercase group label introduces the People grid. Portraits sit above name, role and a 28px-high bio action using Micro. Content is not boxed as a card; cream continues between items and rows.

**Transfer:** Group people by meaningful responsibility without adding badges or colored tile backgrounds.

**Text style:** `body` - neue-haas-grotesk-display 400 · 16px/1.5 · tracking 0.0125em

### Method diagram chapter

**Only for:** method explanations

**Observed:** A ruled chapter holds a small label at upper left and Set and selection circles at the right. The left side remains unusually open. Subsequent chapters pair concise qualitative criteria with ruled rows, then use a longer circle sequence before two-column comparison ledgers.

**Transfer:** Explain a real selection or evaluation mechanism. Use diagram geometry only when it carries meaning, not as generic decoration.

## Page flow

**Storyline:** Atmospheric promise → concise orientation → organized proof or explanation → useful resources or onward action → subscription and utility finish.

### Broad marketing landing page

1. **Promise** - Landscape opening with vertical word sculpture and Menu rail.
2. **Orientation** - A short full-width statement followed by split media, ruled lead paragraphs and modest metrics.
3. **Quantified proof** - Full-width comparison ledger with badges and aligned returns.
4. **Capability discovery** - Tall visual category cards.
5. **Editorial proof** - A multicolored Resource card shelf.
6. **Relationship and utility** - Subscription and sitemap composition, then teal legal band.

**Transfer:** Make the core promise atmospheric, then substantiate it through disciplined reading-scale evidence and useful editorial objects.

### Explain a guiding point of view

1. **Orientation** - Landscape title and concise large statement.
2. **Principles** - Four line-icon columns.
3. **Depth** - Video beside a compact accordion, then a split explanatory prose chapter.
4. **Further learning** - Four colorful resource objects.
5. **Onward action** - Two full-width onward rows and a liquid landscape ribbon.
6. **Relationship and utility** - Shared subscription, sitemap and legal finish.

**Transfer:** Use this pattern for a product philosophy or category explanation with a small set of defensible principles.

### Support a considered product decision

1. **Identity** - Landscape title with colored word rail and persistent product-specific navigation.
2. **Qualification** - Split summary, ruled key facts, suitability and differentiation.
3. **Documentation** - Two tall teal report covers with blue edge strips and further download links.
4. **Quantified proof** - Performance chart and a finely ruled historical table in the right content field.
5. **Conversion** - Short full-width teal action strip followed by a liquid terrain ribbon.
6. **Relationship and utility** - Shared subscription and teal legal finish.

**Transfer:** Replace financial facts with real product requirements, specifications, documentation and longitudinal proof; preserve the split informational composition.

### Establish human credibility through a directory

1. **Identity** - Landscape title with lemon word rail.
2. **Human proof** - Two labeled groups of three-column studio portraits with name, role and bio actions.
3. **Onward action** - Full-width related-page rows and a liquid landscape ribbon.
4. **Relationship and utility** - Shared subscription, sitemap and legal finish.

**Transfer:** Prioritize consistency of photography and factual role labels over individual decorative treatments.

### Make a complex method understandable

1. **Orientation** - Landscape title, large statement and four numbered explanation columns.
2. **Mechanism** - Right-aligned nested selection circles.
3. **Criteria** - Split ruled lists followed by a long sequence of overlapping colored evaluation circles.
4. **Comparison** - Pairs of ruled strategy ledgers with embedded media.
5. **Onward action** - Related-page rows and a liquid landscape ribbon.
6. **Relationship and utility** - Shared subscription, sitemap and teal legal band.

**Transfer:** Use a concise overview before visual mechanisms and detailed comparisons. Keep the long diagram treatment scoped to explanations that genuinely need it.

## Writing

Measured, experienced and invitational. Confidence comes from clearly named methods and qualified factual detail rather than superlatives or a hard sell.

**Do not copy:** Do not reuse Munro names, logos, landscape assets, team identities, investment claims, returns, dates, proprietary terminology or source quotations as the new product's claims. Examples below illustrate cadence only.

- **Addressing the reader:** Use we for the organization and our for its approach; use you selectively when explaining suitability or a next step. Most resource titles and data labels are impersonal.
- **Rhythm:** Short sentence-case headlines and direct action labels sit above more explanatory paragraphs. Occasional clipped paired sentences establish priorities; longer technical statements remain concrete and qualified.

| Role | Pattern | Typical length | Examples of the pattern |
| --- | --- | --- | --- |
| Hero headline | A brief invitation framed through a journey or larger outlook. | 3-6 words | “Invest in the journey” |
| Positioning statement | Plain declarative identification, without a superlative. | 5-10 words | “We are global growth investors.” |
| Supporting line | State a practical goal in one direct sentence. | 8-16 words | “Our goal is to be your global growth manager.” |
| Explanatory priority | Two clipped sentences establish order before the detailed explanation. | 3-5 words per sentence | “Capital preservation first. Investment returns second.” |
| Action | Literal verb plus object or destination; no emotional pressure. | 2-4 words | “See more”<br>“Start investing today” |
| Resource title | Specific subject or useful question, often followed by medium or period. | 4-12 words | “Finding opportunities anywhere in the world” |

**Words and phrasing to use:** alongside; long-term; identify; process; opportunities; consider; access; learn more

**Avoid:** revolutionary; game-changing; guaranteed; crush; unlock unlimited; hurry; !!!

**Rules:**

- Separate the broad promise from factual proof; do not make every paragraph sound like a headline.
- Qualify technical or performance claims with their conditions and relevant time period.
- Make action labels name the destination, medium or document.
- Use sentence case for narrative titles; reserve capitals for navigational and classification labels.

## Do's and Don'ts

### Do

- Keep the main reading ground oat and body text peat, not neutral white and black.
- Use 20px desktop gutters to preserve the broad, edge-led composition.
- Set the opening headline at 68px, weight 400 and normal tracking.
- Make every landing page include the rotated word sculpture and a colorful text-led proof or resource shelf.
- Use 1px translucent brown rules to organize comparable facts.
- Keep card padding at 20px and editorial card corners at 15px.
- Hold numerical proof to the 16px reading scale.
- Finish utility navigation with the warm-paper/teal pairing.

### Don't

- Do not apply 15px rounding to every control: outline actions use 2px and product rail actions use 4px.
- Do not make the subscription or facts area a floating white card with a drop shadow.
- Do not turn the 10px uppercase action labels into 16px pill buttons.
- Do not use bold display headlines to manufacture emphasis; the opening is regular 400.
- Do not distribute the bright palette equally across all reading chapters; reserve broad uninterrupted cream for explanation.
- Do not force every resource title into a fixed-height clipped tile; a long title can grow beyond 300px.
- Do not use giant financial numerals as the dominant visual proof.
- Do not use colorful icon discs in place of the small outline symbols.

## Motion and responsive

### Motion

**Observed:**

- Buttons and many interactive cards declare opacity 0.2s transitions.
- Ledger rows declare padding 0.1s and background-color 0.1s transitions.
- Email fields declare background-color 0.2s; subscription submit declares 0.23s ease-in-out.
- Method circles use sticky positioning, producing overlap through scrolling; the legal layer also uses sticky positioning.

**Transfer:**

- Keep state changes quick and subordinate to typography; use the declared opacity and fill transitions for their respective controls.
- Preserve the method diagram's progressive overlap only on explanatory pages; maintain a readable static composition otherwise.

**Unknown:**

- Exact landscape playback, distortion animation, scroll timing and reduced-motion implementation are not established.

### Responsive

**Observed:**

- Desktop composition uses full-width scenery, four-column shelves, three-column portraits and split editorial fields.
- Styles include breakpoints around 768px, 992px, 1200px and 1440px.

**Transfer:**

- On narrow screens, retain landscape, title and rotated word sculpture as one scene; reduce the rail proportion before allowing it to obscure the title.
- Reflow split editorial content to label then substance; reduce shelves and portraits to fewer columns while preserving the 20px spacing language.
- Keep ledgers legible with a deliberate horizontal overflow or stacked label/value arrangement rather than shrinking the 16px reading text.

**Unknown:**

- Exact mobile arrangements, headline sizes and breakpoint-specific visibility rules are unknown; narrow-screen rules here are design guidance.

## How to use this guide

1. Start from the Essentials and the first-screen recipe; where the guide offers variants, use the default named for a new marketing page.
2. Plan the page before building: map your content onto the section recipes and page flow, then check the plan against the Do's and Don'ts.
3. Build with the tokens and component specs; recreate signature graphics with their build recipes instead of generic decoration, and use the named font substitutes if a font is unavailable.
4. Render the page at desktop and mobile widths, compare it with the Essentials and the Don'ts, and fix the differences before you finish.