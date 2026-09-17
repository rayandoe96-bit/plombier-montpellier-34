import { TO_CONFIRM, type Confirmable, type Zone } from "./types";

export const businessInfo = {
  // Nom commercial et identité légale : confirmés via la fiche d'établissement
  // publique (Google Maps) et le registre des entreprises (SIRENE / société.com).
  tradeName: "Devarenne Plomberie Chauffage",
  legalName: "Emilien Devarenne",
  legalForm: "Entreprise individuelle (EI)",
  siret: "538 207 523 00035",
  address: "6 Rue des Consuls, 34970 Lattes",
  phone: "07 49 03 01 83",
  phoneHref: "tel:+33749030183",
  priceFrom: 100,
  emergencyResponseTime: "sous 2h maximum",
  standardResponseTime: "sous 3 jours maximum",
  email: TO_CONFIRM as Confirmable<string>,
  insuranceCoverage: TO_CONFIRM as Confirmable<string>,
  certifications: TO_CONFIRM as Confirmable<string>,
  hours: TO_CONFIRM as Confirmable<string>,
  quotePolicy: TO_CONFIRM as Confirmable<string>,
  consentNotice: TO_CONFIRM as Confirmable<string>,
  retentionPeriod: TO_CONFIRM as Confirmable<string>,
};

export const zones: Zone[] = [
  {
    name: "Montpellier",
    description: TO_CONFIRM,
    travelFee: TO_CONFIRM,
  },
  {
    name: "Lattes",
    description: "Commune où se situe le siège de l'entreprise.",
    travelFee: TO_CONFIRM,
  },
  {
    name: "Carnon",
    description: TO_CONFIRM,
    travelFee: TO_CONFIRM,
  },
  {
    name: "Palavas-les-Flots",
    description: TO_CONFIRM,
    travelFee: TO_CONFIRM,
  },
  {
    name: "La Grande-Motte",
    description: TO_CONFIRM,
    travelFee: TO_CONFIRM,
  },
];
