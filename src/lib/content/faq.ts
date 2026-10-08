import { TO_CONFIRM, type FaqItem } from "./types";
import { businessInfo } from "./business";
import { isConfirmed, isVisible } from "./confirm";

const allGeneralFaq: FaqItem[] = [
  {
    question: "Dans quelles communes intervenez-vous ?",
    answer:
      `À Montpellier, Lattes, Pérols, Carnon, Palavas-les-Flots et La Grande-Motte. Votre commune n'est pas dans la liste ? Appelez, on vous dit tout de suite si c'est possible.`,
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
    answer: isConfirmed(businessInfo.repairPriceFrom)
      ? `Les dépannages et interventions rapides démarrent à partir de ${businessInfo.repairPriceFrom} €. Le prix exact vous est annoncé avant l'intervention.`
      : TO_CONFIRM,
  },
  {
    question: "Quels sont vos horaires ?",
    answer: businessInfo.hours,
  },
  {
    question: "Où êtes-vous installé ?",
    answer: `Au ${businessInfo.address}, depuis ${businessInfo.foundingYear}. Une entreprise artisanale locale : c'est l'artisan lui-même qui se déplace.`,
  },
  {
    question: "Quel est le moyen le plus rapide de vous joindre ?",
    answer: `Le téléphone : ${businessInfo.phone}. Vous parlez directement à ${businessInfo.ownerName}, pas à un standard. Pour un projet qui n'est pas urgent, la page Devis suffit.`,
  },
  {
    question: "Faites-vous la création de salle de bains ?",
    answer:
      "Oui : création ou rénovation complète, des arrivées d'eau et des évacuations jusqu'à la pose de la douche, de la baignoire, du lavabo et des WC. Décrivez votre projet sur la page Devis pour en parler.",
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
      "Quatre choses suffisent : le type de besoin (débouchage, fuite, salle de bains, chauffe-eau...), la pièce concernée, depuis quand le problème dure, et votre commune.",
  },
  {
    question: "Des photos ou vidéos sont-elles utiles ?",
    answer:
      "Oui. Une photo de l'évacuation, de la tache d'humidité ou de la pièce à refaire aide à comprendre votre demande plus vite et à venir avec le bon matériel.",
  },
];
