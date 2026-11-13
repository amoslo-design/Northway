# Northway — Design principles

**Proposal only.** Revised 13 November 2026, Europe/Stockholm, after Codex’s v2 build and Amos’s verdict (generated look; white canvas, grey elevated). For review before anything goes to GitHub. Does not change the repo, Figma, or the existing `template-brand` files.

These are the fundamental rules for a conversion-focused, premium studio template, sold on skala.design at $149–$249. They sit next to UX Lead’s conversion rules in [`/workspace/northway-v2/docs/CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md) and share the same section names, CTA hierarchy and page list. Visual values live in [`BRAND-V2.md`](BRAND-V2.md). The critique of Codex v2, and the rules below that ban its tells, is in [`CRITIQUE-V2.md`](CRITIQUE-V2.md). Motion is outlined in [`MOTION.md`](MOTION.md).

Studio voice is “we.” The product and the demo studio are both **Northway**.

---

## Why these exist

The first design system was structurally sound and visually thin. Codex’s first build followed it and produced a grey, empty, generic page.

The v2 proposal, revised to Amos’s Eden direction (pine, white, light grey, a display sans), produced a second build that is more on-brief and still looks generated: numbered steps, numbered ledger rows, a giant monogram, a waymark on every heading, the same section head five times, outline chips, and a grey page of identical white floating cards. Several of those tells were invited by the v2 wording of these principles and of BRAND-V2. That wording is withdrawn here.

A sellable template has to look like a studio we are proud of **in its default state**, including when there are no photographs. Consultants and small non-design agencies are the buyers. They sell expertise and trust. The kit must feel calm and premium — like a crafted counsel site on a white sheet, not like a generated marketing page, and not like a SaaS dashboard.

---

## Seven principles

### 1. Personality is present before the photographs are

Colour, type, grain, and a small set of graphic devices do the work of character. Photography deepens that character; it is not allowed to be the only source of it. A case without an image — Kindred, in the demo, ships this way — still looks designed.

**In practice.** The page is a **white** sheet (`#FFFFFF`). Elevated surfaces — cards, the Price Tablet, the Enquiry Sheet, the Excerpt — are **grey `#E8E8E4`**, with no drop shadow. Deep pine `#1F3A2E` bands, with a 6% grain, carry large cream sans headlines. The no-image treatment is the **Excerpt**: a grey panel with a named quote or result, never a monogram, never an empty frame. Proof in the Briefing is a sentence, not a chip.

### 2. A specific result, then one clear ask

The first viewport answers four things, in this order: what changed (a named result or quote, at display scale), who this is for, what to do next, and — when prices are on — what it costs from. One primary action per view, labelled **Start a project**, always to `/contact`. Every other path is a text link or the work itself. Proof sits next to asks. The same result is not restated verbatim on the peeking card and the first ledger entry.

**In practice.** The Briefing is a centred pine band. The Kindred result is the first large type (Bricolage 600, cream). A tracked uppercase attribution may sit above it **once**, as small meta; it does not replace the result, and it is not repeated on cards or rows. The from-price sits in the CTA cluster, cream on pine, 16 / 500. After the Briefing scrolls away, the same primary appears in the nav as a pine pill; while the Briefing’s white pill is on screen, the nav CTA is quiet cream text, no underline. Copy is specific. Never a line any studio could say as the only large statement. Never an invented percentage lift.

### 3. Asymmetry and chaptered rhythm — except for the two green bands

Equal columns, equal cards, identical section padding and a repeated section-head pattern are a last resort. The Case Ledger, the Price Tablet and the Process Path are chaptered, left-weighted and **uneven**. The **Briefing and the Pine Band are centred**, on pine, because that is the Eden calm we are adopting. We do not centre the whole site, we do not number a process or a list, and we do not turn the Price Tablet into three equal SaaS cards.

**In practice.** Variable section spacing (`space.section.sm` 80, `space.section` 120, `space.section.lg` 176). A peeking Excerpt overlaps the Briefing and the next chapter. Light chapters sit on the white canvas; they are not alternating grey slabs. Three-up hairline cards, numbered equal columns, and heading-left / link-right / waymark used more than once, remain forbidden.

### 4. The demo is a complete studio, honestly disclosed once

Northway ships fully written. Every case, engagement, insight, process step, team entry and FAQ is complete fiction, good enough to read as a real studio. There are no “Sample” badges, no “for demo only” prefixes, no empty cards, and no builder notes on the public surface.

**In practice.** One site-level disclosure, once, in the footer: “Northway is a demonstration studio that ships with this template.” If a buyer has nothing for a block, omit the Home teaser. On `/case-studies` with zero projects, a short honest empty on a grey elevated panel — never a fake grid. Decided in `DECISIONS-V2.md`: one footer disclosure, no per-item badges.

### 5. A small set of ownable devices, used with discipline

Northway is recognisable from six signature components and a few atoms: the Briefing, the Case Ledger, the Price Tablet, the Enquiry Sheet, the Process Path, the Pine Band, the pine Waymark, the Excerpt, and the grain. We do not invent a new trick on every section, we do not stamp the same trick on every section, and we do not import Eden’s product chrome.

**In practice.** The waymark is a short pine (or cream-on-pine) bar with a 4px north cut, reserved for the **wordmark, the current nav item, and at most one hero-level moment.** It is not a section-head prefix and not a list bullet. The Excerpt is a grey panel with a quote, used where a still is missing on a featured case or as the peeking object. Grain lives only on pine bands, at 6%. The uppercase meta line is for the Briefing attribution and for “Typical,” only.

### 6. Calm enough to trust, specific enough to remember

The audience buys counsel, not spectacle. Colour is limited: pine, white, elevated grey. Display is a sans, with presence from size, weight and tracking, not from a serif costume, not from 800-weight type, and not from a giant initial. Motion is small. Nothing neon, nothing mesh, nothing that looks generated, nothing that looks like a workspace app.

**In practice.** Bricolage Grotesque at 500–600 for the result (decided; Mona Sans is not used); Hanken Grotesk for body at 18 / 1.55. If a device needs a paragraph of explanation to justify itself, it is out. If a device appears more than a few times on a page, it is out.

### 7. Tokens make it rebuildable; the default must already be sellable

The kit stays token-based and atomic: primitives, then semantic, then component, in W3C DTCG form. Components bind only to semantic or component names. A buyer’s rebrand is a swap of primitives (and a few semantic aliases) and the kit follows.

**In practice.** The default values — this pine, this white sheet, this grey surface, this pairing, these components — have to be something we would put on skala.design without apology. Do not bind to raw hex, to a font-family string, or to a primitive name.

---

## Hard rules

Testable. A rule fails if a reviewer can see the forbidden state on a shipped page.

### Do

- Lead the first viewport with a specific result or a named quote at display scale, on the green Briefing. Fall back to the stronger studio heading only when both are empty. Never invent a result. Do not restate that display line verbatim on the peeking object or the first ledger entry.
- Place one primary in any viewport. On pine: a **white pill, pine text**. On light: a **pine pill, cream text**. Default label “Start a project.” Secondary paths are text, or the work itself. The nav primary is quiet, with no underline, while a pill is in view.
- Put proof next to asks, as a **sentence**, not a chip. Put the from-price in the Briefing’s CTA cluster when prices are on, cream on pine, 16 / 500, not whispered.
- Write specific copy. Named fictional clients, concrete story figures only.
- Use the **Excerpt** (grey elevated panel, a named quote or result, optional short pine tick, **no monogram**) whenever a featured case has no still. Quiet rows are text-complete without a panel. No empty image frames.
- Vary section spacing and section openings. Centre the two green bands; keep the work chapters left-weighted and uneven.
- Honour `prefers-reduced-motion`: every component’s final pose is in the server HTML. Honour `prefers-reduced-data` by dropping the grain for a solid pine. See [`MOTION.md`](MOTION.md) and the grain spec in BRAND-V2.
- Disclose the demo once, in the footer. Omit empty Home teasers. Ship an honest empty on `/case-studies` if needed.
- Bind colour, type, space, motion, radius and shadow to semantic or component tokens.

### Don’t

- **Don’t number a process, a ledger, a list or a step.** Not `1 2 3 4`, not `01–04`, not a circled index, not “Step 1,” not a Bricolage numeral beside a name. Names and writing only.
- **Don’t use a giant initial, monogram or large letter as a photograph substitute.** The Folio monogram is withdrawn.
- **Don’t use the waymark as a bullet.** Not on every section heading, not on every row, not on every process step, not as a floating bar above the Pine Band heading. Reserved uses only (wordmark, current nav, at most one hero moment).
- **Don’t repeat the same section-head pattern** (heading left, link or dek right, waymark, hairline) more than **once** on a page. “See all” belongs at the end of the content.
- **Don’t use tracked uppercase eyebrows on every row or heading.** At most one attribution line per page, in the Briefing, plus “TYPICAL” on Grow, once. Sector and year are caption sentences.
- **Don’t use outline pills, pill chips or pill tags.** Pills are the one primary only (and its on-band inverse).
- **Don’t put a grey canvas under white floating cards, and don’t use a drop shadow as the default elevation.** Canvas is white. Elevated is grey `#E8E8E4`. The fill is the elevation.
- **Don’t set four equal process columns, or a second Strategy card that restates a step.**
- Don’t ship an all-grey, black and white palette, and don’t bring back warm paper, copper or a display serif unless a later brief says so.
- Don’t use a generic slogan as the only large statement. “Work that earns the next project.” belongs in the footer.
- Don’t put two pills in the hero, three equal primary buttons on pricing, or a primary in the nav at the same time as the Briefing’s primary.
- Don’t repeat three equal hairline cards as the home rhythm, and don’t use a hairline as the only list rhythm.
- Don’t use Sample badges, “for demo only” prefixes, or builder captions on the public site.
- Don’t invent testimonials, logo walls, percentage lifts, review scores, scarcity, or award walls.
- Don’t default to a cinematic dark home. The base is light. Pine is a band.
- Don’t copy Eden’s product-screenshot hero, orbiting app icons, layout or copy. Don’t use mesh, neon, glow, orbs, decorative 3D, autoplay, parallax, custom cursors, scribbles, or gradient type.
- Don’t set Lucide (or any icon set) beside every heading, and don’t use emoji as decoration.
- Don’t animate height, width or left; don’t do word-by-word hero reveals; don’t count-up a metric; don’t drift or orbit anything.
- Don’t leave Midjourney faces, fake logos, or stock “team laughing at a laptop” in the demo.
- Don’t bind components to raw hex, or to Inter, Inter Tight, Geist, Playfair, DM Serif Display, Space Grotesk, or Outfit.

---

## Avoiding the AI-template look

Codex v1 and v2 are a catalogue of the current tells. Each one has a rule that counters it. If a later build trips two or more of these, it is not ready to sell. If a later brief is tempted to “just add indexes for clarity,” the answer is better writing, not numbers.

| Tell | The rule that counters it |
|---|---|
| Numbered “how we work” 1–4 (or 01–04) in equal columns, with a timeline rule | **No numbers of any kind.** Names only. One spine. Uneven: Strategy is a grey elevated panel and absorbs any fuller copy. Not four equal columns. |
| Ledger rows with `01–04`, hairlines, a waymark and an uppercase eyebrow | No indexes, no row waymarks, no row eyebrows. Featured Excerpt + quiet text entries, space instead of rules. |
| A giant monogram letter as a no-image treatment | The **Excerpt**: grey panel, a quote or result, optional short pine tick, no letter. |
| A waymark on every heading, row and step | Waymark reserved for the wordmark, current nav, and at most one hero moment. |
| The same heading-left / link-right / waymark section head, five times | That pattern at most **once**. Other sections: heading, optional dek under it; “see all” at the end of the content. |
| Uppercase eyebrows everywhere | One Briefing attribution, plus “TYPICAL” once. Captions are sentence-case. |
| Outline “feature” chips next to a real button | A proof sentence, or omit. Pills are the primary only. |
| A grey page of identical white rounded cards with soft shadows | **White canvas, grey elevated, no drop shadow.** Quiet rows sit on white. Not every block is a panel. |
| The same result sentence three times in one scroll | Display line once. Peeking Excerpt is a quote or a companion. Ledger does not restate it verbatim. |
| A centred hero with two pills and a slogan | A centred **pine** Briefing is allowed (Eden). It still leads with a **named result**, has **one** white pill, and shows the **from-price**. The old slogan is in the footer. |
| A generic slogan at display size | The display line is a specific named result. Fallback: “A clear offer, a plan your team can run, a price before you start.” |
| Three equal grey placeholder cards | The Case Ledger is a text-first, uneven, un-numbered set. Excerpt where a featured case has no still. |
| An all-grey / black / white palette | Pine `#1F3A2E`, white canvas, elevated grey `#E8E8E4`. Cream-white type on green bands. |
| A uniform 8px rhythm and identical section padding | Variable section spacing (80 / 120 / 176) and chapters that do not all share one card molecule. |
| Generic copy as the only large text | Result-first. Specific lede. Story figures only. |
| Emoji, or Lucide on every heading and card | Phosphor Regular, 24px, only where an icon has a job. No emoji. No trailing arrows as decoration on every row. |
| Symmetric everything; SaaS plan-cards | Price Tablet is one grey rate sheet, no shadow. Grow is marked with a pine rule and “TYPICAL,” not a “Most popular” chip. Only the two green bands are centred. |
| A three-benefit “principles” strip presented as proof | Proof is a named result, a named quote, a named client, or a story-figure sentence. Principles may live on About. |
| Floating app / tool icons around a headline | No icon cloud, no chips. A still proof sentence. |
| A peeking product screenshot or dashboard | A peeking **Excerpt** or a still — a consultancy deliverable, not an app UI. |
| Inter, Geist, Playfair, DM Serif, Space Grotesk, Outfit; 800-weight display | Bricolage Grotesque 500–600 for display; Hanken for body. Authority from scale and weight contrast. No monogram as “expression.” |
| Mesh, orbs, glow, gradient type, scribbles, word-by-word reveals, count-ups | Banned. See Don’t, and [`MOTION.md`](MOTION.md). |
| Sample badges as the only chromatic colour | No Sample badges. The accent is pine. Honesty is one footer line. |
| A black CTA slab sitting on a black footer | One continuous pine close: Pine Band (white pill, no floating waymark) and a quieter footer on the same green, with the disclosure. |
| Empty “meet the team” or a tall void around thin copy | Fully written studio short as left-weighted text (or one Excerpt for a quote), or omit the section. |

---

## Conversion rules we share with UX Lead

Restated only where a visual rule depends on them. The authoritative conversion text is [`CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md). UX Lead is revising rules that pushed toward generic output (fixed section anatomy, numbered steps, a CTA in every section). Impacts that need a wording update on their side are listed in BRAND-V2, “CONVERSION.md impacts,” and in [`NOTES-FOR-UX.md`](NOTES-FOR-UX.md).

- **Pages and nav.** Home, Case studies (`/case-studies`), case study, Services, About, Insights (omitted when empty), post, Contact, legal, 404. Nav from 1024: wordmark; Case studies / Services / About / Insights / Contact; plus the primary under the one-in-view rule. Height 68px, sticky. On the green Briefing: pine bar, cream links, quiet cream CTA (no underline). After it: white bar, ink links, pine pill.
- **Home order.** The Briefing → the Case Ledger → Insights teaser → the Price Tablet → the Process Path → Studio short → FAQ short → the Pine Band → Footer. Omit any teaser whose content is empty. Do not insert a centred Strategy highlight as its own band.
- **Case pages.** Outcome, Challenge, Approach, Results, then an optional image block.
- **Prices.** On by default. From-price in the first viewport. Grow is the typical engagement, marked with a non-colour cue (pine rule + “TYPICAL”). One switch hides every figure.
- **Enquiry.** Four fields. Submit is **Send the brief.** Reply-time is a real sentence above the fields.
- **One primary.** Same label, same destination, visually distinct on its ground.

---

## Demo content

Northway is a fully written fictional strategy and growth consultancy. Email `hello@northway.example`. Voice: “we,” international English, short, clear beats clever. No founder name. No hype (“unlock,” “elevate,” “leverage,” “in today’s market”).

The quality bar and the actual lines (Kindred, Holloway, Eastport, Cedar; Position, Grow, Brand + growth; process; FAQs) are in CONVERSION.md, “Demo studio writing.” We follow them. Visual treatment must never require a badge, a prefix, a monogram, or an empty slot to “explain” that the studio is a demo.
