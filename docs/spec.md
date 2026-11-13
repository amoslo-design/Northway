> V2 update: read [the approved decisions](../v2/DECISIONS-V2.md) and [conversion rules](../v2/docs/CONVERSION.md) before this historical v1 spec. V2 replaces the badge policy, hero hierarchy, icon set, type, palette, Home principles strip, pricing layout, empty Home teasers and form-submit label. Routes, fields and accessibility contracts remain.

# Northway: build-ready site spec

This is the repo copy of the UX Lead build-ready site spec, so Codex and Gemini can work from files in this repository. Source Page (12 November 2026, Europe/Stockholm): [Northway: Skala template #1, build-ready site spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51).

**The Page already included the five locked structural decisions and the v1 launch scope.** Those are in Locked decisions and in "v1 launch scope (1 week)" below. Do not revert them.

**Design tokens are delivered.** Use [design/tokens](../design/tokens/) and [design/DESIGN-SYSTEM.md](../design/DESIGN-SYSTEM.md). The typeface is Hanken Grotesk (SIL OFL). The canvas is `#DBDBD8`. The accent is black (ink). Do not use Inter or Skala Blue `#1F4FE0` / Navy `#0B1B3F` as the template's own brand. Those values in this spec were UX Lead placeholders. Keep the semantic token *names*, and every IA, state, layout, motion and accessibility rule.

**Week-one ship is the Code edition only** ($149). Amos locked this on 12 November 2026, Europe/Stockholm. The Figma file ($199) and the Framer remix ($249) come later, and must then match this IA and these acceptance checks. Do not spend week one on those editions.

The companion proposal is [docs/proposal.md](proposal.md). The week-one plan is [docs/plan.md](plan.md). Demo copy is [docs/content.md](content.md). Agent instructions are in [AGENTS.md](../AGENTS.md).

---

## Contents

- [How to use this spec](#how)
- [Locked decisions](#decisions)
- [Edition mapping](#editions)
- [Copy and placeholder rules](#copy)
- [Nav and footer](#chrome)
- [Pages and sections](#pages)
- [CMS collections and fields](#cms)
- [Component inventory](#components)
- [Responsive notes](#responsive)
- [Motion rules](#motion)
- [Accessibility targets](#a11y)
- [Global acceptance](#accept)
- [v1 launch scope (1 week)](#v1-scope)
- [Sources](#sources)

> **Build-ready, 12 November 2026, Europe/Stockholm. For Codex and Gemini.**
>
> Do not wait for Amos or Designer, and do not ask clarifying questions. Follow this Page and the proposal's token section. If something is still open, use the working assumption stated here, pick the calmer more accessible option, and note it in the README. Designer owns the final palette, free font and type scale for the template's own brand. The Skala values in the token section (Blue #1F4FE0, Navy #0B1B3F, Inter, and the demo state hex values) are placeholders only. Wire semantic token names so those values can be swapped without touching components. Layout, motion, accessibility and component structure in the token section are UX-locked and must be followed.

## How to use this spec {#how}

This is the site a buyer ships, demonstrated with fictional Northway sample content: a small strategy and growth consultancy (positioning, brand strategy and marketing). It is not the skala.design shop. The segment, IA, CMS shape and token needs were proposed in the Page linked below; this Page is the build brief. Follow Locked decisions and the v1 launch scope.

- [Proposal: segment, IA, CMS, tokens](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6): cursor.com/canvas
- [Token and asset needs from Designer (do not duplicate; implement)](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6#tokens): cursor.com/canvas

- **Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, framer-motion. No trailing slashes. next/image for images (width and height required). Temporary next/font Inter until Designer delivers the free font. Env: SITE_URL, FORM_ENDPOINT.
- **Content:** Code edition: /content. settings.json for the singleton; MDX or typed Markdown for collections, same field names as this spec. Framer edition: Framer CMS with those names. No headless CMS in v1.
- **Tokens:** One theme file (for example src/styles/tokens.css and Figma variables) using the semantic names in the proposal token section. Components reference only those names, never raw hex or a font family string. Until Designer delivers, fill the file with the token section's demo placeholders.
- **Theme:** Light site. Inverse (black) and brand-band (accent) are section-level only. No sitewide dark-mode toggle in v1.

## Locked decisions {#decisions}

1. Each template has one name, used as both the product name and the fictional demo studio. Template #1 is Northway, a work-first site for consultants, strategists and small non-design agencies (marketing, dev, architecture and interior studios, copywriters). The demo studio is a small strategy and growth consultancy, labelled Sample everywhere.
2. The public label for the work index defaults to Case studies, editable in settings.workLabel. The v1 routes are /case-studies and /case-studies/[slug] and do not change when the label is edited. Use workLabel in nav, footer, headings, empty states, secondary CTAs and meta. The CMS collection stays Projects at /content/projects. Redirect /work and /work/[slug] to the new routes with a 301.
3. Case study pages are text-first, in this order: Outcome, Challenge, Approach, Results, then an optional image block. Omit any block whose field is empty. Do not invent images.
4. Case cards have an optional image and a typographic fallback (client, outcome line, tags). Never leave an empty image frame.
5. Insights is a primary nav item and a Home section showing the latest two or three posts. Omit the nav item, the footer link and the Home section when there are no published posts (no fake proof).
6. The Home hero leads with a result or a quote, with an optional image. If neither result nor quote is set, fall back to heading and lede. If there is no image, use a typographic hero and do not reserve an empty image frame. Never invent a result or quote.
7. Published prices are on by default (settings.showPrices = true). One switch hides every price and from-figure, including the hero and the comparison-table price row. Typical-project scenarios stay.
8. The primary CTA label is Start a project, editable in settings.ctaLabel, and always goes to /contact. Service CTAs go to /contact?service={slug} and pre-select the field.
9. The footer Template by Skala credit is off by default (settings.showCredit = false). Draw both states; ship with it off.
10. Shipped site files contain no Skala marketing and no Skala ads in empty states. Implementation and custom-work offers live only on the skala.design product page, which is out of this repo.
11. Single-site licence only in v1. A multi-site licence is a later add-on on skala.design, not a feature in the kit.
12. English only. Demo currency is USD. Tax line: Prices excl. VAT/sales tax. Reply line: We reply within one working day. Both are settings.
13. The demo has no calendar URL, so the calendar slot is hidden. Enquiry is the form. In development, a valid submit shows the success state without a backend. In production, POST JSON to FORM_ENDPOINT. Document both in the README.
14. No cookie banner and no analytics in v1. /cookies exists as a page.
15. Demo content: four Sample projects, three Sample services (Grow marked Typical), three Sample posts, two Sample testimonials, two Sample team members with initials and no photos, FAQs for Home and Services, placeholder legal. All labelled Sample. A launch checklist (and the Framer launch-check skill) fails if Sample content is still published.
16. If a detail is in neither this Page nor the token section, choose the calmer, more accessible option, and record it in the README. Never invent clients, results, logos or quotes. Never block the build to ask.

## Edition mapping {#editions}

| Edition | Build | Content | Must also include |
| --- | --- | --- | --- |
| Code only | Production Next.js App Router site from this spec. Pages, components, tokens file, /content, setup README. | Structured files in /content, as above. This is not a non-designer CMS. README explains how to add a project and change settings. | Reduced-motion final pose in CSS and JS (see Motion). .env.example with SITE_URL and FORM_ENDPOINT. Sample images in /public/sample with explicit dimensions. |
| Code plus Figma | The above, plus a Figma file: variables named as in the token section, every component and variant, every key page, empty and price-on/price-off, reduced-motion as a static final-pose frame. | CMS field names annotated on the Figma components. | A short restyle note: change the variables, not the components. Temporary Inter and demo palette marked as placeholders Designer will replace. |
| Code plus Figma plus Framer | The above, plus a Framer remix that matches this IA, these field names, forms, and legal. | Framer CMS for settings and every collection. | Agent skills: Rebrand; Add project; Add post; Toggle prices; Replace sample content; Launch check (SEO, sample legal still present, empty states, contrast, reduced motion). Motion disabled to the final pose under prefers-reduced-motion. |
| Framer Marketplace (Framer only) | The Framer file alone, same structure. No Next.js, no Figma. | Framer CMS, forms, agent skills, legal, 404. | Single-use licence as the platform requires. Price and checkout are a later publishing step, not part of this build. |

Prices stay $149 / $199 / $249. For the one-week launch, ship Code only; Figma and Framer are later. See v1 launch scope.

## Copy and placeholder rules {#copy}

- Voice: studio we, international English, short, clear beats clever. No founder name, no personal brand, no eyebrow labels above titles.
- One primary CTA label sitewide, from settings.ctaLabel, default Start a project. Do not invent alternate clever labels. The work-index label is settings.workLabel, default Case studies, used in nav, headings, empty states, secondary CTAs and meta. The route stays /case-studies.
- All demo records are fictional and labelled Sample: a Sample badge on cards and a Sample line in the record. Client names, quotes, prices, legal and team are not real. Never present a percentage result. Sample results are plain words and start with Sample result, for demo only.
- The demo studio is Northway, a small strategy and growth consultancy. Email: hello@northway.example (the .example domain is reserved; use it). No phone. No physical address. No JSON-LD address.
- Replace-before-launch: README and a /content/LAUNCH.md checklist list every Sample record. The Framer launch-check skill fails if any remain published. Builders ship the Sample demo; buyers replace it.
- Omit a block when its collection is empty. Do not fill with lorem, fake avatars, or placeholder logos. Empty states use the copy in each page tab.
- Headings: at most one h1 per page. Section titles are h2. About eight words or fewer for H1.

> **JSON-LD.**
>
> Organization, name from settings, url from SITE_URL, no Person, no address, no invented review rating.

## Nav and footer {#chrome}

### Desktop nav

| Element | Behaviour |
| --- | --- |
| Height | 68px, sticky, solid surface (not transparent). scroll-padding-top: 68px. |
| Logo | settings.logo (or wordmark text if no file). Links to /. Accessible name: {studioName}, home. |
| Links, in order | {workLabel} /case-studies (demo: Case studies); Services /services; About /about; Insights /insights (primary item; omit if published post count is 0); Contact /contact. |
| Current | aria-current=page on the matching item. Navy text plus the selected.indicator underline. Not a filled bar. |
| Right CTA | Primary button, settings.ctaLabel, href /contact. Same states as Button primary md. |
| When | From the 1024 breakpoint up. Below 1024, use mobile nav. |

### Mobile nav

| Element | Behaviour |
| --- | --- |
| Bar | Same 68px height, logo left, 44 by 44 menu button right. Button accessible name Menu when closed, Close when open. aria-expanded, aria-controls pointing at the overlay. |
| Overlay | Simple full-screen overlay, not a sliding sheet. Same links in the same order, CTA pinned at the foot. Backdrop is overlay.backdrop. |
| Keyboard | Escape closes. Focus moves into the overlay when opened and returns to the menu button when closed. Reduced motion: instant open, no slide. |

### Footer

| Element | Behaviour |
| --- | --- |
| Surface | Inverse tokens (black, not Navy). Full-bleed band, inner content 1280. |
| Content | Studio name; settings.promise (demo: Work that earns the next project.); nav mirror with the same Insights hide rule; settings.email as a mailto link; legal: Privacy /privacy, Terms /terms, Cookies /cookies. |
| Credit | If settings.showCredit: Template by Skala as a text link to https://skala.design. Default off. Hide the line when off. Do not force it. |
| Copyright | © {current year} {studioName}. |
| Empty | Hide phone or social lines that are empty in settings. |

Skip link is the first focusable element on every page: Skip to content, targeting the main landmark. Visible only on focus.

## Pages and sections {#pages}

Ten destinations. Switch the control for section order, demo copy, and acceptance criteria. Purpose and conversion goal are in the first row of each tab. One primary CTA in view at a time.

**Sitemap**

- **Home** (`/`)
- **Case studies** (`/case-studies`)
- **Case study** (`/case-studies/[slug]`)
- **Services** (`/services`)
- **About** (`/about`)
- **Insights** (`/insights`)
- **Post** (`/insights/[slug]`)
- **Contact** (`/contact`)
- **Privacy, Terms, Cookies** (`footer`)
- **404** (`not-found`)

**Links between pages**

- Home -> Case studies (nav)
- Home -> Services (nav)
- Home -> About (nav)
- Home -> Insights (nav if posts)
- Home -> Contact (CTA)
- Case studies -> Case study (CMS)
- Insights -> Post (CMS)
- Case study -> Contact (CTA)
- Services -> Contact (pre-selects)
- About -> Contact (CTA)
- 404 -> Home (recover)

## Home {#page-home}

- **Route:** /
- **Purpose:** In under 10 seconds, say who Northway is for, the outcome, and the next step. Lead with a result or quote when one exists, otherwise heading and lede.
- **Conversion goal:** Start an enquiry, or open Case studies or Services. Primary CTA: Start a project, to /contact.
- **Meta title:** Northway - Work that earns the next project. (Sample studio)
- **Meta description:** Sample consultancy website for the Skala template. Northway is a strategy and growth consultancy with a clear process and a fixed price. Replace this content before launch.

With cases and posts, section order is 1–9 as below. Insights (section 3) is omitted when there are no published posts, and the later sections close the gap. With an empty Projects collection, the Services teaser becomes section 2, the Case studies empty state still renders (do not remove it), and the hero secondary is See services to /services.

| # | Section | Demo copy (all Sample) | Build notes |
| --- | --- | --- | --- |
| 1 | Hero | Lead (result): Sample result, for demo only: patients understood who the clinic was for, and how to book. - Kindred Clinic (sample). Sample badge. H1: Work that earns the next project. Lede: We are a strategy and growth consultancy. We help companies clarify their offer, shape their brand and build a marketing plan their team can run. From $8,000 excl. VAT/sales tax. Primary: Start a project. Secondary: See case studies (from workLabel). No hero image in the demo. | Reading order: result or quote first, then a short H1, lede, from-price, CTAs. One h1 (the short heading, not the result). Hide the from-price when showPrices is false or the field is empty. If heroResult is empty and heroQuote is set, lead with the quote (name required). If both are empty, omit the lead slot and start with H1 and lede - no empty well. If heroImage is empty, typographic hero, no reserved image frame. Never invent a result, quote or image. |
| 2 | Selected case studies | Heading: Selected case studies (from workLabel). Cards use each project's client, outcome line, tags (sector, year, Sample). Image optional. Empty heading: Case studies are on the way. Empty body: Cases will land here when they are ready. Until then, see the services and how a project runs. Links: See services, Start a project. | 3 to 6 featured or latest projects. Whole card is the target, links to /case-studies/[slug]. Typographic fallback when hero image is empty: client, outcome line, tags. No empty image frame. Kindred demo card ships without an image. |
| 3 | Insights teaser | Heading: Insights. Two or three latest posts: title, date, excerpt, optional cover, Sample badge. Link: See all insights, to /insights. | Primary proof path. Omit the whole section if there are no published posts. |
| 4 | Proof | If testimonials or client names exist, list real names only. Demo default: hide the logo row and show principles: Fixed price. Set timeline. A result we agree before we start. (Sample principles - editable.) | Never a placeholder logo row. Hide the strip if settings show neither principles nor names. |
| 5 | Services teaser | Heading: Know the price before we talk. Three offerings from the Services collection (Position, Grow marked Typical, Brand + growth). Each: name, short line, optional price and timeline, typical scenario. Link: See all services. | Moves up when Case studies is empty. Prices follow showPrices. CTA on a card: Start a project to /contact?service={slug}. |
| 6 | Process | Heading: How a project runs. 1 Intro - a short call, the goal and the package. 2 Plan - the brief, the research, the measure of success. 3 Strategy - positioning, messaging, and the plan, with two review rounds. 4 Handover - deliver the work, then a short results review. (Sample process - editable.) | Four steps. Horizontal from 1024, stacked below. Reduced-motion static. |
| 7 | Studio short | Heading: A studio built around the work. Body: Good strategy should be useful after the presentation. We agree the goal, set the price and timeline, and leave your team with a plan they can use. Link: About the studio. | Links to /about. |
| 8 | FAQ short | Four items from FAQs where group is home. Link: More questions, to /services#faq. | Accordion. Omit if that group is empty. |
| 9 | Final CTA | Heading: Ready to start a project? Sub: Fixed price. Set timeline. A short enquiry. CTA: Start a project. | Brand-band or inverse variant (default brand-band). One primary button. |

### Acceptance

- A new visitor can state who it is for, the outcome, and the next step from the hero alone.
- The demo hero leads with the Kindred Sample result, then the short H1. No empty image frame. With heroResult and heroQuote both empty, the hero starts at the H1 and lede, with no blank lead slot.
- Primary CTA in the hero and the final band goes to /contact. Secondary goes to /case-studies when projects exist (label from workLabel), otherwise /services.
- With projects, Selected case studies is section 2 and shows 3 to 6 cards with Sample badges. Kindred uses the typographic fallback (no image frame). With none, the empty copy appears and Services is section 2.
- Insights is section 3 when posts exist, and is absent from Home, nav and footer when the collection is empty.
- Turning showPrices off removes every from-figure and price on this page.
- One h1, one primary CTA in view, 44px targets, skip link, reduced-motion final pose in the first HTML (not only after hydration).

## Case studies {#page-work}

- **Route:** /case-studies
- **Purpose:** Help a visitor find a brief like theirs and open a case.
- **Conversion goal:** Open a case. Bottom CTA: Start a project, to /contact.
- **Meta title:** Case studies - Northway (Sample)
- **Meta description:** Selected case studies from Northway, a sample strategy and growth consultancy. Real outcomes when published - no placeholder cases on a live buyer site.

| # | Section | Demo copy | Build notes |
| --- | --- | --- | --- |
| 1 | Header | Heading: Selected case studies (from workLabel). Sub: Work with a result, not only a look. | Empty sub: Cases will land here when they are ready. |
| 2 | Filter | All (default) plus one chip per sector present, from project.sector. | Render only when there are at least four published projects. Selected uses selected tokens plus a non-colour cue. |
| 3 | Grid | Four demo cards, all Sample: Kindred Clinic, health, 2025 - patients understood who the clinic was for, and how to book; Holloway Advisors, consulting, 2025 - the firm could explain its offer in one sentence; Eastport Kitchen, hospitality, 2024 - bookings came from the right diners, not just more diners; Cedar Workshop, product, 2024 - the launch had a clear buyer and a message the team could reuse. Each has a Sample badge. Kindred has no image and uses the typographic fallback. | 1 / 2 / 3 columns as in the token section. Link to /case-studies/[slug]. Image optional. Typographic fallback: client, outcome line, tags (sector, year, Sample). No empty image frame. |
| 4 | Empty | Heading: Case studies are on the way. Body: No filler cases. When a project is ready to show, it lands here. CTAs: See services, Start a project. | Designed state, never a fake grid. |
| 5 | Bottom CTA | Heading: Want this for your project? CTA: Start a project. | Present even when the grid has cards. |

### Acceptance

- All four demo projects render with Sample badges and link to /case-studies/[slug].
- Kindred (no image) uses the typographic fallback: client, outcome line, and tags are visible. There is no empty image frame, no collapsed hole, and the card remains a 44px-equivalent target with a clear typographic hierarchy. Meaning is not colour alone.
- A card with an image still shows client, outcome line and tags; the image is additional, not a requirement.
- Filter appears only with four or more projects, defaults to All, and is not colour-only when selected.
- With zero projects, only the empty state and bottom CTA show. No placeholder cards.
- Cards are keyboard-reachable and have a 44px-equivalent target (the whole card).

## Case study {#page-case}

- **Route:** /case-studies/[slug]
- **Purpose:** Lead with the outcome, then challenge, approach and results. This text-first case template is the product of the kit.
- **Conversion goal:** Trust a result, then enquire. CTA: Start a project, to /contact.
- **Meta:** {one-line result} - {client} - Northway. Description from the result and sector. 404 if the slug is unknown.

Demo example, Kindred Clinic (sample), slug kindred-clinic, a positioning and messaging engagement. Every other project uses the same block order: Outcome, Challenge, Approach, Results, then an optional image block. Omit any block whose field is empty. This demo case has no images. Do not invent a visual for it.

| # | Section | Demo copy (Kindred Clinic) | Build notes |
| --- | --- | --- | --- |
| 1 | Outcome | Sample result, for demo only: patients understood who the clinic was for, and how to book. Kindred Clinic (sample), health. Goal, agreed before kickoff: a clear offer and a booking message. (Sample.) | Text-first lead. oneLineResult is the lead; client, sector and Sample badge sit with it. If oneLineResult is empty, lead with the title and the goal field. No required image here; images belong in the optional block below. |
| 2 | Challenge | The clinic listed many services, but people could not tell who it was for or what to do next. (Sample, two or three sentences.) | From the problem field. Omit if empty. |
| 3 | Approach | Research - interviews with staff and recent patients. Positioning - one offer, one audience. Messaging - plain words for the site and the front desk. Plan - a short launch checklist the clinic could run. (Sample labels, editable.) | Render each line from the whatWeDid list. Omit if empty. |
| 4 | Results | Sample result, for demo only: the offer was obvious, and the clinic could explain it without a writer on call. Quote: They made the next step obvious. - A. M., clinic manager (sample quote, for demo only). | From measuredResult. Omit if empty. Never a placeholder percentage. If a quote is present, it sits in this block (name required, no photo required); omit the quote if quote or quoteName is empty. |
| 5 | Images | Empty in the Kindred demo; omit the section. | Optional image block after Results. Captions or alt required if images exist. If an image has text on it, use scrim tokens or a solid inverse panel. Before/after is later, not week one. |
| 6 | Services used | Grow (sample). Links to /services#grow. | Optional. From related services. |
| 7 | CTA and pager | Heading: Want this for your project? CTA: Start a project. Previous and next case by date. | Pager: 44px targets; hide prev on the first, next on the last. |

### Acceptance

- Unknown slugs render the 404 page. /work/{slug} 301s to /case-studies/{slug}.
- The page is text-first: Outcome, Challenge, Approach, Results, then an optional image block. Kindred has no images and does not show an empty gallery or hero frame.
- Empty challenge, approach, results, quote, images or services used do not leave a heading over a blank block; the section is omitted.
- Sample badges and Sample result prefixes are visible on demo records.
- If images are present, white text on a photo sits only on the strong scrim; otherwise a solid panel is used. Contrast holds.
- End CTA goes to /contact. Prev and next cases are keyboard accessible.

## Services {#page-services}

- **Route:** /services
- **Purpose:** Show the offer, and the price if published, so a visitor can pick a path.
- **Conversion goal:** Start a project with the service pre-selected on /contact?service={slug}.
- **Meta title:** Services - Northway (Sample)
- **Meta description:** Sample packages: Position $8,000 / 6 weeks, Grow $16,000 / 10 weeks, Brand + growth $28,000 / 14 weeks. Prices excl. VAT/sales tax. Replace before launch.

| # | Section | Demo copy | Build notes |
| --- | --- | --- | --- |
| 1 | Hero | Heading: Know the price before we talk. Lede: Three fixed packages. Published weeks. Prices excl. VAT/sales tax. (Sample prices - replace.) | If showPrices is false, lede becomes: Three clear packages, with a typical project for each. Weeks stay. Prices go. |
| 2 | Offerings | Position - $8,000 - 6 weeks - Positioning and messaging so the offer is clear before the first conversation. Typical: a specialist firm whose work is hard to explain. Grow (Typical) - $16,000 - 10 weeks - Brand strategy and a marketing plan aimed at qualified enquiries. Typical: a consultancy that wants a clearer offer and a plan they can run. Brand + growth - $28,000 - 14 weeks - Positioning, brand strategy, and a marketing system as one engagement. Typical: a firm changing how it goes to market. | From the Services collection, order field. Typical mark is a tag, optional. CTA per card pre-selects. 1 column below 1024, 3 from 1024, gap 24. |
| 3 | What’s included | Comparison table: rows Research, Positioning, Messaging and offer, Brand strategy, Marketing plan, Workshops, Written playbook, Handover support, Results review. Position has research, positioning, messaging, handover and a short review; Grow adds brand strategy, a marketing plan and a longer review; Brand + growth adds workshops and a written playbook. Price row only when showPrices is on. | Ticks and words, not jargon. |
| 4 | Process | Same four steps and copy as Home. | Shared Process component. |
| 5 | What’s not included | Heading: What’s not included. Body: Media spend, ad account management, website design and build, and photography production are outside the package unless agreed. (Sample exclusions - editable.) | From settings.exclusions or a markdown field. |
| 6 | FAQ | Full Services group: ownership (Yes, at handover you own the strategy, files and content we produced); tax (Prices excl. VAT/sales tax); revisions (Two review rounds; extra rounds are a fixed add-on); payment (Sample terms: 50% to start, 50% before handover - replace); timeline (If the scope changes we pause, re-quote a fixed change, then continue). | Accordion, id=faq for the Home link. |
| 7 | Final CTA | Heading: Pick a path. Start with a short enquiry. CTA: Start a project. | Brand-band. |

### Acceptance

- Three demo offerings render with Sample labelling. Grow shows the Typical mark.
- showPrices false hides every price and the comparison price row, and does not hide scenarios or weeks.
- Each offering CTA goes to /contact?service=position|grow|brand and pre-selects the form.
- FAQ anchor /services#faq opens the section. Empty FAQ group hides the section.

## About {#page-about}

- **Route:** /about
- **Purpose:** Trust the studio through what it stands for, then enquire.
- **Conversion goal:** Start a project, to /contact.
- **Meta title:** About - Northway (Sample)
- **Meta description:** Northway is a sample strategy and growth consultancy. A clear process, a fixed price, work that lasts. Replace before launch.

| # | Section | Demo copy | Build notes |
| --- | --- | --- | --- |
| 1 | Intro | Heading: A strategy studio for work that earns the next project. Body: Northway works with companies that want a clearer position and more of the right enquiries - at a fixed price, with a plan they can run. (Sample.) | Studio we. No invented offices or headcount. |
| 2 | Approach | Heading: How we work. Body: We run the work end to end - research, positioning, brand strategy, and marketing - remotely, on a fixed plan. Video for the intro, async for reviews. |  |
| 3 | Principles | Results - we agree a goal before we start. Fixed price - you know the number and the weeks. Built to last - a plan you can run. (Sample, editable.) | From settings.principles or a list field. |
| 4 | Team | Alex Reed (sample), Strategy. Jordan Keane (sample), Growth. Short bios. Initials in a neutral avatar, no photos, no Midjourney faces. | From Team collection. Hide the section when empty. One person is a valid solo state. |
| 5 | Tools | Interviews, workshops, and a written strategy you can run. (Sample, hide if empty.) | settings.tools. |
| 6 | CTA | Heading: Let’s see if we’re a fit. CTA: Start a project. |  |

### Acceptance

- Intro, approach and principles render. No founder portrait and no invented headcount.
- Team with two sample people and initials shows; removing them hides the section with no empty heading.
- CTA goes to /contact.

## Insights {#page-insights}

- **Route:** /insights
- **Purpose:** Open a post. Writing is a primary proof path, not a side journal.
- **Conversion goal:** Open a post. No required primary CTA on the index.
- **Meta title:** Insights - Northway (Sample)

| # | Section | Demo copy | Build notes |
| --- | --- | --- | --- |
| 1 | Header | Heading: Insights. Sub: Notes on process, craft and running a studio. (Sample, editable title.) |  |
| 2 | List | Three sample posts: How we price a fixed project (sample); What to brief a consultancy (sample); Why we show the weeks (sample). Title, date, excerpt, optional cover, Sample badge. | Link to /insights/[slug]. |
| Empty | If empty | Do not leave a public empty blog. Hide Insights from the nav and redirect /insights to / with a 302, or render a clean not-listed empty that is not in the nav. Demo ships three posts so the nav item is visible. | Unknown slugs 404. |

### Acceptance

- Three sample posts list and open. Sample badges visible.
- With zero published posts, Insights is absent from nav and footer, and /insights does not show an empty public blog.

## Insight post {#page-post}

- **Route:** /insights/[slug]
- **Purpose:** Finish the piece. Optional enquiry at the end.
- **Conversion goal:** Quiet Start a project at the end, to /contact.
- **Meta:** {title} - Northway. Description from the excerpt. 404 if unknown.

| # | Section | Demo copy | Build notes |
| --- | --- | --- | --- |
| 1 | Article | Title as h1, date, optional author from Team (Alex Reed (sample)), body at layout.measure (66ch). First demo post explains, in short paragraphs, why a fixed price is shown up front. Marked Sample. | No decorative motion on the text. Author omitted if unset. |
| 2 | End | Quiet CTA: Start a project. Previous and next posts by date. | Same pager rules as cases. |

### Acceptance

- Body is constrained to layout.measure, 16px, line-height 1.6.
- Unknown slugs 404. Empty author is omitted. End CTA is ghost or secondary, not a second competing primary in the nav sense - the nav still has the one primary CTA.

## Contact {#page-contact}

- **Route:** /contact
- **Purpose:** Submit a short enquiry, on mobile first, and know what happens next.
- **Conversion goal:** Send the form, or pick a time if a calendar URL is set. Demo: form only.
- **Meta title:** Contact - Northway (Sample)
- **Meta description:** Start a project with Northway. We reply within one working day. (Sample consultancy.)

| # | Section | Demo copy and fields | Build notes |
| --- | --- | --- | --- |
| 1 | Heading | Heading: Start a project. Sub: Tell us about your brief. We reply within one working day. | Sub uses settings.replyTime. |
| 2 | Calendar | Hidden in the demo. | Render only if settings.calendarUrl is a non-empty URL. Title: Pick a time. The embed must show times in the visitor's time zone if the provider supports it. |
| 3 | Form | Or send a short message. Fields, in this order, and no others: Name (required, 2–80 characters); Email (required, valid email); Service (required select: Position, Grow, Brand + growth, Not sure yet - pre-filled from ?service=position\|grow\|brand); Message (optional, max 1000 characters). Submit: Send message. Hidden honeypot field named website, must be empty. | Labels above, never placeholder-only. Error text under the field plus a prefix or icon, using danger tokens - not a red border alone. Form-level error: Check the highlighted fields and try again. Success, replacing the form: Thanks - we’ll reply within one working day. Submitting disables the button and sets aria-busy. Dev: success after valid submit, no backend. Production: POST a JSON body with name, email, service and message to FORM_ENDPOINT. |
| 4 | Direct | Email hello@northway.example as a mailto. | From settings.email. Hide phone if empty. |

### Acceptance

- Exactly four visible fields, 44px input height, labelled, keyboard complete.
- /contact?service=grow pre-selects Grow. An unknown query is ignored and defaults to Not sure yet.
- Invalid submit shows field errors and does not clear values. Empty honeypot-filled requests are silently discarded and show the success state (no hint to bots).
- Valid submit shows the success copy and does not show the form again on that view.
- Calendar is absent in the demo. Adding a calendarUrl in settings reveals the slot without a code change.

## Legal and 404 {#page-legal}

- **Routes:** /privacy, /terms, /cookies, and the not-found page.
- **Purpose:** Legal clarity, and a recover path on 404. Not conversion pages.
- **Primary CTA:** None on legal. 404 includes Start a project.

| Page | Demo copy | Acceptance |
| --- | --- | --- |
| Privacy, Terms, Cookies | Heading as the page name. Opening line: This is sample {Privacy Policy / Terms / Cookie} text for the Northway demo. Replace with counsel-reviewed copy before launch. A short generic placeholder body and a last-updated date (12 November 2026) follow. Body at layout.measure. | Sample opening line is visible. Launch checklist flags these. Meta title: {Page} - Northway (Sample). No primary conversion CTA. |
| 404 | Heading: This page isn’t here. Body: Try Home, Case studies, or Contact. Links to /, /case-studies, /contact, plus Start a project. | Used for unknown routes and unknown slugs. Same chrome. No clever dead end. Meta: Page not found - Northway. /work and /work/[slug] 301 to /case-studies and /case-studies/[slug], they are not 404s. |

## CMS collections and fields {#cms}

Field names are stable across Next.js /content and Framer CMS. Types: string, markdown, image (src, alt, width, height), url, boolean, number, datetime, enum, reference, list, slug.

### Settings (singleton, /content/settings.json)

| Field | Type | Demo default | Notes |
| --- | --- | --- | --- |
| studioName | string, required | Northway |  |
| tagline | string | Work that earns the next project. |  |
| promise | string | Work that earns the next project. | Footer line. |
| logo, logoInverse, favicon, ogImage | image, optional | Placeholder sample mark | If logo is empty, render studioName as text. |
| language | string | en |  |
| ctaLabel | string | Start a project | One label sitewide. |
| workLabel | string | Case studies | Public label for the work index, nav, footer, headings, empty states, secondary CTAs and meta. Does not change the /case-studies route in v1. |
| heroResult, heroResultClient | string, optional | Sample result, for demo only: patients understood who the clinic was for, and how to book. / Kindred Clinic (sample) | Home hero lead. If empty, try heroQuote. If both empty, fall back to heading and lede. |
| heroQuote, heroQuoteName, heroQuoteRole | string, optional | empty in the demo | Used only when heroResult is empty. Quote name is required if a quote is shown. |
| heroImage | image, optional | empty in the demo | Optional. If empty, typographic hero, no reserved frame. |
| email | string | hello@northway.example |  |
| phone, calendarUrl | string or url | empty | Hide UI when empty. |
| social | list of {label, url} | empty | Hide when empty. |
| showPrices | boolean | true | Hides every price and from-figure when false. |
| showTeam, showInsights, showTestimonials, showPrinciples, showCredit | boolean | true, true, true, true, false | showInsights is also forced off when there are no posts. showCredit default false. |
| voice | enum: studio \| solo | studio | studio = we. solo = first person, still no fake proof. |
| currency | string | USD | Display only; not a converter. |
| taxNote | string | Prices excl. VAT/sales tax. |  |
| replyTime | string | We reply within one working day. |  |
| fromPrice | string | From $8,000 | Hero. Hidden if showPrices is false. |
| exclusions, tools | markdown | See Services and About demo copy | Hide tools if empty. |
| principles | list of {title, body} | The three About principles | Used on About and optionally Home proof. |
| process | list of four {title, body} | The four Home steps | Shared Process component. |

### Collections

| Collection | Path | Fields | Empty |
| --- | --- | --- | --- |
| Projects | /content/projects | title, slug (required), client, sector, year, date (datetime, required, used for order), featured (boolean), hero (image), gallery (list of image + caption), oneLineResult, goal, problem (markdown), whatWeDid (list of {label, body}), measuredResult (optional markdown), quote, quoteName, quoteRole (quote omitted if quote or quoteName empty), relatedServices (list of Service slugs), seoTitle, seoDescription, sample (boolean, default true on demo). | Case studies empty state on /case-studies and Home. On the case page, omit Challenge, Approach, Results, quote or the image block if those fields are empty. |
| Services | /content/services | title, slug (position, grow, brand in the demo), short, body (markdown), price (string, optional, e.g. $16,000), timeline (e.g. 10 weeks), inclusions (list of string), typicalScenario, typical (boolean), order (number), featured, sample. | Demo always ships three. If a buyer deletes all, Services teaser and the offerings section show a quiet empty: Services will land here. Do not invent packages. |
| Posts | /content/posts | title, slug, excerpt, cover (image, optional), body (markdown, required), author (reference Team, optional), date (required), tags (list of string, optional), featured, seoTitle, seoDescription, sample, published (boolean, default true). | Hide Insights in nav and footer, and omit the Home Insights section. Do not show a public empty blog. |
| Team | /content/team | name, role, bio, photo (optional - demo uses none), initials (string, e.g. AR), links (list of {label, url}), order, showOnAbout (boolean), canAuthor (boolean), sample. | Hide the About team section. Posts may have no author. |
| Testimonials | /content/testimonials | quote (required), name (required), role, company, photo (optional), project (reference Project, optional), order, sample. | Omit every testimonials block. No fake avatars. Demo ships two Sample quotes so the optional Home or Services use is visible if placed; Home default uses principles instead of a testimonial row. |
| FAQs | /content/faqs | question, answer (markdown), group (enum: home \| services \| contact), order, sample. | Hide the FAQ section on a page when that group has no items. |
| Legal | /content/legal | title, slug (privacy \| terms \| cookies), body (markdown), lastUpdated (datetime), sample (true on demo). | Pages still exist; sample opening line is required until replaced. |

## Component inventory {#components}

Same set in Next.js, Figma and Framer. Variants to draw are also listed in the proposal token section - implement those states, bound to the named tokens. Props below are the Code edition contract.

### Primitives

| Component | Props | Variants |
| --- | --- | --- |
| Button | variant: primary \| secondary \| ghost; size: md \| lg (md min-height 44, lg 52); href?: string (renders a Link); type?: button \| submit; disabled?: boolean; loading?: boolean; children; aria-label?: string | Rest, hover, pressed, focus-visible, disabled, loading. Primary is a pill. Loading keeps width, sets aria-busy, replaces the label with a neutral spinner. |
| IconButton | label: string (required, accessible name); icon: menu \| close \| plus \| minus \| prev \| next; pressed?: boolean; disabled?: boolean; onClick | 44 by 44. Rest, hover, pressed, focus-visible, disabled. Menu open and closed. |
| Input | name, label (required), type: text \| email, required?, value, onChange, error?: string, helper?: string, disabled?, autoComplete?, maxLength? | Height 44. Rest, hover, focus, error, disabled, filled. Label above. Error below uses danger tokens plus a text prefix or icon. |
| Select | name, label, required?, value, onChange, options: {value, label}[], error?, disabled? | Same states and height as Input. Service field on Contact. |
| Textarea | Same as Input plus rows (default enough for min-height ~120) and maxLength | Same states. |
| Tag | label; selected?: boolean; href?: string; onClick?; sample?: boolean; disabled? | Rest, hover, selected, focus-visible, disabled, Sample badge. Selected uses selected tokens plus weight 600 or a check. |
| Link | href, children, current?: boolean, inverse?: boolean | Rest, hover, focus-visible, current. Footer uses inverse. |
| Focus ring | Global CSS on :focus-visible. Tokens: color.focus, color.focus.inverse, focus.width 2px, focus.offset 2px | Default and inverse. Never removed. |
| SkipLink | href=#main | Visually hidden until focused. |

### Chrome and sections

| Component | Props | Variants |
| --- | --- | --- |
| Nav | settings (including workLabel), currentPath, postCount (to hide Insights), ctaLabel, ctaHref=/contact | Desktop from 1024; mobile below. Optional scrolled hairline. Current link. Overlay open/closed. |
| Footer | settings, postCount | Inverse. Credit on and off. |
| Hero | variant: home \| inner; heading; lede?; lead?: {type: result \| quote; text; attribution?; sample?}; fromPrice?; primaryCta: {label, href}; secondaryCta?: {label, href}; image?: {src, alt, width, height}; showPrices: boolean | Home lead: result; quote (if no result); heading+lede fallback (if neither). With and without image. No empty lead slot and no reserved image frame when those fields are empty. Inner: heading and optional lede at measure. |
| WorkGrid, CaseCard | projects: Project[]; emptyTitle, emptyBody, emptyCtas, workLabel. Card: project, showSampleBadge | Card rest, hover, focus-visible. With image, and typographic fallback (client, outcome line, tags) when image is empty - no empty frame. Grid 1 / 2 / 3. Empty state. |
| FilterChips | items: {id, label}[]; value; onChange | Rest, hover, selected, focus. Render only when the parent passes four or more. |
| CaseBody | project: Project | Text-first blocks, each present or omitted: outcome, challenge, approach, results (quote sits here if present), optional images, services, pager, cta. |
| Gallery | items: {src, alt, width, height, caption}[] | Optional image block on the case page. Returns null when empty. Before/after is later, not week one. |
| ProofStrip | mode: names \| principles \| hidden; names?; principles? | Never a fake logo row. |
| ServiceCard, ServiceTeaser, ComparisonTable | service(s); showPrices; typical mark from service.typical; ctaHref | Price on, price off. Comparison price row on/off. |
| ProcessSteps | steps: {title, body}[] (four) | Horizontal from 1024, stacked below. Reduced-motion static. |
| StudioShort, Principles, TeamGrid | Copy from settings or Team[]. TeamGrid hides when the array is empty. | Team with people, hidden, and one-person. |
| Testimonials | items: Testimonial[] | With/without photo. If items is empty, the component returns null. |
| InsightsTeaser, PostCard, PostBody | posts or post. PostBody uses layout.measure. | Teaser returns null when empty. |
| FaqAccordion | items: {question, answer}[]; heading? | Collapsed, expanded, hover, focus-visible. aria-expanded. Instant open under reduced motion, no height animation, plus icon transition-none. Returns null when items is empty. |
| CtaBand | heading, sub?, cta: {label, href}; variant: brand \| inverse | Brand (accent) and inverse (black). One primary button. Contrast rules in the token section. |
| EnquiryForm, CalendarSlot | services options, defaultService?, replyTime, endpoint. CalendarSlot: url | Form: default, submitting, field error, form error, success. Calendar: present or null. |
| LegalArticle, NotFound, EmptyState, SectionHeader, Pager, ImageWithScrim, SampleBadge | LegalArticle: title, body, lastUpdated. NotFound: fixed copy. EmptyState: heading, body, ctas. SectionHeader: title, lede?. Pager: prev?, next? as {label, href}. ImageWithScrim: image, children?, strength: soft \| strong \| gradient. SampleBadge: no props. | As in the token section. Pager hides a missing side. Scrim: text only on the strong end. |

## Responsive notes {#responsive}

Follow the layout constraints in the proposal token section. Do not invent a fourth page gutter. 1280 is the inner content width; gutters sit outside it. Recap, UX-locked:

| Topic | Rule |
| --- | --- |
| Breakpoints | Mobile 0–767, tablet 768, desktop 1024. Wide 1280 is for type only. Design from 360 up; 320 must not overflow. |
| Page gutters | 16 / 24 / 32 at mobile / tablet / desktop. Already in Skala Figma; reuse. |
| Content and measure | layout.content.max 1280. layout.measure 66ch for posts, legal, long ledes. Full-bleed only for media and inverse or brand bands; inner content stays on 1280. |
| Grid | 4 columns below 768, 12 from 768, column gutters 16 then 24. Case cards: 1 / 2 / 3 at those breaks, gap 24. Services offerings: 1 below 1024, 3 from 1024, gap 24. |
| Nav | Mobile nav below 1024, desktop nav from 1024. No hamburger on desktop. |
| Process | Stack below 1024, horizontal from 1024. |
| Section spacing | 96px vertical padding on mobile and tablet, 128px from 1024. Inner stack 24 then 40. 8pt scale. |
| Type | Body 16 / 1.6 minimum. Temporary Inter. Clamp the home hero so it does not wrap awkwardly below about 390px. Designer owns the final scale; keep sizes in type tokens. |
| Forms | Single column, full width of the measure, comfortable on a phone thumb. Submit and menu at 44px. |
| Images | Never overflow. Explicit width and height. Lazy below the fold. Priority on the home LCP image only when a hero image exists; otherwise LCP is the hero text. |

## Motion rules {#motion}

- Durations: fast 120ms, default 200ms, slow 320ms. Easing: cubic-bezier(0.2, 0.8, 0.2, 1). Colour changes use fast.
- Allowed: fade or translate of at most 8px on hover; a single section reveal on first entry; accordion open. Nothing else is a default animation.
- Forbidden: autoplaying video, parallax, bounce, glow pulses, animating height, width or left, and motion on body text.
- Hover and translate only under (hover: hover) and (pointer: fine). :active uses the pressed token. No stuck hover on touch.
- prefers-reduced-motion: every component renders in its final pose, including in the server HTML. Do not bake a hidden start state into the first paint (this was a bug on Skala's own site). Accordion opens instantly, no height animation. Plus icon uses transition-none. No entrance reveals. Duration 0.
- Implement the reduced-motion final pose in CSS (for example a @media (prefers-reduced-motion: reduce) rule that sets transform and opacity to the final values), not only in JavaScript, so it holds before hydration.

## Accessibility targets {#a11y}

- WCAG 2.2 AA is the floor on every page, including inverse and brand bands.
- Contrast: body and UI text 4.5:1, large text 3:1, non-text UI and focus rings 3:1 (1.4.11). Verify every token pair after Designer swaps the palette. Do not put Navy text on the Blue band (~2.7:1, fail). Do not put Blue #1F4FE0 fill or text on black (~3.3:1, fail for text). Follow the token section contrast rules for inverse and brand-band CTAs.
- Meaning is never colour alone (1.4.1). Selected, error, success and current all have a text or shape cue.
- Focus: 2px ring, 2px offset, :focus-visible only, inverse ring on dark and Blue bands. Never omit.
- Targets: 44 by 44 minimum on every control (2.5.5). At least 8px between adjacent separate controls. The whole case card is the target.
- One h1 per page, logical heading order, main, nav and contentinfo landmarks, skip link.
- Forms: visible labels, described errors, aria-invalid, aria-busy while submitting, success announced (aria-live=polite on the success panel).
- Accordion: aria-expanded, button triggers, keyboard (Enter and Space). Nav current: aria-current=page. Icon buttons have an accessible name.
- Images: alt, or empty alt when decorative. Captions on meaningful gallery images. No text in images as the only source of that text.
- Reduced motion as in Motion rules, in the first HTML. No autoplay.
- Language: html lang=en. Keyboard: every interactive path is usable without a pointer. Focus is not trapped except in the open mobile nav, which is released on close or Escape.

## Global acceptance {#accept}

Page-level checks are in each tab above. All of the following must also pass before the kit is called done. These are review checks, listed as of this spec - they are not ticked here.

- [ ] Semantic tokens only in components; a single theme file holds demo placeholders; no raw #1F4FE0, #0B1B3F or Inter in component source.
- [ ] Every route in this spec renders, including 404 for unknown slugs and paths.
- [ ] showPrices false hides every price and from-figure, and hides the comparison price row, without a layout break.
- [ ] Empty Projects, Posts, Team, Testimonials and FAQ groups produce the specified empty or hidden behaviour, with no lorem or fake proof.
- [ ] All demo records show a Sample badge or Sample prefix. LAUNCH.md lists them.
- [ ] Contact form matches the four-field contract, pre-select, errors, success, and honeypot rules.
- [ ] Nav label for the work index uses workLabel (default Case studies) and points to /case-studies. /work and /work/[slug] 301 to the new routes.
- [ ] Nav hides Insights when there are no posts; footer credit is off by default; skip link works.
- [ ] Home hero leads with a result or quote when set, falls back to heading and lede when not, and never reserves an empty image frame.
- [ ] Case cards without an image use the typographic fallback (client, outcome line, tags) with no empty frame. Case pages are text-first: Outcome, Challenge, Approach, Results, optional images.
- [ ] 44px targets, 68px nav, 1280 content, 16/24/32 gutters, 66ch measure, section spacing 96/128.
- [ ] Reduced-motion final pose is present in the server HTML on Home, Case studies, Services and a case page. Accordion does not animate height.
- [ ] Lighthouse accessibility and a manual keyboard pass on Home, a case, Services and Contact, mobile and desktop, with no serious issues. Contrast checked on inverse and brand bands. No numeric Lighthouse performance target is set in this spec.
- [ ] README documents setup, content editing, workLabel, FORM_ENDPOINT, SITE_URL, token swapping for Designer, and the Sample replace-before-launch list.
- [ ] Figma (if that edition) and Framer (if that edition) match this IA, these field names, and the token section variants. Framer agent skills listed in Edition mapping are present. These editions are later than week one; see v1 launch scope.

> **Launch QA, after the build.**
>
> A 5-second test (can five people say what the studio does, for whom, and what to do next?) and a first-click test for start a project and see the case studies, on the demo, mobile first. This is recommended before public sale, not a blocker for the first implementation.

## v1 launch scope (1 week) {#v1-scope}

Ship the Code edition ($149) in week one as a complete, sellable kit. The Figma file ($199) and the Framer remix ($249, then the Marketplace file) should follow as soon as they match this IA and these acceptance checks. Building all three editions to the same quality in one week is not realistic.

| Area | Must-have in week one | Later |
| --- | --- | --- |
| Edition | Code (Next.js): all pages, components, tokens file with demo placeholders, /content, README, LAUNCH.md, .env.example. This is the source of truth. | Complete Figma file (every variant, empty and price-off, reduced-motion frames, restyle note). Framer remix with CMS, forms and agent skills. Framer Marketplace listing and checkout. |
| Pages | Home, /case-studies, /case-studies/[slug], /services, /about, /insights, /insights/[slug], /contact (form only), /privacy, /terms, /cookies, 404. 301 from /work and /work/[slug]. | Calendar embed on Contact (the slot already appears when a URL is set; wiring a live provider can wait). Configurable path that follows workLabel. |
| Components and features | Nav and footer with workLabel and Insights as a primary item. Home hero with result/quote lead and fallbacks. Case cards with typographic fallback. Text-first CaseBody (Outcome, Challenge, Approach, Results, optional images). Services, comparison table, process, form, FAQ, CTA band, empty states, Sample badge, showPrices. | Before/after image variant. Cookie banner and analytics. Sitewide dark mode. Headless CMS. Multi-site licence. Implementation offer (lives on skala.design, out of this repo). |

Suggested week: days 1–2, tokens, chrome, settings, content model and routes; days 3–4, Home, Case studies index, text-first case, Services; day 5, About, Insights, Contact, legal, 404, empty states; day 6, accessibility, reduced motion, showPrices, Sample badges, README and QA; day 7, fix pass, launch checklist, pack the Code edition.

### Launch acceptance (week one)

- WCAG 2.2 AA on every shipped page, including inverse and brand bands. Contrast, 44px targets, visible focus, labelled fields, skip link.
- Reduced-motion final pose in the server HTML on Home, Case studies, Services and a case page. Accordion does not animate height.
- Empty states and omit-when-empty behaviour for Projects, Posts, Team, Testimonials, FAQ groups, hero lead, hero image and case images, with no lorem or fake proof.
- Lighthouse accessibility and a manual keyboard pass on Home, a case, Services and Contact, mobile and desktop, with no serious issues. No numeric Lighthouse performance target is set in this spec.
- workLabel, /case-studies routes, typographic card fallback, text-first cases, and the Home hero result/quote fallback all pass their page-level checks. Sample badges are visible. showPrices off hides every price.

## Sources {#sources}

- [Northway: Skala template #1, segment and page structure (proposal), including tokens](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6): cursor.com/canvas
- [Skala templates: market research, round 1](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/f6dc1261-5f6e-4d9f-a922-dba553d6a5fd): cursor.com/canvas
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): W3C

