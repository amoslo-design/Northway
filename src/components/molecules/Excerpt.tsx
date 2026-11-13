import Image from "next/image";
import { Text } from "@/components/atoms/Text";
import type { Project } from "@/lib/content-types";

export function Excerpt({ project, avoidText }: { project: Project; avoidText?: string }) {
  const hasQuote = Boolean(project.quote && project.quoteName && project.quote !== avoidText);
  const detail = hasQuote ? project.quote : project.goal;
  if (!project.hero && (!detail || detail === avoidText)) return null;

  return <figure className={`excerpt${project.hero ? " excerpt--image" : ""}`}>
    {project.hero ? <Image className="excerpt-image" {...project.hero} alt={project.hero.alt} sizes="(max-width: 767px) 90vw, 360px" /> : <Text as="blockquote" variant="heading-2" className="excerpt-quote">{hasQuote ? `“${detail}”` : detail}</Text>}
    <figcaption className="excerpt-caption">
      {hasQuote ? <><Text variant="caption">{project.quoteName}</Text><Text variant="caption" muted>{project.quoteRole}</Text></> : <Text variant="caption" muted>{project.client}</Text>}
      <span className="excerpt-link">Read the case study</span>
    </figcaption>
  </figure>;
}
