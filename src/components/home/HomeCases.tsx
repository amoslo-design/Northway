import NextLink from "next/link";
import { Link } from "@/components/atoms/Link";
import { Text } from "@/components/atoms/Text";
import type { Project, Settings } from "@/lib/content-types";
import { workText } from "@/lib/content";

function CaseEntry({ project, featured = false }: { project: Project; featured?: boolean }) {
  const sector = project.sector.charAt(0).toUpperCase() + project.sector.slice(1);
  return <NextLink className={`home-case${featured ? " home-case--featured" : ""}`} href={`/case-studies/${project.slug}`}>
    <Text as="h3" variant={featured ? "heading-1" : "heading-3"}>{project.client}</Text>
    <Text variant="caption" muted>{sector}, {project.year}.</Text>
    <Text variant={featured ? "lead" : "body"}>{featured ? project.problem || project.goal : project.oneLineResult}</Text>
    {featured ? <span className="home-case-read">Read the case study</span> : null}
  </NextLink>;
}

export function HomeCases({ projects, settings }: { projects: Project[]; settings: Settings }) {
  const [featured, ...quiet] = projects;
  if (!featured) return null;
  return <section className="home-work" aria-labelledby="cases-heading" id="case-studies">
    <div className="site-container">
      <div className="home-work-layout">
        <div className="home-work-statement"><Text as="h2" variant="heading-1" id="cases-heading">Clearer offers. Work people can act on.</Text><Text variant="caption" muted>Selected {workText(settings.workLabel)}</Text></div>
        <div className="home-work-entries">
        <CaseEntry project={featured} featured />
        {quiet.length ? <div className="home-work-quiet">{quiet.map(project => <CaseEntry key={project.slug} project={project} />)}</div> : null}
        </div>
      </div>
      <Link href="/case-studies" className="home-work-more">See all {workText(settings.workLabel)}</Link>
    </div>
  </section>;
}
