# Northway demo content

All Sample copy for the Code edition, to be stored in `/content`. Every record is fictional and must be labelled Sample. A `LAUNCH.md` checklist should list every item here. Buyers replace this before they launch. Never present a percentage result. Never invent a client, result, logo or quote beyond what is written here.

Source: the UX Lead spec (12 November 2026, Europe/Stockholm), with a few completions where the Page named a record but did not write the full body. Completions are marked **Drafted for the demo** and follow the Page's voice and facts. Prefer the Page text where both exist.

Studio voice: "we", international English, short and clear. No founder name. No em dashes.

---

## Studio settings

Use these as the `/content/settings.json` defaults.

| Field | Demo default |
| --- | --- |
| studioName | Northway |
| tagline | Work that earns the next project. |
| promise | Work that earns the next project. |
| logo, logoInverse, favicon, ogImage | Empty or a simple placeholder mark. If logo is empty, render studioName as text. |
| language | en |
| ctaLabel | Start a project |
| workLabel | Case studies |
| heroResult | Sample result, for demo only: patients understood who the clinic was for, and how to book. |
| heroResultClient | Kindred Clinic (sample) |
| heroQuote, heroQuoteName, heroQuoteRole | Empty. The demo leads with the result, not a quote. |
| heroImage | Empty. Typographic hero, no reserved frame. |
| email | hello@northway.example |
| phone, calendarUrl, social | Empty. Hide those UI slots. |
| showPrices | true |
| showTeam, showInsights, showTestimonials, showPrinciples | true |
| showCredit | false |
| voice | studio |
| currency | USD |
| taxNote | Prices excl. VAT/sales tax. |
| replyTime | We reply within one working day. |
| fromPrice | From $8,000 |

**Meta, Home.** Title: "Northway - Work that earns the next project. (Sample studio)". Description: "Sample consultancy website for the Skala template. Northway is a strategy and growth consultancy with a clear process and a fixed price. Replace this content before launch."

**Hero lede.** Northway is a strategy and growth consultancy for companies that want a clear position, a plan they can run, and a price before they start.

**Principles** (About, and Home proof in the demo):

1. Results: we agree a goal before we start.
2. Fixed price: you know the number and the weeks.
3. Built to last: a plan you can run.

**Process** (Home and Services), heading "How a project runs":

1. Intro: a short call, the goal and the package.
2. Plan: the brief, the research, the measure of success.
3. Strategy: positioning, messaging, and the plan, with two review rounds.
4. Handover: deliver the work, then a short results review.

**Exclusions** (Services, "What's not included"): Media spend, ad account management, website design and build, and photography production are outside the package unless agreed. (Sample exclusions, editable.)

**Tools** (About): Interviews, workshops, and a written strategy you can run. (Sample, hide if empty.)

---

## Services

Three packages, all Sample. CTA on each card: Start a project, to `/contact?service={slug}`.

### Position

- Slug: `position`
- Price: $8,000
- Timeline: 6 weeks
- Short: Positioning and messaging so the offer is clear before the first conversation.
- Typical scenario: a specialist firm whose work is hard to explain.
- Typical mark: no

### Grow

