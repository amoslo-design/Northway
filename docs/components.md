# First components

Updated for the approved v2 direction, 13 November 2026.

## Design contract

Use the supplied [Northway design system](../design/DESIGN-SYSTEM.md) and its button and input reference sheets. Bricolage display, Hanken body, pine, light grey, white cards and restrained borders establish the visual direction. Reusable pieces have a review surface at `/components`.

Every control must work with a keyboard, have an accessible name and visible focus, and use a target of at least 44px. Loading keeps the button's width. Form errors include words and an icon, and are associated with the input. Controls remain visible in the server HTML and under reduced motion. Review at 320, 768, 1024 and 1440px.

The preview is a component catalogue: labelled specimens, section navigation, typography, palette, controls and states. The public site's Briefing, Case Ledger, Price Tablet, Process Path and Enquiry Sheet compose these pieces.

## Available pieces

| Component | Purpose |
| --- | --- |
| Text | Display, headings 1 to 3, lead, body, label, caption and uppercase meta. The `as` prop sets semantics separately from appearance. |
| Button | Primary, secondary, ghost, inverse and brand-band. Medium 44px and large 52px. Button or navigation link, with disabled and loading behaviour. |
| Link | Underlined text link, optional trailing arrow, light or inverse. |
| Icon | Typed Phosphor Regular names, decorative by default, optional accessible label. |
| IconButton | Named 44px control, optional pressed state. |
| Tag | Static metadata or interactive toggle with selected and disabled states. |
| Waymark | The shared north-cut vertical bar, using section colours. |
| Folio | A finished, image-optional case preview with client and outcome. |
| Input | Native text/email input with standard input and ref props. |
| Select | Native select with typed options. |
| Textarea | Native, vertically resizable message control. |
| SkipLink | First focusable link, revealed on focus, targets `#main`. |
| Field | Shared molecule: label, optional hint, control and error feedback. Generates and associates accessible IDs. |

Import each component directly from `src/components/atoms` or `src/components/molecules`. Page content belongs to the caller.

```tsx
<Button href="/contact" size="lg">Start a project</Button>
<Text as="h2" variant="heading-2">How a project runs.</Text>
<Field label="Email" error={emailError}>
  {props => <Input {...props} name="email" type="email" required />}
</Field>
```

Field's render function is composed inside a client component. Supply the form's validation messages through `error`. Field manages label and description associations; the form manages values and validation. Native controls are intentionally separate atoms.

Disabled and loading Button links prevent navigation and leave the tab order. Their temporary `#` destination avoids exposing the original destination through a context menu. Native buttons use `disabled`. The loading label stays in the accessibility tree while a centered spinner replaces it visually.

Static tags use a compact 32px height. Interactive tags use at least 44px, `aria-pressed`, a check icon and stronger text when selected. Their text can wrap at narrow widths.

## Preview and checks

`npm run dev` starts the preview. The loading example and sector tags are interactive. The email example checks format and shows associated feedback. It is explicitly a preview and does not submit any message.

`npm run lint`, `npm run typecheck` and `npm run build` check the app. `npm test` runs browser checks for keyboard skipping, field feedback and recovery, pressed states, loading width, disabled links, responsive overflow, axe accessibility rules and reduced motion before hydration. Tests use installed Chrome and start a local dev server when one is not running. Content-state checks cover empty teasers, hidden prices and hero fallbacks.

The React review keeps the catalogue server-rendered and client boundaries around interactions, uses stable keys and native controls, preserves supplied HTML and ARIA props, and keeps page content outside primitives. Colour, font and spacing references resolve through the generated tokens. The unused legacy SampleBadge remains available in source; public pages use the single footer disclosure.
