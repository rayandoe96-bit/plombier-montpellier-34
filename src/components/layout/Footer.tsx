import Link from "next/link";
import { Container } from "./Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { primaryNav, footerLegalNav } from "@/lib/content/navigation";
import { zones, businessInfo } from "@/lib/content/business";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-deep pb-24 pt-10 text-on-deep sm:pb-10">
      <Container className="grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl font-extrabold uppercase font-condensed">{businessInfo.tradeName}</p>
          <p className="mt-2 text-sm text-on-deep-muted">
            {businessInfo.ownerName}, plombier chauffagiste à Montpellier et alentours depuis{" "}
            {businessInfo.foundingYear}.
          </p>
          <p className="mt-2 text-sm text-on-deep-muted">{businessInfo.address}</p>
          <PhoneLink className="mt-4 inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-lg bg-copper px-4 font-mono text-sm font-semibold text-white hover:bg-copper-hi" />
        </div>

        <div>
          <p className="text-sm font-mono font-medium uppercase tracking-[0.12em] text-on-deep-muted/70">
            Navigation
          </p>
          <ul className="mt-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm text-on-deep-muted hover:text-on-deep">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-mono font-medium uppercase tracking-[0.12em] text-on-deep-muted/70">
            Zone d&apos;intervention
          </p>
          <ul className="mt-3 space-y-2">
            {zones.map((zone) => (
              <li key={zone.name} className="text-sm text-on-deep-muted">
                {zone.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-on-deep-muted/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {businessInfo.tradeName}.</p>
        <ul className="flex gap-4">
          {footerLegalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-on-deep">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
