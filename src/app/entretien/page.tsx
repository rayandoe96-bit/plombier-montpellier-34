import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { entretienHighlights } from "@/lib/content/services";
import { adviceArticles } from "@/lib/content/advice";

export const metadata: Metadata = {
  title: "Entretien plomberie",
  description: "Entretien préventif de vos canalisations et de votre chauffe-eau à Montpellier.",
};

const preventiveArticle = adviceArticles.find(
  (article) => article.slug === "entretien-preventif-canalisations"
);

export default function EntretienPage() {
  return (
    <>
      <Hero
        eyebrow="Entretien"
        title="Un entretien régulier pour éviter les pannes"
        description="Un contrôle préventif permet d'anticiper l'usure et de limiter les interventions d'urgence."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading eyebrow="Nos prestations" title="Ce que couvre notre entretien" />
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {entretienHighlights.map((item) => (
            <li key={item} className="rounded-xl border border-black/10 p-4 text-sm text-foreground/80">
              {item}
            </li>
          ))}
        </ul>
      </Container>

      {preventiveArticle ? (
        <Container className="py-8 sm:py-12">
          <Link
            href={`/conseils/${preventiveArticle.slug}`}
            className="block rounded-xl border border-black/10 p-5 hover:border-brand-500"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Conseil</p>
            <p className="mt-1 text-sm font-semibold text-foreground">{preventiveArticle.title}</p>
          </Link>
        </Container>
      ) : null}

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl border border-black/10 bg-brand-50/50 px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-foreground">Planifier un entretien ?</h2>
          <CtaGroup className="mt-5 justify-center" />
        </div>
      </Container>
    </>
  );
}
