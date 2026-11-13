# Northway — Visual and brand critique of Codex v1

> **For the current (v2) build, see [`CRITIQUE-V2.md`](CRITIQUE-V2.md).** This file remains as the critique of Codex’s v1 screenshot. v3 visual fixes (white canvas, the Excerpt, no numbers, reserved waymark) are in CRITIQUE-V2, BRAND-V2 and PRINCIPLES, and supersede any conflicting “Fix” line below — in particular the Folio monogram, process indexes, proof chips, and the grey-canvas / white-card model.

**Proposal only.** Revised 13 November 2026, Europe/Stockholm. The recommended *fixes* follow the chosen Eden direction (pine, white, light grey, sans). The diagnosis of the screenshot is unchanged. Does not change the repo or Figma.

This is the visual and brand reading of [`/workspace/northway-v2/codex-v1-screenshot.png`](/workspace/northway-v2/codex-v1-screenshot.png). UX Lead’s conversion and content reading of the same build is [`/workspace/northway-v2/docs/UX-CRITIQUE.md`](/workspace/northway-v2/docs/UX-CRITIQUE.md). We agree on the diagnosis and do not repeat their arguments at length; where a point is primarily a conversion failure, we point there and add only what is visual.

Principles and hard rules cited below are in [`PRINCIPLES.md`](PRINCIPLES.md). The revised direction is in [`BRAND-V2.md`](BRAND-V2.md).

---

## In one paragraph

The page is a well-structured outline wearing no clothes. The IA, the prices, the case names and a lot of the writing are already useful — as UX Lead also notes — but the surface is a single warm-grey, a single grotesk at a timid scale, and a repeating hairline-card rhythm, with yellow Sample chips as the only chromatic note. There are no design assets: no grain, no waymark, no card language, no display voice, no art-directed image and no designed no-image state. That is why it reads as generic AI work, and why it would not sell. The bones can stay. The visual system has to change — to pine, white and light grey, with a handsome sans, as now chosen.

---

## Critiques

### 1. The palette is dark grey, black and white — and it photographs as nothing

**What’s wrong.** The canvas is a dead institutional grey (the previous Halston `#DBDBD8`, looking colder in the capture than it did on a foundations page). Type is near-black. The only “accent” is that same ink, used as a filled pill. The only colour on the entire homepage is the yellow Sample chip, repeated until it becomes the brand.

**Why it hurts.** This is the complaint that the design system was “far too boring” and “wouldn’t sell for $1,” made visible. A buyer comparing templates on skala.design will decide in a few seconds. A monochrome kit can work when photography and custom type do the character work. Here there is no photography, and the type is a single regular grotesk. Grey-on-grey with a black button is a Tailwind stone starter, not a studio.

**Fix.** Light grey `#F2F2EF` and white as the base; deep pine `#1F3A2E` for the Briefing and the Pine Band, with a 6% grain; cream-white `#F7F7F4` type on those bands (11.49:1); green-tinted ink `#18221D` on light (14.57:1 on grey). A white pill on green, a pine pill on light. Principle 1 and 6; BRAND-V2, Colour. Pine must read as forest green on a large grained field — `#1F3A2E` does.

### 2. There are no design assets

**What’s wrong.** No graphic device, no texture, no illustration language, no ownable iconography, no art-directed crop. Chrome is hairlines, pills and trailing arrows. The page could be restyled to any other “calm agency” kit by changing a font.

**Why it hurts.** Assets are what a buyer is paying for at $149–$249, alongside the structure. Without them the template has no memory. They are also what keeps the page premium when photographs are missing — which, for this audience, is often.

**Fix.** A small, disciplined set, Eden-aligned but not Eden-copied: the pine Waymark (a short bar with a north cut), grain on green bands only, the Folio (white card, large pine sans initial), at most two still proof chips, a peeking case card at the foot of the Briefing, Phosphor Regular used sparingly, and the six signature components. Principle 5. No copper, no serif initial, no orbiting app icons, no peeking dashboard.

### 3. Type has no voice

