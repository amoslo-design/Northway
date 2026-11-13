import { HomeProcess } from "@/components/home/HomeProcess";
export function Process({ steps }: { steps: { title: string; body: string }[] }) {
  return <HomeProcess stages={steps} strategyHeading="Strategy your team can put to work." strategyNote="Work you can brief, share, and run with." />;
}
