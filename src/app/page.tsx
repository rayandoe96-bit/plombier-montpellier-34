import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Hero } from "@/components/marketing/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { TrustNotice } from "@/components/marketing/TrustNotice";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { OpeningHoursList } from "@/components/ui/OpeningHoursList";
import { services, installationHighlights, entretienHighlights } from "@/lib/content/services";
import { businessInfo, openingHours, zones } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";
import { adviceArticles } from "@/lib/content/advice";
import { generalFaq } from "@/lib/content/faq";

function ArtisanCard() {
  return (
    <aside
      aria-label="Coordonnées"
      className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
    >
      <p className="text-sm font-semibold text-foreground">{businessInfo.ownerName}</p>
      <p className="text-xs text-foreground/60">Artisan plombier chauffagiste</p>
      <PhoneLink className="mt-4 flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand-500 px-4 text-base font-semibold text-white transition-colors hover:bg-brand-600" />
      <p className="mt-4 text-sm text-foreground/80">
        <span aria-hidden="true" className="text-amber-500">★</span>{" "}
        <strong>{businessInfo.googleRating.value} / 5</strong> sur {businessInfo.googleRating.count} avis Google
      </p>
      <p className="mt-1 text-sm text-foreground/70">{businessInfo.address}</p>
      <OpeningHoursList slots={openingHours} className="mt-4 -mx-2" />
    </aside>
  );
}

const proofs = [
  { value: `Depuis ${businessInfo.foundingYear}`, label: "Entreprise locale" },
  {
    value: `${businessInfo.googleRating.value} ★`,
    label: `${businessInfo.googleRating.count} avis Google`,
  },
  { value: businessInfo.city, label: businessInfo.streetAddress },
  { value: "Lun – sam", label: "9h – 20h" },
];

const otherServices = [
  {
    href: "/installation",
    title: "Installation",
    description: "Chauffe-eau, robinetterie, sanitaires : pose et remplacement.",
    items: installationHighlights,
  },
  {
    href: "/entretien",
    title: "Entretien",
    description: "Prévenir les pannes plutôt que les subir.",
    items: entretienHighlights,
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow={`Plomberie · Chauffage · ${businessInfo.city}`}
        title={`Plombier chauffagiste à ${businessInfo.city}`}
        description={`${businessInfo.ownerName} intervient depuis ${businessInfo.foundingYear} à ${businessInfo.city}, Montpellier et sur le littoral : dépannage, recherche de fuite, chauffe-eau et installations sanitaires.`}
        aside={<ArtisanCard />}
      />

      <section aria-label="En bref" className="border-b border-black/5 bg-white">
        <Container>
          <ul className="grid grid-cols-2 gap-px py-4 sm:grid-cols-4">
            {proofs.map((proof) => (
              <li key={proof.value} className="px-2 py-2 text-center">
                <p className="text-base font-bold text-brand-700">{proof.value}</p>
                <p className="text-xs text-foreground/65">{proof.label}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Container className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="Dépannage"
          title="Une panne, une fuite, un bouchon ?"
          description="Du débouchage classique à l'inspection caméra, chaque intervention répond à une situation précise."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>

      <Container className="py-4 sm:py-8">
        <SectionHeading eyebrow="Au-delà du dépannage" title="Installation et entretien" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {otherServices.map((block) => (
            <Link
              key={block.href}
              href={block.href}
              className="flex flex-col gap-3 rounded-xl border border-black/10 p-5 transition-colors hover:border-brand-500 hover:bg-brand-50/40"
            >
              <h3 className="text-base font-semibold text-foreground">{block.title}</h3>
              <p className="text-sm text-foreground/70">{block.description}</p>
              <ul className="space-y-1 text-sm text-foreground/80">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-brand-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <span className="mt-auto text-sm font-semibold text-brand-600">Voir le détail →</span>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="py-8 sm:py-12">
        <div className="grid gap-8 rounded-2xl bg-brand-50/60 p-6 sm:p-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Votre artisan"
              title={`Un plombier installé à ${businessInfo.city}`}
              description={`${businessInfo.tradeName} est une entreprise individuelle créée en ${businessInfo.foundingYear}. Vous parlez directement à l'artisan qui intervient chez vous.`}
            />
            <p className="mt-4 text-sm text-foreground/80">
              <span aria-hidden="true" className="text-amber-500">★</span>{" "}
              <strong>{businessInfo.googleRating.value} / 5</strong> sur{" "}
              {businessInfo.googleRating.count} avis Google
              {isConfirmed(businessInfo.googleReviewsUrl) ? (
                <>
                  {" · "}
                  <a
                    href={businessInfo.googleReviewsUrl}
                    className="font-semibold text-brand-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lire les avis
                  </a>
                </>
              ) : null}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Communes desservies</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {zones.map((zone) => (
                <li
                  key={zone.name}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-sm text-foreground/80"
                >
                  {zone.name}
                </li>
              ))}
            </ul>
            <Link
              href="/zone-intervention"
              className="mt-2 inline-flex min-h-10 items-center text-sm font-semibold text-brand-600"
            >
              Voir le détail par commune →
            </Link>
          </div>
        </div>
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
          <h2 className="text-balance text-2xl font-bold">Besoin d&apos;un plombier à {businessInfo.city} ?</h2>
          <p className="mt-2 text-white/90">
            Appelez {businessInfo.ownerName.split(" ")[0]} directement, ou décrivez votre besoin en
            ligne.
          </p>
          <CtaGroup className="mt-6 justify-center" variant="dark" />
        </div>
      </Container>
    </>
  );
}
