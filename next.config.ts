import type { NextConfig } from "next";
import { siteUrl } from "./src/lib/site";

const canonicalHost = new URL(siteUrl).host;

const nextConfig: NextConfig = {
  // Production answers on a single host: any other one (the default *.vercel.app domain,
  // deployment URLs) gets a permanent redirect so Google sees one copy of the site.
  // Previews keep their own URLs.
  async redirects() {
    if (process.env.VERCEL_ENV !== "production") return [];
    return [
      {
        source: "/:path*",
        missing: [{ type: "host", value: canonicalHost }],
        destination: `${siteUrl}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
