> Current Home order: Briefing, Case Ledger, Insights, Price Tablet, Process Path, Studio short, FAQ, Pine Band, Footer. Empty teasers hide. The [approved v2 direction](../v2/DECISIONS-V2.md) overrides the v1 visual and badge notes below.

# Northway: week-one plan

UX Lead's plan for building the Northway template this week. Binding detail lives in [docs/spec.md](spec.md). Demo copy lives in [docs/content.md](content.md). Tokens and visual rules live in [design/DESIGN-SYSTEM.md](../design/DESIGN-SYSTEM.md). Decisions live in [docs/decisions.md](decisions.md). This file is the map: sitemap, sections, components, content model, journeys, scope, and a day-by-day build order.

**Week-one ship is the Code edition only** ($149). Amos confirmed this on 12 November 2026, Europe/Stockholm. Deliver a complete, sellable Next.js kit: every page in this plan, every component, the delivered tokens, `/content`, a setup README and `LAUNCH.md`. The Figma file ($199) and the Framer remix ($249) come later. Do not spend week one on those editions.

The five structural decisions are locked and already in the spec. Build them as specified, not as an afterthought.

---

## 1. Sitemap

**Pages**

- **Home** (`/`)
- **Case studies** (`/case-studies`) - public label from `settings.workLabel`, default "Case studies"
- **Case study** (`/case-studies/[slug]`)
- **Services** (`/services`)
- **About** (`/about`)
- **Insights** (`/insights`) - only a public nav item when published posts exist
- **Insight post** (`/insights/[slug]`)
- **Contact** (`/contact`) - form only in the demo
- **Privacy, Terms, Cookies** (`/privacy`, `/terms`, `/cookies`)
- **404** for unknown routes and unknown slugs

**Redirects (301)**

- `/work` to `/case-studies`
- `/work/[slug]` to `/case-studies/[slug]`

These old paths are not 404s.

**Links between pages**

- Nav from Home: Case studies, Services, About, Insights (if posts), Contact, plus the primary CTA "Start a project" to `/contact`
- Case studies index to each case; cases to Contact and to previous or next case
- Services cards and CTAs to `/contact?service={slug}` (pre-selects the form)
- Insights index to each post; posts have a quiet end CTA to Contact
- About CTA to Contact
- 404 recovers to Home, Case studies, Contact, and Start a project
- Empty Case studies state links to Services and Start a project

**Chrome**

- Desktop nav, 68px, sticky, solid canvas, one primary CTA. Current page uses weight 600 plus a 2px underline, not a filled bar.
- Mobile: 44px menu, simple overlay, CTA pinned, instant open under reduced motion.
- Footer on inverse tokens: studio name, one-line promise, nav mirror, email, legal. Hide empty contact lines. "Template by Skala" credit is drawn for both on and off, and ships off (`settings.showCredit = false`).

---

## 2. Page-by-page section structure

### Home (`/`)

Purpose: in under 10 seconds, say who Northway is for, the outcome, and the next step.

With cases and posts, section order is:

1. **Hero.** Reading order: result or quote first, then a short H1, lede, from-price, CTAs. Demo: Kindred Sample result, no hero image, H1 "Work that earns the next project." Primary: Start a project to `/contact`. Secondary: See case studies (from `workLabel`), or See services if there are no cases. If neither result nor quote is set, omit the lead slot. If there is no image, a typographic hero with no reserved frame.
2. **Selected case studies.** 3 to 6 featured or latest cards. Kindred uses the typographic fallback (no image). Empty state still renders if the collection is empty (do not remove it); Services then becomes section 2 and the hero secondary goes to `/services`.
3. **Insights teaser.** Latest two or three posts. **Omit the whole section** (and the nav and footer links) when there are no published posts. Later sections close the gap.
4. **Proof.** Demo default: hide any logo row and show three principles (Fixed price. Set timeline. A result we agree before we start.). Never a placeholder logo row.
5. **Services teaser.** Heading: "Know the price before we talk." Three offerings: Position, Grow (Typical), Brand + growth. Prices follow `showPrices`.
6. **Process.** Four steps: Intro, Plan, Strategy, Handover. Shared with Services.
7. **Studio short.** Links to `/about`.
8. **FAQ short.** Four Home-group items, link to `/services#faq`. Omit if that group is empty.
9. **Final CTA.** Brand-band. One primary: Start a project.

