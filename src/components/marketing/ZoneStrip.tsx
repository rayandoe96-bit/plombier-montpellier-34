import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { zones } from "@/lib/content/business";

// One line under the hero so visitors from every served town see they are covered,
// without repeating town names through the copy.
export function ZoneStrip() {
  const names = zones.map((zone) => zone.name);
  const list = `${names.slice(0, -1).join(", ")} et ${names.at(-1)}`;
  return (
    <div className="border-b border-line bg-surface">
      <Container className="py-3 text-sm text-muted">
        On intervient à <span className="font-semibold text-foreground">{list}</span>.{" "}
        <Link href="/zone-intervention" className="whitespace-nowrap font-semibold underline hover:text-brand-600">
          Voir la zone d&apos;intervention
        </Link>
      </Container>
    </div>
  );
}