- Slug: `grow`
- Price: $16,000
- Timeline: 10 weeks
- Short: Brand strategy and a marketing plan aimed at qualified enquiries.
- Typical scenario: a consultancy that wants a clearer offer and a plan they can run.
- Typical mark: **yes** (the demo's Typical package)

### Brand + growth

- Slug: `brand`
- Price: $28,000
- Timeline: 14 weeks
- Short: Positioning, brand strategy, and a marketing system as one engagement.
- Typical scenario: a firm changing how it goes to market.
- Typical mark: no

**Services hero.** Heading: Know the price before we talk. Lede: Three fixed packages. Published weeks. Prices excl. VAT/sales tax. (Sample prices, replace.) If `showPrices` is false, lede becomes: Three clear packages, with a typical project for each.

**Comparison table.** Rows: Research, Positioning, Messaging and offer, Brand strategy, Marketing plan, Workshops, Written playbook, Handover support, Results review. Position has research, positioning, messaging, handover and a short review. Grow adds brand strategy, a marketing plan and a longer review. Brand + growth adds workshops and a written playbook. Price row only when `showPrices` is on.

**Services final CTA.** Heading: Pick a path. Start with a short enquiry.

---

## Case studies

Four Sample projects. Cards show client, outcome line, tags (sector, year, Sample). Image optional. Kindred has no image. Routes: `/case-studies/[slug]`.

Index heading: Selected case studies. Sub: Work with a result, not only a look. Empty heading: Case studies are on the way. Empty body: Cases will land here when they are ready. Until then, see the services and how a project runs. Bottom CTA: Want this for your project?

### Kindred Clinic (fully specified on the Page)

- Slug: `kindred-clinic`
- Client: Kindred Clinic (sample)
- Sector: health
- Year: 2025
- Service used: Grow
- Image and gallery: **none**. Typographic card. No image block on the page. Do not invent a visual.
- Card outcome line: patients understood who the clinic was for, and how to book.
- **Outcome.** Sample result, for demo only: patients understood who the clinic was for, and how to book. Goal, agreed before kickoff: a clear offer and a booking message. (Sample.)
- **Challenge.** The clinic listed many services, but people could not tell who it was for or what to do next. (Sample, two or three sentences.)
- **Approach.** Research: interviews with staff and recent patients. Positioning: one offer, one audience. Messaging: plain words for the site and the front desk. Plan: a short launch checklist the clinic could run. (Sample labels, editable.)
- **Results.** Sample result, for demo only: the offer was obvious, and the clinic could explain it without a writer on call.
- **Quote** (sits in Results): They made the next step obvious. Attribution: A. M., clinic manager (sample quote, for demo only).

### Holloway Advisors

- Slug: `holloway-advisors`
- Client: Holloway Advisors (sample)
- Sector: consulting
- Year: 2025
- Card outcome line (from the Page): the firm could explain its offer in one sentence.

**Drafted for the demo** (the Page named this case and the one-line result, not the full body):

- Image: optional; a photograph may be used if a Sample-labelled asset is supplied, otherwise the typographic fallback.
- Service used: Position.
- Outcome: Sample result, for demo only: the firm could explain its offer in one sentence. Goal, agreed before kickoff: one sentence the partners would actually use. (Sample.)
- Challenge: The firm had several practices and a long credentials deck. Prospective clients left conversations still unsure what Holloway did first. (Sample.)
- Approach: Research: interviews with partners and recent clients. Positioning: one offer, one kind of client. Messaging: a one-sentence offer and supporting lines for the site and the first meeting. (Sample.)
- Results: Sample result, for demo only: the partners could open with one sentence, and the site said the same thing. (Sample.)
- Quote: optional; omit if not written. Do not invent a second named quote unless it is labelled Sample and kept consistent with this result.

### Eastport Kitchen

- Slug: `eastport-kitchen`
- Client: Eastport Kitchen (sample)
- Sector: hospitality
- Year: 2024
- Card outcome line (from the Page): bookings came from the right diners, not just more diners.

**Drafted for the demo:**

- Service used: Grow.
- Outcome: Sample result, for demo only: bookings came from the right diners, not just more diners. Goal: a clearer offer for the guests they wanted. (Sample.)
- Challenge: The restaurant was busy, but the wrong kind of busy. The site and the booking path talked about everything, so the right guests could not see themselves. (Sample.)
- Approach: Research: conversations with the owners and regulars. Positioning: who the room is for. Messaging: a plain offer and a booking message. Plan: a short list the team could run. (Sample.)
- Results: Sample result, for demo only: the offer was obvious to the guests they wanted, and bookings followed that offer. (Sample.)

### Cedar Workshop

- Slug: `cedar-workshop`
- Client: Cedar Workshop (sample)
- Sector: product
- Year: 2024
- Card outcome line (from the Page): the launch had a clear buyer and a message the team could reuse.

**Drafted for the demo:**

- Service used: Brand + growth.
- Outcome: Sample result, for demo only: the launch had a clear buyer and a message the team could reuse. Goal: one buyer, one message, a plan the team could run after launch. (Sample.)
- Challenge: The product had features enough for several audiences. The launch draft tried to speak to all of them, and the team could not reuse the message. (Sample.)
- Approach: Research: interviews with likely buyers. Positioning: one buyer. Brand strategy and messaging: a line the team could reuse. Plan: a launch checklist and a short marketing system. (Sample.)
- Results: Sample result, for demo only: the launch named a clear buyer, and the team kept using the same message. (Sample.)

Case-page CTA for all four: Want this for your project?

---

## Insights

Index heading: Insights. Sub: Notes on process, craft and running a studio. (Sample, editable title.) Three Sample posts. If this collection is empty, hide Insights from nav, footer and Home.

### How we price a fixed project

- Slug: `how-we-price-a-fixed-project`
- Date: 8 October 2026
- Author: Alex Reed (sample), optional
- Excerpt: Why the price and the weeks are on the site, not behind a call. (Sample.)
- Cover: optional, empty is fine.

**Body (the Page asks this first post to explain, in short paragraphs, why a fixed price is shown up front; drafted to that brief):**

We show the price before we talk. That is deliberate.

A fixed package is easier to trust than a "let's discuss" line. The visitor can see the weeks, the work, and the number, then decide whether to enquire. If the scope is wrong, we say so on the call, and we do not pretend the published price covers a different job.

Sample note, for demo only: replace this post before launch. It is not a Northway claim about real clients.

### What to brief a consultancy

- Slug: `what-to-brief-a-consultancy`
- Date: 15 September 2026
- Author: Alex Reed (sample)
- Excerpt: A short brief is enough: the goal, the audience, and what "done" looks like. (Sample.)

**Body, drafted for the demo:**

You do not need a long deck to start. Tell us who it is for, what should be true when we finish, and any constraint we should know (timing, a price band, a decision that is already made).

We use that to recommend a package, or to say we are not the right fit. The enquiry form is short on purpose.

Sample note, for demo only: replace this post before launch.

### Why we show the weeks

- Slug: `why-we-show-the-weeks`
- Date: 22 August 2026
- Author: Jordan Keane (sample)
- Excerpt: A published timeline is part of the offer, not a decoration. (Sample.)

**Body, drafted for the demo:**

The weeks sit next to the price because they are part of the same promise. A six-week Position engagement is a different commitment from a fourteen-week Brand + growth engagement.

If the scope changes, we pause, we re-quote a fixed change, and then we continue. We do not quietly stretch the timeline.

Sample note, for demo only: replace this post before launch.

---

## Team

Two Sample people. Initials in a neutral avatar. No photos. No Midjourney faces. Hide the About team section if this collection is empty.

**Alex Reed (sample)**
- Role: Strategy
- Initials: AR
- showOnAbout: true, canAuthor: true
- Bio, **drafted for the demo** (the Page asked for a short bio, without the words): Alex leads positioning and messaging. (Sample.)

**Jordan Keane (sample)**
- Role: Growth
- Initials: JK
- showOnAbout: true, canAuthor: true
- Bio, **drafted for the demo:** Jordan leads brand strategy and marketing plans. (Sample.)

---

## Testimonials

The Page says the demo ships two Sample quotes so an optional use is visible, and that Home defaults to principles instead of a testimonial row. Only one quote is fully specified (Kindred). The second is drafted.

1. "They made the next step obvious." A. M., clinic manager, Kindred Clinic. (Sample quote, for demo only.) Project: kindred-clinic.
2. **Drafted for the demo:** "We could finally say what we do in one sentence." R. H., partner, Holloway Advisors (sample quote, for demo only). Project: holloway-advisors.

No photos. Omit every testimonials block if this collection is emptied. No fake avatars.

---

## FAQs

### Home group (four items)

The Page asks for four Home-group items and does not specify the questions. These are **drafted for the demo**, aligned with the Services answers and the Home voice. Link under the list: More questions, to `/services#faq`.

1. **How does a project start?** With a short enquiry, then a call. We agree the goal and the package before we begin. (Sample.)
2. **Are the prices fixed?** Yes. The published price and weeks are the engagement, excl. VAT/sales tax. If the scope changes we pause, re-quote a fixed change, then continue. (Sample.)
3. **Who is this for?** Companies that want a clear position, a plan they can run, and a price before they start. We work remotely. (Sample.)
4. **What happens after we enquire?** We reply within one working day. If we are a fit, we book a short intro and recommend a package. (Sample.)

### Services group (specified on the Page)

1. **Who owns the work?** Yes, at handover you own the strategy, files and content we produced.
2. **Are prices including tax?** Prices excl. VAT/sales tax.
3. **How many revisions?** Two review rounds; extra rounds are a fixed add-on.
4. **How does payment work?** Sample terms: 50% to start, 50% before handover. Replace before launch.
5. **What if the scope changes?** If the scope changes we pause, re-quote a fixed change, then continue.

---

## Form (Contact)

Heading: Start a project. Sub: Tell us about your brief. We reply within one working day.

Fields, in this order, and no others:

1. **Name**, required, 2-80 characters.
2. **Email**, required, valid email.
3. **Service**, required select: Position, Grow, Brand + growth, Not sure yet. Pre-filled from `?service=position|grow|brand`. An unknown query is ignored and defaults to Not sure yet.
4. **Message**, optional, max 1000 characters.

Submit: Send message. Hidden honeypot field named `website`, must be empty.

Intro line above the fields if useful: Or send a short message.

Field errors under the field, not a red border alone. Form-level error: Check the highlighted fields and try again. Success, replacing the form: Thanks, we'll reply within one working day. (Write this without an em dash.) Submitting disables the button and sets `aria-busy`.

Dev: success after a valid submit, no backend. Production: POST JSON `{ name, email, service, message }` to `FORM_ENDPOINT`.

Direct contact: email hello@northway.example as a mailto. Hide phone.

Calendar: hidden in the demo. Title if shown: Pick a time.

---

## Other page copy

**Home, selected cases empty.** Heading: Case studies are on the way. Body: Cases will land here when they are ready. Until then, see the services and how a project runs. Links: See services, Start a project.

**Home, services teaser heading:** Know the price before we talk.

**Home, studio short.** Heading: A studio built around the work. Body: We believe a position should earn the next project. We set a goal, we work to a fixed price and a set of weeks, and we review after handover. Link: About the studio.

**Home, final CTA.** Heading: Ready to start a project? Sub: Fixed price. Set timeline. A short enquiry.

**About intro.** Heading: A strategy studio for work that earns the next project. Body: Northway works with companies that want a clearer position and more of the right enquiries, at a fixed price, with a plan they can run. (Sample.)

**About approach.** Heading: How we work. Body: We run the work end to end: research, positioning, brand strategy, and marketing, remotely, on a fixed plan. Video for the intro, async for reviews.

**About CTA.** Heading: Let's see if we're a fit.

**Legal** (Privacy, Terms, Cookies). Opening line: This is sample {Privacy Policy / Terms / Cookie} text for the Northway demo. Replace with counsel-reviewed copy before launch. A short generic placeholder body and last-updated date **12 November 2026**. Meta: "{Page} - Northway (Sample)".

**404.** Heading: This page isn't here. Body: Try Home, Case studies, or Contact. Links to `/`, `/case-studies`, `/contact`, plus Start a project. Meta: Page not found - Northway.

**JSON-LD.** Organization, name from settings, url from `SITE_URL`, no Person, no address, no invented review rating.

**Email domain.** `hello@northway.example` (the `.example` domain is reserved; use it). No phone. No physical address.
