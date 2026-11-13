import type { Metadata } from "next";
import { SiteShell } from "@/components/templates/SiteShell";
import { EnquiryForm } from "@/components/organisms/EnquiryForm";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/components/atoms/Link";
import { getContent } from "@/lib/content";

export const metadata: Metadata = { title: "Tell us about your brief" };

export default async function Contact({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const [{ settings, services }, query] = await Promise.all([getContent(), searchParams]);
  const selected = services.some(item => item.slug === query.service) ? query.service! : "not-sure";
  return <SiteShell><main id="main" tabIndex={-1}><section className="inner-hero site-container stack"><Text as="h1" variant="heading-1">Tell us about your brief.</Text><Text variant="lead">A goal, a time frame, a place to start.</Text></section><section className="site-container inner-sections"><div className="enquiry-sheet"><Text variant="lead" className="enquiry-reply">{settings.replyTime}</Text>
    <EnquiryForm services={services.map(({ title, slug }) => ({ title, slug }))} defaultService={selected} email={settings.email} replyTime={settings.replyTime} />
    <Link className="enquiry-email" href={`mailto:${settings.email}`}>{settings.email}</Link>
  </div></section></main></SiteShell>;
}
