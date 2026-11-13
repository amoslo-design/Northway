import { Button } from "@/components/atoms/Button";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import { FaqAccordion } from "@/components/organisms/FaqAccordion";
import type { Faq, Settings } from "@/lib/content-types";

export function HomeStudio({ lead }: { lead: string }) {
  if (!lead) return null;
  return <section className="home-studio" aria-label="About the studio" id="studio">
    <div className="site-container"><div className="home-studio-copy">
      <Text variant="heading-2">{lead}</Text>
      <Link href="/about">About the studio</Link>
    </div></div>
  </section>;
}

export function HomeFaq({ items }: { items: Faq[] }) {
  if (!items.length) return null;
  return <section className="home-faq" aria-labelledby="faq-heading" id="faq">
    <div className="site-container"><div className="home-faq-content">
      <Text as="h2" variant="heading-2" id="faq-heading">Before we start.</Text>
      <FaqAccordion items={items} />
      <Link href="/services#faq">More questions</Link>
    </div></div>
  </section>;
}

export function HomeClose({ settings }: { settings: Settings }) {
  return <section className="cta-band pine-surface brand-band" aria-labelledby="cta-heading">
    <div className="site-container cta-inner">
      <Text as="h2" variant="short-display" id="cta-heading">Ready when you are.</Text>
      <Text variant="lead" muted>{settings.replyTime}</Text>
      <span data-primary-action><Button size="lg" variant="brand-band" href="/contact">{settings.closingCtaLabel || "Let’s talk"}</Button></span>
    </div>
  </section>;
}
