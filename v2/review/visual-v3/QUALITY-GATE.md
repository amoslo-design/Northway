# Northway visual v3 quality gate

**Review status updated 13 November 2026:** Amos did not approve the rendered design. The visual result remains too close to the previous version and needs a stronger design pass. This record preserves the earlier implementation checks; its visual self-assessment is superseded by the feedback and next steps in [session.md](../../../session.md). Technical passes do not establish visual or commercial readiness.

Self-review completed 13 November 2026 against [WEBSITE-QUALITY-BAR](../../design/WEBSITE-QUALITY-BAR.md), the [approved build contract](../../VISUAL-V3-BUILD-CONTRACT.md), and the [Refero reference lock](../../design/refero/SYNTHESIS.md). This is the implementation self-review. The UX lead approved the plan; no separate claim of UX approval of these final screenshots is made.

## Brief and reference lock

Northway is a premium, text-first website template for consultants, strategists and small agencies. The platform remains Next.js with local structured content. The primary journey is to understand the offer, examine a case and send a brief with the service preselected. The tone is specific, composed and useful. White canvas, grey elevated objects, grained pine bands, Bricolage and Hanken, no shadows, no numbering or monograms are locked.

Displace is primary: open white field, a named pulled quotation, concentrated deep bands and a substantial closing invitation. Domaine contributes the large statement beside work and spare enquiry sheet. VAC contributes quiet text entries and generous intervals. Munro contributes reading-size ruled facts and the continuous disclosure footer. Extract contributes the capabilities ledger and reply-time line. Walden contributes unboxed structure and closing breathing room. Source identities, photography, colours, fonts, mint or black closings, tickers and icon mosaics were not copied.

## Blocker checklist

- [x] **Yes.** The pages do not trip two or more banned tells. No repeated card triplets, chips, decorative icons, glass nav, staggered reveals or alternating grey slabs.
- [x] **Yes.** No section, process, case or list numbering. Dates, prices and weeks remain real content values.
- [x] **Yes.** No adjacent sections share both a head treatment and layout. Home's Case statement, compact Insights opening, Price head plus dek, named path, studio statement, ruled FAQ and larger close differ in shape and type role.
- [x] **Yes.** At least two Home sections are not grids. Briefing, continuous Process Path, narrow studio statement, FAQ and closing invitation provide the non-grid rhythm.
- [x] **Yes, with the approved label override.** Three primary actions on Home: Tell us about your brief, Start a project on Grow, Let's talk. The nav is always quiet text. Services has Grow as its only primary. Case pages have one closing contact primary. Normal desktop and mobile review viewports never contain two pills.
- [x] **Yes.** Contrast and focus pass on white, grey and pine. All 42 required token pairs pass. Muted on grey is 6.28:1; input borders on grey are 4.47:1; cream focus on pine is 11.49:1. See [contrast output](contrast.txt).
- [x] **Yes.** Copy has no em dashes or banned buzzwords. The payment FAQ's builder instruction was removed. Flagship proof is not repeated on Home.
- [x] **Yes.** Empty collections omit their Home blocks; missing featured proof omits the Excerpt. No monograms, fake imagery, placeholder frames or lorem. The retired Folio implementation was removed.

## Craft checklist

- [x] **Yes.** Tokens use #FFFFFF canvas, #E8E8E4 elevated objects, #1F3A2E pine, #C8C8C3 hairline. All primitive shadows resolve to none. Generation checks reject drift in these locks.
- [x] **Yes.** Exact 390 / 1024 / 1280 typography table completed before implementation. Briefing 40 / 56 / 64, short closing display 48 / 68 / 80, Excerpt 32/1.20 at every breakpoint, body 18/1.55. Roles retain their declared family and weight.
- [x] **Yes.** Elevation is fill only. Grey objects are restricted to Excerpt, Price Tablet, Strategy and Enquiry Sheet. Case rows, Insights, capabilities and FAQ are unboxed white.
- [x] **Yes.** Pine is concentrated in the opening, closing, actions and functional rules. No second accent.
- [x] **Yes.** Kindred's headline result appears once on Home. Amira's quote appears only in the Home Excerpt. The case page does not repeat her quote.
- [x] **Yes, with the approved Home Insights exception.** Secondary actions are underlined text at the end of their content. Home Insights uses the one allowed heading-left/link-right opening. Both indexes end with See all text. Those links return to the beginning of the complete list because filtering and pagination remain outside this visual rebuild.
- [x] **Yes.** No new imagery was invented. Quote Excerpt and typographic case entries provide the complete no-image treatment. Supplied future images retain dimensions, alt text and the 3:2 media treatment.
- [x] **Yes.** Quiet fill and colour feedback, no entrance choreography. All reading content exists in server HTML. Reduced motion stops the loading spinner and transitions. Save-Data omits grain.
- [x] **Yes.** At 390 the hero ask is visible in the first 844px screen and the Excerpt overlaps by 48px. Grow is first on mobile. Capability comparison becomes labelled reading ledgers rather than shrinking the body or requiring sideways scrolling. No overflow at 320.
- [x] **Yes.** Final pages preserve the reference lock's open field, hierarchy, flat surfaces and substantial close. They do not import a source site's identity or imagery.

