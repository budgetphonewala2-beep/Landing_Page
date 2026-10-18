import type { MetadataRoute } from "next";
import { SITE_URL, policyLinks } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const pages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/pricing`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...policyLinks.map((link) => ({
      url: `${SITE_URL}${link.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];

  return pages;
}
