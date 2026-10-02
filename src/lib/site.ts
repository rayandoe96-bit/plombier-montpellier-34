// Canonical origin. NEXT_PUBLIC_SITE_URL wins once a custom domain exists; otherwise Vercel's
// production domain (set automatically at build time), then localhost for local builds.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
