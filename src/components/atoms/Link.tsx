import NextLink from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { classes } from "@/lib/classes";
import { Icon } from "./Icon";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; inverse?: boolean; arrow?: boolean };

export function Link({ inverse = false, arrow = false, className, children, ...props }: LinkProps) {
  return <NextLink {...props} className={classes("link", inverse && "link--inverse", className)}>
    {children}{arrow ? <Icon name="arrow-right" /> : null}
  </NextLink>;
}
