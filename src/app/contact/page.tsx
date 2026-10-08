import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { businessInfo, zones } from "@/lib/content/business";
import { isVisible } from "@/lib/content/confirm";

export const metadata: Metadata = {
  title: "Contacter un plombier, Montpellier et alentours",
  description:
    "Émilien Devarenne, plombier chauffagiste à Montpellier et alentours : 06 31 93 45 14, du lundi au samedi. C'est l'artisan qui répond. 6 rue des Consuls, 34970 Lattes.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading as="h1" eyebrow="Contact" title="Plombier autour de Montpellier : un appel, et c'est l'artisan qui répond" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-line p-6">
          <p className="text-sm font-semibold text-foreground">Téléphone</p>
          <PhoneLink className="mt-1 block text-lg font-bold text-brand-600" />

          {isVisible(businessInfo.email) ? (
            <>
              <p className="mt-4 text-sm font-semibold text-foreground">E-mail</p>
              <p className="mt-1 text-sm text-muted">
                <ConfirmableValue value={businessInfo.email} />
              </p>
            </>
          ) : null}

          <p className="mt-4 text-sm font-semibold text-foreground">Adresse</p>
          <p className="mt-1 text-sm text-muted">
            {businessInfo.address}
          </p>

          <p className="mt-4 text-sm font-semibold text-foreground">Horaires</p>
          <p className="mt-1 text-sm text-muted">
            <ConfirmableValue value={businessInfo.hours} />
          </p>

          <CtaGroup className="mt-6" />
        </div>

        <div className="rounded-xl border border-line p-6">
          <p className="text-sm font-semibold text-foreground">Zone d&apos;intervention</p>
          <ul className="mt-3 space-y-1 text-sm text-muted">
            {zones.map((zone) => (
              <li key={zone.name}>{zone.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
