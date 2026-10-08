import Link from "next/link";
import type { Service } from "@/lib/content/types";
import { serviceIllustrations } from "@/lib/content/illustrations";
import { IllustrationImage } from "@/components/ui/IllustrationImage";

export function ServiceCard({ service }: { service: Service }) {
  const image = serviceIllustrations[service.slug];

  return (
    <Link
      href={`/depannage/${service.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-0.5 hover:border-brand-500"
    >
      {image ? (
        <IllustrationImage
          image={image}
          className="aspect-[16/9]"
          sizes="(min-width: 640px) 50vw, 100vw"
        />
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-bold leading-tight text-foreground">{service.title}</h3>
        <p className="text-sm text-muted">{service.need}</p>
        <span className="mt-auto text-sm font-semibold text-brand-600">
          Voir le détail
        </span>
      </div>
    </Link>
  );
}
