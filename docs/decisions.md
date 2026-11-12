# Decisions

What is locked for Northway, the first Skala sellable website template, and what is still open. Last updated 12 November 2026, Europe/Stockholm.

The build-ready spec in [docs/spec.md](spec.md) is binding. Working assumptions for open items are flagged here so the first build is not blocked. If Amos later changes one, that is a revision, not a question that should pause week one.

## Locked

These are approved and should be treated as fixed for v1 and for the week-one Code edition.

1. **One name.** Each Skala template has one name, used as both the product name on skala.design and the fictional demo studio inside the kit. Template #1 is **Northway**. Earlier working names are dropped and must not appear in the repo or the shipped site.

2. **Who it is for.** Buyers are consultants, strategists and small non-design agencies (marketing, development, architecture and interior studios, copywriters) who cannot design a premium site themselves. Designers can still buy it, but they are not the primary buyer. The demo studio is a small strategy and growth consultancy: positioning, brand strategy and marketing. Every demo record is labelled Sample.

3. **Five structural decisions**, adopted after Amos said to do what's best for consultants:
    1. Case study pages are text-first, in this order: Outcome, Challenge, Approach, Results, then an optional image block. Omit any block whose field is empty. Do not invent images.
    2. Case cards have an optional image and a typographic fallback (client, outcome line, tags). Never leave an empty image frame. The Kindred demo card ships without an image.
    3. The public label for the work index defaults to "Case studies", editable in `settings.workLabel`. Use that label in nav, footer, headings, empty states, secondary CTAs and meta. The v1 routes are `/case-studies` and `/case-studies/[slug]` and do not change when the label is edited. The CMS collection stays Projects at `/content/projects`. Redirect `/work` and `/work/[slug]` to the new routes with a 301.
    4. Insights is a primary nav item and a Home section (the third section when posts exist) showing the latest two or three posts. Omit the nav item, the footer link and the Home section when there are no published posts. Do not leave a public empty blog.
    5. The Home hero leads with a result or a quote, with an optional image. If neither result nor quote is set, fall back to heading and lede. If there is no image, use a typographic hero and do not reserve an empty frame. Never invent a result or quote.

4. **Pricing on skala.design.** Code only $149. Code plus Figma $199. Code plus Figma plus Framer $249. A Framer-only edition may later be listed on the Framer Marketplace at $79 to $129; the exact Marketplace list price is still open and does not block this build. Amos has confirmed these bundle prices, even though research for this buyer is thinner (see [docs/research.md](research.md)).

5. **Week-one ship is the Code edition only.** Amos confirmed this on 12 November 2026, Europe/Stockholm. Week one delivers a complete, sellable Next.js Code kit at the $149 tier: every page, every component, tokens, `/content`, README and launch checklist. The Figma file ($199) and the Framer remix ($249, then a Marketplace listing) come later, and must then match this IA and the acceptance checks in the spec. Do not spend week one trying to finish all three editions.

6. **Enquiry.** Enquiries go through a form only. A calendar link is optional and appears only if `settings.calendarUrl` is set. The Northway demo has no calendar URL, so the calendar slot is hidden.

7. **Theme.** v1 is light theme only. Inverse (black) and brand-band (accent, which is black in this brand) are section-level only. There is no sitewide dark-mode toggle. Dark tokens may exist in the code for a later release, but the shipped site stays light.

8. **Brand tokens, delivered.** One free font: Hanken Grotesk (SIL Open Font Licence 1.1). Canvas `#DBDBD8` (warm grey). Ink and a black accent. Values live in [design/tokens/tokens.json](../design/tokens/tokens.json). Components bind only to semantic or component token names, never to raw hex or a font-family string. Inter and Skala Blue `#1F4FE0` were placeholders and must not be used as the template brand.

9. **Icons.** Lucide is the default icon set for v1.

10. **Voice and copy.** Studio "we", international English, short and clear. No founder name, no personal brand, no eyebrow labels, no em dashes. No invented clients, results, logos or quotes. Sample results are plain words and start with "Sample result, for demo only".

11. **Single-site licence** in v1. A multi-site or agency licence would be a later add-on on skala.design, not a feature in the kit.

12. **English only.** Demo currency is USD. Tax line: "Prices excl. VAT/sales tax." Reply line: "We reply within one working day." Both are settings.

13. **No cookie banner and no analytics in v1.** `/cookies` exists as a page.

14. **skala.design is not changed** by this repo. Implementation offers and custom-work paths live on the product page there, not on the buyer's public site.

## Working assumptions, still open with Amos

The spec uses the following so Codex and Gemini can build. They are not new Amos approvals, except where noted. Follow them for the first build unless Amos says otherwise, and keep them easy to change.

1. **Prices shown by default on Services.** `settings.showPrices = true`. One switch hides every price and from-figure, including the hero and the comparison-table price row. Typical-project scenarios stay either way.

2. **Footer credit off on paid licences.** A "Template by Skala" footer line exists as a switch (`settings.showCredit`), default off. Draw both states; ship with it off. Do not force the credit.

3. **Code edition uses structured content files.** No headless CMS in v1. Content lives in `/content` (`settings.json` plus MDX or typed Markdown for collections). This is not a non-designer CMS. A headless option can be a later add-on.

4. **Implementation as a later offer.** An implementation service may be announced at a fixed price, on the skala.design product page only, not on the buyer's public site. Out of week-one scope.

5. **Whether the kit price counts toward custom work** is still open. Do not encode a credit rule in the kit.

## Also still open, not blocking week one

- Exact Framer Marketplace list price: $79, $99 or $129.
- Whether to offer an all-access pass for every future Skala template.
- Whether a free lite version should exist as a lead product.
- The implementation-service price and exact scope.
- The Figma file title still needs renaming to "Northway - Design System" (the API could not rename it). Figma file: [https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3](https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3).

## How to use this file

If Amos changes a locked item, update this file, then revise the spec, the plan and the content as needed. If a detail is in neither the spec nor this file, choose the calmer, more accessible option, and record it in the README. Never block the build to ask.
