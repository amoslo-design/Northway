# Website quality bar

A research-first guide for designing and building marketing websites that look crafted, not generated. Use it before you draw or code a visual layer, and again as a gate before anyone else sees the work.

## When to use

Use this skill whenever you are:

- Designing or building a marketing website, landing page, studio or consultancy site, product marketing site, or a sellable website template.
- Redesigning a page that already exists.
- Reviewing a coded preview that looks generic, templated, or "AI-made."
- Setting a design system for a site that does not yet have one.

Do not skip this skill because the content model, routes or framework are already decided. Those are not a visual direction. Do not treat a brief's section list as a layout. Do not start in components or in a default card grid and hope personality arrives later.

If a brand system, approved mockup or locked direction already exists, keep its tokens. Use this skill for research, craft, anti-template rules and the critique gate. Do not reopen locked colour, type or layout decisions unless the requester asks.

---

## Step 1. Research with real references before designing

Every major visual, layout, content or interaction decision must trace to research, the brief, or a rule in this skill. Do not design from vibe memory or from generic "modern SaaS" defaults.

### How to research

1. Write a five-line brief: what, who, platform, primary goal, tone, constraints.
2. Gather 3 to 5 real references before you set tokens or draw a section.
   - If Refero is connected: search styles first, from several angles (one broad aesthetic, one domain, one strong known product). Open 2 to 4 full styles. Use screens only when you need a concrete pattern (a work list, a quote, a pricing sheet, a footer). Use flows only for multi-step journeys.
   - If Refero is not connected: open live sites in the same category and adjacent craft (studios, advisory firms, editorial publishers, considered product brands). Capture full-page screenshots at desktop width. Note spacing, type scale, section rhythm and surface treatment, not just mood.
3. Study several strong references. Do not copy one site. Do not average several strong sites into a safe middle (cream canvas, muted accent, polite serif, three feature cards).
4. Choose one primary direction. Borrow at most one or two specific traits from each secondary reference, rebuilt with this product's content and tokens.
5. Write a reference lock, then build against it.

```text
Primary reference/direction: [one dominant source]
Preserve: [3-5 traits: canvas, type feel, accent use, layout, density]
Borrow only: [1-2 specific secondary details]
Reject: [what would collapse the direction, including what not to copy]
Token commitments: [canvas, ink, muted, elevated, band or accent, radius, shadow rule, type roles]
```

### Do / don't

- Do name the references, the concrete trait you will take, and the thing you will not copy (palette, typeface, wordmark, photography, signature graphic, copy).
- Do keep source token roles: a colour used only for a CTA stays a CTA colour, or you omit it.
- Don't clone a site's palette, typefaces, signature graphic and hero composition together.
- Don't search only the words "modern" or "minimalist."
- Don't invent references you did not actually open.

---

## Step 2. Set a design system up front

Lock tokens before you build sections. A site without a system will invent a new card, a new heading style and a new button in every chapter, which is how template rhythm appears. Write the system down (a short tokens file or a page in the brief) and generate the theme from it.

Use the requester's brand if it exists. Otherwise start from the defaults below and tighten them to the product. Defaults are a starting craft, not a look.

### Type scale

Pick a ratio and stick to it. A major third (1.25) or a perfect fourth (1.333) is enough. Do not invent one-off sizes.

Suggested scale at a 16px root (1.25):

| Role | Size | Line height | Weight | Tracking | Measure |
| --- | --- | --- | --- | --- | --- |
| Display / hero | 56-72px | 0.95-1.1 | 400-600 | -0.02em to -0.045em | 8-16 words, often narrower than the viewport |
| Section heading | 32-40px | 1.05-1.15 | 400-600 | -0.01em to -0.03em | Up to about 20 words |
| Subheading | 22-28px | 1.15-1.25 | 400-500 | 0 to -0.015em | Short names, card titles |
| Lead / lede | 18-20px | 1.4-1.5 | 400-500 | 0 | About 40-60 characters |
| Body | 16-18px | 1.5-1.65 | 400 | 0 to 0.01em | 60-72 characters, about 32-40rem |
| Caption / meta | 13-14px | 1.4-1.5 | 400-500 | 0 to 0.02em | Muted; sentence case |
| Eyebrow / label | 11-13px | 1.2-1.4 | 500-600 | 0.06em-0.12em if uppercase | Once per page at most |
| Button label | 13-16px | 1 | 500 | 0 to 0.04em | 2-4 words |

