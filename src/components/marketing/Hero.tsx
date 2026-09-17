import type { ReactNode } from "react";
import { CtaGroup } from "@/components/ui/CtaGroup";

export function Hero({
  eyebrow,
  title,
  description,
  tone = "brand",
  extra,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  tone?: "brand" | "urgent";
  extra?: ReactNode;
}) {
  const toneClasses =
    tone === "urgent"
      ? "bg-urgent-500/10 text-urgent-600"
      : "bg-brand-50 text-brand-600";

  return (
    <section className={`border-b border-black/5 ${tone === "urgent" ? "bg-urgent-500/5" : "bg-brand-50/40"}`}>
      <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        {eyebrow ? (
          <p className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${toneClasses}`}>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-base text-foreground/75">{description}</p>
        <CtaGroup className="mt-6" />
        {extra}
      </div>
    </section>
  );
}
