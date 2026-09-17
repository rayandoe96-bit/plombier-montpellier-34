import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { businessInfo } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Mentions légales",
};

const fields: { label: string; value: typeof businessInfo.name }[] = [
  { label: "Nom / raison sociale", value: businessInfo.name },
  { label: "Forme juridique", value: businessInfo.legalForm },
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
        Directeur de la publication, hébergeur et numéro SIRET à compléter dès réception des
        informations légales de l&apos;entreprise.
      </p>
    </Container>
  );
}
