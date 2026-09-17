import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { CtaGroup } from "@/components/ui/CtaGroup";
import { businessInfo, zones } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez-nous par téléphone ou par devis pour votre intervention de plomberie.",
};

export default function ContactPage() {
  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading as="h1" eyebrow="Contact" title="Nous contacter" />

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-black/10 p-6">
          <p className="text-sm font-semibold text-foreground">Téléphone</p>
          <PhoneLink className="mt-1 block text-lg font-bold text-brand-600" />

          <p className="mt-4 text-sm font-semibold text-foreground">E-mail</p>
          <p className="mt-1 text-sm text-foreground/70">
            <ConfirmableValue value={businessInfo.email} />
          </p>

          <p className="mt-4 text-sm font-semibold text-foreground">Adresse</p>
          <p className="mt-1 text-sm text-foreground/70">
            <ConfirmableValue value={businessInfo.address} />
          </p>

          <p className="mt-4 text-sm font-semibold text-foreground">Horaires</p>
          <p className="mt-1 text-sm text-foreground/70">
            <ConfirmableValue value={businessInfo.hours} />
          </p>

          <CtaGroup className="mt-6" />
        </div>

        <div className="rounded-xl border border-black/10 p-6">
          <p className="text-sm font-semibold text-foreground">Zone d&apos;intervention</p>
          <ul className="mt-3 space-y-1 text-sm text-foreground/70">
            {zones.map((zone) => (
              <li key={zone.name}>{zone.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