### Case studies (`/case-studies`)

1. Header (heading from `workLabel`)
2. Filter chips, only when there are at least four published projects, default All
3. Grid of four demo cards (Kindred has no image)
4. Empty state, designed, never a fake grid
5. Bottom CTA, present even when the grid has cards

### Case study (`/case-studies/[slug]`)

Text-first, this order, omit empty blocks:

1. **Outcome** (one-line result, client, sector, Sample badge, goal)
2. **Challenge**
3. **Approach**
4. **Results** (measured result; quote sits here if present, name required)
5. **Optional image block** (Kindred has none; do not invent one; before/after is later, not week one)
6. Services used
7. CTA and previous/next pager

Unknown slugs 404. This page is the product of the kit.

### Services (`/services`)

1. Hero ("Know the price before we talk.")
2. Three offerings with Typical mark on Grow
3. Comparison table (price row only when `showPrices` is on)
4. Process (same four steps)
5. What's not included
6. Full FAQ (`id=faq`)
7. Final CTA, brand-band

Each offering CTA goes to `/contact?service=position|grow|brand` and pre-selects the field. `showPrices` false hides every price and the comparison price row, and keeps weeks and typical scenarios.

### About (`/about`)

1. Intro
2. Approach
3. Principles
4. Team (Alex Reed, Strategy; Jordan Keane, Growth; initials, no photos). Hide the section when empty. One person is a valid solo state.
5. Tools (hide if empty)
6. CTA

No founder portrait and no invented headcount.

### Insights (`/insights`) and post (`/insights/[slug]`)

Index: header plus a list of three sample posts. If there are no published posts, hide Insights from nav and footer, and do not show a public empty blog (`/insights` 302s to `/`, or a clean not-listed empty).

Post: title as h1, date, optional author, body at `layout.measure` (66ch), quiet end CTA, pager. Unknown slugs 404.

### Contact (`/contact`)

1. Heading and reply-time sub
2. Calendar slot: hidden in the demo, appears only when `settings.calendarUrl` is a non-empty URL (wiring a live provider can wait)
3. Form, four visible fields only: Name, Email, Service (pre-fillable), optional Message. Honeypot `website`. Success replaces the form. Dev: success after valid submit, no backend. Production: POST JSON to `FORM_ENDPOINT`.
4. Direct email `hello@northway.example`

### Legal and 404

Placeholder legal, clearly Sample, last updated 12 November 2026. 404: "This page isn't here," with recover links. `/work` redirects are 301s, not 404s.

---

## 3. Components

Build the same set the spec inventories. Bind only to semantic or component tokens from [design/tokens](../design/tokens/). Use Lucide for icons.

**Primitives:** Button (primary pill, secondary, ghost; md 44, lg 52), IconButton (44 by 44), Input, Select, Textarea, Tag (including Sample badge), Link, Focus ring (never removed), SkipLink.

**Chrome and sections:** Nav (desktop and mobile overlay), Footer (credit on and off), Home hero (result lead, quote lead, heading-and-lede fallback, with and without image or from-price), Inner hero, Case card (with image, and typographic fallback), Work grid, Filter chips, Case body (text-first blocks), optional Images block, Proof strip, Service card, Comparison table, Process, Insights teaser, Post card, Post body, FAQ accordion (no height animation), CTA band (inverse and brand-band), Enquiry form, Calendar slot, Legal article, 404, Empty state, Section header (no eyebrows), Prev/next pager, Image with scrim.

States, empty behaviour, and reduced-motion rules are in the spec. If a collection is empty, omit or show the designed empty state. Never fill with lorem, fake avatars, or placeholder logos.

---

## 4. Content model

Code edition: structured files in `/content`. No headless CMS in week one. Field names are stable so a later Framer CMS can use the same names.

