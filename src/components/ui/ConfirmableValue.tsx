import { TO_CONFIRM, type Confirmable } from "@/lib/content/types";

export function ConfirmableValue({ value }: { value: Confirmable<string> }) {
  if (value === TO_CONFIRM) {
    return <span className="italic text-amber-700">À confirmer</span>;
  }
  return <>{value}</>;
}
