import Link from "next/link";
import type { Service } from "@/lib/content/types";
import { ServiceLevelBadge } from "./ServiceLevelBadge";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/depannage/${service.slug}`}
      className="flex flex-col gap-3 rounded-xl border border-black/10 p-5 transition-colors hover:border-brand-500 hover:bg-brand-50/40"
    >
      <ServiceLevelBadge level={service.level} />
      <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
      <p className="text-sm text-foreground/70">{service.need}</p>
      <span className="mt-auto text-sm font-semibold text-brand-600">
        Voir le détail →
      </span>
    </Link>
  );
}
