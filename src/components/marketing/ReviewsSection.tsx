export interface ReviewsSource {
  provider: "google" | "trustpilot" | "avis-verifies" | null;
  connected: boolean;
}

export const reviewsSource: ReviewsSource = {
  provider: null,
  connected: false,
};

export function ReviewsSection() {
  if (!reviewsSource.connected) {
    return (
      <div className="rounded-xl border border-dashed border-black/15 p-5 text-sm text-foreground/60">
        Avis clients : intégration à connecter (aucun avis fictif affiché en attendant).
      </div>
    );
  }

  return null;
}
