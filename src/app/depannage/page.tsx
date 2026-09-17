import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Dépannage plomberie",
  description:
    "Débouchage, hydrocurage, inspection caméra, recherche de fuite : nos services de dépannage plomberie à Montpellier.",
};

export default function DepannagePage() {
  return (
    <>
      <Hero
        eyebrow="Dépannage"
        title="Un service de dépannage adapté à chaque situation"
        description="Du débouchage simple à l'inspection caméra, chaque intervention correspond à un niveau de besoin précis."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Nos services de dépannage" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </>
  );
}
