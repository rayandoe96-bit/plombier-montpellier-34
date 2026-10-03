import Link from "next/link";
import { businessInfo } from "@/lib/content/business";
import { PhoneIcon } from "@/components/ui/Icons";

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-line bg-surface/95 px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.1)] backdrop-blur sm:hidden">
      <a
        href={businessInfo.phoneHref}
        className="flex h-12 flex-[2] items-center justify-center gap-2 rounded-lg bg-copper text-base font-bold text-white"
      >
        <PhoneIcon />
        Appeler
      </a>
      <Link
        href="/devis"
        className="flex h-12 flex-1 items-center justify-center rounded-lg border border-line text-sm font-bold text-foreground"
      >
        Devis
      </Link>
    </div>
  );
}
