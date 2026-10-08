import { businessInfo } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";

// showRepairPrice: only on repair pages, the one place the « à partir de » price applies.
export function PriceFactors({ factors, showRepairPrice = false }: { factors: string[]; showRepairPrice?: boolean }) {
  return (
    <div className="rounded-xl border border-line bg-surface p-5">
      <p className="text-sm font-semibold text-foreground">
        {showRepairPrice && isConfirmed(businessInfo.repairPriceFrom)
          ? `Dépannage à partir de ${businessInfo.repairPriceFrom} €`
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