## Evidence and validation

- Token generation and contrast: `python design/tokens/build.py --check` in a temporary environment with coloraide. **42/42 required pairs pass**, plus locked palette and shadow checks.
- TypeScript, ESLint and optimized Next.js production build pass. All 21 static pages generated. Home first-load JavaScript is 118kB in the build output.
- `NORTHWAY_BASE_URL=http://127.0.0.1:3005 npm test`: **3 content tests and 19 browser tests pass** against the production build.
- Twelve public route shapes, including legal and 404, checked at **320, 390, 768, 1024 and 1440** for overflow, copy and 44px targets. Axe checked those routes at **390 and 1440** with WCAG 2, 2.1 and 2.2 A/AA tags. No violations. Additional Home and library checks cover intermediate widths.
- Lighthouse 13.6.0 accessibility: **100/100 on all eight runs**, Home, Kindred, Services and Contact at 1440 and 390. No failed automated audits after the Excerpt accessible-name correction. See [Lighthouse results](lighthouse-accessibility.json). Scores supplement the manual and keyboard checks rather than certify conformance.
- Keyboard checks: skip link, mobile menu focus trap, Escape, focus return, menu destination, FAQ Enter/Space, form validation and error recovery. Focus colours were checked in the browser on pine and the light form.
- Journeys: every Home internal destination responds; unknown case is 404; both `/work` and `/work/kindred-clinic` return **301** to their corresponding case routes; Grow, Position and Brand query preselection works.
- Production form: exact browser payload reached a loopback-only receiver. A rejected receiver returned failure and retained values; the held request disabled the submit button; acceptance replaced the form with success. Invalid service/email return 400, missing configuration 503, honeypot does not forward. No external messages sent. See [form evidence](form-verification.json). Reproduce with `node scripts/verify-enquiry-v3.mjs` after building `.next-build-v3`.
- React review: presentation stays server-rendered; only nav, FAQ, form and examples own client state. Shared content reads are cached. Observers and listeners clean up. No unnecessary memoisation or animation dependency was added. Functional icons use Phosphor only.

## Full-page captures

Final captures are from the optimized production build, with fonts loaded, device scale 1 and the page reset to the top. The screenshot command checks response status and browser exceptions before accepting a capture. Reproduce with `NORTHWAY_BASE_URL=http://127.0.0.1:3005 node scripts/capture-visual-v3.mjs`.

| Page | Desktop, 1440 | Mobile, 390 |
| --- | --- | --- |
| Home | [Full page](screenshots/home-1440.png) | [Full page](screenshots/home-390.png) |
| Kindred case | [Full page](screenshots/case-1440.png) | [Full page](screenshots/case-390.png) |
| Services | [Full page](screenshots/services-1440.png) | [Full page](screenshots/services-390.png) |
| Contact | [Full page](screenshots/contact-1440.png) | [Full page](screenshots/contact-390.png) |
| Case index | [Full page](screenshots/cases-1440.png) | [Full page](screenshots/cases-390.png) |
| Insights index | [Full page](screenshots/insights-1440.png) | [Full page](screenshots/insights-390.png) |
| About | [Full page](screenshots/about-1440.png) | [Full page](screenshots/about-390.png) |
| Essay | [Full page](screenshots/article-1440.png) | [Full page](screenshots/article-390.png) |

Interaction states: [open FAQ desktop](screenshots/faq-open-1440.png), [open FAQ mobile](screenshots/faq-open-390.png), [hero hover](screenshots/hero-hover-1440.png), [mobile menu](screenshots/menu-open-390.png), [pending form](screenshots/contact-pending-390.png), [failed delivery](screenshots/contact-failure-390.png), [success](screenshots/contact-success-390.png).

## Corrections made during the gate

Lighthouse caught a custom Excerpt accessible name that omitted its visible quotation. The override was removed and WCAG 2.1 A checks were added to the browser suite.

The grey system was made global instead of retaining Home-only overrides. Repeated service headings and proof were removed. Case pages lost the related grid and repeated quote. Team initials and the unused monogram component were removed. Process lost its visible heading block and numbers. Home nav never changes into a pill. Services close became text so Grow remains the only primary. Mobile prices now lead with Grow. A missing or duplicate quote no longer leaves an empty Excerpt link. Nav targets were brought to 44px. Generated preview folders were excluded from lint.

An early development capture caught a transient refresh error on the case index. It was discarded. The optimized build, route checks and all final captures returned successfully. Interaction captures were reset to the top before capture so sticky navigation was not misplaced in the full-page image.

## Remaining scope boundaries

The default production form endpoint is intentionally unconfigured in this reusable template. Live delivery needs the buyer's endpoint; both configured and unconfigured production behaviour were tested locally. Existing legal replacement text and demo content remain part of the launch replacement list. No publication, merge, filtering system, Figma file or Framer edition was added.
