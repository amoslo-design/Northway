"use client";

import NextLink from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { classes } from "@/lib/classes";
import { Icon } from "./Icon";

type SharedProps = {
  variant?: "primary" | "secondary" | "ghost" | "inverse" | "brand-band";
  size?: "md" | "lg";
  disabled?: boolean;
  loading?: boolean;
};
type ButtonProps = SharedProps & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", disabled = false, loading = false, className, children, ...rest } = props;
  const blocked = disabled || loading;
  const shared = {
    className: classes("button", `button--${variant}`, `button--${size}`, className),
    "aria-busy": loading || undefined,
    "aria-disabled": blocked || undefined,
  };
  const content = <>
    <span className={classes("button__label", loading && "button__label--loading")}>{children}</span>
    {loading ? <Icon name="loading" className="button__spinner" /> : null}
  </>;

  if ("href" in rest && rest.href !== undefined) {
    const { href, onClick, ...linkProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
    return <NextLink {...linkProps} {...shared} href={blocked ? "#" : href} tabIndex={blocked ? -1 : linkProps.tabIndex} onClick={(event) => {
      if (blocked) { event.preventDefault(); return; }
      onClick?.(event);
    }}>{content}</NextLink>;
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return <button {...buttonProps} {...shared} type={buttonProps.type || "button"} disabled={blocked}>{content}</button>;
}
