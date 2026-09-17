import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/marketing/Breadcrumbs";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { adviceArticles } from "@/lib/content/advice";
import { services } from "@/lib/content/services";

export function generateStaticParams() {
  return adviceArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/conseils/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = adviceArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function AdviceArticlePage({ params }: PageProps<"/conseils/[slug]">) {
  const { slug } = await params;
  const article = adviceArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  const relatedService = services.find((service) => service.slug === article.relatedServiceSlug);

  return (
    <Container className="py-10 sm:py-14">
      <Breadcrumbs
        items={[
          { href: "/", label: "Accueil" },
          { href: "/conseils", label: "Conseils" },
          { href: `/conseils/${article.slug}`, label: article.title },
        ]}
      />

      <article className="mt-6 max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {article.title}
        </h1>
        <p className="mt-3 text-base text-foreground/70">{article.summary}</p>

        <div className="mt-8 space-y-4">
          {article.body.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-foreground/80">
              {paragraph}
            </p>
          ))}
        </div>

        {relatedService ? (
          <Link
            href={`/depannage/${relatedService.slug}`}
            className="mt-8 block rounded-xl border border-black/10 p-5 hover:border-brand-500"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
              Service associé
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground">{relatedService.title}</p>
          </Link>
        ) : null}

        <div className="mt-10 rounded-2xl border border-black/10 bg-brand-50/50 px-6 py-8 text-center">
          <h2 className="text-lg font-bold text-foreground">Un besoin similaire ?</h2>
          <CtaGroup className="mt-4 justify-center" />
        </div>
      </article>
    </Container>
  );
}
