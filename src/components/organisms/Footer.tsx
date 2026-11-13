import NextLink from "next/link";
import { Text } from "@/components/atoms/Text";
import { Link } from "@/components/atoms/Link";
import { Waymark } from "@/components/atoms/Waymark";
import type { Settings } from "@/lib/content-types";
import type { NavLink } from "./Nav";

export function Footer({ settings, links }: { settings: Settings; links: NavLink[] }) {
  return <footer className="site-footer pine-surface inverse"><div className="site-container">
    <div className="footer-main"><div className="stack"><NextLink className="wordmark" href="/" aria-label={`${settings.studioName}, home`}><Waymark size="wordmark" />{settings.studioName}</NextLink><Text variant="lead" className="footer-promise">{settings.promise}</Text>{settings.email ? <Link inverse href={`mailto:${settings.email}`}>{settings.email}</Link> : null}</div><nav aria-label="Footer navigation" className="footer-nav">{links.map(link => <Link key={link.href} inverse href={link.href}>{link.label}</Link>)}</nav></div>
    <div className="footer-bottom"><Text variant="caption" muted>© {new Date().getUTCFullYear()} {settings.studioName}.</Text><nav className="inline-actions" aria-label="Legal">{["Privacy", "Terms", "Cookies"].map(label => <Link key={label} inverse href={`/${label.toLowerCase()}`}>{label}</Link>)}</nav></div>
    <Text variant="caption" muted className="demo-disclosure">Northway is a demonstration studio that ships with this template.</Text>
    {settings.showCredit ? <Link inverse href="https://skala.design">Template by Skala</Link> : null}
  </div></footer>;
}
