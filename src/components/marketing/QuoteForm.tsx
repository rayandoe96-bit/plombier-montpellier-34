"use client";

import { useState, type FormEvent } from "react";
import { zones } from "@/lib/content/business";
import { services } from "@/lib/content/services";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
        Merci, votre demande est prête à être envoyée. L&apos;envoi automatique de ce formulaire
        n&apos;est pas encore activé : pour une réponse immédiate, appelez-nous directement.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 h-11 w-full rounded-lg border border-black/15 px-3 text-sm"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-1 h-11 w-full rounded-lg border border-black/15 px-3 text-sm"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="zone" className="text-sm font-medium text-foreground">
            Commune
          </label>
          <select
            id="zone"
            name="zone"
            required
            className="mt-1 h-11 w-full rounded-lg border border-black/15 px-3 text-sm"
          >
            <option value="">Sélectionner</option>
            {zones.map((zone) => (
              <option key={zone.name} value={zone.name}>
                {zone.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="service" className="text-sm font-medium text-foreground">
            Besoin
          </label>
          <select
            id="service"
            name="service"
            required
            className="mt-1 h-11 w-full rounded-lg border border-black/15 px-3 text-sm"
          >
            <option value="">Sélectionner</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.navLabel}
              </option>
            ))}
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
          required
          className="mt-1 w-full rounded-lg border border-black/15 px-3 py-2 text-sm"
        />
      </div>

      <button
        type="submit"
        className="h-12 w-full rounded-full bg-brand-500 text-sm font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto sm:px-8"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}
