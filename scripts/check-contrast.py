"""Check the design system's documented colour pairs without optional packages."""
from pathlib import Path
import importlib.util

root = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("northway_tokens", root / "design/tokens/build.py")
tokens = importlib.util.module_from_spec(spec)
spec.loader.exec_module(tokens)
tree = tokens.load()

def rgba(path):
    if path.startswith("SCRIM_"):
        value = rgba("semantic.color.text.default")
        alpha = .64 if "STRONG" in path else .72
        return tuple(channel * alpha + 1 - alpha for channel in value[:3]) + (1,)
    value = tree
    for key in path.split("."):
        value = value[key]
    if "$value" not in value:
        value = value["default"]
    value = tokens.resolve(tree, value["$value"])
    colour = value["hex"]
    return tuple(int(colour[i:i+2], 16) / 255 for i in (1, 3, 5)) + (value.get("alpha", 1),)

def luminance(channels):
    linear = [c / 12.92 if c <= .04045 else ((c + .055) / 1.055) ** 2.4 for c in channels[:3]]
    return sum(c * w for c, w in zip(linear, (.2126, .7152, .0722)))

def ratio(fg, bg):
    if fg[3] < 1:
        fg = tuple(fg[i] * fg[3] + bg[i] * (1 - fg[3]) for i in range(3)) + (1,)
    a, b = sorted((luminance(fg), luminance(bg)))
    return (b + .05) / (a + .05)

failures = []
required = 0
for foreground, background, minimum, label, _ in tokens.PAIRS:
    if not minimum:
        continue
    required += 1
    actual = ratio(rgba(foreground), rgba(background))
    if actual < minimum:
        failures.append(f"{label}: {actual:.2f}:1, needs {minimum}:1")
cream = rgba("semantic.brand-band.text.default")
pine = rgba("semantic.brand-band.bg")
grain_worst = tuple(c * .92 + .08 for c in pine[:3]) + (1,)
assert ratio(cream, grain_worst) >= 4.5
if failures:
    raise SystemExit("\n".join(failures))
print(f"All {required} required token pairs pass. Cream on pine at 8% white grain: {ratio(cream, grain_worst):.2f}:1.")
