export const TO_CONFIRM = "À confirmer" as const;

export type ToConfirm = typeof TO_CONFIRM;
export type Confirmable<T> = T | ToConfirm;

export type ZoneName =
  | "Montpellier"
  | "Lattes"
  | "Carnon"
  | "Palavas-les-Flots"
  | "La Grande-Motte";

export interface Zone {
  name: ZoneName;
  description: Confirmable<string>;
  travelFee: ToConfirm;
}

export type ServiceLevel = "Standard" | "Haute Pression" | "Caméra" | "Diagnostic";

export interface Service {
  slug: string;
  navLabel: string;
  title: string;
  level: ServiceLevel;
  need: string;
  process: string[];
  priceFactors: string[];
  category: "depannage" | "installation" | "entretien";
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface AdviceArticle {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  relatedServiceSlug?: string;
}
