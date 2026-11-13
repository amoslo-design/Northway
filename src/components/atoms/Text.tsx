import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { classes } from "@/lib/classes";

type TextVariant = "short-display" | "excerpt" | "proof" | "from-price" | "display" | "heading-1" | "heading-2" | "heading-3" | "lead" | "body" | "label" | "caption" | "meta";
type TextProps<T extends ElementType> = {
  as?: T;
  variant?: TextVariant;
  muted?: boolean;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function Text<T extends ElementType = "p">({
  as, variant = "body", muted = false, className, children, ...props
}: TextProps<T>) {
  const Component = as || "p";
  return <Component className={classes("text", `text--${variant}`, muted && "text--muted", className)} {...props}>{children}</Component>;
}
