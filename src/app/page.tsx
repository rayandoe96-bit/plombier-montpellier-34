import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { OpeningHoursList } from "@/components/ui/OpeningHoursList";
import { icons, PhoneIcon } from "@/components/ui/Icons";
import { IllustrationImage } from "@/components/ui/IllustrationImage";
import { illustrations, type Illustration } from "@/lib/content/illustrations";
import { businessInfo, openingHours, zones } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";
import { adviceArticles } from "@/lib/content/advice";
import { generalFaq } from "@/lib/content/faq";

const firstName = businessInfo.ownerName.split(" ")[0];
const { value: ratingValue, count: ratingCount } = businessInfo.googleRating;

interface ProblemCard {
  href: string;
  icon: ReactNode;
  title: string;
  text: string;
}

const repairs: ProblemCard[] = [
  {
    href: "/depannage/recherche-de-fuite",
    icon: icons.drop,
    title: "Fuite d'eau",
    text: "Visible ou cachée : on localise l'origine avant de casser quoi que ce soit.",
  },
  {
    href: "/depannage/debouchage-canalisation",
    icon: icons.toilet,
    title: "WC ou évier bouché",
    text: "Débouchage de WC, évier, douche ou lavabo.",
  },
  {
    href: "/depannage/haute-pression-hydrocurage",
    icon: icons.pressure,
    title: "Bouchon tenace",
    text: "Hydrocurage haute pression quand le débouchage classique ne suffit pas.",
  },
  {
    href: "/depannage/curage-inspection-camera",
    icon: icons.camera,
    title: "Problème qui revient",
    text: "Inspection caméra pour voir l'état réel de la canalisation.",
  },
];

const projects: (ProblemCard & { image: Illustration })[] = [
  {
    href: "/installation",
    icon: icons.heater,
    title: "Chauffe-eau",
    image: illustrations.waterSupply,
    text: "Pose ou remplacement de votre chauffe-eau.",
  },
  {
    href: "/installation",
    icon: icons.radiator,
    title: "Installation de chauffage",
    image: illustrations.radiator,
    text: "Installation et remplacement de votre système de chauffage.",
  },
  {
    href: "/installation",
    icon: icons.shower,
    title: "Sanitaires et robinetterie",
    image: illustrations.bathMixer,
    text: "WC, lavabo, douche, robinets : pose et remplacement.",
  },
  {
    href: "/entretien",
    icon: icons.wrench,
    title: "Entretien",
    image: illustrations.workbench,
    text: "Canalisations, installation sanitaire, chauffe-eau : prévenir plutôt que réparer.",
  },
];

const steps = [
  {
    title: "Vous appelez",
    text: `Vous décrivez le problème à ${firstName}, qui vous dit quand il peut passer.`,
  },
  {
    title: "Diagnostic sur place",
    text: "Il identifie la cause et vous explique ce qu'il propose de faire.",
  },
  {
    title: "Intervention",
    text: "Réparation ou installation, puis explication de ce qui a été fait.",
  },
];

function Stars() {
  return (
    <span aria-hidden="true" className="tracking-[0.06em] text-star">
      ★★★★★
    </span>
  );
}

