import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { QuoteForm } from "@/components/marketing/QuoteForm";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";
import { quotePreparationFaq } from "@/lib/content/faq";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { businessInfo } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Demande de devis",
  description: "Demandez un devis pour votre intervention de plomberie à Montpellier et alentours.",
};

export default function DevisPage() {
  return (
    <Container className="py-10 sm:py-14">
      <SectionHeading
        as="h1"
        eyebrow="Devis"
        title="Demander un devis"
        description={`Pour une réponse immédiate, vous pouvez aussi nous appeler directement au ${businessInfo.phone}.`}
      />

      <div className="mt-8 grid gap-10 sm:grid-cols-[1.2fr_1fr]">
        <div className="rounded-xl border border-line p-6">
          <QuoteForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-line p-5">
            <p className="text-sm font-semibold text-foreground">Besoin d&apos;une réponse rapide ?</p>
            <PhoneLink className="mt-2 inline-flex min-h-11 items-center gap-2 rounded-lg bg-copper px-4 py-2 font-mono text-sm font-semibold text-white hover:bg-copper-hi" />
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Bien préparer votre demande</p>
            <div className="mt-3">
              <FaqAccordion items={quotePreparationFaq} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
