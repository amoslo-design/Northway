import type { ComponentPropsWithRef } from "react";
import { classes } from "@/lib/classes";

export function Textarea({ className, rows = 4, ...props }: ComponentPropsWithRef<"textarea">) {
  return <textarea {...props} rows={rows} className={classes("control", "control--textarea", className)} />;
}
