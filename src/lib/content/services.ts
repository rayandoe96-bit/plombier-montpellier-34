import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "debouchage-canalisation",
    navLabel: "Débouchage de canalisation",
    title: "Débouchage rapide de vos canalisations (WC, évier, douche)",
    level: "Standard",
    need: "Un évier, une douche ou des toilettes qui s'évacuent mal, voire plus du tout : le débouchage traite l'obstruction à la source, sans endommager vos canalisations.",
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
    need: "Quand un débouchage classique ne suffit pas, l'hydrocurage haute pression projette de l'eau à forte pression pour décoller les dépôts et bouchons tenaces sur toute la longueur de la canalisation.",
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
    need: "Une inspection caméra permet de visualiser l'intérieur de la canalisation pour identifier précisément la cause d'un désordre récurrent (fissure, racine, affaissement, bouchon persistant) avant toute intervention lourde.",
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
    need: "Facture d'eau anormalement élevée, humidité persistante, tache suspecte : la recherche de fuite localise précisément l'origine du problème, y compris lorsque la fuite n'est pas visible à l'œil nu.",
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
  "Remplacement et pose de robinetterie",
  "Installation de sanitaires (WC, lavabo, douche)",
  "Pose ou remplacement de chauffe-eau",
];

export const entretienHighlights: string[] = [
  "Entretien préventif des canalisations",
  "Contrôle de l'état général de votre installation sanitaire",
  "Entretien de chauffe-eau",
];
