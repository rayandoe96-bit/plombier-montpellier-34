// Site photos. Generic pictures are no longer labelled "Photo d'illustration" (client request, 2026-10-09).
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
    src: "/images/chauffe-eau-ariston.webp",
    width: 736,
    height: 981,
    alt: "Chauffe-eau électrique mural avec ses raccordements",
    source: "Client folder ImgSiteDevarenne (2026-10-09)",
    position: "center 60%",
  },
  radiator: {
    src: "/images/radiateur-anthracite.webp",
    width: 675,
    height: 1200,
    alt: "Radiateur vertical anthracite près d'une fenêtre",
    source: "Client folder ImgSiteDevarenne (2026-10-09)",
    position: "75% 45%",
  },
  radiatorTubus: {
    src: "/images/radiateur-tubus.webp",
    width: 623,
    height: 1200,
    alt: "Radiateur vertical noir à colonnes dans un séjour",
    source: "Client folder ImgSiteDevarenne (2026-10-09)",
    position: "center 45%",
  },
  radiatorRadox: {
    src: "/images/radiateur-radox.webp",
    width: 736,
    height: 1472,
    alt: "Radiateur vertical à colonnes dans un salon lumineux",
    source: "Client folder ImgSiteDevarenne (2026-10-09)",
    position: "center 50%",
  },
  showerColumn: {
    src: "/images/colonne-douche-noire.webp",
    width: 567,
    height: 850,
    alt: "Colonne de douche noire mate avec douchette et pommeau",
    source: "Client folder ImgSiteDevarenne (2026-10-09)",
    position: "center 30%",
  },
  bathroom: {
    src: "/images/salle-de-bains-marbre.webp",
    width: 736,
    height: 1308,
    alt: "Salle de bains effet marbre avec douche à l'italienne et meuble vasque",
    source: "Client folder ImgSiteDevarenne (2026-10-09)",
    position: "center 45%",
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
