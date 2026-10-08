import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { ZoneStrip } from "@/components/marketing/ZoneStrip";
import { IllustrationImage } from "@/components/ui/IllustrationImage";
import { illustrations } from "@/lib/content/illustrations";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Dépannage plomberie Montpellier, Lattes, Pérols",
  description:
    "Fuite d'eau, WC ou évier bouché, bouchon qui revient ? Débouchage, hydrocurage, caméra, recherche de fuite : on règle la cause, de Montpellier à La Grande-Motte.",
  alternates: { canonical: "/depannage" },
};

export default function DepannagePage() {
  return (
    <>
      <Hero
        eyebrow="Dépannage"
        title="Fuite et dépannage autour de Montpellier : on règle le problème à la source"
        description="Un évier bouché ne se traite pas comme une fuite encastrée. Du simple débouchage à l'inspection caméra, on choisit la méthode qui règle vraiment votre problème."
        aside={
          <IllustrationImage
            image={illustrations.dripTap}
            className="aspect-[4/3] rounded-2xl border border-white/10"
            sizes="(min-width: 1024px) 20rem, 100vw"
            priority
          />
        }
      />
      <ZoneStrip />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Quel dépannage pour votre situation ?" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </>
  );
}
