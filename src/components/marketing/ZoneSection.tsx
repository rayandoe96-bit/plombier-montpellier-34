import type { Zone } from "@/lib/content/types";
import { ConfirmableValue } from "@/components/ui/ConfirmableValue";
import { isVisible } from "@/lib/content/confirm";

export function ZoneSection({ zone }: { zone: Zone }) {
  return (
    <div id={zone.name} className="rounded-xl border border-line p-5">
      <h3 className="text-lg font-semibold text-foreground">{zone.name}</h3>
      {isVisible(zone.description) ? (
        <p className="mt-2 text-sm text-muted">
          <ConfirmableValue value={zone.description} />
        </p>
      ) : null}
      {isVisible(zone.travelFee) ? (
        <p className="mt-3 text-xs text-muted">
          Frais de déplacement : <ConfirmableValue value={zone.travelFee} />
        </p>
      ) : null}
      {zone.emergency ? null : (
        <p className="mt-3 text-sm text-muted">Dépannages et projets, hors urgences.</p>
      )}
    </div>
  );
}