- One display family and one body family is enough. They may be the same grotesk at two roles. Do not add a costume serif, a script, or a third "accent" face unless the locked brand requires it.
- Display is present through size, weight and tracking, not through 800-weight type and not through a giant initial or monogram.
- Regular or medium weight at large sizes often looks more expensive than bold. If the reference is regular 400 at 64px, keep it.
- Use `text-wrap: balance` on headings; `text-wrap: pretty` on long prose. Check orphans at each breakpoint.

### Spacing scale

Use a 4px or 8px base and a named ladder. Do not space "by eye" with 13, 17 and 22 in the same view.

Suggested ladder: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.

| Token | Typical use |
| --- | --- |
| 4-8 | Icon gaps, hairline inset, tight stacks |
| 12-16 | Caption below an image, label to field, inline gaps |
| 24-32 | Paragraphs, heading to lede, card padding |
| 48-64 | Between blocks inside a section |
| 80-128 | Section vertical padding on desktop (64-80 on tablet, 48-64 on mobile) |
| 136-160 | Isolated closing thoughts, or a deliberate pause |

Pick one desktop page gutter and keep it (24-40px is a solid range; some editorial sites go tighter, around 20-28px, on a nearly full-width canvas). Do not constrain every section to the same 1200px centred box if the direction is edge-led. Do not go full-bleed on every chapter either.

### Colour roles

Name roles, not a pile of hex values.

| Role | Job |
| --- | --- |
| Canvas | The page ground. Often white or a very light near-white. One canvas; do not alternate full-width grey slabs behind every chapter. |
| Ink | Primary text. Near-black, not pure mid-grey. |
| Muted | Secondary text, captions, supporting lines. Must still meet contrast (see Step 8). |
| Elevated | Raised surfaces: cards that need a panel, forms, a featured quote, an emphasised stage. A visible fill, not a shadow. |
| Band | At most one deep colour used as a full-width chapter (hero, closing invitation, or both). Not a second theme sprinkled everywhere. |
| Accent / CTA | The action colour. Concentrated: buttons and rare emphasis, not every icon and every rule. |
| Hairline | Optional 1px decorative line. Quieter than muted text. Not a 3:1 "chrome" border on everything. |
| Inverse | Text and actions that sit on the band. |

Commit to a small set (typically 5-8 used colours). If you need a new colour mid-build, you are drifting.

### Surfaces and elevation

- Elevation is a fill change (canvas to elevated) or a 1px hairline, not a drop shadow.
- Default shadow is none. If a reference uses a shadow, it is for a specific object (a persistent launcher, staged media), not for every card.
- Do not wrap every block in a rounded panel. Quiet lists, FAQs, captions and body copy often sit directly on the canvas.
- Hover may deepen a fill or a hairline. It must not "lift" a shadow.

### Radius

- Controls: 2-4px (rectangular instruments) unless the locked brand is intentionally soft.
- Panels: 8-12px maximum, and only on surfaces that are truly panels.
- Media: often 0, or the same as panels, consistently. Do not round photographs if the system is square.
- Pills (999px): at most the one primary action, and only if the brand asks for it. No outline pills, no pill tags, no pill chips, no pill nav items.

### Grid

- A 12-column grid with a consistent gutter (16-32px) is enough.
- Content max-width is often 1200-1440px, with some chapters allowed to the viewport edges (bands, featured media).
- Useful layouts to pre-define: a 2-column split (one-third / two-thirds or half / half), a featured-plus-list, a full-width band, a narrow reading measure (about 32-40rem), a form measure (about 32-36rem).
- Not every section uses the same layout (see Step 3).

