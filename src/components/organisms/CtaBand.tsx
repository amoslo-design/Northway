import { Button } from "@/components/atoms/Button";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";

export function CtaBand({ ctaLabel = "Let’s talk", heading = "Ready when you are.", sub = "We reply within one working day.", quiet = false }: { ctaLabel?: string; heading?: string; sub?: string; quiet?: boolean }) {
  return <section className="cta-band pine-surface brand-band" aria-labelledby="cta-heading"><div className="site-container cta-inner"><Text as="h2" variant="short-display" id="cta-heading">{heading}</Text><Text variant="lead" muted>{sub}</Text>{quiet ? <Link inverse href="/contact">{ctaLabel}</Link> : <span data-primary-action><Button size="lg" variant="brand-band" href="/contact">{ctaLabel}</Button></span>}</div></section>;
}
