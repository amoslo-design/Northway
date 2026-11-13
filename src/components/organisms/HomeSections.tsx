import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { Waymark } from "@/components/atoms/Waymark";
import { CaseCard } from "@/components/molecules/CaseCard";
import { PostCard } from "@/components/molecules/PostCard";
import { ServiceCard } from "@/components/molecules/ServiceCard";
import type { Post, Project, Service, Settings } from "@/lib/content-types";
import { workText } from "@/lib/content";

export function SelectedCases({ projects, settings }: { projects: Project[]; settings: Settings }) {
  if (!projects.length) return null;
  return <section className="site-section case-chapter" aria-labelledby="cases-heading" id="case-studies"><div className="site-container chapter-layout"><Waymark /><div className="chapter-content"><div className="section-head"><Text as="h2" variant="heading-2" id="cases-heading">Selected {workText(settings.workLabel)}</Text><Link href="/case-studies">See all {workText(settings.workLabel)}</Link></div><div className="case-ledger">{projects.map((project, index) => <CaseCard key={project.slug} project={project} index={index} />)}</div></div></div></section>;
}

export function InsightsTeaser({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  return <section className="site-section insights-section" aria-labelledby="insights-heading" id="insights"><div className="site-container insights-layout"><div className="insights-intro"><Waymark /><Text as="h2" variant="heading-2" id="insights-heading">Insights</Text><Text muted>Notes on the decisions behind the work.</Text><Link href="/insights">See all insights</Link></div><div className="post-list">{posts.map(post => <PostCard key={post.slug} post={post} />)}</div></div></section>;
}

export function ServicesTeaser({ services, settings, proof }: { services: Service[]; settings: Settings; proof?: Project }) {
  if (!services.length) return null;
  return <section className="site-section price-chapter" aria-labelledby="services-heading" id="price-tablet"><div className="site-container chapter-layout"><Waymark /><div className="chapter-content"><div className="section-head"><Text as="h2" variant="heading-2" id="services-heading">Know the price before we talk.</Text><Link href="/services">See all services</Link></div><div className="price-tablet">{services.map(service => <ServiceCard key={service.slug} service={service} showPrices={settings.showPrices} ctaLabel={settings.ctaLabel} />)}</div><div className="tablet-note"><Text variant="caption" muted>{settings.showPrices ? settings.taxNote : "Fixed scope. Published weeks."}</Text><Text variant="caption" muted>Two review rounds. A plan your team can run.</Text></div>{proof?.quote && proof.quoteName ? <div className="tablet-proof"><Text as="blockquote" variant="lead" className="named-quote">{proof.quote}</Text><Text variant="caption" muted>{proof.quoteName}, {proof.quoteRole}</Text></div> : null}</div></div></section>;
}

export function Principles({ settings }: { settings: Settings }) {
  if (!settings.showPrinciples || !settings.principles.length) return null;
  return <section className="site-section" aria-label="Our principles"><div className="site-container chapter-layout"><Waymark /><ul className="principles-list">{settings.principles.map(principle => <li key={principle.title}><Text as="h2" variant="heading-3">{principle.title}</Text><Text>{principle.body}</Text></li>)}</ul></div></section>;
}

export function StudioShort({ settings }: { settings: Settings }) {
  if (!settings.studioBody) return null;
  return <section className="site-section studio-chapter" aria-labelledby="studio-heading" id="studio"><div className="site-container"><div className="studio-sheet"><Waymark /><div className="studio-copy"><Text as="h2" variant="heading-1" id="studio-heading">{settings.studioHeading}</Text><Text variant="lead">{settings.studioBody}</Text><Link href="/about">About the studio</Link></div></div></div></section>;
}
