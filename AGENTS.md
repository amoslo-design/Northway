The v2 build still looked AI-generated. v3 fixes are in v2/DECISIONS-V2.md (section "v3 decisions"), v2/design/CRITIQUE-V2.md and v2/docs/UX-CRITIQUE-V2.md, which override earlier docs. Key change: white #FFFFFF canvas with #E8E8E4 elevated surfaces, no numbering, no monogram.

# AGENTS.md

Instructions for Codex and Gemini (and any other agent) building the Northway website template this week. Read this file first, then follow the docs it points to. Do not wait for Amos, Designer or UX Lead, and do not ask clarifying questions that block the build. If something is still open, use the working assumption in [docs/decisions.md](docs/decisions.md) or [docs/spec.md](docs/spec.md), pick the calmer and more accessible option, and note it in the README.

## What you are building

**Northway** is Skala Design Studio's first sellable website template. It will be listed on skala.design. One name is used as both the product name and the fictional demo studio.

The demo is a small strategy and growth consultancy (positioning, brand strategy, marketing). Buyers are consultants, strategists and small non-design agencies who cannot design a premium site themselves. They swap the name and the content after they buy.

**Week-one deliverable is the Code edition only** ($149). Amos locked this on 12 November 2026, Europe/Stockholm. Ship a complete, sellable Next.js kit. The Figma file ($199) and the Framer remix ($249) come later and are out of week-one scope unless the Code kit is already done and Amos asks for them.

This repository starts as docs, tokens and references. Your job is to build the site from them.

## Read these, in this order

1. This file.
2. [docs/plan.md](docs/plan.md) - sitemap, sections, journeys, day-by-day week plan.
3. [docs/spec.md](docs/spec.md) - the binding build spec (pages, CMS fields, components, motion, accessibility, acceptance).
4. [docs/content.md](docs/content.md) - all demo copy. Use it. Do not invent clients, results, logos or quotes.
5. [docs/decisions.md](docs/decisions.md) - locked decisions and working assumptions.
6. [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md) and [design/tokens/](design/tokens/) - visual system. `tokens/tokens.json` is the source of truth for values.
7. [docs/proposal.md](docs/proposal.md) and [docs/research.md](docs/research.md) if you need the "why". Where they disagree with the spec, follow the spec.

Figma (reference, not a week-one deliverable): [https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3](https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3).

## Stack

- **Next.js 15**, App Router, TypeScript.
- **Tailwind CSS v4**, with `@theme` driven by the delivered tokens. Start from [design/tokens/theme.css](design/tokens/theme.css) and [design/tokens/tokens.css](design/tokens/tokens.css). Rebuild from [design/tokens/tokens.json](design/tokens/tokens.json) with `python design/tokens/build.py`. Do not edit the generated CSS by hand.
- **framer-motion** for the allowed motion only.
- **Lucide** for icons.
- **Hanken Grotesk** (SIL Open Font Licence 1.1) via a proper font load (for example `next/font` or a CSS import from Google Fonts). Weights 400, 400 italic, 500, 600.
- No trailing slashes. `next/image` for images (width and height required).
- Content: `/content` (`settings.json` plus MDX or typed Markdown for collections), same field names as the spec. No headless CMS in week one.
- Env: `SITE_URL`, `FORM_ENDPOINT`. Ship `.env.example`.

Recommended app scripts: `npm ci`, lint, `tsc`, and a production build that must pass.

## Rules

1. **Tokens only.** Bind components to semantic or component token names. Never hardcode colours, font families, or raw spacing in component source. Never use Inter or Skala Blue `#1F4FE0` / Navy `#0B1B3F` as the template brand. Those were placeholders. The delivered brand is Hanken Grotesk, canvas `#DBDBD8`, ink, and a black accent.

2. **Light theme only** in v1. Inverse and brand-band are section-level, not a sitewide dark mode.

3. **No em dashes** in any shipped copy or in docs you add. Use a comma, a colon, a period or a hyphen.

4. **Voice.** Studio "we", international English, short and clear. No founder name, no personal brand, no eyebrow labels, no AI-looking decoration (no mesh, neon, scribbles, autoplay, fake avatars, placeholder logos, invented metrics).

5. **Sample is labelled.** Every demo record has a Sample badge or a Sample line. Sample results start with "Sample result, for demo only". The Kindred hero result and case follow this.

6. **Never invent proof.** If a field is empty, omit the block or use the designed empty state. Do not fill with lorem.

7. **The five structural decisions are locked.** Text-first case pages (Outcome, Challenge, Approach, Results, optional images). Cards work without images (Kindred has none). `settings.workLabel` defaults to "Case studies"; routes are `/case-studies` and `/case-studies/[slug]`; `/work` 301s. Insights is a primary nav item and Home section 3, omitted when there are no posts. The Home hero leads with a result or quote, then H1 and lede; no empty image frame.

8. **Accessibility.** WCAG 2.2 AA on every shipped page, including inverse and brand bands. 44px minimum targets (52px for large buttons). Visible `:focus-visible` rings, never removed. Labels on fields, never placeholder-only. Skip link. Keyboard-complete form and nav.

