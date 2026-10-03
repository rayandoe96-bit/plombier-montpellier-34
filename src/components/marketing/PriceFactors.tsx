import { businessInfo } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";

export function PriceFactors({ factors }: { factors: string[] }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <p className="text-sm font-semibold text-foreground">
        {isConfirmed(businessInfo.priceFrom)
          ? `Intervention à partir de ${businessInfo.priceFrom} €`
          : "Chaque situation est différente"}
      </p>
      <p className="mt-1 text-sm text-muted">
        Le tarif dépend surtout de :
      </p>
      <ul className="mt-3 space-y-2">
        {factors.map((factor) => (
          <li key={factor} className="flex gap-2 text-sm text-muted">
            <span aria-hidden className="text-brand-500">•</span>
            {factor}
          </li>
        ))}
      </ul>
    </div>
  );
}
