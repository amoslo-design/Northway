# Northway — Motion language (outline)

**Proposal only.** Revised 13 November 2026, Europe/Stockholm, to the chosen Eden direction. An outline; the detailed motion spec comes later. Does not change the repo or Figma.

Motion is last, and it has to earn its place. It exists to strengthen structure we have already designed — to confirm a waymark, to settle a result, to let a case card peek — not to add spectacle, and not to imitate a SaaS product tour. If a moment is not clear in a still screenshot, motion will not save it.

This outline follows the conversion hard rules in [`CONVERSION.md`](/workspace/northway-v2/docs/CONVERSION.md) (final pose in the server HTML; no height, width or left animation; no autoplay; hover translate at most 8px, and only under `(hover: hover)` and `(pointer: fine)`). It keeps the 120 / 200 / 400 ms tokens from the previous pass. Grain does not move. Proof chips do not orbit or drift.

---

## Purpose

1. **Confirm, don’t decorate.** A hover, a focus, an accordion, a one-time entrance: each one tells the visitor that a structure they already understand is responding.
2. **Teach the devices.** The waymark’s small entrance, the peeking case card already in place, cream type settling on pine — motion is how those devices are noticed once, then trusted as still.
3. **Stay out of the way of reading.** Body text does not move. Prices do not count up. The Kindred result is readable on first paint, before any animation runs. Chips do not float.

---

## Five motion principles

### 1. The final pose is the first HTML

Every component ships in its rest state in the server markup. Entrance motion, where it is allowed, is a progressive enhancement from that pose (or a short opacity fade onto it). With JavaScript off, or with `prefers-reduced-motion: reduce`, the page is complete and still. There is no “waiting for the hero to finish.”

### 2. Small, short, and mostly opacity or colour

The vocabulary is colour, opacity, and a translate of at most 8px. The waymark may `scaleY` from a top origin. We do not animate `height`, `width`, `left`, `top`, or `font-size`. We do not use springs, and we do not overshoot past 1. We do not drift, orbit, or Ken-Burns.

### 3. Once per session, not on every block

A one-time entrance is allowed on the Briefing (result, and optionally the peeking card) and on the first waymark in view. It does not stagger down the whole page. Ledger rows, price rows, FAQs, insights and proof chips do not each perform an entrance as they scroll in.

### 4. Hover is for fine pointers only

Translate and any “lift” (including a slightly deeper card shadow) is gated on `(hover: hover) and (pointer: fine)`. On touch, rest and active states change colour and weight only. No hover-only content.

### 5. Reduced motion is a first-class mode, not a fade to less

Under `prefers-reduced-motion: reduce`, every duration token resolves to `duration.instant` (0ms). Colour and weight states may still change, instantly. Accordions snap open. The waymark is painted at full length. The result and the peeking card are already in place. This is a WCAG 2.3.3 obligation as well as a taste one.

---

## Duration and easing tokens

Existing names and values, unchanged.

| Token | Value | Use |
|---|---|---|
| `duration.instant` | **0ms** | The only duration under `prefers-reduced-motion`. Accordion open is instant in all modes (we do not animate height). |
| `duration.fast` | **120ms** | Colour, opacity and border on hover, focus-visible and pressed. Nav current. Button fill. Chip hover. |
| `duration.default` | **200ms** | Fine-pointer translate (≤8px) on cards, buttons, the peeking Folio. Focus-ring appearance. Success replacement fade on the Enquiry Sheet. Card-shadow change. |
| `duration.slow` | **400ms** | One-time Briefing entrance (opacity on the result). One-time waymark `scaleY`. Optional opacity on the peeking card, 80–120ms after the result. |
| `ease.standard` | **`cubic-bezier(0.2, 0.8, 0.2, 1)`** | The only easing. Ease-out, no overshoot. |
| `motion.translate` | **8px** | Maximum. Fine pointer only. |
| `motion.waymark-origin` | **`top center`** | For `scaleY` on the waymark. |

Reduced-motion override: `@media (prefers-reduced-motion: reduce) { --duration-fast, --duration-default, --duration-slow: var(--duration-instant); }` and `transition-property: none` on transforms.

