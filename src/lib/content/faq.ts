import type { FaqItem } from "./types";

export const generalFaq: FaqItem[] = [
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer:
      "Nous intervenons à Montpellier, Carnon, Palavas-les-Flots et La Grande-Motte. Consultez la page Zone d'intervention pour le détail par commune.",
  },
  {
    question: "Quel est votre délai d'intervention ?",
    answer:
      "En urgence, nous intervenons sous 2h maximum. Pour une demande non urgente, l'intervention a lieu sous 3 jours maximum.",
  },
  {
    question: "Combien coûte une intervention ?",
    answer:
      "Nos interventions démarrent à partir de 100 €. Le tarif exact dépend du service concerné et de la situation constatée sur place ; les facteurs qui influencent le prix sont détaillés sur chaque page service.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer: "À confirmer.",
  },
  {
    question: "Êtes-vous assuré pour vos interventions ?",
    answer: "À confirmer.",
  },
];

export const quotePreparationFaq: FaqItem[] = [
  {
    question: "Quelles informations préparer avant de demander un devis ?",
    answer:
      "Le type de besoin (débouchage, fuite, installation...), la pièce concernée, depuis quand le problème est constaté, et votre commune d'intervention.",
  },
  {
    question: "Des photos ou vidéos sont-elles utiles ?",
    answer:
      "Oui, une photo du point concerné (évacuation, tache d'humidité, robinetterie) aide à mieux cerner la demande avant l'intervention.",
  },
];
