import { MetadataRoute } from 'next'

// Force static generation
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ascii-web.com"; // Replace with your actual domain

  // Add all your static routes
  const routes = [
    "",
    "/auth",
    "/blog",
    "/dashboard",
    "/privacy",
    "/terms",
    // Add other static routes
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
