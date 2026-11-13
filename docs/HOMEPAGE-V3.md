# Homepage v3 structure review

Source: `origin/northway-v2-direction` commit `13bb871`, including the v3 decisions and both critiques of the v2 screenshot.

## Scope

This pass is Home only. Other routes retain their current composition. New Home composition and surface aliases are scoped to `.home-page`, so the homepage can be reviewed before its patterns are applied elsewhere. Existing atoms, content records, fonts and pine bands remain the foundation.

## Design contract

One white sheet, with grey fill reserved for the quote Excerpt, the rate sheet and Strategy. No shadows, case indexes, process numbers, monograms, proof chips or repeated heading/link/waymark chrome. The Kindred result and the Amira quote each appear once. Three primary placements: Briefing, Grow and the closing band. Still content in server HTML, no entrance effects.

## Ordered work

- Briefing: keep the result and single ask; replace the two chips with one sentence and the monogram with the named quote. Review its first viewport and transition to white before continuing.
- Cases and Insights: establish a larger editorial case and quieter work, followed by a different, featured article composition. Caption metadata, links after content, no row chrome.
- Pricing and process: retain the rate sheet, make other package links specific, then use a vertical reading path with an expanded Strategy panel. Remove the repeated quote and separate Strategy card.
- Studio, FAQ and close: a left-weighted audience statement, a narrow accordion, then the approved centred pine close without a floating waymark.

## Section rhythm

| Section | Opening | Composition |
| --- | --- | --- |
| Briefing | One factual attribution, result H1 | Centred pine, quote Excerpt peeking below the ask |
| Cases | Heading alone | Larger featured text, quieter offset entries, no panels or rules |
| Insights | Heading and short dek | Featured article, two quieter articles, no date column |
| Price Tablet | Heading alone | One grey rate sheet; three packages, Grow primary |
| Process Path | Heading and short dek | A named reading path; expanded Strategy, one spine |
| Studio short | Audience statement, no separate heading | Left-weighted text on white |
| FAQ | Heading alone | Narrow accordion; more-questions link after answers |
| Pine Band | Heading, reply time, ask | Centred pine continuous with existing footer |

## Review gate

Review desktop and mobile structure, verify first-view price and one-primary behaviour, keyboard navigation, content fallbacks and responsive reflow. Build, lint and TypeScript must pass. Stop at the Home review; do not propagate the structure to other pages in this pass.
