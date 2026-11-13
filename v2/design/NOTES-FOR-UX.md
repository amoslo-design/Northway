# Notes for UX Lead — Northway v2 visual direction

Updated 13 November 2026, Europe/Stockholm, to the **chosen Eden direction**: green, white and light grey, with a handsome sans-serif. The previous note (result-first on warm paper, Newsreader, copper Folio, left-weighted 7+5 split) is superseded in its *visuals*. Conversion settlements stay: the result is the display lead, the old slogan moves to the footer, the from-price sits in the first-view CTA cluster, Kindred works with no photograph, `/case-studies` gets an honest empty, story figures only.

Full values, contrast and tokens: [`BRAND-V2.md`](BRAND-V2.md). Please read the **Eden reference notes** and the **CONVERSION.md impacts** sections there. A short impacts list is repeated at the end of this note.

Proposal only. Studio voice. Demo studio is Northway, fully written, no Sample badges.

**Direction, in brief:** Pine `#1F3A2E` (Eden’s forest green), white, light grey `#F2F2EF`. Cream-white sans headlines on grained green bands (the Briefing and the Pine Band). **Bricolage Grotesque** for display (alternative: Mona Sans); **Hanken Grotesk** for body, 18 / 1.55. Copper, oxblood, warm paper and the display serif are dropped.

---

## Hero concept — the Briefing (revised)

The first viewport is a **centred pine band**, full bleed, 6% grain — the Eden adoption — **not** a left-weighted 7+5 split. It must still lead with the result and show the from-price.

- **Centre, on pine.** Optional tracked uppercase attribution, cream-muted, 13 / 0.10em: **KINDRED CLINIC  ·  HEALTH  ·  2025** (factual meta, not a marketing eyebrow). Then the Kindred **result** in Bricolage 600 at 56 / 64, cream `#F7F7F4`, two or three lines, a centred measure: **“Patients knew who the clinic was for, and booked a first visit from the site.”** This is the first large type. Then the Hanken lede at 20 / 1.45, cream-muted, about 36–42ch, centred: **“We are a strategy and growth consultancy. A clear position, a plan your team can run, and a price before you start.”** At most two still **proof chips** (story figures: “Six-week engagement,” “Two review rounds” — not a repeated from-price, not logos, not orbiting). **One** primary: a **white pill**, pine text, **Start a project** → `/contact`. In the same cluster, when `showPrices` is on: **From $8,000.** at Hanken 500 / 16px / cream (11.49:1), text-linked to `#price-tablet`, plus the tax note in cream-muted caption. Not a second pill.
- **At the foot.** Kindred’s **peeking case card** — a Folio, because Kindred ships with no photograph: white card, 12px radius, soft shadow, overlapping the next light-grey section, a large Bricolage “K” in pine, result, meta, optional quote. No empty frame, no product screenshot. When a featured case has a still, the photograph sits in that card instead.
- **No** second pill, **no** three-card row, **no** Sample chip, **no** app-icon cloud. The old slogan, **“Work that earns the next project.”**, stays in the footer. Fallback H1, only when result and quote are empty: **“A clear offer, a plan your team can run, a price before you start.”**
- **Nav CTA.** On the green band: quiet cream text. After the band scrolls away: the pine pill appears in a light nav. One primary in view.
- On mobile: the same stack; peeking card still in the first one-and-a-half screens.

The tracked uppercase attribution is a sans expressive moment we want to keep. It conflicts with CONVERSION’s “MUST NOT. Eyebrow labels.” We are asking for a carve-out: allow this factual meta; keep forbidding marketing eyebrows above section headings. See impacts below.

---

## Type scale

