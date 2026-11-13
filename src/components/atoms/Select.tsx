import type { ComponentPropsWithRef } from "react";
import { classes } from "@/lib/classes";

type SelectProps = ComponentPropsWithRef<"select"> & { options: readonly { value: string; label: string }[] };

export function Select({ options, className, ...props }: SelectProps) {
  return <select {...props} className={classes("control", "control--select", className)}>
    {options.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
  </select>;
}
