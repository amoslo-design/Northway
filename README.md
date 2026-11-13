The approved v2 design direction lives in `v2/`. Read `v2/CODEX-BRIEF.md` and `v2/DECISIONS-V2.md` first; they override the earlier visual direction.

# Northway

Northway is Skala Design Studio's first sellable website template, to be listed on [skala.design](https://skala.design). One name is used as both the product name and the fictional demo studio inside the kit.

The demo is a small **strategy and growth consultancy**: positioning, brand strategy and marketing. Buyers are **consultants, strategists and small non-design agencies** who need a calm, premium site and cannot design one themselves. They replace the fictional studio content with their own after purchase.

This repository holds the brief, demo copy, delivered design system, atomic components and the assembled homepage. Home is available at `/`, with the component library at `/components`. Basic supporting views make the homepage's case, article, service, studio and contact links usable. These views are a starting point for the next page-design pass, not the completed sellable kit. Agents should start from [AGENTS.md](AGENTS.md).

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
- The Briefing leads with a result as the H1, or a named quote, with an approved heading fallback. A Folio replaces a missing photograph.
- Demo packages: Position ($8,000, 6 weeks), Grow ($16,000, 10 weeks, Typical), Brand + growth ($28,000, 14 weeks).

Full decisions: [docs/decisions.md](docs/decisions.md). Full plan: [docs/plan.md](docs/plan.md). Full spec: [docs/spec.md](docs/spec.md).

## Design

The approved v2 visual system is implemented in the existing token source. Read `v2/DECISIONS-V2.md`, `v2/design/BRAND-V2.md` and `v2/docs/CONVERSION.md` before historical v1 notes.

- Guide: [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md)
- Tokens (W3C DTCG source of truth): [design/tokens/tokens.json](design/tokens/tokens.json)
- Generated CSS: [design/tokens/tokens.css](design/tokens/tokens.css), [design/tokens/theme.css](design/tokens/theme.css) (rebuild with `python design/tokens/build.py`)
- Typefaces: **Bricolage Grotesque** 500/600 for display; **Hanken Grotesk** 400 / 400 italic / 500 / 600 for body and UI. Both OFL licences ship in `public/fonts`.
- Canvas: `#F2F2EF`, white cards and chapters, pine `#1F3A2E` bands, cream type on green. Light base.
- Icons: Phosphor Regular, used for controls and status.
- Reference board: [design/REFERENCE-BOARD.md](design/REFERENCE-BOARD.md), shots in [design/references/shots](design/references/shots) and [design/shots](design/shots)
- Figma: [https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3](https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3) (rename the file title to "Northway - Design System" if it still has an older title)

V2 replaces the old warm-grey, ink-accent, Hanken-only direction. Empty Home teasers hide; fictional content is disclosed once in the footer.

## Docs in this repo

| Doc | Contents |
| --- | --- |
| [AGENTS.md](AGENTS.md) | Instructions for Codex and Gemini: stack, rules, week order, definition of done. |
| [docs/plan.md](docs/plan.md) | UX Lead plan: sitemap, page structure, components, content model, journeys, day-by-day week. |
| [docs/spec.md](docs/spec.md) | Build-ready spec (binding). |
| [docs/proposal.md](docs/proposal.md) | Adopted proposal and token-name lists. |
| [docs/decisions.md](docs/decisions.md) | Locked and open decisions. |
| [docs/content.md](docs/content.md) | All Sample demo copy. |
| [docs/homepage-copy.md](docs/homepage-copy.md) | Homepage copy draft in reading order, with link destinations and copy states for the first components. |
| [docs/voice-and-microcopy.md](docs/voice-and-microcopy.md) | Studio voice, action labels, form feedback and the build sequence from atoms to pages. |
| [docs/components.md](docs/components.md) | First components, usage, preview behaviour and validation commands. |
| [docs/research.md](docs/research.md) | Short research notes, including a pricing caveat. |

Source Pages (same content, original form):

