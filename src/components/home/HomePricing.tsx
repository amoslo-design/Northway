import { Button } from "@/components/atoms/Button";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import type { Service, Settings } from "@/lib/content-types";

export function HomePricing({ services, settings, standalone = false }: { services: Service[]; settings: Settings; standalone?: boolean }) {
  if (!services.length) return null;
  // Source order is the mobile reading and keyboard order. Desktop restores package progression visually.
  const ordered = [...services].sort((a, b) => Number(b.typical) - Number(a.typical) || a.order - b.order);
  return <section className={`home-pricing${standalone ? " home-pricing--standalone" : ""}`} aria-labelledby="services-heading" id="price-tablet">
    <div className="site-container">
      {!standalone ? <header className="price-heading"><Text as="h2" variant="heading-2" id="services-heading">Know the price before we talk.</Text><Text muted>One clear scope, a fixed price and published weeks.</Text></header> : <Text as="h2" className="sr-only" id="services-heading">Packages and prices</Text>}
      <div className="price-tablet">
        {ordered.map(service => <article key={service.slug} id={service.slug} className="service-card tablet-row" data-typical={service.typical} style={{ order: service.order }}>
          <div className="tablet-name"><Text as="h3" variant="heading-3">{service.title}</Text>{service.typical ? <Text variant="meta">Typical</Text> : null}</div>
          <div className="tablet-scope"><Text>{service.short}</Text><Text variant="caption" muted>For {service.typicalScenario}</Text></div>
          <div className="tablet-price">{settings.showPrices && service.price ? <Text variant="heading-3">{service.price}</Text> : null}<Text variant="caption" muted>{service.timeline}</Text></div>
          <div className="tablet-action">{service.typical ? <span data-primary-action><Button href={`/contact?service=${service.slug}`}>{settings.ctaLabel}</Button></span> : <Link href={`/contact?service=${service.slug}`}>Ask about {service.title}</Link>}</div>
        </article>)}
      </div>
      <div className="tablet-note"><Text variant="caption" muted>{settings.showPrices ? settings.taxNote : "Fixed scope. Published weeks."}</Text><Text variant="caption" muted>Two review rounds. A plan your team can run.</Text></div>
      {!standalone ? <Link href="/services" className="home-pricing-more">See all services</Link> : null}
    </div>
  </section>;
}
