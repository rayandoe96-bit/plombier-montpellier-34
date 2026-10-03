import { TO_CONFIRM, type Confirmable, type Zone } from "./types";

export interface OpeningSlot {
  /** 0 = Sunday … 6 = Saturday */
  day: number;
  label: string;
  opens: string | null;
  closes: string | null;
}

export const businessInfo = {
  // Nom commercial et identité légale : confirmés via la fiche d'établissement
  // publique (Google Maps) et le registre des entreprises (SIRENE / société.com).
  tradeName: "Devarenne Plomberie Chauffage",
  ownerName: "Émilien Devarenne",
  legalName: "Emilien Devarenne",
  legalForm: "Entreprise individuelle (EI)",
  siret: "538 207 523 00035",
  // Date de création au registre : 1er novembre 2011.
  foundingYear: 2011,
  streetAddress: "6 Rue des Consuls",
  postalCode: "34970",
  city: "Lattes",
  address: "6 Rue des Consuls, 34970 Lattes",
  phone: "06 31 93 45 14",
  phoneHref: "tel:+33631934514",
  phoneE164: "+33631934514",
  // Horaires et note : fiche Google et annuaires publics, relevés le 2 octobre 2026.
  // À revalider avec le client et à mettre à jour si la fiche change.
  hours: "Du lundi au samedi, de 9h à 20h (20h30 le mercredi). Fermé le dimanche." as Confirmable<string>,
  googleRating: { value: "4,6", count: 61 },
  googleReviewsUrl: TO_CONFIRM as Confirmable<string>,
  // Prix d'appel et délais : non confirmés par le client, ne pas les afficher comme acquis.
  priceFrom: TO_CONFIRM as Confirmable<number>,
  emergencyResponseTime: TO_CONFIRM as Confirmable<string>,
  standardResponseTime: TO_CONFIRM as Confirmable<string>,
  email: TO_CONFIRM as Confirmable<string>,
  insuranceCoverage: TO_CONFIRM as Confirmable<string>,
  certifications: TO_CONFIRM as Confirmable<string>,
  quotePolicy: TO_CONFIRM as Confirmable<string>,
  consentNotice: TO_CONFIRM as Confirmable<string>,
  retentionPeriod: TO_CONFIRM as Confirmable<string>,
};

export const openingHours: OpeningSlot[] = [
  { day: 1, label: "Lundi", opens: "09:00", closes: "20:00" },
  { day: 2, label: "Mardi", opens: "09:00", closes: "20:00" },
  { day: 3, label: "Mercredi", opens: "09:00", closes: "20:30" },
  { day: 4, label: "Jeudi", opens: "09:00", closes: "20:00" },
  { day: 5, label: "Vendredi", opens: "09:00", closes: "20:00" },
  { day: 6, label: "Samedi", opens: "09:00", closes: "20:00" },
  { day: 0, label: "Dimanche", opens: null, closes: null },
];

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
    name: "Pérols",
    description: TO_CONFIRM,
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