- [Spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51)
- [Proposal](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6)
- [Design system](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/f7648149-6819-443e-9e42-9fc3fb1fa889)
- [Reference board](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/d0689ec8-f43e-4bcb-8cdc-b05fc3a408f6)

## How to start

Use Node.js 22 or newer.

```bash
npm ci
npm run dev -- --port 3001
```

Open [the homepage](http://127.0.0.1:3001/) or [the component library](http://127.0.0.1:3001/components). Port 3001 avoids the separate Skala development server on port 3000. The demo is marked noindex. The library's links jump between examples; the homepage's links open the corresponding content views.

```bash
npm run lint
npm run typecheck
npm run build
npm test
```

Browser checks use installed Google Chrome. On a machine without Chrome, run `npx playwright install chrome` before `npm test`.

The app uses Next.js 15, TypeScript, React 19, Tailwind v4, Phosphor and self-hosted Bricolage Grotesque/Hanken Grotesk. The fonts come from Fontsource and needs no Google Fonts connection at build time. Motion is limited to control feedback and a loading spinner, with reduced motion supported in CSS. Framer Motion is reserved for later sections that need it.

The original tokens remain the source of truth. Run `npm run tokens` after changing `design/tokens/tokens.json`. Components use semantic and component tokens only. A few spacing aliases, a hairline alias and preview layout widths were added for the component library.

The homepage follows v2: Briefing, Case Ledger, Insights, Price Tablet, Process Path, Studio short, FAQ, Pine Band and continuous footer. It uses the existing atoms plus Nav, Footer, Hero, CaseCard, PostCard, ServiceCard, Process, FAQ and CTA components. Missing cases omit the Home ledger and peek. The index retains an honest empty. Missing posts hide Insights in the page, navigation and footer. `showPrices` hides every price figure. Hero content falls back from result to attributed quote to heading and lede.

Edit studio settings in `content/settings.json`. Projects, posts, services, FAQs and team members are Markdown files in their own `content` folders. Their front matter is a JSON object between `---` lines, followed by optional body paragraphs. Keep the existing field names. The parser deliberately accepts this small, explicit format without a CMS dependency. Project dates are fictional sorting values within the supplied sample years. Internal sample flags support launch checks. The public site has one footer disclosure, with no per-item badges or prefixes. No project imagery is supplied or invented.

The homepage copy is in `docs/homepage-copy.md`; voice and UI messages are in `docs/voice-and-microcopy.md`. Supporting views use the existing demo content. The Services comparison and About team use the same content. Full index filtering and pagers remain future enhancements. `LAUNCH.md` lists the fictional records to replace before a public launch.

The contact form preselects a package from `?service=position|grow|brand`, validates four visible fields and retains values after errors. In development, a valid submission simulates success. In production, set `FORM_ENDPOINT` in the environment to receive POST JSON `{ name, email, service, message }`. Without it, the form clearly reports that delivery could not be confirmed and offers the email link; it does not pretend to send. `SITE_URL` is reserved for deployment metadata. No calendar appears while its URL is empty.

Homepage browser checks cover section order, internal destinations, unknown-slug 404s, `/work` 301s, FAQ keyboard use, mobile focus trapping and restoration, responsive overflow, accessibility and form error recovery. The component checks remain in place.

Next.js 15's nested PostCSS is overridden to the patched direct PostCSS dependency. The TypeScript ESLint packages are kept on the compatible 8.x line to avoid older transitive versions from the Next.js lint config. These choices are recorded in `package.json` and the lockfile.

## Licence

The template's sale licence (single-site in v1) will be stated on skala.design. Hanken Grotesk and Bricolage Grotesque remain under the SIL Open Font Licence 1.1, with licence files in `public/fonts`. Demo content is fictional Sample and is not real client work.

The v2 execution plan and verification record are in `docs/IMPLEMENTATION-V2.md`. Run `python3 scripts/check-contrast.py` for the token contrast checks. `npm test` runs server-rendered content-state tests and browser checks. Grain is a local static SVG at 6% opacity; reduced-data, Save-Data, print and forced-colour modes omit it.