**Pairing:** [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) (SIL OFL) for `font.display` and `font.meta`. [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) (SIL OFL) for `font.body` and `font.ui`. Alternative display: [Mona Sans](https://fonts.google.com/specimen/Mona+Sans). **No serif.**

Weights loaded: Bricolage 500 and 600; Hanken 400, 400 italic, 500, 600.

| Style | Mobile | Tablet 768 | Desktop 1024 | Wide 1280 | Family / weight | Tracking | Leading |
|---|---|---|---|---|---|---|---|
| Display (result) | 36–40 clamp / 1.12 | 48 / 1.10 | **56 / 1.08** | **64 / 1.06** | Bricolage 600 | −0.03em | as shown |
| Display (short, ≤10 words) | 40 clamp / 1.10 | 56 / 1.08 | 68 / 1.06 | 80 / 1.04 | Bricolage 500 | −0.03em | |
| Heading 1 | 32 / 1.18 | 40 / 1.14 | 48 / 1.12 | 52 / 1.10 | Bricolage 500 | −0.02em | |
| Heading 2 | 24 / 1.25 | 28 / 1.22 | 32 / 1.20 | 32 / 1.20 | Hanken 500 | −0.015em | |
| Heading 3 | 20 / 1.30 | 22 / 1.28 | 24 / 1.28 | 24 / 1.28 | Hanken 500 | −0.01em | |
| Lead | 18 / 1.45 | 18 / 1.45 | 20 / 1.45 | 20 / 1.45 | Hanken 400 | 0 | |
| Quote | 20 / 1.40 | 22 / 1.38 | 24 / 1.35 | 24 / 1.35 | Hanken 400 italic | 0 | |
| Body | **18 / 1.55** at every breakpoint | same | same | same | Hanken 400 | 0 | locked |
| **Meta / eyebrow** | **12 / 1.30 / 0.10em**, uppercase | same | **13 / 1.30 / 0.10em** | same | Bricolage 500 | | |
| Label | 13 / 1.35 / 0.04em | same | same | same | Hanken 500 | | |
| Caption | 14 / 1.40 / 0.01em | same | same | same | Hanken 400 | | |
| From-price | 16 / 1.4 | same | same | same | Hanken 500 | 0 | cream on pine |
| Button | 16 / 1, optically centred in 44 (md) or 52 (lg) | same | same | same | Hanken 500 | 0 | |

---

## Signature components — still 1:1 with your names

Visuals updated; structure and behaviour remain yours.

1. **The Briefing** — as above. Centred pine band, result at display scale, white pill, from-price in the cluster, peeking Folio.
2. **The Case Ledger** — text-first uneven rows. Pine waymark, result, uppercase meta. Folio (pine sans initial on a white card) or full-width text when there is no still; 3:2 still in a white card when there is. Four fully written cases. “See all case studies” is a text link. Empty Home teaser omitted; `/case-studies` with zero projects gets a short honest empty on a white card, never a fake grid, and not a redirect.
3. **The Price Tablet** — one white rate sheet (12px, soft shadow), not three SaaS cards. Grow carries a pine rule **and** **TYPICAL**, once — not a chip, not colour alone. One pine primary, on the Grow row, to `/contact?service=grow`. Your figures and copy.
4. **The Enquiry Sheet** — a white letter-card, pine left edge. Reply-time above the fields. Four fields, **Send the brief.** Direct email beside or under.
5. **The Process Path** — four steps (Intro, Plan, Strategy, Handover), your outcomes, a pine waymark spine, uneven widths (Strategy gets more room). No 01–04 equal columns.
6. **The Pine Band** — pine, 6% grain, continuous with the footer on the **same** green. Bricolage cream heading, **one white pill** with pine text. Footer is quieter (cream-muted disclosure: “Northway is a demonstration studio that ships with this template.”), not a second black or near-black slab.

The **Waymark** is a pine (cream on green) 4px bar with a 4px north cut — no copper. The **Folio** is the no-image treatment, sans and pine, no serif initial.

---

## CONVERSION.md impacts (please update your wording)

We do not believe we fight a behaviour MUST, except that we need a carve-out on eyebrows. Full write-up: BRAND-V2, “CONVERSION.md impacts.”

1. **Eyebrow MUST NOT.** Please allow a tracked uppercase **attribution / meta** line (Briefing attribution, sector/year, “Typical”). Keep forbidding marketing eyebrows (“NEW WORK,” “WHAT WE DO”) above section headings. This is a deliberate Eden adoption and our sans expressive moment. The result remains the first large type.
2. **Briefing layout.** Please describe the Briefing as a **centred pine band** with a peeking case card, not as the earlier 7+5 split. Result-first, from-price in the CTA cluster, one primary, no-photo Folio — all still true.
3. **CTA colour (FYI, visual).** White pill / pine text on green; pine pill / cream text on light.
4. **Footer on inverse (FYI).** Inverse is the same pine as the Pine Band; one continuous green close. Disclosure and nav mirror still live in the footer.
5. **Stale visual names.** Newsreader, copper and “paper surfaces” in your Designer-first and Open lines can be updated to Bricolage (or Mona), pine, and white cards. Body 18 / 1.55 is unchanged.

Everything else — one primary, published prices, Grow’s non-colour cue, text-first cases, optional images, four-field form, story figures, page list, Sample-badge proposal — is unchanged.

— Designer
