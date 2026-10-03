import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZoneSection } from "@/components/marketing/ZoneSection";
import { zones } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Zone d'intervention : Lattes, Montpellier et le littoral",
  description:
    "Plombier chauffagiste basé à Lattes, intervenant à Montpellier, Carnon, Palavas-les-Flots et La Grande-Motte. Vérifiez votre commune.",
};

export default function ZoneInterventionPage() {
  return (
    <>
      <Hero
        eyebrow="Zone d'intervention"
        title="Lattes et ses alentours"
        description="Basé à Lattes, on intervient à Montpellier et sur le littoral proche. Votre commune n'est pas listée ? Appelez, on vous répond tout de suite."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Les communes où on intervient" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {zones.map((zone) => (
            <ZoneSection key={zone.name} zone={zone} />
          ))}
        </div>
      </Container>
    </>
  );
}
