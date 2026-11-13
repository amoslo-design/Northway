import type { ReactNode } from "react";
import type { Metadata } from "next";
import NextLink from "next/link";
import { Button } from "@/components/atoms/Button";
import { Icon, type IconName } from "@/components/atoms/Icon";
import { Link } from "@/components/atoms/Link";
import { Tag } from "@/components/atoms/Tag";
import { Text } from "@/components/atoms/Text";
import { FieldExamples, IconButtonExamples, LoadingExample, TagExamples } from "@/components/preview/Interactions";

const sections = [
  ["01", "Typography", "typography"],
  ["02", "Colour", "colour"],
  ["03", "Buttons", "buttons"],
  ["04", "Links & icons", "links"],
  ["05", "Tags & states", "tags"],
  ["06", "Form controls", "fields"],
] as const;

export const metadata: Metadata = { title: "Component library" };

function Section({ number, title, id, children }: { number: string; title: string; id: string; children: ReactNode }) {
  return <section className="library-section" id={id} aria-labelledby={`${id}-heading`}>
    <div className="section-title"><Text as="span" variant="caption" muted>{number}</Text><Text as="h2" variant="heading-2" id={`${id}-heading`}>{title}</Text></div>
    {children}
  </section>;
}

function Specimen({ label, children }: { label: string; children: ReactNode }) {
  return <div className="specimen-line"><Text variant="caption" muted>{label}</Text>{children}</div>;
}

const glyphs: IconName[] = ["arrow-right", "arrow-down", "menu", "close", "plus", "minus", "check", "alert", "success", "prev", "next"];

export default function ComponentsPage() {
  return <div className="library-shell">
    <header className="library-header">
      <NextLink href="/components" className="library-wordmark" aria-label="Northway, component library">Northway</NextLink>
      <Text variant="caption" muted>Component library · v0.2</Text>
    </header>
    <div className="library-layout">
      <aside className="library-index">
        <Text variant="label">Foundations & atoms</Text>
        <nav aria-label="Component index">{sections.map(([number, title, id]) => <a key={id} href={`#${id}`}><Text as="span" variant="caption">{number}</Text>{title}</a>)}</nav>
        <Text variant="caption" muted className="library-index__note">Bricolage & Hanken.<br />Pine. White. Light grey.<br />Built around the work.</Text>
      </aside>
      <main id="main" tabIndex={-1} className="library-main">
        <div className="library-intro">
          <Text as="h1" variant="display">A foundation<br />for the work.</Text>
          <Text variant="lead">The first building blocks for Northway. A considered type system, clear actions and useful details, ready to become a website.</Text>
          <Link href="#buttons" arrow>Explore the components</Link>
        </div>
        <Section number="01" title="Typography" id="typography">
          <Specimen label="Display · Regular · Responsive"><Text as="p" variant="display">Patients knew who the clinic was for, and booked a first visit from the site.</Text></Specimen>
          <Specimen label="Heading 1"><Text variant="heading-1">A clear position.<br />A plan you can run.</Text></Specimen>
          <Specimen label="Heading 2"><Text variant="heading-2">Know the price before we talk.</Text></Specimen>
          <Specimen label="Heading 3"><Text variant="heading-3">A studio built around the work.</Text></Specimen>
          <Specimen label="Lead"><Text variant="lead">We are a strategy and growth consultancy. We help companies clarify their offer, shape their brand and build a marketing plan their team can run.</Text></Specimen>
          <Specimen label="Body"><Text>Good strategy should be useful after the presentation. We agree the goal, set the price and timeline, and leave your team with a plan they can use.</Text></Specimen>
          <Specimen label="Label & caption"><Text variant="label">Fixed price. Set timeline.</Text><Text variant="caption" muted>We reply within one working day.</Text></Specimen>
        </Section>
        <Section number="02" title="Colour" id="colour">
          <div className="palette">{[["canvas", "Canvas", "color.bg"], ["surface", "Raised surface", "color.surface.raised"], ["ink", "Ink", "color.text"], ["inverse", "Inverse", "inverse.bg"]].map(([name, label, value]) => <div key={name} className="swatch"><div className={`swatch__colour swatch__colour--${name}`} /><Text variant="label">{label}</Text><Text variant="caption" muted>{value}</Text></div>)}</div>
        </Section>
        <Section number="03" title="Buttons" id="buttons">
          <div className="specimen-stack">
            <div><Text variant="caption" muted className="specimen-label">Primary, secondary & ghost · 44px</Text><div className="specimen-row"><Button href="#fields">Start a project</Button><Button variant="secondary" href="#typography">See case studies</Button><Button variant="ghost" href="#fields">See services</Button></div></div>
            <div><Text variant="caption" muted className="specimen-label">Large · 52px</Text><div className="specimen-row"><Button size="lg" href="#fields">Start a project<Icon name="arrow-right" /></Button><Button variant="secondary" size="lg" href="#typography">See case studies</Button></div></div>
            <div><Text variant="caption" muted className="specimen-label">Disabled & loading</Text><div className="specimen-row"><Button disabled>Start a project</Button><Button variant="secondary" href="#fields" disabled>Disabled link</Button><Button loading aria-label="Loading example">Start a project</Button><LoadingExample /></div></div>
            <div className="specimen-surface inverse"><Text variant="caption" muted>Inverse surface</Text><div className="specimen-row"><Button variant="inverse" size="lg" href="#fields">Start a project</Button><Link inverse href="#fields" arrow>See services</Link></div></div>
            <div className="specimen-surface brand-band"><Text variant="caption" muted>Brand surface</Text><div className="specimen-row"><Button variant="brand-band" size="lg" href="#fields">Start a project</Button></div></div>
          </div>
        </Section>
        <Section number="04" title="Links & icons" id="links">
          <div className="specimen-stack">
            <div className="specimen-row"><Link href="#typography">About the studio</Link><Link href="#fields" arrow>More questions</Link></div>
            <div className="specimen-row">{glyphs.map(name => <div key={name} className="icon-specimen"><Icon name={name} /><Text variant="caption" muted>{name}</Text></div>)}</div>
            <IconButtonExamples />
          </div>
        </Section>
        <Section number="05" title="Tags & states" id="tags">
          <div className="specimen-stack">
            <div className="specimen-row"><Tag label="Health" /><Tag label="2025" /><Tag label="Typical" /></div>
            <TagExamples />
            <Text variant="caption" muted>Select a sector to preview the selected state. These examples do not filter content.</Text>
          </div>
        </Section>
        <Section number="06" title="Form controls" id="fields"><FieldExamples /></Section>
      </main>
    </div>
    <footer className="library-footer"><Text variant="caption">Northway · Component library</Text><Text variant="caption" muted>Foundations first. Then the website.</Text><Link href="#main">Back to top</Link></footer>
  </div>;
}
