# Northway template - reference board

A feel board for Skala's first sellable studio template, **Northway**, which is also the demo studio, labelled Sample. Light theme only. It is meant to scope the look and motion before branding tokens and the build are locked. Compiled 12 November 2026, Europe/Stockholm.

> This is the style guide the design system was re-derived from. Do not copy these sites. Take the named behaviours, restyle them with the Northway tokens, and leave everything else. Screenshots are compressed JPEGs of the original captures, stored in `references/shots/`. Live source URLs are listed under each reference.
>
> Northway is a strategy and growth consultancy demo. The board itself was compiled as a visual style guide (calm, typographic, work-first, craft) and still applies. The locked site IA is in [docs/spec.md](../docs/spec.md) and [docs/plan.md](../docs/plan.md), including text-first case studies and a result-or-quote hero.

**Feel, in four words: calm typographic work-first craft.**

This board follows the [build-ready site spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51): calm, work-first, restrained motion. No mesh gradients, neon, generic AI look, or fake proof. No eyebrows above section headings.

Screenshots are viewport captures at 1280×800, taken the same day, saved next to this file. They are evidence, not mock-ups.

---

## How this was compiled

- 12 references: six real boutique studios or agencies, three Framer Marketplace templates, three Webflow templates.
- Every URL below was checked with `curl -sIL` on 12 November 2026 and returned **HTTP 200**. Official preview domains were taken from each marketplace listing, not guessed. A 404 was dropped (for example `korda.framer.website`, `stada.webflow.io`, `alture.webflow.io`). A 000 / connection failure was dropped (for example `koto.studio`, `collins.work`).
- Screenshots were taken with headless Chrome at 1280×800 (device scale 2). Cookie banners were dismissed or hidden where they covered the page. If a capture was blank or misleading, it is noted.
- A few live sites were reviewed and **set aside** because they fight the brief. They are listed at the end, so the feel is scoped by contrast as well as by example.

Do not copy any of these sites. Take the specific behaviours named, restyle them with the template's tokens, and leave everything else.

---

## Feel summary

**Calm typographic work-first craft.**

The first screen should do three things, in this order: name the promise in a short typographic line, show real work, and offer one clear next step. Colour stays quiet. Motion stays small. Proof is the work, never a invented metric or a logo wall.

### Do

1. Lead with a short typographic promise, then real work in the same first scroll - a featured case, a full-bleed photograph, or a tight work grid. Gretel, Andersen, Halston and Pentagram all do this.
2. Set headlines large, slightly tight, and mostly regular or medium weight (around 48–64px at 1280, tracking about −0.01em to −0.04em). Do not rely on ultra-bold display for authority.
3. Sit the site on a light canvas: white, or a warm or cool grey such as Halston's measured `#DBDBD8` or Stada's `#F2F2F6`. Pure black type, or near-black (`#1A1A1A` on Pentagram and AREA 17).
4. Keep section rhythm generous and even. Andersen's inner pages use **96px** vertical padding on almost every section, and **192px** at the top of the home hero. Our tokens (96px, then 128px from 1024) sit slightly more open on desktop, which matches AREA 17 and Gretel.
5. Use one primary CTA in view. Clay's filled Contact pill, Last Studio's nav CTA, Andersen's single "See our work", and Halston's outlined Consultation are the pattern - not two equal buttons.
6. Treat photography as proof, not decoration. Full-bleed or near-bleed case images, 3:2 (or similar) work cards, captions or a one-line result, and a scrim or solid panel whenever type sits on a photo.
7. Keep navigation quiet and sticky, with Work first, and a solid surface. Last Studio's IA (Work / Services / Insights / About + Start a project) is the closest match to our spec.
8. Honour `prefers-reduced-motion` with a final pose in the first HTML. Allowed motion is a colour change at 120ms, a hover move of at most 8px, one section reveal, and an accordion open.

### Don't

