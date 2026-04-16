import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { domainMap } from "@/content/domains";
import { defaultConfig } from "@/content/config";
import { getAllServiceSlugs } from "@/content/services";
import { getAllIndustrySlugs } from "@/content/industries";
import { getAllLocationSlugs, getAllServiceSeoSlugs } from "@/content/seo-pages";
import blogManifest from "@/content/blog/manifest.json";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Resolve domain from host header
  const headersList = headers();
  const host = headersList.get("host") || "";
  const hostname = host.replace(/:\d+$/, "").replace(/^www\./, "");
  const config = domainMap[hostname] || defaultConfig;
  const domain = config.domain;

  const posts = blogManifest.filter((p) => p.region === config.region);
  const serviceSlugs = getAllServiceSlugs();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://${domain}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const industrySlugs = getAllIndustrySlugs();

  const serviceEntries: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `https://${domain}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const industryEntries: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `https://${domain}/industries/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const locationEntries: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `https://${domain}/locations/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  const seoServiceEntries: MetadataRoute.Sitemap = getAllServiceSeoSlugs().map((slug) => ({
    url: `https://${domain}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.95,
  }));

  const toolsEntries: MetadataRoute.Sitemap = [
    {
      url: `https://${domain}/tools/seo-roi-calculator`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [
    {
      url: `https://${domain}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `https://${domain}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...serviceEntries,
    ...industryEntries,
    ...locationEntries,
    ...seoServiceEntries,
    ...toolsEntries,
    ...(posts.length > 0
      ? [
          {
            url: `https://${domain}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly" as const,
            priority: 0.9,
          },
          ...blogEntries,
        ]
      : []),
  ];
}
