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
  // Horaires : 8h-20h, donnés le 3 octobre 2026 (jours repris de la fiche Google : lundi-samedi).
  // Note : fiche Google et annuaires publics, relevés le 2 octobre 2026.
  // À revalider avec le client et à mettre à jour si la fiche change.
  hours: "Du lundi au samedi, de 8h à 20h. Fermé le dimanche." as Confirmable<string>,
  // Fallback only: once GOOGLE_PLACES_API_KEY is set, src/lib/google/place.ts reads the live rating.
  googleRating: { value: "4,7", count: 76 },
  // Place ID of the Google Business Profile (ChIJ...). Find it with `node scripts/find-place-id.mjs`.
  // GOOGLE_PLACE_ID in the environment overrides it.
  // Devarenne plomberie chauffage, 6 Rue des Consuls, Lattes (Place ID Finder, 2026-10-04).
  googlePlaceId: "ChIJ1_AV6cFb5kcRkaHINeObt-U" as Confirmable<string>,
  // Prix d'appel et délais : non confirmés par le client, ne pas les afficher comme acquis.
  priceFrom: TO_CONFIRM as Confirmable<number>,
  // « À partir de 100 € » pour les dépannages et interventions rapides (confirmé par le client,
  // 8 octobre 2026). Ne vaut pas pour l'installation ni la salle de bains.
  repairPriceFrom: 100 as Confirmable<number>,
  emergencyResponseTime: TO_CONFIRM as Confirmable<string>,
  standardResponseTime: TO_CONFIRM as Confirmable<string>,
  email: TO_CONFIRM as Confirmable<string>,
  insuranceCoverage: TO_CONFIRM as Confirmable<string>,
  certifications: TO_CONFIRM as Confirmable<string>,
  quotePolicy: TO_CONFIRM as Confirmable<string>,
  // Textes RGPD : proposition par défaut (8 octobre 2026), validée sur le principe par le client.
  // À relire si le prestataire du formulaire ou la durée de conservation changent.
  consentNotice:
    "Vos informations servent uniquement à répondre à votre demande. Elles ne sont ni vendues ni utilisées pour de la publicité, et vous pouvez demander à les consulter, les corriger ou les supprimer." as Confirmable<string>,
  retentionPeriod:
    "Une demande qui n'aboutit pas à une intervention est conservée 3 ans au plus après le dernier échange. Si une intervention a lieu, le devis et la facture sont conservés 10 ans, comme l'exigent les obligations comptables." as Confirmable<string>,
};

export const openingHours: OpeningSlot[] = [
  { day: 1, label: "Lundi", opens: "08:00", closes: "20:00" },
  { day: 2, label: "Mardi", opens: "08:00", closes: "20:00" },
  { day: 3, label: "Mercredi", opens: "08:00", closes: "20:00" },
  { day: 4, label: "Jeudi", opens: "08:00", closes: "20:00" },
  { day: 5, label: "Vendredi", opens: "08:00", closes: "20:00" },
  { day: 6, label: "Samedi", opens: "08:00", closes: "20:00" },
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