Grain is not a motion token. It is a still texture. Under `prefers-reduced-data: reduce` (and print, and a failed asset) it is omitted, leaving solid `#1F3A2E`. See BRAND-V2, Grain.

---

## Signature moments

Tied to the six signature components and the waymark, restated for the green-band Briefing and the peeking card.

### The Waymark

On first entrance of a light-section, the pine bar may `scaleY` from 0 to 1, origin top, 400ms, once. It is already at full length in the HTML. On green bands the waymark is cream and already painted. Under reduced motion, it simply is. Hover on a ledger row may deepen the pine, 120ms.

### The Briefing

The result (Bricolage, cream on pine) may fade from opacity 0 to 1, 400ms. The peeking case card may follow at 80–120ms, opacity only, or an 8px rise from its final position — never a slide up the full band, and never a “screenshot dock” bounce. **The text and the card are in the HTML at full opacity for crawlers and for reduced motion; the fade is a class added only when motion is allowed.** No word-by-word, no character stagger, no blur-in. The white pill and the from-price do not entrance-animate; they are still from the first frame. Proof chips are still from the first frame — they do not float in, and they do not orbit.

### The Case Ledger

Rows are still on first paint. Fine-pointer hover: the waymark deepens, 120ms; a still-card may translate 8px or take `shadow.card-hover`, 200ms. No row-by-row reveal on scroll.

### The Price Tablet

The pine rule on Grow is at full length in the HTML. Optional, once: `scaleX` from a left origin, 400ms. Prices do not count up. Hover on a row is colour only.

### The Process Path

All four steps are visible in the first HTML. No sequential fill, no scroll-progress. Fine-pointer hover may deepen the waymark, 120ms.

### The Enquiry Sheet

Focus-visible: pine (or cream, on a pine ground) ring at 2px / 2px offset, 120ms. Error and success are text plus a non-colour cue. The success replacement may fade in over 200ms after the form is swapped.

### The Pine Band

No pulse, no glow, no breathing fill, no shimmer on the grain. The band is still pine on first paint. The white pill’s hover is 120ms (a slightly warmer white, or an 8px translate on fine pointers). The continuous footer does not animate separately.

---

## Reduced-motion rules

- `prefers-reduced-motion: reduce` sets every duration to 0ms and disables transforms.
- Final poses are in the server HTML: result visible, waymarks full, pine rule full, process steps all present, peeking card in place, chips still, accordion closed unless opened, Pine Band still.
- Colour-only state changes still work, instantly.
- The mobile nav overlay opens instantly, with no slide.
- Marketing previews used to sell the template must ship a reduced-motion cut. We will not sell the kit with a motion trailer that the site itself forbids.

---

## What’s banned

- Mesh, glow pulses, particle fields, blurred colour orbs, decorative 3D, gradient wipes, shimmer on grain.
- Autoplay video, looping background films, Ken Burns on stills, parallax, scroll-jacking, sticky scroll scenes.
- Custom cursors, mouse trails, magnetic buttons, cursor-following waymarks.
- Springs, bounce, overshoot past 1, elastic easing, rotation of type, 3D flips.
- Animating `height`, `width`, `left`, `top`, `font-size`, or `letter-spacing`. Accordions are instant for this reason.
- Word-by-word or character-stagger reveals on the result or any heading. Typewriter effects. Scramble text.
- Count-up metrics, “+47%” tickers, animated logo walls.
- **Orbiting, drifting, or floating proof chips or icons.** A calm row, still. This is an explicit refusal of Eden’s (and every SaaS template’s) icon cloud.
- A peeking card that bounces, docks, or loops a “screenshot carousel.”
- Motion on body text, on prices, or on legal copy.
- Staggered scroll entrances on every section, every row, or every card.
- Lottie ornaments, scribble underlines, looping icon animations.
- A motion that is required to understand a state.

If we are tempted to add one of these to “make it feel more like Eden,” the answer is a better still: a clearer result, a more decided pine band, a calmer peeking card — not a longer animation.
