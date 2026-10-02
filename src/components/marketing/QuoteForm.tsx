"use client";

import { useState, type FormEvent } from "react";
import { businessInfo, zones } from "@/lib/content/business";
import { services } from "@/lib/content/services";

// Formspree-compatible endpoint (POST JSON). Left unset, the form falls back to "call us".
const endpoint = process.env.NEXT_PUBLIC_QUOTE_FORM_ENDPOINT;

type Status = "idle" | "sending" | "sent" | "error";

const fieldClasses = "mt-1 h-11 w-full rounded-lg border border-line px-3 text-base sm:text-sm";

function CallFallback({ intro }: { intro: string }) {
  return (
    <p>
      {intro}{" "}
      <a href={businessInfo.phoneHref} className="whitespace-nowrap font-semibold underline">
        {businessInfo.phone}
      </a>
      .
    </p>
  );
}

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) return;

    setStatus("sending");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Demande de devis — ${data.service} — ${data.zone}` }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (!endpoint) {
    return (
      <div className="rounded-xl border border-brand-100 bg-brand-50 p-5 text-sm text-brand-700">
        <CallFallback intro="La demande en ligne arrive bientôt. En attendant, le plus rapide est d'appeler le" />
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
        <p className="font-semibold">Merci, votre demande a bien été envoyée.</p>
        <CallFallback intro="Pour une urgence, n'attendez pas notre rappel : appelez le" />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className="text-sm text-muted">
        Les champs marqués <span aria-hidden="true">*</span>
        <span className="sr-only">d&apos;un astérisque</span> sont obligatoires.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Téléphone <span aria-hidden="true">*</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={fieldClasses} />
        </div>
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nom
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={fieldClasses} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="zone" className="text-sm font-medium text-foreground">
            Commune <span aria-hidden="true">*</span>
          </label>
          <select id="zone" name="zone" required className={fieldClasses}>
            <option value="">Sélectionner</option>
            {zones.map((zone) => (
              <option key={zone.name} value={zone.name}>
                {zone.name}
              </option>
            ))}
            <option value="autre">Autre commune</option>
          </select>
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Besoin <span aria-hidden="true">*</span>
          </label>
          <select id="service" name="service" required className={fieldClasses}>
            <option value="">Sélectionner</option>
            <optgroup label="Dépannage">
              {services.map((service) => (
                <option key={service.slug} value={service.slug}>
                  {service.navLabel}
                </option>
              ))}
            </optgroup>
            <option value="installation">Installation (chauffe-eau, sanitaires…)</option>
            <option value="entretien">Entretien</option>
            <option value="autre">Autre</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Décrivez votre besoin
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="mt-1 w-full rounded-lg border border-line px-3 py-2 text-base sm:text-sm"
        />
      </div>

      {status === "error" ? (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          <CallFallback intro="L'envoi n'a pas abouti. Réessayez ou appelez le" />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="h-12 w-full rounded-lg bg-brand-500 font-bold text-white transition-colors hover:bg-brand-600 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
