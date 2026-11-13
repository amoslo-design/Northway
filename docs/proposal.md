# Northway: segment and page structure (proposal)

This is the repo copy of the UX Lead proposal, adopted as the direction for Northway. Source Page (12 November 2026, Europe/Stockholm): [Northway: Skala template #1, segment and page structure](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6).

**Status.** Amos adopted this proposal, re-aimed at consultants, strategists and small non-design agencies. The five structural decisions (text-first cases, cards without images, `workLabel` default "Case studies", Insights as a primary path, result-or-quote hero) are locked and are already in this Page and in [docs/spec.md](spec.md). The build brief is the spec, plus [docs/plan.md](plan.md). This file is the "why" and the earlier IA argument. Where this file and the spec disagree, follow the spec.

**Design tokens are delivered.** Ignore Inter and Skala Blue or Navy as the template brand. Use [design/tokens](../design/tokens/) (Hanken Grotesk, canvas `#DBDBD8`, black accent). The token *names* and the component, state and layout lists in the "Token and asset needs" section still apply.

**Week-one ship is the Code edition only** ($149), locked by Amos on 12 November 2026, Europe/Stockholm. Figma ($199) and Framer ($249) come later.

**Pricing caveat (keep this honest).** Professional-services templates sell at a lower median on Webflow (around $79). The marketplace figures in this proposal came from the design-studio and agency shelf. Willingness to pay was not gathered from consultants who cannot design. The $149 / $199 / $249 bundle is Amos's judgment, and he has confirmed those prices and the Code-first week-one plan. Do not treat the price as evidenced for this buyer. See [docs/research.md](research.md).

---

## Contents

- [Recommendation](#recommend)
- [Why this segment](#why)
- [Page structure](#structure)
- [CMS and components](#cms)
- [Token and asset needs from Designer](#tokens)
- [Trends to use and avoid](#trends)
- [Path to custom work](#upsell)
- [Questions for Amos](#questions)
- [Sources](#sources)

> **Proposal, 12 November 2026, Europe/Stockholm.**
>
> Grounded in the round-1 template research and in Skala's earlier conversion work. Figures below are from those sources, not new sales data. Judgment calls are labelled. This proposal has been adopted. The build brief is the spec and the week-one plan.

## Recommendation {#recommend}

- **Consultants:** Template #1
- **AI / B2B SaaS:** Runner-up
- **$99–$149:** Paid agency hold
- **$149–$249:** Bundle on skala.design

Template #1 is named Northway: each template has one name, used as both the product name and the fictional demo studio, shown here as a small strategy and growth consultancy. Build the first sellable kit as a premium studio-style site for consultants, strategists and small non-design agencies (marketing, dev, architecture and interior studios, copywriters) who need that site and cannot design one. The product difference is easy editing: Framer CMS, agent skills, and honest empty states. Designers are not the main buyer. The $149–$249 bundle and the custom-work ladder are a judgment for this audience, not a measured price in the research. v1 launch, one week: ship the Code edition ($149) as a complete kit; Figma ($199) and Framer ($249) follow at the same quality. Prices stay $149 / $199 / $249.

### Who it's for, and who it's not

| For | Not for |
| --- | --- |
| Consultants and strategists who need a premium studio-style site and cannot design one. | Designers and design studios as the main buyer. They can already design, or they want a portfolio kit made for visual work. |
| Small non-design agencies and practices: marketing, development, architecture and interior studios, copywriters. | Teams whose site is a product (SaaS, waitlists, changelogs, integrations). That remains template #2. |
| Buyers who will edit content themselves. The Framer/CMS path, agent skills and honest empty states are the product for them. | Buyers who need a visual-first portfolio as the core of the kit. The Northway demo is written for text-first, outcome-led work. |

## Why this segment {#why}

|  | Consultants, strategists, small non-design agencies | AI-native B2B SaaS (runner-up) | Specialist professional services |
| --- | --- | --- | --- |
| Demand already paying | The closest paid comps are studio-style templates, not a measured consultancy category. Webflow Portfolio & Agency is 35% of templates and 30 of the top 100, led by Alture at $129. On Framer, Conversion, Spector, Neiden, Atlas Studio and Last Studio hold front-page places at up to $149. Those figures describe the design-studio and agency-portfolio shelf; they are not evidence of units sold to non-design consultants. The need this kit answers - a studio-quality site a non-designer can edit - is a judgment, not a new count. | Strong formation and funding signal: 74.2% of 795 YC companies in the 2026 batches are AI-native; 75% sell to businesses. They need a credible product site in days. Webflow Technology has 34 of the top 100. | US professional, scientific and technical services: 919,254 business applications in the 12 months to September 2026 (14.7%, up 28.2%). US data only, and applications are not paying customers. |
| Competition and saturation | Those premium comps are competitive, and often assume a designer-buyer or a visual portfolio. Completeness and craft already justify $99–$149 on that shelf. The product gap is a studio-style kit a non-designer can update (Framer CMS, agent skills), not another monochrome agency look. Framer does not publish sales, so this is placement and list price, not units sold, and not sales to this audience. | More crowded at the free end, including official Agent Templates (Sift, Saasbright). The risk is looking like another generic AI product site. | Webflow Professional Services is 17% of templates and 34 of the top 100, median $79. More price-sensitive. Framer often matters more than a Next.js codebase. |
| Fit with custom work (10–40k EUR aim) | The research called design studios the segment most likely to hire Skala for a custom build, and assumed they buy Figma. That Figma assumption should not be carried over. For consultants and non-design practices, implementation help may matter more, because they cannot design the site themselves. Ladder: kit (Framer/CMS) → implementation → custom. This is a judgment, not a new sales figure. | A funded team can start on a kit and come to Skala later. The site type (plans, waitlist, changelog, integrations) is a different product, so the hand-off is longer. | A plausible implementation client. Weaker as a 10–40k EUR custom pipeline, and more likely to stop at a no-code launch. |
| Skala's own site as proof | The IA still matches: work, services, about, enquiry, process, fixed price. The case-study template is still the product, written in the spec as text-first outcomes rather than a visual portfolio. skala.design can show craft and IA, but it is a design studio site, so it is weaker proof for a non-designer buyer. | Skala's studio site is not a SaaS product site, so it is weaker proof for this kit. | Some overlap (trust, services, enquiry), less overlap with a work-first portfolio. |

### Why not SaaS first

The formation signal for AI-native B2B is the strongest of the three, and $149–$249 was a realistic kit price in the research estimates for studio-style templates. It is still the wrong first product. The category is crowded with free Agent Templates; the visual risk (neon, mesh, generic “AI”) is the opposite of Skala's direction; and Skala would be selling a site type it does not itself live on. Use it for template #2, once the first kit has a craft reputation and a sales channel on skala.design.

### Why not designers first

Design studios were the research's suggested first test, and they remain the buyers of the comps cited above. They are no longer the main buyer for this kit. A designer can already make a site, or they want a visual portfolio template. This kit is for people who need that studio quality and cannot design it, and who will edit it themselves. Listing pitch: a premium studio-style site, no design skills required, easy to update in Framer, with result-led cases, optional published prices, and a clear process.

### What Skala wins on, in a crowded paid category

Atlas Studio and Last Studio already sit at the observed $149 Framer ceiling, and Korda at $99, with CMS, agent skills and complete page sets - made, in practice, for designer and agency-portfolio buyers. Skala should not compete on looking like another monochrome agency template for designers. The product difference for this audience is a studio-quality site a non-designer can run: Framer CMS and agent skills first, a result-led case study that works for text-first work (outcome, challenge, approach, results, optional images - omit any block that is empty, never invent proof), optional published fixed prices with typical-project scenarios, a clear process, honest empty states, and a path to hire Skala for implementation. That is the listing pitch.

> **Research that no longer carries over, unaltered.**
>
> The marketplace share, list prices and “paid hold” figures above were observed in the design-studio and agency-portfolio category. They are the closest comps for a studio-style template, not demand proof for non-design consultants. “They buy Figma” was a fit argument for design studios and should not be assumed here; Framer/CMS and implementation are the stronger product fit, and the Figma edition is unproven for this buyer. skala.design is weaker proof, because Skala is a design studio and designers are not the main buyer; craft and IA can still be shown. The specialist professional services column is closer to this audience than the original #1 pick, but the research did not isolate consultants who cannot design, and it found that category more price-sensitive (Webflow Professional Services median $79). Do not treat the $149–$249 bundle as evidenced for this audience. Willingness-to-pay estimates in the round-1 research were not gathered from this buyer.

## Page structure {#structure}

Ten destinations, matching the completeness of premium paid listings (Atlas Studio lists 10 pages plus CMS templates). The work index is labelled Case studies by default (settings.workLabel, editable); the v1 routes are /case-studies and /case-studies/[slug] and do not follow the label. Insights is a primary nav item and a Home section, omitted when there are no published posts. Pricing is not its own nav item: it folds into Services and can be switched off in one place.

**Sitemap**

- **Home** (`Work-first; prices optional`)
- **Case studies** (`/case-studies`)
- **Case study** (`CMS template`)
- **Services** (`Optional published prices`)
- **About** (`Team optional`)
- **Insights** (`Primary; hidden if empty`)
- **Post** (`CMS template`)
- **Contact** (`Enquiry, ≤4 fields`)
- **Privacy, Terms, Cookies** (`Footer only`)
- **404** (`Recover`)

**Links between pages**

- Home -> Case studies (nav)
- Home -> Services (nav)
- Home -> About (nav)
- Home -> Insights (nav if posts)
- Home -> Contact (nav / CTA)
- Case studies -> Case study (CMS)
- Insights -> Post (CMS)
- Case study -> Contact (end CTA)
- Services -> Contact (pre-selects)
- About -> Contact (CTA)
- 404 -> Home (recover)
- 404 -> Contact (recover)

### Pages at a glance

| Page | Route | Nav | Conversion goal | Primary CTA |
| --- | --- | --- | --- | --- |
| Home | / | Logo | Start an enquiry, or open Case studies or Services. | Start a project |
| Case studies | /case-studies | Yes (label from workLabel) | Open a case that feels like their brief. | Cards go to the case. Bottom: Start a project. |
| Case study | /case-studies/[slug] | No | Trust a real result, then enquire. | Start a project |
| Services | /services | Yes | Understand the offer and, if shown, the price; pick a path. | Start a project (pre-selects the service) |
| About | /about | Yes | Trust the studio, then enquire. | Start a project |
| Insights | /insights | Only if a post exists | Open a post. Writing is a primary proof path, not a side journal. | None required. Optional quiet CTA at the end. |
| Post | /insights/[slug] | No | Finish the piece; optional enquiry. | Start a project, quiet, at the end |
| Contact | /contact | Yes | Submit an enquiry or book a time. | Send message, or Pick a time if a calendar is set |
| Privacy, Terms, Cookies | /privacy, /terms, /cookies | Footer | Legal clarity. Not a conversion page. | None |
| 404 | - | No | Recover to Home, Case studies or Contact. | Start a project |

### Section order on each page

Switch the control for the section sequence, the goal, and any empty or optional states. One primary CTA in view at a time. The same label sitewide.

## Home {#page-home}

For this segment the work is the product, so Case studies comes before Services - a judgment call, and a deliberate difference from Skala's own site, which leads with price while its case library is still growing. The hero leads with a result or a quote, then a short heading, lede and optional from-price. Insights sits high on Home as a proof path, and is omitted when there are no posts. If the Projects collection is empty, Services moves up and Case studies shows an honest empty state, not a fake grid.

| # | Section | Role | Notes |
| --- | --- | --- | --- |
| 1 | Hero | Lead with a result or a quote, then who it is for, a short heading, and an optional from-price, in under 10 seconds. | Primary: Start a project. Secondary: See case studies (from workLabel), or See services if there are no cases. If neither result nor quote is set, fall back to heading and lede. Optional image; no empty frame. Never invent a result or quote. |
| 2 | Selected case studies | Show 3–6 cases with a one-line result on each card. | With cases: this is section 2. Without: an honest empty panel and a link to Services. Image optional; typographic fallback is client, outcome line, tags. Never placeholder clients or an empty image frame. |
| 3 | Insights teaser | Two or three latest posts. | Primary proof path. Omit the whole section if the collection is empty. |
| 4 | Proof | Credibility without invention. | Real client names or logos only. If none, hide the strip or show editable studio principles - not a fake logo row. |
| 5 | Services teaser | Three offerings, optional prices, one typical scenario each. | Moves up to section 2 when Case studies is empty. ‘See all services’. Prices follow the global show/hide switch. |
| 6 | How a project runs | Lower risk with a short, fixed process. | Four steps, copy editable. Stack on mobile. Quiet, not a second signature animation. |
| 7 | Studio, short | What the studio believes, in two lines. | Link to About. No required portraits or names. |
| 8 | FAQ, short | Top objections on Home. | Accordion, about four items, from the FAQ collection. Link to the full list on Services. |
| 9 | Final CTA band | One clear next step. | Repeat the promise and Start a project. No second primary action. |

## Case studies {#page-work}

| # | Section | Role | Notes |
| --- | --- | --- | --- |
| 1 | Header | Name the index and set the promise: work with outcomes. | Empty subtitle if there are no cases yet. |
| 2 | Filter | Find a business like theirs, by sector. | Show only when there are at least four cases. Default: All. |
| 3 | Case grid | Scan and open a case. | Card: client, outcome line, tags (sector, year, Sample). Image optional; typographic fallback when there is no image, with no empty frame. No invented figures. |
| 4 | Empty state | Be honest and point to Services and Contact. | Ship this as a designed state. Sample demo content is labelled Sample and is replaced on launch (see CMS). |
| 5 | Bottom CTA | Enquire after browsing. | Start a project. |

## Case study {#page-case}

The case-study template is the product. It is text-first: Outcome, Challenge, Approach, Results, then an optional image block. Omit any block that has no content - including results, quotes and images - rather than filling it with invented proof.

| # | Section | Role | Notes |
| --- | --- | --- | --- |
| 1 | Outcome | One-line result, client, sector, and the agreed goal. | Text-first lead. If there is no one-line result, lead with the project name and the goal instead. No required image here. |
| 2 | Challenge | Two or three sentences. | From the problem field. Omit if empty. |
| 3 | Approach | The work, in short labelled lines. | Buyer-editable labels. Omit if empty. |
| 4 | Results | The measured change, in plain words or a real number, plus an optional named quote. | Omit the section if empty. Never a placeholder percentage. Quote omits if quote or name is empty. |
| 5 | Images | Optional image block after Results. | Omit if empty. Captions required if the image is meaningful. Before/after is later, not week one. |
| 6 | Services used | Link back to the relevant service or package. | Optional. |
| 7 | CTA | Want this for your project? | Start a project. Then previous and next case. |

## Services {#page-services}

Judgment call: published prices are on by default, because stating the price is a Skala edge and a known buyer need. One switch in site settings hides every price and ‘from’ figure, for studios that will not publish them. Typical-project scenarios stay either way.

| # | Section | Role | Notes |
| --- | --- | --- | --- |
| 1 | Hero | What the studio offers, and that prices are fixed if they are shown. | Prices excl. tax, currency set in site settings. |
| 2 | Offerings | Three services or packages, with optional price and timeline. | One typical-project example per offering. A ‘typical’ mark is optional and editable. |
| 3 | What’s included | Compare inclusions in a plain table. | Ticks and words, not jargon. Hide the price row when prices are off. |
| 4 | Process | How a project runs, same four steps as Home. | Editable copy. |
| 5 | What’s not included | Avoid surprise. | Hosting, photography and similar, as editable exclusions. Optional add-ons. |
| 6 | FAQ | Ownership, tax, revisions, payment, timeline. | Full FAQ collection. |
| 7 | Final CTA | Pick a path and enquire. | Start a project, pre-selecting the service on Contact. |

## About {#page-about}

| # | Section | Role | Notes |
| --- | --- | --- | --- |
| 1 | Intro | Who the studio is for, and what it stands for. | Studio voice by default. No invented team size or offices. |
| 2 | Approach | How the studio works. | Process in prose, not a repeat of the full steps block unless useful. |
| 3 | Principles | A short set of beliefs. | Editable. Suggested defaults echo results, fixed price, and work that lasts - the buyer can rewrite them. |
| 4 | Team | People, if the studio wants them. | From the Team collection. Hide the section when empty. Solo consultants can show one person. |
| 5 | Tools | Optional stack line. | Hide if empty. |
| 6 | CTA | Enquire. | Start a project. |

## Insights {#page-insights}

| # | Section | Role | Notes |
| --- | --- | --- | --- |
| Index 1 | Header | Name the journal. | Buyer-editable title. The route stays /insights. |
| Index 2 | Post list | Scan and open. | Title, date, excerpt, cover. Optional tags. |
| Index | If empty | Do not leave a public empty blog. | Hide /insights from the nav and return a clean empty or redirect to Home. The demo ships with labelled sample posts. |
| Post 1 | Article | Title, author, date, body. | Author from Team if set. Readable measure, no decorative motion on the text. |
| Post 2 | End CTA | Optional enquiry. | Quiet Start a project, plus previous and next. |

## Contact {#page-contact}

Mobile-first. At most four form fields (name, email, service, optional message), because extra fields, especially textareas and dropdowns, are a known drag on completion. Say what happens next. A calendar embed appears only if a URL is set in site settings.

| # | Section | Role | Notes |
| --- | --- | --- | --- |
| 1 | Heading | Book or write, and when they will hear back. | Reply-time line is editable (default: within one working day). |
| 2 | Calendar | Pick a time, in the visitor's time zone. | Optional. Hide if no URL. Primary path when present, especially on mobile. |
| 3 | Form | Or send a short message. | Four fields max. Service pre-filled from a Services CTA. Success and error states are part of the kit. |
| 4 | Direct contact | Email, optional phone. | From site settings. Hide any empty line. |

## Legal and 404 {#page-legal}

| Page | Sections | Notes |
| --- | --- | --- |
| Privacy, Terms, Cookies | Short heading, body from CMS or static files, last-updated date. | Sample legal is clearly placeholder and must be replaced. Launch check flags it if still sample. Not a conversion path. |
| 404 | Short line, links to Home, Case studies and Contact, plus the primary CTA. | Same voice. No clever dead end. |

## Chrome (nav and footer) {#page-chrome}

| Element | Content | Notes |
| --- | --- | --- |
| Nav | Case studies · Services · About · Insights · Contact | The first item uses workLabel (default Case studies) and points to /case-studies. Insights is a primary item, omitted when there are no posts. Logo returns Home. Process is not in the nav. Pricing is not in the nav. |
| Nav CTA | Start a project | Same label as the rest of the site. Buyer-editable in settings. One primary in view. |
| Mobile nav | Same links, thumb-friendly CTA | Simple overlay. CTA pinned or at the foot of the menu. |
| Footer | Studio name, one-line promise, nav mirror, email, legal, optional credit | Credit is off by default on paid licences (see Path to custom work). |

> **QA before launch, judgment call.**
>
> Run a 5-second test (can five people say what the studio does, for whom, and what to do next?) and a first-click test for “start a project” and “see the case studies”. Use the demo content, on mobile first. This is a recommendation from Skala's earlier conversion plan, not a new study.

## CMS and components {#cms}

### Site settings (singleton)

One record, not a collection. This is what must be easiest to change, including for a non-designer in Framer.

| Group | Fields |
| --- | --- |
| Identity | Studio name, tagline, logo, favicon, default social image, language, workLabel (default Case studies). Hero lead: optional result, quote and image. |
| Brand tokens | Colours, type family (Inter by default), CTA label, nav labels. The demo may use Skala Blue and Navy; buyers must be able to rebrand without editing a design file in the Framer edition. |
| Contact | Email, optional phone, optional calendar URL, social links, form destination. |
| Switches | Show prices; show team; show insights; show testimonials; show process-principles when there is no client proof; show footer credit; studio ‘we’ vs solo voice. |
| Commerce copy | Currency, tax note (e.g. excl. VAT/sales tax), reply-time line. |

### Collections

| Collection | Key fields | Empty behaviour |
| --- | --- | --- |
| Projects | Title, slug, client, sector, year, date, featured, hero, gallery, one-line result, goal or KPI, problem, what we did, measured result (optional), quote and attribution (optional), related services, SEO. | Case studies index and the Home teaser show the honest empty state. On the case page, omit Challenge, Approach, Results, quote or the image block if those fields are empty. |
| Services | Title, slug, short line, body, price (optional), timeline, inclusions, typical scenario, order, featured. | Services page and Home teaser need at least one. Demo ships three sample offerings, labelled Sample. |
| Posts | Title, slug, excerpt, cover, body, author (ref Team), date, tags, featured, SEO. | Hide Insights in the nav and footer, and omit the Home Insights section. Do not leave a public empty blog. |
| Team | Name, role, bio, photo, links, order, show on About, can author posts. | Hide the About team section. Posts can run without an author. |
| Testimonials | Quote, name, role, company, optional photo, optional project ref, order. | Hide every testimonials block. No fake avatars. |
| FAQs | Question, answer, group (Home, Services, Contact), order. | Hide the FAQ section on a page with no items in that group. |

> **Sample content.**
>
> The live demo uses Northway as the fictional studio - a small strategy and growth consultancy (positioning, brand strategy and marketing) - plus sample cases, so the kit can be judged. Cases are written as text-first outcomes, not a visual portfolio. Every sample record is labelled Sample, is clearly fictional, and is on a replace-before-launch checklist. The Framer launch-check skill fails if sample content is still published. Demo cases must never be readable as Skala client work or as real results.

### Component list

Reusable sections, the same set in Next.js, Figma and Framer. The final list, including primitives and every state to draw, is in Token and asset needs from Designer.

| Component | Used on | Easy for a non-designer |
| --- | --- | --- |
| Nav and footer | Every page | Yes: labels, logo, CTA, credit switch, links. |
| Hero | Home, and a quieter variant on inner pages | Yes: result or quote lead, heading, lede, optional from-price, optional image, CTAs. Fallback is heading and lede. |
| Selected-work grid and case card | Home, Case studies | Yes: Projects CMS, including empty state and typographic fallback when there is no image. |
| Case-study body | Case template | Yes: text-first blocks (Outcome, Challenge, Approach, Results, optional images) omit when empty. |
| Proof strip | Home | Yes: real names, or principles, or hidden. |
| Services teaser and service offering | Home, Services | Yes: Services CMS and the price switch. |
| Comparison table | Services | Yes: inclusions on each service. |
| Process steps | Home, Services | Yes: step titles and body. |
| Studio short | Home | Yes: heading and two lines. |
| Team grid | About | Yes: Team CMS, hides when empty. |
| Testimonials | Optional Home or Services | Yes: hides when empty. |
| Insights teaser, post list, post body | Home, Insights, Post | Yes: Posts CMS, hides when empty. |
| FAQ accordion | Home, Services | Yes: FAQ CMS. |
| Final CTA band | Most pages | Yes: heading, sub, CTA label. |
| Enquiry form and calendar slot | Contact | Yes: fields are fixed; destination, calendar URL and success copy are settings. |
| Legal article and 404 | Legal, 404 | Yes: body and last-updated. Sample legal is flagged. |

### How the three editions map

| Edition | What the buyer gets | Content and updates | Motion and access |
| --- | --- | --- | --- |
| Code (Next.js), $149 | Production App Router site: pages, components, content model, setup guide. | Judgment call pending Amos: structured files (for example MDX in /content) in v1, so there is no vendor lock-in. Honest limit: this is not a non-designer CMS. A headless option can be a later add-on. | Same reduced-motion final pose as Skala's own site. Tokens in one theme file. |
| Code plus Figma, $199 | The above, plus a complete Figma file: variables, components, every key page, empty and priced/unpriced variants, and a short restyle note. | Figma is for designers. CMS field names are annotated on the components so the file and the site stay in sync. | Motion described, not baked into every frame. Variants for reduced-motion (static final pose). |
| Code plus Figma plus Framer, $249 | The above, plus a Framer remix with CMS, forms and agent skills. This is the edition that meets ‘easy to update’. | Framer CMS for every collection and the settings singleton. Agent skills: Rebrand; Add project; Add post; Toggle prices; Replace sample content; Launch check (SEO, legal still sample, empty states, contrast, reduced motion). | Motion components used with restraint; disabled to the final pose under prefers-reduced-motion. |

The Framer-only Marketplace edition ($79–$129) is the Framer file alone: CMS, forms, agent skills, legal, 404. Same structure, no Figma or Next.js. Marketplace licence stays single-use, as the platform requires. For this audience, Framer (the $249 bundle or the Marketplace file) is the path that delivers the no-design-skills, easy-editing pitch; the Code edition does not. v1 launch, one week: ship Code ($149) as a complete kit; Figma ($199) and Framer ($249) follow at the same quality. Prices stay $149 / $199 / $249.

## Token and asset needs from Designer {#tokens}

> **Three answers, for tokens now.**
>
> The final component list, every state that needs its own token, and the layout constraints. Draw each listed variant in Figma, bound to semantic tokens, not raw hex. This is not a brief to design finished pages yet.

### 1. Final component list

One set, shared across Next.js, Figma and Framer. Omit a block when its CMS collection is empty. Do not design a fake-filled fallback. Testimonials and measured results are real quotes and figures only.

### Primitives

| Component | Variants to draw | Notes |
| --- | --- | --- |
| Button, primary | Rest, hover, pressed, focus-visible, disabled, loading. Sizes: md (min 44px), lg (52px, hero and final CTA). | Pill. Accent fill, on-accent text. One primary in view. |
| Button, secondary | Same states and sizes. | Outline or quiet fill. Used for See case studies (from workLabel) and See services. |
| Button, ghost / text link | Same states. Md hit area 44px. | Nav-style and inline text actions. Underline on hover is enough. |
| Icon button | Rest, hover, pressed, focus-visible, disabled. Menu open and closed. | Menu, close, accordion plus. 44 by 44 minimum. Accessible name required. |
| Input (text, email) and select | Rest, hover, focus, error, disabled, filled. With and without helper text. | Height 44px. Label above, never placeholder-only. Helper or error below. |
| Textarea | Same states as Input. | Optional message field. Min height about 120px. Same focus and error treatment. |
| Tag / chip | Rest, hover, selected, focus-visible, disabled. Plus a Sample badge. | Work filters, sector, optional Typical mark. Selected is not colour alone. |
| Inline and footer links | Rest, hover, focus-visible, current. | Footer sits on inverse tokens. Current is for the nav only. Visited style not required. |
| Focus ring | Default on light, and inverse on black or Blue bands. | Global. 2px ring, 2px offset, focus-visible only. Never remove without a replacement. |
| Skip link | Focused (visible) and unfocused (visually hidden). | First focusable element on every page. |

### Chrome

| Component | Variants to draw | Notes |
| --- | --- | --- |
| Nav, desktop | Rest; current page; CTA as the primary button. Optional scrolled hairline. | Height 68px. Logo, Case studies (workLabel), Services, About, Insights (primary item; omit if no posts), Contact, primary CTA. Solid surface, sticky. |
| Nav, mobile | Closed and open. Menu button 44px. Overlay with links and a pinned CTA. | Simple overlay. Backdrop uses the overlay token. Reduced motion: instant open, no slide. |
| Footer | On inverse tokens. Credit on, and credit off (off is the paid default). | Studio name, one-line promise, nav mirror, email, legal. Hide empty contact lines. |

### Sections and blocks

| Component | Variants to draw | Notes |
| --- | --- | --- |
| Home hero | Result lead; quote lead (if no result); heading+lede fallback (if neither). With and without from-price. With and without image; typographic hero when image is empty, no reserved frame. | Reading order: result or quote first, then a short H1, lede, from-price, CTAs. Secondary: See case studies (from workLabel), or See services if there are no cases. Never invent a result or quote. |
| Inner hero | Quieter heading and optional intro at reading measure. | Case studies, Services, About, Insights, Contact, Legal, 404. |
| Work grid and case card | Card: rest, hover, focus-visible. With image, and typographic fallback (client, outcome line, tags) when image is empty - no empty frame. Grid: 1 / 2 / 3 columns. Empty state. | Empty is a designed state, never a fake grid. No invented figures. |
| Work filter chips | Rest, hover, selected, focus. Default selected: All. | Only when there are at least four cases. Uses the tag tokens. |
| Case-study body | Each block present and omitted: outcome, challenge, approach, results (quote sits here if present), optional images, services used, prev/next. | Text-first. The product of the kit. Omit empty blocks. If images have type on them, use scrim tokens or a solid panel. |
| Gallery / media | Single image or gallery, with caption. Hidden when empty. | Optional image block after Results. Captions or alt on meaningful images. Explicit dimensions. Before/after is later, not week one. |
| Proof strip | Real names or logos; principles (no logos); hidden. | Never a placeholder logo row. |
| Service and pricing blocks | Package card: price on, price off, optional Typical mark. Home teaser and Services page. | One global switch hides every price and from-figure. Typical-project scenario stays either way. |
| Comparison table | Price row on and off. Three columns of offerings. | Ticks and words. On an inverse or Blue band, use those tokens, not Blue fill on Navy. |
| Process steps | Four steps, horizontal on desktop, stacked on mobile. Reduced-motion static. | Editable titles and body. Quiet, no signature animation. |
| Studio short, principles, team grid | Team: with people, and hidden when empty. Include a one-person (solo) state. | No required portraits. No invented team size. |
| Testimonials | With and without a photo. One quote and a short set. | Real, named, approved quotes only. If the collection is empty, omit the whole block. No placeholder quote, no fake avatar. |
| Insights teaser, post card, post body | Teaser and index: with posts, or hidden. Post: with and without author. | Body uses the reading measure. No decorative motion on the text. |
| FAQ accordion | Collapsed, expanded, hover, focus-visible. Home short list and Services full list. | If a group is empty, hide the section. Reduced motion: instant open, no height animation. Plus icon also has transition-none. |
| Final CTA band | Inverse (black) and brand (Blue) variants. Heading, sub, primary button. | Uses inverse and brand-band tokens. One primary CTA. See contrast rules below. |
| Enquiry form and calendar slot | Form: default, submitting, field error, form error, success. Calendar: present and hidden. | Four fields max: name, email, service (pre-fillable), optional message. Success and error are part of the kit. Calendar hides if no URL. |
| Legal article and 404 | Legal: body at reading measure, last-updated. 404: short recover. | Sample legal is flagged. 404 links to Home, Case studies, Contact, plus the primary CTA. |
| Empty state (shared) | Case studies empty; generic empty for a hidden-or-empty collection. | Honest copy, link to Services or Contact. Must not advertise Skala. |
| Section header | Title, optional intro at reading measure. | No eyebrow labels. |
| Prev/next pager | Both sides present; first item (no prev); last item (no next). | Cases and posts. 44px hit area. |
| Image with scrim | Soft, strong, and bottom-gradient. Text on and text off. | Only for type over photos. If contrast fails, use a solid inverse panel instead. |
| Sample badge | Default only. | On every demo record. Uses the sample tag tokens so it cannot be mistaken for real proof. |

### 2. States and variants that need their own tokens

Semantic tokens, with demo defaults below. Do not implement these as raw hex, or as opacity-only overlays, except the scrims, which are alpha by nature. Meaning is never colour alone (WCAG 1.4.1). Hover styles apply only under (hover: hover) and (pointer: fine).

| State | Tokens to create | Demo default and rules |
| --- | --- | --- |
| Form error | color.danger, color.danger.muted, color.danger.border, color.danger.text | Demo: text and border #C62828, fill #FDECEA, on light. Error message in text, below the field, plus a text prefix or icon - not a red border alone. Verify 4.5:1 for error text on its fill and on the page. The Contact form sits on a light surface, not on an inverse band. |
| Form success | color.success, color.success.muted, color.success.border, color.success.text | Demo: text #1B7F4A, fill #E6F5EC. Used for the post-submit panel and any success icon. Same rule: text (and optional icon), not colour alone. Verify 4.5:1. |
| Disabled | color.text.disabled, color.bg.disabled, color.border.disabled | Explicit tokens, not 40% opacity on the live control - opacity is hard to rebrand and can muddy the accent. Demo: text #8A8A82, fill #F7F7F5, border #E8E8E4. No hover, no pointer. aria-disabled. Disabled contrast is exempt under WCAG; still keep it readable. |
| Focus | color.focus, color.focus.inverse, focus.width, focus.offset | 2px ring, 2px offset, :focus-visible only. Demo: #1F4FE0 on light (about 6.3:1 on white). Inverse: #FFFFFF on black and on Blue bands. Ring against the adjacent background must meet 3:1 (WCAG 1.4.11). Do not use Blue #1F4FE0 as a ring on black - that pair is only about 3.3:1 against black, and it fails on Navy. |
| Tags | tag.bg, tag.text, tag.border, tag.hover.bg, tag.selected.bg, tag.selected.text, tag.selected.border, tag.sample.bg, tag.sample.text | Demo rest: fill #F7F7F5, text Navy #0B1B3F, border #E8E8E4. Selected: fill #E8EEFC, text Navy, border #1F4FE0, and a non-colour cue (weight 600 or a check). Sample badge: fill #FFF4D6, text #9A6700, so demo content is obvious. Disabled tags use the disabled tokens. |
| Dark / inverse band | inverse.bg, inverse.text, inverse.text.secondary, inverse.border, inverse.cta.bg, inverse.cta.text, inverse.cta.hover, inverse.cta.pressed, inverse.focus (alias of color.focus.inverse), overlay.backdrop | Inverse background is #000000, not Navy - that already follows Amos's Skala dark-mode decision. Text #FFFFFF; secondary a solid light grey that passes 4.5:1 (not white at 80% unless verified). Primary CTA on inverse: white fill, Navy or black text (not Blue fill on black: #1F4FE0 on #000 fails 4.5:1). Footer uses this set. Mobile nav backdrop: overlay.backdrop, demo rgba(0, 0, 0, 0.48). |
| Brand / Blue band | brand-band.bg, brand-band.text, brand-band.text.secondary, brand-band.cta.bg, brand-band.cta.text, brand-band.cta.hover, brand-band.cta.pressed, brand-band.focus | Demo bg #1F4FE0, text #FFFFFF (about 6.3:1, AA). Secondary white must still pass 4.5:1; prefer solid #FFFFFF or a verified light tint. CTA: white pill, Navy text (Navy on white is about 17:1). Do not put Navy text on Blue (about 2.7:1, fail), and do not put Blue fill buttons on Navy or black. |
| Image overlays and scrims | scrim.soft, scrim.strong, scrim.gradient, scrim.text | Demo, Navy-based: soft rgba(11, 27, 63, 0.24); strong rgba(11, 27, 63, 0.56); gradient transparent to rgba(11, 27, 63, 0.72) at the text edge (typically the bottom 40%). Text on scrim is #FFFFFF, only on the strong end. If a photo would break contrast, use a solid inverse panel instead of type on the image. No decorative coloured glow. |
| Hover and pressed | color.accent.hover, color.accent.pressed, color.surface.hover, color.surface.pressed, shadow.hover, plus the inverse and brand-band CTA hover/pressed already listed | Demo: accent hover #1A42BD (live Skala), pressed a step darker #15389F. Surface hover #F7F7F5, pressed #EFEFEA. Card hover: shadow 0 8px 24px rgba(11, 27, 63, 0.08), no blue glow. :active uses pressed. Colour change in 120ms; optional translate of at most 8px; under reduced motion, colour only and 0ms. No stuck hover on touch. |
| Selected | selected.bg, selected.text, selected.border, selected.indicator | Used for filter chips, a chosen service on Contact, and nav current. Demo: fill #E8EEFC, text Navy #0B1B3F, border #1F4FE0. selected.indicator is a 2px underline or a check - required, not optional. Nav current: Navy text plus underline, not a filled bar. FAQ open uses weight 600, not a new colour. |

> **Accent on dark.**
>
> #1F4FE0 on #000000 is about 3.3:1 and is not a text or large-control colour on inverse. If a Blue link is needed on black, add color.accent.inverse (Skala's live dark text blue is #8EABFF - verify 4.5:1 before using). Prefer white links on inverse bands.

### 3. Layout constraints

Content width and page gutters reuse what Amos already preferred in the Skala Figma file (layout/max-width 1280; space/padding-page-x 32 / 24 / 16). The rest is a locked judgment for this template, on the 8pt grid Amos asked for in that file. 1280 is the inner content width; gutters sit outside it.

| Token | Value | Where it applies |
| --- | --- | --- |
| layout.content.max | 1280px | Main content wrapper. Media and inverse or Blue bands may go full-bleed; their inner content stays on 1280. Already decided in Skala Figma. |
| layout.measure | 66ch (about 640 to 660px at 16px Inter) | Insights posts, legal, long body, section intros. New token; add it. Not the same as content max. |
| layout.gutter.mobile / tablet / desktop | 16px / 24px / 32px | Page padding on the inline axis. Mobile default, tablet from 768, desktop from 1024. Already decided in Skala Figma (space/padding-page-x). |
| Breakpoints | Mobile default (0 to 767). Tablet 768. Desktop 1024. Wide 1280 (type only, not a fourth gutter). | Three layout modes, matching the Figma Breakpoint collection. Design frames from 360px up; 320px must not overflow. |
| Grid columns | 4 columns below 768; 12 columns from 768 up. | Inside the 1280 content box. |
| Grid gutters (between columns) | 16px below 768; 24px from 768 up. | Not the same as page gutters. 8pt grid. |
| Work grid | 1 column below 768; 2 columns 768 to 1023; 3 columns from 1024. Gap 24px. | Case cards. Services offerings: 1 column below 1024, 3 columns from 1024, gap 24px. |
| Section spacing, major | 96px vertical padding on mobile and tablet; 128px from 1024. | Judgment: between the Farover 80 to 120 note and live Skala sections (often 96 / 144). Comfortable, not sparse. Token: space.section. |
| Section spacing, inner | 24px between blocks in a section on mobile; 40px from 1024. | space.section.inner. Stack to the 8pt scale (8, 16, 24, 32, 40, 48, 64, 80, 96, 128). |
| Minimum target size | 44 by 44px, all interactive controls. | Buttons, icon buttons, inputs (height), nav links, accordion headers, filter chips, pager, menu and close. The whole case card is the target. 44 is the WCAG 2.5.5 AAA size (2.5.8 AA is only 24) and matches Skala's md control height. It is the floor, even though it is not an 8pt multiple. At least 8px between adjacent 44px targets if they are separate controls. |
| Nav height | 68px, and the same for scroll-padding-top. | Matches live Skala chrome. Menu button still 44 by 44 inside it. |
| Body type | Inter, 16px, line-height 1.6. Minimum body 16px on marketing pages. | Template default is one family, Inter, so rebrand is one swap. Display size is Designer's call; clamp hero type so it does not wrap awkwardly below about 390px (a lesson from Skala's own hero). |

### Assets to ship with the tokens

- Logo slot: wordmark and mark, on light and on inverse. The live Skala mark is still open; the template uses a placeholder studio mark, clearly sample.
- Favicon and a default social image, both swappable in site settings.
- Sample project and post images, labelled Sample, with explicit dimensions. No Midjourney team photos, no fake avatars.
- Icons: menu, close, accordion plus, form error, form success. Always with a text label or accessible name. One consistent set (Lucide or equal), 24px, 1.5 to 2px stroke. Confirm the set with Amos if it is not already chosen.

## Trends to use and avoid {#trends}

**For**

- Work-first layout, sharp type, a calm grid, colour held back. This already leads the better free and paid listings, and it matches Skala (Inter, Navy, Blue only as an accent).
- Completeness as the premium argument: CMS, legal, 404, forms, empty states, lifetime updates, and a Framer Agent skill set - the clearest new product type in 2026.
- Result-led case studies and optional published fixed prices. These are Skala's difference, not a marketplace fad.
- Motion as a few optional components, used with restraint, never on every section.
- Editorial, restrained register (the research's monochrome and sharp-type trend) rather than cinematic decoration.

**Against**

- The generic ‘AI-generated’ look: mesh gradients, neon glow, decorative 3D, infinite logo marquees, Midjourney team photos, fake avatars, lorem that a buyer might ship.
- ‘AI’ as a visual style or in the default copy. Agent skills belong in the Framer file, not on the buyer's homepage.
- Tactile component-rank effects (dither hover, ink-reveal, glow pricing, 3D viewers) as defaults. Offer at most one, optional, never as the identity.
- Clever headlines that any studio could say, and that fail a 5-second test.
- Invented testimonials, client logos, or result percentages - in the demo or in empty states.

### Accessibility, motion, performance

## Path to custom work {#upsell}

1. **The delivered site is the buyer's**
2. **Optional credit, off by default on paid licences**
3. **Implementation, offered after purchase and on the demo**
4. **Upgrade to custom when they outgrow the kit**
5. **Agencies as partners**

## Questions for Amos {#questions}

1. Confirm consultants, strategists and small non-design agencies as template #1, with designers not the main buyer, and AI-native B2B SaaS as template #2?
2. Published prices on by default, with one switch that hides every price - agree?
3. Should skala.design share this IA and component set (same craft, Skala content) so the studio site is live proof, or stay a separate custom build?
4. Announce an implementation offer when the kit launches? The exact price can wait; yes or no on naming the offer is enough.
5. Credit the kit price toward implementation or custom work? If yes, for how long?
6. Agree that paid licences have no required footer credit, and that the credit switch is off by default?
7. For the Code edition in v1: structured content files (no extra CMS product), or a headless CMS in the box?
8. Ship a multi-site or agency licence with this first release, and at what price - or add it later?

Framer Marketplace list price ($79, $99 or $129) and an all-access pass are still open from the research; they do not block this page structure.

## Sources {#sources}

- [Skala templates: market research, round 1](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/f6dc1261-5f6e-4d9f-a922-dba553d6a5fd): cursor.com/canvas
- [Skala website: conversion structure and copy plan](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/917d1145-7724-4b73-9f12-40418f1e8593): cursor.com/canvas
- [Framer Marketplace](https://www.framer.com/marketplace): framer.com
- [Atlas Studio listing, $149](https://www.framer.com/marketplace/templates/atlas-studio/): framer.com
- [Korda listing, $99](https://www.framer.com/marketplace/templates/korda/): framer.com
- [Are Framer templates free? Trending price count](https://www.vincentschmalbach.com/are-framer-templates-free/): vincentschmalbach.com
- [Webflow Template Marketplace statistics](https://webflow-ranks.com/stats): webflow-ranks.com
- [How Long Do Users Stay on Web Pages?](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/): Nielsen Norman Group
- [State the Price to Give B2B Sites a Competitive Advantage](https://www.nngroup.com/articles/show-price/): Nielsen Norman Group
- [Show Prices for Common Scenarios](https://www.nngroup.com/articles/show-prices-for-common-scenarios/): Nielsen Norman Group
- [Which Types of Form Fields Lower Landing Page Conversions?](https://blog.hubspot.com/blog/tabid/6307/bid/6746/which-types-of-form-fields-lower-landing-page-conversions.aspx): HubSpot
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/): W3C
- [Use of Color (1.4.1)](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html): W3C WAI
- [Animation from Interactions (2.3.3)](https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html): W3C WAI

