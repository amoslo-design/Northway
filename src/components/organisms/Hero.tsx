import NextLink from "next/link";
import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { Excerpt } from "@/components/molecules/Excerpt";
import type { Project, Settings } from "@/lib/content-types";

export function Hero({ settings, project, proofSentence }: { settings: Settings; project?: Project; proofSentence?: string }) {
  const quote = !settings.heroResult && settings.heroQuote && settings.heroQuoteName;
  const heading = settings.heroResult || (quote ? settings.heroQuote : settings.heroHeading);
  const attribution = settings.heroResult ? [settings.heroResultClient, ...(project?.client === settings.heroResultClient ? [project.sector, project.year] : [])].filter(Boolean).join(" · ") : quote ? [settings.heroQuoteName, settings.heroQuoteRole].filter(Boolean).join(" · ") : "";
  return <section className="briefing pine-surface brand-band" data-briefing aria-labelledby="home-heading">
    <div className="site-container briefing-content">
      {attribution ? <Text variant="meta" className="briefing-attribution">{attribution}</Text> : null}
      <Text as="h1" variant="display" id="home-heading">{heading}</Text>
      <Text variant="lead" className="briefing-lede">{settings.heroLede}</Text>
      {proofSentence ? <Text variant="proof" className="briefing-proof">{proofSentence}</Text> : null}
      <div className="briefing-ask"><span data-primary-action><Button variant="brand-band" size="lg" href="/contact">{settings.briefingCtaLabel || "Tell us about your brief"}</Button></span>
        {settings.showPrices && settings.fromPrice ? <div className="briefing-price"><NextLink className="text--from-price" href="#price-tablet">{settings.fromPrice}.</NextLink><Text variant="caption">{settings.taxNote}</Text></div> : null}
      </div>
    </div>
    {project && project.featured && (project.hero || (project.quote && project.quoteName && project.quote !== heading)) ? <div className="briefing-peek site-container"><NextLink className="excerpt-target" href={`/case-studies/${project.slug}`}><Excerpt project={project} avoidText={heading} /></NextLink></div> : null}
  </section>;
}
