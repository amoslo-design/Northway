import NextLink from "next/link";
import { Text } from "@/components/atoms/Text";
import { Waymark } from "@/components/atoms/Waymark";
import { Folio } from "./Folio";
import type { Project } from "@/lib/content-types";

export function CaseCard({ project, index = 0 }: { project: Project; index?: number }) {
  return <NextLink href={`/case-studies/${project.slug}`} className="case-card ledger-row" data-featured={index === 0}>
    <span className="ledger-index"><Waymark size="small" /><span>{String(index + 1).padStart(2, "0")}</span></span>
    <div className="ledger-copy"><Text variant="meta">{project.sector} · {project.year}</Text><Text as="h3" variant={index === 0 ? "heading-1" : "heading-3"}>{project.client}</Text><Text variant="lead">{project.oneLineResult}</Text></div>
    {index === 0 || project.hero ? <Folio project={project} compact /> : null}
  </NextLink>;
}
