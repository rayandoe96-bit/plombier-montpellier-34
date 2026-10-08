import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { businessInfo } from "@/lib/content/business";
import { isVisible } from "@/lib/content/confirm";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Comment Devarenne Plomberie Chauffage utilise les informations envoyées via les formulaires de devis et de contact.",
  alternates: { canonical: "/confidentialite" },
  robots: { index: false, follow: true },
};

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      <div className="mt-2 space-y-2">{children}</div>
    </div>
  );
}

// Texte par défaut conforme au RGPD et à la loi Informatique et Libertés (8 octobre 2026).
// À relire avec le client, notamment le prestataire du formulaire une fois choisi.
export default function ConfidentialitePage() {
  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading as="h1" title="Confidentialité et données personnelles" />

      <div className="mt-8 max-w-xl space-y-6 text-sm text-muted">
        <Block title="Qui traite vos données">
          <p>
            {businessInfo.tradeName}, entreprise individuelle de {businessInfo.legalName},{" "}
            {businessInfo.address}, SIRET {businessInfo.siret}.
          </p>
        </Block>

        <Block title="Quelles données">
          <p>
            Celles que vous saisissez dans le formulaire de devis : téléphone, nom, commune, type
            d&apos;intervention et description du besoin. Aucune autre donnée n&apos;est demandée.
          </p>
        </Block>

        <Block title="Pourquoi">
          <p>
            Uniquement pour vous rappeler, répondre à votre demande et préparer un devis ou une
            intervention. Ce traitement repose sur les mesures précontractuelles prises à votre
            demande (article 6.1.b du RGPD). Vos données ne sont ni vendues, ni cédées, ni utilisées
            pour de la prospection.
          </p>
        </Block>

        <Block title="Qui les reçoit">
          <p>
            {businessInfo.ownerName} seul. L&apos;envoi du formulaire et l&apos;hébergement du site
            passent par des prestataires techniques, qui agissent pour notre compte et
            n&apos;utilisent pas vos données pour eux-mêmes. Certains peuvent être situés hors de
            l&apos;Union européenne : le transfert est alors encadré par les garanties prévues par le
            RGPD (décision d&apos;adéquation ou clauses contractuelles types de la Commission
            européenne).
          </p>
        </Block>

        {isVisible(businessInfo.retentionPeriod) ? (
          <Block title="Combien de temps">
            <p>
              <ConfirmableValue value={businessInfo.retentionPeriod} />
            </p>
          </Block>
        ) : null}

        <Block title="Cookies">
          <p>
            Le site n&apos;utilise ni cookie publicitaire ni outil de mesure d&apos;audience. La
            carte Google Maps de la page Zone d&apos;intervention ne se charge, avec ses cookies, que
            si vous cliquez sur « Afficher la carte ».
          </p>
        </Block>

        <Block title="Vos droits">
          <p>
            Vous pouvez accéder à vos données, les faire corriger ou supprimer, en limiter
            l&apos;usage, vous opposer à leur traitement ou en demander une copie. Il suffit
            d&apos;appeler le{" "}
            <a href={businessInfo.phoneHref} className="font-semibold text-foreground underline">
              {businessInfo.phone}
            </a>{" "}
            ou d&apos;écrire à {businessInfo.tradeName}, {businessInfo.address}. Nous répondons dans un
            délai d&apos;un mois.
          </p>
          <p>
            Si la réponse ne vous satisfait pas, vous pouvez adresser une réclamation à la CNIL
            (
            <a href="https://www.cnil.fr" className="font-semibold text-foreground underline">
              cnil.fr
            </a>
            ).
          </p>
        </Block>
      </div>
    </Container>
  );
}
