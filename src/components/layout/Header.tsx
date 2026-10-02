import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { headerNav } from "@/lib/content/navigation";
import { businessInfo } from "@/lib/content/business";

export function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-tight" aria-label={`${businessInfo.tradeName}, accueil`}>
          <span className="text-lg font-bold tracking-tight text-brand-700">Devarenne</span>
          <span className="text-[11px] font-medium uppercase tracking-wider text-foreground/60">
            Plomberie · Chauffage · {businessInfo.city}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {headerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-foreground/80 transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <PhoneLink className="hidden h-10 items-center gap-2 whitespace-nowrap rounded-full bg-brand-500 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:flex" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
