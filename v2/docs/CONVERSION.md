# Northway — conversion principles and hard rules

**Proposal only.** 13 November 2026, Europe/Stockholm. For Amos to review before anything goes to GitHub. Does not change the repo, the Pages, or Designer's files.

Visual and brand treatment defers to Designer: [`/workspace/northway-v2/design/`](/workspace/northway-v2/design/). Read that folder first.

---

## Summary

A first-time visitor must, within about ten seconds, know who Northway is for, the outcome they can expect, a published price if prices are on, and what to do next.

There is one primary action: **Start a project**, always to `/contact`. Every other path is a text link or the work itself.

Proof is specific, named and believable — or the block is omitted. Never fake it, never a logo wall, never a “Sample” label on the proof.

Demo content is a fully written fictional studio, with **one** honest site-level disclosure. This replaces per-item Sample badges. That is a change from the earlier build-spec rule, and it needs Amos’s confirmation.

These are conversion and content rules, not a visual system. Type, colour, tokens and motion stay with Designer.

---

## Designer first

As of 13 November 2026, 09:52 Europe/Stockholm, the design folder contains one file:

- [`/workspace/northway-v2/design/NOTES-FOR-UX.md`](/workspace/northway-v2/design/NOTES-FOR-UX.md) — visual direction (“Northern counsel”), the Briefing hero, a proposed type scale, and six signature components. Full values are still to land in `BRAND-V2.md`.

