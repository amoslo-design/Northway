The v2 build still looked AI-generated. v3 fixes are in v2/DECISIONS-V2.md (section "v3 decisions"), v2/design/CRITIQUE-V2.md and v2/docs/UX-CRITIQUE-V2.md, which override earlier docs. Key change: white #FFFFFF canvas with #E8E8E4 elevated surfaces, no numbering, no monogram.

# Northway

Northway is Skala Design Studio's first sellable website template, to be listed on [skala.design](https://skala.design). One name is used as both the product name and the fictional demo studio inside the kit.

The demo is a small **strategy and growth consultancy**: positioning, brand strategy and marketing. Buyers are **consultants, strategists and small non-design agencies** who need a calm, premium site and cannot design one themselves. They replace the Sample name and content with their own after purchase.

This repository holds the full brief for Codex and Gemini to build the site this week: the plan, the spec, the demo copy, and the delivered design system. It does not yet contain the Next.js app. Agents should start from [AGENTS.md](AGENTS.md).

## Who it is for

- Consultants and strategists who sell positioning, brand strategy or growth work.
- Small non-design agencies (marketing, development, architecture and interior, copywriting), usually a team of one to ten.
- Not aimed first at designers who want to build their own site. They may still buy it; they are not the primary buyer.

## Editions and week-one scope

Prices on skala.design, confirmed by Amos:

| Edition | Price | When |
| --- | --- | --- |
| Code (Next.js) | $149 | **Week one.** This is the ship target. |
| Code plus Figma | $199 | Later, matching the same IA. |
| Code plus Figma plus Framer | $249 | Later, then a possible Framer Marketplace listing. |

Amos locked week one as the **Code edition only**, on 12 November 2026, Europe/Stockholm. Figma and Framer come after a complete, sellable Code kit.

v1 is light theme only. Enquiries go through a form. A calendar slot appears only if a URL is set (the demo has none).

## Locked shape, in brief

- Routes: `/`, `/case-studies`, `/case-studies/[slug]`, `/services`, `/about`, `/insights`, `/insights/[slug]`, `/contact`, legal pages, 404. `/work` 301s to `/case-studies`.
- The work-index label defaults to "Case studies" and is editable in settings.
- Case pages are text-first: Outcome, Challenge, Approach, Results, optional images.
- Case cards work without images (typographic fallback). The Kindred demo card has no image.
- Insights is a primary nav item and a Home section, hidden when there are no posts.
- The Home hero leads with a result or a quote, then a short heading and lede. No empty image frame.
- Demo packages: Position ($8,000, 6 weeks), Grow ($16,000, 10 weeks, Typical), Brand + growth ($28,000, 14 weeks).

Full decisions: [docs/decisions.md](docs/decisions.md). Full plan: [docs/plan.md](docs/plan.md). Full spec: [docs/spec.md](docs/spec.md).

## Design

The visual system is delivered and should be used as-is.

- Guide: [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md)
- Tokens (W3C DTCG source of truth): [design/tokens/tokens.json](design/tokens/tokens.json)
- Generated CSS: [design/tokens/tokens.css](design/tokens/tokens.css), [design/tokens/theme.css](design/tokens/theme.css) (rebuild with `python design/tokens/build.py`)
- Typeface: **Hanken Grotesk**, SIL Open Font Licence 1.1, weights 400 / 400 italic / 500 / 600
- Canvas: `#DBDBD8`. Accent: black (ink). Light only.
- Icons: Lucide
- Reference board: [design/REFERENCE-BOARD.md](design/REFERENCE-BOARD.md), shots in [design/references/shots](design/references/shots) and [design/shots](design/shots)
- Figma: [https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3](https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3) (rename the file title to "Northway - Design System" if it still has an older title)

Do not use Inter or Skala Blue as the template brand. Those were placeholders in an earlier UX draft.

## Docs in this repo

| Doc | Contents |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Instructions for Codex and Gemini: stack, rules, week order, definition of done. |
| [docs/plan.md](docs/plan.md) | UX Lead plan: sitemap, page structure, components, content model, journeys, day-by-day week. |
| [docs/spec.md](docs/spec.md) | Build-ready spec (binding). |
| [docs/proposal.md](docs/proposal.md) | Adopted proposal and token-name lists. |
| [docs/decisions.md](docs/decisions.md) | Locked and open decisions. |
| [docs/content.md](docs/content.md) | All Sample demo copy. |
| [docs/research.md](docs/research.md) | Short research notes, including a pricing caveat. |

Source Pages (same content, original form):

- [Spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51)
- [Proposal](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6)
- [Design system](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/f7648149-6819-443e-9e42-9fc3fb1fa889)
- [Reference board](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/d0689ec8-f43e-4bcb-8cdc-b05fc3a408f6)

## How to start

Until the Next.js app is in this repo:

1. Read [AGENTS.md](AGENTS.md) and [docs/plan.md](docs/plan.md).
2. Build the Code edition from the spec, the content file and the tokens.
3. When the app exists, this section should be updated to: clone, `npm ci`, copy `.env.example`, `npm run dev`, then how to edit `/content` and how to replace Sample records.

Intended stack: Next.js 15 App Router, TypeScript, Tailwind v4 (`@theme` from the tokens), framer-motion, Lucide, Hanken Grotesk. Env: `SITE_URL`, `FORM_ENDPOINT`.

## Licence

The template's sale licence (single-site in v1) will be stated on skala.design. Hanken Grotesk remains under the SIL Open Font Licence 1.1. Demo content is fictional Sample and is not real client work.
