# Northway — Motion language (outline)

**Proposal only.** Revised 13 November 2026, Europe/Stockholm, to the Eden direction and then to the v3 visual rules after Codex’s v2 build. An outline; the detailed motion spec comes later. Does not change the repo or Figma.

Motion is last, and it has to earn its place. It exists to strengthen structure we have already designed — to settle a result, to let an Excerpt peek — not to add spectacle, not to confirm a waymark on every section, and not to imitate a SaaS product tour. If a moment is not clear in a still screenshot, motion will not save it.

This outline follows the conversion hard rules in [`CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md) (final pose in the server HTML; no height, width or left animation; no autoplay; hover translate at most 8px, and only under `(hover: hover)` and `(pointer: fine)`). It keeps the 120 / 200 / 400 ms tokens from the previous pass. Grain does not move. There are no proof chips to orbit or drift.

---

## Purpose

1. **Confirm, don’t decorate.** A hover, a focus, an accordion, a one-time entrance: each one tells the visitor that a structure they already understand is responding.
2. **Teach the devices, once.** The peeking Excerpt already in place, cream type settling on pine — motion is how those devices are noticed once, then trusted as still. The waymark, used rarely, does not need an entrance on every chapter.
3. **Stay out of the way of reading.** Body text does not move. Prices do not count up. The Kindred result is readable on first paint, before any animation runs. Nothing floats.

---

## Five motion principles

### 1. The final pose is the first HTML

Every component ships in its rest state in the server markup. Entrance motion, where it is allowed, is a progressive enhancement from that pose (or a short opacity fade onto it). With JavaScript off, or with `prefers-reduced-motion: reduce`, the page is complete and still. There is no “waiting for the hero to finish.”

### 2. Small, short, and mostly opacity or colour

The vocabulary is colour, opacity, and a translate of at most 8px. A reserved waymark may `scaleY` from a top origin, once. We do not animate `height`, `width`, `left`, `top`, or `font-size`. We do not use springs, and we do not overshoot past 1. We do not drift, orbit, or Ken-Burns. We do not animate shadows (there are none).

### 3. Once per session, not on every block

A one-time entrance is allowed on the Briefing (the result, and optionally the peeking Excerpt). It does not stagger down the whole page, and it does not play on every waymark (most chapters have none). Ledger rows, price rows, FAQs, insights and the proof sentence do not each perform an entrance as they scroll in.

### 4. Hover is for fine pointers only

Translate, where it is used, is gated on `(hover: hover) and (pointer: fine)`. On touch, rest and active states change colour and weight only. Elevated panels may deepen from `#E8E8E4` to `#E3E3DF` at 120ms; they do not “lift.” No hover-only content.

### 5. Reduced motion is a first-class mode, not a fade to less

Under `prefers-reduced-motion: reduce`, every duration token resolves to `duration.instant` (0ms). Colour and weight states may still change, instantly. Accordions snap open. A reserved waymark is painted at full length. The result and the peeking Excerpt are already in place. This is a WCAG 2.3.3 obligation as well as a taste one.

---

## Duration and easing tokens

Existing names and values, unchanged.

| Token | Value | Use |
|---|---|---|
| `duration.instant` | **0ms** | The only duration under `prefers-reduced-motion`. Accordion open is instant in all modes (we do not animate height). |
| `duration.fast` | **120ms** | Colour, opacity and border on hover, focus-visible and pressed. Nav current. Button fill. Elevated-fill change (`#E8E8E4` → `#E3E3DF`). |
| `duration.default` | **200ms** | Fine-pointer translate (≤8px) on the primary button and the peeking Excerpt. Focus-ring appearance. Success replacement fade on the Enquiry Sheet. |
| `duration.slow` | **400ms** | One-time Briefing entrance (opacity on the result). Optional one-time waymark `scaleY`, only if a reserved waymark is in the Briefing. Optional opacity on the peeking Excerpt, 80–120ms after the result. |
| `ease.standard` | **`cubic-bezier(0.2, 0.8, 0.2, 1)`** | The only easing. Ease-out, no overshoot. |
| `motion.translate` | **8px** | Maximum. Fine pointer only. |
| `motion.waymark-origin` | **`top center`** | For `scaleY` on a reserved waymark. |

Reduced-motion override: `@media (prefers-reduced-motion: reduce) { --duration-fast, --duration-default, --duration-slow: var(--duration-instant); }` and `transition-property: none` on transforms.

Grain is not a motion token. It is a still texture. Under `prefers-reduced-data: reduce` (and print, and a failed asset) it is omitted, leaving solid `#1F3A2E`. See BRAND-V2, Grain.

---

## Signature moments

Tied to the six signature components, restated for the green-band Briefing, the peeking Excerpt, and the reserved waymark.

### The Waymark

Used rarely (wordmark, current nav, at most one hero moment), so it does not animate on every chapter. If a reserved waymark is in the Briefing, it may `scaleY` from 0 to 1, origin top, 400ms, **once**. It is already at full length in the HTML. On green bands it is cream and already painted. Under reduced motion, it simply is. There is no hover-deepen on ledger rows, because those rows no longer have a waymark.

### The Briefing

The result (Bricolage, cream on pine) may fade from opacity 0 to 1, 400ms. The peeking Excerpt may follow at 80–120ms, opacity only, or an 8px rise from its final position — never a slide up the full band, and never a “screenshot dock” bounce. **The text and the panel are in the HTML at full opacity for crawlers and for reduced motion; the fade is a class added only when motion is allowed.** No word-by-word, no character stagger, no blur-in. The white pill, the from-price and the proof sentence do not entrance-animate; they are still from the first frame.

### The Case Ledger

Rows are still on first paint. Fine-pointer hover: colour and weight only, 120ms; a still or Excerpt may translate 8px, 200ms, or deepen its grey fill. No row-by-row reveal on scroll. No waymark to deepen.

### The Price Tablet

The pine rule on Grow is at full length in the HTML. Optional, once: `scaleX` from a left origin, 400ms. Prices do not count up. Hover on a row is colour only. The sheet does not lift.

### The Process Path

All four steps are visible in the first HTML. No sequential fill, no scroll-progress, no numbers filling in. Fine-pointer hover on Strategy’s grey panel may deepen the fill, 120ms.

### The Enquiry Sheet

Focus-visible: pine (or cream, on a pine ground) ring at 2px / 2px offset, 120ms. Error and success are text plus a non-colour cue. The success replacement may fade in over 200ms after the form is swapped. The sheet does not lift.

### The Pine Band

No pulse, no glow, no breathing fill, no shimmer on the grain. The band is still pine on first paint. The white pill’s hover is 120ms (a slightly warmer white, or an 8px translate on fine pointers). The continuous footer does not animate separately. There is no waymark entrance here — the close has no floating cream bar.

---

## Reduced-motion rules

- `prefers-reduced-motion: reduce` sets every duration to 0ms and disables transforms.
- Final poses are in the server HTML: result visible, any reserved waymark full, pine rule full, process steps all present and un-numbered, peeking Excerpt in place, proof sentence still, accordion closed unless opened, Pine Band still.
- Colour-only state changes still work, instantly.
- The mobile nav overlay opens instantly, with no slide.
- Marketing previews used to sell the template must ship a reduced-motion cut. We will not sell the kit with a motion trailer that the site itself forbids.

---

## What’s banned

- Mesh, glow pulses, particle fields, blurred colour orbs, decorative 3D, gradient wipes, shimmer on grain.
- Autoplay video, looping background films, Ken Burns on stills, parallax, scroll-jacking, sticky scroll scenes.
- Custom cursors, mouse trails, magnetic buttons, cursor-following waymarks.
- Springs, bounce, overshoot past 1, elastic easing, rotation of type, 3D flips, card-lift shadows.
- Animating `height`, `width`, `left`, `top`, `font-size`, or `letter-spacing`. Accordions are instant for this reason.
- Word-by-word or character-stagger reveals on the result or any heading. Typewriter effects. Scramble text.
- Count-up metrics, “+47%” tickers, animated logo walls, numbers filling in on a process or a ledger.
- **Orbiting, drifting, or floating chips, icons or proofs.** There are no chips. A proof sentence is still. This is an explicit refusal of Eden’s (and every SaaS template’s) icon cloud.
- A peeking Excerpt that bounces, docks, or loops a “screenshot carousel.”
- Motion on body text, on prices, or on legal copy.
- Staggered scroll entrances on every section, every row, or every card. A waymark entrance on every chapter.
- Lottie ornaments, scribble underlines, looping icon animations.
- A motion that is required to understand a state.

If we are tempted to add one of these to “make it feel more like Eden,” the answer is a better still: a clearer result, a more decided pine band, a calmer peeking Excerpt — not a longer animation.
