import { Text } from "@/components/atoms/Text";

type Stage = { title: string; body: string };

export function HomeProcess({ stages, strategyHeading, strategyNote }: { stages: Stage[]; strategyHeading: string; strategyNote: string }) {
  if (!stages.length) return null;
  return <section className="home-process" aria-labelledby="process-heading" id="process">
    <div className="site-container">
      <Text as="h2" className="sr-only" id="process-heading">How a project runs</Text>
      <ul className="home-process-path">
        {stages.map(stage => <li key={stage.title} data-decisive={stage.title === "Strategy"}>
          <div className="home-stage">
            <Text as="h3" variant="heading-3">{stage.title}</Text>
            <div className="home-stage-copy">
              {stage.title === "Strategy" ? <Text variant="lead" className="home-strategy-heading">{strategyHeading}</Text> : null}
              <Text>{stage.body}</Text>
              {stage.title === "Strategy" && strategyNote ? <Text variant="caption" muted>{strategyNote}</Text> : null}
            </div>
          </div>
        </li>)}
      </ul>
    </div>
  </section>;
}
