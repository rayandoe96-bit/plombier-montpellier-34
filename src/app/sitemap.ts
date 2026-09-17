import type { MetadataRoute } from "next";
import { services } from "@/lib/content/services";
import { adviceArticles } from "@/lib/content/advice";

const baseUrl = "https://example.com";

const staticRoutes = [
  "",
  "/urgences",
  "/depannage",
  "/installation",
  "/entretien",
  "/zone-intervention",
  "/conseils",
  "/devis",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => `/depannage/${service.slug}`);
  const adviceRoutes = adviceArticles.map((article) => `/conseils/${article.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...adviceRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
