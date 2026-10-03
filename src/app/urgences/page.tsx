import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { businessInfo, zones } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";

export const metadata: Metadata = {
  title: "Urgence plombier à Lattes : fuite d'eau, WC bouché",
  description:
    "Fuite d'eau, dégât des eaux, WC ou canalisation bouchés : appelez votre plombier à Lattes au 06 31 93 45 14. Intervention à Lattes, Montpellier et alentours.",
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
        title={
          isConfirmed(businessInfo.emergencyResponseTime)
            ? `Intervention d'urgence ${businessInfo.emergencyResponseTime}`
            : "Une urgence plomberie ? Appelez directement"
        }
        description={`L'eau coule, les WC débordent ? Appelez le ${businessInfo.phone} : vous parlez directement à l'artisan, qui vous dit quoi faire tout de suite et quand il peut venir. Du lundi au samedi, de 9h à 20h.`}
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Quand nous appeler" title="Quand appeler sans attendre" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {urgentSituations.map((situation) => (
            <li key={situation} className="rounded-xl border border-line p-4 text-sm text-muted">
              {situation}
            </li>
          ))}
        </ul>
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading
          eyebrow="En attendant l'intervention"
          title="Les 3 gestes qui limitent les dégâts"
          description="Coupez l'arrivée d'eau générale si la fuite est importante, éloignez les objets sensibles à l'humidité, et coupez l'électricité de la zone si l'eau s'en approche."
        />
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading eyebrow="Zone couverte" title={`Urgences à ${businessInfo.city} et ses alentours`} />
        <div className="mt-4 flex flex-wrap gap-2">
          {zones.map((zone) => (
            <span key={zone.name} className="rounded-full border border-line px-3 py-1 text-sm text-muted">
              {zone.name}
            </span>
          ))}
        </div>
      </Container>

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl bg-urgent-500 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">Situation urgente ?</h2>
          <p className="mt-2 text-white/90">Chaque minute compte : un appel, et vous savez quoi faire.</p>
          <CtaGroup className="mt-6 justify-center" variant="dark" callLabel="Appeler en urgence" />
        </div>
      </Container>
    </>
  );
}
