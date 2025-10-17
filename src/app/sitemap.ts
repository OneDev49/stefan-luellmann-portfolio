import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { siteData } from '@/config/siteData';

interface CaseStudy {
  slug: string;
  lastModified: Date;
}

async function getCaseStudySlugs(): Promise<string[]> {
  const caseStudiesDirectory = path.join(
    process.cwd(),
    'content',
    'case-studies'
  );

  try {
    if (!fs.existsSync(caseStudiesDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(caseStudiesDirectory);

    return fileNames
      .filter(
        (fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md')
      )
      .map((fileName) => fileName.replace(/\.(mdx|md)$/, ''));
  } catch (error) {
    console.error('Error reading case studies:', error);
    return [];
  }
}

export default async function siteMap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteData.url || 'https://stefan-luellmann.com';

  /* const caseStudySlugs = await getCaseStudySlugs();

  const caseStudyUrls = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  })); */

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...staticRoutes];
}
