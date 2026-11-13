import type { ComponentPropsWithRef } from "react";
import { classes } from "@/lib/classes";

export function Input({ className, type = "text", ...props }: ComponentPropsWithRef<"input">) {
  return <input {...props} type={type} className={classes("control", className)} />;
}
