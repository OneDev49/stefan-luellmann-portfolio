import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import {
  CONTENT_DIR,
  extractHeadings,
  getFilesRecursively,
  Heading,
} from './mdx-utils';

const ARTICLES_DIR = path.join(CONTENT_DIR, 'articles');

export interface ArticleFrontmatter {
  title: string;
  excerpt: string;
  author: string;
  published: string;
  updated?: string;
  thumbnail?: string;
  estimatedReadTime?: string;
  category: 'opinion' | 'playbook' | 'other' | 'module';
}

export interface Article {
  slug: string;
  topic: string;
  frontmatter: ArticleFrontmatter;
  content?: string;
}

// Get all articles
export async function getAllArticles(): Promise<Article[]> {
  try {
    const filePaths = getFilesRecursively(ARTICLES_DIR);

    const articles = filePaths.map((absolutePath) => {
      const fileContents = fs.readFileSync(absolutePath, 'utf8');
      const { data } = matter(fileContents);

      const relativePath = path.relative(ARTICLES_DIR, absolutePath);

      const pathParts = relativePath.split(path.sep);
      const topic = pathParts.length > 1 ? pathParts[0] : 'uncategorized';

      const slug = path.basename(relativePath, '.mdx');

      return {
        slug,
        topic,
        frontmatter: {
          title: data.title,
          excerpt: data.excerpt,
          author: data.author,
          published: data.published || new Date().toISOString(),
          updated: data.updated,
          thumbnail: data.thumbnail,
          estimatedReadTime: data.estimatedReadTime,
          category: data.category || 'fundamentals',
        },
      };
    });

    return articles.sort(
      (a, b) =>
        new Date(b.frontmatter.published).getTime() -
        new Date(a.frontmatter.published).getTime()
    );
  } catch (error) {
    console.error('Error getting articles:', error);
    return [];
  }
}

// Get all topics (unique directory names under /articles)
export async function getAllTopics(): Promise<string[]> {
  try {
    if (!fs.existsSync(ARTICLES_DIR)) return [];

    const items = fs.readdirSync(ARTICLES_DIR);
    const topics = items.filter((item) => {
      const itemPath = path.join(ARTICLES_DIR, item);
      return fs.statSync(itemPath).isDirectory();
    });

    return topics;
  } catch (error) {
    console.error('Error getting topics:', error);
    return [];
  }
}

// Get article by topic
export async function getArticlesByTopic(topic: string): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.filter((article) => article.topic === topic);
}

// Get articles by category (depending on value 'opinion', 'playbook', 'fundamentals')
export async function getArticlesByCategory(
  category: 'opinion' | 'playbook' | 'fundamentals',
  limit: number = 10
): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles
    .filter((article) => article.frontmatter.category === category)
    .slice(0, limit);
}

// Get the N latest articles
export async function getLatestArticles(
  limit: number = 10
): Promise<Article[]> {
  const allArticles = await getAllArticles();
  return allArticles.slice(0, limit);
}

// Get related articles based on topic
export async function getRelatedArticles(
  currentArticle: Article,
  limit: number = 5
): Promise<Article[]> {
  const allArticles = await getAllArticles();

  const related = allArticles
    .filter((article) => article.slug !== currentArticle.slug)
    .filter((article) => {
      if (article.topic === currentArticle.topic) return true;
      return (
        article.frontmatter.category === currentArticle.frontmatter.category
      );
    });

  return related.slice(0, limit);
}

// Get single article by topic and slug
export async function getArticleByTopicAndSlug(
  topic: string,
  slug: string
): Promise<(Article & { headings: Heading[]; content: string }) | null> {
  const filePath = path.join(ARTICLES_DIR, topic, `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const headings = extractHeadings(content);

    const frontmatter: ArticleFrontmatter = {
      title: data.title || '',
      excerpt: data.excerpt || '',
      author: data.author || 'Stefan Lüllmann',
      published: data.published || new Date().toISOString(),
      updated: data.updated,
      thumbnail: data.thumbnail,
      estimatedReadTime: data.estimatedReadTime,
      category: data.category || 'fundamentals',
    };

    return {
      slug,
      topic,
      frontmatter,
      headings,
      content,
    };
  } catch (error) {
    console.error(`Error reading article ${topic}/${slug}.mdx:`, error);
    return null;
  }
}
