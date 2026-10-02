// Line icons from the validated mockup (24px grid, stroke = currentColor).
import type { ReactNode } from "react";

function Line({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}

export const icons = {
  drop: (
    <Line>
      <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </Line>
  ),
  toilet: (
    <Line>
      <path d="M6 3h5v7H6z" />
      <path d="M4 10h16c0 4-3 7-7 7h-2c-4 0-7-3-7-7z" />
      <path d="M9 17l-1 4h8l-1-4" />
    </Line>
  ),
  pressure: (
    <Line>
      <path d="M3 12h10" />
      <path d="M13 8l4 4-4 4" />
      <path d="M17 6c2 1.5 3 3.6 3 6s-1 4.5-3 6" />
    </Line>
  ),
  camera: (
    <Line>
      <rect x="3" y="7" width="12" height="10" rx="2" />
      <path d="M15 11l5-3v8l-5-3" />
    </Line>
  ),
  heater: (
    <Line>
      <rect x="7" y="2.5" width="10" height="17" rx="3" />
      <circle cx="12" cy="9" r="2" />
      <path d="M10 19.5v2M14 19.5v2" />
    </Line>
  ),
  shower: (
    <Line>
      <path d="M5 21V7a3 3 0 0 1 6 0" />
      <path d="M8.5 7h5" />
      <path d="M11 11v.5M14 11v.5M17 11v.5M11 14.5v.5M14 14.5v.5M17 14.5v.5M14 18v.5" />
    </Line>
  ),
  wrench: (
    <Line>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.6 17.2a1.4 1.4 0 0 0 2 2l5.7-5.7a4 4 0 0 0 5.2-5.4l-2.4 2.4-2-2z" />
    </Line>
  ),
};

export function PhoneIcon({ className = "h-[1.15em] w-[1.15em]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.6a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={`shrink-0 ${className}`}>
      <rect width="40" height="40" rx="10" fill="var(--copper)" />
      <path d="M10 13h11a6 6 0 0 1 6 6v9" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
      <rect x="23" y="26" width="8" height="5" rx="1.5" fill="#fff" />
      <rect x="7" y="10.5" width="5" height="5" rx="1.5" fill="#fff" />
    </svg>
  );
}
