> V2 amendment: [approved decisions](../v2/DECISIONS-V2.md) replace the hero example and Sample-badge guidance below. Lead with the supplied Kindred result; use one footer disclosure. Form submit is **Send the brief**. Current public wording lives in `/content` and [homepage-copy.md](homepage-copy.md).

# Northway voice and microcopy

Copy direction, 12 November 2026. Use alongside [homepage-copy.md](homepage-copy.md), [content.md](content.md) and the binding [site spec](spec.md).

## The voice

Calm, clear and practical. Write like a thoughtful consultant explaining the work to a prospective client. Give people enough information to decide whether to enquire.

Northway speaks as a studio: **we** for the team, **you** for the client. Use international English, sentence case and ordinary words. Short sentences should still sound natural when read aloud.

The central message is: **A clear position. A plan you can run.** This supports the existing promise, **Work that earns the next project.** It is a writing direction, not an extra label above the hero.

## What the copy should communicate

| Message | How we express it |
| --- | --- |
| The offer is understandable | Name the work: positioning, messaging, brand strategy and marketing. |
| The commitment is clear | State the scope, price and weeks. Explain what happens when the scope changes. |
| The work is useful | Explain what the client's team can do with the strategy after handover. |
| Starting is straightforward | Say what to send, what happens next and when we reply. |
| Evidence is specific | Describe the supplied client situation and outcome. Keep every fictional example visibly labelled Sample. |

## Writing choices

| Use | Example |
| --- | --- |
| Concrete actions | We agree the goal before we start. |
| Clear descriptions | Positioning and messaging you can use in the first conversation. |
| A useful next step | Start a project. |
| A direct answer first | Yes. The published price covers the agreed scope and timeline. |
| Reassurance through detail | Two review rounds. A fixed price. A short results review. |
| Warm, brief feedback | Thanks, we'll reply within one working day. |

Replace vague phrases such as "unlock your potential", "transform your business" and "take your brand to the next level" with the actual work and its purpose. Avoid superlatives, exclamation marks, pressure to buy, invented statistics and promises of guaranteed growth.

Use commas and full stops rather than em dashes. Headings should usually fit within eight words. Body copy uses full sentences; labels and short principle statements can be fragments. No eyebrow labels.

## Message examples across the site

These are editorial examples using the existing offer. They are not client testimonials or claims about completed work.

**Hero**

Work that earns the next project.

We are a strategy and growth consultancy. We help companies clarify their offer, shape their brand and build a marketing plan their team can run.

**Services**

Know the price before we talk.

Three fixed packages. A clear scope and timeline for each.

**Studio**

A studio built around the work.

Good strategy should be useful after the presentation. We agree the goal, set the price and timeline, and leave your team with a plan they can use.

**Contact**

Start a project.

Tell us about your brief. We reply within one working day.

## Action labels

| Purpose | Visible copy |
| --- | --- |
| Main enquiry action | Start a project |
| Form submission | Send message |
| Case-study discovery | See case studies |
| Service discovery | See services |
| Service index | See all services |
| Insight index | See all insights |
| Studio introduction | About the studio |
| Full FAQ | More questions |
| Skip link | Skip to content |
| Mobile menu, closed | Menu |
| Mobile menu, open | Close |

Use `settings.ctaLabel` for the main enquiry action and derive work labels from `settings.workLabel`. Link destinations are in the homepage draft and site spec. Keep action labels stable between pages.

## Form copy

The form has four visible fields. Labels remain visible when the fields contain values. Hints sit beside their fields, never only inside a placeholder. There are no required placeholder examples.

| Field | Label | Optional hint | Validation feedback |
| --- | --- | --- | --- |
| Name | Name | None | Enter your name using 2 to 80 characters. |
| Email | Email | None | Enter a valid email address. |
| Service | Service | None | Choose a service, or select Not sure yet. |
| Message | Message (optional) | Tell us the goal and anything we should know about timing. Up to 1,000 characters. | Keep your message to 1,000 characters or fewer. |

Service options: **Position**, **Grow**, **Brand + growth**, **Not sure yet**. The last option is a valid default, not an error.

| State | Copy |
| --- | --- |
| Ready | Send message |
| Submitting, accessible status | Sending your message. |
| Invalid submission | Check the highlighted fields and try again. |
| Submission could not be confirmed | We couldn't confirm your message was sent. Try again, or email us directly. |
| Success | Thanks, we'll reply within one working day. |
| Direct contact link | hello@northway.example |

The loading button keeps its width and uses the spec's neutral spinner. Announce the sending status accessibly. Success appears only after the configured form flow reports success. Keep entered values when showing an error. The error's email link reads from `settings.email`; the reply promise reads from `settings.replyTime`. Do not hardcode the one-day promise in component source.

## Badges and small labels

| Role | Copy | Meaning |
| --- | --- | --- |
| Fictional demo record | Sample | This is content for the template demo. |
| Fictional result prefix | Sample result, for demo only: | Always precedes a demo outcome. |
| Featured service | Typical | Grow is the demo's typical package. This does not imply sales or popularity. |
| Optional field marker | (optional) | The field can be left empty. |
| Price note | Prices excl. VAT/sales tax. | Read from settings; hide beside prices when figures are hidden. |

## From copy to atomic components

Build and review the primitives with this real copy before assembling page sections. The visual tokens already exist in [the design system](../design/DESIGN-SYSTEM.md). This is the order for the next implementation pass.

| Level | Build | Copy to preview |
| --- | --- | --- |
| Foundations | Typography, colour, spacing, focus and motion tokens | Hero heading, full lede, body paragraph and longest form feedback. |
| Atoms | Button, Link, IconButton | Start a project; See case studies; Menu; Close. Include hover, pressed, focus, disabled and loading states. |
| Atoms | Tag, SampleBadge and Icon | Sample; Typical; Health; 2025. Icons use accessible names when they carry an action. |
| Atoms | Input, Select and Textarea | Four form labels, valid service options and validation feedback above. |
| Atoms | SkipLink and global focus treatment | Skip to content; visible keyboard focus on light and inverse surfaces. |
| Molecules | Field, NavItem, CaseCard, ServiceCard and FaqItem | Real labels, outcomes, package descriptions and FAQ answers from the copy files. |
| Organisms | Nav, Hero, grids, Process, FAQ, enquiry form, CTA band and Footer | Compose the reviewed pieces in the specified reading order. |
| Pages | Home, Services, cases, About, Insights and Contact | Assemble sections around the content and specified empty states. |

Atoms should accept their text as content. Keep page sentences out of their source. Typography styles do not decide HTML heading levels: each page supplies one H1 and a logical hierarchy. Preview the longest labels and sample-result prefixes at mobile widths before approving the pieces.
