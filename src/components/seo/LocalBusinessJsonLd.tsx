import { businessInfo, zones } from "@/lib/content/business";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: "Plombier Montpellier 34",
    telephone: businessInfo.phone,
    areaServed: zones.map((zone) => zone.name),
    priceRange: `À partir de ${businessInfo.priceFrom} €`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
