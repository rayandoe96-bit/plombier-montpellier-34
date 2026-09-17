import { businessInfo } from "@/lib/content/business";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";

const items: { label: string; value: typeof businessInfo.insuranceCoverage }[] = [
  { label: "Assurance (RC pro / décennale)", value: businessInfo.insuranceCoverage },
  { label: "Certifications / qualifications", value: businessInfo.certifications },
  { label: "Horaires et disponibilité", value: businessInfo.hours },
];

export function TrustNotice() {
  return (
    <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-5">
      <p className="text-sm font-semibold text-foreground">Informations de confiance</p>
      <dl className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col text-sm sm:flex-row sm:gap-2">
            <dt className="font-medium text-foreground/80 sm:w-56 sm:shrink-0">{item.label}</dt>
            <dd>
              <ConfirmableValue value={item.value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
