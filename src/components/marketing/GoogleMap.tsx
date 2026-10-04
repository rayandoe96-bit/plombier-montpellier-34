"use client";

import { useState } from "react";

// Click-to-load: the Google iframe (and its cookies) only loads after the visitor asks for it,
// so no consent banner is needed for the map.
export function GoogleMap({ embedUrl, mapsUrl, title }: { embedUrl: string | null; mapsUrl: string | null; title: string }) {
  const [loaded, setLoaded] = useState(false);

  if (!embedUrl && !mapsUrl) return null;

  if (loaded && embedUrl) {
    return (
      <iframe
        src={embedUrl}
        title={title}
        className="aspect-[4/3] w-full rounded-2xl border border-line sm:aspect-[16/7]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="grid aspect-[4/3] w-full place-items-center gap-3 rounded-2xl border border-dashed border-line bg-surface p-6 text-center sm:aspect-[16/7]">
      <div className="grid max-w-sm gap-3">
        <p className="text-sm text-muted">La carte est fournie par Google Maps, qui dépose des cookies une fois affichée.</p>
        <div className="flex flex-wrap justify-center gap-3">
          {embedUrl ? (
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="min-h-11 rounded-lg bg-brand-500 px-5 font-semibold text-white hover:opacity-90"
            >
              Afficher la carte
            </button>
          ) : null}
          {mapsUrl ? (
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-lg border border-line px-5 font-semibold text-foreground hover:border-brand-500"
            >
              Ouvrir dans Google Maps
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}
