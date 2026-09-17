import type { Zone } from "@/lib/content/types";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";

export function ZoneSection({ zone }: { zone: Zone }) {
  return (
    <div id={zone.name} className="rounded-xl border border-black/10 p-5">
      <h3 className="text-lg font-semibold text-foreground">{zone.name}</h3>
      <p className="mt-2 text-sm text-foreground/80">
        <ConfirmableValue value={zone.description} />
      </p>
      <p className="mt-3 text-xs text-foreground/60">
        Frais de déplacement : <ConfirmableValue value={zone.travelFee} />
      </p>
    </div>
  );
}
