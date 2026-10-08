import { businessInfo, openingHours, zones } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";
import { services } from "@/lib/content/services";
import { getGooglePlace } from "@/lib/google/place";
import { siteUrl } from "@/lib/site";

export async function LocalBusinessJsonLd() {
  const { mapsUrl: rawMapsUrl } = await getGooglePlace();
  const mapsUrl = rawMapsUrl ? cleanMapsUrl(rawMapsUrl) : null;
  const data = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${siteUrl}/#business`,
    name: businessInfo.tradeName,
    url: siteUrl,
    logo: `${siteUrl}/apple-icon.png`,
    image: `${siteUrl}/apple-icon.png`,
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
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.navLabel,
        url: `${siteUrl}/depannage/${service.slug}`,
      },
    })),
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

// The Places API link carries a tracking parameter (g_mp); keep only the stable cid form.
function cleanMapsUrl(url: string) {
  const cid = new URL(url).searchParams.get("cid");
  return cid ? `https://maps.google.com/?cid=${cid}` : url;
}

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
