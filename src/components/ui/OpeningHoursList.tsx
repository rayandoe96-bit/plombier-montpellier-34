"use client";

import { useSyncExternalStore } from "react";
import type { OpeningSlot } from "@/lib/content/business";

const subscribe = () => () => {};

// Weekday in the business's timezone, so the highlight is right whatever the visitor's clock says.
function getParisWeekday(): number {
  const name = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Europe/Paris" }).format(
    new Date(),
  );
  return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(name);
}

function formatTime(time: string) {
  const [hours, minutes] = time.split(":");
  return minutes === "00" ? `${Number(hours)}h` : `${Number(hours)}h${minutes}`;
}

export function OpeningHoursList({ slots, className = "" }: { slots: OpeningSlot[]; className?: string }) {
  // Server render has no "today" (null) so the markup matches before hydration.
  const today = useSyncExternalStore(subscribe, getParisWeekday, () => null);

  return (
    <dl className={`space-y-1 text-sm ${className}`}>
      {slots.map((slot) => {
        const isToday = slot.day === today;
        return (
          <div
            key={slot.day}
            className={`flex justify-between gap-4 rounded px-2 py-0.5 ${
              isToday ? "bg-brand-50 font-semibold text-brand-700" : "text-foreground/75"
            }`}
          >
            <dt>
              {slot.label}
              {isToday ? <span className="sr-only"> (aujourd&apos;hui)</span> : null}
            </dt>
            <dd>{slot.opens && slot.closes ? `${formatTime(slot.opens)} – ${formatTime(slot.closes)}` : "Fermé"}</dd>
          </div>
        );
      })}
    </dl>
  );
}
