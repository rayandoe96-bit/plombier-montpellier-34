import Link from "next/link";
import { businessInfo } from "@/lib/content/business";
import { PhoneIcon } from "./Icons";

export function CtaGroup({
  className = "",
  callLabel = "Appeler maintenant",
  quoteLabel = "Demander un devis",
  variant = "light",
}: {
  className?: string;
  callLabel?: string;
  quoteLabel?: string;
  /** "dark" when the group sits on a deep-blue band. */
  variant?: "light" | "dark";
}) {
  const quoteClasses =
    variant === "dark"
      ? "border-white/30 text-on-deep hover:border-white"
      : "border-line bg-surface text-foreground hover:border-foreground";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={businessInfo.phoneHref}
        className="flex min-h-12 items-center justify-center gap-2 rounded-lg bg-copper px-6 text-base font-bold text-white shadow-[0_6px_16px_-8px_var(--copper)] transition-colors hover:bg-copper-dark"
      >
        <PhoneIcon />
        {callLabel}
      </a>
      <Link
        href="/devis"
        className={`flex min-h-12 items-center justify-center rounded-lg border-[1.5px] px-6 text-base font-bold transition-colors ${quoteClasses}`}
      >
        {quoteLabel}
      </Link>
    </div>
  );
}
