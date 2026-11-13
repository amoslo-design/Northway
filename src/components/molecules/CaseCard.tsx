import Image from "next/image";
import NextLink from "next/link";
import { Text } from "@/components/atoms/Text";
import type { Project } from "@/lib/content-types";

export function CaseCard({ project, index = 0 }: { project: Project; index?: number }) {
  const sector = project.sector.charAt(0).toUpperCase() + project.sector.slice(1);
  return <NextLink href={`/case-studies/${project.slug}`} className="case-card index-entry" data-featured={index === 0}>
    <div className="index-entry-copy"><Text as="h2" variant={index === 0 ? "heading-1" : "heading-3"}>{project.client}</Text><Text variant="caption" muted>{sector}, {project.year}.</Text><Text variant={index === 0 ? "lead" : "body"}>{project.oneLineResult}</Text><span className="entry-read">Read the case study</span></div>
    {project.hero ? <Image {...project.hero} alt={project.hero.alt} className="index-entry-image" sizes="(max-width: 767px) 100vw, 50vw" /> : null}
  </NextLink>;
}
