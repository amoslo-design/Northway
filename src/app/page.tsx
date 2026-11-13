import type { Metadata } from "next";
import { SiteShell } from "@/components/templates/SiteShell";
import { Hero } from "@/components/organisms/Hero";
import { HomeCases } from "@/components/home/HomeCases";
import { HomeInsights } from "@/components/home/HomeInsights";
import { HomePricing } from "@/components/home/HomePricing";
import { HomeProcess } from "@/components/home/HomeProcess";
import { HomeClose, HomeFaq, HomeStudio } from "@/components/home/HomeClosing";
import { getContent } from "@/lib/content";
import homeCopy from "../../content/home.json";

export const metadata: Metadata = {
  title: { absolute: "Northway - Strategy your team can put to work" },
  description: "Positioning, brand strategy and marketing. A clear offer, a fixed price and a plan your team can run.",
};

export default async function Home() {
  const { settings, projects, posts, services, faqs } = await getContent();
  const featured = projects.filter(project => project.featured);
  const selected = (featured.length ? featured : projects).slice(0, 6);
  const homeFaqs = faqs.filter(item => item.group === "home").map(item => item.question === "What happens after we enquire?" ? { ...item, answer: settings.replyTime } : item);
  return <div className="home-page"><SiteShell><main id="main" tabIndex={-1}>
    <Hero settings={settings} project={selected[0]} proofSentence={homeCopy.proofSentence} />
    <HomeCases projects={selected} settings={settings} />
    {settings.showInsights ? <HomeInsights posts={posts.slice(0, 3)} /> : null}
    <HomePricing settings={settings} services={services} />
    <HomeProcess stages={settings.process} strategyHeading={homeCopy.strategyHeading} strategyNote={homeCopy.strategyNote} />
    <HomeStudio lead={settings.studioBody ? homeCopy.studioLead : ""} />
    <HomeFaq items={homeFaqs} />
    <HomeClose settings={settings} />
  </main></SiteShell></div>;
}
