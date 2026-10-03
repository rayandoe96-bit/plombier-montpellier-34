import type { ReactNode } from "react";
import { CtaGroup } from "@/components/ui/CtaGroup";

export function Hero({
  eyebrow,
  title,
  description,
  tone = "brand",
  extra,
  aside,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  tone?: "brand" | "urgent";
  extra?: ReactNode;
  /** Optional right-hand column (e.g. contact card); switches the hero to two columns on large screens. */
  aside?: ReactNode;
}) {
  const eyebrowColor = tone === "urgent" ? "text-copper-hi" : "text-on-deep-muted";

  return (
    <section className="bg-blueprint text-on-deep">
      <div
        className={`mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 ${
          aside ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center" : ""
        }`}
      >
        <div>
        {eyebrow ? (
          <p className={`pipe-tag ${eyebrowColor}`}>
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-black uppercase leading-[0.95] font-condensed sm:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-on-deep-muted">{description}</p>
        <CtaGroup className="mt-7" variant="dark" />
        {extra}
        </div>
        {aside}
      </div>
    </section>
  );
}
