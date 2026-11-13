# Walden: full Refero style

- Site: [Walden](https://walden.us) (walden.us)
- Refero style UUID: `c6f2c718-4cef-4e20-bc4b-448ea995a50c`
- Retrieved: 13 November 2026, via Refero `refero_get_style`.
- This is the full style guide Refero returned, with em dashes normalized to hyphens so the file matches Northway writing rules. Measurements, tokens and rules are otherwise as returned.

---

# Walden - objects in stillness

## Overview

An image-led, gallery-like style in which tactile objects and unhurried human gestures carry more weight than promotional copy. White and warm stone canvases, charcoal details and regular-weight grotesk typography frame forest scenes, architectural interiors and sculptural studio photography. It suits crafted products and considered services, with sparse text and expansive media rather than dense feature marketing.

### Essentials

- The room is the headline: a full-width 774px photographic opening carries a lower-left copy block, with a 54px/1.06 regular grotesk headline, not oversized display lettering.
- A neutral frame lets the objects supply the color: white and near-white stone dominate the interface; greens, brass, cobalt and warm red remain inside edge-to-edge photography rather than colored UI bands.
- Actions resemble small architectural plaques: 52px height, 16px 24px padding, 2px corners on solid near-black buttons; the photographic opening uses a transparent white 1px inset outline.
- Editorial proof stays unboxed: 1px warm-gray top rules, 22px top padding and 56px column gaps separate numbered benefits and process explanations.
- Material presence is indispensable: alternate room-scale scenes with close details of surfaces, hands and light. If no lifestyle media exists, photograph or render the new object on a simple plinth with believable side light and a tangible backing.
- Small type makes large images feel monumental: 13.5px captions sit 16px beneath portrait media, while commerce tiles use centered 14px labels inside their lower edge.
- The closing thought gets its own breathing room: a centered 31px/1.45 statement sits within 136px vertical padding, followed by a restrained conversion area and a full-width underlined email field.

## Colors

### Brand

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Brown charcoal | `#3e3839` | `--color-announcement` | background | The narrow service announcement band. |

### Neutral

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Near-black | `#030302` | `--color-ink` | text, action, border | Solid actions, active tabs and closing statements; also the source hue for translucent body text and image scrims. |
| Soft charcoal | `#3f3f3f` | `--color-body` | text | Visible body and heading tone on white, produced by rgba(3,3,2,0.76). |
| Secondary gray | `#686867` | `--color-muted` | text | Captions, indices, labels and supporting notes on white, produced by rgba(3,3,2,0.6). |
| Warm gray edge | `#d3cec5` | `--color-rule` | border | Hairline separators and field outlines. |
| Pale stone | `#f4f2f0` | `--color-stone` | surface | Backing behind portrait media. |
| Field wash | `#fbfbfa` | `--color-field` | surface | Visible field fill over white; source warm gray at 0.09 alpha. |
| White | `#ffffff` | `--color-canvas` | background, text | Main canvas, navigation and reversed type. Over photography, support copy uses white at 0.85 alpha, notes at 0.66 and proof dividers at 0.22. |

## Typography

- **Graphik** - Headlines, editorial text, navigation and ordinary actions. Even, contemporary grotesk; almost entirely regular weight, with gently tightened larger headings. If unavailable, use **Inter**. Use 400 and 500; preserve line breaks and modest negative tracking. Font stack: "Graphik", "Inter", Arial, sans-serif.
- **Geist** - Media captions, inquiry labels and submit actions. Clean utility sans, subtly distinct from the main grotesk. Font stack: "Geist", Arial, sans-serif.

| Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| display | Graphik | 400 | 54px | 1.06 | -0.015em | size clamp(32px, 4.8vw, 54px) | Main marketing headline over photography. |
| heading | Graphik | 400 | 32px | 1.1 | -0.015em | fixed | Section leads and centered inquiry heading. |
| statement | Graphik | 400 | 31px | 1.45 | -0.01em | size clamp(22px, 2.8vw, 31px) | Isolated centered closing thought. |
| subheading | Graphik | 400 | 19px | 1.35 | -0.01em | fixed | Benefit, process and case-study titles. |
| lead | Graphik | 400 | 16px | 1.65 | normal | fixed | Supporting paragraph over the hero image. |
| form-support | Graphik | 400 | 15px | 1.65 | normal | fixed | Centered support beneath the inquiry heading. |
| body | Graphik | 400 | 14.5px | 1.7 | normal | fixed | Benefits, case descriptions and process text. |
| action | Graphik | 400 | 14px | 1.4 | normal | fixed | Ordinary buttons and short actions. |
| navigation | Graphik | 400 | 14px | 1.67 | normal | fixed | Top-level category navigation. |
| text-link | Graphik | 400 | 14px | 1.1 | normal | fixed | Footer links and small image-panel links. |
| submit | Geist | 400 | 14px | 1.4 | normal | fixed | Full-width form submit action. |
| announcement | Graphik | 400 | 14px | 1 | 0.03em | fixed | Centered service announcement. |
| caption | Geist | 400 | 13.5px | 1.55 | normal | fixed | Left-aligned captions below portrait media. |
| note | Graphik | 400 | 12.5px | 1.4 | normal | fixed | Response-time reassurance and small proof introductions. |
| index | Graphik | 400 | 11px | 1.4 | 0.12em | fixed | Two-digit benefit indices. |
| field-label | Geist | 500 | 10.5px | 1.4 | 0.12em, uppercase | fixed | Inquiry field labels. |

### Page-type variants

| Only for | Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| commerce collection pages | commerce-intro | Graphik | 400 | 16px | 1.2 | normal | fixed | Small centered promise in the image-led storefront opening. |
| commerce collection pages | tile-label | Graphik | 400 | 14px | 1.3 | normal | fixed | Centered product names inside commerce tiles. |
| multi-audience service pages | tab | Graphik | 500 | 13px | 1.4 | 0.02em | fixed | Audience-switcher navigation. |

Sizes are for a 1440px-wide desktop window. Recipes with a viewport formula grow and shrink with the window; use the formula (for example in `clamp()`), not the fixed pixel value.

**Notes:**

- Keep the largest headings at weight 400; hierarchy comes from scale and image placement, not boldness.
- Display and section headings share -0.015em tracking. Smaller titles and the closing statement use -0.01em; paragraphs stay untracked.
- Uppercase is reserved for tiny form labels, not section headings.

## Layout

**Density:** Airy in section pacing and photographic scale, with compact navigation and concise text clusters.

### Spacing

| Value | Use | Scales with viewport |
| --- | --- | --- |
| 7px | Field label to control. | fixed |
| 10px | Small title-to-paragraph spacing. | fixed |
| 14px | Inquiry columns and field spacing. | fixed |
| 16px | Media-to-caption spacing. | fixed |
| 20px | Hero title-to-lead and action-to-note gaps. | fixed |
| 22px | Top padding after a thin rule. | fixed |
| 24px | Portrait media column gaps. | fixed |
| 30px | Hero support-to-action row. | fixed |
| 40px | Desktop page side gutters. | fixed |
| 56px | Editorial column gaps and section-heading separation. | clamp(28px, 4vw, 56px) |
| 68px | Standard editorial section vertical padding. | fixed |
| 76px | Separation before a ruled action strip. | clamp(48px, 7vw, 76px) |
| 136px | Opening editorial top padding and statement breathing room. | fixed |

### Containers and grids

- **Editorial container**: max width 2000px · side padding 40px. Centered content envelope; at 1440px, the inner width is 1360px.
- **Benefit grid**: 3 columns · gap 56px. Equal text columns, each 416px wide at desktop.
- **Case pair**: 2 columns · gap 56px. Equal 652px-wide landscape images with titles and short paragraphs below.
- **Portrait gallery**: 3 columns · gap 24px. Equal 437px-wide media columns; 9:16 video and 4:5 still-image variants.
- **Inquiry container**: max width 620px · side padding 40px. Centered 540px usable form width; paired fields use 14px gaps.
- **Statement container**: max width 860px · side padding 40px. Centered closing statement with 780px usable text width.
- **Commerce grid** (only for commerce collection pages): 3 columns · gap 6px. Closely spaced 3:4 image tiles inside the main gutters.

## Corner radius

| Element | Radius |
| --- | --- |
| Solid buttons | 2px |
| Inquiry fields | 8px |

## Surfaces and depth

### Shadows

| Name | Value | Use |
| --- | --- | --- |
| Email underline | `0px 1px 0px 0px #d3cec5` | Single bottom edge on the newsletter input; not an elevation shadow. |

### Surfaces

#### Canvas · level 0

**Use:** Base background and footer.

**CSS:** `background: #ffffff`

#### Warm editorial drift · level 0

**Use:** Long-form page background.

**CSS:** `background-image: linear-gradient(rgb(255, 255, 255) 0%, color(srgb 0.975843 0.973098 0.968157) 55%, color(srgb 0.96549 0.961569 0.95451) 74%, rgb(255, 255, 255) 100%)`

**Observed:** A nearly imperceptible warm tint gathers through the middle of the long page and returns to white at the end.

**Transfer:** Keep this a page-length change of paper tone, not a conspicuous decorative gradient.

#### Photographic scrim

**Use:** Legibility layer between hero media and white copy.

**CSS:** `background-image: linear-gradient(rgba(3, 3, 2, 0.18), rgba(3, 3, 2, 0) 34%, rgba(3, 3, 2, 0.72))`

**Observed:** The darkest area is at the bottom, preserving the upper room light.

**Transfer:** Keep the image visible; darken the copy area rather than washing the whole photograph uniformly.

#### Media backing

**Use:** Portrait media wrappers.

**CSS:** `background: #f4f2f0; overflow: hidden`

**Observed:** Square-edged media fills the backing.

#### Ruled editorial surface

**Use:** Benefits, process columns and action strips.

**CSS:** `border-top: 1px solid #d3cec5; padding-top: 22px`

**Observed:** No filled card, perimeter border or elevation.

#### Inquiry control

**Use:** Inputs, selects and textarea.

**CSS:** `background: rgba(211, 206, 197, 0.09); border: 1px solid #d3cec5; border-radius: 8px`

#### Service band

**Use:** Narrow announcement above navigation.

**CSS:** `background: #3e3839; color: #ffffff`

## Components

### Primary button

**Use:** Conversion action on the light canvas.

**CSS:** `background: #030302; color: #ffffff; border-radius: 2px; box-shadow: 0px 0px 0px 1px #030302 inset; padding: 16px 24px; height: 52px`

**Text style:** `action` - Graphik 400 · 14px/1.4

**Observed:** Compact centered label, typically 148px wide; placed alone beneath a ruled strip rather than repeated inside every feature.

**States:** Declared: focus-visible outline 0.09375rem solid currentcolor; outline-offset 0.2em.

### Image outline button

**Use:** Primary action over the opening photograph.

**CSS:** `background: transparent; color: #ffffff; box-shadow: 0px 0px 0px 1px #ffffff inset; padding: 16px 24px; height: 52px`

**Text style:** `action` - Graphik 400 · 14px/1.4

**Observed:** Fine white rectangular edge, with a small reassurance note beside it.

**States:** Declared: focus-visible outline 2px solid #ffffff; outline-offset 3px.

### Category navigation

**Use:** Global product navigation.

**CSS:** `padding: 11.2px 10px; color: rgba(3, 3, 2, 0.76)`

**Text style:** `navigation` - Graphik 400 · 14px/1.67

**Observed:** A 55px-high white header puts a compact wordmark at left, category links beside it and concierge, audience link, currency and thin utility icons at right. It remains visible through the long page. The commerce opening uses a transparent reversed version.

**Transfer:** Keep navigation in a single restrained horizontal line on desktop; do not turn it into a large branded banner.

### Benefit column

**Use:** Short product or service capabilities.

**CSS:** `border-top: 1px solid #d3cec5; padding-top: 22px`

**Text style:** `body` - Graphik 400 · 14.5px/1.7

**Observed:** Two-digit Index, Subheading and one short paragraph; the title has 12px top margin and the paragraph 10px. Usually arranged in equal thirds.

**Transfer:** Write one concrete advantage per column, not a miniature sales page.

### Ruled action strip

**Use:** A single action after proof or process content.

**CSS:** `border-top: 1px solid #d3cec5; padding-top: 22px; margin-top: 76px; display: flex; justify-content: center`

**Observed:** Spans the editorial width and contains one Primary button.

### Inquiry field

**Use:** Collect project context near the end.

**CSS:** `background: rgba(211, 206, 197, 0.09); border: 1px solid #d3cec5; border-radius: 8px; padding: 12px 14px; height: 47px`

**Observed:** Tiny uppercase Field-label sits 7px above each control. Two short fields share a row, email spans the width, then a select and optional quantity share a row. A full-width textarea is 89px high.

**Transfer:** Use the same pairing logic for a different enquiry; keep optional markers small and adjacent to labels.

### Form submit

**Use:** Final inquiry action.

**CSS:** `background: #030302; color: #ffffff; border-radius: 2px; box-shadow: 0px 0px 0px 1px #030302 inset; padding: 16px 24px; height: 52px; width: 100%; margin-top: 10px`

**Text style:** `submit` - Geist 400 · 14px/1.4

**Observed:** Runs the full 540px usable form width; a small centered response-time note sits below.

**States:** Declared: focus-visible outline 0.09375rem solid currentcolor; outline-offset 0.2em.

### Newsletter line

**Use:** The shared final signup affordance.

**CSS:** `padding: 12px 0px; height: 46px; box-shadow: 0px 1px 0px 0px #d3cec5`

**Observed:** A nearly full-width email field with only a bottom edge and a small right-facing arrow at the far end. It opens the footer, without a surrounding card.

### Footer link

**Use:** Compact navigation at the page ending.

**CSS:** `color: #030302; text-decoration: underline`

**Text style:** `text-link` - Graphik 400 · 14px/1.1

**Observed:** Four visually aligned columns below the email line group company, partnership, support and policy links; rows have about 12px separation. A small muted copyright line is isolated below. Underline emphasis stays visually light.

**States:** Declared: focus-visible outline 0.09375rem solid currentcolor; outline-offset 0.2em.

### Media caption

**Use:** Identify portrait video or still imagery.

**CSS:** `margin-top: 16px; color: rgba(3, 3, 2, 0.6)`

**Text style:** `caption` - Geist 400 · 13.5px/1.55

**Observed:** Plain left-aligned caption outside the picture; no badges, metadata stack or container fill.

### Audience tabs

**Only for:** multi-audience service pages

**Use:** Switch between related partner offers.

**CSS:** `padding: 2px 0px; border-bottom: 1px solid transparent; color: rgba(3, 3, 2, 0.6)`

**Text style:** `tab` - Graphik 500 · 13px/1.4 · tracking 0.02em

**Observed:** Centered below the global header with 34px horizontal gaps and 16px vertical band padding. The current item has a near-black bottom rule and darker text.

**States:** Declared: hover color rgba(3 3 2 / 1.0); focus-visible outline 2px solid rgba(3 3 2 / 1.0); outline-offset 3px.

### Commerce tile

**Only for:** commerce collection pages

**Use:** Shop individual objects through editorial imagery.

**CSS:** `position: relative; overflow: hidden`

**Text style:** `tile-label` - Graphik 400 · 14px/1.3

**Observed:** A 449px by 599px image carries its centered label in a bottom overlay with 12px padding; text switches between black and white to suit the picture. Three tiles meet with 6px gaps.

**Transfer:** Make the entire tile the link. Preserve photographic variety without adding price badges or floating buttons.

## Imagery and graphics

### Architectural object stage

**Use:** The main opening and wide editorial interruptions.

**Observed:** A room of pale repeated mats and cushions against concrete, timber window frames and diffused daylight fills the opening. The composition leaves calmer wall space at left for copy and allows the object arrangement to extend across the width. Other scenes put pale geometric plinths into a dense green forest.

**Transfer:** Stage the new product as a physical presence in a believable place: one large environment, directional light and substantial negative space. For a nonphysical product, use a restrained real workstation or a single material presentation board rather than a collage of UI windows.

### Sculptural studio detail

**Use:** Wide feature images, paired proof and portrait still galleries.

**Observed:** Close materials and objects dominate: etched stone, a metal vessel caught by a shaft of light, an object supported by a dark branch, brass, soft upholstery and hands. Backdrops range from pale gray to near-black; isolated cobalt or red scenes stay within photographs. Shadows, smoke, reflections and grain remain photographic rather than drawn UI effects.

**Transfer:** Create at least one close material study with a single directional light, clear silhouette and a neutral backing. A simple well-lit photograph is preferable to a complicated decorative illustration.

### Human-scale portrait reels

**Use:** Three-column experiential gallery.

**Observed:** Tall 9:16 footage shows a resting person in a softly lit room, an outdoor rooftop scene and a close view of incense. Pale blue daylight, fabric folds and shallow-focus blur give the gallery a softer texture than the crisp object studies. Media occupies almost the full section with only small captions beneath.

**Transfer:** Show use, context and a close gesture as complementary views; preserve portrait framing and naturally soft light. If footage is unavailable, use coherent still photographs with the same crops.

### Commerce photographic chapters

**Only for:** commerce collection pages

**Use:** Browsing chapters and product tiles.

**Observed:** A broad 1360px by 816px image with a tiny lower-center label is followed by close-packed portrait tiles. Natural moss and timber, pale architectural settings, dark silhouettes, product cutouts and warm sunset scenes produce variation without changing the white page frame.

**Transfer:** Use a wide category-defining scene and then related detailed perspectives; retain square image corners and modest labels.

### Icons

**Observed:** Utility SVGs are thin outline forms, usually 22px square with 1px strokes; the narrower bag is 14px by 20px. Search, account and bag sit in generous approximately 44px interaction areas. A small arrow closes the newsletter line.

**Transfer:** Use simple unfilled utility symbols at the same weight; let photographs, not icons, illustrate benefits.

## Section recipes

How recurring sections are built.

### First screen: Room-scale promise

**Observed:** A 44px Service band and 55px global header precede a 55px Audience tabs row on service offers. The 774px full-width photograph begins beneath this chrome. Back to front: room photograph, Photographic scrim, then white copy anchored in the lower-left half. The title uses Display across two lines in a 620px maximum block; the lead is a narrower approximately 439px measure below with a 20px separation. An Image outline button follows after 30px, with a Note alongside at a 20px gap. A thin white proof divider spans the width near the bottom, with a small muted introduction and understated partner marks below. At 900px, the headline, support, action, room and most of the proof strip are visible; the following editorial section is below the fold.

**Transfer:** Use this as the default marketing opening: one immersive environmental image, one short emotional promise and one action. Without equivalent room photography, stage the product against a real textured wall or tabletop with clear depth and reserved space for copy. Multi-audience offers add Audience tabs; commerce collection pages instead open with a 676px immersive image, overlay navigation and a tiny lower-center Commerce-intro with a text action.

**Avoid:** Do not replace the environment with a split-screen text panel, a huge centered headline, a floating dashboard collage or several competing actions.

**Text style:** `display` - Graphik 400 · 54px/1.06 · tracking -0.015em

### Ruled benefits

**Observed:** A left-aligned Heading with roughly 523px text measure introduces three Benefit columns. The first editorial chapter uses 136px top and 68px bottom padding; a 56px heading separation leads into the ruled grid.

**Transfer:** Summarize a few concrete advantages in equal-weight columns and let the adjacent imagery demonstrate them.

**Text style:** `heading` - Graphik 400 · 32px/1.1 · tracking -0.015em

### Full-bleed material interlude

**Observed:** A 1440px-wide, 522px-high photograph interrupts the inset text rhythm, with 68px padding above and below and a small plain caption.

**Transfer:** Use a broad object or use-context image as a visual breath between explanatory chapters.

### Paired visual proof

**Observed:** Heading, 56px gap, then two 652px by 489px images. Each has a Subheading 20px below the image and Body text 10px beneath. A Ruled action strip closes the section.

**Transfer:** Pair two complementary forms of proof: detail and outcome, customization and delivery, or broad installation and tactile close-up.

**Text style:** `heading` - Graphik 400 · 32px/1.1 · tracking -0.015em

### Portrait experience gallery

**Observed:** Three portrait media columns with 24px gaps, 68px section padding and Media captions beneath. The video version uses 437px by 777px media; the still version uses 437px by 547px images.

**Transfer:** Let a small coherent set of visual experiences carry the section without a large explanatory heading.

### Three-step reassurance

**Observed:** Heading introduces three ruled process columns with small dark circular numbered markers sitting on their top lines. Subheading and Body explain each step. A Ruled action strip follows after 76px.

**Transfer:** Reduce an unfamiliar purchase or collaboration to a short sequence; use the circular markers for process, two-digit indices for benefits.

**Text style:** `heading` - Graphik 400 · 32px/1.1 · tracking -0.015em

### Closing statement and inquiry

**Observed:** An isolated Statement is centered in a 780px measure with 136px padding above and below. The next section has 68px top and 136px bottom padding, a centered Heading, Form-support, and a narrow form. Inquiry fields lead to Form submit and a small response note.

**Transfer:** Distill the promise to one durable sentence, then give the reader a low-friction way to begin. Match the form's questions and action label to the actual offer.

**Text style:** `statement` - Graphik 400 · 31px/1.45 · tracking -0.01em

### Open-line ending

**Observed:** A 61px separator area introduces a 287px white footer. Newsletter line spans the content width; Footer links sit below in four visually aligned groups, with a small copyright line beneath and ample unused space.

**Transfer:** End with the same understated utility after either shopping imagery or an inquiry form, without a second promotional banner.

### Commerce image chapters

**Only for:** commerce collection pages

**Observed:** Small category text precedes an inset 1360px by 816px image with a bottom-centered text link. A three-column Commerce tile row follows, separated by only 6px between pictures and 20px or 40px vertical padding.

**Transfer:** Use this denser visual browsing rhythm when the purpose is choosing among related products, not explaining a service.

**Text style:** `tile-label` - Graphik 400 · 14px/1.3

## Page flow

**Storyline:** Environmental promise → concise advantages → material and use proof → practical reassurance → distilled closing thought → action → understated utility.

### An immersive visual storefront

1. **Promise** - Forest-scale opening with tiny centered promise and shopping link.
2. **Product exploration** - Repeated category introductions, wide image features and tightly spaced portrait product tiles.
3. **Utility ending** - Email line, grouped footer navigation and copyright; no inquiry form.

**Transfer:** Use visual chapters when the reader should browse a physical collection.

### A high-touch customization or volume offer

1. **Promise** - Room-scale image, lower-left emotional headline, action and understated proof strip.
2. **Capabilities** - Numbered ruled benefits, panoramic image and paired customization and fulfillment examples.
3. **Experiential proof** - Tall use footage, practical three-step explanation and another portrait gallery.
4. **Closing call** - Centered value statement, narrow proposal form, response note and shared footer.

**Transfer:** Balance the feeling of the product with the mechanics of a larger order.

### A partner acquisition offer

1. **Promise** - Environmental opening with a handling-oriented headline and retailer proof.
2. **Commercial fit** - Ruled advantages, wide material image and paired merchandising examples.
3. **Objection handling** - Use gallery and three-step onboarding process clarify what happens next.
4. **Closing call** - Centered craft-and-simplicity statement, partner access form, response note and shared footer.

**Transfer:** Explain practical partnership terms in plain language while letting product craft lead visually.

### A space-based collaborative service

1. **Promise** - Architectural room opening and small partner marks.
2. **Capabilities** - Ruled benefits and a broad human-use photograph.
3. **Social proof** - Two project photographs pair an installation with a close material detail, followed by use footage.
4. **Process** - Three short stages and a portrait still gallery.
5. **Closing call** - Centered durability statement, project inquiry form, response note and shared footer.

**Transfer:** Use installed outcomes and tactile detail to make an intangible collaboration concrete.

## Writing

Warm, composed and materially specific. Emotional promises are short; practical copy answers ordinary questions about the relationship without hype.

**Do not copy:** Do not reuse Walden names, product names, logos, partner marks, client claims, project facts, contact details or response-time promises unless they are true of the new brand. The examples below show the pattern only; write new copy for the new product.

- **Addressing the reader:** Speak directly to 'you' and 'your'; use 'we' for service and follow-through. Product captions can be simple nouns.
- **Rhythm:** Headlines are short sentence-case statements, often ending in a period. Support uses one or two unhurried sentences; actions are plain verbs and nouns.

| Role | Pattern | Typical length | Examples of the pattern |
| --- | --- | --- | --- |
| Hero headline | A tangible object or place expresses an emotional benefit in ordinary language. | 5-8 words | “A gift that says slow down.”<br>“A room for rest, within yours.”<br>“Objects made to be picked up.” |
| Supporting line | Name the audience, then clarify the real service in one sentence. | 20-30 words | “Considered objects that invite a closer look. Partner with [Brand] for trade pricing, low minimums, and simple restocking.” |
| Primary action | A low-pressure invitation to begin a concrete next step. | 2-3 words | “Start an inquiry”<br>“Request wholesale access” |
| Process title | Plain description of the reader's input or the service's output. | 3-5 words | “Tell us about your space”<br>“A proposal with options” |
| Closing statement | Combine lasting value with practical simplicity; often two balanced clauses. | 8-13 words | “Thoughtful at scale. A gift people actually keep.”<br>“Pieces that sell on craft. Simple to stock, simple to reorder.” |

**Words and phrasing to use:** considered; made to; with you; craft; select pieces; simple; tailored; end to end

**Avoid:** revolutionary; game-changing; unlock; ultimate; limited-time urgency; shouted superlatives

**Rules:**

- Lead with a felt outcome, then explain the concrete offer.
- Use material names and visible actions rather than abstract lifestyle jargon.
- Keep captions descriptive and short; do not repeat the paragraph inside the image.
- Give truthful next-step reassurance below the action rather than adding a second competing CTA.

## Do's and Don'ts

### Do

- Keep marketing headlines regular at 54px/1.06 with -0.015em tracking.
- Preserve 40px desktop gutters across text, galleries and footer.
- Use 68px editorial section padding and 136px breathing room for the closing thought.
- Keep portrait captions 13.5px and 16px below media.
- Use fine 1px warm-gray rules to organize text instead of filled feature cards.
- Keep solid actions 52px tall with 2px corners.
- Stage objects with visible shadows, grain and directional light.
- Retain the isolated centered closing thought and underlined email ending.

### Don't

- Do not use bold 700 display type to manufacture hierarchy.
- Do not turn photographic greens or cobalt into interface accent fills.
- Do not replace 2px button corners with pill buttons.
- Do not apply the fields' 8px radius to all photographs.
- Do not put drop shadows under the benefit columns; their only structure is a top rule.
- Do not add colored feature-icon badges to the text columns.
- Do not enlarge tiny portrait captions into promotional headlines.
- Do not make the footer a dark, oversized sales panel.

## Motion and responsive

### Motion

**Observed:**

- Actions declare color, background-color and box-shadow transitions at 0.125s ease-in-out; text links also transition text-decoration-color at that duration.
- Audience tabs declare color 0.2s; inquiry controls declare border-color 0.15s.
- No running element animation is established.

**Transfer:**

- Keep interaction motion concentrated in subtle text and edge changes; media remains the main expressive layer.

**Unknown:**

- Video playback behavior and reveal timing are not established.

### Responsive

**Observed:**

- Display size uses clamp(32px, 4.8vw, 54px); the closing statement uses clamp(22px, 2.8vw, 31px).
- Styles include width breakpoints at 600px, 649px, 700px, 749px, 750px, 768px, 899px, 989px, 1000px and 1024px; not all apply to every page.

**Transfer:**

- On narrow screens, preserve the full-bleed photographic opening, legible lower-left promise and compact action rather than shrinking the desktop room into a small thumbnail.
- Stack ruled text columns and paired fields when needed; keep portrait media tall and its captions outside the image.

**Unknown:**

- Exact narrow-screen navigation, gallery stacking and gutter changes are not established.

## How to use this guide

1. Start from the Essentials and the first-screen recipe; where the guide offers variants, use the default named for a new marketing page.
2. Plan the page before building: map your content onto the section recipes and page flow, then check the plan against the Do's and Don'ts.
3. Build with the tokens and component specs; recreate signature graphics with their build recipes instead of generic decoration, and use the named font substitutes if a font is unavailable.
4. Render the page at desktop and mobile widths, compare it with the Essentials and the Don'ts, and fix the differences before you finish.

---

