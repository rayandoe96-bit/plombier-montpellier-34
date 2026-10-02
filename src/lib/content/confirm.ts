import { TO_CONFIRM, type Confirmable } from "./types";

// "À confirmer" markers stay visible locally and on Vercel previews so the client can review
// what is missing; production hides them so visitors never see an unfinished site.
// Server-only: VERCEL_ENV is not exposed to client components.
export const showToConfirm =
  process.env.SHOW_TO_CONFIRM === "1" || process.env.VERCEL_ENV !== "production";

export function isConfirmed<T>(value: Confirmable<T>): value is T {
  return value !== TO_CONFIRM;
}

export function isVisible<T>(value: Confirmable<T>): boolean {
  return isConfirmed(value) || showToConfirm;
}
