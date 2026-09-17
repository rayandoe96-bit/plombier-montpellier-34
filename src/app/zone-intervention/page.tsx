import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ZoneSection } from "@/components/marketing/ZoneSection";
import { zones } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Zone d'intervention",
  description:
    "Nos zones d'intervention : Montpellier, Lattes, Carnon, Palavas-les-Flots, La Grande-Motte.",
};

export default function ZoneInterventionPage() {
  return (
    <>
      <Hero
        eyebrow="Zone d'intervention"
        title="Où intervenons-nous ?"
        description="Nous intervenons sur Montpellier et les communes proches du littoral. Le détail par commune est précisé ci-dessous."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Nos communes d'intervention" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {zones.map((zone) => (
            <ZoneSection key={zone.name} zone={zone} />
          ))}
        </div>
      </Container>
    </>
  );
}
