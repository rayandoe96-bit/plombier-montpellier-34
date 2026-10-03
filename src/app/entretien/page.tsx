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
    "Entretien préventif des canalisations, des sanitaires et du chauffe-eau à Lattes, Montpellier et alentours, pour éviter les pannes et les dégâts des eaux.",
};

const preventiveArticle = adviceArticles.find(
  (article) => article.slug === "entretien-preventif-canalisations"
);

export default function EntretienPage() {
  return (
    <>
      <Hero
        eyebrow="Entretien"
        title="Faites vérifier avant que ça lâche"
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