**Singleton:** `/content/settings.json`. Important defaults:

- `studioName`: Northway
- `ctaLabel`: Start a project
- `workLabel`: Case studies (does not change the `/case-studies` route)
- `showPrices`: true
- `showCredit`: false
- `heroResult` / `heroResultClient`: Kindred Sample result (no `heroQuote`, no `heroImage` in the demo)
- `email`: hello@northway.example
- `calendarUrl`: empty
- `fromPrice`: From $8,000
- `process`, `principles`, `exclusions`, `tools`, `taxNote`, `replyTime` as in [docs/content.md](content.md)

**Collections:** Projects, Services, Posts, Team, Testimonials, FAQs, Legal. Full field lists are in the spec. Demo ships four Sample projects, three Sample services (Grow marked Typical), three Sample posts, two Sample testimonials, two Sample team members, Home and Services FAQs, and placeholder legal. A `LAUNCH.md` checklist lists every Sample record. The build ships the Sample demo; buyers replace it.

---

## 5. User journeys

1. **New visitor, ten seconds.** Lands on Home. Reads the Kindred Sample result, then the promise and the from-price. Can say who it is for, the outcome, and the next step from the hero alone. Goes to Start a project, or See case studies.

2. **Visitor with a brief like theirs.** Opens Case studies, filters or scans cards (Kindred works with no image), opens a text-first case (Outcome, Challenge, Approach, Results), trusts a result, starts an enquiry.

3. **Visitor who wants the price first.** Opens Services, reads Position / Grow / Brand + growth, compares what's included, starts an enquiry with Grow (or another package) pre-selected. If `showPrices` is off, weeks and typical scenarios still explain the offer.

4. **Visitor who wants to trust the studio.** Reads About (principles, team initials, how we work) and Insights (writing as proof), then enquires from a quiet CTA.

5. **Form completion, mobile first.** Four fields, labels above, 44px targets, clear errors, success copy that uses the reply-time setting. Calendar remains hidden until a URL is set.

6. **Empty-state journeys (must be designed, not leftover).** No projects: Case studies empty copy, Services moves up on Home, hero secondary is See services. No posts: Insights vanishes from Home, nav and footer; `/insights` is not a public empty blog. No team: About hides the team section. `showPrices` off: every price and from-figure gone, no layout break.

7. **Buyer of the kit (after purchase).** Clones the Code edition, puts their name in settings, replaces Sample content using `LAUNCH.md` and the README, points `FORM_ENDPOINT` and `SITE_URL`, and launches. This path is why content is files, why Sample is labelled, and why week one must include the checklist.

8. **Keyboard and reduced-motion visitor.** Skip link, visible focus, 44px targets, form completable from the keyboard. Reduced-motion final pose is in the server HTML on Home, Case studies, Services and a case page. Accordion does not animate height.

---

## 6. v1 must-have versus later

Amos locked week one as the Code edition. This table is the UX Lead launch-scope table, with that confirmation applied.

| Area | Must-have in week one (Code, $149) | Later (Figma $199, Framer $249, and after) |
| --- | --- | --- |
| Edition | Production Next.js 15 App Router site: all pages, components, tokens wired from `design/tokens`, `/content`, setup README, `LAUNCH.md`, `.env.example` (`SITE_URL`, `FORM_ENDPOINT`). This is the source of truth. | Complete Figma file (variables, every component and variant, empty and price-off, reduced-motion frames, restyle note). Framer remix with CMS, forms and agent skills. Framer Marketplace listing and checkout. |
| Pages | Home, `/case-studies`, `/case-studies/[slug]`, `/services`, `/about`, `/insights`, `/insights/[slug]`, `/contact` (form only), `/privacy`, `/terms`, `/cookies`, 404. 301 from `/work` and `/work/[slug]`. | Calendar embed wired to a live provider (the slot already appears when a URL is set). Configurable path that follows `workLabel`. |
| Components and features | Nav and footer with `workLabel` and Insights as a primary item. Home hero with result/quote lead and fallbacks. Case cards with typographic fallback. Text-first CaseBody. Services, comparison table, process, form, FAQ, CTA band, empty states, Sample badge, `showPrices`. | Before/after image variant. Cookie banner and analytics. Sitewide dark mode. Headless CMS. Multi-site licence. Implementation offer (lives on skala.design, out of this repo). |
| Quality | WCAG 2.2 AA, 44px targets, reduced-motion final pose in the server HTML, no lorem or fake proof, Lighthouse accessibility and a manual keyboard pass on Home, a case, Services and Contact. No numeric Lighthouse performance target is set. | 5-second test and first-click test before public sale (recommended, not a blocker for the first implementation). |

