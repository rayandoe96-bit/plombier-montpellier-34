import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PriceFactors } from "@/components/marketing/PriceFactors";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { installationHighlights } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Installation plomberie",
  description: "Installation de robinetterie, sanitaires et chauffe-eau à Montpellier.",
};

export default function InstallationPage() {
  return (
    <>
      <Hero
        eyebrow="Installation"
        title="Installation de vos équipements de plomberie"
        description="Robinetterie, sanitaires ou chauffe-eau : une installation posée dans les règles, adaptée à votre logement."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Ce que nous installons" title="Nos prestations d'installation" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {installationHighlights.map((item) => (
            <li key={item} className="rounded-xl border border-black/10 p-4 text-sm text-foreground/80">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-foreground/60">
          Le détail précis de chaque prestation (marques, références, délais de fourniture) est
          confirmé lors de l&apos;étude de votre demande.
        </p>
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading eyebrow="Tarif" title="Ce qui influence le prix d'une installation" />
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
        <div className="rounded-2xl border border-black/10 bg-brand-50/50 px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-foreground">Un projet d&apos;installation ?</h2>
          <CtaGroup className="mt-5 justify-center" />
        </div>
      </Container>
    </>
  );
}
