import { classes } from "@/lib/classes";

export function Waymark({ size = "section" }: { size?: "section" | "small" | "wordmark" }) {
  return <span aria-hidden="true" className={classes("waymark", `waymark--${size}`)} />;
}
