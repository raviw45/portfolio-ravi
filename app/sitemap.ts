import { DOMAIN } from "@/config/constant";
import { generateDynamicEntries } from "@/utils/sitemapHelper";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogSitemap = await generateDynamicEntries();

  return [
    {
      url: `${DOMAIN}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${DOMAIN}/blogs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...blogSitemap,
  ];
}
