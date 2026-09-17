import type { AdviceArticle } from "./types";

export const adviceArticles: AdviceArticle[] = [
  {
    slug: "eviter-bouchons-canalisation",
    title: "5 gestes pour éviter les bouchons de canalisation",
    summary:
      "Des habitudes simples au quotidien pour limiter les obstructions dans vos éviers, douches et WC.",
    body: [
      "Les bouchons de canalisation sont souvent la conséquence d'habitudes du quotidien plutôt que d'un défaut de l'installation. Quelques gestes simples permettent de réduire fortement les risques.",
      "1. Évitez de jeter les graisses de cuisson dans l'évier : elles se solidifient en refroidissant et se déposent le long des parois de la canalisation.",
      "2. Utilisez une grille ou un filtre sur les bondes de douche et d'évier pour retenir cheveux et résidus avant qu'ils n'entrent dans le réseau.",
      "3. Ne jetez pas de lingettes, cotons-tiges ou autres déchets solides dans les toilettes, même mentionnés comme « biodégradables ».",
      "4. Faites couler de l'eau chaude régulièrement dans les canalisations pour limiter l'accumulation de dépôts.",
      "5. En cas de ralentissement de l'écoulement, agissez tôt : un bouchon naissant est plus simple à traiter qu'une obstruction installée depuis plusieurs semaines.",
      "Si malgré ces précautions une obstruction persiste, une intervention de débouchage ciblée reste la solution la plus fiable.",
    ],
    relatedServiceSlug: "debouchage-canalisation",
  },
  {
    slug: "reagir-fuite-eau-urgence",
    title: "Fuite d'eau : les bons réflexes en attendant l'intervention",
    summary:
      "Les gestes à adopter dès la découverte d'une fuite pour limiter les dégâts avant l'arrivée du plombier.",
    body: [
      "Face à une fuite d'eau, les premières minutes comptent pour limiter les dégâts matériels.",
      "Coupez l'arrivée d'eau générale si la fuite est importante ou si son origine n'est pas identifiée.",
      "Coupez également l'alimentation électrique de la zone concernée si l'eau s'approche d'installations électriques.",
      "Éloignez les objets sensibles à l'humidité (meubles, appareils électroniques, documents) de la zone touchée.",
      "Prenez des photos de la zone avant nettoyage : elles pourront être utiles pour une éventuelle déclaration à votre assurance.",
      "Contactez-nous pour une recherche de fuite si l'origine n'est pas visible à l'œil nu.",
    ],
    relatedServiceSlug: "recherche-de-fuite",
  },
  {
    slug: "preparer-demande-devis",
    title: "Bien préparer sa demande de devis plomberie",
    summary:
      "Les informations à rassembler pour obtenir une estimation adaptée à votre situation le plus rapidement possible.",
    body: [
      "Un devis précis repose sur une description claire de votre besoin. Voici ce qu'il est utile de rassembler avant de nous contacter.",
      "Le type d'intervention souhaité : débouchage, recherche de fuite, installation, entretien...",
      "La pièce et l'équipement concernés (évier de cuisine, douche, WC, chauffe-eau...).",
      "Depuis quand le problème est constaté et s'il s'aggrave.",
      "Votre commune, pour vérifier qu'elle fait bien partie de notre zone d'intervention.",
      "Une photo si la situation le permet : elle aide à anticiper le matériel nécessaire.",
    ],
  },
  {
    slug: "entretien-preventif-canalisations",
    title: "Entretien préventif : les bons réflexes toute l'année",
    summary:
      "Pourquoi et comment entretenir régulièrement vos canalisations et votre chauffe-eau pour éviter les pannes.",
    body: [
      "Un entretien régulier permet d'éviter une grande partie des pannes de plomberie les plus fréquentes.",
      "Surveillez la vitesse d'écoulement de vos éviers et douches : un ralentissement progressif est souvent le premier signe d'un dépôt qui se forme.",
      "Faites vérifier périodiquement votre chauffe-eau, notamment son groupe de sécurité et son anode si applicable.",
      "Un entretien préventif planifié permet aussi de repérer une usure ou une fragilité avant qu'elle ne provoque une fuite.",
    ],
    relatedServiceSlug: undefined,
  },
];
