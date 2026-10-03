import type { MetadataRoute } from "next";
import { services } from "@/lib/content/services";
import { adviceArticles } from "@/lib/content/advice";
import { siteUrl } from "@/lib/site";

const baseUrl = siteUrl;

const staticRoutes = [
  "",
  "/urgences",
  "/depannage",
  "/installation",
  "/salle-de-bains",
  "/entretien",
  "/zone-intervention",
  "/conseils",
  "/devis",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceRoutes = services.map((service) => `/depannage/${service.slug}`);
  const adviceRoutes = adviceArticles.map((article) => `/conseils/${article.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...adviceRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));
}
