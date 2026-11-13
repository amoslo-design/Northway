import type { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { classes } from "@/lib/classes";
import { Icon } from "./Icon";

type TagProps = { label: string } & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { interactive: true; selected?: boolean })
  | (HTMLAttributes<HTMLSpanElement> & { interactive?: false; selected?: never })
);

export function Tag({ label, interactive = false, selected, className, ...props }: TagProps) {
  const style = classes("tag", interactive && "tag--interactive", selected && "tag--selected", className);
  if (interactive) {
    return <button {...props as ButtonHTMLAttributes<HTMLButtonElement>} type="button" aria-pressed={selected || false} className={style}>
      {selected ? <Icon name="check" /> : null}{label}
    </button>;
  }
  return <span {...props as HTMLAttributes<HTMLSpanElement>} className={style}>{label}</span>;
}