**What’s wrong.** One family (Hanken Grotesk), mostly regular, at a modest display size, sitting in a timid measure. The largest line on the page is a slogan, and it is not large or distinctive enough to carry a first impression. Body, labels, prices and nav all feel like the same weight of speech. (UX Lead, critique 7, covers the hierarchy failure — prices shout, the result whispers. This point is about personality.)

**Why it hurts.** Authority in this direction should come from a large cream sans on a pine band: size, a step in weight, and a tracked uppercase meta line. A single neo-grotesk at 400, used for everything, is the default of every generated UI kit in 2026.

**Fix.** **Bricolage Grotesque** 500–600 (recommended; alternative **Mona Sans**) for the display result, headings and Folio initial; Hanken Grotesk remains body and UI. Body stays 18 / 1.55. The result sits at 56 / 64, tracking −0.03em, cream on pine. Expressive moments are sans: weight contrast, size, and the 13px / 0.10em uppercase attribution. No Newsreader, no Fraunces. Principle 6; BRAND-V2, Type.

### 4. The hero puts the slogan in the expensive type and the result in a disclaimed sidebar

**What’s wrong.** Visually, the first thing we read at scale is “Work that earns the next project.” The Kindred result — the only specific thing on the screen — is body-size, on the left, under a yellow Sample chip, prefixed “Sample result, for demo only.” Two pills sit under the slogan. A large field of empty grey sits around all of it. (Conversion reading: UX-CRITIQUE 1. We agree, and the lead-with-a-result rule is already locked.)

**Why it hurts.** The eye is taught that the generic line is the product and the specific work is a footnote. A two-pill cluster is one of the named AI-template tells.

**Fix.** The Briefing is a **centred pine band** (the Eden adoption) with grain. The Kindred result is the first large type, Bricolage 600, cream: “Patients knew who the clinic was for, and booked a first visit from the site.” A tracked uppercase attribution may sit above it as small cream-muted meta — not a marketing eyebrow, and not a substitute for the result. Hanken lede, cream-muted. One **white pill**, pine text. From-price in the same cluster, cream, 16 / 500. A peeking Folio (Kindred has no photograph) at the foot. The old slogan moves to the footer. See BRAND-V2, Settled items 1–4, and CONVERSION.md impacts for the eyebrow carve-out.

### 5. One hairline-card rhythm is used for almost every section

**What’s wrong.** Selected case studies, Insights, the “principles” strip and the Price Tablet all resolve to the same move: a heading, a “See all →” text link, three equal columns with top and bottom hairlines, a trailing arrow. Process is the same idea in four. (UX-CRITIQUE 2 describes this as a conversion and memory failure. The visual cost is that the page has no chapters — only a stacked component library.)

**Why it hurts.** Rhythm is how a site feels designed. When every band is the same width, the same gap and the same chrome, the eye stops expecting anything, and the template looks generated from one card molecule.

**Fix.** Principle 3. Each signature section has its own structure: a centred pine Briefing, a ledger of uneven rows, a single white rate sheet, a process spine, a pine closing band continuous with the footer. Insights may be a quieter list, not a third copy of the ledger. White cards, 12px radius, soft shadow — used where a card earns its place, not on every block. Variable section spacing.

### 6. Case and insight cards look empty — and have no no-image treatment

**What’s wrong.** Each case card is a sector/year line, a Sample chip, a name, a prefixed result, then a tall vacant middle with a lone arrow. There are no photographs (acceptable: images are optional) and nothing designed in their place (not acceptable). Kindred, Holloway and Eastport all get this void. Insights repeat it at a slightly shorter height. (UX-CRITIQUE 3.)

**Why it hurts.** For a consultant audience that often has no project photography, this is the product’s everyday state. A tall empty card says “missing asset,” not “text-first and proud.” It is also the opposite of premium whitespace, which frames something.

**Fix.** The Case Ledger is rows, not empty frames. Each row is complete as type: pine waymark, client, one-line result, uppercase meta. If a still exists, it sits on the right in a white 3:2 card. If it does not — Kindred ships this way — the Folio (pine sans initial on a white card) fills the character role, or the text uses the full row. No vacant middle, no floating arrow. Principle 1; Settled item 4.

