import { businessInfo } from "@/lib/content/business";

export function PriceFactors({ factors }: { factors: string[] }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-5">
      <p className="text-sm font-semibold text-foreground">
        Intervention à partir de {businessInfo.priceFrom} €
      </p>
      <p className="mt-1 text-sm text-foreground/70">
        Le tarif final dépend de la situation constatée sur place. Facteurs pris en compte :
      </p>
      <ul className="mt-3 space-y-2">
        {factors.map((factor) => (
          <li key={factor} className="flex gap-2 text-sm text-foreground/80">
            <span aria-hidden className="text-brand-500">•</span>
            {factor}
          </li>
        ))}
      </ul>
    </div>
  );
}