function GroupLabel({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] after:h-px after:flex-1 after:bg-line ${
        accent ? "text-copper" : "text-muted"
      }`}
    >
      {children}
    </p>
  );
}

function ProblemTile({ card, accent }: { card: ProblemCard; accent: boolean }) {
  return (
    <Link
      href={card.href}
      className="group flex flex-col gap-2 rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_1px_2px_rgba(16,34,48,.06),0_8px_24px_-12px_rgba(16,34,48,.18)]"
    >
      <span
        className={`mb-1 grid h-11 w-11 place-items-center rounded-xl ${
          accent ? "bg-copper/10 text-copper" : "bg-brand-50 text-brand-500"
        }`}
      >
        {card.icon}
      </span>
      <h3 className="text-lg font-bold leading-tight">{card.title}</h3>
      <p className="flex-1 text-sm text-muted">{card.text}</p>
      <span className="mt-1 text-sm font-semibold text-brand-500 group-hover:underline">En savoir plus →</span>
    </Link>
  );
}

function ProjectTile({ card }: { card: ProblemCard & { image: Illustration } }) {
  return (
    <Link
      href={card.href}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-transparent hover:shadow-[0_1px_2px_rgba(16,34,48,.06),0_8px_24px_-12px_rgba(16,34,48,.18)]"
    >
      <IllustrationImage
        image={card.image}
        className="aspect-[3/2]"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="flex items-center gap-2 text-lg font-bold leading-tight">
          <span className="text-brand-500">{card.icon}</span>
          {card.title}
        </h3>
        <p className="flex-1 text-sm text-muted">{card.text}</p>
        <span className="mt-1 text-sm font-semibold text-brand-500 group-hover:underline">En savoir plus →</span>
      </div>
    </Link>
  );
}

function ArtisanCard() {
  return (
    <aside
      aria-label="Coordonnées"
      className="grid gap-4 rounded-2xl border border-white/10 bg-deep-2 p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,.8)]"
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-copper font-display text-lg font-extrabold text-white"
        >
          ÉD
        </span>
        <div>
          <p className="font-bold">{businessInfo.ownerName}</p>
          <p className="text-sm text-on-deep-muted">Artisan plombier chauffagiste</p>
        </div>
      </div>
      <a
        href={businessInfo.phoneHref}
        className="font-mono text-[1.65rem] font-semibold leading-none tracking-tight tabular-nums hover:text-copper-hi"
      >
        {businessInfo.phone}
      </a>
      <p className="flex items-center gap-2 text-sm text-on-deep-muted">
        <span className="font-display text-xl font-extrabold text-on-deep">{ratingValue}</span>
        <Stars />
        <span>{ratingCount} avis Google</span>
      </p>
      <OpeningHoursList slots={openingHours} tone="dark" />
      <p className="text-sm text-on-deep-muted">{businessInfo.address}</p>
    </aside>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blueprint pb-16 pt-10 text-on-deep sm:pt-14 md:pb-36">
        <svg
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-[120px] w-full text-copper md:block"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M-10 92 H560 a24 24 0 0 0 24 -24 V52 a24 24 0 0 1 24 -24 H1450"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinecap="round"
            opacity=".5"
          />
          <rect x="548" y="83" width="22" height="18" rx="4" fill="currentColor" opacity=".8" />
          <rect x="596" y="19" width="22" height="18" rx="4" fill="currentColor" opacity=".8" />
          <rect x="1180" y="19" width="22" height="18" rx="4" fill="currentColor" opacity=".8" />
        </svg>

        <Container className="relative grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
          <div className="min-w-0">
            <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.12em] text-on-deep-muted">
              <span className="h-2 w-2 rounded-full bg-ok shadow-[0_0_0_4px_rgba(47,158,98,.25)]" />
              {businessInfo.city} · Montpellier et littoral
            </p>
            <h1 className="mt-4 font-display text-[2.7rem] font-black uppercase leading-[0.92] font-condensed sm:text-7xl">
              Votre plombier chauffagiste à <span className="text-copper-hi">{businessInfo.city}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-on-deep-muted">
              <strong className="font-semibold text-on-deep">{businessInfo.ownerName}</strong> dépanne et
              installe depuis {businessInfo.foundingYear}. Vous parlez directement à l&apos;artisan qui
              intervient chez vous.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="grid content-start gap-2 rounded-2xl bg-surface p-5 text-foreground shadow-[0_18px_40px_-20px_rgba(0,0,0,.6)]">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-copper">Urgence</span>
                <h2 className="text-2xl font-extrabold uppercase leading-none font-condensed">
                  Fuite, WC bouché, plus d&apos;eau chaude
                </h2>
                <p className="text-sm text-muted">Le plus rapide : appeler et décrire le problème.</p>
                <a
                  href={businessInfo.phoneHref}
                  className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-copper px-5 font-bold text-white shadow-[0_6px_16px_-8px_var(--copper)] transition-colors hover:bg-copper-hi"
                >
                  <PhoneIcon />
                  Appeler maintenant
                </a>
              </div>
              <div className="grid content-start gap-2 rounded-2xl border border-white/15 bg-white/5 p-5">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#7dbce6]">Projet</span>
                <h2 className="text-2xl font-extrabold uppercase leading-none font-condensed">
                  Chauffe-eau, chauffage, sanitaires
                </h2>
                <p className="text-sm text-on-deep-muted">Décrivez votre besoin, on vous recontacte pour en parler.</p>
                <Link
                  href="/devis"
                  className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-on-deep px-5 font-bold text-deep transition-colors hover:bg-white"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>

          <ArtisanCard />
        </Container>
      </section>

      {/* Proof band */}
      <section aria-label="En bref" className="border-b border-line bg-surface">
        <Container>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: String(businessInfo.foundingYear), label: `installé à ${businessInfo.city}` },
              { value: `${ratingValue} ★`, label: `${ratingCount} avis Google` },
              { value: "Lun – sam", label: "dès 9h, fermé le dimanche" },
              { value: `${zones.length} communes`, label: "Lattes, Montpellier, littoral" },
            ].map((proof, index) => (
              <li
                key={proof.value}
                className={`grid gap-0.5 py-5 ${index % 2 ? "border-l border-line pl-5" : ""} ${
                  index >= 2 ? "border-t border-line lg:border-t-0" : ""
                } ${index === 2 ? "lg:border-l lg:pl-5" : ""}`}
              >
                <b className="font-display text-3xl font-extrabold leading-tight font-condensed">{proof.value}</b>
                <span className="text-sm text-muted">{proof.label}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Problems */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos interventions"
            title="Quel est votre problème ?"
            description="Choisissez votre situation pour voir comment on intervient."
          />
          <div className="mt-8">
            <GroupLabel accent>Dépannage</GroupLabel>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {repairs.map((card) => (
                <ProblemTile key={card.title} card={card} accent />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <GroupLabel>Installation et entretien</GroupLabel>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((card) => (
                <ProjectTile key={card.title} card={card} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-surface py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Étape par étape" title="Comment ça se passe" />
          <ol className="relative mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            <span
              aria-hidden="true"
              className="absolute bottom-7 left-[25px] top-7 w-1.5 rounded bg-gradient-to-b from-copper-hi to-copper md:bottom-auto md:left-7 md:right-7 md:top-[25px] md:h-1.5 md:w-auto md:bg-gradient-to-r"
            />
            {steps.map((step, index) => (
              <li key={step.title} className="relative grid grid-cols-[56px_1fr] gap-x-4 md:grid-cols-1 md:gap-y-3">
                <span className="row-span-2 grid h-14 w-14 place-items-center rounded-full border-[6px] border-copper bg-surface font-display text-xl font-black">
                  {index + 1}
                </span>
                <h3 className="self-end text-lg font-bold md:self-auto">{step.title}</h3>
                <p className="max-w-[32ch] text-sm text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Artisan, rating and area */}
      <section className="py-14 sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="grid gap-5">
            <SectionHeading
              eyebrow="L'artisan"
              title="Un seul interlocuteur, du devis à la facture"
              description={`${businessInfo.tradeName} est l'entreprise d'${businessInfo.ownerName}, installée à ${businessInfo.city} depuis ${businessInfo.foundingYear}. C'est lui que vous avez au téléphone, et lui qui intervient.`}
            />
            <div>
              <h3 className="text-base font-bold">On intervient à</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {[...zones]
                  .sort((a, b) => Number(b.name === businessInfo.city) - Number(a.name === businessInfo.city))
                  .map((zone) => (
                    <li
                      key={zone.name}
                      className={`rounded-full border px-3.5 py-1 text-sm ${
                        zone.name === businessInfo.city
                          ? "border-foreground bg-foreground font-semibold text-background"
                          : "border-line bg-surface"
                      }`}
                    >
                      {zone.name}
                    </li>
                  ))}
              </ul>
              <Link href="/zone-intervention" className="mt-2 inline-flex min-h-10 items-center text-sm font-semibold text-brand-500">
                Voir le détail par commune →
              </Link>
            </div>
          </div>

          <div className="relative">
            <IllustrationImage image={illustrations.tools} className="aspect-[4/3] rounded-2xl" />
            <div className="relative -mt-16 ml-4 mr-4 rounded-2xl bg-blueprint p-6 text-on-deep shadow-[0_24px_50px_-24px_rgba(0,0,0,.7)] sm:-mt-24 sm:ml-8 sm:mr-auto sm:max-w-sm">
            <p className="pipe-tag text-copper-hi">Avis Google</p>
            <p className="mt-5 flex items-end gap-4">
              <span className="font-display text-6xl font-black leading-none font-condensed">{ratingValue}</span>
              <span className="pb-2">
                <Stars />
                <span className="block text-sm text-on-deep-muted">sur 5, {ratingCount} avis</span>
              </span>
            </p>
            {isConfirmed(businessInfo.googleReviewsUrl) ? (
              <a
                href={businessInfo.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-10 items-center font-semibold text-copper-hi underline"
              >
                Lire les avis sur Google
              </a>
            ) : null}
            </div>
            <div className="absolute left-4 top-4 inline-grid rounded-lg bg-copper px-4 py-3 text-white shadow-lg">
              <b className="font-display text-2xl font-black leading-none">{businessInfo.foundingYear}</b>
              <span className="text-xs">installé à {businessInfo.city}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface py-14 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14">
          <div>
            <SectionHeading eyebrow="Questions fréquentes" title="Avant d'appeler" />
            <p className="mt-4 text-muted">
              Une autre question ? Appelez au{" "}
              <a href={businessInfo.phoneHref} className="whitespace-nowrap font-mono font-semibold text-copper">
                {businessInfo.phone}
              </a>
              .
            </p>
          </div>
          <FaqAccordion items={generalFaq} />
        </Container>
      </section>

      {/* Advice */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Conseils" title="Avant que le plombier arrive" />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {adviceArticles.slice(0, 3).map((article) => (
              <Link
                key={article.slug}
                href={`/conseils/${article.slug}`}
                className="flex flex-col gap-2 rounded-2xl border border-line bg-surface p-5 transition hover:border-brand-500"
              >
                <h3 className="text-base font-bold leading-snug">{article.title}</h3>
                <p className="text-sm text-muted">{article.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact band */}
      <section className="bg-blueprint py-14 text-on-deep sm:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-2">
          <div className="grid gap-4">
            <p className="pipe-tag text-copper-hi">Contact</p>
            <h2 className="text-4xl font-extrabold uppercase leading-none font-condensed sm:text-5xl">
              Urgence ? Appelez directement.
            </h2>
            <p className="text-on-deep-muted">C&apos;est le plus rapide. {businessInfo.hours}</p>
            <a
              href={businessInfo.phoneHref}
              className="font-mono text-4xl font-semibold tracking-tight tabular-nums hover:text-copper-hi sm:text-5xl"
            >
              {businessInfo.phone}
            </a>
            <p className="text-sm text-on-deep-muted">{businessInfo.address}</p>
          </div>
          <div className="grid gap-3 rounded-2xl bg-surface p-6 text-foreground shadow-[0_30px_60px_-30px_rgba(0,0,0,.6)] sm:p-8">
            <h3 className="text-2xl font-extrabold uppercase font-condensed">Un projet, pas une urgence ?</h3>
            <p className="text-muted">
              Chauffe-eau, sanitaires, robinetterie : décrivez votre besoin en quelques mots, on vous recontacte.
            </p>
            <Link
              href="/devis"
              className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-brand-500 px-6 font-bold text-white transition-colors hover:bg-brand-600"
            >
              Demander un devis
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
