import { MetadataRoute } from 'next';
import { personalData } from '@/config/siteData';
import { getAllBlogPosts } from '@/lib/mdx';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_URL = personalData.url || 'https://stefan-luellmann.com';

async function getCaseStudySitemapData() {
  const dir = path.join(process.cwd(), 'content', 'case-studies');
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  return files.map((file) => {
    const filePath = path.join(dir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    const lastModified = data.updated
      ? new Date(data.updated)
      : data.published
      ? new Date(data.published)
      : new Date();

    return {
      url: `${BASE_URL}/case-studies/${file.replace('.mdx', '')}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    };
  });
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getAllBlogPosts();

  const blogUrls = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.frontmatter.published
      ? new Date(post.frontmatter.published)
      : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const caseStudyUrls = await getCaseStudySitemapData();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...staticRoutes, ...caseStudyUrls, ...blogUrls];
}
