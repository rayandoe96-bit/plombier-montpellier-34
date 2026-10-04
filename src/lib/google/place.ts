import { businessInfo } from "@/lib/content/business";
import { isConfirmed } from "@/lib/content/confirm";

// Google Business Profile data, read through the Places API (New).
// Without GOOGLE_PLACES_API_KEY (or without a Place ID) the site falls back to the
// rating recorded by hand in business.ts, so nothing breaks before the key exists.

export interface GoogleReview {
  author: string;
  authorUrl: string | null;
  authorPhotoUrl: string | null;
  rating: number;
  relativeTime: string;
  text: string;
}

export interface GooglePlace {
  /** "4,6" (French decimal comma) */
  ratingLabel: string;
  ratingCount: number;
  /** null when no Place ID is configured */
  mapsUrl: string | null;
  writeReviewUrl: string | null;
  /** Google returns at most 5 reviews; empty when the API is not connected. */
  reviews: GoogleReview[];
  live: boolean;
}

const placeId = process.env.GOOGLE_PLACE_ID || (isConfirmed(businessInfo.googlePlaceId) ? businessInfo.googlePlaceId : null);

function fallback(): GooglePlace {
  return {
    ratingLabel: businessInfo.googleRating.value,
    ratingCount: businessInfo.googleRating.count,
    mapsUrl: placeId ? `https://www.google.com/maps/place/?q=place_id:${placeId}` : null,
    writeReviewUrl: placeId ? writeReviewUrl(placeId) : null,
    reviews: [],
    live: false,
  };
}

function writeReviewUrl(id: string) {
  return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(id)}`;
}

interface PlacesApiResponse {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: {
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }[];
}

export async function getGooglePlace(): Promise<GooglePlace> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey || !placeId) return fallback();

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=fr&regionCode=FR`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
        },
        // One call per day at most: stays far inside Google's free monthly quota.
        next: { revalidate: 86400 },
      },
    );
    if (!response.ok) {
      console.error(`Places API ${response.status}: ${await response.text()}`);
      return fallback();
    }
    const data = (await response.json()) as PlacesApiResponse;
    if (typeof data.rating !== "number" || typeof data.userRatingCount !== "number") return fallback();

    return {
      ratingLabel: data.rating.toLocaleString("fr-FR", { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
      ratingCount: data.userRatingCount,
      mapsUrl: data.googleMapsUri ?? fallback().mapsUrl,
      writeReviewUrl: writeReviewUrl(placeId),
      reviews: (data.reviews ?? [])
        .map((review) => ({
          author: review.authorAttribution?.displayName ?? "Client Google",
          authorUrl: review.authorAttribution?.uri ?? null,
          authorPhotoUrl: review.authorAttribution?.photoUri ?? null,
          rating: review.rating ?? 0,
          relativeTime: review.relativePublishTimeDescription ?? "",
          text: review.originalText?.text ?? review.text?.text ?? "",
        }))
        .filter((review) => review.text.trim().length > 0),
      live: true,
    };
  } catch (error) {
    console.error("Places API unreachable", error);
    return fallback();
  }
}

/** Official Maps Embed API URL (free, unlimited). Needs its own browser key, restricted by HTTP referrer. */
export function getMapEmbedUrl(): string | null {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY;
  if (!key || !placeId) return null;
  return `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(key)}&q=place_id:${encodeURIComponent(placeId)}&language=fr`;
}
