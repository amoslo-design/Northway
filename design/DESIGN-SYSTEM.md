> Historical v1 visual guide. The approved [v2 decisions](../v2/DECISIONS-V2.md), [brand](../v2/design/BRAND-V2.md) and [conversion rules](../v2/docs/CONVERSION.md) now control colour, type, surfaces, sections and demo disclosure. `design/tokens/tokens.json` contains the implemented v2 values.

# Northway - Design System

**Template and demo studio:** Northway, always labelled Sample. Email `hello@northway.example`. Promise: “Work that earns the next project.”  
**Theme:** light only in v1. Inverse and brand-band are section-level, not a sitewide dark mode.  
**Version:** v2, 12 November 2026, Europe/Stockholm.  
**For:** Codex, Gemini, and Framer Agent, building the first Skala sellable studio template.

This is the build guide. The single source of truth for values is [`tokens/tokens.json`](tokens/tokens.json) (W3C DTCG). Rebuild CSS with:

```bash
python tokens/build.py          # writes tokens/tokens.css and tokens/theme.css
python tokens/build.py --check  # also prints a WCAG 2.2 AA contrast report (requires coloraide)
```

Do not edit the generated CSS by hand. Do not bind components to raw hex, to a font-family string, or to a primitive token. Bind to **semantic** or **component** token names. An earlier serif-and-umber exploration (Newsreader, umber) is superseded and is not in this repo. That exploration drifted from the reference board, which is the style guide.

The [UX Lead build-ready site spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51) is binding for IA, states, layout, motion, targets, and semantic token **names**. This document sets the visual direction and the atomic system those names sit in.

The [reference board](REFERENCE-BOARD.md) ([Page](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/d0689ec8-f43e-4bcb-8cdc-b05fc3a408f6)) is the style guide this system was re-derived from. Compressed reference shots live in `references/shots/`. Do not copy those sites. Take the named behaviours, restyle them with these tokens, and leave everything else.


