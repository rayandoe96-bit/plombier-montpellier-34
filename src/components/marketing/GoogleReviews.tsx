import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { GoogleReview } from "@/lib/google/place";

// Real reviews only, as returned by the Places API. Renders nothing until the API is connected:
// no sample or rewritten review is ever shown. Author name, link and Google attribution are
// required by the Places API terms.
export function GoogleReviews({ reviews, mapsUrl }: { reviews: GoogleReview[]; mapsUrl: string | null }) {
  const shown = reviews.slice(0, 3).map((review) => ({
    ...review,
    rating: Math.min(5, Math.max(0, Math.round(review.rating))),
  }));
  if (shown.length === 0) return null;

  return (
    <section aria-label="Avis clients sur Google" className="border-t border-line bg-surface py-14 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Avis Google" title="Ce que disent les clients" />
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {shown.map((review) => (
            <li key={`${review.author}-${review.relativeTime}`} className="grid content-start gap-3 rounded-2xl border border-line p-5">
              <p className="text-star" aria-label={`${review.rating} sur 5`}>
                <span aria-hidden="true">{"★".repeat(review.rating)}{"☆".repeat(Math.max(0, 5 - review.rating))}</span>
              </p>
              <blockquote className="line-clamp-6 text-sm text-foreground">{review.text}</blockquote>
              <p className="mt-auto text-sm text-muted">
                {review.authorUrl ? (
                  <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:underline">
                    {review.author}
                  </a>
                ) : (
                  <span className="font-semibold text-foreground">{review.author}</span>
                )}
                {review.relativeTime ? ` · ${review.relativeTime}` : null}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-muted">
          Avis publiés sur Google.{" "}
          {mapsUrl ? (
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-500 underline">
              Voir tous les avis
            </a>
          ) : null}
        </p>
      </Container>
    </section>
  );
}
