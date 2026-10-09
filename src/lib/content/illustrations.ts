// Site photos: free-licence stock (CC0 rawpixel, Unsplash licence) until the client provides real job photos.
// No "Photo d'illustration" badge any more (client request, 2026-10-09).
export interface Illustration {
  src: string;
  width: number;
  height: number;
  alt: string;
  source: string;
  /** CSS object-position, to keep the subject in frame when a portrait photo is cropped to landscape. */
  position?: string;
}

export const illustrations = {
  waterHeater: {
    src: "/images/chauffe-eau-manometre.webp",
    width: 1024,
    height: 683,
    alt: "Manomètre en laiton sur une cuve d'eau chaude en cuivre",
    source: "https://www.rawpixel.com/image/6040961/brewery-boiler-free-public-domain-cc0-photo",
  },
  radiator: {
    src: "/images/radiateur-panneau.webp",
    width: 1024,
    height: 680,
    alt: "Radiateur à panneaux avec robinet thermostatique",
    source: "https://www.rawpixel.com/image/5919893/photo-image-public-domain-technology-free",
  },
  thermostaticValve: {
    src: "/images/robinet-thermostatique.webp",
    width: 1024,
    height: 678,
    alt: "Tête thermostatique de radiateur, graduée de 1 à 5",
    source: "https://www.rawpixel.com/image/6030754/photo-image-public-domain-free",
  },
  towelRadiator: {
    src: "/images/seche-serviettes.webp",
    width: 1024,
    height: 680,
    alt: "Salle de bains claire avec sèche-serviettes chromé, lavabo et baignoire",
    source: "https://www.rawpixel.com/image/5921891/photo-image-light-public-domain-shadow",
  },
  showerColumn: {
    src: "/images/douchette-chromee.webp",
    width: 1024,
    height: 683,
    alt: "Douchette chromée sur barre de douche, carrelage blanc",
    source: "https://www.rawpixel.com/image/5925137/photo-image-public-domain-house-home",
  },
  bathroom: {
    src: "/images/salle-de-bains-ilot.webp",
    width: 1024,
    height: 681,
    alt: "Salle de bains avec baignoire îlot et douche vitrée",
    source: "https://www.rawpixel.com/image/5922230/photo-image-public-domain-minimal-house",
  },
  bathroomTub: {
    src: "/images/salle-de-bains-baignoire.webp",
    width: 1024,
    height: 932,
    alt: "Salle de bains moderne avec baignoire îlot, douche à l'italienne et carrelage gris",
    source: "https://www.rawpixel.com/image/6042774/photo-image-public-domain-house-home",
  },
  pipeNetwork: {
    src: "/images/tuyauteries-cuivre.webp",
    width: 1600,
    height: 1067,
    alt: "Réseau de tuyauteries en cuivre et en inox",
    source: "https://unsplash.com/photos/P8CGvIQB1uo",
  },
  plantRoom: {
    src: "/images/chaufferie.webp",
    width: 1600,
    height: 999,
    alt: "Canalisations calorifugées dans une chaufferie",
    source: "https://unsplash.com/photos/WB9HyqF8lKA",
  },
  pipeOutflow: {
    src: "/images/tuyau-ecoulement.webp",
    width: 1600,
    height: 1067,
    alt: "Eau s'écoulant d'un tuyau d'évacuation",
    source: "https://unsplash.com/photos/4QF8yL5KsNM",
  },
  sinkDrain: {
    src: "/images/bonde-evier.webp",
    width: 1024,
    height: 768,
    alt: "Bonde d'évacuation en inox vue de près",
    source: "https://www.rawpixel.com/image/5955796/free-public-domain-cc0-photo",
  },
  waterJet: {
    src: "/images/jet-eau.webp",
    width: 1024,
    height: 768,
    alt: "Jet d'eau sortant d'un tuyau",
    source: "https://www.rawpixel.com/image/5961453/free-public-domain-cc0-photo",
  },
  pipeCamera: {
    src: "/images/camera-canalisation.webp",
    width: 1024,
    height: 681,
    alt: "Robot caméra d'inspection de canalisation posé près d'un regard",
    source: "https://www.rawpixel.com/image/9676442/drainage-pipe-inspection",
  },
  pipeLeak: {
    src: "/images/fuite-tuyau.webp",
    width: 1024,
    height: 683,
    alt: "Eau s'échappant d'un raccord de tuyau",
    source: "https://www.rawpixel.com/image/5943308/free-public-domain-cc0-photo",
  },
} satisfies Record<string, Illustration>;

/** Illustration shown for each troubleshooting service, keyed by service slug. */
export const serviceIllustrations: Record<string, Illustration> = {
  "debouchage-canalisation": illustrations.sinkDrain,
  "haute-pression-hydrocurage": illustrations.waterJet,
  "curage-inspection-camera": illustrations.pipeCamera,
  "recherche-de-fuite": illustrations.pipeLeak,
};
