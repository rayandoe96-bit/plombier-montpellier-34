// The one public address of the site: canonical, sitemap, robots and schema all use it, and
// next.config.ts redirects every other production host to it. NEXT_PUBLIC_SITE_URL wins once
// a custom domain exists; localhost for local builds.
const productionUrl = "https://devarenne-plomberie-chauffage.vercel.app";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (process.env.VERCEL ? productionUrl : "http://localhost:3000")
).replace(/\/$/, "");
