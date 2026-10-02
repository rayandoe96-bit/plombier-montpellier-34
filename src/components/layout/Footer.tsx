import Link from "next/link";
import { Container } from "./Container";
import { PhoneLink } from "@/components/ui/PhoneLink";
import { primaryNav, footerLegalNav } from "@/lib/content/navigation";
import { zones, businessInfo } from "@/lib/content/business";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10 bg-brand-700 pb-24 pt-10 text-white sm:pb-10">
      <Container className="grid gap-8 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold">{businessInfo.tradeName}</p>
          <p className="mt-2 text-sm text-white/80">
            {businessInfo.ownerName}, plombier chauffagiste à {businessInfo.city} depuis{" "}
            {businessInfo.foundingYear}.
          </p>
          <p className="mt-2 text-sm text-white/80">{businessInfo.address}</p>
          <PhoneLink className="mt-4 inline-flex min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 text-sm font-semibold text-brand-700" />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Navigation
          </p>
          <ul className="mt-2">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex min-h-10 items-center text-sm text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Zone d&apos;intervention
          </p>
          <ul className="mt-3 space-y-2">
            {zones.map((zone) => (
              <li key={zone.name} className="text-sm text-white/85">
                {zone.name}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {businessInfo.tradeName}.</p>
        <ul className="flex gap-4">
          {footerLegalNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="inline-flex min-h-10 items-center hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
