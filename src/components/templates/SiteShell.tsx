import type { ReactNode } from "react";
import { getContent } from "@/lib/content";
import { Nav } from "@/components/organisms/Nav";
import { Footer } from "@/components/organisms/Footer";

export async function SiteShell({ children }: { children: ReactNode }) {
  const { settings, posts } = await getContent();
  const links = [
    { label: settings.workLabel, href: "/case-studies" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    ...(settings.showInsights && posts.length ? [{ label: "Insights", href: "/insights" }] : []),
    { label: "Contact", href: "/contact" },
  ];
  return <><Nav studioName={settings.studioName} ctaLabel={settings.ctaLabel} links={links} />{children}<Footer settings={settings} links={links} /></>;
}
