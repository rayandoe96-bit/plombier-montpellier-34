export interface NavItem {
  href: string;
  label: string;
}

export const primaryNav: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/urgences", label: "Urgences" },
  { href: "/depannage", label: "Dépannage" },
  { href: "/installation", label: "Installation" },
  { href: "/entretien", label: "Entretien" },
  { href: "/zone-intervention", label: "Zone d'intervention" },
  { href: "/conseils", label: "Conseils" },
  { href: "/devis", label: "Devis" },
  { href: "/contact", label: "Contact" },
];

// Desktop header keeps the short list; the full list lives in the mobile menu and the footer.
export const headerNav: NavItem[] = [
  { href: "/urgences", label: "Urgences" },
  { href: "/depannage", label: "Dépannage" },
  { href: "/installation", label: "Installation" },
  { href: "/zone-intervention", label: "Zone" },
  { href: "/contact", label: "Contact" },
];

export const footerLegalNav: NavItem[] = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
];
