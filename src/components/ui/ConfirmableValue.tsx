import { TO_CONFIRM, type Confirmable } from "@/lib/content/types";
import { showToConfirm } from "@/lib/content/confirm";

export function ConfirmableValue({ value }: { value: Confirmable<string> }) {
  if (value === TO_CONFIRM) {
    return showToConfirm ? <span className="italic text-amber-700">À confirmer</span> : null;
  }
  return <>{value}</>;
}
