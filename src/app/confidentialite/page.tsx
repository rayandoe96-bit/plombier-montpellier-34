import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { businessInfo } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading as="h1" title="Confidentialité et données personnelles" />

      <div className="mt-8 max-w-xl space-y-6 text-sm text-foreground/80">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Formulaire de devis et de contact
          </h2>
          <p className="mt-2">
            Les informations transmises via le formulaire de devis ou de contact sont utilisées
            pour traiter votre demande d&apos;intervention.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">Consentement</h2>
          <p className="mt-2">
            <ConfirmableValue value={businessInfo.consentNotice} />
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-foreground">Durée de conservation</h2>
          <p className="mt-2">
            <ConfirmableValue value={businessInfo.retentionPeriod} />
          </p>
        </div>
      </div>
    </Container>
  );
}
