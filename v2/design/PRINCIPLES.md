# Northway — Design principles

**Proposal only.** Revised 13 November 2026, Europe/Stockholm, to the chosen Eden direction. For review before anything goes to GitHub. Does not change the repo, Figma, or the existing `template-brand` files.

These are the fundamental rules for a conversion-focused, premium studio template, sold on skala.design at $149–$249. They sit next to UX Lead’s conversion rules in [`/workspace/northway-v2/docs/CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md) and share the same section names, CTA hierarchy and page list. Visual values live in [`BRAND-V2.md`](BRAND-V2.md), including what we take from Eden and what we refuse to copy. Motion is outlined in [`MOTION.md`](MOTION.md).

Studio voice is “we.” The product and the demo studio are both **Northway**.

---

## Why these exist

The first design system was structurally sound and visually thin: almost monochrome, a single grotesk, personality postponed to photography that often is not there. Codex’s first build followed it and produced a grey, empty, generic page.

The first v2 proposal answered that with warm paper, copper and a display serif. The chosen direction is different: **Eden’s green, white and light-grey look, with a handsome sans-serif.** These principles are revised to that brief. The conversion rules, the signature components, and the obligation to be sellable and proud, are not.

A sellable template has to look like a studio we are proud of **in its default state**, including when there are no photographs. Consultants and small non-design agencies are the buyers. They sell expertise and trust. The kit must feel calm and premium — like Eden’s quiet green pages, not like a generated marketing site, and not like a SaaS dashboard.

---

## Seven principles

### 1. Personality is present before the photographs are

Colour, type, grain, cards and a small set of graphic devices do the work of character. Photography deepens that character; it is not allowed to be the only source of it. A case without an image — Kindred, in the demo, ships this way — still looks designed.

**In practice.** Light grey `#F2F2EF` and white alternate as the base. Deep pine `#1F3A2E` bands, with a 6% grain, carry large cream sans headlines. The Folio is a white card with a large pine sans initial, never an empty frame. Proof chips and a peeking case card stand in for Eden’s app icons and product screenshot, restated for a consultant.

### 2. A specific result, then one clear ask

The first viewport answers four things, in this order: what changed (a named result or quote, at display scale), who this is for, what to do next, and — when prices are on — what it costs from. One primary action per view, labelled **Start a project**, always to `/contact`. Every other path is a text link or the work itself. Proof sits next to asks.

**In practice.** The Briefing is a centred pine band. The Kindred result is the first large type (Bricolage 600, cream). A tracked uppercase attribution may sit above it as small meta; it does not replace the result. The from-price sits in the CTA cluster, cream on pine, 16 / 500. After the Briefing scrolls away, the same primary appears in the nav as a pine pill; while the Briefing’s white pill is on screen, the nav CTA is quiet cream text. Copy is specific. Never a line any studio could say as the only large statement. Never an invented percentage lift.

### 3. Asymmetry and chaptered rhythm — except for the two green bands

Equal columns, equal cards and identical section padding are a last resort. The Case Ledger, the Price Tablet and the Process Path are chaptered and left-weighted. The **Briefing and the Pine Band are centred**, on pine, because that is the Eden calm we are adopting. We do not centre the whole site, and we do not turn the Price Tablet into three equal SaaS cards.

**In practice.** Variable section spacing (`space.section.sm` 80, `space.section` 120, `space.section.lg` 176). A peeking case card overlaps the Briefing and the next chapter. Three-up hairline cards remain forbidden as a repeating home pattern.

### 4. The demo is a complete studio, honestly disclosed once

Northway ships fully written. Every case, engagement, insight, process step, team entry and FAQ is complete fiction, good enough to read as a real studio. There are no “Sample” badges, no “for demo only” prefixes, no empty cards, and no builder notes on the public surface.

**In practice.** One site-level disclosure, once, in the footer: “Northway is a demonstration studio that ships with this template.” If a buyer has nothing for a block, omit the Home teaser. On `/case-studies` with zero projects, a short honest empty on a white card — never a fake grid. This is a change from the earlier badge rule, proposed with UX Lead, and it needs confirmation before it lands in the build spec.

### 5. A small set of ownable devices, used with discipline

Northway is recognisable from six signature components and a few atoms: the Briefing, the Case Ledger, the Price Tablet, the Enquiry Sheet, the Process Path, the Pine Band, the pine Waymark, the Folio, the grain, and the proof chips. We do not invent a new trick on every section, and we do not import Eden’s product chrome.

**In practice.** The waymark is a short pine (or cream-on-pine) bar with a 4px north cut. Proof chips are two honest figures, aligned, still. The peeking object is a case card. Grain lives only on pine bands, at 6%. The uppercase meta line is for attribution and “Typical,” not for marketing labels on every heading.

### 6. Calm enough to trust, specific enough to remember

The audience buys counsel, not spectacle. Colour is limited: pine, white, light grey. Display is a sans, with presence from size, weight and tracking, not from a serif costume and not from 800-weight type. Motion is small. Nothing neon, nothing mesh, nothing that looks generated, nothing that looks like a workspace app.

**In practice.** Bricolage Grotesque (or Mona Sans) at 500–600 for the result; Hanken Grotesk for body at 18 / 1.55. If a device needs a paragraph of explanation to justify itself, it is out.

### 7. Tokens make it rebuildable; the default must already be sellable

The kit stays token-based and atomic: primitives, then semantic, then component, in W3C DTCG form. Components bind only to semantic or component names. A buyer’s rebrand is a swap of primitives (and a few semantic aliases) and the kit follows.

**In practice.** The default values — this pine, this grey, this pairing, these components — have to be something we would put on skala.design without apology. Do not bind to raw hex, to a font-family string, or to a primitive name.

---

## Hard rules

Testable. A rule fails if a reviewer can see the forbidden state on a shipped page.

### Do

- Lead the first viewport with a specific result or a named quote at display scale, on the green Briefing. Fall back to the stronger studio heading only when both are empty. Never invent a result.
- Place one primary in any viewport. On pine: a **white pill, pine text**. On light: a **pine pill, cream text**. Default label “Start a project.” Secondary paths are text, or the work itself.
- Put proof next to asks. Put the from-price in the Briefing’s CTA cluster when prices are on, cream on pine, 16 / 500, not whispered.
- Write specific copy. Named fictional clients, concrete story figures only.
- Use the Folio (white card, pine sans initial) whenever a still is missing. No empty image frames.
- Vary section spacing. Centre the two green bands; keep the work chapters left-weighted and uneven.
- Honour `prefers-reduced-motion`: every component’s final pose is in the server HTML. Honour `prefers-reduced-data` by dropping the grain for a solid pine. See [`MOTION.md`](MOTION.md) and the grain spec in BRAND-V2.
- Disclose the demo once, in the footer. Omit empty Home teasers. Ship an honest empty on `/case-studies` if needed.
- Bind colour, type, space, motion, radius and shadow to semantic or component tokens.

### Don’t

- Don’t ship an all-grey, black and white palette, and don’t bring back warm paper, copper or a display serif unless a later brief says so.
- Don’t use a generic slogan as the only large statement. “Work that earns the next project.” belongs in the footer.
- Don’t put two pills in the hero, three equal primary buttons on pricing, or a primary in the nav at the same time as the Briefing’s primary.
- Don’t repeat three equal hairline cards as the home rhythm.
- Don’t number a process 01–04 in equal columns.
- Don’t use Sample badges, “for demo only” prefixes, or builder captions on the public site.
- Don’t invent testimonials, logo walls, percentage lifts, review scores, scarcity, or award walls.
- Don’t use **marketing** eyebrows above section headings (“NEW WORK,” “WHAT WE DO,” “THE WORKSPACE”). A tracked uppercase **attribution or meta** line is allowed (Briefing attribution, sector/year, “Typical”). That carve-out is listed as a CONVERSION.md impact.
- Don’t default to a cinematic dark home. The base is light. Pine is a band.
- Don’t copy Eden’s product-screenshot hero, orbiting app icons, layout or copy. Don’t use mesh, neon, glow, orbs, decorative 3D, autoplay, parallax, custom cursors, scribbles, or gradient type.
- Don’t set Lucide (or any icon set) beside every heading, and don’t use emoji as decoration.
- Don’t animate height, width or left; don’t do word-by-word hero reveals; don’t count-up a metric; don’t drift or orbit the proof chips.
- Don’t leave Midjourney faces, fake logos, or stock “team laughing at a laptop” in the demo.
- Don’t bind components to raw hex, or to Inter, Inter Tight, Geist, Playfair, DM Serif Display, Space Grotesk, or Outfit.

---

## Avoiding the AI-template look

Codex v1 is a catalogue of the current tells. Each one has a rule that counters it. Eden’s own SaaS tells (app-icon clouds, peeking dashboards) are in the “don’t copy” list and are countered here too. If a later build trips two or more of these, it is not ready to sell.

| Tell | The rule that counters it |
|---|---|
| A centred hero with two pills and a slogan | A centred **pine** Briefing is allowed (Eden). It still leads with a **named result**, has **one** white pill, and shows the **from-price**. The old slogan is in the footer. |
| A generic slogan at display size | The display line is a specific named result. Fallback: “A clear offer, a plan your team can run, a price before you start.” |
| Three equal grey placeholder cards | The Case Ledger is a text-first set of uneven rows. Folio treatment where there is no still. |
| Numbered “how we work” 01–04 in equal columns | The Process Path is a spine of pine waymarks with uneven step widths. |
| An all-grey palette | Pine `#1F3A2E`, white, light grey `#F2F2EF`. Cream-white type on green bands. |
| A uniform 8px rhythm and identical section padding | Variable section spacing (80 / 120 / 176) and chapters that do not all share one card molecule. |
| No imagery, and no designed substitute | The Folio: white card, pine sans initial, meta, result. The peeking case card at the foot of the Briefing. Never an empty frame. |
| Generic copy as the only large text | Result-first. Specific lede. Story figures only. |
| Emoji, or Lucide on every heading and card | Phosphor Regular, 24px, only where an icon has a job. No emoji. No trailing arrows as decoration on every row. |
| Symmetric everything; SaaS plan-cards | Price Tablet is one white rate sheet. Grow is marked with a pine rule and “TYPICAL,” not a “Most popular” chip. Ledger rows are uneven. Only the two green bands are centred. |
| Marketing eyebrows | No “NEW WORK” or “WHAT WE DO.” Uppercase meta is for attribution, sector/year, and “Typical” only. |
| A three-benefit “principles” strip presented as proof | Proof is a named result, a named quote, a named client, or a story-figure chip. Principles may live on About. |
| Floating app / tool icons around a headline | At most two still, aligned **proof chips** with honest figures. No logos, no orbit, no drift. |
| A peeking product screenshot or dashboard | A peeking **case card** or Folio — a consultancy deliverable, not an app UI. |
| Inter, Geist, Playfair, DM Serif, Space Grotesk, Outfit; 800-weight display | Bricolage Grotesque 500–600 (or Mona Sans) for display; Hanken for body. Authority from scale, weight contrast and a tracked meta line. |
| Mesh, orbs, glow, gradient type, scribbles, word-by-word reveals, count-ups | Banned. See Don’t, and [`MOTION.md`](MOTION.md). |
| Sample badges as the only chromatic colour | No Sample badges. The accent is pine. Honesty is one footer line. |
| A black CTA slab sitting on a black footer | One continuous pine close: Pine Band (white pill) and a quieter footer on the same green, with the disclosure. |
| Empty “meet the team” or a tall void around thin copy | Fully written studio short, or omit the section. |

---

## Conversion rules we share with UX Lead

Restated only where a visual rule depends on them. The authoritative conversion text is [`CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md). Impacts that need a wording update on their side (eyebrow carve-out, Briefing described as centred on pine rather than a 7+5 split) are listed in BRAND-V2, “CONVERSION.md impacts.”

- **Pages and nav.** Home, Case studies (`/case-studies`), case study, Services, About, Insights (omitted when empty), post, Contact, legal, 404. Nav from 1024: wordmark; Case studies / Services / About / Insights / Contact; plus the primary under the one-in-view rule. Height 68px, sticky. On the green Briefing: pine bar, cream links, quiet cream CTA. After it: light bar, ink links, pine pill.
- **Home order.** The Briefing → the Case Ledger → Insights teaser → the Price Tablet → the Process Path → Studio short → FAQ short → the Pine Band → Footer. Omit any teaser whose content is empty.
- **Case pages.** Outcome, Challenge, Approach, Results, then an optional image block.
- **Prices.** On by default. From-price in the first viewport. Grow is the typical engagement, marked with a non-colour cue (pine rule + “TYPICAL”). One switch hides every figure.
- **Enquiry.** Four fields. Submit is **Send the brief.** Reply-time is a real sentence above the fields.
- **One primary.** Same label, same destination, visually distinct on its ground.

---

## Demo content

Northway is a fully written fictional strategy and growth consultancy. Email `hello@northway.example`. Voice: “we,” international English, short, clear beats clever. No founder name. No hype (“unlock,” “elevate,” “leverage,” “in today’s market”).

The quality bar and the actual lines (Kindred, Holloway, Eastport, Cedar; Position, Grow, Brand + growth; process; FAQs) are in CONVERSION.md, “Demo studio writing.” We follow them. Visual treatment must never require a badge, a prefix, or an empty slot to “explain” that the studio is a demo.
