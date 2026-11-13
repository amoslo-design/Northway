import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { HomeCases } from "@/components/home/HomeCases";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomePricing } from "@/components/home/HomePricing";
import type { Post, Project, Service, Settings } from "@/lib/content-types";

// Compatibility exports keep existing content consumers on the v3 compositions.
export function SelectedCases(props: { projects: Project[]; settings: Settings }) { return <HomeCases {...props} />; }
export function InsightsTeaser({ posts }: { posts: Post[] }) { return <HomeInsights posts={posts} />; }
export function ServicesTeaser({ services, settings }: { services: Service[]; settings: Settings; proof?: Project }) { return <HomePricing services={services} settings={settings} />; }
export function Principles({ settings }: { settings: Settings }) {
  if (!settings.showPrinciples || !settings.principles.length) return null;
  return <section className="site-section" aria-label="Our principles"><div className="site-container"><ul className="principles-list">{settings.principles.map(principle => <li key={principle.title}><Text as="h2" variant="heading-3">{principle.title}</Text><Text>{principle.body}</Text></li>)}</ul></div></section>;
}
export function StudioShort({ settings }: { settings: Settings }) {
  if (!settings.studioBody) return null;
  return <section className="site-section" aria-labelledby="studio-heading" id="studio"><div className="site-container editorial-split"><Text as="h2" variant="heading-1" id="studio-heading">{settings.studioHeading}</Text><div className="stack"><Text variant="lead">{settings.studioBody}</Text><Link href="/about">About the studio</Link></div></div></section>;
}
