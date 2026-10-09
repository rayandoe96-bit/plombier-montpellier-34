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
import { isConfirmed, isVisible } from "@/lib/content/confirm";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { adviceArticles } from "@/lib/content/advice";
import { generalFaq } from "@/lib/content/faq";
import { bathroomHighlights } from "@/lib/content/services";
import { getGooglePlace } from "@/lib/google/place";
import { GoogleReviews } from "@/components/marketing/GoogleReviews";

const firstName = businessInfo.ownerName.split(" ")[0];

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
    text: "Visible ou cachée : on trouve d'où elle vient avant de casser quoi que ce soit.",
  },
  {
    href: "/depannage/debouchage-canalisation",
    icon: icons.toilet,
    title: "WC ou évier bouché",
    text: "WC, évier, douche ou lavabo qui ne s'écoule plus : on débouche à la source.",
  },
  {
    href: "/depannage/haute-pression-hydrocurage",
    icon: icons.pressure,
    title: "Bouchon tenace",
    text: "Il revient sans cesse ? L'hydrocurage haute pression nettoie toute la canalisation.",
  },
  {
    href: "/depannage/curage-inspection-camera",
    icon: icons.camera,
    title: "Problème qui revient",
    text: "Une caméra montre l'état réel de la canalisation : on répare la vraie cause.",
  },
];

const leakPoints = [
  "Fuite visible : joint, raccord, flexible, tuyau percé",
  "Fuite cachée : mur humide, tache au plafond, compteur qui tourne",
  "Recherche de fuite, même invisible, avant d'ouvrir",
  "Réparation une fois l'origine trouvée",
];

const projects: (ProblemCard & { image: Illustration })[] = [
  {
    href: "/installation",
    icon: icons.heater,
    title: "Chauffe-eau",
    image: illustrations.waterHeater,
    text: "Plus d'eau chaude ou ballon en fin de vie : pose et remplacement de chauffe-eau.",
  },
  {
    href: "/installation",
    icon: icons.radiator,
    title: "Installation de chauffage",
    image: illustrations.radiator,
    text: "Installation et remplacement de votre système de chauffage, adapté à votre logement.",
  },
  {
    href: "/installation",
    icon: icons.shower,
    title: "Sanitaires et robinetterie",
    image: illustrations.showerColumn,
    text: "WC, lavabo, douche, robinets : pose et remplacement.",
  },
  {
    href: "/entretien",
    icon: icons.wrench,
    title: "Entretien",
    image: illustrations.pipeNetwork,
    text: "Canalisations, sanitaires, chauffe-eau : faire vérifier avant que ça lâche.",
  },
];

// Engagements propres aux agences et syndics : affichés seulement une fois confirmés.
const proCommitments = [
  { label: "Facturation au nom de l'agence ou du syndic", value: businessInfo.proInvoicing },
  { label: "Compte rendu après intervention", value: businessInfo.proReport },
  { label: "Rendez-vous pris directement avec l'occupant", value: businessInfo.proOccupantContact },
  { label: "Attestation d'assurance", value: businessInfo.insuranceCoverage },
].filter((item) => isVisible(item.value));

