import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { businessInfo } from "@/lib/content/business";
import type { Confirmable } from "@/lib/content/types";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const fields: { label: string; value: Confirmable<string> }[] = [
  { label: "Nom commercial", value: businessInfo.tradeName },
  { label: "Exploitant", value: businessInfo.legalName },
  { label: "Forme juridique", value: businessInfo.legalForm },
  { label: "SIRET", value: businessInfo.siret },
  { label: "Adresse du siège", value: businessInfo.address },
  { label: "E-mail", value: businessInfo.email },
  { label: "Assurance professionnelle", value: businessInfo.insuranceCoverage },
];

export default function MentionsLegalesPage() {
  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading as="h1" title="Mentions légales" />

      <dl className="mt-8 max-w-xl space-y-3">
        {fields.map((field) => (
          <div key={field.label} className="flex flex-col text-sm sm:flex-row sm:gap-2">
            <dt className="font-medium text-foreground/80 sm:w-56 sm:shrink-0">{field.label}</dt>
            <dd>
              <ConfirmableValue value={field.value} />
            </dd>
          </div>
        ))}
        <div className="flex flex-col text-sm sm:flex-row sm:gap-2">
          <dt className="font-medium text-foreground/80 sm:w-56 sm:shrink-0">Téléphone</dt>
          <dd>{businessInfo.phone}</dd>
        </div>
      </dl>

      <p className="mt-8 max-w-xl text-sm text-foreground/60">
        Directeur de la publication et hébergeur à compléter. Les informations
        d&apos;identification ci-dessus proviennent du registre public des entreprises et
        restent à valider par l&apos;exploitant avant publication définitive.
      </p>
    </Container>
  );
}
