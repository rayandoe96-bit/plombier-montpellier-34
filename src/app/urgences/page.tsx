import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { businessInfo, zones } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";

export const metadata: Metadata = {
  title: "Urgence plombier à Lattes : fuite, WC bouché",
  description: `L'eau coule, les WC débordent ? Appelez le ${businessInfo.phone} : l'artisan vous dit quoi faire tout de suite et quand il peut venir. Lattes et alentours.`,
  alternates: { canonical: "/urgences" },
};

const urgentSituations = [
  {
    label: "Fuite d'eau active ou dégât des eaux en cours",
    href: "/depannage/recherche-de-fuite",
    linkLabel: "Recherche de fuite",
  },
  {
    label: "Canalisation totalement bouchée : WC, évier, douche",
    href: "/depannage/debouchage-canalisation",
    linkLabel: "Débouchage",
  },
  {
    label: "Bouchon qui revient malgré les débouchages",
    href: "/depannage/haute-pression-hydrocurage",
    linkLabel: "Hydrocurage",
  },
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
            : `Urgence plomberie à ${businessInfo.city} ? Appelez directement`
        }
        description={`L'eau coule, les WC débordent ? Appelez le ${businessInfo.phone} : vous parlez directement à l'artisan, qui vous dit quoi faire tout de suite et quand il peut venir. Du lundi au samedi, de 8h à 20h.`}
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Quand nous appeler" title="Quand appeler sans attendre" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {urgentSituations.map((situation) => (
            <li key={situation.href} className="rounded-xl border border-line p-4 text-sm text-muted">
              {situation.label}
              <Link href={situation.href} className="mt-2 block font-semibold text-brand-600 underline">
                {situation.linkLabel} →
              </Link>
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
        <p className="mt-4 text-sm text-muted">
          Le détail, avec la photo à prendre pour votre assurance :{" "}
          <Link href="/conseils/reagir-fuite-eau-urgence" className="font-semibold text-brand-600 underline">
            les bons réflexes en cas de fuite d&apos;eau
          </Link>
          .
        </p>
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
