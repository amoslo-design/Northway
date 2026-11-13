import { ArrowDown, ArrowRight, Check, CaretDown, CaretLeft, CaretRight, WarningCircle, CheckCircle, CircleNotch, List, Minus, Plus, X } from "@phosphor-icons/react/ssr";
import type { SVGProps } from "react";
import { classes } from "@/lib/classes";

const icons = { "arrow-down": ArrowDown, "arrow-right": ArrowRight, check: Check, "chevron-down": CaretDown, prev: CaretLeft, next: CaretRight, alert: WarningCircle, success: CheckCircle, loading: CircleNotch, menu: List, minus: Minus, plus: Plus, close: X };
export type IconName = keyof typeof icons;
type IconProps = Omit<SVGProps<SVGSVGElement>, "name" | "children"> & { name: IconName; label?: string };

export function Icon({ name, label, className, ...props }: IconProps) {
  const Glyph = icons[name];
  return <Glyph className={classes("icon", className)} weight="regular" aria-hidden={label ? undefined : true} aria-label={label} role={label ? "img" : undefined} focusable="false" {...props} />;
}
