import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { TrustNotice } from "@/components/marketing/TrustNotice";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { services } from "@/lib/content/services";
import { zones } from "@/lib/content/business";
import { adviceArticles } from "@/lib/content/advice";
import { generalFaq } from "@/lib/content/faq";
import { businessInfo } from "@/lib/content/business";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Plomberie & dépannage sanitaire"
        title="Un problème de plomberie à Montpellier ? On s'en occupe."
        description={`Débouchage, hydrocurage, recherche de fuite, inspection caméra : intervention en urgence ${businessInfo.emergencyResponseTime}, à partir de ${businessInfo.priceFrom} €.`}
      />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-black/10 p-5">
            <h2 className="text-base font-semibold text-foreground">Vous êtes propriétaire</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Un diagnostic clair avant toute intervention, pour décider en connaissance de cause.
            </p>
          </div>
          <div className="rounded-xl border border-black/10 p-5">
            <h2 className="text-base font-semibold text-foreground">Vous êtes locataire</h2>
            <p className="mt-2 text-sm text-foreground/70">
              Une intervention rapide et un compte-rendu utile à transmettre à votre bailleur.
            </p>
          </div>
        </div>
      </Container>

      <Container className="py-4 sm:py-8">
        <SectionHeading
          eyebrow="Nos interventions"
          title="Trois niveaux d'intervention selon votre besoin"
          description="Du débouchage classique à l'inspection caméra, chaque service répond à une situation précise."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading eyebrow="Zone d'intervention" title="Où intervenons-nous ?" />
        <div className="mt-4 flex flex-wrap gap-2">
          {zones.map((zone) => (
            <span
              key={zone.name}
              className="rounded-full border border-black/10 px-3 py-1 text-sm text-foreground/80"
            >
              {zone.name}
            </span>
          ))}
        </div>
        <Link href="/zone-intervention" className="mt-3 inline-block text-sm font-semibold text-brand-600">
          Voir le détail par commune →
        </Link>
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading eyebrow="Conseils" title="Nos derniers conseils pratiques" />
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {adviceArticles.slice(0, 3).map((article) => (
            <Link
              key={article.slug}
              href={`/conseils/${article.slug}`}
              className="flex flex-col gap-2 rounded-xl border border-black/10 p-5 hover:border-brand-500"
            >
              <h3 className="text-sm font-semibold text-foreground">{article.title}</h3>
              <p className="text-sm text-foreground/70">{article.summary}</p>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="py-8 sm:py-12">
        <TrustNotice />
      </Container>

      <Container className="py-8 sm:py-12">
        <SectionHeading eyebrow="Questions fréquentes" title="Ce que l'on nous demande le plus" />
        <div className="mt-6">
          <FaqAccordion items={generalFaq} />
        </div>
      </Container>

      <Container className="pb-16 pt-4 sm:pb-20">
        <div className="rounded-2xl bg-brand-500 px-6 py-10 text-center text-white sm:px-10">
          <h2 className="text-2xl font-bold">Besoin d&apos;un plombier maintenant ?</h2>
          <p className="mt-2 text-white/90">
            Urgence ou intervention planifiée, contactez-nous par téléphone ou par devis.
          </p>
          <CtaGroup className="mt-6 justify-center" variant="dark" />
        </div>
      </Container>
    </>
  );
}