This document uses Designer’s section names so the two sets map 1:1. Visual specifics (Newsreader / Hanken Grotesk, pine, copper waymark, paper surface, Price Tablet as a rate sheet, Enquiry as a letter, Pine Band) are Designer’s and are not restated as conversion rules. Where a conversion rule and a note in that file disagree, the item is in [Open with Designer](#open-with-designer) — not resolved here.

---

## Section names (1:1 with Designer)

| This document | Designer (`NOTES-FOR-UX.md`) | Route / role |
|---|---|---|
| The Briefing | The Briefing (hero) | `/` first viewport |
| The Case Ledger | The Case Ledger (selected work) | Home teaser; index is `/case-studies` |
| Case study | (page, not a home section) | `/case-studies/[slug]` — text-first: Outcome, Challenge, Approach, Results |
| Insights teaser | (page exists; not a signature) | Home section; index `/insights`. Omit when there are no posts. |
| The Price Tablet | The Price Tablet | Home teaser and `/services` |
| The Process Path | The Process Path | Home and `/services` |
| Studio short | — | Home; links to `/about` |
| FAQ short | — | Home; full list on `/services#faq` |
| The Enquiry Sheet | The Enquiry Sheet | `/contact` |
| The Pine Band | The Pine Band (closing CTA) | End of most pages |
| Footer | Footer, quieter, under the Pine Band | Holds the single demo disclosure |

Public label for the work index is `settings.workLabel`, default **Case studies** (Amos, locked). Routes stay `/case-studies`. Designer used “Work” as a temporary name and will retitle to match.

---

## Principles

Short, cited, and not given a number we did not verify. Full URLs are in [Sources](#sources). Every source below was fetched on 13 November 2026.

1. **The first ten seconds decide if the visitor stays.** People often leave a page in 10–20 seconds. To earn a longer look, the value proposition has to be clear within about ten seconds: who it is for, what changes, and what to do next. (NN/g, *How Long Do Users Stay on Web Pages?*, citing Liu, White and Dumais, 2010.)
2. **The homepage is an elevator pitch.** It must say who the studio is and what it does, without making people guess. Show that through real examples, then prompt a clear action. Keep the page simple. (NN/g, *Homepage Design: 5 Fundamental Principles*.)
3. **Headings have to work out of context, and be useful.** Specific beats clever. A line any studio could say has low information scent; visitors will not spend time inferring what it means. (NN/g, *Headings Are Pick-Up Lines*.)
4. **Publish the price, and show it on typical work.** On B2B sites, price is a top information need. Hiding it feels evasive; people go to a competitor who shows it. If a single exact figure is hard, give prices for representative engagements — a simple sample beats a complicated calculator. (NN/g, *State the Price…* and *Show Prices for Common Scenarios*.)
5. **One obvious primary action, visually distinct from everything else.** If several buttons share the same style, people hesitate. The primary control needs its own styling, prominence, consistent placement and descriptive label. Secondary paths should not compete with it. (Baymard, *Button Design*.)
6. **Proof works when it is credible, relevant and specific, and sits near the ask.** It backfires when it looks thin, generic or fake. If there is no real proof, do not invent it — omit the block. (NN/g, *Social Proof in the User Experience*; CXL, *Social Proof: Definition, Types, Examples…*.)
7. **Forms: few fields, visible labels, one column, say what happens next.** Cutting a field improves completion. Labels sit above empty fields, never as placeholder-only text. Mark optional fields. Errors are text (and a non-colour cue), not a red border alone. Tell the visitor when they will hear back, and what the submit button does. (NN/g, *Website Forms Usability* and *Placeholders in Form Fields Are Harmful*; Baymard, field-label research; CXL, *10 Principles of Effective Pricing Pages*, “Tell them what happens next.”)
8. **Visual hierarchy is a conversion tool.** Guide the eye in order of importance, with a clear range of scale. If everything is the same size and weight, nothing is. (NN/g, *5 Principles of Visual Design in UX*.) The exact type scale is Designer’s.

A recommended check before sale, not a week-one blocker: a 5-second test (can people say what the studio does, for whom, and what to do next?) and a first-click test for “start a project” and “see the case studies,” on the demo, mobile first. (NN/g, *5-Second Usability Test*; already in the build spec.)

---

## Hard rules

Testable. **MUST** / **MUST NOT**. A rule fails if a reviewer can see the forbidden state on a shipped page. Visual how is Designer’s; these rules are about content, order, behaviour and honesty.

### The Briefing (hero)

- **MUST.** In the first viewport, a visitor can answer: who this is for, what outcome to expect, and what to do next. If `showPrices` is on and a from-price is set, a published from-price is also visible without scrolling on desktop (1280). (Placement of that from-price is [open with Designer](#open-with-designer).)
- **MUST.** The hero leads with a specific result or a named quote when one is set. If both `heroResult` and `heroQuote` are empty, fall back to heading and lede — no empty lead slot. Never invent a result, quote or image. (Amos, locked. How this sits next to Designer’s “display promise first, proof line under the CTA” is [open](#open-with-designer).)
- **MUST.** One primary CTA in the Briefing, label from `settings.ctaLabel` (default **Start a project**), href `/contact`. No second pill. The featured case, a result used as a text link, or “See case studies” (from `workLabel`) may exist as a secondary path — as text or as the work itself, not as a second equal button.
- **MUST.** If `heroImage` is empty, the Briefing is typographic. Do not reserve an empty image frame. A featured-case photograph is optional, not required for the hero to work.
- **MUST NOT.** A generic slogan as the only large statement, with the result visually and verbally secondary (small sidebar, or only under the button, with no result at display scale). This is the failure mode of Codex v1, and it is in [Open with Designer](#open-with-designer) because Designer’s Briefing still leads on the existing slogan.
- **MUST NOT.** Eyebrow labels, twin pills, a three-card row, or “Sample result, for demo only” (or any demo disclaimer) inside the hero copy. (Designer aligns on no eyebrow, no twin pills, no three-card row in the first screen.)

### Proof

- **MUST.** Proof is a specific outcome, a named quote (name required), or a named client — tied to a real demo record and placed near an ask (hero, ledger row, Price Tablet, Pine Band).
- **MUST.** If there is no result, quote or name to show, omit the proof slot. The page still has to work.
- **MUST NOT.** Invented testimonials, logo walls, placeholder avatars, percentage lifts, or a “principles” strip presented as if it were client proof. Studio principles may exist on About; they are not a substitute for proof on Home.
- **MUST NOT.** A builder-facing note on a public proof element (“Sample principles, editable.”).
- **MUST NOT.** Fake scarcity, fake review scores, or JSON-LD review ratings.

### CTAs

- **MUST.** One primary action sitewide. Same label (`settings.ctaLabel`, default **Start a project**). Same destination: `/contact`. Service CTAs go to `/contact?service={slug}` and pre-select the field.
- **MUST.** In any one viewport, only one control uses the primary button style. Secondary actions are text links, the work itself, or a clearly quieter style (outline or ghost), and are visually separated from the primary. (Baymard: several similarly styled buttons cause hesitation.)
- **MUST.** The primary is a descriptive verb phrase, never “Submit,” “Learn more,” or “Click here.” The form’s submit label is **Send the brief** (proposed; the earlier spec said “Send message” — see [proposed copy change](#proposed-copy-changes-small)).
- **MUST.** After the Briefing scrolls out of view, the nav shows the primary CTA. While the Briefing’s primary is on screen, the nav CTA is either hidden or reduced to a quiet text style, so two primaries are not in view at once. (Designer asked for this call; this is the conversion answer.)
- **MUST NOT.** A primary-styled button on every Price Tablet row. The recommended engagement has the one primary; other rows use a text link (“Start this engagement” or the same `ctaLabel` as a quiet link) or the whole row is the target to `/contact?service={slug}`.
- **MUST NOT.** Clever alternate labels invented per section.

### Case studies (Case Ledger and case page)

- **MUST.** Case pages are text-first, in this order: **Outcome, Challenge, Approach, Results**, then an optional image block. Omit any block whose field is empty. (Amos, locked.)
- **MUST.** The Outcome is the lead of the case page: the one-line result at a clearly larger scale than the body, then client, sector and the agreed goal. If `oneLineResult` is empty, lead with the title and the goal. No required image at the top.
- **MUST.** Home Case Ledger: three to six featured or latest cases (demo ships four). Each row is complete without an image: client, a specific one-line result, sector and year. The whole row is the target (44px-equivalent). Typographic fallback when there is no still — no empty photo frame, no collapsed hole, no floating arrow in a void.
- **MUST.** Results are plain, specific words, framed as this demo’s story (weeks, agreed goal, what the client could do afterwards). Named quotes sit in Results (name required; photo optional, never a generated face).
- **MUST NOT.** Empty cards, identical equal-height grey cards as the only ledger layout, or a result prefixed with “Sample result, for demo only.”
- **MUST NOT.** Invented percentage outcomes (“+47% leads”). A number is allowed when it is a concrete fact in the demo story (a price, a number of weeks, “two review rounds,” “one sentence”), not a fake lift.
- **MUST NOT.** A fake grid when the Projects collection is empty. On Home, omit the Case Ledger section (do not leave a hole of empty rows). On `/case-studies`, show a short honest empty: heading, one or two sentences, and links to Services and Start a project — or hide the nav item and redirect, as Insights already does. No placeholder cases. (How firm “no designed empty” is, is [open](#open-with-designer).)

### The Price Tablet (pricing)

- **MUST.** Published prices are on by default (`settings.showPrices = true`). One switch hides every price and from-figure, including the Briefing from-price and the comparison-table price row. Weeks and typical-project scenarios stay. (Amos, locked.)
- **MUST.** Each engagement shows: name, what it is in sentences, what’s included (or a typical scenario), a fixed price when prices are on, a timeline in weeks, and the tax note (**Prices excl. VAT/sales tax.**).
- **MUST.** One recommended engagement is marked (demo: **Grow**). The mark is not colour alone (WCAG 1.4.1) and is not a “Most popular” chip. Designer specifies a pine rule; that is the visual. Copy may say **Typical** or **Recommended**, once.
- **MUST.** Anchoring is honest: three clear packages, the middle one typical, easy to compare (CXL: keep options simple; help people choose; highlight the mid recommended plan). A “what’s included” comparison lives on `/services`.
- **MUST.** One primary path to enquire from the Tablet (see CTAs). The recommended row may carry the primary button; it goes to `/contact?service=grow` in the demo.
- **MUST NOT.** “From $X” as the only pricing, with the real number hidden behind a call. “Contact us for pricing” as the default. A price calculator as the only way to see a number.
- **MUST NOT.** Sample badges on packages, or builder notes (“Sample prices — replace”) on the public surface. Replacement is a launch-checklist matter, not on-page chrome. The site-level disclosure covers the fiction.

### The Enquiry Sheet (form)

- **MUST.** Exactly four visible fields, in this order, and no others: **Name** (required, 2–80 characters); **Email** (required, valid email); **Service** (required select: the three packages plus **Not sure yet**; pre-filled from `?service=`); **Message** (optional, max 1000, labelled optional). Single column. Labels above empty fields, never placeholder-only. Input height 44px.
- **MUST.** Above the fields, a real sentence for what happens next, from `settings.replyTime` (default: **We reply within one working day.**).
- **MUST.** Submit: **Send the brief**. While submitting: button disabled, `aria-busy`. Success replaces the form, announced with `aria-live="polite"`: **Thanks — we’ll reply within one working day.** Invalid submit keeps values, shows a specific error under the field plus a non-colour cue, and a form-level **Check the highlighted fields and try again.**
- **MUST.** A hidden honeypot named `website` must be empty. Direct email from `settings.email` sits beside or under the form (Designer: never in an empty-looking column). Calendar renders only when `settings.calendarUrl` is a non-empty URL; hidden in the demo.
- **MUST NOT.** Phone, company, budget or “how did you hear” fields in v1. Reset/Clear buttons. Placeholder-only labels. Colour-only errors.

### Navigation and footer

- **MUST.** Desktop from 1024: logo (home); **Case studies** (`workLabel`) / Services / About / Insights (omit Insights when published posts = 0) / Contact; plus the primary CTA under the [one-primary-in-view](#ctas) rule. Height 68px, sticky, solid surface. `aria-current="page"` on the current item, with a non-colour cue. Skip link is the first focusable element.
- **MUST.** Below 1024: 44×44 menu button (name **Menu** / **Close**), full-screen overlay, same links, CTA at the foot. Escape closes; focus moves in and returns. Reduced motion: instant open, no slide.
- **MUST.** Footer on inverse tokens: studio name, promise, nav mirror (same Insights rule), email, legal (Privacy, Terms, Cookies). Credit (**Template by Skala**) off by default. Hide empty phone or social lines.
- **MUST.** The footer carries the **one** site-level demo disclosure, once, in a quiet line: **Northway is a demonstration studio that ships with this template.** (Designer’s wording.) An optional first-visit note may repeat that line; it must be dismissible, must not cover the Briefing’s result or CTA, and must not look like a per-item Sample badge.
- **MUST NOT.** Pricing or Process as nav items. A hamburger on desktop. A second disclosure on every card.

### The Process Path, Pine Band, Insights, studio, FAQ

- **MUST.** Process is four steps in the demo (Intro, Plan, Strategy, Handover), each with a short, specific outcome. It reads as a path, not four equal columns. Reduced motion: all steps visible in the final pose in the first HTML; no height animation, no autoplay. (Designer allows three or four; demo stays at four.)
- **MUST.** Pine Band: the closing ask. Heading, a short supporting line (promise, reply-time, or a result), **one** primary CTA (**Start a project** → `/contact`). No second button.
- **MUST.** Insights is a primary nav item and a Home section of the latest two or three posts, each with a real title, date and excerpt that can stand alone. Omit nav, footer link and Home section when there are no published posts. Do not leave a public empty blog.
- **MUST.** Studio short and FAQ omit when their content is empty. FAQ is an accordion, 44px headers, `aria-expanded`, instant open under reduced motion.
- **MUST NOT.** “Sample process, editable.” or Sample badges on FAQ questions. Decorative icons beside every heading. Motion on body text.

### Demo content quality

- **MUST.** The live demo is a fully written, believable fictional studio: Northway, a strategy and growth consultancy. Specific prices, weeks and outcomes are part of that story. Names feel like names. Every case, package, post, FAQ, team member and quote is complete enough to ship as a demonstration — no lorem, no “coming soon” cards, no empty slots in a row of four.
- **MUST.** One honest site-level disclosure, as above. Buyers still get a replace-before-launch checklist (`LAUNCH.md`). A launch check fails if default demo records are still published on a buyer’s live site.
- **MUST.** The template **hides any block that has no content** (omit-when-empty). This is the buyer-facing rule and it stays. It is how a real studio site stays honest after they delete sample work.
- **MUST NOT.** A “Sample” badge, “Sample result, for demo only” prefix, “(sample)” after a name, or “editable” builder note on any public card, FAQ, principle, process step, package or quote. (This is the [change from the earlier rule](#change-from-the-sample-badge-rule-for-amos-to-confirm).)
- **MUST NOT.** Midjourney or generated faces, fake avatars, placeholder logos, or lorem ipsum anywhere a visitor can see, including empty states and legal openers that read as unfinished junk. Legal pages may still open with a clear “replace with counsel-reviewed copy before launch” line — that is counsel, not a Sample badge.

---

## Change from the Sample-badge rule (for Amos to confirm)

The current build spec requires a Sample badge on every demo record, a “Sample result, for demo only” prefix on outcomes, and a launch check that fails if those badges are still present.

**Proposal:** drop the per-item badges and prefixes. Write the demo as a complete fictional studio. Keep **one** site-level disclosure (footer line, wording above; optional dismissible first-visit note). Keep omit-when-empty, the replace-before-launch checklist, and the rule that default demo records must not remain on a buyer’s live site.

**Why.** On Codex v1, yellow Sample chips and “for demo only” prefixes sit on the hero, every case, every insight, every package and every FAQ. They make the site look like a template scaffold, undercut every piece of proof, and are the opposite of a premium product on skala.design. Honesty still matters; it should live in one clear place, not on every card.

This does not change until Amos confirms.

---

## Proposed copy changes (small)

Not the badge change. Listed so they are not silent.

| Item | Earlier spec | Proposed |
|---|---|---|
| Form submit | Send message | **Send the brief** (Designer’s offered label; it says what happens.) |
| Hero secondary pill | “See case studies” as a second button | No second pill. The featured case (or a text link) is the secondary path. Aligns with Designer. |
| Public “Sample” in meta titles | e.g. “Northway (Sample)” | Ordinary titles; the footer disclosure covers the fiction. Pending the badge decision. |

---

## Demo studio writing — quality bar

Voice stays: studio “we,” international English, short, clear beats clever. No founder name. No hype (“unlock,” “elevate,” “leverage,” “in today’s market”).

Numbers that appear are the demo’s published offer and story (prices, weeks, review rounds, what a client could do), not market statistics and not percentage lifts.

### Studio

**Northway** is a strategy and growth consultancy. We help companies clarify their offer, shape their story, and leave with a plan their team can run — at a fixed price, in a set number of weeks.

Email: `hello@northway.example`. No phone, no street address, no JSON-LD address.

### Briefing — result and supporting lines

Result (lead, Kindred Clinic): **Patients knew who the clinic was for, and booked a first visit from the site.**

Supporting lede (if a short H1/promise also sits in the Briefing): **We are a strategy and growth consultancy. A clear position, a plan your team can run, and a price before you start.**

From-price, when on: **From $8,000. Prices excl. VAT/sales tax.**

Do not write: “Sample result, for demo only: patients understood who the clinic was for, and how to book.”

### Four cases (all complete; Kindred has no image)

| Client | Sector, year | Outcome line | Agreed goal (for the case page) |
|---|---|---|---|
| Kindred Clinic | Health, 2025 | Patients knew who the clinic was for, and booked a first visit from the site. | A single offer, and a booking message the front desk could use. Six-week positioning and messaging engagement. |
| Holloway Advisors | Consulting, 2025 | The partners could explain the firm in one sentence, and knew which two packages to offer first. | A clear offer and a package structure the partners would actually use. |
| Eastport Kitchen | Hospitality, 2024 | Bookings came from the diners they wanted, not just from more diners. | A sharper idea of who the room was for, and a message that reached them. |
| Cedar Workshop | Product, 2024 | The launch had a named buyer, and a message the team reused in every channel. | A buyer, a promise, and a short plan the team could run without the studio in the room. |

Case-page body follows Outcome → Challenge → Approach → Results. Challenge is two or three sentences about the real problem (many services, no one could tell who it was for). Approach is short labelled lines (Research, Positioning, Messaging, Plan). Results are plain words plus an optional named quote.

Example quote, Kindred: **“They made the next step obvious.”** — Amira Mendez, clinic manager.

### Three engagements (Grow is typical)

| Name | Price | Weeks | For | What’s in the teaser |
|---|---|---|---|---|
| Position | $8,000 | 6 | A specialist firm whose work is hard to explain. | Positioning and messaging you can use in the first conversation. |
| Grow (typical) | $16,000 | 10 | A consultancy that wants a clearer offer and a plan it can run. | Brand strategy and a marketing plan aimed at the enquiries you want. |
| Brand + growth | $28,000 | 14 | A firm changing how it goes to market. | Positioning, brand strategy and a marketing system as one engagement. |

What’s not included (Services page): media spend, ad account management, website design and build, and photography, unless agreed. Payment terms in the demo: 50% to start, 50% before handover. Two review rounds; further rounds are a fixed add-on.

### Insights (three complete posts)

- **How we price a fixed project** — Why the price and the weeks are on the site, not behind a call. (8 October 2026)
- **What to brief a consultancy** — A short brief is enough: the goal, the audience, and what “done” looks like. (15 September 2026)
- **Why we show the weeks** — A published timeline is part of the offer, not a decoration. (22 August 2026)

Each post is a real short essay at `layout.measure` (66ch), not a title over a one-line stub.

### Process (four steps, each with an outcome)

1. **Intro** — A short call. We agree the goal and the package. You leave knowing the price and the weeks.
2. **Plan** — The brief, the research, and how we will measure success.
3. **Strategy** — Positioning, messaging and the plan, with two review rounds.
4. **Handover** — We deliver the work, then hold a short results review. The plan stays with your team.

### Team and FAQs

Team (About; initials, no photos): **Alex Reed**, Strategy. **Jordan Keane**, Growth. Hide the section if a buyer removes them.

Home FAQ, no badges: **How does a project start?** A short enquiry, then a call to agree the goal and the package. **Are the prices fixed?** Yes. The number and the weeks are published; if the scope changes we pause and re-quote a fixed change. **Who is this for?** Consultants, specialist firms and small practices that want a clearer offer and a plan they can run. **What happens after we enquire?** We reply within one working day.

---

## What stays locked from the build spec

Unchanged by this proposal, unless Amos says otherwise:

- One name: Northway is the product and the demo studio. Audience: consultants, strategists and small non-design agencies.
- Code edition ($149) ships first. Prices of the kit stay $149 / $199 / $249.
- `Start a project` → `/contact`. `workLabel` default Case studies. Routes `/case-studies`.
- Prices on by default; `showPrices` hides every price. Grow is the typical package, at the figures above.
- Text-first cases; optional images; typographic fallback; omit empty blocks.
- Hero result or quote, with heading+lede fallback. Insights in nav and on Home, omitted when empty.
- Four-field form, reply time, light theme only, footer credit off, no Skala marketing in shipped files.
- WCAG 2.2 AA, 44px targets, 2px focus ring with 2px offset, skip link, semantic tokens only.
- Reduced motion: every component is in its final pose in the server HTML. No height, width or left animation. No autoplay. Hover translate at most 8px, and only under `(hover: hover)` and `(pointer: fine)`.

---

## Sources

Fetched and read on 13 November 2026. Claims above use only what these pages actually say. Where a page did not give a figure, this document states a principle, not a number.

1. [How Long Do Users Stay on Web Pages?](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/) — Nielsen Norman Group, Jakob Nielsen, 11 September 2011. First 10 seconds; 10–20 second departures; value proposition within 10 seconds. Cites Chao Liu, Ryen W. White and Susan Dumais, SIGIR 2010.
2. [Homepage Design: 5 Fundamental Principles](https://www.nngroup.com/articles/homepage-design-principles/) — NN/g, Huei-Hsin Wang, 15 March 2024. Communicate who you are and what you do; reveal content through examples; prompt action; keep the homepage simple.
3. [Headings Are Pick-Up Lines](https://www.nngroup.com/articles/headings-pickup-lines/) — NN/g, Hoa Loranger, 9 August 2015. Headlines must work out of context, be specific and useful, and avoid cute or generic phrasing.
4. [State the Price to Give B2B Sites a Competitive Advantage](https://www.nngroup.com/articles/show-price/) — NN/g, Hoa Loranger, 1 December 2013. Price as a top B2B information need; hiding it feels evasive; people leave for sites that show it.
5. [Show Prices for Common Scenarios](https://www.nngroup.com/articles/show-prices-for-common-scenarios/) — NN/g, Jakob Nielsen, 9 April 2006. Representative sample prices beat complex calculators in early research.
6. [Social Proof in the User Experience](https://www.nngroup.com/articles/social-proof-ux/) — NN/g, Jen Cardello, 19 October 2014. Social proof can raise confidence; thin or overused proof can backfire or distract from the action.
7. [Social Proof: Definition, Types, Examples & How to Work With It](https://cxl.com/blog/is-social-proof-really-that-important/) — CXL, Shanelle Mullin, updated 5 November 2026. Proof should be credible, relevant and specific, and sit near the ask; do not fake it.
8. [Website Forms Usability: Top 10 Recommendations](https://www.nngroup.com/articles/web-form-design/) — NN/g, Kathryn Whitenton, 1 May 2016. Keep forms short; labels next to fields; single column; no placeholder-only labels; visible, specific errors; no Reset. Cites Seckler et al., CHI 2014: 78% first-try successful submits on guideline-compliant forms vs 42% on forms that violated them.
9. [Placeholders in Form Fields Are Harmful](https://www.nngroup.com/articles/form-design-placeholders/) — NN/g, Katie Sherwin, 11 May 2014 (reviewed 10 September 2018). Labels and hints outside empty fields.
10. [Field Label UX: Place Labels Above the Field](https://baymard.com/research-articles/mobile-form-usability-label-position) — Baymard Institute. On mobile, labels above the field so the input is wide enough to show what was typed.
11. [Button Design: Best Practices for Optimal UI Buttons](https://baymard.com/blog/button-design) — Baymard, Christian Holst, 15 December 2021 (updated 4 June 2026). Unique styling, prominence, consistent placement, descriptive copy; if there is more than one button, the primary is more prominent and separated. Several similarly styled buttons caused hesitation in testing.
12. [10 Principles of Effective Pricing Pages](https://cxl.com/blog/10-principles-of-effective-pricing-pages/) — CXL, Peep Laja, 30 June 2019 (updated 23 December 2022). Simple pricing; easy comparison; help people choose a plan; a clear CTA; tell them what happens next.
13. [8 Keys to Value-Based SaaS Pricing Pages](https://cxl.com/blog/saas-pricing-pages/) — CXL, Patrick Campbell, 2 January 2019 (updated 23 December 2022). Keep options simple; highlight the recommended mid-priced plan as an anchor. (The article’s monetization percentages are about pricing strategy, not page layout, and are not used here.)
14. [5 Principles of Visual Design in UX](https://www.nngroup.com/articles/principles-visual-design/) — NN/g, Kelley Gordon, 1 March 2020 (reviewed 1 September 2026). Scale and hierarchy guide attention in order of importance.
15. [5-Second Usability Test](https://www.nngroup.com/videos/5-second-usability-test/) — NN/g, 20 April 2018. First-impression test used as a recommended QA, not a numeric claim.
16. [WCAG 2.2](https://www.w3.org/TR/WCAG22/) — W3C. AA as the floor; 1.4.1 Use of Colour; 2.5.5 target size (44px is our locked floor); 2.3.3 Animation from Interactions.

Internal, already agreed, not re-researched here:

- [Northway build-ready site spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51)
- [Northway proposal](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/15fdf3e5-d873-4ab4-b9ef-c0030894e6d6)
- [Designer notes](/workspace/northway-v2/design/NOTES-FOR-UX.md)

---

## Open with Designer

Do not resolve these in implementation until they are closed. Visual decisions stay with Designer; conversion rules stay in this file.

1. **Briefing reading order.** Amos locked “the hero leads with a result or a quote.” This file follows that, and the NN/g ten-second and heading principles. Designer’s Briefing leads with the Newsreader promise (“Work that earns the next project.” still holds), then the lede and CTA, with the result as a proof line *under* the button and again on a featured case to the right. Those two structures are not the same. Needs a shared Briefing that leads on a specific result without losing the split-briefing idea.
2. **The existing slogan.** Conversion reading (NN/g: specific, useful, not a line any studio could say) treats “Work that earns the next project.” as a weak display lead. It can stay as a footer promise. Designer currently keeps it as the display line. Same conversation as item 1.
3. **From-price in the first viewport.** This file requires a from-price on desktop when prices are on. Designer’s Briefing note does not place it. Where it sits (in the lede, by the CTA, or only if the Price Tablet is in the first scroll) is Designer’s, as long as it is visible without scrolling at 1280.
4. **Photographs in the Briefing and the Case Ledger.** Designer describes a featured-case photograph and a still on ledger rows. The locked rule is: images are optional, never invented, no empty frame; Kindred ships without an image. The Briefing and Ledger must hold as typographic layouts when a still is missing.
5. **Empty destination pages.** Designer: omit a block with no content; “do not ship a designed empty.” This file: omit Home teasers; on `/case-studies` with zero projects, a short honest empty (or hide-and-redirect, as Insights does), never a fake grid. Confirm the index-page behaviour together.
6. **“Numbered results.”** Designer asks for numbered results. This file allows concrete story figures (weeks, prices, “one sentence,” “two review rounds”) and **MUST NOT** invented percentage lifts. If a large metric is wanted in the Briefing, it has to be one of those honest story figures.
7. **Tokens and motion.** Colour, type (including body at 18 / 1.55), the waymark, paper surfaces and motion language stay in Designer’s files. If a later `BRAND-V2.md` fights a MUST / MUST NOT in this document, list it rather than improvising.
