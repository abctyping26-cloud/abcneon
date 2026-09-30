import type { MetadataRoute } from "next";
import { getAllServices } from "./data/catalogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abcneon.in";
  const allServices = getAllServices();

  const serviceUrls: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...serviceUrls,
  ];
}
