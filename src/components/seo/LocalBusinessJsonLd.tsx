import { businessInfo, openingHours, zones } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: businessInfo.tradeName,
    founder: { "@type": "Person", name: businessInfo.ownerName },
    foundingDate: String(businessInfo.foundingYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.streetAddress,
      postalCode: businessInfo.postalCode,
      addressLocality: businessInfo.city,
      addressCountry: "FR",
    },
    telephone: businessInfo.phoneE164,
    areaServed: zones.map((zone) => zone.name),
    openingHoursSpecification: openingHours
      .filter((slot) => slot.opens && slot.closes)
      .map((slot) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${dayNames[slot.day]}`,
        opens: slot.opens,
        closes: slot.closes,
      })),
    ...(isConfirmed(businessInfo.priceFrom)
      ? { priceRange: `À partir de ${businessInfo.priceFrom} €` }
      : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
