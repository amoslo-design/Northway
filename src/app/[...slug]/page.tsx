import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { SiteShell } from "@/components/templates/SiteShell";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { Waymark } from "@/components/atoms/Waymark";
import { ComparisonTable } from "@/components/organisms/ComparisonTable";
import Image from "next/image";
import { Link } from "@/components/atoms/Link";
import { CaseCard } from "@/components/molecules/CaseCard";
import { PostCard } from "@/components/molecules/PostCard";
import { ServicesTeaser, Principles } from "@/components/organisms/HomeSections";
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
    title = settings.workLabel; lede = "Work with a result, not only a look.";
    content = <div className="site-container inner-sections">{projects.length ? <div className="case-grid">{projects.map((project, index) => <CaseCard key={project.slug} project={project} index={index} />)}</div> : <div className="empty-case stack"><Waymark /><Text as="h2" variant="heading-2">No {settings.workLabel.toLowerCase()} yet.</Text><Text>We will share the work here when it is ready. In the meantime, explore the engagements and how a project runs.</Text><Link href="/services">See services</Link><span data-primary-action><Button href="/contact">{settings.ctaLabel}</Button></span></div>}</div>;
  } else if (slug.length === 2 && slug[0] === "case-studies") {
    const project = projects.find(item => item.slug === slug[1]); if (!project) notFound();
    title = project.oneLineResult || project.title; lede = project.client;
    content = <div className="site-container inner-sections stack article-body"><Text variant="caption" muted>{project.sector} · {project.year}</Text><Text>Goal, agreed before kickoff: {project.goal}</Text>
      {project.problem ? <section className="body-block"><Text as="h2" variant="heading-2">Challenge</Text><Text>{project.problem}</Text></section> : null}
      {project.whatWeDid.length ? <section className="body-block"><Text as="h2" variant="heading-2">Approach</Text>{project.whatWeDid.map(item => <div key={item.label}><Text as="h3" variant="heading-3">{item.label}</Text><Text>{item.body}</Text></div>)}</section> : null}
      {project.measuredResult ? <section className="body-block"><Text as="h2" variant="heading-2">Results</Text><Text>{project.measuredResult}</Text>{project.quote && project.quoteName ? <><Text as="blockquote" variant="lead" className="named-quote">{project.quote}</Text><Text variant="caption" muted>{project.quoteName}, {project.quoteRole}</Text></> : null}</section> : null}
      {project.hero ? <Image {...project.hero} alt={project.hero.alt} className="case-page-image" /> : null}<Link href="/services">Services used: {project.relatedServices.map(slug => services.find(item => item.slug === slug)?.title).join(", ")}</Link>
    </div>;
  } else if (route === "services") {
    title = "Know the price before we talk."; lede = settings.showPrices ? "Three fixed packages. Published weeks." : "Three clear packages, with a typical project for each.";
    content = <><ServicesTeaser settings={settings} services={services} proof={projects[0]} /><section className="site-section"><div className="site-container"><ComparisonTable services={services} showPrices={settings.showPrices} /></div></section><Process steps={settings.process} /><section className="site-section"><div className="site-container editorial-split"><Text as="h2" variant="heading-2">What&apos;s not included</Text><Text>Media spend, ad account management, website design and build, and photography production are outside the package unless agreed.</Text></div></section><section className="site-section" id="faq"><div className="site-container editorial-split"><Text as="h2" variant="heading-2">Before we start.</Text><FaqAccordion items={faqs.filter(item => item.group === "services")} /></div></section></>;
  } else if (route === "insights") {
    if (!settings.showInsights || !posts.length) redirect("/");
    title = "Insights"; lede = "Notes on process, craft and running a studio.";
    content = <div className="site-container inner-sections post-grid">{posts.map(post => <PostCard key={post.slug} post={post} />)}</div>;
  } else if (slug.length === 2 && slug[0] === "insights") {
    const post = posts.find(item => item.slug === slug[1]); if (!post) notFound();
    title = post.title; lede = post.excerpt;
    content = <article className="site-container inner-sections article-body stack"><Text as="time" dateTime={post.date} variant="caption" muted>{formatDate(post.date)}</Text>{post.body.split(/\n\s*\n/).map((paragraph, index) => <Text key={index}>{paragraph}</Text>)}</article>;
  } else if (route === "about") {
    title = settings.studioHeading; lede = "Northway works with companies that want a clearer position and more of the right enquiries, at a fixed price, with a plan they can run.";
    content = <><section className="site-container inner-sections editorial-split"><Text as="h2" variant="heading-2">How we work.</Text><Text variant="lead">We run the work end to end: research, positioning, brand strategy, and marketing, remotely, on a fixed plan. Video for the intro, async for reviews.</Text></section><Principles settings={settings} />{team.length ? <section className="site-section"><div className="site-container team-grid">{team.map(member => <article key={member.slug} className="team-person stack"><span className="team-initials" aria-hidden="true">{member.initials}</span><Text as="h2" variant="heading-3">{member.name}</Text><Text variant="meta">{member.role}</Text><Text>{member.bio}</Text></article>)}</div></section> : null}</>;
  } else if (["privacy", "terms", "cookies"].includes(route)) {
    title = { privacy: "Privacy Policy", terms: "Terms", cookies: "Cookies" }[route]!;
    content = <article className="site-container inner-sections article-body stack"><Text>Before publishing, replace this notice with counsel-reviewed {title} text for your studio.</Text><Text variant="caption" muted>Last updated: 12 November 2026.</Text></article>;
  } else notFound();
  const isLegal = ["privacy", "terms", "cookies"].includes(route);
  return <SiteShell><main id="main" tabIndex={-1}><div className="site-container inner-hero stack"><Text as="h1" variant="heading-1">{title}</Text>{lede ? <Text variant="lead">{lede}</Text> : null}</div>{content}{!isLegal ? <CtaBand ctaLabel={settings.ctaLabel} sub={settings.replyTime} /> : null}</main></SiteShell>;
}
