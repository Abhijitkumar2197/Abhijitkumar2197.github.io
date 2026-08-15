import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { work } from "@/content/work";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${site.url}/`, lastModified, priority: 1 },
    { url: `${site.url}/about/`, lastModified, priority: 0.8 },
    ...work.map((project) => ({
      url: `${site.url}/work/${project.slug}/`,
      lastModified,
      priority: 0.9,
    })),
  ];
}
