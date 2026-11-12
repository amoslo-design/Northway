#!/usr/bin/env python3
"""Rebuild Northway generated files from tokens/tokens.json (the source of truth).

Usage:
    python build.py            # writes tokens.css and theme.css next to this file
    python build.py --check    # also print a WCAG contrast report (requires coloraide)

Do not edit the generated CSS by hand. Change tokens.json and rerun.
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
TOKENS_PATH = ROOT / "tokens.json"
CSS_PATH = ROOT / "tokens.css"
THEME_PATH = ROOT / "theme.css"

META = ("$schema", "$description", "$type", "$value", "$extensions", "$deprecated")


def load() -> dict:
    return json.loads(TOKENS_PATH.read_text())


def is_token(node) -> bool:
    return isinstance(node, dict) and "$value" in node


def walk(node, prefix=()):
    if not isinstance(node, dict):
        return
    if is_token(node):
        yield prefix, node
        return
    for k, v in node.items():
        if k.startswith("$"):
            continue
        yield from walk(v, prefix + (k,))


def resolve(tree, value, seen=None):
    """Resolve {path.to.token} aliases. Returns (resolved_value, type, origin_path)."""
    seen = seen or set()
    if isinstance(value, str) and value.startswith("{") and value.endswith("}"):
        path = value[1:-1]
        if path in seen:
            raise ValueError(f"Circular alias: {path}")
        seen.add(path)
        parts = tuple(path.split("."))
        node = tree
        for p in parts:
            if p not in node:
                raise KeyError(f"Alias target not found: {path}")
            node = node[p]
        if not is_token(node):
            # maybe they pointed at a group that has default
            if isinstance(node, dict) and "default" in node and is_token(node["default"]):
                node = node["default"]
            else:
                raise KeyError(f"Alias target is not a token: {path}")
        return resolve(tree, node["$value"], seen)
    return value


def css_name(parts: tuple[str, ...]) -> str:
    """Map a token path to a CSS custom property.
    - Drop the tier root (primitive|semantic|component) for semantic and component;
      keep a short prefix for primitives.
    - Drop a trailing or mid 'default' so color.surface.default → --color-surface.
    """
    parts = list(parts)
    if parts and parts[0] in ("semantic", "component", "primitive"):
        tier = parts.pop(0)
        if tier == "primitive":
            parts = ["p", *parts]
    # Strip a group 'default' (color.surface.default → --color-surface) but keep
    # meaningful names such as duration.default (UX Lead: --duration-default).
    if "default" in parts:
        kept = []
        for i, part in enumerate(parts):
            if part == "default":
                parent = parts[i - 1] if i else ""
                if parent in {"duration", "ease"}:
                    kept.append(part)
                # else drop
            else:
                kept.append(part)
        parts = kept
    return "--" + "-".join(parts)


def to_css_value(value) -> str:
    if isinstance(value, dict) and "colorSpace" in value:
        comps = value["components"]
        alpha = value.get("alpha", 1)
        # oklch
        if value["colorSpace"] == "oklch":
            l, c, h = comps
            if alpha is not None and alpha < 1:
                return f"oklch({l:.3f} {c:.4f} {h:.1f} / {alpha:.2f})"
            return f"oklch({l:.3f} {c:.4f} {h:.1f})"
        if value["colorSpace"] == "srgb":
            r, g, b = comps
            if alpha is not None and alpha < 1:
                return f"rgb({r*255:.0f} {g*255:.0f} {b*255:.0f} / {alpha:.2f})"
            return f"rgb({r*255:.0f} {g*255:.0f} {b*255:.0f})"
    if isinstance(value, dict) and {"offsetX", "offsetY", "blur", "spread", "color"} <= set(value):
        col = to_css_value(value["color"])
        return f"{value['offsetX']} {value['offsetY']} {value['blur']} {value['spread']} {col}"
    if isinstance(value, list):
        # cubic-bezier or font family
        if value and isinstance(value[0], (int, float)):
            return "cubic-bezier(" + ", ".join(str(x) for x in value) + ")"
        # font family
        return ", ".join(_font(x) for x in value)
    if isinstance(value, (int, float)) and not isinstance(value, bool):
        return str(value)
    if isinstance(value, str):
        return value
    if isinstance(value, bool):
        return "1" if value else "0"
    return json.dumps(value)


def _font(name: str) -> str:
    if name in ("system-ui", "sans-serif", "serif", "monospace", "ui-sans-serif", "ui-serif"):
        return name
    return f'"{name}"'


def hex_of(value) -> str | None:
    if isinstance(value, dict) and "hex" in value:
        hx = value["hex"]
        a = value.get("alpha", 1)
        if a is not None and a < 1:
            # 8-digit hex
            return hx + f"{int(round(a*255)):02X}"
        return hx
    return None


def collect(tree):
    """Return list of (css_name, css_value, comment, modes, type, path)."""
    rows = []
    for parts, node in walk(tree):
        if parts[0] not in ("primitive", "semantic", "component"):
            continue
        raw = node["$value"]
        try:
            resolved = resolve(tree, raw)
        except (KeyError, ValueError) as e:
            print(f"warn: {'.'.join(parts)}: {e}", file=sys.stderr)
            continue
        name = css_name(parts)
        val = to_css_value(resolved)
        hx = hex_of(resolved)
        desc = node.get("$description", "")
        comment = hx or ""
        modes = (node.get("$extensions") or {}).get("northway.modes")
        rows.append({
            "name": name,
            "value": val,
            "hex": hx,
            "modes": modes,
            "type": node.get("$type"),
            "path": ".".join(parts),
            "desc": desc,
            "resolved": resolved,
        })
    return rows


def emit_css(rows, tree) -> str:
    lines = []
    lines.append("/*")
    lines.append(" * Northway — generated design tokens.")
    lines.append(" * DO NOT EDIT. Source: tokens/tokens.json. Rebuild: python tokens/build.py")
    lines.append(" * Light theme only. Components bind these names, never raw hex, never a font-family string.")
    lines.append(" * Template and demo studio: Northway (labelled Sample).")
    lines.append(" */")
    lines.append("")
    lines.append(":root {")

    def group(title):
        lines.append(f"  /* --- {title} --- */")

    seen = {}
    for r in rows:
        cmt = f" /* {r['hex']} */" if r["hex"] else ""
        if r["name"] in seen:
            if seen[r["name"]] != r["value"]:
                lines.append(f"  /* conflict: {r['name']} already {seen[r['name']]}, skipping {r['value']} from {r['path']} */")
            continue
        seen[r["name"]] = r["value"]
        lines.append(f"  {r['name']}: {r['value']};{cmt}")

    lines.append("")
    lines.append("  /* Aliases that drop '.default' already have the short name.")
    lines.append("     Explicit short aliases for documentation compatibility: */")
    # already handled by stripping default
    lines.append("}")
    lines.append("")

    # Reduced motion
    lines.append("@media (prefers-reduced-motion: reduce) {")
    lines.append("  :root {")
    lines.append("    --duration-fast: 0ms;")
    lines.append("    --duration-default: 0ms;")
    lines.append("    --duration-slow: 0ms;")
    lines.append("    --p-motion-duration-fast: 0ms;")
    lines.append("    --p-motion-duration-default: 0ms;")
    lines.append("    --p-motion-duration-slow: 0ms;")
    lines.append("  }")
    lines.append("}")
    lines.append("")

    # Breakpoint modes — only for tokens that declare them
    # mobile default is already in some $values as desktop; modes override in media queries.
    # Convention: $value is desktop. Mobile is the default below 768 if we invert...
    # Better: $value is the desktop default in :root (we design at 1024).
    # Then override at max-width 767 (mobile) and min-width 768 (tablet) and min-width 1280 (wide).
    mobile_rules = []
    tablet_rules = []
    wide_rules = []
    for r in rows:
        m = r["modes"]
        if not m:
            continue
        if "mobile" in m and str(m["mobile"]) not in (r["value"], str(m.get("desktop"))):
            mobile_rules.append((r["name"], to_css_value(m["mobile"]) if not isinstance(m["mobile"], str) else m["mobile"]))
        # always write mobile if present and different from desktop value
        if "mobile" in m:
            mv = m["mobile"]
            mv = mv if isinstance(mv, str) else str(mv)
            if mv != r["value"]:
                mobile_rules.append((r["name"], mv))
        if "tablet" in m:
            tv = m["tablet"]
            tv = tv if isinstance(tv, str) else str(tv)
            if tv != r["value"]:
                tablet_rules.append((r["name"], tv))
        if "wide" in m:
            wv = m["wide"]
            wv = wv if isinstance(wv, str) else str(wv)
            if wv != r["value"]:
                wide_rules.append((r["name"], wv))

    # dedupe preserving order
    def dedupe(seq):
        seen = set()
        out = []
        for x in seq:
            if x[0] in seen:
                continue
            seen.add(x[0])
            out.append(x)
        return out

    mobile_rules = dedupe(mobile_rules)
    tablet_rules = dedupe(tablet_rules)
    wide_rules = dedupe(wide_rules)

    lines.append("/* $value in :root is the desktop (1024) value. Overrides below. Wide is type only. */")
    lines.append("@media (max-width: 767px) {")
    lines.append("  :root {")
    for n, v in mobile_rules:
        lines.append(f"    {n}: {v};")
    lines.append("    --grid-columns: 4;")
    lines.append("    --grid-work-columns: 1;")
    lines.append("    --layout-gutter: 16px;")
    lines.append("  }")
    lines.append("}")
    lines.append("@media (min-width: 768px) and (max-width: 1023px) {")
    lines.append("  :root {")
    for n, v in tablet_rules:
        lines.append(f"    {n}: {v};")
    lines.append("    --grid-columns: 12;")
    lines.append("    --grid-work-columns: 2;")
    lines.append("    --layout-gutter: 24px;")
    lines.append("  }")
    lines.append("}")
    lines.append("@media (min-width: 1280px) {")
    lines.append("  :root {")
    for n, v in wide_rules:
        lines.append(f"    {n}: {v};")
    lines.append("  }")
    lines.append("}")
    lines.append("")
    lines.append("/* Focus-visible helper. Never remove the ring without a replacement. */")
    lines.append(":focus-visible {")
    lines.append("  outline: var(--focus-width) solid var(--color-focus);")
    lines.append("  outline-offset: var(--focus-offset);")
    lines.append("}")
    lines.append(".inverse :focus-visible,")
    lines.append(".brand-band :focus-visible {")
    lines.append("  outline-color: var(--color-focus-inverse);")
    lines.append("}")
    lines.append("")
    return "\n".join(lines) + "\n"


def emit_theme(rows) -> str:
    """Tailwind v4 @theme. Public semantic and component names only (no --p- primitives)."""
    lines = []
    lines.append("/*")
    lines.append(" * Northway — Tailwind v4 @theme.")
    lines.append(" * DO NOT EDIT. Source: tokens/tokens.json. Rebuild: python tokens/build.py")
    lines.append(" */")
    lines.append("")
    lines.append('@import "tailwindcss";')
    lines.append("")
    lines.append("@theme {")
    seen = set()
    for r in rows:
        if r["name"].startswith("--p-"):
            continue
        if r["type"] == "string" and r["value"] in ("underline", "visible", "italic", "3 / 2", "3 / 4"):
            continue
        if r["name"] in seen:
            continue
        seen.add(r["name"])
        lines.append(f"  {r['name']}: {r['value']};")
    lines.append("}")
    lines.append("")
    lines.append("@media (prefers-reduced-motion: reduce) {")
    lines.append("  @theme {")
    lines.append("    --duration-fast: 0ms;")
    lines.append("    --duration-default: 0ms;")
    lines.append("    --duration-slow: 0ms;")
    lines.append("  }")
    lines.append("}")
    lines.append("")
    return "\n".join(lines) + "\n"


# --------------- contrast check ---------------
PAIRS = [
    # (fg_path_or_hex, bg_path_or_hex, need, label, notes)
    ("semantic.color.text.default", "semantic.color.bg.default", 4.5, "color.text on color.bg", "body"),
    ("semantic.color.text.default", "semantic.color.surface.default", 4.5, "color.text on color.surface", ""),
    ("semantic.color.text.default", "semantic.color.surface.raised", 4.5, "color.text on color.surface.raised", ""),
    ("semantic.color.text.default", "semantic.color.surface.hover", 4.5, "color.text on color.surface.hover", ""),
    ("semantic.color.text.default", "semantic.color.surface.pressed", 4.5, "color.text on color.surface.pressed", ""),
    ("semantic.color.text.muted", "semantic.color.bg.default", 4.5, "color.text.muted on color.bg", "secondary"),
    ("semantic.color.text.muted", "semantic.color.surface.default", 4.5, "color.text.muted on color.surface", ""),
    ("semantic.color.text.muted", "semantic.color.surface.raised", 4.5, "color.text.muted on color.surface.raised", ""),
    ("semantic.color.accent.default", "semantic.color.bg.default", 4.5, "color.accent on color.bg (link)", "underlined at rest — same as ink"),
    ("semantic.color.accent.contrast", "semantic.color.accent.default", 4.5, "color.accent.contrast on color.accent", "primary button"),
    ("semantic.color.accent.contrast", "semantic.color.accent.hover", 4.5, "color.accent.contrast on color.accent.hover", ""),
    ("semantic.color.border.input", "semantic.color.bg.default", 3.0, "color.border.input on color.bg", "tightest UI"),
    ("semantic.color.border.input", "semantic.color.surface.default", 3.0, "color.border.input on color.surface", ""),
    ("semantic.color.border.input", "semantic.color.surface.raised", 3.0, "color.border.input on color.surface.raised", ""),
    ("semantic.color.focus.default", "semantic.color.bg.default", 3.0, "color.focus on color.bg", ""),
    ("semantic.color.focus.inverse", "semantic.inverse.bg", 3.0, "color.focus.inverse on inverse.bg", ""),
    ("semantic.inverse.text.default", "semantic.inverse.bg", 4.5, "inverse.text on inverse.bg", ""),
    ("semantic.inverse.text.secondary", "semantic.inverse.bg", 4.5, "inverse.text.secondary on inverse.bg", ""),
    ("semantic.inverse.cta.text", "semantic.inverse.cta.bg", 4.5, "inverse.cta.text on inverse.cta.bg", "white pill"),
    ("semantic.inverse.cta.text", "semantic.inverse.cta.hover", 4.5, "inverse.cta.text on inverse.cta.hover", ""),
    ("semantic.inverse.cta.text", "semantic.inverse.cta.pressed", 4.5, "inverse.cta.text on inverse.cta.pressed", ""),
    ("semantic.brand-band.text.default", "semantic.brand-band.bg", 4.5, "brand-band.text on brand-band.bg", ""),
    ("semantic.brand-band.text.secondary", "semantic.brand-band.bg", 4.5, "brand-band.text.secondary on brand-band.bg", ""),
    ("semantic.brand-band.cta.text", "semantic.brand-band.cta.bg", 4.5, "brand-band.cta.text on brand-band.cta.bg", ""),
    ("semantic.color.danger.text", "semantic.color.danger.muted", 4.5, "color.danger.text on color.danger.muted", ""),
    ("semantic.color.danger.text", "semantic.color.bg.default", 4.5, "color.danger.text on color.bg", ""),
    ("semantic.color.danger.border", "semantic.color.bg.default", 3.0, "color.danger.border on color.bg", ""),
    ("semantic.color.danger.border", "semantic.color.danger.muted", 3.0, "color.danger.border on color.danger.muted", ""),
    ("semantic.color.success.text", "semantic.color.success.muted", 4.5, "color.success.text on color.success.muted", ""),
    ("semantic.color.success.text", "semantic.color.bg.default", 4.5, "color.success.text on color.bg", ""),
    ("semantic.color.success.border", "semantic.color.bg.default", 3.0, "color.success.border on color.bg", ""),
    ("semantic.color.success.border", "semantic.color.success.muted", 3.0, "color.success.border on color.success.muted", ""),
    ("semantic.color.warning.text", "semantic.color.warning.muted", 4.5, "color.warning.text on color.warning.muted", ""),
    ("semantic.color.warning.default", "semantic.color.bg.default", 3.0, "color.warning (icon) on color.bg", ""),
    ("semantic.tag.sample.text", "semantic.tag.sample.bg", 4.5, "tag.sample.text on tag.sample.bg", ""),
    ("semantic.tag.text", "semantic.tag.bg", 4.5, "tag.text on tag.bg", ""),
    ("semantic.tag.selected.text", "semantic.tag.selected.bg", 4.5, "tag.selected.text on tag.selected.bg", ""),
    ("semantic.selected.text", "semantic.selected.bg", 4.5, "selected.text on selected.bg", ""),
    ("semantic.color.text.disabled", "semantic.color.bg.default", 0, "color.text.disabled on color.bg", "exempt, reported"),
    ("semantic.color.border.hairline", "semantic.color.bg.default", 0, "color.border.hairline on color.bg", "decorative, reported"),
    ("semantic.scrim.text", "SCRIM_STRONG_OVER_WHITE", 4.5, "scrim.text over scrim.strong on a white photo", "composited"),
    ("semantic.scrim.text", "SCRIM_GRADIENT_OVER_WHITE", 4.5, "scrim.text over scrim.gradient on a white photo", "composited"),
    ("semantic.color.accent.inverse", "semantic.inverse.bg", 4.5, "color.accent.inverse on inverse.bg", "optional"),
    ("semantic.color.text.default", "semantic.color.bg.disabled", 4.5, "color.text on color.bg.disabled", ""),
]


def resolved_color(tree, path):
    from coloraide import Color

    if path == "SCRIM_STRONG_OVER_WHITE":
        ink = Color("#1A1A1A")
        a = 0.64
        # blend over white
        fr, fg, fb = ink.convert("srgb").coords()
        return Color("srgb", [fr * a + 1 * (1 - a), fg * a + 1 * (1 - a), fb * a + 1 * (1 - a)])
    if path == "SCRIM_GRADIENT_OVER_WHITE":
        ink = Color("#1A1A1A")
        a = 0.72
        fr, fg, fb = ink.convert("srgb").coords()
        return Color("srgb", [fr * a + 1 * (1 - a), fg * a + 1 * (1 - a), fb * a + 1 * (1 - a)])

    parts = path.split(".")
    node = tree
    for p in parts:
        node = node[p]
    if not is_token(node) and isinstance(node, dict) and "default" in node:
        node = node["default"]
    val = resolve(tree, node["$value"])
    if isinstance(val, dict) and "hex" in val:
        col = Color(val["hex"])
        if val.get("alpha", 1) < 1:
            col["alpha"] = val["alpha"]
        return col
    if isinstance(val, str) and val.startswith("#"):
        return Color(val)
    raise ValueError(f"Cannot make a color from {path}: {val}")


def check(tree) -> int:
    from coloraide import Color

    failed = 0
    print(f"{'Pair':<52} {'Ratio':>7} {'Need':>5}  Result  Notes")
    print("-" * 100)
    results = []
    for fg_p, bg_p, need, label, notes in PAIRS:
        fg = resolved_color(tree, fg_p)
        bg = resolved_color(tree, bg_p)
        # If fg has alpha, this is unusual for text; skip
        ratio = round(fg.contrast(bg, method="wcag21"), 2)
        ok = True if need == 0 else ratio >= need
        status = "Pass" if ok else "FAIL"
        if need == 0:
            status = "Reported"
        if not ok:
            failed += 1
        results.append((ratio, need, ok, label))
        print(f"{label:<52} {ratio:6.2f}:1 {need:5}  {status:<8}  {notes}")
    passing = sum(1 for _, need, ok, _ in results if need and ok)
    required = sum(1 for _, need, _, _ in results if need)
    print()
    print(f"Required pairs: {passing}/{required} pass. Failed: {failed}.")
    tightest = sorted((r for r, need, ok, l in results if need and ok), key=lambda x: x)
    if tightest:
        print(f"Tightest passing required: {tightest[0]:.2f}:1")
    return failed


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--check", action="store_true", help="Run WCAG contrast checks (coloraide).")
    args = ap.parse_args()

    tree = load()
    rows = collect(tree)
    css = emit_css(rows, tree)
    theme = emit_theme(rows)
    CSS_PATH.write_text(css)
    THEME_PATH.write_text(theme)
    print(f"Wrote {CSS_PATH.relative_to(ROOT.parent)} ({len(css)} bytes, {len(rows)} tokens)")
    print(f"Wrote {THEME_PATH.relative_to(ROOT.parent)} ({len(theme)} bytes)")

    if args.check:
        try:
            rc = check(tree)
        except ImportError:
            print("coloraide is not installed. Skip --check, or pip install coloraide.", file=sys.stderr)
            rc = 2
        sys.exit(rc)


if __name__ == "__main__":
    main()
