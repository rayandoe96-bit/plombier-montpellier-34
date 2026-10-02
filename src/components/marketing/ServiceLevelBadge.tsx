import type { ServiceLevel } from "@/lib/content/types";

export function ServiceLevelBadge({ level }: { level: ServiceLevel }) {
  return (
    <span className="inline-flex w-fit items-center font-mono text-xs font-semibold uppercase tracking-[0.1em] text-copper">
      {level}
    </span>
  );
}
