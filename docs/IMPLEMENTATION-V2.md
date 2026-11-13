# Northway v2 execution plan

Source: approved `northway-v2-direction` commit `50ef32d`, 13 November 2026. The existing implementation and local copy work are retained.

## Precedence

`v2/DECISIONS-V2.md` wins over the proposal-era wording still present in the design and conversion documents. Bricolage is confirmed. The centred pine Briefing is confirmed. The footer disclosure replaces all item badges and prefixes. Text-first cases, optional imagery, routes, fixed prices, four form fields and accessibility remain.

## Pass 1: foundations

- Update DTCG primitives and semantic aliases: pine, white, light grey, cream, green-tinted ink, card radius and shadow.
- Load Bricolage 500/600, retain Hanken body/UI, ship font licences, use Phosphor Regular.
- Add Waymark, Folio and a static grain asset. Drop grain for reduced-data, Save-Data, print and forced colours.
- Regenerate CSS from tokens. Keep components free of raw brand values.

## Pass 2: page composition

- Briefing: result as H1, factual attribution, one white primary, readable linked from-price, two honest proof chips, peeking Kindred Folio.
- Case Ledger: all four sourced cases in finished uneven rows. Omit the Home teaser when empty; keep an honest empty on the index.
- Insights: a compact editorial list with dates and meaningful excerpts.
- Price Tablet: one white rate sheet, Grow marked by a rule and Typical text, one primary, quiet links on other rows, weeks retained when prices hide.
- Process Path: a spine with four unequal steps and useful outcomes.
- Studio and FAQ: complete copy, compact distinct layouts, omit empty content.
- Enquiry Sheet: a white letter-card, pine edge, reply sentence, four fields and Send the brief.
- Pine Band and footer: one continuous pine close, one demo disclosure. Update case-page outcomes and all public demo copy to the same rules.

## Pass 3: verification

- Check conversion MUSTs, one-primary behaviour, empty states and price-off behaviour.
- Check 320 / 768 / 1024 / 1280 / 1440 widths, keyboard menu and FAQ, delivery error recovery and reduced-motion HTML.
- Check first-view price visibility at 1280. A short-height viewport may use a compact hero-top token to preserve the conversion requirement; record the measured result.
- Run token contrast, lint, TypeScript, build and browser checks. Review desktop and mobile captures. Export the final full-page PNG.

## Motion decision

Interaction feedback uses the existing 120/200ms tokens and standard easing. No entrance sequence is necessary to explain the design. The result, Folio, process and pricing rule are complete in the first HTML. Grain and proof chips stay still; reduced motion is instant.

## Completion record

Completed 13 November 2026.

- All three implementation passes are complete, including Services comparison, supplied About team records and the named quote under pricing. No clients, metrics, photos or testimonials were invented.
- `npm run lint`, `npm run build` and `npm run typecheck` pass. The build generates 21 static pages plus the dynamic contact and enquiry routes.
- `npm test` passes: 2 server-rendered content checks and 15 browser checks. Coverage includes price-off and empty collections, hero fallbacks, one disclosure per public page, keyboard navigation, form error recovery, responsive overflow, axe checks, reduced motion/no JavaScript and Save-Data grain fallback.
- At 1280 x 800, the result, primary CTA and linked from-price are entirely in the first viewport. The compact hero-top token applies below 820px viewport height on desktop.
- All 42 required token contrast pairs pass. Cream on pine with the 8% grain test remains 9.00:1.
- Desktop and 320px mobile full-page captures were visually reviewed. Final PNGs are exported to the task's visualizations folder, with the production preview at `http://127.0.0.1:3001`.
- Real enquiry delivery still requires `FORM_ENDPOINT`. The demo remains noindex and the replace-before-launch list is in `LAUNCH.md`. This design pass does not mark the entire sellable kit as launched.
