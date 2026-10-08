import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { headerNav } from "@/lib/content/navigation";
import { businessInfo } from "@/lib/content/business";
import { LogoMark, PhoneIcon } from "@/components/ui/Icons";

export function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-white/10 bg-deep/95 text-on-deep backdrop-blur">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={`${businessInfo.tradeName}, accueil`}>
          <LogoMark />
          <span className="leading-none">
            <span className="block font-display text-xl font-black uppercase tracking-wide font-condensed">
              Devarenne
            </span>
            <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.1em] text-on-deep-muted">
              Plomberie · Chauffage
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {headerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="whitespace-nowrap text-sm font-medium text-on-deep-muted transition-colors hover:text-on-deep"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={businessInfo.phoneHref}
            className="flex h-10 items-center gap-2 whitespace-nowrap rounded-lg bg-copper px-3 text-sm font-bold text-white shadow-[0_6px_16px_-8px_var(--copper)] transition-colors hover:bg-copper-dark sm:px-4"
          >
            <PhoneIcon />
            <span className="hidden font-mono sm:inline">{businessInfo.phone}</span>
            <span className="sm:hidden">Appeler</span>
          </a>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
