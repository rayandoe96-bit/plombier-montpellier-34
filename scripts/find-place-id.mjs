// Prints the Google Place ID of the business profile, to paste into business.ts (googlePlaceId)
// or into the GOOGLE_PLACE_ID environment variable.
// Usage: GOOGLE_PLACES_API_KEY=... node scripts/find-place-id.mjs ["search text"]
const apiKey = process.env.GOOGLE_PLACES_API_KEY;
if (!apiKey) {
  console.error("Set GOOGLE_PLACES_API_KEY first.");
  process.exit(1);
}
const query = process.argv[2] ?? "Devarenne Plomberie Chauffage, 6 Rue des Consuls, 34970 Lattes";

const response = await fetch("https://places.googleapis.com/v1/places:searchText", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": apiKey,
    "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress,places.rating,places.userRatingCount",
  },
  body: JSON.stringify({ textQuery: query, languageCode: "fr", regionCode: "FR" }),
});
const data = await response.json();
if (!response.ok) {
  console.error(JSON.stringify(data, null, 2));
  process.exit(1);
}
for (const place of data.places ?? []) {
  console.log(`${place.id}  ${place.displayName?.text} — ${place.formattedAddress} (${place.rating ?? "?"}★, ${place.userRatingCount ?? 0} avis)`);
}
if (!data.places?.length) console.log("No match: try another search text.");
