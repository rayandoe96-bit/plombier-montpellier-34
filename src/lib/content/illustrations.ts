// Generic stock photos (CC0, rawpixel) used until the client provides real job photos.
// They are always labelled "Photo d'illustration" so they are never mistaken for the artisan's own work.
export interface Illustration {
  src: string;
  width: number;
  height: number;
  alt: string;
  source: string;
}

export const illustrations = {
  tools: {
    src: "/images/outils-plomberie.webp",
    width: 1024,
    height: 683,
    alt: "Clés à molette et coupe-tube posés sur un carrelage",
    source: "https://www.rawpixel.com/image/5904346/photo-image-public-domain-kitchen-free",
  },
  radiator: {
    src: "/images/radiateur.webp",
    width: 1024,
    height: 680,
    alt: "Radiateur à panneaux avec robinet thermostatique",
    source: "https://www.rawpixel.com/image/5919893/photo-image-public-domain-technology-free",
  },
  bathMixer: {
    src: "/images/mitigeur-baignoire.webp",
    width: 1024,
    height: 576,
    alt: "Mitigeur thermostatique chromé au-dessus d'une baignoire",
    source: "https://www.rawpixel.com/image/5911850/image-public-domain-house-home",
  },
  waterSupply: {
    src: "/images/arrivees-eau.webp",
    width: 1024,
    height: 685,
    alt: "Arrivées d'eau apparentes sur un mur carrelé blanc",
    source: "https://www.rawpixel.com/image/3305350/free-photo-image-plumbing-faucet-brick",
  },
  workbench: {
    src: "/images/etabli-entretien.webp",
    width: 1024,
    height: 680,
    alt: "Établi avec outillage et pièces de plomberie",
    source: "https://www.rawpixel.com/image/3337213/free-photo-image-toolkit-allan-key-brazil",
  },
  copperFittings: {
    src: "/images/raccords-cuivre.webp",
    width: 1024,
    height: 683,
    alt: "Raccords coudés en cuivre",
    source: "https://www.rawpixel.com/image/5947474/free-public-domain-cc0-photo",
  },
} satisfies Record<string, Illustration>;
