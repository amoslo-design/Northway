# Northway visual v3 build contract

Approved UX review, 13 November 2026. This supplements the analysis and supersedes conflicting legacy guidance in BRAND-V2, CONVERSION and the reference kit. Implementation branch: visual-v3, from saved baseline 71d6afc with the Refero kit merged separately from PR #3.

Northway is an editorial, text-first consultancy template. Displace supplies the open field, pulled quotation and continuous closing invitation. Domaine supplies the statement beside featured work. VAC supplies the quiet editorial entries. Munro supplies ruled comparison and facts, Extract the studio bridge, and Walden the breathing room. Their photographs, identities, colours and fonts are not transplanted.

## Complete type table

Sizes are px; leading is unitless. Columns describe exact 390, 1024 and 1280 viewport settings. Bricolage is display; Hanken is reading and UI. No serif. Tablet (768–1023) interpolates through the token mode, not through new roles.

| Role | Family / weight | 390 | 1024 | 1280 | Tracking |
| --- | --- | --- | --- | --- | --- |
| Briefing result | Bricolage 600 | 40 / 1.12 | 56 / 1.08 | 64 / 1.06 | -0.03em |
| Short / closing display | Bricolage 500 | 48 / 1.08 | 68 / 1.05 | 80 / 1.05 | -0.03em |
| H1 / Case Ledger statement | Bricolage 500 | 36 / 1.16 | 48 / 1.12 | 52 / 1.10 | -0.03em |
| H2 / section heading | Bricolage 500 | 28 / 1.20 | 36 / 1.20 | 40 / 1.20 | -0.015em |
| H3 / stage, quiet entry | Hanken 500 | 24 / 1.28 | 24 / 1.28 | 24 / 1.28 | -0.01em |
| Excerpt quote | Bricolage 500 | 32 / 1.20 | 32 / 1.20 | 32 / 1.20 | -0.015em |
| Lead | Hanken 400 | 18 / 1.45 | 20 / 1.45 | 20 / 1.45 | 0 |
| Body | Hanken 400 | 18 / 1.55 | 18 / 1.55 | 18 / 1.55 | 0 |
| Proof | Hanken 400 | 16 / 1.45 | 18 / 1.45 | 18 / 1.45 | 0 |
| From-price | Hanken 500, cream | 16 / 1.45 | 16 / 1.45 | 16 / 1.45 | 0 |
| Button / navigation | Hanken 500 | 16 / 1 | 16 / 1 | 16 / 1 | 0 |
| Label | Hanken 500 | 13 / 1.35 | 13 / 1.35 | 13 / 1.35 | 0.04em |
| Caption | Hanken 400 | 14 / 1.40 | 14 / 1.40 | 14 / 1.40 | 0.01em |
| Meta | Bricolage 500, uppercase | 12 / 1.30 | 13 / 1.30 | 13 / 1.30 | 0.10em |

Meta appears only in the Briefing attribution and once beside Grow's 4px rule. The hero remains the main headline through its result, 600 weight, central placement and first-screen position. The larger closing display is a short invitation, left aligned.

## System

White #FFFFFF canvas; grey #E8E8E4 only for Excerpt, Price Tablet, Enquiry Sheet and Strategy. Pine #1F3A2E grained bands, ink #18221D, muted #4C5550, cream #F7F7F4, inverse muted #D5D8D4. Hairline #C8C8C3. No shadows. Inputs white, radius 8; objects radius 12; primary actions only radius 999. Secondary actions are underlined text. Home nav CTA has no underline and never becomes a pill.

Spacing: 8, 16, 24, 32, 40, 48, 64, 80, 96, 128, 176, 192. Exceptions are the locked 44px target, 52px large button, 68px nav, 4px typical rule and 2px focus. Page gutters 16 / 24 / 24; 12 columns above mobile; max content 1280; reading measure 66ch. Section spacing 96 / 104 / 120, related sections 64 / 72 / 80, large pause 120 / 144 / 176. Excerpt overlaps 48px. Hero top spacing includes the nav height rather than adding it twice.

Motion: 160ms fill and colour; 200ms small state changes; no entrances or scroll choreography. Nothing starts hidden. Reduced motion has the final static layout and no spinning indicator. Cream focus on pine, pine on light.

## Page and section contract

Home: centred pine Briefing and overlapping Excerpt; large statement beside a featured case and quiet ledger; Insights uses the one heading-left/link-right opening, with one featured essay and two quiet notes; Price H2 plus dek and one rate sheet; continuous named Process Path with Strategy panel and no visible title block; narrow studio statement; top-ruled FAQ; larger left-aligned Pine Band continuous into footer. Cases, Insights and FAQ are unboxed. At least the Briefing, Process, studio and closing band are not card grids.

Indexes: one featured entry, then quiet text entries, sentence-case captions, generous vertical intervals, underlined See all at the end. Cases end with one next-case text link and one contact primary. Services uses the rate sheet, a ruled capability ledger, process, exclusions and FAQ. About uses open prose, text principles and named team members without initials. Contact uses the Enquiry Sheet. Essays use a reading column and quiet next-essay link. Legal pages and 404 remain plain and functional.

No arbitrary bento offsets, repeated card triplets, row numbers, heading icons, monograms, repeated proof or quotes, marketing eyebrows outside the hero, or em dashes in rendered copy. Amira's quote appears only in the Home Excerpt. Kindred's headline result appears once on Home. Missing featured case means no Excerpt.

Home has three primary actions: Briefing, Grow, Pine Band. Approved labels: Tell us about your brief; Start a project; Let's talk. The nav uses Discuss your project as quiet text. Inner-page nav is quiet wherever an in-page primary exists. Services has Grow as its only primary, so its closing invitation is a text link. Case studies have one contact primary at the close. Contact has Send the brief. Never two pills in one viewport.

At 390px the hero ask and from-price remain in the first 844px screen; Grow comes first in the DOM and mobile rate sheet. At 320px nothing overflows. Preserve /work 301 redirects, content switches, optional collections, service preselection and form validation, pending, failure and success states.

## Validation and delivery

Regenerate tokens with build.py --check. Run content tests, typecheck, lint, production build, browser accessibility, keyboard, touch targets, overflow, reduced motion, redirects and local form delivery tests. Inspect full-page screenshots at 1440 and 390 of Home, Kindred, Services and Contact, plus indexes and About. Fill the quality-bar checklist with evidence and fixes. Commit and push visual-v3, open a separate pull request with screenshots and checklist, and do not merge.