### 7. The Sample chips are doing the job of a brand colour, and they cheapen every surface they sit on

**What’s wrong.** Yellow “Sample” is on the hero, every case, every insight, every package and every FAQ question. It is the only saturated colour, so it becomes the identity. Builder captions sit on the public page. (UX-CRITIQUE 4 owns the honesty and trust argument. The visual argument is this: the chip is both the loudest and the shabbiest thing in view.)

**Why it hurts.** A buyer looking at a skala.design preview should see a studio, not a scaffold. The chips would also fight the pine we are about to add.

**Fix.** No Sample badges, no prefixes, no builder captions. One footer disclosure, quiet, cream-muted on pine: “Northway is a demonstration studio that ships with this template.” Principle 4. Pending confirmation of the badge-rule change, as in CONVERSION.md.

### 8. Spacing is even and sparse, not generous

**What’s wrong.** Padding feels like a single token applied everywhere. The studio block is a particular failure: two sentences in a large empty band that does not frame a crop, a rule, or a pull-quote — it just stops. This is not generous hero-top; it is leftover space around thin content. (UX-CRITIQUE 8.)

**Why it hurts.** Premium whitespace is a crop. Empty whitespace is a missing component. Buyers can tell the difference immediately. Eden’s calm is generous because it frames large type and a clear object, not because it is empty.

**Fix.** Variable section spacing (80 / 120 / 176), with 192 at the top of the Briefing so the result clears the 68px nav. The studio short sits on a white card or a light-grey chapter with a waymark, or it is omitted. The peeking case card gives the Briefing a designed bottom edge.

### 9. Process is a numbered four-column strip — a named tell

**What’s wrong.** “How a project runs.” 01, 02, 03, 04, equal columns, Intro / Plan / Strategy / Handover, a builder caption. (UX-CRITIQUE 11 covers the content; the visual is the textbook AI-template process.)

**Why it hurts.** It signals “generated agency homepage” as clearly as a mesh gradient. It also pretends all four steps are equal, so nothing is memorable.

**Fix.** The Process Path: a spine of pine waymarks, uneven widths, Strategy given more room, a short specific outcome per step, no decorative icons, no 01–04 badges. A Bricolage index (“1”–“4”) aligned to the waymark is allowed. Principle 3 and 5.

### 10. Pricing has the best content on the page, dressed as a SaaS card row

**What’s wrong.** The figures ($8,000 / 6 weeks, $16,000 / 10 weeks, $28,000 / 14 weeks) are the strongest type in the screenshot, and the work is real. The surface is three pale equal cards, Sample chips on all three, a “Typical” chip on Grow, and three identical outline pills, all “Start a project.” (UX-CRITIQUE 10.)

**Why it hurts.** Visible fixed pricing is a selling point of this template. Presenting it as a mid-2010s SaaS plan-picker undercuts both premium and conversion: three equal primaries make the ask hesitate, and the card chrome looks rented. Adopting Eden’s rounded white cards must not mean walking this back into three plan-tiles.

**Fix.** The Price Tablet is **one** white rate sheet, 12px radius, soft shadow, on light grey. Name, sentences, weeks, price, tax note. Grow has a 4px pine rule and the word **TYPICAL** in uppercase meta, once — not a chip, not colour alone. One pine primary, on the Grow row, to `/contact?service=grow`. BRAND-V2, Price Tablet.

### 11. Two black slabs close the page, and neither is a brand moment

**What’s wrong.** A full-bleed black band (“Ready to start a project?”) sits directly on a black footer. They collapse into one dark block. The band is, as UX Lead says, the cleanest moment on the page — and it is still the default “inverse CTA + inverse footer” of a thousand kits, with no colour, no display voice and no device.

**Why it hurts.** The last thing a visitor sees should be ownable. Two stacked black bands waste the only large colour field we have.

