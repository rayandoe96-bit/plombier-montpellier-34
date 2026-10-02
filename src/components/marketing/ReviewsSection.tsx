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
      <div className="rounded-xl border border-dashed border-line p-5 text-sm text-muted">
        Avis clients : intégration à connecter (aucun avis fictif affiché en attendant).
      </div>
    );
  }

  return null;
}