### Motion tokens

Lock a short set and reuse it:

- Duration: 150-200ms for colour, fill and opacity; 200-250ms for small movement; 0 for large entrance choreography unless a motion brief says otherwise.
- Easing: a standard decelerate curve for opens; ease or linear for colour.
- Movement: 4-8px, not 40px flies and fades.
- Respect `prefers-reduced-motion: reduce`: no parallax, no auto-playing decorative motion, instant or faded state changes only.

---

## Step 3. Layout rules

Layout is where generated sites give themselves away. The tokens can be right and the page still look like a template if every chapter has the same head, the same grid and the same card.

### Section rhythm

- Map the page as a sequence of different shapes before you code: for example, a band, an editorial feature, a split, a quiet list, a single sheet, a path, a closing band.
- No two consecutive sections may share both a heading pattern and a layout. If one chapter is "heading left, link right, three columns," the next cannot be that again.
- At least two sections on a long Home or landing page should not be grids. A split, a single featured piece, a continuous band, a narrow reading column or a named path all count.
- A heading-left / link-right section head may be used at most once on a page. Other chapters: a heading, an optional one-line dek under it, left-weighted. "See all" belongs at the end of the content, as a text link, not as a mirror of the title.
- Uppercase eyebrows are not a site-wide system. If you use one, use it once (typically the hero attribution). Elsewhere, meta is a sentence-case caption.
- Vary vertical padding slightly when the content needs a pause; do not make every section the same 96px sandwich.

### When grids are fine

Grids are a tool, not a default.

- Fine: a catalogue or index of many comparable items; a blog list; a team directory; a genuine multi-plan comparison; a gallery of images that are meant to be browsed as equals.
- Not fine: features, process, testimonials, cases, pricing and "why us" all rendered as three or four identical cards with an icon, a title and a paragraph. If the items are not equals, the layout must say so (one featured, the rest quieter; one stage larger; one quote, not a carousel of six).

### Whitespace and hierarchy

- Leave real empty field. A half-width text block beside open canvas is a decision, not unused space to fill with a second card.
- One primary visual idea per viewport: a result, a featured case, a price sheet, a closing ask. Supporting material is smaller and later.
- Group by proximity: a heading sits closer to its content than to the previous section.
- Do not use a decorative hairline under every heading or between every row. Space can separate. If you use a rule, use it as a structure (a ledger, a process spine, a top edge on unboxed columns), not as a stamp.

### Line length and alignment

- Body measure: 60-72 characters (roughly 32-40rem at 16-18px). Longer lines are tiring; shorter lines make a ragged, advert-like column.
- Headings can be narrower than the body. A display line of 8-14 words is usually enough.
- Left-align most text. Centre only a short closing thought or a formal statement that is designed as a pause. Do not centre entire sections, forms, or card grids "for balance."

### Image direction

