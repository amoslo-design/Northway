import { Button } from "@/components/atoms/Button";
import { Text } from "@/components/atoms/Text";
import { Waymark } from "@/components/atoms/Waymark";

export function CtaBand({ ctaLabel, heading = "Ready when you are.", sub = "We reply within one working day." }: { ctaLabel: string; heading?: string; sub?: string }) {
  return <section className="cta-band pine-surface brand-band" aria-labelledby="cta-heading"><div className="site-container cta-inner"><Waymark /><Text as="h2" variant="heading-1" id="cta-heading">{heading}</Text><Text variant="lead" muted>{sub}</Text><span data-primary-action><Button size="lg" variant="brand-band" href="/contact">{ctaLabel}</Button></span></div></section>;
}
