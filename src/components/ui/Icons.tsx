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
  radiator: (
    <Line>
      <path d="M5 6v12M9.5 6v12M14 6v12M18.5 6v12" />
      <path d="M3 9h18M3 15h18" />
      <path d="M5 18v2M18.5 18v2" />
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

// Mark from the client's logo (tap shaped as a "D" with a drop), on a white tile so it reads on the dark header.
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`grid shrink-0 place-items-center rounded-[10px] bg-white p-1 ${className}`}>
      <svg viewBox="0 0 432.7 429.8" className="h-full w-full">
        <path fill="#20a7e0" fillRule="evenodd" d="M63.2 282.7C56.2 289.5 43.8 303.3 39.7 319.4C39.2 321.3 37.5 322.4 35.7 322.3C35.5 322.3 35.3 322.2 35.1 322.2C33 321.7 31.8 319.6 32.3 317.5C36.9 299.6 50.3 284.6 57.9 277.2C59.4 275.7 61.8 275.8 63.3 277.3C64.7 278.8 64.7 281.2 63.2 282.7M95.7 277C85 263.1 74 252.9 68.5 248.1C62.9 252.9 51.8 263.3 41 277.2C27.3 295 11.3 322.5 12.8 352.4C14.4 384.3 38.3 408.3 68.5 408.3C98.6 408.3 122.5 384.3 124.1 352.4C125.7 322.4 109.5 294.8 95.7 277" />
        <path fill="#0c6077" d="M252.7 69.8L175.2 69.8L162.3 58.2L162.3 28.9L202.1 31.6C208.9 32 214.6 26.7 214.6 19.8L214.6 12.2C214.6 5.4 208.9 0 202.1 0.5L150.8 3.9C150.3 3.9 149.8 3.9 149.3 3.9L97.3 0.5C90.5 0 84.7 5.4 84.7 12.2L84.7 19.8C84.7 26.7 90.5 32 97.3 31.6L137.1 29L137.1 58.2L124.2 69.8L12.7 69.8L12.7 205.8L9.2 205.8C4.1 205.8 0 209.9 0 214.9L0 231.6C0 236.7 4.1 240.8 9.2 240.8L127.7 240.8C132.8 240.8 136.9 236.7 136.9 231.6L136.9 214.9C136.9 209.9 132.8 205.8 127.7 205.8L124.2 205.8L124.2 181.2L252.7 181.2C290.5 181.2 321.3 212 321.3 249.8C321.3 287.6 290.5 318.4 252.7 318.4L139.4 318.4C142.6 329.4 144.3 341.1 143.7 353.4C141.5 395.9 109.2 427.9 68.5 427.9C46.2 427.9 26.4 418.4 12.7 402.7L12.7 429.8L124.2 429.8L158.2 429.8L252.7 429.8C351.9 429.8 432.7 349 432.7 249.8C432.7 150.5 351.9 69.8 252.7 69.8" />
      </svg>
    </span>
  );
}
