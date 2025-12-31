import { MetadataRoute } from 'next';
import { personalData } from '@/config/siteData';
import { getAllArticles } from '@/lib/mdx/articles';
import { getAllCaseStudies } from '@/lib/mdx/case-studies';

const BASE_URL = personalData.url || 'https://stefan-luellmann.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();

  const articleUrls = articles.map((article) => ({
    url: `${BASE_URL}/articles/${article.topic}/${article.slug}`,
    lastModified: article.frontmatter.updated
      ? new Date(article.frontmatter.updated)
      : new Date(article.frontmatter.published),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const caseStudies = await getAllCaseStudies();

  const caseStudyUrls = caseStudies.map((caseStudy) => ({
    url: `${BASE_URL}/case-studies/${caseStudy.slug}`,
    lastModified: caseStudy.frontmatter.updated
      ? new Date(caseStudy.frontmatter.updated)
      : new Date(caseStudy.frontmatter.published),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const topics = [...new Set(articles.map((article) => article.topic))];
  const topicUrls = topics.map((topic) => ({
    url: `${BASE_URL}/articles/${topic}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

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
      url: `${BASE_URL}/work`,
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
      url: `${BASE_URL}/articles`,
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

  return [...staticRoutes, ...topicUrls, ...articleUrls, ...caseStudyUrls];
}
