import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ronmerakistudio.com",
      lastModified: new Date("2026-05-26"),
      changeFrequency: "weekly",
      priority: 1,
      images: [
        "https://ronmerakistudio.com/profile/ron-film-set.webp",
        "https://ronmerakistudio.com/profile/ron-ai-workflow.webp",
        "https://ronmerakistudio.com/profile/ron-vocal.webp",
      ],
    },
  ];
}
