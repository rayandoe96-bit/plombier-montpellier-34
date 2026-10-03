import Link from "next/link";
import type { Service } from "@/lib/content/types";
import { ServiceLevelBadge } from "./ServiceLevelBadge";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/depannage/${service.slug}`}
      className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-0.5 hover:border-brand-500"
    >
      <ServiceLevelBadge level={service.level} />
      <h3 className="text-lg font-bold leading-tight text-foreground">{service.title}</h3>
      <p className="text-sm text-muted">{service.need}</p>
      <span className="mt-auto text-sm font-semibold text-brand-600">
        Voir le détail →
      </span>
    </Link>
  );
}
