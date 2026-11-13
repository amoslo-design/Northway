export type ImageAsset = { src: string; alt: string; width: number; height: number };
export type Project = { title: string; slug: string; client: string; sector: string; year: number; date: string; featured: boolean; sample: boolean; hero?: ImageAsset; oneLineResult: string; goal: string; problem: string; whatWeDid: { label: string; body: string }[]; measuredResult: string; quote?: string; quoteName?: string; quoteRole?: string; relatedServices: string[] };
export type Service = { title: string; slug: string; short: string; price: string; timeline: string; inclusions: string[]; typicalScenario: string; typical: boolean; order: number; sample: boolean; featured: boolean };
export type Post = { title: string; slug: string; excerpt: string; date: string; sample: boolean; published: boolean; body: string; cover?: ImageAsset };
export type Faq = { question: string; answer: string; group: "home" | "services"; order: number; sample: boolean };
export type Settings = {
  studioName: string; tagline: string; promise: string; ctaLabel: string; briefingCtaLabel?: string; closingCtaLabel?: string; workLabel: string;
  heroResult: string; heroResultClient: string; heroQuote: string; heroQuoteName: string; heroQuoteRole: string; heroImage?: ImageAsset | null;
  heroLede: string; email: string; calendarUrl: string; showPrices: boolean; showInsights: boolean; showPrinciples: boolean; showCredit: boolean;
  heroHeading: string; proofChips: string[];
  fromPrice: string; taxNote: string; replyTime: string;
  principles: { title: string; body: string }[];
  process: { title: string; body: string }[];
  studioHeading: string; studioBody: string;
};

export type TeamMember = { name: string; slug: string; role: string; initials: string; bio: string; order: number; showOnAbout: boolean; sample: boolean };
