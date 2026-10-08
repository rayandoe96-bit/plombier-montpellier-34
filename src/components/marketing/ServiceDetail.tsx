import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessSteps } from "@/components/marketing/ProcessSteps";
import { PriceFactors } from "@/components/marketing/PriceFactors";
import { ZoneStrip } from "@/components/marketing/ZoneStrip";
import { CtaGroup } from "@/components/ui/CtaGroup";
import type { Service } from "@/lib/content/types";
import { adviceArticles } from "@/lib/content/advice";
import { serviceIllustrations } from "@/lib/content/illustrations";
import { IllustrationImage } from "@/components/ui/IllustrationImage";

export function ServiceDetail({ service }: { service: Service }) {
  const relatedArticle = adviceArticles.find(
    (article) => article.relatedServiceSlug === service.slug
  );
  const image = serviceIllustrations[service.slug];

  return (
    <>
      <Hero
        eyebrow={service.level}
        title={service.title}
        description={service.need}
        aside={
          image ? (
            <IllustrationImage
              image={image}
              className="aspect-[4/3] rounded-2xl border border-white/10"
              sizes="(min-width: 1024px) 20rem, 100vw"
              priority
            />
          ) : undefined
        }
      />
      <ZoneStrip />

      <Container className="py-10 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Déroulé" title="Comment ça se passe, étape par étape" />
            <div className="mt-6">
              <ProcessSteps steps={service.process} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Tarif" title="Ce qui fait varier le prix" />
            <div className="mt-6">
              <PriceFactors factors={service.priceFactors} showRepairPrice={service.category === "depannage"} />
            </div>
          </div>
        </div>
      </Container>

      {relatedArticle ? (
        <Container className="py-8 sm:py-12">
          <Link
            href={`/conseils/${relatedArticle.slug}`}
            className="block rounded-xl border border-line p-5 hover:border-brand-500"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Conseil associé
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{relatedArticle.title}</p>
          </Link>
        </Container>
      ) : null}

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl border border-line bg-brand-50/50 px-6 py-8 text-center sm:px-10">
          <h2 className="text-xl font-bold text-foreground">Le problème est chez vous en ce moment ?</h2>
          <p className="mt-2 text-sm text-muted">
            Appelez : vous décrivez la situation, on vous dit quoi faire et quand on peut passer.
          </p>
          <CtaGroup className="mt-5 justify-center" />
        </div>
      </Container>
    </>
  );
}
