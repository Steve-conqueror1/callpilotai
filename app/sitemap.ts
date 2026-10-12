import type { MetadataRoute } from "next"

import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), priority: 1 },
    { url: `${site.url}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${site.url}/terms`, lastModified: new Date(), priority: 0.3 },
  ]
}