- If the direction is image-led, use real photographs, real stills or intentional art-directed placeholders (stable aspect ratio, caption, short art-direction note). Do not fake photography with gradients, blobs or letter monograms.
- If the direction must work without photographs (a text-first consultancy, a template's empty state), design a complete no-image treatment: a named quote, a specific result, a quiet text entry. Hide empty blocks; never show an empty frame.
- Captions stay captions (13-14px, muted). They do not compete with display type.
- Media is consistently cornered (usually square or the panel radius), with captions outside the picture.

### Anti-template checks (run after every section)

- Would this section still make sense if I removed the icons, badges and rules? If not, the writing is too thin.
- Does this section look like the one above it when I squint? If yes, change the layout or the head.
- Is there a number, a monogram, a chip row or a second primary I added "for clarity"? Remove it and write a better line.

---

## Step 4. Typography rules

- Sentence case for almost all headings. A full stop is allowed when the heading is a statement. All caps are for rare labels, not for titles.
- Do not manufacture hierarchy with bold, italic or a colour swap on a single word in a headline unless the locked direction explicitly uses that device. Decorative "serif the middle word" is a common generated tell.
- One display style per page role. Do not mix a tight grotesk hero, a wide serif section title and a mono eyebrow for "interest."
- Body is 16-18px, never 14px for reading paragraphs. Line height 1.5-1.65. Paragraph spacing is about 0.75-1em, not a full heading gap.
- Links in prose are underlined (or clearly underlined on hover and always underlined for the default if colour alone is the cue). "See all" and secondary actions look like text, not like ghost buttons.
- Tabular or aligned figures are for genuine comparison (prices, specs). Do not set every number at display size.
- Check wrapping at 1440, 1024, 768 and 390 widths. A widow on a display line is a bug.

### Do / don't

- Do let a regular-weight 56-72px headline carry the first viewport.
- Do keep captions and meta smaller and quieter than body.
- Don't use 800-weight display, ultra-tight tracking on body, or a different face for every heading level.
- Don't pair a free "elegant serif" with a geometric sans to signal luxury. If a serif is in the brand, use it with intent and with a real cut; do not costume a grotesk site.

---

## Step 5. Colour and surface rules

- The page is one canvas. A deep band is a chapter, not a dark website.
- Put the accent where the ask is (a primary button, a single invitation band). Do not tint every heading, icon, rule and chip.
- Elevated surfaces must be visibly different from the canvas (if two near-whites are indistinguishable, raise the contrast of the fill). They still have to pass text contrast.
- Inverse type on a band (cream or white on a deep colour) must pass contrast too. Muted inverse is easy to get wrong.
- Do not invert the system mid-page without a reason: a page of grey canvas with white floating cards reads as a SaaS marketing kit. Prefer a light canvas and grey (or otherwise filled) panels, or a clearly declared band.
- Hairlines are optional and rare. If everything has a 1px border, nothing does.
- Do not use colour as the only way to mark "recommended" or "typical." Pair it with a word or a rule.

### Do / don't

- Do concentrate a deep colour into one or two bands and keep reading chapters calm.
- Do use fill, not shadow, for elevation.
- Don't add a purple-to-blue gradient, a mesh background, a glassmorphism panel, or a glow behind the hero "to add depth."
- Don't introduce a second accent because a section felt plain. Plain is often correct. Write a better sentence or give the section a different shape.

---

## Step 6. Copy rules

Visual craft cannot save vague writing, and thin writing is why people reach for numbers, badges and icons.

- Short and specific. A display line names a result, a person, a product or a concrete promise. If any studio in the category could say the same sentence, rewrite it.
- One idea per sentence. One primary ask per viewport, labelled with a real verb and object ("Start a project," "Send the brief," "See all case studies"), always going where the label says.
- Proof sits next to asks: a named quote, a from-price, a time window, a condition. Do not invent percentages.
- Voice is consistent. If the organisation speaks as "we," keep it. International English. Clear beats clever.
- No em dashes. Use a full stop, a comma, a colon, or a shorter sentence.
- No filler and no buzzwords. Banned unless they are a literal product name: unlock, elevate, leverage, empower, seamless, cutting-edge, game-changing, revolutionary, "in today's market," "next level," "your journey," "holistic," "synergy," "unlock your potential."
- No fake specificity: "trusted by 10,000 teams" without a source; "99.9% satisfaction"; logo strips of companies that are not customers.
- Meta and captions are sentence case: "Health, 2025," not "HEALTH · 2025."
- Each quote or flagship result appears once per page. Write a companion line if you need a second thought.
- Demo or placeholder content must be fully written and believable. No "Sample" badges, no "Lorem ipsum," no empty cards, no "Your headline here." If a block has no content, omit it. Honesty, if needed, is one quiet disclosure, not a stamp on every item.

### Do / don't

- Do: "They left with a plan their team could use in the first week."
- Don't: "We elevate brands to unlock growth in today's market."
- Do: one primary, repeated with the same label.
- Don't: "Learn more," "Get started," "Submit" and "Contact us" all as competing filled buttons on one page.

---

## Step 7. Motion and interaction

- Motion supports reading. It does not introduce the brand.
- State changes (hover, focus, expand) are 150-250ms, opacity or fill, maybe a 4-8px shift. No bounce, no elastic overshoot, no looping decorative animation.
- Scroll: if you reveal, do it once, quietly, and keep a complete static layout for reduced motion. No staggered fade-up on every card (that is a common generated tell).
- Do not auto-play video with sound. Decorative video needs a still fallback.
- Sticky nav is allowed if it stays quiet and does not fight a first-viewport primary (if a hero already has the primary button, the nav's twin is visually secondary until the hero button leaves the view).
- Focus states are visible (a 2px solid outline in a declared focus colour, not only a colour change). Interactive targets are at least 24px, ideally 44px, with adequate spacing.
- Hover is for fine pointers only. Never make information appear only on hover.

---

## Step 8. Accessibility and performance basics

These belong in the design, not in a late pass.

- Text contrast: body and headings at least 4.5:1 against their actual surface (canvas, elevated, and band). Large bold text may use 3:1. Muted text is not exempt.
- UI contrast: borders and input edges that indicate a control should meet 3:1 against the surface.
- Keyboard: every action is reachable and usable. Focus order follows reading order. Disclosure rows (FAQ) work with keys and announce state.
- Images: meaningful `alt`. Decorative images are empty alt. Do not put essential text only in a picture.
- Forms: visible labels (not only placeholders), associated error text, a real reply-time or expectation sentence, a submit label that names the act. Do not use colour alone for errors.
- Reduced motion: honour the preference.
- Landmarks: one `h1` per page, heading levels in order, `main`, `nav`, `footer`.
- Language: set `lang`. Use real characters, not images of words, for headlines.
- Performance: one or two font families, a tight set of weights (two or three), `font-display: swap` or equivalent. Hero images sized and compressed for their display box; no 3MB hero. Avoid heavy client libraries for a marketing page. Lazy-load below-the-fold media. Prefer CSS for simple texture (a fine grain) over video loops.
- Responsive: design 390, 768, 1024 and 1440 (and the actual max). Stack splits early. Do not hide primary asks on small screens. Do not shrink body below 16px to make a desktop ledger fit; restack it.

---

## Step 9. AI-generated tells to ban

If a preview trips two or more of these, it is not ready. Fix them before anyone else sees the page. Several of these also appear when a brief "helps" by asking for indexes, chips or a card for every section. If a rule in a brief invites a tell, the tell still loses.

1. **Numbered sections and steps.** `01`, `02`, `1 2 3 4`, circled indexes, "Step 1," large display numerals beside a name. Use names and writing. A process may have a single spine and uneven widths; it may not have numerals.
2. **Three identical feature cards** with an icon, a short title and a paragraph, repeated for features, benefits, services and process. If there are three points, they need a reason to be a grid, and they need distinct writing and weight.
3. **Uniform card grids in every section.** The same rounded rectangle, the same shadow or the same hairline, over and over. Vary layout. Sit quiet content on the canvas.
4. **Gradient blobs, meshes, and aurora backgrounds** behind a hero or a section. No decorative purple-to-blue (or teal-to-violet) gradients.
5. **Glassmorphism by default.** Translucent blur belongs only to a specific overlay that a reference actually uses, never to ordinary cards.
6. **Emoji as icons**, or a row of colourful icon discs on every heading. If you use icons, use one consistent, quiet set, and only where a symbol is clearer than a word.
7. **Centred everything.** A centred formal statement can work once. A page of centred heads, centred cards and a centred form does not.
8. **Generic stock headings:** "Elevate your brand," "Unlock your potential," "Welcome to the future," "We are passionate about," "Solutions that scale," "Design that matters," "Reimagine the way you work."
9. **A fake logos strip** of well-known companies, awards, or "as seen in" marks that are not real for this product. A genuine, named proof is better than eight grey marks.
10. **Excessive badges, pills and chips.** Outline chips, tag clouds, "New" / "AI" / "Sample" badges, pill filters used as decoration. One primary pill is enough, if the brand uses pills at all.
11. **A giant monogram or letter** standing in for a photograph or a logo-maker "K" (or any initial) in a card. Use a quote, a result, or a real image.
12. **The same section anatomy five times:** waymark or eyebrow, heading on the left, link on the right, grid below, hairline. Once is a pattern. Five times is a kit.
13. **A floating card on a grey canvas with a soft shadow,** repeated. Prefer a clear canvas and a filled elevated surface, or no panel at all.
14. **Staggered fade-in on scroll** for every block, orbiting shapes, looping Lottie decoration, cursor-follower blobs.
15. **A black CTA slab on a black footer,** or a leftover primary jammed into the legal area. The closing invitation is a designed chapter; the legal line is quiet.
16. **Repeated flagship copy.** The same result or quote in the hero, the featured card and the first list row. Write a companion line, or show the next fact.
17. **Empty or "Lorem" states** shipped as design: placeholder portraits, grey image boxes, "Your title here," "Sample project."
18. **Uppercase tracked meta on every item** (`HEALTH · 2025`). One attribution is enough.
19. **A serif costume** dropped onto a grotesk site for one "premium" word, or a heavy display face at 800 to "add personality."
20. **Centered hero with two primary buttons,** a slogan, a product-laptop mockup and a wavy gradient, in any combination.

---

## Step 10. Self-critique gate

Do not present a build, a mockup or a "quick preview" until this gate passes. If a design reviewer is available (a designer, a UX lead, or a named critique pass in the team), they review screenshots before the requester does.

### Capture

- Full-page screenshots at **desktop** (1440px wide, and the actual max if larger) and **mobile** (390px wide). The full page, not a hero crop. Include hover and open-disclosure states for key controls if you can.
- Compare them to the reference lock and to this skill, not only to the brief's section list.

### Score

Mark each item yes, no, or not applicable. A "no" on any item marked **block** means you fix it before handoff. Two or more ordinary "no"s also means you fix first.

**Blockers**

- [ ] The page does not trip two or more tells from Step 9. **(block)**
- [ ] No numbering of sections, steps, cases or lists. **(block)**
- [ ] No two consecutive sections share a head and a layout. **(block)**
- [ ] At least two long-page sections are not grids. **(block)**
- [ ] At most one primary action per viewport; the same label and destination throughout. **(block)**
- [ ] Contrast and focus states pass on canvas, elevated and band surfaces. **(block)**
- [ ] Copy is specific, has no em dashes, and has no banned buzzwords. **(block)**
- [ ] Empty blocks are omitted; there are no monograms, fake logos, or lorem. **(block)**

**Craft**

- [ ] Tokens match the locked system (type scale, spacing ladder, colour roles, radius, no default shadow).
- [ ] Display type is the agreed weight and size; body stays in measure.
- [ ] Elevation is fill (or a rare hairline), and not every block is a panel.
- [ ] A deep accent, if any, is concentrated in a band or in actions, not sprinkled.
- [ ] Quotes and flagship results appear once.
- [ ] "See all" and secondary paths sit at the end of their content, as text.
- [ ] Images (or the no-image treatment) follow the media plan.
- [ ] Motion is quiet and respects reduced motion.
- [ ] Mobile restacks without shrinking body or hiding the ask.
- [ ] The implementation matches the reference lock; distinctive traits were not softened into safer defaults.

### Fix, then show

1. Fix every blocker, then the craft misses, in the build (not in a slide of excuses).
2. Recapture screenshots.
3. If a design reviewer is available, send the new full-page shots and the reference lock. Wait for a pass or a punched list. Do not "fix forward" past a rejected tell.
4. Only then show the requester. Say what references you used, what you took, and what you refused to copy.

If you cannot pass the gate, say so and show the annotated screenshots with the remaining issues. Do not hope the requester will not notice a numbered process or a page of identical cards.
