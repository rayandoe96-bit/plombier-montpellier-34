import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { ZoneStrip } from "@/components/marketing/ZoneStrip";
import { IllustrationImage } from "@/components/ui/IllustrationImage";
import { illustrations } from "@/lib/content/illustrations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { PriceFactors } from "@/components/marketing/PriceFactors";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { bathroomHighlights } from "@/lib/content/services";
import { businessInfo } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Création de salle de bains Montpellier, Lattes",
  description:
    "Créer ou rénover votre salle de bains à Montpellier et alentours : arrivées d'eau, évacuations, douche, baignoire, WC, posés par un seul artisan. Demandez un devis.",
  alternates: { canonical: "/salle-de-bains" },
};

const projectSteps = [
  "Vous décrivez votre projet : la pièce, ce que vous voulez garder, ce que vous voulez changer.",
  "Visite sur place pour voir l'existant, les arrivées d'eau et les évacuations.",
  "Devis détaillé, poste par poste, pour savoir exactement ce qui est prévu.",
  "Travaux de plomberie et pose des équipements, puis vérification de chaque point d'eau.",
];

export default function SalleDeBainsPage() {
  return (
    <>
      <Hero
        eyebrow="Création de salle de bains"
        title="Création de salle de bains autour de Montpellier, par un seul artisan"
        description={`Créer une salle de bains ou refaire l'ancienne : ${businessInfo.ownerName} s'occupe des arrivées d'eau, des évacuations et de la pose de vos équipements, de Montpellier à La Grande-Motte.`}
        aside={
          <IllustrationImage
            image={illustrations.bathroom}
            className="aspect-[4/3] rounded-2xl border border-white/10"
            sizes="(min-width: 1024px) 20rem, 100vw"
            priority
          />
        }
      />
      <ZoneStrip />

      <Container className="py-10 sm:py-14">
        <SectionHeading
          eyebrow="Ce qu'on fait"
          title="Création, rénovation ou simple remplacement"
          description="Une pièce à transformer en salle de bains, une baignoire à remplacer par une douche, ou tout à refaire : on part de votre besoin, pas d'un catalogue."
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bathroomHighlights.map((item) => (
            <li key={item} className="flex gap-2.5 rounded-xl border border-line bg-surface p-4 text-sm text-muted">
              <span aria-hidden="true" className="font-bold text-copper">✓</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Juste un WC, un lavabo ou un chauffe-eau à changer ? Voir l&apos;
          <Link href="/installation" className="font-semibold text-brand-600 underline">
            installation de sanitaires et de chauffe-eau
          </Link>
          .
        </p>
      </Container>

      <Container className="grid items-center gap-10 py-8 sm:py-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Déroulé" title="Votre projet, étape par étape" />
          <div className="mt-6">
            <ProcessSteps steps={projectSteps} />
          </div>
        </div>
        <IllustrationImage image={illustrations.tiledShower} className="aspect-[4/3] rounded-2xl" />
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading eyebrow="Tarif" title="Ce qui fait varier le prix" />
        <div className="mt-6 max-w-md">
          <PriceFactors
            factors={[
              "Création d'une pièce neuve ou rénovation de l'existant",
              "Équipements choisis (douche, baignoire, meuble vasque, WC)",
              "Déplacement ou non des arrivées d'eau et des évacuations",
              "Surface et accessibilité de la pièce",
            ]}
          />
        </div>
      </Container>

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl border border-line bg-brand-50/50 px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-foreground">Vous avez un projet de salle de bains ?</h2>
          <p className="mt-2 text-sm text-muted">
            Décrivez-le en quelques lignes, ou appelez pour en parler directement avec l&apos;artisan.
          </p>
          <CtaGroup className="mt-5 justify-center" quoteLabel="Parler de mon projet" />
        </div>
      </Container>
    </>
  );
}
