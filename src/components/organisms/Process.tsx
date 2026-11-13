import { Text } from "@/components/atoms/Text";
import { Waymark } from "@/components/atoms/Waymark";

export function Process({ steps }: { steps: { title: string; body: string }[] }) {
  if (!steps.length) return null;
  return <section className="site-section process-chapter" aria-labelledby="process-heading" id="process"><div className="site-container chapter-layout"><Waymark /><div className="chapter-content"><div className="section-head"><Text as="h2" variant="heading-2" id="process-heading">How a project runs.</Text><Text variant="caption" muted>From the first conversation to a plan in your hands.</Text></div><ol className="process-path">{steps.map((step, index) => <li key={step.title} data-decisive={step.title === "Strategy"}><div className="process-marker"><Waymark size="small" /><span>{index + 1}</span></div><Text as="h3" variant="heading-3">{step.title}</Text><Text>{step.body}</Text></li>)}</ol></div></div></section>;
}
