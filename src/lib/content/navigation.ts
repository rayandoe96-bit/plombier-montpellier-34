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

export const footerLegalNav: NavItem[] = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/confidentialite", label: "Confidentialité" },
];
