import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "debouchage-canalisation",
    navLabel: "Débouchage de canalisation",
    title: "Débouchage rapide de vos canalisations (WC, évier, douche)",
    level: "Standard",
    need: "L'eau stagne dans l'évier, la douche se vide au ralenti, les WC débordent ? On trouve le bouchon, on le retire à la source et on vérifie que tout s'écoule normalement, sans abîmer vos canalisations.",
    process: [
      "Écoute du problème et des premiers signes observés (odeurs, remontées, lenteur d'écoulement).",
      "Localisation du bouchon et choix de la méthode adaptée (furet, ventouse professionnelle, etc.).",
      "Débouchage de la canalisation concernée.",
      "Vérification de l'écoulement et conseils pour limiter la récidive.",
    ],
    priceFactors: [
      "Type de canalisation concernée (WC, évier, douche)",
      "Accessibilité du point d'intervention",
      "Ancienneté et nature de l'obstruction",
    ],
    category: "depannage",
  },
  {
    slug: "haute-pression-hydrocurage",
    navLabel: "Haute Pression / Hydrocurage",
    title: "Élimination des bouchons tenaces par hydrocurage haute pression",
    level: "Haute Pression",
    need: "Le bouchon revient malgré les débouchages ? L'hydrocurage envoie de l'eau à très forte pression dans la canalisation pour décoller graisses, tartre et dépôts sur toute sa longueur, pas seulement au point bouché.",
    process: [
      "Diagnostic du réseau et identification du ou des points de blocage.",
      "Mise en place du matériel haute pression adapté au diamètre de la canalisation.",
      "Hydrocurage de la canalisation sur toute sa longueur accessible.",
      "Contrôle de l'écoulement après intervention.",
    ],
    priceFactors: [
      "Longueur et diamètre de la canalisation à traiter",
      "Nature des dépôts (graisses, tartre, racines, etc.)",
      "Accessibilité du réseau (regard, colonne, canalisation enterrée)",
    ],
    category: "depannage",
  },
  {
    slug: "curage-inspection-camera",
    navLabel: "Curage & Inspection Caméra",
    title: "Diagnostic précis de vos canalisations par inspection caméra",
    level: "Caméra",
    need: "Toujours le même problème ? Une caméra passée dans la canalisation montre ce qui se passe vraiment à l'intérieur (fissure, racine, affaissement, dépôt) pour réparer la bonne chose, au bon endroit, avant d'engager de gros travaux.",
    process: [
      "Curage préalable de la canalisation si nécessaire.",
      "Introduction d'une caméra d'inspection dans le réseau.",
      "Repérage et localisation des anomalies identifiées.",
      "Compte-rendu des observations et recommandations.",
    ],
    priceFactors: [
      "Longueur de réseau à inspecter",
      "Nécessité ou non d'un curage préalable",
      "Complexité du réseau (nombre de regards, coudes, embranchements)",
    ],
    category: "depannage",
  },
  {
    slug: "recherche-de-fuite",
    navLabel: "Recherche de fuite",
    title: "Détection de fuite d'eau, visible ou invisible, sans casse inutile",
    level: "Diagnostic",
    need: "Facture d'eau qui grimpe, mur humide, tache au plafond ? On localise l'origine exacte de la fuite, même invisible, avant d'ouvrir quoi que ce soit : on ne casse que là où il faut.",
    process: [
      "Analyse des symptômes constatés (humidité, compteur, factures).",
      "Recherche de la fuite avec les méthodes adaptées à la situation.",
      "Localisation précise du point de fuite.",
      "Restitution du diagnostic avant toute réparation.",
    ],
    priceFactors: [
      "Caractère visible ou invisible de la fuite",
      "Type de réseau concerné (alimentation, évacuation, encastré)",
      "Techniques de détection nécessaires selon la configuration",
    ],
    category: "depannage",
  },
];

export const installationHighlights: string[] = [
  "Pose ou remplacement de chauffe-eau",
  "Installation et remplacement de chauffage",
  "Installation de sanitaires : WC, lavabo, douche",
  "Remplacement et pose de robinetterie",
];

export const bathroomHighlights: string[] = [
  "Création d'une salle de bains dans une pièce neuve ou réaménagée",
  "Rénovation complète d'une salle de bains existante",
  "Remplacement d'une baignoire par une douche",
  "Pose de douche, baignoire, lavabo, meuble vasque et WC",
  "Arrivées d'eau et évacuations adaptées au nouveau plan",
  "Robinetterie, mitigeurs et colonne de douche",
];

export const entretienHighlights: string[] = [
  "Entretien préventif des canalisations",
  "Contrôle de l'état général de votre installation sanitaire",
  "Entretien de chauffe-eau",
];
