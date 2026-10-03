import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { IllustrationImage } from "@/components/ui/IllustrationImage";
import { illustrations } from "@/lib/content/illustrations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { entretienHighlights } from "@/lib/content/services";
import { adviceArticles } from "@/lib/content/advice";

export const metadata: Metadata = {
  title: "Entretien plomberie et chauffe-eau à Lattes",
  description:
    "Une fuite ou un chauffe-eau en panne prévient rarement. Faites contrôler canalisations, sanitaires et chauffe-eau à Lattes avant le dégât des eaux.",
  alternates: { canonical: "/entretien" },
};

const warningSigns = [
  "L'eau s'écoule de plus en plus lentement dans l'évier ou la douche",
  "Des odeurs remontent des canalisations",
  "Des traces d'humidité sous l'évier ou au pied des WC",
  "L'eau chaude met plus de temps à arriver, ou reste tiède",
  "Le groupe de sécurité du chauffe-eau goutte en permanence",
  "La facture d'eau augmente sans raison",
];

const preventiveArticle = adviceArticles.find(
  (article) => article.slug === "entretien-preventif-canalisations"
);

export default function EntretienPage() {
  return (
    <>
      <Hero
        eyebrow="Entretien"
        title="Entretien plomberie à Lattes : faites vérifier avant que ça lâche"
        description="Une fuite ou un chauffe-eau en panne arrive rarement sans prévenir. Un contrôle régulier repère l'usure à temps, avant le dégât des eaux ou la douche froide."
        aside={
          <IllustrationImage
            image={illustrations.workbench}
            className="aspect-[4/3] rounded-2xl border border-white/10"
            sizes="(min-width: 1024px) 20rem, 100vw"
            priority
          />
        }
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Nos prestations" title="Ce qu'on vérifie" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {entretienHighlights.map((item) => (
            <li key={item} className="rounded-xl border border-line p-4 text-sm text-muted">
              {item}
            </li>
          ))}
        </ul>
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading
          eyebrow="Les signes à surveiller"
          title="6 signes qu'il est temps de faire vérifier"
          description="Pris tôt, ces signes se règlent souvent avec un simple contrôle. Laissés de côté, ils finissent en fuite, en bouchon ou en douche froide."
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {warningSigns.map((sign) => (
            <li key={sign} className="flex gap-2.5 rounded-xl border border-line bg-surface p-4 text-sm text-muted">
              <span aria-hidden="true" className="font-bold text-copper">!</span>
              {sign}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted">
          Le problème est déjà là ? Voir le{" "}
          <Link href="/depannage" className="font-semibold text-brand-600 underline">
            dépannage
          </Link>
          . Chauffe-eau trop vieux pour être réparé ? Voir l&apos;
          <Link href="/installation" className="font-semibold text-brand-600 underline">
            installation de chauffe-eau
          </Link>
          .
        </p>
      </Container>

      {preventiveArticle ? (
        <Container className="py-8 sm:py-12">
          <Link
            href={`/conseils/${preventiveArticle.slug}`}
            className="block rounded-xl border border-line p-5 hover:border-brand-500"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Conseil</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{preventiveArticle.title}</p>
          </Link>
        </Container>
      ) : null}

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl border border-line bg-brand-50/50 px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-foreground">On planifie un contrôle ?</h2>
          <CtaGroup className="mt-5 justify-center" />
        </div>
      </Container>
    </>
  );
}
