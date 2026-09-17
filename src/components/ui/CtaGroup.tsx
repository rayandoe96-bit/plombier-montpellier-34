import Link from "next/link";
import { businessInfo } from "@/lib/content/business";

export function CtaGroup({
  className = "",
  callLabel = "Appeler maintenant",
  quoteLabel = "Demander un devis",
  variant = "light",
}: {
  className?: string;
  callLabel?: string;
  quoteLabel?: string;
  variant?: "light" | "dark";
}) {
  const callClasses =
    variant === "dark"
      ? "bg-white text-brand-700 hover:bg-white/90"
      : "bg-brand-500 text-white hover:bg-brand-600";
  const quoteClasses =
    variant === "dark"
      ? "border border-white text-white hover:bg-white/10"
      : "border border-brand-500 text-brand-600 hover:bg-brand-50";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={businessInfo.phoneHref}
        className={`flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-colors ${callClasses}`}
      >
        {callLabel}
      </a>
      <Link
        href="/devis"
        className={`flex h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-semibold transition-colors ${quoteClasses}`}
      >
        {quoteLabel}
      </Link>
    </div>
  );
}