9. **Motion.** Small, or still. Final pose in the server HTML on Home, Case studies, Services and a case page, not only after hydration. Accordion does not animate height. Under `prefers-reduced-motion`: instant, 0ms, no slide, no hover translate.

10. **Performance.** No numeric Lighthouse performance target is set for week one. Still: explicit image dimensions, no autoplay video, no viewport-filling wordmarks, sensible font loading. Do not spend the week chasing a performance score at the expense of the kit.

11. **Enquiry is the form.** Four visible fields: name, email, service, optional message. Calendar hides when `calendarUrl` is empty (it is empty in the demo).

12. **showPrices.** One switch hides every price and from-figure, including the hero and the comparison-table price row. Typical scenarios and weeks stay.

13. **Do not advertise Skala** on the buyer's public site. Footer credit exists but ships off. Implementation and custom-work offers are out of this repo.

14. **Do not rename the product.** It is Northway, not any earlier working name. Do not leave those names in code, copy, comments or commits.

## One-week build order

Follow [docs/plan.md](docs/plan.md) section 7. In short:

- **Days 1-2.** Scaffold, tokens, chrome, settings, content model, routes (including `/work` 301s and 404).
- **Days 3-4.** Home (hero fallbacks, Insights omit-when-empty), Case studies index (typographic cards), text-first case page, Services (price on and off).
- **Day 5.** About, Insights, Contact form contract, legal, 404, every empty state.
- **Day 6.** Accessibility, reduced motion, `showPrices`, Sample badges, README, `LAUNCH.md`, QA.
- **Day 7.** Fix pass, launch checklist, pack the Code edition.

Do not start Figma or Framer until the Code kit meets the definition of done, and only if asked.

## Definition of done (week one)

Taken from the spec's launch acceptance. The Code edition is done when all of these are true:

- [ ] `npm ci`, lint, `tsc` and the production build pass.
- [ ] Semantic tokens only. Hanken Grotesk and the delivered palette are in use. No Inter, no Skala Blue, no raw hex in components.
- [ ] Every route in the spec renders, including 404 for unknown slugs. `/work` and `/work/[slug]` 301 to `/case-studies` and `/case-studies/[slug]`.
- [ ] `showPrices` false hides every price and from-figure, and the comparison price row, without a layout break.
- [ ] Empty Projects, Posts, Team, Testimonials and FAQ groups produce the specified empty or hidden behaviour, with no lorem or fake proof.
- [ ] Nav label uses `workLabel` (default "Case studies") and points to `/case-studies`. Insights hides when there are no posts. Footer credit is off by default. Skip link works.
- [ ] Home hero leads with a result or quote when set, falls back to heading and lede when not, and never reserves an empty image frame.
- [ ] Case cards without an image use the typographic fallback (client, outcome line, tags) with no empty frame. Kindred ships this way. Case pages are text-first: Outcome, Challenge, Approach, Results, optional images.
- [ ] Contact form matches the four-field contract, pre-select, errors, success, and honeypot rules.
- [ ] 44px targets, 68px nav, 1280 content, 16/24/32 gutters, 66ch measure, section spacing 96/128, hero top 192 from 1024.
- [ ] Reduced-motion final pose is present in the server HTML on Home, Case studies, Services and a case page. Accordion does not animate height.
- [ ] WCAG 2.2 AA, Lighthouse accessibility and a manual keyboard pass on Home, a case, Services and Contact, mobile and desktop, with no serious issues. Contrast checked on inverse and brand bands.
- [ ] Sample badges are visible on demo records. `LAUNCH.md` lists every Sample item.
- [ ] README documents setup, content editing, `workLabel`, `FORM_ENDPOINT`, `SITE_URL`, how to swap tokens, and the Sample replace-before-launch list.

Figma and Framer are later. Their absence is not a week-one fail.

## Where each doc is

| File | What it is |
| --- | --- |
| [README.md](README.md) | What Northway is, who it is for, editions, links, how to start (update this as you build). |
| [AGENTS.md](AGENTS.md) | This file. |
| [docs/plan.md](docs/plan.md) | UX Lead plan: sitemap, sections, components, content model, journeys, week plan. |
| [docs/spec.md](docs/spec.md) | Full build-ready spec. Binding. |
| [docs/proposal.md](docs/proposal.md) | Adopted proposal: audience, IA argument, token-name lists. |
| [docs/decisions.md](docs/decisions.md) | Locked and open decisions. |
| [docs/content.md](docs/content.md) | All demo copy. |
| [docs/research.md](docs/research.md) | Short research notes, including the pricing caveat. |
| [design/DESIGN-SYSTEM.md](design/DESIGN-SYSTEM.md) | Visual system and atomic design. IA callouts at the top override any older anatomy in that file. |
| [design/tokens/](design/tokens/) | `tokens.json` (W3C DTCG source), `build.py`, generated `tokens.css` and `theme.css`. |
| [design/REFERENCE-BOARD.md](design/REFERENCE-BOARD.md) | Style-guide references, with shots in `design/references/shots/` and system shots in `design/shots/`. |

Pages (if you can open them): [spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51), [proposal](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6), [design system](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/f7648149-6819-443e-9e42-9fc3fb1fa889), [reference board](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/d0689ec8-f43e-4bcb-8cdc-b05fc3a408f6).
