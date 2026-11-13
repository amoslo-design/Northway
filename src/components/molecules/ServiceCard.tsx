import { Button } from "@/components/atoms/Button";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import type { Service } from "@/lib/content-types";

export function ServiceCard({ service, showPrices, ctaLabel }: { service: Service; showPrices: boolean; ctaLabel: string }) {
  return <article id={service.slug} className="service-card tablet-row" data-typical={service.typical}>
    <div className="tablet-name"><Text as="h3" variant="heading-3">{service.title}</Text>{service.typical ? <Text variant="meta">Typical</Text> : null}</div>
    <div className="tablet-scope"><Text>{service.short}</Text><Text variant="caption" muted>For {service.typicalScenario}</Text></div>
    <div className="tablet-price">{showPrices && service.price ? <Text variant="heading-2">{service.price}</Text> : null}<Text variant="caption" muted>{service.timeline}</Text></div>
    <div className="tablet-action">{service.typical ? <span data-primary-action><Button href={`/contact?service=${service.slug}`}>{ctaLabel}</Button></span> : <Link href={`/contact?service=${service.slug}`}>{ctaLabel}</Link>}</div>
  </article>;
}
