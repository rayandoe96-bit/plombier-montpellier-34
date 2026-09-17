import Link from "next/link";
import { businessInfo } from "@/lib/content/business";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-black/10 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.06)] sm:hidden">
      <a
        href={businessInfo.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-500 py-3 text-sm font-semibold text-white"
      >
        Appeler maintenant
      </a>
      <Link
        href="/devis"
        className="flex flex-1 items-center justify-center gap-2 bg-white py-3 text-sm font-semibold text-brand-600"
      >
        Demander un devis
      </Link>
    </div>
  );
}
