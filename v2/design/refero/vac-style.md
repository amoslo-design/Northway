# V-A-C Foundation: full Refero style

- Site: [V-A-C Foundation](https://v-a-c.org) (v-a-c.org)
- Refero style UUID: `f8a0de9f-438a-442f-b7d4-5e48e977be96`
- Retrieved: 13 November 2026, via Refero `refero_get_style`.
- This is the full style guide Refero returned, with em dashes normalized to hyphens so the file matches Northway writing rules. Measurements, tokens and rules are otherwise as returned.

---

# V-A-C - a wired cultural index

## Overview

An austere white editorial system with an unusually diagrammatic skeleton: thin rules connect type, navigation and content as though the whole site were an annotated index. Regular grotesk lettering sits close to documentary photography, film stills and carefully staged objects, with color confined to the pictures. It suits visually rich collections, research-led products and public-facing institutions; dense information is balanced by conspicuous space between entries.

### Essentials

- Navigation becomes a diagram: a 2px black horizontal rule links separated letterforms set at 35px/0.88, with arrows and dashed branches carrying the eye into the content. Retain a connected typographic masthead for every new page using the new identity.
- The opening is an editorial selection, not a sales billboard: three 417px-wide picture entries with 20px gutters, 20px/1.1 metadata above and 34px/0.9 regular titles below, leaving a narrow right-hand navigation rail.
- Headlines behave like compact labels attached to objects: Diagramatika Display at weight 400, normal tracking and line heights below 1; italic 34px titles distinguish a related series within the same text run.
- Actions are bare words, not capsules: the main continuation action is 35px/0.88 with 10px vertical padding, no filled box, rounded corners or shadow; inline contact links use a 1px black underline.
- The interface is almost entirely white and black, with a #f1f1f1 closing band; saturated color belongs inside rectangular imagery rather than page backgrounds. Media is unrounded, commonly 417×278px, and a plain product photograph or documentary detail is the fallback when commissioned artwork is unavailable.
- Whitespace exposes the wiring: 150px separates editorial rows, while labels sit only 5px from their pictures. A low, 212px grey utility footer closes the experience with contacts, a spare email field and a return-arrow submit control rather than a giant conversion banner.

## Colors

### Brand

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Black ink | `#000000` | `--color-ink` | text, border, action, link | All editorial type, rules, arrows and control outlines. |

### Neutral

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Utility grey | `#f1f1f1` | `--color-footer` | background, surface | The full-width closing utility band. |
| White canvas | `#ffffff` | `--color-canvas` | background, surface | The continuous page and masthead; also the source white for the 20% alpha utility notice. |

### Semantic

| Name | Value | Token | Roles | Use |
| --- | --- | --- | --- | --- |
| Focus blue | `#2260c5` | `--color-focus` | border | 2px focus-visible outlines only; not an editorial accent. |

## Typography

- **Diagramatika Display** - Titles, masthead letters, navigation and large text actions. Regular neo-grotesk with compact display proportions, tightly stacked lines and crisp, unembellished forms. If unavailable, use **Inter**. Use 400; preserve compressed line height and normal tracking. Font stack: "Diagramatika Display", "Inter", Arial, sans-serif.
- **Diagramatika Text** - Metadata, explanatory copy, filters and footer text. Neutral readable grotesk with a more open text rhythm than the display cut. If unavailable, use **Inter**. Use 400 with 700 reserved for directory sublabels. Font stack: "Diagramatika Text", "Inter", Arial, sans-serif.

| Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- |
| navigation-action | Diagramatika Display | 400 | 35px | 0.88 | normal | size calc(14.7px + 1.40845vw) | Masthead lettering, navigation and continuation actions. |
| entry-title | Diagramatika Display | 400 | 34px | 0.9 | normal | fixed | Default picture-led headline and entry title; wrap freely without enlarging a short title. |
| series-title | Diagramatika Display | 400 italic | 34px | 0.9 | normal | fixed | Related series title appended to an upright entry title. |
| body-metadata | Diagramatika Text | 400 | 20px | 1.1 | normal | fixed | Metadata above pictures, prose and footer links. |

### Page-type variants

| Only for | Recipe | Font | Weight | Size | Line height | Tracking | Scales with viewport | Use |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| catalogue and archive pages | index-heading | Diagramatika Display | 400 | 70px | 0.88 | normal | size calc(15.9px + 3.75587vw) | Standalone centered page heading above catalogues or timelines. |
| chronological archives | timeline-title | Diagramatika Display | 400 | 35px | 0.88 | normal | fixed | Linked entry titles alternating around a diagram spine. |
| catalogue controls | filter-label | Diagramatika Text | 400 | 20px | 1.15 | normal | size calc(14.6px + 0.375587vw) | Text-only filter and sorting actions. |

Sizes are for a 1440px-wide desktop window. Recipes with a viewport formula grow and shrink with the window; use the formula (for example in `clamp()`), not the fixed pixel value.

**Notes:**

- Keep the hierarchy almost entirely regular-weight: display scale and placement do the work of boldness.
- Display lines are deliberately compressed; body and metadata regain breathing room at 1.1. Do not apply body leading to headlines.
- Italic series names continue the headline rather than becoming a separate badge. Keep the normal letter spacing across all sizes.

## Layout

**Density:** Airy between entries but compact within each entry; close labels and pictures contrast with long blank intervals.

### Spacing

**Spacing system:**

- **rhythm** 10px, vertical - Main vertical padding and margins; 5px is the close metadata exception.
- **column-step** 20px, horizontal - Side padding and grid gutters.

| Value | Use | Scales with viewport |
| --- | --- | --- |
| 5px | Metadata-to-picture gap and close title-group spacing. | fixed |
| 10px | Masthead and continuation-action vertical padding. | calc(10px + 0vw) |
| 20px | Side padding, column gutters and utility-band vertical padding. | fixed |
| 30px | Margins around catalogue headings and timeline entry spacing. | fixed |
| 120px | Space after the final continuation action before the footer. | fixed |
| 150px | Space between editorial card rows and breathing room before utility closure. | fixed |

### Containers and grids

- **outer-grid**: max width 2020px · 13 columns · gap 20px · side padding 20px. Shared desktop grid; reserve the last narrow column for a vertical navigation rail in the picture-led layout.
- **editorial-selection**: 3 columns · gap 20px. Three equal 417px-wide entries at a 1440px viewport, occupying the left twelve columns of the outer grid.
- **catalogue-with-aside** (only for catalogue pages): 2 columns · gap 20px. Two 417px media columns to the right of a 417px prose and directory aside; align the title and controls with the first media column.
- **timeline-field** (only for chronological archives): max width 940px · 9 columns · gap 20px. Central alternating text entries, with a dashed spine down the center and narrow filter lists outside both sides.

## Corner radius

| Only for | Element | Radius |
| --- | --- | --- |
| archive filters | archive-radio | 50% |

## Surfaces and depth

### Surfaces

#### White field · level 0

**Use:** Continuous editorial canvas and fixed masthead.

**CSS:** `background: #ffffff; color: #000000`

**Observed:** Cards are not raised objects; text and images share the page surface.

**Transfer:** Use alignment and interval instead of panel boundaries.

#### Utility band · level 0

**Use:** Full-width footer beneath the editorial field.

**CSS:** `background: #f1f1f1; padding: 20px 0`

**Observed:** A shallow closing surface with no top border, shadow or rounded edge.

**Transfer:** Keep its information compact even when the main content is expansive.

#### Translucent notice · level 2

**Only for:** cookie utilities

**Use:** Small bottom-center consent notice.

**CSS:** `background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(5px); padding: 10px`

**Observed:** A flat translucent rectangle over the current content, with an underlined word link and small cross.

**Transfer:** Keep the utility subordinate; do not extend glass effects to content cards.

## Components

### Connected masthead

**Use:** Identity and primary navigation.

**CSS:** `background: #ffffff; color: #000000; padding: 10px 0; position: fixed`

**Text style:** `navigation-action` - Diagramatika Display 400 · 35px/0.88

**Observed:** A full-width horizontal line joins three spaced identity characters. The expanded top area carries a destination above the middle character and search at the right; scrolling leaves a 51px fixed identity strip. A vertical right rail connects section links with dashed strokes.

**Transfer:** Connect letters or short labels from the new identity with the same diagram logic, including at least one arrow-led branch.

### Editorial card

**Use:** Primary picture-led entry and proof module.

**CSS:** `position: relative; color: #000000`

**Text style:** `entry-title` - Diagramatika Display 400 · 34px/0.9

**Observed:** Metadata with a northeast arrow comes first, then a rectangular image, then the title. The entire entry is linked. Images are generally landscape; captions wrap without a separate padded container.

**States:** Declared: hover not specified; focus-visible outline #2260c5 solid 2px; active transform scale(0.99).

**Transfer:** Show a real object, process or use case rather than a decorative feature icon.

### Continuation action

**Use:** Centered final action after an editorial selection.

**CSS:** `color: #000000; background: transparent; padding: 10px 0; text-align: center`

**Text style:** `navigation-action` - Diagramatika Display 400 · 35px/0.88

**Observed:** A solitary text action aligned to the center of the content field, not the reserved navigation rail.

**States:** Declared: hover opacity 0.55; focus-visible outline #2260c5 solid 2px; active opacity 0.4 and transform scale(0.99).

### Underlined contact link

**Use:** Email and inline destinations.

**CSS:** `color: #000000; border-bottom: 1px solid #000000`

**Text style:** `body-metadata` - Diagramatika Text 400 · 20px/1.1

**Observed:** The underline is a thin black edge beneath the text, with no colored link treatment.

**States:** Declared: hover opacity 0.55; focus-visible outline #2260c5 solid 2px; active opacity 0.4 and transform scale(0.98).

### Utility footer

**Use:** Practical closure and light conversion.

**CSS:** `background: #f1f1f1; padding: 20px 0; color: #000000`

**Text style:** `body-metadata` - Diagramatika Text 400 · 20px/1.1

**Observed:** A 212px band with four information groups: contact details, organizational links, newsletter, and policy/related links. The first two are narrow, the last two wider; a bottom line holds an external destination and credit. Language selection remains at the lower right.

**Transfer:** Replace the groups with equivalent contact, support, subscription and policy information rather than introducing a campaign slogan.

### Newsletter form

**Use:** A restrained subscription action inside the utility band.

**CSS:** `display: flex; flex-direction: column; justify-content: space-between`

**Text style:** `body-metadata` - Diagramatika Text 400 · 20px/1.1

**Observed:** A 308px-wide group: label, visually unboxed email field with italic Email prompt, then a small square consent checkbox and much smaller consent text. An 18×24px return-arrow button sits at the right of the field.

**Transfer:** Use a real input and accessible labelled submit button; keep the form visually typographic.

### Catalogue filter action

**Only for:** catalogue pages

**Use:** Open filters above a media grid.

**CSS:** `color: #000000; background: transparent; padding: 8px 5px 10px 6px; position: relative`

**Text style:** `filter-label` - Diagramatika Text 400 · 20px/1.15

**Observed:** A text label with a small corner-shaped glyph; the neighboring date sort label carries a simple down arrow. Controls align with the media grid rather than the explanatory aside.

**States:** Declared: hover opacity 0.55; focus-visible outline #2260c5 solid 2px; active opacity 0.4 and transform scale(0.99).

### Archive radio marker

**Only for:** archive filters

**Use:** Filtering long chronological lists.

**CSS:** `width: 14px; height: 14px; border: 1px solid #000000; border-radius: 50%; position: absolute`

**Observed:** Unfilled circles sit at the start of multi-line text labels with 20px left padding. Two narrow filter lists flank the central chronology.

**Transfer:** Keep markers small and labels descriptive; do not turn taxonomy into colored chips.

## Imagery and graphics

### Documentary editorial rectangles

**Use:** Default visual proof and opening selection.

**Observed:** Natural-light installations, public spaces, people in conversation, close-up gestures and film stills share an unrounded rectangular frame. Color and monochrome coexist without a unifying tint. Images dominate each entry, with compact black titles directly below.

**Transfer:** Photograph actual product use, working environments and tangible details. Minimum acceptable media is a well-composed original documentary photograph or a crisp product detail on a real backing, not a generic abstract gradient.

### Diagrammatic identity wiring

**Use:** Signature connective layer across the masthead and content.

**Observed:** Solid black rules connect widely spaced letters, with simple arrows and fine dashed paths bending toward headings or crossing whitespace. Some annotations read along a diagonal or vertical path; the right rail rotates navigation into a column.

**Transfer:** Carry this device into every new page using its own letters and short content labels, preserving the contrast between mathematical wiring and photographic content.

**Build:** Use an SVG overlay with a 2px solid black masthead rule. Knock out the rule behind each identity letter with white rectangles. Add black orthogonal branches with a 2px dashed stroke and open arrowheads; run routes through empty space, stopping just before text. For occasional editorial annotations, use a thin dashed diagonal with a short rotated label; keep it behind interactive content.

### Staged object portraits

**Only for:** object catalogues

**Use:** Repeated catalogue media.

**Observed:** Books are photographed upright, flat or in small stacks, sometimes front-on against grey or black studio backdrops, sometimes nestled in fabric, foliage, shelving or translucent materials. Cover colors supply bright accents; the surrounding page stays white. Landscape frames predominate with occasional square or portrait images.

**Transfer:** Stage a new product as a physical object with varied real materials and directional light. Keep it legible and tangible; use sharp images rather than applying blur as a stylistic filter.

### Dashed chronology

**Only for:** chronological archives

**Use:** Graphic substitute for image-led proof on archive pages.

**Observed:** A black dashed vertical spine joins staggered left and right text entries with horizontal dashed leaders. Dates sit above 35px titles. The line terminates at the final entry instead of continuing into the footer.

**Transfer:** Use for releases, milestones or an evolving body of work; let titles wrap and expand the spacing.

**Build:** Draw a centered SVG or CSS dashed vertical stroke and separate horizontal dashed leaders to alternating text blocks. Use black 2px strokes, white backing behind titles, and approximately 70px of open branch space on the right side. Fit the spine height to the final entry and leave clear white space before the utility band.

### Icons

**Observed:** Simple typographic arrows dominate: northeast arrows before metadata, an upward arrow in the masthead, a down arrow for sorting, a return arrow for submission and bracketed external-link arrows. Circles and a small cross are utilities rather than illustrative iconography.

**Transfer:** Use thin black open-line glyphs at roughly the adjacent 20px text scale. Keep arrows as directional punctuation, not inside colored discs.

## Section recipes

How recurring sections are built.

### First screen: Editorial selection opening

**Observed:** White canvas first, connected masthead above, then a three-column Editorial card selection beginning just below the 107px expanded header. Each 417px-wide entry has 20px metadata, a roughly 278px-tall photograph and a 34px title with compressed lines. A narrow right rail carries rotated section links; there is no separate centered hero claim or boxed primary action. Within the first 900px, the full first row and the beginning of the second row are visible. The cards leave broad white intervals beneath titles, traversed by occasional fine diagram annotations; remaining entries and the continuation action are below the fold.

**Transfer:** Open with three concrete facets of a different product: a product detail, an in-use scene and a related resource. If no elaborate media exists, create simple original documentary pictures with the same rectangular framing. Catalogue and archive variants instead begin with the 70px index-heading connected to the masthead, followed immediately by controls and entries.

**Avoid:** Do not replace the selection with an oversized promotional sentence, gradient hero or central pill action; do not hide all content below a full-height splash.

**Text style:** `entry-title` - Diagramatika Display 400 · 34px/0.9

### Open editorial rows

**Observed:** Editorial cards repeat in three equal columns with 20px gutters and 150px bottom intervals. Metadata is above media, title below; related series names become italic within the title. No section backgrounds separate the rows.

**Transfer:** Group proof by useful editorial selection, preserving comparable image widths while allowing title lengths and occasional image proportions to vary.

### Continuation and utility closure

**Observed:** The picture-led selection ends with Continuation action and 120px before Utility footer. Catalogue and timeline variants end their last entries, leave a substantial white interval and then reveal the same shallow utility band without a large closing headline. Newsletter form is the understated conversion element.

**Transfer:** Finish with the practical next step appropriate to the content, then provide contact and subscription utilities on the grey band.

### Connected index heading

**Only for:** catalogue and archive pages

**Observed:** A 70px/0.88 regular heading sits about 30px below the masthead with 30px beneath it. A dashed branch links it to the identity rule. Catalogue headings align to the media field; archive headings center on the timeline spine.

**Transfer:** Use a short descriptive noun to orient a collection, not a slogan.

**Text style:** `index-heading` - Diagramatika Display 400 · 70px/0.88

### Catalogue and explanatory aside

**Only for:** catalogue pages

**Observed:** An explanatory 20px/1.1 prose column and directory sits to the left of two equal media columns. Catalogue filter action and sorting controls occupy a shallow line above the media. Titles use the same 34px recipe as editorial cards, with author and item title flowing together.

**Transfer:** Explain a product range or resource library beside a visual catalogue; the aside may end earlier than the long media list.

### Alternating connected archive

**Only for:** chronological archives

**Observed:** Dashed chronology runs through a 940px central field. Entries alternate across the spine with 20px dates and 35px titles, while Archive radio marker lists occupy the outer sides. Titles, not thumbnails, carry the content.

**Transfer:** Organize releases or milestones into a text-first history; retain the side taxonomy only when it genuinely helps navigation.

**Text style:** `timeline-title` - Diagramatika Display 400 · 35px/0.88

## Page flow

**Storyline:** orientation through a connected identity → concrete editorial selection or indexed body of work → continued exploration → practical contact and subscription closure

### Image-led discovery landing page

1. **Orientation** - Connected masthead and narrow vertical navigation rail.
2. **Product proof** - Three-column documentary picture selection with arrow-led metadata and compact titles.
3. **Continued exploration** - Further spaced editorial rows and a centered bare-text load action.
4. **Practical closure** - Grey contacts and newsletter band.

**Transfer:** Use selected use cases or resources as the landing-page promise instead of relying on a conventional hero claim.

### Visual catalogue with editorial context

1. **Orientation** - Connected large title above the right-hand media field.
2. **Context and navigation** - Prose and directory aside beside text-only filters and sorting.
3. **Range proof** - Long two-column object catalogue with author/title captions.
4. **Practical closure** - Final object pair, white breathing room and grey utility footer.

**Transfer:** Apply to a product collection, library or portfolio with a context-rich left column.

### Chronological archive with taxonomy

1. **Orientation** - Centered large title joined to a dashed spine.
2. **Navigation** - Narrow filter lists flank the timeline.
3. **Accumulated proof** - Alternating dated titles connected by dashed leaders.
4. **Practical closure** - Spine ends at the last entry, followed by white space and the shared utility footer.

**Transfer:** Use for changelogs or institutional history without introducing pictures merely to fill the layout.

## Writing

Curatorial, matter-of-fact and intellectually confident. Names, categories and specific descriptions carry interest instead of advertising adjectives.

**Do not copy:** Do not reuse V-A-C or ГЭС-2 identity assets, artwork, institutional claims, event or book titles, author names, dates, contact details or source quotations as new product copy. The examples below show the pattern only; write new copy for the new product.

- **Addressing the reader:** Predominantly impersonal labels and named subjects; first-person plural appears in utility messages. Actions use direct infinitives rather than conversational sales language.
- **Rhythm:** Short noun labels alternate with longer descriptive titles and factual prose. Punctuation, subtitles and series names are allowed to create length; the interface does not force everything into uniform short slogans.

| Role | Pattern | Typical length | Examples of the pattern |
| --- | --- | --- | --- |
| Collection heading | A single concrete noun identifying the collection. | 1-2 words | “Издательство”<br>“Проекты” |
| Editorial entry | Subject or short title, followed by an explanatory subtitle or series name. | 2-12 words, longer when needed for specificity | “Александра Сухарева. Начала”<br>“Пределы жанра: литература как портрет, пейзаж и натюрморт” |
| Metadata | Category and date or date range, introduced visually by an arrow. | One compact line where possible | “Инсталляция”<br>“6 июн 2027” |
| Action | Literal interface operation rather than a benefit claim. | 1-3 words | “Загрузить еще”<br>“Фильтры”<br>“По дате” |

**Words and phrasing to use:** specific category nouns; descriptive subtitles; clear date ranges; direct utility verbs

**Avoid:** revolutionary; supercharge; unlock your potential; vague superlatives; sales urgency

**Rules:**

- Let individual titles have distinct lengths; use precise subtitles instead of generic benefit lines.
- Use dates, authors or categories as navigation information when relevant to the new product.
- Keep subscription and contact language literal and understated.

## Do's and Don'ts

### Do

- Keep display type at weight 400 with normal tracking and leading of 0.88-0.9.
- Use 20px gutters and 20px desktop side padding.
- Retain a connected letter-and-rule masthead with a 2px solid black line.
- Place 20px metadata above images with a 5px interval.
- Keep imagery square-cornered and captions outside the picture.
- Use 150px intervals between editorial rows rather than adding separators.
- Close with the shallow #f1f1f1 utility band and a typographic email form.

### Don't

- Do not make 34px entry titles bold or give them spacious 1.3 leading.
- Do not turn the bare 35px continuation action into a filled button.
- Do not color taxonomy chips or section backgrounds to match the photographs.
- Do not add soft card shadows, rounded media or raised panels to the white field.
- Do not replace the narrow navigation rail with an unrelated oversized menu panel in the desktop composition.
- Do not impose identical caption heights by truncating long editorial titles.
- Do not use the catalogue's object staging as a requirement for the text-only chronological variant.

## Motion and responsive

### Motion

**Observed:**

- Declared link transitions use color 0.25s and border-color 0.25s.
- The fixed masthead declares transform 200ms; the expanded opening header gives way to a compact identity strip.
- Text actions declare hover opacity 0.55 and active opacity 0.4; larger actions scale to 0.99, smaller contact links to 0.98.

**Transfer:**

- Keep interaction concentrated in small typographic responses and the compact masthead rather than animating every editorial image.

**Unknown:**

- The complete timing and path of diagram-line animation is not established.
- No scrolling or reveal easing is specified beyond the declared transitions.

### Responsive

**Observed:**

- Declared width breakpoints include 320px, 375px, 640px, 1023px, 1024px and 1440px; additional catalogue rules include 768px.
- Large index headings and masthead actions have viewport-dependent font formulas.

**Transfer:**

- On narrow screens, prioritize the reading order of metadata, picture and title; reduce the three-column selection to fewer columns.
- Re-route diagram branches around content and move the right rail into readable horizontal navigation when it cannot fit.
- For a chronological archive, a single spine beside stacked entries preserves the connective device better than squeezing two columns.

**Unknown:**

- Exact narrow-screen layouts and breakpoint-specific rail behavior are not established.

## How to use this guide

1. Start from the Essentials and the first-screen recipe; where the guide offers variants, use the default named for a new marketing page.
2. Plan the page before building: map your content onto the section recipes and page flow, then check the plan against the Do's and Don'ts.
3. Build with the tokens and component specs; recreate signature graphics with their build recipes instead of generic decoration, and use the named font substitutes if a font is unavailable.
4. Render the page at desktop and mobile widths, compare it with the Essentials and the Don'ts, and fix the differences before you finish.