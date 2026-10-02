import { TO_CONFIRM, type FaqItem } from "./types";
import { businessInfo } from "./business";
import { isConfirmed, isVisible } from "./confirm";

const allGeneralFaq: FaqItem[] = [
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer:
      "Nous intervenons à Montpellier, Lattes, Carnon, Palavas-les-Flots et La Grande-Motte. Consultez la page Zone d'intervention pour le détail par commune.",
  },
  {
    question: "Quel est votre délai d'intervention ?",
    answer:
      isConfirmed(businessInfo.emergencyResponseTime) && isConfirmed(businessInfo.standardResponseTime)
        ? `En urgence, nous intervenons ${businessInfo.emergencyResponseTime}. Pour une demande non urgente, l'intervention a lieu ${businessInfo.standardResponseTime}.`
        : TO_CONFIRM,
  },
  {
    question: "Combien coûte une intervention ?",
    answer: isConfirmed(businessInfo.priceFrom)
      ? `Nos interventions démarrent à partir de ${businessInfo.priceFrom} €. Le tarif exact dépend du service concerné et de la situation constatée sur place ; les facteurs qui influencent le prix sont détaillés sur chaque page service.`
      : TO_CONFIRM,
  },
  {
    question: "Quels sont vos horaires ?",
    answer: businessInfo.hours,
  },
  {
    question: "Le devis est-il gratuit ?",
    answer: TO_CONFIRM,
  },
  {
    question: "Êtes-vous assuré pour vos interventions ?",
    answer: businessInfo.insuranceCoverage,
  },
];

// Server-only: questions without a confirmed answer are hidden in production.
export const generalFaq = allGeneralFaq.filter((item) => isVisible(item.answer));

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