const steps = [
  {
    title: "Vous appelez",
    text: `Vous expliquez le problème à ${firstName}. Il vous dit quand il peut passer.`,
  },
  {
    title: "Diagnostic sur place",
    text: "Il trouve la cause et vous explique ce qu'il propose, avant de commencer.",
  },
  {
    title: "Intervention",
    text: "Il répare ou installe, puis vous montre ce qui a été fait.",
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

function RepairLink({ card }: { card: ProblemCard }) {
  return (
    <Link href={card.href} className="group flex gap-3 rounded-xl p-2 transition-colors hover:bg-copper/5">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-copper/10 text-copper">{card.icon}</span>
      <span className="min-w-0">
        <span className="block font-bold leading-tight group-hover:underline">{card.title}</span>
        <span className="mt-0.5 block text-sm text-muted">{card.text}</span>
      </span>
    </Link>
  );
}

function RepairCard() {
  const hasPrice = isConfirmed(businessInfo.repairPriceFrom);
  return (
    <div className="grid gap-6 rounded-2xl border border-line bg-surface p-5 sm:p-7 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-center lg:gap-10">
      <div className="grid gap-3">
        <h3 className="text-xl font-bold leading-tight">Fuite, bouchon, panne d&apos;eau chaude : un seul numéro</h3>
        <p className="text-muted">
          Vous décrivez le problème au téléphone, {firstName} vous dit quand il peut passer et ce que ça va coûter
          avant de commencer.
        </p>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {repairs.map((card) => (
            <li key={card.title}>
              <RepairLink card={card} />
            </li>
          ))}
        </ul>
      </div>
      <div className="grid justify-items-center gap-3 rounded-xl border border-dashed border-line p-6 text-center">
        {hasPrice ? (
          <p className="flex items-baseline gap-2">
            <span className="text-muted">dès</span>
            <span className="font-mono text-5xl font-bold leading-none tabular-nums text-copper">
              {businessInfo.repairPriceFrom}
              <span className="text-[0.6em]">&nbsp;€</span>
            </span>
          </p>
        ) : null}
        <a
          href={businessInfo.phoneHref}
          className="flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-copper px-5 font-bold text-white shadow-[0_6px_16px_-8px_var(--copper)] transition-colors hover:bg-copper-dark"
        >
          <PhoneIcon />
          Appeler maintenant
        </a>
        <p className="text-xs text-muted">Prix exact annoncé avant l&apos;intervention.</p>
      </div>
    </div>
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
        className="hidden aspect-[3/2] sm:block"
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="flex items-center gap-2 text-lg font-bold leading-tight">
          <span className="text-brand-500">{card.icon}</span>
          {card.title}
        </h3>
        <p className="flex-1 text-sm text-muted">{card.text}</p>
        <span className="mt-1 text-sm font-semibold text-brand-500 group-hover:underline">En savoir plus</span>
      </div>
    </Link>
  );
}

function ArtisanCard({ ratingValue, ratingCount }: { ratingValue: string; ratingCount: number }) {
  return (
    <aside
      aria-label="Coordonnées"
      className="hidden gap-4 lg:grid rounded-2xl border border-white/10 bg-deep-2 p-5 shadow-[0_24px_60px_-30px_rgba(0,0,0,.8)]"
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

export default async function Home() {
  const place = await getGooglePlace();
  const { ratingLabel: ratingValue, ratingCount } = place;

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
              Dépannage, installation, salle de bains
            </p>
            <h1 className="mt-4 font-display text-[2.7rem] font-black uppercase leading-[0.92] font-condensed sm:text-7xl">
              Votre plombier chauffagiste à Montpellier et alentours
            </h1>
            <p className="mt-5 max-w-xl text-lg text-on-deep-muted">
              Fuite, WC bouché, chauffe-eau en panne ou salle de bains à refaire :{" "}
              <strong className="font-semibold text-on-deep">{businessInfo.ownerName}</strong> s&apos;en occupe
              depuis {businessInfo.foundingYear}. Un seul numéro, et c&apos;est l&apos;artisan qui répond, puis qui
              vient chez vous.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="grid content-start gap-2 rounded-2xl bg-surface p-5 text-foreground shadow-[0_18px_40px_-20px_rgba(0,0,0,.6)]">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-copper">Urgence</span>
                <h2 className="text-2xl font-extrabold uppercase leading-none font-condensed">
                  Fuite et dépannage
                </h2>
                <p className="text-sm text-muted">
                  Fuite, WC bouché, plus d&apos;eau chaude : appelez et décrivez le problème, c&apos;est le plus rapide.
                </p>
                <a
                  href={businessInfo.phoneHref}
                  className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-copper px-5 font-bold text-white shadow-[0_6px_16px_-8px_var(--copper)] transition-colors hover:bg-copper-dark"
                >
                  <PhoneIcon />
                  Appeler maintenant
                </a>
              </div>
              <div className="grid content-start gap-2 rounded-2xl border border-white/15 bg-white/5 p-5">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#7dbce6]">Projet</span>
                <h2 className="text-2xl font-extrabold uppercase leading-none font-condensed">
                  Salle de bains, chauffe-eau, chauffage
                </h2>
                <p className="text-sm text-on-deep-muted">
                  Décrivez votre projet en quelques lignes, on vous rappelle pour en parler.
                </p>
                <Link
                  href="/devis"
                  className="mt-2 flex min-h-12 items-center justify-center rounded-lg bg-on-deep px-5 font-bold text-deep transition-colors hover:bg-white"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>

          <ArtisanCard ratingValue={ratingValue} ratingCount={ratingCount} />
        </Container>
      </section>

      {/* Proof band */}
      <section aria-label="En bref" className="border-b border-line bg-surface">
        <Container>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {[
              { value: String(businessInfo.foundingYear), label: `installé à ${businessInfo.city}` },
              { value: `${ratingValue} ★`, label: `${ratingCount} avis Google` },
              { value: "Lun – sam", label: "dès 8h, fermé le dimanche" },
              { value: `${zones.length} communes`, label: "de Montpellier à La Grande-Motte" },
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

      {/* Leaks: first section after the hero */}
      <section className="bg-blueprint py-14 text-on-deep sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <IllustrationImage image={illustrations.pipeOutflow} className="aspect-[4/3] rounded-2xl border border-white/10" />
          <div className="grid gap-6">
            <SectionHeading
              tone="dark"
              eyebrow="Fuite d'eau"
              title="Une fuite ? On trouve d'où elle vient avant de casser"
              description={`Robinet qui goutte, tuyau qui fuit, tache au plafond ou facture d'eau qui grimpe : ${firstName} localise l'origine exacte de la fuite, même invisible, puis la répare. On ne casse que là où il faut.`}
            />
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {leakPoints.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-on-deep">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-copper-hi">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="border-l-[3px] border-copper pl-3 text-sm text-on-deep-muted">
              En attendant : coupez l&apos;arrivée d&apos;eau générale si la fuite est importante.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={businessInfo.phoneHref}
                className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-copper px-6 font-bold text-white shadow-[0_6px_16px_-8px_var(--copper)] transition-colors hover:bg-copper-dark"
              >
                <PhoneIcon />
                Appeler maintenant
              </a>
              <Link
                href="/depannage/recherche-de-fuite"
                className="flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 font-bold text-on-deep transition-colors hover:bg-white/10"
              >
                Tout savoir sur la recherche de fuite
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Problems */}
      <section className="py-14 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Nos interventions"
            title="Dépannage, installation, salle de bains : que se passe-t-il chez vous ?"
            description="Choisissez votre situation : vous verrez comment on s'y prend et ce qui fait varier le prix."
          />
          <div className="mt-8">
            <GroupLabel accent>Dépannage</GroupLabel>
            <RepairCard />
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

      {/* Bathroom creation */}
      <section className="bg-blueprint py-14 text-on-deep sm:py-20">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <IllustrationImage image={illustrations.bathroom} className="aspect-[4/3] rounded-2xl border border-white/10" />
          <div className="grid gap-6">
            <SectionHeading
              tone="dark"
              eyebrow="Création de salle de bains"
              title="Votre nouvelle salle de bains, des tuyaux à la robinetterie"
              description={`Créer une salle de bains ou refaire l'ancienne : ${firstName} s'occupe des arrivées d'eau, des évacuations et de la pose des équipements. Un seul artisan pour toute la plomberie du projet.`}
            />
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {bathroomHighlights.slice(0, 4).map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-on-deep">
                  <span aria-hidden="true" className="mt-0.5 font-bold text-copper-hi">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/devis"
                className="flex min-h-12 items-center justify-center rounded-lg bg-copper px-6 font-bold text-white shadow-[0_6px_16px_-8px_var(--copper)] transition-colors hover:bg-copper-dark"
              >
                Demander un devis
              </Link>
              <Link
                href="/salle-de-bains"
                className="flex min-h-12 items-center justify-center rounded-lg border border-white/25 px-6 font-bold text-on-deep transition-colors hover:bg-white/10"
              >
                Tout savoir sur la création
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-y border-line bg-surface py-14 sm:py-20">
        <Container>
          <SectionHeading title="Comment ça se passe, en 3 étapes" />
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
              description={`${businessInfo.tradeName}, c'est ${businessInfo.ownerName}, artisan installé à ${businessInfo.city} depuis ${businessInfo.foundingYear}. Celui qui décroche le téléphone est celui qui vient chez vous : pas d'intermédiaire, pas de sous-traitant.`}
            />
            <div>
              <h3 className="text-base font-bold">On intervient de Montpellier à La Grande-Motte</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {zones.map((zone) => (
                  <li key={zone.name} className="rounded-full border border-line bg-surface px-3.5 py-1 text-sm">
                    {zone.name}
                  </li>
                ))}
              </ul>
              <Link href="/zone-intervention" className="mt-2 inline-flex min-h-10 items-center text-sm font-semibold text-brand-500">
                Voir le détail par commune
              </Link>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <IllustrationImage image={illustrations.towelRadiator} className="aspect-[4/3] rounded-2xl" />
            <div className="relative -mt-16 ml-4 mr-4 rounded-2xl bg-blueprint p-6 text-on-deep shadow-[0_24px_50px_-24px_rgba(0,0,0,.7)] sm:-mt-24 sm:ml-8 sm:mr-auto sm:max-w-sm">
            <p className="pipe-tag text-copper-hi">Avis Google</p>
            <p className="mt-5 flex items-end gap-4">
              <span className="font-display text-6xl font-black leading-none font-condensed">{ratingValue}</span>
              <span className="pb-2">
                <Stars />
                <span className="block text-sm text-on-deep-muted">sur 5, {ratingCount} avis</span>
              </span>
            </p>
            {place.mapsUrl || place.writeReviewUrl ? (
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1">
                {place.mapsUrl ? (
                  <a
                    href={place.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center font-semibold text-copper-hi underline"
                  >
                    Lire les avis sur Google
                  </a>
                ) : null}
                {place.writeReviewUrl ? (
                  <a
                    href={place.writeReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 items-center font-semibold text-on-deep underline"
                  >
                    Laisser un avis
                  </a>
                ) : null}
              </div>
            ) : null}
            </div>
            <div className="absolute left-4 top-4 inline-grid rounded-lg bg-copper px-4 py-3 text-white shadow-lg">
              <b className="font-display text-2xl font-black leading-none">{businessInfo.foundingYear}</b>
              <span className="text-xs">installé à {businessInfo.city}</span>
            </div>
          </div>
        </Container>
      </section>

      <GoogleReviews reviews={place.reviews} mapsUrl={place.mapsUrl} />

      {/* Property managers */}
      <section id="agences-syndics" className="scroll-mt-16 border-t border-line py-14 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow="Agences et syndics"
              title="Un plombier qui décroche, pour les logements que vous gérez"
              description={`Un locataire signale une fuite, une canalisation est bouchée dans les parties communes : il vous faut un artisan joignable, qui s'en occupe vraiment. Depuis ${businessInfo.foundingYear}, c'est ${firstName} qui répond, et c'est lui qui se déplace.`}
            />
            <CtaGroup className="mt-7" callLabel={`Appeler ${firstName}`} />
          </div>

          <div>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border border-line bg-surface p-5">
                <h3 className="text-base font-bold">Joignable en direct</h3>
                <p className="mt-2 text-sm text-muted">
                  Un seul numéro, du lundi au samedi de 8h à 20h. Pas de standard : vous parlez à l&apos;artisan qui
                  interviendra.
                </p>
              </li>
              <li className="rounded-xl border border-line bg-surface p-5">
                <h3 className="text-base font-bold">Une entreprise vérifiable</h3>
                <p className="mt-2 text-sm text-muted">
                  Installée à {businessInfo.city} depuis {businessInfo.foundingYear}, SIRET {businessInfo.siret}.{" "}
                  {ratingValue}/5 sur {ratingCount} avis Google.
                </p>
              </li>
              <li className="rounded-xl border border-line bg-surface p-5">
                <h3 className="text-base font-bold">Logements et parties communes</h3>
                <p className="mt-2 text-sm text-muted">
                  <Link href="/depannage/recherche-de-fuite" className="font-semibold text-foreground underline">
                    Recherche de fuite
                  </Link>
                  , débouchage, hydrocurage, inspection caméra, chauffe-eau. Urgences partout dans la zone, sauf à
                  Montpellier.
                </p>
              </li>
              {isConfirmed(businessInfo.repairPriceFrom) ? (
                <li className="rounded-xl border border-line bg-surface p-5">
                  <h3 className="text-base font-bold">Un tarif de départ clair</h3>
                  <p className="mt-2 text-sm text-muted">
                    Dépannages à partir de {businessInfo.repairPriceFrom} €, pour chiffrer sans surprise avec le
                    propriétaire.
                  </p>
                </li>
              ) : null}
            </ul>
            {proCommitments.length > 0 ? (
              <ul className="mt-4 grid gap-1 text-sm text-muted">
                {proCommitments.map((item) => (
                  <li key={item.label}>
                    {item.label} : <ConfirmableValue value={item.value} />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-surface py-14 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-14">
          <div>
            <SectionHeading title="Vos questions avant d'appeler" />
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
          <SectionHeading eyebrow="Conseils" title="Les bons gestes, avant et en attendant le plombier" />
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
              Salle de bains, chauffe-eau, chauffage, sanitaires : décrivez votre projet en quelques lignes, on
              vous rappelle.
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
