import type { MetadataRoute } from 'next';
import { caseStudies } from '@/data/caseStudies';
import { getAllPosts } from '@/lib/blog';

const SITE_URL = 'https://highstack.ca';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastBuild = now.toISOString();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: lastBuild, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/about`, lastModified: lastBuild, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${SITE_URL}/services`, lastModified: lastBuild, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${SITE_URL}/team`, lastModified: lastBuild, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/case-studies`, lastModified: lastBuild, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog`, lastModified: lastBuild, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/contact`, lastModified: lastBuild, changeFrequency: 'yearly', priority: 0.9 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: lastBuild, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms-of-use`, lastModified: lastBuild, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified: lastBuild,
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getAllPosts().map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date).toISOString(),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudyRoutes, ...blogRoutes];
}
