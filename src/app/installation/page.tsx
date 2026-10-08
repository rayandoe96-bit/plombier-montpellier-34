import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { ZoneStrip } from "@/components/marketing/ZoneStrip";
import { IllustrationImage } from "@/components/ui/IllustrationImage";
import { illustrations } from "@/lib/content/illustrations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceFactors } from "@/components/marketing/PriceFactors";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { installationHighlights } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Chauffe-eau, chauffage, sanitaires Montpellier",
  description:
    "Chauffe-eau à changer, chauffage, WC, lavabo, douche, robinetterie : pose et remplacement à Montpellier et alentours, faits proprement. Demandez votre devis.",
  alternates: { canonical: "/installation" },
};

export default function InstallationPage() {
  return (
    <>
      <Hero
        eyebrow="Installation"
        title="Chauffe-eau, chauffage, sanitaires : bien posés dès le départ"
        description="Un équipement neuf mal posé, c'est une panne qui attend son heure. On choisit avec vous ce qui convient à votre logement, puis on l'installe proprement."
        aside={
          <IllustrationImage
            image={illustrations.copperFittings}
            className="aspect-[4/3] rounded-2xl border border-white/10"
            sizes="(min-width: 1024px) 20rem, 100vw"
            priority
          />
        }
      />
      <ZoneStrip />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Ce qu'on peut installer chez vous" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {installationHighlights.map((item) => (
            <li key={item} className="rounded-xl border border-line p-4 text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Une salle de bains complète à créer ?{" "}
          <Link href="/salle-de-bains" className="font-semibold text-brand-600 underline">
            Voir la création de salle de bains
          </Link>
          . Marques, références et délais de fourniture sont précisés lors de l&apos;étude de votre demande.
        </p>
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading title="Ce qui influence le prix d'une installation" />
        <div className="mt-6 max-w-md">
          <PriceFactors
            factors={[
              "Type et nombre d'équipements à installer",
              "Configuration existante (remplacement ou création de point d'eau)",
              "Accessibilité de la zone d'installation",
            ]}
          />
        </div>
      </Container>

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl border border-line bg-brand-50/50 px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-foreground">Un équipement à installer ou à remplacer ?</h2>
          <CtaGroup className="mt-5 justify-center" />
        </div>
      </Container>
    </>
  );
}
