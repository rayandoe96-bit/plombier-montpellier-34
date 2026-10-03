import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { adviceArticles } from "@/lib/content/advice";

export const metadata: Metadata = {
  title: "Conseils plomberie",
  description:
    "Conseils de plombier : éviter les bouchons, réagir face à une fuite, entretenir son chauffe-eau, préparer sa demande de devis.",
};

export default function ConseilsPage() {
  return (
    <>
      <Hero
        eyebrow="Conseils"
        title="Conseils de plombier, sans jargon"
        description="Les gestes simples qui évitent la plupart des pannes, et les bons réflexes quand le problème est déjà là."
      />

      <Container className="py-10 sm:py-14">
        <SectionHeading title="Tous les articles" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {adviceArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/conseils/${article.slug}`}
              className="flex flex-col gap-2 rounded-xl border border-line p-5 hover:border-brand-500"
            >
              <h2 className="text-base font-semibold text-foreground">{article.title}</h2>
              <p className="text-sm text-muted">{article.summary}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
