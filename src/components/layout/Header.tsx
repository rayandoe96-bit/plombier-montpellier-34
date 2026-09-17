import Link from "next/link";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { primaryNav } from "@/lib/content/navigation";

export function Header() {
  return (
    <header className="sticky top-0 z-30 h-16 border-b border-black/5 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-brand-700">
          Plombier Montpellier 34
        </Link>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-5">
            {primaryNav
              .filter((item) => item.href !== "/devis")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <PhoneLink className="hidden items-center gap-2 rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:flex" />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