> **Locked IA, 12 November 2026 (Europe/Stockholm).** Amos adopted five structural decisions after this design system was first drawn. They override any older anatomy in this file. The visual tokens, type, colour, space and atomic rules are unchanged.
>
> 1. Case study pages are text-first, in this order: Outcome, Challenge, Approach, Results, then an optional image block. Omit empty blocks. Do not invent images. Routes are `/case-studies` and `/case-studies/[slug]`. `/work` and `/work/[slug]` 301 to those routes.
> 2. Case cards have an optional image and a typographic fallback (client, outcome line, tags). Never leave an empty image frame. The Kindred demo card ships without an image.
> 3. The public label defaults to "Case studies", editable in `settings.workLabel`. Use that label in nav, footer, headings, empty states, secondary CTAs and meta. The route does not change when the label is edited.
> 4. Insights is a primary nav item and the third section on Home (latest two or three posts). Omit the nav item, the footer link and the Home section when there are no published posts.
> 5. The Home hero leads with a result or a quote, then a short H1, lede, from-price and CTAs. Optional image. If neither result nor quote is set, fall back to heading and lede. If there is no image, use a typographic hero and do not reserve an empty frame. Never invent a result or quote.
>
> Bind components to semantic or component tokens. Use Hanken Grotesk and the delivered palette (canvas `#DBDBD8`, ink, black accent). Do not use Inter or Skala Blue `#1F4FE0` as the template's own brand. Those were UX Lead placeholders only. Icons: Lucide.
>
> The binding site spec is [docs/spec.md](../docs/spec.md). Week-one plan: [docs/plan.md](../docs/plan.md). Demo copy: [docs/content.md](../docs/content.md). Figma: [Northway design file](https://www.figma.com/design/YfjwKelPQpskTVHJ6xJ1p3) (the file title may still need renaming to "Northway - Design System").


---

## 1. Principles

Feel, in four words (from the board): **calm typographic work-first craft.**

1. **The work is the product.** The first screen names the promise in a short typographic line, shows real work, and offers one clear next step. Gretel, Andersen, Halston and Pentagram all do this. (Board, Do 1; Andersen home; Gretel home.)
2. **Almost monochrome at a glance.** Warm grey canvas, near-black ink, black as the only accent. Photography does the work of personality. Status colour exists only where meaning needs it (forms, Sample). (Board, Colour; Amos: black as the light-theme accent; Halston `#DBDBD8`.)
3. **A tight grotesk, regular or medium, not ultra-bold.** Authority comes from scale, tracking and whitespace, not from a heavy display cut. (Board, Type; Andersen BDO Grotesk 400; Halston General Sans 500; Walker Zalando Sans 400.)
4. **One primary in view.** A filled ink pill for the main action; a quiet outline for the secondary. (Clay’s one Contact pill, Last Studio’s nav CTA, Andersen’s single “See our work”, Halston’s outlined Consultation. UX Lead: pills.)
5. **Motion is small, or it is still.** The references we kept are mostly still on first paint. That is the point. Allowed: 120ms colour, ≤8px hover, one optional reveal, an accordion open. Final pose in the server HTML. (Board, Motion; build-ready spec.)
6. **No fake proof, no eyebrows, no theatre.** Omit empty blocks. Sample content is labelled Sample. No mesh, neon, scribbles, autoplay, or viewport-filling wordmarks. (Board, Don’t; Last Studio and Stada as what to cut.)
7. **A rebrand is a swap.** One type family, semantic tokens, component tokens that only alias semantics. A buyer changes primitives (or the few semantic aliases) and the kit follows.

---

## 2. Visual direction

Every decision below is cited. Values live in `tokens.json`.

### Type - Hanken Grotesk, one family

**Recommendation:** [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk), SIL Open Font Licence 1.1, Alfredo Marco Pradil / Hanken Design Co., via Google Fonts. A single grotesk for display, body and UI, so a rebrand is one swap.

**Why this face.** The board asked for a free open match to the grotesks on the sites we are keeping, then explicitly preferred grotesk as the default over a serif (Last Studio’s Hedvig Letters is an optional A/B only, and we are not taking it). Hanken is the closest widely licensed cut to:

- Halston’s General Sans, 40.8px / 40.8px, weight 500, solid leading - “the closest overall feel.”
- Andersen’s BDO Grotesk, 51px / 61.2px, weight 400, tracking −0.51px - “the home pattern we want, almost beat for beat.”
- Gretel’s Akkurat, body 16 / 27.2.
- Walker’s Zalando Sans, 48px / 51.6px, weight 400, tracking −0.04em - “the cleanest Framer example of type, then work, no theatre.”

**Not Inter** (Skala’s face). **Not Geist** (too close to a generic 2026 AI/startup look). **Not** Akkurat, Universal Sans, BDO Grotesk, Plain, or General Sans as the kit default - those are the references, not the licence we ship. Schibsted Grotesk was considered (also OFL, already in the v1 file); it has more newspaper character than the plain neo-grotesks above, so it is not a second kit option.

**Weights we load:** 400, 400 italic, 500, 600. Two to three weights is the performance budget; subset the family.

**Roles (bind these, never a family string):**

| Role | Token | Weight | Use |
|---|---|---|---|
| `font.display` | Hanken 400 | Display, Heading 1 |
| `font.body` | Hanken 400 (italic for quotes) | Body, lead, quotes |
| `font.ui` | Hanken 500; 600 for current and selected | Nav, buttons, labels, captions, chips |

**Scale** (board: 48–64px display at 1280, tracking about −0.02em - the middle of Andersen −0.01 and Clay/Walker −0.04; body locked 16 / 1.6). Wide (1280) changes type only. Hero type clamps below about 390px so it holds 36px at 320. **No eyebrow style.**

| Style | Mobile | Tablet (768) | Desktop (1024) | Wide (1280) | Weight | Tracking | Leading |
|---|---|---|---|---|---|---|---|
| Display | 36–40 clamp / 1.12 | 48 / 1.12 | **56 / 1.10** | **64 / 1.08** | 400 | −0.02em | as shown |
| Heading 1 | 32 / 1.20 | 36 / 1.18 | 44 / 1.15 | 48 / 1.15 | 400 | −0.02em | |
| Heading 2 | 24 / 1.25 | 28 / 1.25 | 32 / 1.22 | 32 / 1.22 | 500 | −0.015em | |
| Heading 3 | 20 / 1.30 | 20 | 24 | 24 | 500 | −0.01em | |
| Lead / Quote | 18 / 1.50 | 18 | 20 / 1.50 | 20 | 400 (italic for quotes) | 0 | |
| Body | **16 / 1.60** | 16 / 1.60 | 16 / 1.60 | 16 / 1.60 | 400 | 0 | locked |
| Label | 14 / 1.40 / 0.01em; nav and button 16 / 1 / 0 | same | same | same | 500 | | |
| Caption | 14 / 1.40 / 0.01em | same | same | same | 400 | | |
| Button | 16, optically centred in 44 (md) or 52 (lg) | same | same | same | 500 | 0 | 1 |

The H1 is about eight words or fewer. The logo is a slot in the bar, never a viewport-filling wordmark (avoid Walker, Instrument, Last Studio’s ~200px). (Board, Don’t 8; AREA 17 Avoid.)

### Colour - warm grey, ink, black accent

| Semantic | Value | Citation and notes |
|---|---|---|
| `color.bg` | `#DBDBD8` oklch(0.891 0.0041 106.5) | Halston’s measured canvas. Grey first, warm second. Not the v1 cream, not stark white. Ink on this is **12.54:1**. |
| `color.surface` | `#E6E6E2` | A step lighter, for form panels. |
| `color.surface.raised` | `#F3F3EF` | Near-white, inputs and popovers. |
| `color.text` | `#1A1A1A` | Pentagram and AREA 17 near-black. |
| `color.text.muted` | `#555552` | 5.39:1 on the canvas. |
| `color.accent` | `#1A1A1A` | **The same as ink.** Amos: black as the light-theme accent. The marketing site looks almost monochrome. Because accent equals text, **body links are underlined at rest** (WCAG 1.4.1). |
| `color.accent.hover` / `.pressed` | `#000000` | True black. |
| `color.accent.contrast` | `#FFFFFF` | 17.40:1 on ink, 21:1 on black. Never used as text on the canvas (1.39:1 - fail). |
| `inverse.bg` | `#000000` | Board: inverse is black, not navy. White type, white pill, ink text. No accent-fill CTA on inverse. |
| `brand-band.bg` | `#1A1A1A` | Visually close to inverse in this monochrome system. Tokens stay separate so a rebrand can colour the band. White type, white pill, ink text. Never dark text on the fill. |
| Status and Sample | muted fills, strong text | Only where meaning needs them. Sample badge `#6B4A12` on `#F1E6C8`, **6.46:1**, must stay obvious. |

**All required contrast pairs: 42/42 pass WCAG 2.2 AA**, computed with coloraide (`method='wcag21'`), not guessed. Tightest passing UI pair: `color.border.input` on `color.bg`, **3.29:1**. Strong scrim over a white photo: **5.22:1**. Run `python tokens/build.py --check`.

Decorative hairlines are reported (1.48:1) and are not required to meet 3:1; input borders are. Disabled is exempt and still reported (3.33:1).

### Spacing and layout - locked, with one new token

From the UX Lead spec, confirmed by the board’s measurements.

| Token | Mobile | Tablet 768 | Desktop 1024 | Wide 1280 | Citation |
|---|---|---|---|---|---|
| `layout.content.max` | 1280 inner | same | same | same | Locked. Measured inner widths on the references land around 1160–1232 inside a 1280 viewport. |
| `layout.measure` | 66ch | 66ch | 66ch | 66ch | Locked. |
| `layout.gutter` | 16 | 24 | 32 | 32, type only | Locked. |
| Grid columns / gutter | 4 / 16 | 12 / 24 | 12 / 24 | 12 / 24 | Locked. |
| Work grid / gap | 1 / 24 | 2 / 24 | 3 / 24 | 3 / 24 | Andersen and Gretel: large, low-chrome images. |
| `space.section` | 96 | 96 | 128 | 128 | Andersen’s 96 is the marketplace norm; 128 from 1024 is closer to AREA 17 and Gretel. |
| `space.section.inner` | 24 | 24 | 40 | 40 | Locked. |
| **`space.hero.top`** | 96 | 128 | **192** | 192 | **New.** Andersen measured 192px at the top of the home hero so the H1 clears the sticky nav. “Keep that in a token, not a magic number.” |
| Nav / targets / button lg | 68 / 44×44 with 8px between / 52 | same | same | same | Locked. Not Clay’s 110 or Halston’s 48. |

8pt scale: 8 16 24 32 40 48 64 80 96 128, plus hero-top 192. Exceptions, locked: 44, 52, 68, focus 2. Design from 360; **320 must not overflow.**

**Radius:** `none` 0 on photographs, bands, tables, work cards (Andersen, Gretel). `sm` 4 on inputs, tags, Sample. `md` 8 optional on quiet cards. `pill` 999 on every button (UX Lead). Do not mix many radii - Andersen’s sharp-cornered buttons are a valid buyer restyle, not the kit default.

**Elevation:** almost none at rest, matching references that are still and flat. `shadow.hover` only on case cards under fine pointer, 120ms, no glow.

### Imagery

- Work cards: **3:2**, one ratio across the grid. A calm 4:3 is acceptable only if applied consistently. (Board, Imagery; Andersen work, Gretel.)
- Case and home feature: full-bleed or near-bleed landscape, **16:9** or up to about **2:1 / 2.33:1** (Pentagram). Inner content still caps at 1280.
- `radius.none` on photographs. Explicit width and height. Captions or alt in the Caption style, ink or muted, never only on a scrim.
- Type on a photo uses `scrim.strong` (ink at 64%, 5.22:1 white over white) or `scrim.gradient` (72%, 6.88:1). `scrim.soft` (24%) is atmospheric only - no type. If contrast fails, a solid `inverse.bg` panel. Do not take Pentagram’s open caption on a light sky.
- Sample images are labelled **Sample**. No Midjourney faces, no fake logos, no placeholder metrics. Tonal fields may stand in as placeholders in Figma; they are not photographs of Northway’s (or anyone’s) real work. Northway is fictional.

### Motion

Follow the spec exactly, which the board restates.

| Token | Value | Use |
|---|---|---|
| `duration.fast` | **120ms** | Colour and opacity on hover, focus, pressed. Locked. |
| `duration.default` | **200ms** | Optional one-time section reveal, opacity only. Never on every block. |
| `duration.slow` | **320ms** | Accordion open when motion is allowed. Instant under reduced motion. |
| `ease.standard` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Ease-out. No springs, no overshoot past 1. |
| `duration.instant` | 0ms | The only duration under `prefers-reduced-motion`. |

Translate at most 8px, fine pointer only. Do not animate `height`, `width`, or `left`. No autoplay, parallax, bounce, glow, cursor trails, or scribbles. Components render in their **final pose in the server HTML**. Under reduced motion every duration is 0ms; colour-only states may still change, instantly.

### Icons

[Lucide](https://lucide.dev), **ISC Licence**, one set, **24px**, 2px stroke. Required: `menu`, `x`, `plus` (accordion; swaps to `minus` - under reduced motion, instant, `transition-none`), `circle-alert`, `circle-check`, `check` (selected tag), `chevron-left`, `chevron-right`. Every icon has a text label or an accessible name. Do not mix sets.

---

## 3. Token tiers

Three tiers, plus breakpoint modes. Components bind **tier 2 or tier 3 only**.

```
primitive  →  semantic  →  component
  (tier 1)      (tier 2)      (tier 3)
   raw values    UX Lead names   button.primary.bg → color.accent
```

- **Tier 1 - `primitive`.** Raw colour, space, radius, type family, motion. Never used in a component file. A rebrand edits these.
- **Tier 2 - `semantic`.** Exact dotted names from the build-ready spec (`color.accent.hover`, `inverse.cta.bg`, `tag.sample.text`, `brand-band.cta.text`, `selected.indicator`, `space.section.inner`, `duration.fast`…). Figma uses slashes (`color/accent/hover`). CSS hyphenates and drops a group’s `default` child (`color.surface.default` → `--color-surface`; but `duration.default` stays `--duration-default`).
- **Tier 3 - `component`.** Anatomy of each piece, aliasing a semantic token, never a primitive and never a hex. `button.primary.bg` → `color.accent`. Code may bind either name.

In DTCG a token and a group cannot share a name, so groups such as `color.surface` use a `default` child. The semantic name and the CSS name drop that `default`, except where `default` is the real name (`duration.default`).

Breakpoint values live in `$extensions["northway.modes"]` with keys `mobile`, `tablet`, `desktop`, `wide`. The token’s `$value` is the **desktop (1024)** value. The generator writes mobile (`max-width: 767px`), tablet (`768–1023`), and wide (`min-width: 1280`, type only) overrides.

Collections in Figma: **Primitives**, **Semantics** (Light), **Component**, **Breakpoint**.

---

## 4. Folder structure and naming

```
src/
  styles/
    tokens.css          # generated - do not edit
    theme.css           # generated Tailwind v4 @theme
  components/
    atoms/
      Button.tsx        # also ButtonIcon
      Link.tsx
      Input.tsx
      Select.tsx
      Textarea.tsx
      Tag.tsx
      Badge.tsx         # Sample
      Icon.tsx          # Lucide wrapper
      FocusRing.tsx     # global, or a utility
      SkipLink.tsx
    molecules/
      Field.tsx         # label, control, help, error
      CaseCard.tsx
      ServiceCard.tsx
      FaqItem.tsx
      NavItem.tsx
      Pager.tsx
    organisms/
      Nav.tsx           # desktop + mobile overlay
      Hero.tsx          # home and inner
      WorkGrid.tsx
      Process.tsx
      Team.tsx          # includes solo
      Testimonials.tsx  # real-only; omit if empty
      CtaBand.tsx       # inverse and brand-band
      EnquiryForm.tsx
      Footer.tsx
    templates/
      SiteShell.tsx     # nav + footer + skip link
      Home.tsx
      WorkIndex.tsx
      CaseStudy.tsx
      Services.tsx
      About.tsx
      InsightsIndex.tsx
      Post.tsx
      Contact.tsx
      Legal.tsx
      NotFound.tsx
  content/              # sample Northway records, labelled Sample
```

**Naming.**

- Components: PascalCase, one component per file, named export matching the file.
- CSS variables: the generated `--color-text-muted`, `--button-primary-bg`, `--duration-fast`. Never invent `--blue-500` or Tailwind default `stone-*`.
- Semantic names in docs and in Figma: dotted or slashed, as above.
- Variants: `primary` | `secondary` | `ghost` | `inverse` | `brand-band`. Sizes: `md` | `lg`.
- States as data attributes or variants: `rest`, `hover`, `pressed`, `focus-visible`, `disabled`, `loading`, `error`, `success`, `current`, `selected`, `open`.
- Demo records: a `sample` boolean; the Sample badge is mandatory when true.

---

## 5. Atoms

For every atom: anatomy, tokens, variants, states, sizes, accessibility, and a reference. Hover styles apply only under `(hover: hover) and (pointer: fine)`. `:focus-visible` only, never `:focus` alone. 44×44 minimum, 8px between adjacent targets.

### 5.1 Button

**Anatomy.** Optional leading icon (24) + label (no icon-only except the icon-button atom). Pill shape. One primary in view.

**Tokens.** `button.primary.bg` → `color.accent` (`#1A1A1A`); `.text` → `color.accent.contrast`; `.hover.bg` → `color.accent.hover` (`#000`); `.pressed.bg`; `.disabled.*`; `.radius` → `radius.pill`; `.height.md` 44; `.height.lg` 52; `.pad-x` 32. Secondary uses `button.secondary.border` → `color.border.input` and ink text. Inverse and brand-band CTAs use `inverse.cta.*` and `brand-band.cta.*` (white pill, ink text).

**Variants.** `primary`, `secondary`, `ghost`, `inverse`, `brand-band`.  
**States.** Rest, hover, pressed, focus-visible, disabled, loading (label stays, spinner optional, `aria-busy`).  
**Sizes.** `md` 44, `lg` 52 (hero and final CTA).

**A11y.** Visible focus (`focus.width` 2, `focus.offset` 2). Disabled is `aria-disabled` (or native `disabled`), no pointer, no hover. Contrast: 17.40:1 white on ink; 12.54:1 ink on the outlined secondary’s canvas. Do not put an accent-fill button on inverse. Do not put dark text on the brand-band fill.

**Reference.** Andersen “See our work” (filled black - we restyle as a pill, per the spec). Halston “Consultation +” (outlined secondary). Clay and Last Studio: one primary in the bar.

### 5.2 Link

**Anatomy.** Text, optional trailing icon. Body and footer links are **underlined at rest**, because `color.accent` equals `color.text`. Nav is the exception (see Nav item).

**Tokens.** `link.color` → `color.accent`; `link.hover.color` → `color.accent.hover`; `link.inverse.color` → `inverse.text` (prefer white; `color.accent.inverse` is optional).

**States.** Rest, hover, focus-visible, current (nav only). Visited is not required.

**A11y.** WCAG 1.4.1 - not colour alone. Underline is the cue. Focus ring as global.

**Reference.** Board Colour: almost monochrome. Spec: prefer white links on inverse.

### 5.3 Input, Select, Textarea

**Anatomy.** Native control. Label is **not** inside this atom - it belongs to the Field molecule. Placeholder is optional and never the only label. Height 44 (textarea `min-height` 120). `radius.sm`.

**Tokens.** `input.bg` → `color.surface.raised`; `input.text`; `input.placeholder` → `color.text.muted`; `input.border` → `color.border.input` (3.29:1 on the canvas - tightest UI pair); `input.border-focus` → `color.focus`; `input.border-error` → `color.danger.border`; `input.radius`; `input.height`.

**States.** Rest, hover, focus-visible, error, disabled, filled.  
**A11y.** Labelled by the Field’s `<label>` (`for` / `id`). Error is text below, plus `aria-invalid` and `aria-describedby`, plus an optional `circle-alert` - not a red border alone. The Contact form sits on a light surface, never on inverse.

**Reference.** UX Lead, Contact: four fields max. 44px. Halston / Andersen quiet chrome.

### 5.4 Tag / chip

**Anatomy.** Optional check icon (selected) + label. `radius.sm`.

**Tokens.** `tag.bg`, `tag.text`, `tag.border`, `tag.hover.bg`, `tag.selected.*`. Selected is not colour alone: check or Hanken 600, plus `tag.selected.border`.

**States.** Rest, hover, selected, focus-visible, disabled.  
**Use.** Work filters (default All, only when there are at least four cases), sector, optional Typical mark, case-page service tags.

**Reference.** Andersen case page: quiet service tags (“Brand Strategy”, “Messaging”). Spec: selected is not colour alone.

### 5.5 Badge (Sample)

**Anatomy.** The word “Sample”. `radius.sm`, tight padding (8×4).

**Tokens.** `badge.sample.bg` → `tag.sample.bg` (`#F1E6C8`); `badge.sample.text` (`#6B4A12`, 6.46:1). Must stay obvious. On every demo record, and on the replace-before-launch checklist.

**Reference.** Spec, Sample badge. Board: demo work must never be readable as Skala (or Northway) real work.

### 5.6 Icon

**Anatomy.** A Lucide glyph at 24px, 2px stroke, optically aligned. Always with a text label or an accessible name. Colour follows the surrounding text token unless it is a status icon (`color.danger`, `color.success`).

**Tokens.** `icon.size` 24, `icon.stroke` 2, `icon.color` → `color.text`.

**Reference.** Spec, Assets. Required set listed in §2 Icons.

### 5.7 Focus ring

**Anatomy.** Global. 2px ring, 2px offset, `:focus-visible` only. `color.focus` (ink) on light surfaces; `color.focus.inverse` (white) on inverse and brand-band. Never remove without a replacement. Do not use a mid-grey ring that fails 3:1. Do not use a “coloured” accent ring on inverse - inverse uses white, 21:1.

**Tokens.** `focus.width`, `focus.offset`, `color.focus`, `color.focus.inverse`, aliases `inverse.focus` and `brand-band.focus`. The generated CSS already includes a `:focus-visible` helper.

**Reference.** UX Lead, Focus. 1.4.11, 3:1.

### 5.8 Skip link

**Anatomy.** First focusable element on every page. Visually hidden until focused; then a visible ink pill (or ink fill, white text) at the top left, label “Skip to content”, target `#main`.

**Tokens.** `skip-link.bg` → `color.accent`; `skip-link.text` → `color.accent.contrast`.

**Reference.** UX Lead, Primitives.

### 5.9 Icon button

**Anatomy.** 44×44 target, 24px icon inside, accessible name required (`aria-label`). Used for menu, close, accordion plus.

**Tokens.** `button.icon.size` 44, `button.icon.icon-size` 24. States as Button. Menu has open and closed.

**Reference.** UX Lead. Reduced motion: instant open, no slide.

---

## 6. Molecules

### 6.1 Field

**Anatomy.** Label (above) + optional hint + Input/Select/Textarea + help or error text (below) + optional status icon. Gap 8.

**Tokens.** `field.label.*`, `field.help.*`, `field.error.*` (`color.danger.text` on `color.danger.muted`, `circle-alert`), `field.success.*`, `field.gap`.

**States.** Default, error, disabled, success (post-submit).  
**A11y.** `<label for>`. Error: `aria-invalid`, `aria-describedby`, text (and icon), not a border alone. Never placeholder-only.

**Reference.** UX Lead, Input and Contact form.

### 6.2 Case card

**Anatomy.** Optional image (3:2, `radius.none` when present) + client + sector + year + one-line result. Optional Sample badge. The **whole card** is the target. If the image is empty, use a typographic fallback (client, outcome line, tags) with a clear hierarchy. Never leave an empty image frame, and never collapse into a hole. No invented figures. Empty (no projects at all) is a designed state, never a fake grid. The Kindred demo card ships without an image.

**Tokens.** `case-card.*`. Hover: `shadow.hover` and at most 8px translate, 120ms, fine pointer only; under reduced motion, colour or nothing, 0ms.

**States.** Rest, hover, focus-visible. Grid: 1 / 2 / 3 columns, gap 24.

**Reference.** Andersen work index (two-column, almost no chrome). Gretel (large photograph, title beside). Board: prefer these over mosaic or heavy card borders.

### 6.3 Service / pricing card

**Anatomy.** Title, short line, optional price and timeline, typical-project scenario, optional Typical badge. The global price switch hides every price and “from” figure; the scenario stays.

**Tokens.** `service-card.*`. Price uses `color.text`, not a decorative accent.

**Reference.** Korda’s “From $8,000” as the closest marketplace example of a published from-price - take the plain written offer, not Korda’s dark cinematic frame. UX Lead, Services.

### 6.4 FAQ item

**Anatomy.** Header (question, plus icon, 44px) + panel (answer). Open: header weight 600, plus swaps to minus. **No height animation.** Under reduced motion the panel is instant and the icon has `transition-none`. If a group is empty, the parent organism hides the section.

**Tokens.** `faq-item.*`. Duration `duration.slow` (320ms) only for an allowed opacity fade, never for height.

**Reference.** UX Lead, FAQ. Skala’s own site: a hidden start state must never be baked into server HTML.

### 6.5 Nav item

**Anatomy.** Label. Current: Hanken 600 plus a 2px underline (`selected.indicator`). Not a filled bar. Not a pill on every link (avoid Instrument).

**Tokens.** `nav-item.*`. Target 44.

**Reference.** Stada’s underline current (take this, not Stada’s mint bar). Spec, selected-indicator.

### 6.6 Pager

**Anatomy.** Previous / next, 44px targets, 8px gap, chevrons with text or accessible names. States: both sides, first (no prev), last (no next). Used on cases and posts.

**Tokens.** `pager.*`.

**Reference.** UX Lead, Prev/next pager.

---

## 7. Organisms

### 7.1 Nav and mobile overlay

**Anatomy.** Wordmark (slot, ~28px, left) + links (Case studies from `settings.workLabel`, Services, About, Insights if posts exist, Contact) + one primary CTA ("Start a project") on the right. Height 68, sticky, solid canvas (same as `color.bg`, like Halston: a seamless bar). Optional scrolled hairline. Insights omitted when empty. Pricing is not a nav item.

**Mobile.** Closed: wordmark, 44×44 menu. Open: simple overlay, links, CTA pinned or at the foot, `overlay.backdrop`. Reduced motion: instant, no slide.

**Tokens.** `nav.bg`, `nav.height` 68, `nav.cta.*`, `nav.overlay.*`.

**Reference.** Last Studio's IA is the closest match (Case studies / Services / Insights / About + Start a project) - take the mapping, not the yellow pill or the bundle bar. Clay: one filled primary in the bar, but keep 68, not 110. Halston: quiet sticky, same-as-canvas surface. Do not let a hamburger replace desktop nav from 1024 (Walker Avoid).

### 7.2 Hero

**Home anatomy.** `space.hero.top` (192 from 1024). Reading order: result or quote first (Sample-labelled in the demo), then a short H1 (the one h1, at most about eight words: "Work that earns the next project."), lede at `layout.measure`, optional from-price, one primary (`lg`, "Start a project"), optional secondary "See case studies" (from `workLabel`, or "See services" if there are no cases). If neither result nor quote is set, omit the lead slot and start with H1 and lede. If there is no image, a typographic hero: do not reserve an empty frame. Never invent a result, quote or image. The demo ships with the Kindred Sample result and no hero image.

**Inner anatomy.** Quieter Heading 1 and optional intro at the measure. Used on Case studies, Services, About, Insights, Contact, Legal, 404.

**Variants.** Result lead; quote lead (if no result); heading and lede fallback (if neither). With and without from-price. With and without image. Text on a featured photo uses scrim rules.

**Tokens.** `hero.*`.

**Reference.** Andersen home, “almost beat for beat.” Gretel: statement, then a case (shorten the line; we do not hide the CTA). Halston: this rhythm on the warm grey canvas. AREA 17: the quiet and the scale, not the long manifesto, and we do not leave the first viewport with no path into work. The logo stays in the bar (Don’t 8).

### 7.3 Work grid

**Anatomy.** Optional short header ("Selected case studies", from `workLabel`: a heading, once, not an eyebrow above every case). Filter chips only when there are at least four cases, default All. Grid of Case cards, 1 / 2 / 3, gap 24. Empty is a designed honest state, linking to Services and Contact. Never a fake grid, never placeholder clients.

**Tokens.** `work-grid.*`.

**Reference.** Andersen work, Gretel. Not Base Design’s mosaic. Not Order’s dense packaging grid as a default index.

### 7.4 Process

**Anatomy.** Four steps, titles and body editable. Horizontal on desktop, stacked on mobile. Quiet index numbers, not decorative marks. Reduced-motion static. Same block on Home and Services.

**Tokens.** `process.*`.

**Reference.** UX Lead, Process. Avoid Last Studio’s yellow scribbles.

### 7.5 Team (including solo)

**Anatomy.** Optional portraits (3:4, `radius.none`), name, role, short bio. Hide the whole section when the collection is empty. A one-person (solo) state is first-class. No invented team size or offices.

**Tokens.** `team.*`.

**Reference.** UX Lead, About. Board: no Midjourney team photos, no fake avatars.

### 7.6 Testimonials (real-only)

**Anatomy.** Quote (Hanken italic, Lead size) + named attribution (Caption). Optional photo, only if real. **If the collection is empty, omit the whole block.** No placeholder quote, no fake avatar, no “115+ happy clients.”

**Tokens.** `testimonial.*`.

**Reference.** Board Don’t 3; Conversion and Neiden as what we will not ship. UX Lead, Testimonials.

### 7.7 CTA band

**Anatomy.** Heading, optional sub, one primary `lg`. Two variants: **inverse** (black, white type, white pill, ink text) and **brand-band** (ink fill in this system, white type, white pill, ink text). Never accent-fill on inverse. Never dark text on the brand-band fill.

**Tokens.** `cta-band.inverse.*`, `cta-band.brand.*`. Focus: `inverse.focus` / `brand-band.focus` (white).

**Reference.** Pentagram’s inverse black band as a section, not a theme. Spec, Final CTA band.

### 7.8 Enquiry form

**Anatomy.** At most four fields (name, email, service pre-fillable from a Services CTA, optional message) as Field molecules. Submit is the primary button (`lg` or `md`). Optional calendar slot, hidden if no URL. States: default, submitting, field error, form error, success. Reply-time line is editable. Sits on a light surface, never on inverse.

**Tokens.** `enquiry-form.*`.

**Reference.** UX Lead, Contact. Mobile-first.

### 7.9 Footer

**Anatomy.** On `inverse.*`. Studio name, one-line promise, nav mirror, email, legal, optional credit (**off** by default on paid licences). Hide empty contact lines. No Skala marketing on the buyer’s site.

**Tokens.** `footer.*`.

**Reference.** Spec, Footer. Pentagram / AREA 17 inverse as a section.

---

## 8. Templates and pages

Site shell: Skip link + Nav + `<main id="main">` + Footer. One primary CTA label sitewide, buyer-editable, default “Start a project.” Voice is studio “we”; a setting covers a solo consultant.

Mapped to the UX Lead page list. Section order and empty-state rules in the [build-ready spec](https://cursor.com/canvas/store-f58eb506-6e10-48fb-a7af-e0adb21f64a9/5416c7a2-a7fd-4ab8-a314-f9fe8148aa51) are binding - this table is the template-to-organism map.

| Page | Route | Nav | Organisms (in order, omit empties) |
|---|---|---|---|
| Home | `/` | Logo | Hero (result or quote lead, then H1, lede, from-price, CTAs; typographic if no image) → Selected case studies (or honest empty; do not remove the empty state) → Insights teaser (section 3; omit if no posts) → optional Proof (principles in the demo; real names only, never placeholder logos) → Services teaser (moves up when cases are empty) → Process → Studio short → FAQ short → CTA band |
| Case studies | `/case-studies` | Yes | Inner hero (`workLabel`) → Filter (if ≥4) → Work grid (cards work without images) → Empty state (designed) → CTA band. `/work` 301s here. |
| Case study | `/case-studies/[slug]` | No | Text-first: Outcome → Challenge → Approach → Results (quote sits here if present) → optional image block (omit if empty; Kindred has none) → Services used → CTA + Pager. `/work/[slug]` 301s here. |
| Services | `/services` | Yes | Inner hero → Service cards (price on or off) → Comparison table → Process → What’s not included → FAQ full → CTA (pre-selects the service) |
| About | `/about` | Yes | Inner hero → Approach → Principles → Team (or solo, or hide) → optional Tools → CTA |
| Insights | `/insights` | Only if a post exists | Inner hero → Post list. If empty: hide from the nav, do not leave a public empty blog |
| Post | `/insights/[slug]` | No | Article at `layout.measure` → quiet CTA + Pager |
| Contact | `/contact` | Yes | Inner hero (reply-time) → Calendar (if URL) → Enquiry form → Direct contact (hide empty lines) |
| Privacy, Terms, Cookies | `/privacy`, `/terms`, `/cookies` | Footer | Legal article at the measure, last-updated. Sample legal is flagged |
| 404 | - | No | Short recover: links to Home, Work, Contact, plus the primary CTA |

Demo content uses **Northway**, labelled Sample. It must never be readable as Skala client work or as Northway’s real work.

---

## 9. Do and don’t (from the references)

### Do

- Lead with a short typographic promise, then real work in the same first scroll. (Gretel, Andersen, Halston, Pentagram.)
- Set headlines large, slightly tight, regular or medium, in the 48–64px band at 1280. (Andersen, Halston, Walker, Clay’s scale - not Clay’s 3D.)
- Sit the site on Halston’s warm grey, with ink and a black accent. Photography carries personality.
- Keep section rhythm generous and even: 96, then 128 from 1024; hero top 192 from 1024. (Andersen, AREA 17, Gretel.)
- Use one primary CTA in view. (Clay, Last Studio, Andersen, Halston.)
- Treat photography as proof: full-bleed or 3:2 cards, captions, scrim or a solid panel for type on a photo.
- Keep navigation quiet, sticky, Case studies first, 68px, Last Studio's IA. (Last Studio, Clay, Halston.)
- Honour `prefers-reduced-motion` with a final pose in the first HTML.

### Don’t

- Mesh gradients, neon, glow, particle fields, blurred orbs, decorative 3D. (Conversion, Neiden, Clay’s orb.)
- Autoplay, parallax, custom cursors, mouse trails, bounce. (Koto, Alture-style trails.)
- Invented testimonials, review scores, logo walls, “115+ happy clients”, scarcity, award walls. (Conversion, Neiden, Collins, Halston’s “Mies van der Rohe Shortlist” if we cannot stand behind it.)
- Eyebrow labels above section headings. (Gretel’s “New Work:”, Stada’s “DESIGN AGENCY”, Halston’s tiny caps beside the H1.)
- A cinematic dark home as the default. Inverse is a section. (Korda, Spector, Koto.)
- A mosaic or moodboard home. (Base Design.)
- Script overlays, gradient type, scribbles, playful underlines. (Neiden, Spector, Last Studio’s yellow marks.)
- A pill on every control, or a viewport-filling wordmark. (Instrument, Walker, Last Studio’s 200px.)
- Marketplace seller chrome (bundle bars, “Made in Framer”, shop carts) on the shipped site. (Last Studio, Andersen’s sales landing, Stada’s cart.)
- Binding to raw hex, a font-family string, or a primitive token.

---

## 10. Acceptance checklist

A first build is not done until all of these are true.

- [ ] Every colour, type, space, motion and radius value comes from `tokens.css` (or `theme.css`). No raw hex, no raw `font-family` string, no Tailwind default `blue-*` / `stone-*`.
- [ ] Components bind semantic or component token names, matching this document and the build-ready spec.
- [ ] `python tokens/build.py --check` reports all required pairs passing (currently 42/42, tightest 3.29:1).
- [ ] Body is 16 / 1.6 at every breakpoint. Display is in the 48–64px band at 1280 and clamps below ~390px (36px at 320). 320px does not overflow.
- [ ] Targets are 44×44 minimum, 8px apart. Nav is 68. Primary is a pill, 44 or 52. One primary in view, same label sitewide.
- [ ] Body links are underlined at rest. Selected chips and nav current use a non-colour cue (weight 600 and/or a check or underline).
- [ ] Focus is a 2px ring, 2px offset, `:focus-visible` only, ink on light, white on inverse and brand-band. Never removed without a replacement.
- [ ] Inverse and brand-band CTAs are white pills with ink text. No accent-fill on inverse. No dark text on the brand-band fill.
- [ ] Type on a photo uses `scrim.strong` or `scrim.gradient` and has been checked; otherwise a solid inverse panel. `scrim.soft` has no type.
- [ ] `prefers-reduced-motion`: durations 0ms, final pose in the server HTML, no height/width/left animation, accordion icon `transition-none`.
- [ ] Empty CMS collections omit their blocks. No fake proof, no fake logos, no invented metrics. Sample records show the Sample badge and are on a replace-before-launch checklist.
- [ ] Insights hides from the nav when empty. Footer credit is off by default. Sample legal is flagged. No Skala marketing on the buyer’s site.
- [ ] Demo chrome uses **Northway**, labelled Sample.
- [ ] Icons are Lucide only, 24px, 2px, named.
- [ ] No eyebrows, no mesh, no neon, no autoplay, no decorative scribbles, no viewport-filling wordmark.

---

## 11. Font loading and licence

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;1,400&display=swap"
  rel="stylesheet"
/>
```

Prefer a self-hosted subset in the Code edition (unicode-range for the intended languages, `font-display: swap`). [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) is licensed under the [SIL Open Font Licence 1.1](https://openfontlicense.org/), which allows commercial use, modification, and embedding in a paid template. Include the licence file with the kit. Do not sell the font as a standalone product.

Lucide is [ISC](https://lucide.dev/license). Include the notice.

---

## 12. Open choices for Amos

The board is the style guide, so most of the visual direction is no longer a fork. Still open:

1. **Icons.** Lucide, ISC, is the recommendation. Phosphor (MIT) is a fine alternative if already preferred - then the whole set swaps, not a mix.

Already locked: the template and demo studio name, Northway; light-only v1; layout, motion, 44px targets, body 16/1.6; semantic token names; Hanken Grotesk as the single family; Halston warm grey + ink + black accent; Lucide as the written default. These do not block a first build.

---

## 13. What v2 replaces

v1 (Newsreader + Schibsted, warm paper `#f6f2ea`, umber `#5b3c23`) is archived in `v1-serif-umber/` and marked superseded in Figma. It was a coherent system, but it did not follow the reference board. Collins and Manual - the serif-on-warm-paper references - were reviewed and set aside (award walls; a text-only first screen). The board’s own type guidance is “grotesk should remain the default recommendation - it is what Gretel, Andersen, Halston, Walker and AREA 17 share.”
