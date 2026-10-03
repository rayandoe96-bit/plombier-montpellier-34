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

export function OpeningHoursList({
  slots,
  className = "",
  tone = "light",
}: {
  slots: OpeningSlot[];
  className?: string;
  tone?: "light" | "dark";
}) {
  const todayClasses = tone === "dark" ? "bg-white/10 font-semibold text-on-deep" : "bg-brand-50 font-semibold text-brand-700";
  const otherClasses = tone === "dark" ? "text-on-deep-muted" : "text-muted";

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
              isToday ? todayClasses : otherClasses
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
