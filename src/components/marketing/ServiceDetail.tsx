import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { PriceFactors } from "@/components/marketing/PriceFactors";
import { CtaGroup } from "@/components/ui/CtaGroup";
import type { Service } from "@/lib/content/types";
import { adviceArticles } from "@/lib/content/advice";

export function ServiceDetail({ service }: { service: Service }) {
  const relatedArticle = adviceArticles.find(
    (article) => article.relatedServiceSlug === service.slug
  );

  return (
    <>
      <Hero eyebrow={service.level} title={service.title} description={service.need} />

      <Container className="py-10 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Déroulé" title="Comment se déroule l'intervention" />
            <div className="mt-6">
              <ProcessSteps steps={service.process} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Tarif" title="Ce qui influence le prix" />
            <div className="mt-6">
              <PriceFactors factors={service.priceFactors} />
            </div>
          </div>
        </div>
      </Container>

      {relatedArticle ? (
        <Container className="py-8 sm:py-12">
          <Link
            href={`/conseils/${relatedArticle.slug}`}
            className="block rounded-xl border border-black/10 p-5 hover:border-brand-500"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Conseil associé
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{relatedArticle.title}</p>
          </Link>
        </Container>
      ) : null}

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl border border-black/10 bg-brand-50/50 px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-foreground">Besoin de ce service ?</h2>
          <CtaGroup className="mt-5 justify-center" />
        </div>
      </Container>
    </>
  );
}
