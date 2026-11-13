import type { Metadata } from "next";
import { SkipLink } from "@/components/atoms/SkipLink";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: { default: "Northway", template: "%s - Northway" },
  description: "Strategy and growth consultancy. A clear position, a fixed price and a plan your team can run.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><link rel="preload" href="/fonts/bricolage-grotesque-latin-600-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /><link rel="preload" href="/fonts/hanken-grotesk-latin-400-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" /></head><body><SkipLink />{children}</body></html>;
}
