import { SiteShell } from "@/components/templates/SiteShell";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/components/atoms/Link";

export default function NotFound() {
  return <SiteShell><main id="main" tabIndex={-1} className="site-container inner-hero stack"><Text as="h1" variant="heading-1">This page isn&apos;t here.</Text><Text>Try Home, Case studies, or Contact.</Text><div className="inline-actions"><Link href="/">Home</Link><Link href="/case-studies">Case studies</Link><Link href="/contact">Start a project</Link></div></main></SiteShell>;
}
