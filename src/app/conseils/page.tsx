import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { adviceArticles } from "@/lib/content/advice";

export const metadata: Metadata = {
  title: "Conseils plomberie",
  description: "Conseils pratiques pour prévenir les pannes et bien préparer vos demandes d'intervention.",
};

export default function ConseilsPage() {
  return (
    <>
      <Hero
        eyebrow="Conseils"
        title="Conseils pratiques de plomberie"
        description="Des repères simples pour prévenir les pannes courantes et savoir réagir en cas de problème."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Tous les articles" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {adviceArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/conseils/${article.slug}`}
              className="flex flex-col gap-2 rounded-xl border border-black/10 p-5 hover:border-brand-500"
            >
              <h2 className="text-base font-semibold text-foreground">{article.title}</h2>
              <p className="text-sm text-foreground/70">{article.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
