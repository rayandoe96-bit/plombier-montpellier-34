import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZoneSection } from "@/components/marketing/ZoneSection";
import { GoogleMap } from "@/components/marketing/GoogleMap";
import { businessInfo, zones } from "@/lib/content/business";
import { getGooglePlace, getMapEmbedUrl } from "@/lib/google/place";

export const metadata: Metadata = {
  title: "Plombier Montpellier, Lattes, Pérols, Carnon",
  description:
    "Plombier chauffagiste basé à Lattes : on intervient à Montpellier, Pérols, Carnon, Palavas-les-Flots et La Grande-Motte. Votre commune n'y est pas ? Appelez.",
  alternates: { canonical: "/zone-intervention" },
};

const zoneServices = [
  { href: "/depannage", label: "Fuite et dépannage", detail: "Fuite d'eau, WC ou évier bouché, bouchon qui revient" },
  { href: "/salle-de-bains", label: "Création de salle de bains", detail: "Création, rénovation, baignoire remplacée par une douche" },
  { href: "/installation", label: "Chauffe-eau, chauffage, sanitaires", detail: "Pose et remplacement d'équipements" },
  { href: "/entretien", label: "Entretien", detail: "Contrôle des canalisations, des sanitaires et du chauffe-eau" },
];

export default async function ZoneInterventionPage() {
  const { mapsUrl } = await getGooglePlace();

  return (
    <>
      <Hero
        eyebrow="Zone d'intervention"
        title="Plombier à Montpellier et alentours : où on intervient"
        description="Basé à Lattes, on intervient à Montpellier et sur le littoral proche. Votre commune n'est pas listée ? Appelez, on vous répond tout de suite."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Les communes où on intervient" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {zones.map((zone) => (
            <ZoneSection key={zone.name} zone={zone} />
          ))}
        </div>
        <div className="mt-8">
          <GoogleMap
            embedUrl={getMapEmbedUrl()}
            mapsUrl={mapsUrl}
            title={`${businessInfo.tradeName} sur Google Maps`}
          />
        </div>
      </Container>

      <Container className="pb-16 pt-4 sm:pb-20">
        <SectionHeading
          title="Ce qu'on fait dans ces communes"
          description="Où que vous soyez dans la zone, c'est le même artisan qui se déplace. Seule exception : pas d'intervention d'urgence à Montpellier."
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {zoneServices.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="block rounded-xl border border-line p-4 text-sm hover:border-brand-500"
              >
                <span className="font-semibold text-foreground">{service.label}</span>
                <span className="mt-1 block text-muted">{service.detail}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
