import type { ServiceLevel } from "@/lib/content/types";

const levelStyles: Record<ServiceLevel, string> = {
  Standard: "bg-brand-50 text-brand-700",
  "Haute Pression": "bg-orange-50 text-orange-700",
  Caméra: "bg-violet-50 text-violet-700",
  Diagnostic: "bg-emerald-50 text-emerald-700",
};

export function ServiceLevelBadge({ level }: { level: ServiceLevel }) {
  return (
    <span
      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold ${levelStyles[level]}`}
    >
      {level}
    </span>
  );
}
