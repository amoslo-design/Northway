# Brief for Codex: rebuild Northway to v3

The first two builds (see `codex-v1-screenshot.png` and `codex-v2-screenshot.png`) looked like a generic AI template and are not sellable. Rebuild the visual layer on a **new branch**, keeping existing routes, content and form logic. Do not overwrite the previous work on the default branch; the older builds stay in git history.

Read in this order:

1. `REBUILD-BRIEF-V3.md`: the job for this pass (branch, what to keep, the quality gate). Start here.
2. `DECISIONS-V2.md`: what Amos approved. This wins over anything older, including any Refero measurement that conflicts with a lock.
3. `design/refero/SYNTHESIS.md`: the reference lock and the section-by-section map to Refero images and measurements.
4. `design/WEBSITE-QUALITY-BAR.md`: design rules, AI-tells to ban, and the self-critique gate (full-page screenshots at 1440 and 390 before handoff).
5. `design/PRINCIPLES.md`: principles and hard rules, including the table of AI-template tells to avoid.
6. `design/BRAND-V2.md`: palette, tokens, type scale, assets and the signature components.
7. `docs/CONVERSION.md`: testable MUST / MUST NOT conversion rules.
8. `design/CRITIQUE.md` and `docs/UX-CRITIQUE.md`: what was wrong in v1.
9. `design/CRITIQUE-V2.md` and `docs/UX-CRITIQUE-V2.md`: why the v2 build still looked AI-generated, with the ranked fixes for v3. These override the v1 critiques where they conflict.
10. `design/MOTION.md`: motion outline (do last).
11. `design/refero/README.md` and the full style guides and keyframes in `design/refero/`, when you need a source measurement. `design/REFERENCES.md` is a shorter earlier pass; SYNTHESIS wins if they disagree.

Signature components to build: the Briefing (hero), the Case Ledger, the Price Tablet, the Process Path, the Enquiry Sheet and the Pine Band (continuous with the footer).

Keep the existing stack, routes and content model from the v1 docs (AGENTS.md, docs/spec.md) unless v2 or v3 says otherwise. Update the design tokens to v3 and generate the theme from them. Check every rule in CONVERSION.md, PRINCIPLES.md and the quality-bar gate before calling it done.
