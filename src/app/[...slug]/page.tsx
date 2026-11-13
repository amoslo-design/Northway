import type { Metadata } from "next";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";
import { SiteShell } from "@/components/templates/SiteShell";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/components/atoms/Link";
import { ComparisonTable } from "@/components/organisms/ComparisonTable";
import { CaseCard } from "@/components/molecules/CaseCard";
import { PostCard } from "@/components/molecules/PostCard";
import { Principles } from "@/components/organisms/HomeSections";
import { HomePricing } from "@/components/home/HomePricing";
import { FaqAccordion } from "@/components/organisms/FaqAccordion";
import { Process } from "@/components/organisms/Process";
import { CtaBand } from "@/components/organisms/CtaBand";
import { getContent, formatDate } from "@/lib/content";

type Props = { params: Promise<{ slug: string[] }> };
export async function generateStaticParams() {
  const { projects, posts } = await getContent();
  return [...["case-studies", "services", "about", "insights", "privacy", "terms", "cookies"].map(slug => ({ slug: [slug] })), ...projects.map(item => ({ slug: ["case-studies", item.slug] })), ...posts.map(item => ({ slug: ["insights", item.slug] }))];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { settings, projects, posts } = await getContent();
  const record = slug[0] === "case-studies" ? projects.find(item => item.slug === slug[1]) : posts.find(item => item.slug === slug[1]);
  return { title: record?.title || (slug[0] === "case-studies" ? settings.workLabel : slug[0].charAt(0).toUpperCase() + slug[0].slice(1)) };
}
export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const { settings, projects, posts, services, faqs, team } = await getContent();
  const route = slug.join("/");
  let title = "";
  let lede = "";
  let content;
  if (route === "case-studies") {
    title = settings.workLabel;
    lede = "A clearer offer. A next step people can take.";
    content = <div className="site-container inner-sections"><div className="editorial-index" id="all-cases">{projects.length ? projects.map((project, index) => <CaseCard key={project.slug} project={project} index={index} />) : <div className="empty-case stack"><Text as="h2" variant="heading-2">The next case belongs here.</Text><Text>Explore the engagements and how a project runs while we prepare the work.</Text><Link href="/services">See services</Link></div>}</div>{projects.length ? <Link href="#all-cases">See all {settings.workLabel.toLowerCase()}</Link> : null}</div>;
  } else if (slug.length === 2 && slug[0] === "case-studies") {
    const project = projects.find(item => item.slug === slug[1]);
    if (!project) notFound();
    const next = projects.length > 1 ? projects[(projects.indexOf(project) + 1) % projects.length] : undefined;
    title = project.oneLineResult || project.title;
    lede = `${project.client}. ${project.sector.charAt(0).toUpperCase() + project.sector.slice(1)}, ${project.year}.`;
    content = <div className="site-container case-story">
      <div className="case-goal"><Text variant="label">The goal</Text><Text variant="lead">{project.goal}</Text></div>
      {project.problem ? <section className="case-challenge"><Text as="h2" variant="heading-2">The challenge.</Text><Text>{project.problem}</Text></section> : null}
      {project.whatWeDid.length ? <section className="case-approach"><Text as="h2" variant="heading-1">The approach.</Text><div className="approach-ledger">{project.whatWeDid.map(item => <div key={item.label}><Text as="h3" variant="heading-3">{item.label}</Text><Text>{item.body}</Text></div>)}</div></section> : null}
      {project.measuredResult ? <section className="case-result"><Text as="h2" variant="heading-3">What changed</Text><Text variant="heading-2">{project.measuredResult}</Text></section> : null}
      {project.hero ? <Image {...project.hero} alt={project.hero.alt} className="case-page-image" sizes="(max-width: 767px) 100vw, 1280px" /> : null}
      <div className="case-exit"><Link href="/services">Services used: {project.relatedServices.map(value => services.find(item => item.slug === value)?.title).filter(Boolean).join(", ")}</Link>{next ? <Link href={`/case-studies/${next.slug}`}>Next case: {next.client}</Link> : null}</div>
    </div>;
  } else if (route === "services") {
    title = "Know the price before we talk.";
    lede = settings.showPrices ? "Three fixed packages. Published weeks." : "Three clear packages, with a typical project for each.";
    content = <><HomePricing settings={settings} services={services} standalone /><section className="site-section"><div className="site-container"><ComparisonTable services={services} showPrices={settings.showPrices} /></div></section><Process steps={settings.process} /><section className="site-section"><div className="site-container editorial-split"><Text as="h2" variant="heading-2">What’s outside the scope.</Text><Text>Media spend, ad account management, website design and build, and photography production are outside the package unless agreed.</Text></div></section><section className="site-section services-faq" id="faq"><div className="site-container"><Text as="h2" variant="heading-2">Before we start.</Text><FaqAccordion items={faqs.filter(item => item.group === "services")} /></div></section></>;
  } else if (route === "insights") {
    if (!settings.showInsights || !posts.length) redirect("/");
    title = "Insights"; lede = "Notes on process, craft and running a studio.";
    content = <div className="site-container inner-sections"><div className="editorial-index" id="all-insights">{posts.map((post, index) => <PostCard key={post.slug} post={post} featured={index === 0} />)}</div><Link href="#all-insights">See all insights</Link></div>;
  } else if (slug.length === 2 && slug[0] === "insights") {
    const post = posts.find(item => item.slug === slug[1]);
    if (!settings.showInsights || !post) notFound();
    const next = posts.length > 1 ? posts[(posts.indexOf(post) + 1) % posts.length] : undefined;
    title = post.title; lede = post.excerpt;
    content = <article className="site-container inner-sections"><div className="article-body stack"><Text as="time" dateTime={post.date} variant="caption" muted>{formatDate(post.date)}</Text>{post.body.split(/\n\s*\n/).map((paragraph, index) => <Text key={index}>{paragraph}</Text>)}{next ? <Link href={`/insights/${next.slug}`}>Next: {next.title}</Link> : <Link href="/insights">All insights</Link>}</div></article>;
  } else if (route === "about") {
    title = settings.studioHeading;
    lede = "Northway works with companies that want a clearer position and more of the right enquiries, at a fixed price, with a plan they can run.";
    content = <><section className="site-container inner-sections editorial-split"><Text as="h2" variant="heading-2">How we work.</Text><div className="stack"><Text variant="lead">{settings.studioBody}</Text><Text>We work remotely, on a fixed plan. Video for the intro, async for reviews.</Text></div></section><Principles settings={settings} />{team.length ? <section className="site-section"><div className="site-container team-layout"><Text as="h2" variant="heading-1">The people doing the work.</Text><div className="team-list">{team.map(member => <article key={member.slug} className="team-person stack"><Text as="h3" variant="heading-3">{member.name}</Text><Text variant="caption" muted>{member.role}</Text><Text>{member.bio}</Text></article>)}</div></div></section> : null}</>;
  } else if (["privacy", "terms", "cookies"].includes(route)) {
    title = { privacy: "Privacy Policy", terms: "Terms", cookies: "Cookies" }[route]!;
    content = <article className="site-container inner-sections"><div className="article-body stack"><Text>Before publishing, replace this notice with counsel-reviewed {title} text for your studio.</Text><Text variant="caption" muted>Last updated: 13 November 2026.</Text></div></article>;
  } else notFound();
  const isLegal = ["privacy", "terms", "cookies"].includes(route);
  return <SiteShell><main id="main" tabIndex={-1}><div className={`site-container inner-hero stack${slug.length === 2 ? " inner-hero--story" : ""}`}><Text as="h1" variant="heading-1">{title}</Text>{lede ? <Text variant="lead">{lede}</Text> : null}</div>{content}{!isLegal ? <CtaBand ctaLabel={settings.closingCtaLabel} sub={settings.replyTime} quiet={route === "services"} /> : null}</main></SiteShell>;
}
