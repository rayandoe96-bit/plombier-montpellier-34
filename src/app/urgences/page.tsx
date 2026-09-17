import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { businessInfo, zones } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Urgence plomberie",
  description:
    "Fuite d'eau, canalisation bouchée, panne sanitaire : intervention d'urgence à Montpellier et alentours.",
};

const urgentSituations = [
  "Fuite d'eau active ou dégât des eaux en cours",
  "Canalisation totalement bouchée (WC, évier, douche)",
  "Panne empêchant l'usage normal d'un sanitaire",
];

export default function UrgencesPage() {
  return (
    <>
      <Hero
        tone="urgent"
        eyebrow="Urgence plomberie"
        title={`Intervention d'urgence ${businessInfo.emergencyResponseTime}`}
        description="En cas de fuite active ou de panne bloquante, contactez-nous directement par téléphone : c'est le moyen le plus rapide d'être pris en charge."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Quand nous appeler" title="Situations considérées comme urgentes" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {urgentSituations.map((situation) => (
            <li key={situation} className="rounded-xl border border-black/10 p-4 text-sm text-foreground/80">
              {situation}
            </li>
          ))}
        </ul>
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading
          eyebrow="En attendant l'intervention"
          title="Les premiers gestes à adopter"
          description="Coupez l'arrivée d'eau générale si la fuite est importante, éloignez les objets sensibles à l'humidité, et coupez l'électricité de la zone si l'eau s'en approche."
        />
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading eyebrow="Zone couverte" title="Intervention d'urgence sur ces communes" />
        <div className="mt-4 flex flex-wrap gap-2">
          {zones.map((zone) => (
            <span key={zone.name} className="rounded-full border border-black/10 px-3 py-1 text-sm text-foreground/80">
              {zone.name}
            </span>
          ))}
        </div>
      </Container>

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl bg-urgent-500 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">Situation urgente ?</h2>
          <p className="mt-2 text-white/90">Le plus rapide reste l&apos;appel téléphonique direct.</p>
          <CtaGroup className="mt-6 justify-center" variant="dark" callLabel="Appeler en urgence" />
        </div>
      </Container>
    </>
  );
}
