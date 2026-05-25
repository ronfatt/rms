import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ronmerakistudio.com",
      lastModified: new Date("2026-05-25"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