---

## 7. Day-by-day, one week

A suggested order. Days can overlap. The definition of done is the launch acceptance list in the spec, also summarised in [AGENTS.md](../AGENTS.md).

**Day 1. Foundation.** Scaffold Next.js 15 (App Router, TypeScript, Tailwind v4). Wire `@theme` from `design/tokens/theme.css` (or a generated copy in `src`). Load Hanken Grotesk. Set the light canvas. Global focus ring, skip link, `SITE_URL` and `FORM_ENDPOINT` in `.env.example`. No raw hex in components. Confirm a hello page uses semantic tokens only.

**Day 2. Chrome, settings, content, routes.** Nav and footer (desktop and mobile), `workLabel`, Insights hidden when empty, credit off by default. `/content` settings and all collections, filled from [docs/content.md](content.md). Routes for every page, including 301s from `/work`. 404 for unknown slugs. Lucide icons.

**Day 3. Home and Case studies index.** Result-or-quote hero with all fallbacks. Selected case studies, including Kindred's typographic fallback and the empty state. Insights teaser (omit-when-empty). Proof, services teaser, process, studio short, FAQ short, final CTA. `showPrices` hides from-figures.

**Day 4. Case page and Services.** Text-first CaseBody for Kindred (no images) and the other three cases. Services offerings, Typical mark, comparison table, process, exclusions, full FAQ, CTAs that pre-select the form. Price-off state.

**Day 5. About, Insights, Contact, legal, 404.** About with team initials and hide-when-empty. Insights index and post (body at 66ch). Contact form contract: four fields, pre-select, errors, success, honeypot, calendar hidden. Sample legal. 404 recover path. Every empty state from the spec.

**Day 6. Quality.** WCAG 2.2 AA on every shipped page, including inverse and brand bands. Reduced-motion final pose in the server HTML on Home, Case studies, Services and a case page. Accordion does not animate height. Sample badges visible. `showPrices` off pass. Keyboard pass on Home, a case, Services and Contact, mobile and desktop. README: setup, content editing, `workLabel`, env vars, token swapping, Sample replace-before-launch list. Write `LAUNCH.md`.

**Day 7. Fix pass and pack.** Close gaps against the launch acceptance checklist. Pack the Code edition as the sellable kit. Do not start the Figma or Framer editions this week unless the Code kit is already done and Amos asks for them.

---

## 8. What "done" means for week one

All of the following, from the spec's launch acceptance:

- Every route in the spec renders, including 404 for unknown slugs. `/work` 301s correctly.
- Semantic tokens only. Hanken Grotesk and the delivered palette, not Inter or Skala Blue.
- `showPrices` false hides every price and from-figure without a layout break.
- Empty and omit-when-empty behaviour for Projects, Posts, Team, Testimonials, FAQ groups, hero lead, hero image and case images, with no lorem or fake proof.
- `workLabel`, Insights-as-primary, typographic card fallback, text-first cases, and the Home hero result/quote fallback all pass their page-level checks. Sample badges are visible.
- Contact form matches the four-field contract.
- WCAG 2.2 AA, 44px targets, visible focus, labelled fields, skip link. Reduced-motion final pose in the server HTML on the pages named above.
- README and `LAUNCH.md` are complete.
- The Code edition is a kit someone can run with `npm` and replace content in `/content`.

Figma and Framer matching this IA is later, not a week-one fail if they are absent.
