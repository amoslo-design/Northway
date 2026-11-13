import type { ButtonHTMLAttributes } from "react";
import { classes } from "@/lib/classes";
import { Icon, type IconName } from "./Icon";

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "aria-label"> & { label: string; icon: IconName; pressed?: boolean };

export function IconButton({ label, icon, pressed, className, type = "button", ...props }: IconButtonProps) {
  return <button {...props} type={type} aria-label={label} aria-pressed={pressed} className={classes("icon-button", className)}><Icon name={icon} /></button>;
}