**Fix.** One **continuous pine close**: the Pine Band (grain, Bricolage cream heading, one white pill with pine text) and a quieter footer on the **same** `#1F3A2E`, cream-muted disclosure, a cream hairline between them. Not a second near-black, and not a light footer that throws the close away. Principle 5.

### 12. Icons and arrows are a default set, used as decoration

**What’s wrong.** Trailing arrows on “See all” links, on every card, on both hero pills, on the closing CTA; plus icons on accordion rows. The drawing style is the familiar Lucide/scaffold stroke that currently reads as “generated UI.”

**Why it hurts.** Icon-on-everything is in the tell table. Eden’s floating tool icons are a related trap: we will not “fix” this by orbiting Phosphor marks around the result.

**Fix.** Phosphor Regular, 24px, one set, only where an icon has a job: menu, close, accordion, form states, pager. “See all case studies” is a text link. Proof chips, if used, carry words and figures, not logos. No emoji.

### 13. The “principles” strip pretends to be proof, and looks like a feature grid

**What’s wrong.** A paler band with three equal lines — “Fixed price. Set timeline. A result we agree before we start.” — captioned “Sample principles, editable.” Visually it is the three-benefit icon row, minus the icons. (UX-CRITIQUE 6 covers the honesty failure.)

**Why it hurts.** It occupies a proof slot with studio marketing, at the same rhythm as the cases, so the work above it is flattened into “another row of three.”

**Fix.** Remove it from Home. Honest proof is the Kindred result, a ledger outcome, a named quote, or a story-figure chip. Studio principles may live on About.

### 14. The wordmark and footer are template defaults

**What’s wrong.** “Northway” is plain sans at nav size, with no mark and no relationship to a display face. The footer is a standard four-group inverse utility: name, slogan, email, nav, legal, copyright — no disclosure, no waymark, no relationship to a brand colour.

**Why it hurts.** The first and last chrome a visitor sees should belong to this kit.

**Fix.** Wordmark: Hanken or Bricolage 500, tracking −0.02em, a 3×16 pine waymark to the left; cream on the green Briefing, ink on light. Footer: the lower part of the continuous pine close, disclosure in cream-muted caption, the old slogan as a promise at lead size, legal in cream-muted. Hide empty phone and social lines.

---

## What we would keep

Not everything in the screenshot is wrong, and the rebuild should not throw the IA away.

- The page list, the nav labels (Case studies, Services, About, Insights, Contact) and the Home section order are right.
- Visible prices, weeks, the tax note, and a mid package marked as typical — the content of the Price Tablet is a strength. It needs a new surface, not new figures.
- Case names, sectors and the writing under the Sample wrappers are often already good. They need to be let out of the badges and into the large type.
- One closing ask, one label, “Start a project,” is the correct last action. It should live on the Pine Band as a white pill, not on a black slab.
- Light theme as the base, sticky quiet nav, 44px targets, and the refusal of mesh, neon and fake logo walls were the right constraints. Green is a band, not a new dark theme.

---

## Mapping to signature moments

UX Lead names four sections that need a signature moment (UX-CRITIQUE, Signature moments). We treat six. Visual treatment is in BRAND-V2, now Eden-aligned.

| Section | What Codex v1 did | What replaces it |
|---|---|---|
| The Briefing | Slogan at display, result in a disclaimed sidebar, two pills, grey ground | Centred pine band, result at display scale in cream, one white pill, from-price in the cluster, peeking Folio |
| The Case Ledger | Three empty equal cards | Text-first uneven rows; Folio (pine sans initial) when there is no still |
| The Price Tablet | Three SaaS cards, three equal CTAs | One white rate sheet; pine rule and “TYPICAL” on Grow; one primary |
| The Process Path | 01–04 equal columns | Pine waymark spine, uneven widths, a specific outcome per step |
| The Enquiry Sheet | (not in this screenshot) | A white letter-card, pine edge, reply-time above the fields |
| The Pine Band | Black slab on a black footer | Continuous pine close, grain, one white pill, quieter footer, one disclosure |
