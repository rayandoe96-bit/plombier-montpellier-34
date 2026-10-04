import { businessInfo, openingHours, zones } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";
import { getGooglePlace } from "@/lib/google/place";
import { siteUrl } from "@/lib/site";

export async function LocalBusinessJsonLd() {
  const { mapsUrl } = await getGooglePlace();
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: businessInfo.tradeName,
    url: siteUrl,
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
    // Ties the site to the Google Business Profile. No aggregateRating here: Google ignores
    // ratings a business publishes about itself and forbids reusing third-party reviews.
    ...(mapsUrl ? { hasMap: mapsUrl, sameAs: [mapsUrl] } : {}),
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
