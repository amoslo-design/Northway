import Image from "next/image";
import { Text } from "@/components/atoms/Text";
import { Waymark } from "@/components/atoms/Waymark";
import { classes } from "@/lib/classes";
import type { Project } from "@/lib/content-types";

export function Folio({ project, compact = false }: { project: Project; compact?: boolean }) {
  return <div className={classes("folio", compact && "folio--compact")} aria-hidden={compact || undefined}>
    {project.hero ? <Image {...project.hero} alt={project.hero.alt} sizes="(max-width: 767px) 90vw, 400px" className="folio-image" /> : <span className="folio-initial" aria-hidden="true">{project.client.charAt(0)}</span>}
    <div className="folio-content"><div className="folio-top"><Waymark size="small" /><Text as="span" variant="meta">{project.sector} · {project.year}</Text></div><Text variant="heading-3">{project.client}</Text>{!compact ? <Text>{project.oneLineResult}</Text> : null}<span className="folio-caption">{compact ? "Case study" : "Read the case study"}</span></div>
  </div>;
}