1. Do not use mesh gradients, neon, glow pulses, particle fields, or blurred colour orbs as a hero device (Conversion, Neiden, and Clay's decorative 3D lighting all drift this way).
2. Do not autoplay video, use parallax, custom cursors, mouse trails, or bounce. Koto's dark showreel home and Alture-style cursor trails are out of scope.
3. Do not invent testimonials, review scores, client logo rows, "115+ happy clients", scarcity ("3 left"), or award walls in the demo. If a buyer has none, omit the block.
4. Do not put eyebrow labels above section headings. "New Work:", "DESIGN AGENCY", "RECOGNITION", or Japanese decorative labels are useful reminders of what to cut.
5. Do not default the template to a cinematic dark home. Dark inverse bands are section-level only, as in the spec.
6. Do not pack the home like a mosaic or a moodboard (Base Design). Work should be editable, few, and large.
7. Do not decorate type with script overlays, gradient fills, scribbles, or playful underlines as a default (Neiden, Spector, Last Studio's yellow marks).
8. Do not let every control become a pill, and do not make the wordmark fill the viewport. The logo is a slot; the H1 states the outcome, in about eight words or fewer.

---

## The 12 references

### 1. Pentagram

- **Link:** [pentagram.com](https://www.pentagram.com/) - live, HTTP 200
- **Category:** Boutique design consultancy (real studio site)
- **Screenshot:** [shots/pentagram.jpg](references/shots/pentagram.jpg)
- **Maps to:** Home, Work, case study

**Take**

- Work is the home. A full-bleed project photograph fills the viewport under a quiet 60px bar: wordmark on the left, Work / About / News / Contact on the right.
- Captions sit on the image as a short title plus one sentence ("The Obama Presidential Center…"), not as a card chrome. At 1280 the hero images measured about **1280×549 (2.33:1)**.
- Type is a custom grotesk ("Plain") in near-black `#1A1A1A` on white. Body was measured at **19px / 25px**, weight 500. The wordmark is typographic, not a pictorial logo.
- An inverse black band can follow the work ("The Secret Life of Things") - useful for our footer and CTA-band thinking, as a section, not a theme.

**Avoid**

- The mid-hero discipline dropdown ("We design Signage & Environmental Graphics for Civic & Public") is clever for a large consultancy and noisy for a boutique template. Do not add a floating filter over the home hero.
- Do not set body text on a photograph without a strong scrim or a solid panel. Our contrast rules are stricter than a white caption on a light sky.
- Pentagram can carry many carousel dots and an Archive. The demo (Northway) ships four sample projects and should not look like a 50-year archive.

---

### 2. AREA 17

- **Link:** [area17.com](https://area17.com/) - live, HTTP 200
- **Category:** Brand, experience and technology studio (real studio site)
- **Screenshot:** [shots/area17.jpg](references/shots/area17.jpg)
- **Maps to:** Home, Studio (About), Work

**Take**

- A light, almost empty first screen: a tight lettermark ("A/"), a 64px sticky nav, and a large typographic promise before any image.
- Then a single wide photograph, slightly inset, that supports the line rather than competing with it. Whitespace is the structure.
- The tone is confident and plain. No eyebrows, no metrics, no logo row.

**Avoid**

- The visible home line is a long manifesto paragraph used as a heading. Our H1 is at most about eight words ("Work that earns the next project."). Take the scale and the quiet, not the sentence length.
- The image has a soft corner radius. Keep radius in tokens; do not make "rounded media" a style by itself.
- Do not leave the first viewport with no path into work. AREA 17 can afford a slow opening; a template buyer needs "See work" or a featured case in the same scroll (see Gretel and Andersen).

---

### 3. Gretel

- **Link:** [gretelny.com](https://gretelny.com/) - live, HTTP 200
- **Category:** Boutique brand studio (real studio site)
- **Screenshot:** [shots/gretel.jpg](references/shots/gretel.jpg)
- **Maps to:** Home, Work, case study, Studio

**Take**

- The closest structural model for the template's home. A short typographic statement, then work immediately: a large case title on the left and a photograph on the right ("Philadelphia Museum of Art").
- Nav is minimal and work-first: Work, Contact, Company. Light canvas, Akkurat, body measured at **16px / 27.2px** (about 1.7), close to our 16 / 1.6.
- Colour is almost only black on white. The photograph does the work of personality.

**Avoid**

- The small "New Work:" label is an eyebrow. Our selected-work section is titled "Selected work", once, as a heading - not a label above every case title.
- The home statement is still long for our H1 rule. Keep the rhythm (statement, then a case), shorten the line.
- Do not hide the primary enquire CTA from the first screen; Gretel puts Contact in the nav only.

---

### 4. Clay

- **Link:** [clay.global](https://clay.global/) - live, HTTP 200 (www redirects here)
- **Category:** Branding and UX agency (real studio site)
- **Screenshot:** [shots/clay.jpg](references/shots/clay.jpg)
- **Maps to:** Home, Work, Services, Studio, Insights, Contact

**Take**

- A complete studio IA with Work first, and one filled primary in the bar ("Contact"). This is the chrome pattern our 68px nav is aiming at.
- Headline measured **64px / 70.4px**, weight 740, tracking **−2.56px** (about −0.04em) on a light grey canvas. The type is clear, slightly tight, and not ultra-bold in feeling despite the weight.
- Body was measured at 18px. Plenty of left-aligned measure, then a visual on the right.

**Avoid**

- The floating 3D orb and soft coloured lights are the kind of generic "designed" object that reads AI-adjacent. Do not ship decorative 3D, orbs, or glow as default art.
- Do not copy Clay's custom type (Universal Sans). Pair a free grotesk with similar scale and tracking.
- A 110px-tall bar is taller than our locked 68px nav. Keep the one-CTA idea, not the oversized bar.

---

### 5. Instrument

- **Link:** [instrument.com](https://www.instrument.com/) - live, HTTP 200
- **Category:** Technology-led brand, product and marketing agency (real studio site)
- **Screenshot:** [shots/instrument.jpg](references/shots/instrument.jpg)
- **Maps to:** Home, Work, case study, Services, Studio

**Take**

- Work is the hero visual: a large, well-art-directed photograph (and a playable case film, started by the user). The site feels like a studio immediately.
- Nav is compact, work-first, and uses small quiet chips rather than a heavy bar. A short announcement can live in the bar if it is real and dismissible - it is not required for the template.

**Avoid**

- The wordmark "INSTRUMENT" fills the width in a heavy compressed cut. Our logo is a slot, and the H1 is a promise, not a billboard of the studio name.
- Do not autoplay the case film. A play control is fine; autoplay is forbidden in the spec.
- Pill-shaped nav items on every link will fight our "one pill" (or one primary) rule. Use the underline current state from the spec.

---

### 6. Order

- **Link:** [order.design](https://order.design/) - live, HTTP 200 (`www.order.design` redirects here)
- **Category:** Identity and typography studio (real studio site)
- **Screenshot:** [shots/order.jpg](references/shots/order.jpg)
- **Maps to:** Home, Work, case study

**Take**

- The case *is* the home. A current project (Salt Lick on Salt Creek) opens as a typographic system: small-caps discipline tabs (Identity, Packaging, Website) and crafted work frames, not a generic card grid.
- Type discipline is the craft: small caps, careful labels, the work shown at a scale you can actually read. This is what a strong case-study body should feel like.

**Avoid**

- The chrome is a dark, near-black frame. The template is light-only; inverse is a band, not the default canvas.
- A dense multi-column packaging grid is right for this one case and too busy as a default home or work index. Our work grid is 1 / 2 / 3 columns with a 24px gap.
- Do not add a row of extra studio links (otf, change) that only make sense for this practice.

---

### 7. Walker (Framer)

- **Listing:** [Framer Marketplace - Walker](https://www.framer.com/marketplace/templates/walker/) - live, HTTP 200
- **Official preview:** [walkerr.framer.website](https://walkerr.framer.website/) - live, HTTP 200 (the listing uses two r's; `walker.framer.website` was not used)
- **Category:** Framer Marketplace template - designer / studio portfolio (free, by Hvade)
- **Screenshot:** [shots/walker.jpg](references/shots/walker.jpg)
- **Maps to:** Home, Work, case study, Contact

**Take**

- A light typographic opening and work immediately underneath. The lede was measured at **Zalando Sans, 48px / 51.6px, weight 400, tracking −1.92px** (about −0.04em): "Shaping meaningful brands through thoughtful design and digital experiences."
- Nav is reduced to a wordmark and a Menu control (desktop still feels calm at 1280). Bar height was measured at 72px, close to our 68px.
- This is the cleanest Framer example of "type, then work, no theatre."

**Avoid**

- The oversized "WALKER" wordmark dominates the viewport. In the template the H1 is the promise, and the logo stays in the bar.
- Promo toasts and "Made in Framer" badges are marketplace chrome. They are not part of the kit UI.
- Do not let a hamburger replace desktop nav from 1024 up. Our spec locks a full desktop nav at that breakpoint.

---

### 8. Korda (Framer)

- **Listing:** [Framer Marketplace - Korda](https://www.framer.com/marketplace/templates/korda/) - live, HTTP 200, Lunis Design, $99
- **Official preview:** [korda.framer.media](https://korda.framer.media/) - live, HTTP 200 (`korda.framer.website` returned 404 and was dropped)
- **Category:** Framer Marketplace template - interior / photography / studio portfolio
- **Screenshot:** [shots/korda.jpg](references/shots/korda.jpg)
- **Maps to:** Home, Work, case study, Services / pricing, Studio, Insights, Contact

**Take**

- Monochrome, sharp type, and photography first. The hero is a single full-bleed interior with a large wordmark, a short lede, and one text link ("View projects").
- Services on the same site publish a **from-price** ("From $8,000") - the closest marketplace example of our priced packages, including a plain written offer.
- CMS work, articles, about, and contact are all present. The writing voice is calm and specific ("spaces that feel personal, look timeless…").

**Avoid**

- The demo is a dark cinematic photograph with white type. That is a valid inverse or case-hero treatment, not the template's default home. If type sits on a photo, use the strong scrim or a solid panel; do not assume contrast from a moody image.
- "Based in New York // Since 2008" is meta decoration. We do not invent offices, years, or headcount, and we do not use eyebrows.
- The compact "Menu +" and floating "Made in Framer" chip are not our chrome. Desktop nav from 1024 is a full link row plus one CTA.
- Do not default to interior-design photography. Sample images must be labelled Sample and swapped; the *crop and quiet* are what we take.

---

### 9. Last Studio (Framer)

- **Listing:** [Framer Marketplace - Last Studio](https://www.framer.com/marketplace/templates/last-studio/) - live, HTTP 200, Bryn Taylor, $149
- **Official preview:** [last-studio.framer.website](https://last-studio.framer.website/) - live, HTTP 200
- **Category:** Framer Marketplace template - design agency (Agent Template)
- **Screenshot:** [shots/last-studio.jpg](references/shots/last-studio.jpg)
- **Maps to:** Home, Work, Services, Insights, Studio, Contact (IA match)

**Take**

- The closest **information architecture** to our spec: Work, Services, Insights, About, and a primary "Start a project" in the bar. That mapping should be familiar to Codex and to buyers.
- Light canvas, a typographic hero, then a large work image. A serif display face is a valid option for the studio wordmark or H1 (this preview uses **Hedvig Letters Serif**, which is available on Google Fonts, measured around 201px on the wordmark - we will use the face idea, not the size).
- Nav height was measured at 76px. One filled CTA on the right is correct in principle; our CTA uses the primary button token (pill, as in the spec).

**Avoid**

- The yellow handwritten underline, the quote-mark doodle, and the bright yellow pill are playful. They are the opposite of restrained craft. No decorative scribbles in the default theme.
- The black promotional bundle bar under the nav is seller chrome. Do not add a second bar.
- A 200px wordmark will wrap badly below 390px. Clamp the home hero, as the spec requires.
- Numbered work ("Relation 001") can feel like a gimmick. Use client, sector, year, and a one-line result.

---

### 10. Halston (Webflow)

- **Listing:** [Webflow - Halston](https://webflow.com/templates/html/halston-website-template) - live, HTTP 200, Metrik, $99
- **Official preview:** [halston-architecture-template.webflow.io](https://halston-architecture-template.webflow.io/) - live, HTTP 200
- **Category:** Webflow template - editorial architecture and interior studio
- **Screenshot:** [shots/halston.jpg](references/shots/halston.jpg)
- **Maps to:** Home, Work, case study, Services, Studio, Insights, Contact

**Take**

- The closest **overall feel** to what the template should be: a warm light canvas (measured about **`#DBDBD8`**), a large tight grotesk headline in near-black ("BESPOKE LIVING / DEFINED BY CLARITY"), then a full-bleed photograph.
- Headline measured **General Sans 40.8px / 40.8px, weight 500**, solid leading, no theatrics. Body 16px (leading a little tight at 20.8px; we stay at 1.6).
- One outlined secondary action ("Consultation +") and a quiet service list. Photography is calm, warm, and sharp - craft as proof.
- A complete studio sitemap (About, Services, Projects, Journal, Contact) with a componentised system. Useful as a completeness check, not as a page-count target.

**Avoid**

- "RECOGNITION / Mies van der Rohe Shortlist" is proof we must not fake. If a buyer has no recognition, omit the block.
- The left-hand uppercase service list can read as eyebrows. Our home does not list services as tiny caps beside the H1; services have their own section and page.
- General Sans is a Fontshare face (usable, but the final font is Designer's to set). Do not lock the template to an architecture mood: no default "bespoke living" copy, no implied awards.
- A 48px nav is shorter than our 68px; do not shrink targets to match.

---

### 11. Andersen (Webflow)

- **Listing:** [Webflow - Andersen](https://webflow.com/templates/html/andersen-website-template) - live, HTTP 200, Medium Rare
- **Official preview (studio home, not the sales landing):** [andersen-template.webflow.io/home/home-1](https://andersen-template.webflow.io/home/home-1) - live, HTTP 200
- **Also captured:** [Work](https://andersen-template.webflow.io/work/work-1), [Case - Marco Pierre](https://andersen-template.webflow.io/projects/marco-pierre)
- **Category:** Webflow template - minimal creative agency / studio
- **Screenshots:** [shots/andersen-home.jpg](references/shots/andersen-home.jpg), [shots/andersen-work.jpg](references/shots/andersen-work.jpg), [shots/andersen-case.jpg](references/shots/andersen-case.jpg)
- **Maps to:** Home, Work, case study, Services, Studio, Contact

**Take**

- The home pattern we want, almost beat for beat: typographic promise, one primary button ("See our work"), then a full-bleed photograph.
- Work index: a short typographic header, then a two-column image grid with almost no card chrome. Case page: client name, a large result or title line, two quiet service tags, then a full-bleed image.
- Type is consistent and measured: **BDO Grotesk, H1 51px / 61.2px, weight 400, tracking −0.51px**; body **16px / 24px** (1.5) at 70% black on white. Section padding is **96px** almost everywhere; the home hero uses **192px** top and **96px** bottom. This is the strongest spacing evidence for our 8pt, 96→128 rhythm.
- Buttons in the demo are sharp-cornered filled black. That is a valid secondary or alternative; our spec already sets the primary as a pill. Do not mix many radii.

**Avoid**

- The root preview URL (`andersen-template.webflow.io/`) is a **template sales landing** ("Sleek Scandi minimalism…", Cart, Buy template), not the studio site. Always judge the `/home/home-1` (and work/case) pages. Our shipped site must never include shop chrome.
- Some demo spreads use a client-logo row. That is fake proof if the logos are placeholders - omit when the collection is empty.
- BDO Grotesk is not a given free font for the kit. Take the scale, weight and tracking; Designer will set the free family.
- Slightly rounded image corners are optional and should come from the radius token, not from one-off CSS.

---

### 12. Stada (Webflow)

- **Listing:** [Webflow - Stada](https://webflow.com/templates/html/stada-agency-website-template) - live, HTTP 200, $79
- **Official preview:** [stada-design-agency-template.webflow.io](https://stada-design-agency-template.webflow.io/) - live, HTTP 200 (`stada.webflow.io` returned 404 and was dropped)
- **Category:** Webflow template - minimal design agency
- **Screenshot:** [shots/stada.jpg](references/shots/stada.jpg)
- **Maps to:** Home, Work, Services, Studio, Insights, Contact

**Take**

- A useful check on type scale and the "statement then image" home: a very large tight headline on a cool light-grey canvas (`#F2F2F6`), then photography. Headline measured **Manrope 115.2px / 115.2px, weight 700**.
- Current nav uses an underline, which matches our selected-indicator rule. The IA (Services, About, Journal, Contact) is complete.

**Avoid**

- This is the "nearby, but not the feel" Webflow example. **Do not take** the mint cyan bar, the "DESIGN AGENCY" eyebrow, the vertical grid lines, the split pill "Explore" control, the ecommerce cart in a studio nav, or the neon/magenta photography.
- 115px at 1280 is too large for our clamped hero and will wrap badly on a phone. Stay in the 48–64px display band unless a wordmark is being tested, and even then clamp it.
- Manrope at extra-bold with no tracking is heavier than the quieter 400–500 cuts on Andersen, Halston and Walker. Prefer those.

---

## How this maps to our tokens

Designer is setting the final palette and free fonts in parallel. This board does not pick the face; it sets the *behaviour* the tokens should support.

### Type

- **Body:** stay on the locked **16px / 1.6**, measure **66ch** for long text. References cluster around 16–19px with 1.5–1.7 leading (Andersen 16/24, Gretel 16/27.2, Pentagram 19/25). 16/1.6 is in the middle and should feel natural.
- **Display:** a calm grotesk at **400–500**, about **48–64px** at 1280, tracking roughly **−0.02em** (Andersen −0.51px on 51px is about −0.01em; Clay and Walker go closer to −0.04em). Line-height about 1.1–1.2, or solid on short all-caps lines (Halston 40.8/40.8).
- **Optional A/B:** a free serif display for the H1 or wordmark (Last Studio uses Hedvig Letters Serif, which is on Google Fonts). Grotesk should remain the default recommendation - it is what Gretel, Andersen, Halston, Walker and AREA 17 share.
- **Free fonts only.** Do not ship Akkurat, Universal Sans, BDO Grotesk, Plain, or General Sans as the kit default unless Designer confirms an open licence. Use them as scale references, then swap to the chosen Google Font or other open licence.
- **No eyebrows.** Section titles are H2, in plain words ("Selected work", "How a project runs").

### Spacing and layout

- **8pt scale**, page gutters **16 / 24 / 32**, content max **1280**. Measured inner widths on these sites often land around 1160–1232 inside a 1280 viewport - our 1280 max with outer gutters will feel the same.
- **Section padding: 96px, then 128px from 1024.** Andersen's consistent 96px is the marketplace norm; the extra 32px on desktop is how we get closer to AREA 17 and Gretel's openness without going slack.
- **Home hero** can use a larger top pad (Andersen uses 192px) so the H1 clears the 68px sticky nav comfortably. Keep that in a token, not a magic number.
- **Work grid:** 1 / 2 / 3 columns, 24px gap. Prefer Andersen and Gretel's large, low-chrome images over mosaic or heavy card borders.

### Imagery

- **Work cards:** landscape around **3:2** (or a calm 4:3). Not tiny thumbnails, not a 12-cell mosaic.
- **Case and home feature:** full-bleed or near-bleed landscape, **16:9** or up to about **2:1 / 2.33:1** (Pentagram). Inner content still caps at 1280; only media and inverse or brand bands go full-bleed, as the spec says.
- **Type on photos:** strong scrim or a solid inverse panel. Pentagram's open caption on sky is a contrast risk we will not take.
- Sample images are labelled Sample. No Midjourney faces, no fake client logos, no placeholder metrics in the frame.

### Motion

- The references we are keeping are mostly still on first paint. That is the point.
- Follow the spec exactly: durations 120 / 200 / 320ms, easing `cubic-bezier(0.2, 0.8, 0.2, 1)`; hover only under fine pointers; no autoplay, parallax, bounce, glow, or height animation; reduced-motion final pose in the server HTML.
- If a marketplace template depends on a scribble, a cursor trail, or a looping showreel to "feel finished," we are not taking that part.

### Colour (for the brand work in parallel)

- Main colours stay black and white (black as the light-theme accent, per Amos's earlier direction), plus a quiet canvas grey.
- Halston's warm `#DBDBD8` and Stada's cool `#F2F2F6` are useful canvas candidates - muted, not pastel, not stark only.
- Semantic colour (status, sample badges, warnings, avatars) comes from the muted SaaS palette already being defined, and only where meaning needs it. The marketing site should still look almost monochrome at a glance.
- Inverse bands are black, with their own CTA tokens, and no accent fill on black.

---

## Reviewed and set aside

These were opened, returned HTTP 200, and were not used as "take this feel" references. They help draw the line.

| Site | URL | Why it was set aside |
| --- | --- | --- |
| Neiden (Framer) | [listing](https://www.framer.com/marketplace/templates/neiden/), [preview](https://neiden.framer.media/) | Particle field, script overlay, review scores, avatar row, "3 left" scarcity. Almost a checklist of things we will not ship. Shot: `references/shots/neiden.jpg`. |
| Spector (Framer) | [listing](https://www.framer.com/marketplace/templates/spector/), [preview](https://spector.framer.website/) | Cinematic dark crop, gradient type, decorative grid, eyebrow labels. Shot: `references/shots/spector.jpg`. |
| Conversion (Framer) | [listing](https://www.framer.com/marketplace/templates/conversion/), [preview](https://conversion.framer.media/) | Mesh-like blur gradient, star ratings, stacked avatars, "115+ happy clients." Shot: `references/shots/conversion.jpg`. |
| Base Design | [basedesign.com](https://www.basedesign.com/) | Work-first, but as a dense mosaic feed. Too visually loud for this template. Shot: `references/shots/base-design.jpg`. |
| Koto | [koto.com](https://koto.com/) | Strong IA and type, but a dark video home (the capture is mostly a black frame). Conflicts with light theme and no autoplay. Shot: `references/shots/koto.jpg`. |
| Collins | [wearecollins.com](https://wearecollins.com/) | Beautiful serif line on a warm off-white canvas - type is worth noting - but the first screen is an award logo wall. We will not lead with proof we cannot stand behind. Shot: `references/shots/collins.jpg`. |
| Manual | [manual.studio](https://manual.studio/) | Calm serif manifesto, but the first 800px is text only, with a hidden play control. We lead with work when work exists. Shot: `references/shots/manual.jpg`. |

---

## Sources

- [First Skala template: build-ready site spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51), 12 November 2026
- Each live URL listed above, opened and fetched the same day
- Framer and Webflow official preview domains, taken from the marketplace listings

All times are Europe/Stockholm.
