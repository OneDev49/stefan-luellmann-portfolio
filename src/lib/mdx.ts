import { notFound } from 'next/navigation';

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

interface MDXArticleFrontmatter {
  title: string;
  author: string;
  published: string;
  updated?: string;
  thumbnail?: string;

  // blog post specific
  tags: string[];

  // case study specific
  designedBy?: string;
  developedBy?: string;
  releaseDateV1?: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  frontmatter: MDXArticleFrontmatter;
  content?: string;
}

// Helper functions
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

const CONTENT_DIR = path.join(process.cwd(), 'content');
const BLOG_DIR = path.join(CONTENT_DIR, 'blog');

// Fetch files recursively from mdx directory
function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(filePath));
    } else if (filePath.endsWith('.mdx')) {
      results.push(filePath);
    }
  });

  return results;
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const filePaths = getFilesRecursively(BLOG_DIR);

    const posts = filePaths.map((absolutePath) => {
      const fileContents = fs.readFileSync(absolutePath, 'utf8');
      const { data } = matter(fileContents);

      const relativePath = path.relative(BLOG_DIR, absolutePath);

      let category = path.dirname(relativePath);

      category = category.split(path.sep).pop() || 'uncategorized';
      if (category === '.') category = 'uncategorized';

      const slug = path.basename(relativePath, '.mdx');

      return {
        slug,
        category,
        frontmatter: {
          title: data.title,
          author: data.author,
          published: data.published || new Date().toISOString(),
          updated: data.updated,
          thumbnail: data.thumbnail,
          tags: data.tags || [],
          designedBy: data.designedBy,
          developedBy: data.developedBy,
          releaseDateV1: data.releaseDateV1,
        },
      };
    });

    return posts.sort(
      (a, b) =>
        new Date(b.frontmatter.published).getTime() -
        new Date(a.frontmatter.published).getTime()
    );
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

// Helper functions for components across the website
// Get the N latest post (e.g. for carousels OR other sections)
export async function getLatestPosts(limit: number = 10): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.slice(0, limit);
}

// Get posts by category (e.g. technical, opinion, etc.)
export async function getPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

// Get post by tags (e.g. zod, typescript, etc.)
export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.frontmatter.tags.includes(tag));
}

// Get related posts
export async function getRelatedPosts(
  currentPost: BlogPost,
  limit: number = 5
): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();

  const related = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .filter((post) => {
      if (post.category === currentPost.category) return true;
      return post.frontmatter.tags.some((tag) =>
        currentPost.frontmatter.tags.includes(tag)
      );
    });

  return related.slice(0, limit);
}

// Get Single Blog post by slug
export async function getBlogPostBySlug(slug: string) {
  const allPosts = await getAllBlogPosts();

  const foundPost = allPosts.find((p) => p.slug === slug);

  if (!foundPost) return null;

  const mdxResult = await getMdxContent(slug, `blog/${foundPost.category}`);
  if (!mdxResult) return notFound();

  return {
    ...mdxResult,
    category: foundPost.category,
  };
}

// Page fetcher
export async function getMdxContent(
  slug: string,
  folder: string = 'case-studies'
) {
  const filePath = path.join(CONTENT_DIR, folder, `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    console.log('PARSED DATA:', data);
    console.log('PARSED CONTENT START', content.slice(0, 50));

    const headingLines = content.match(/^(##|###)\s(.+)/gm) || [];
    const headings: Heading[] = headingLines.map((line) => {
      const level = line.startsWith('###') ? 3 : 2;
      const text = line.replace(/^(##|###)\s/, '').trim();
      const slug = slugify(text);
      return { level, text, slug };
    });

    const frontmatter: MDXArticleFrontmatter = {
      title: data.title || '',
      author: data.author || 'Stefan Lüllmann',
      published:
        data.published || new Date().toLocaleDateString().replaceAll('/', '.'),
      tags: data.tags || [],
      thumbnail: data.thumbnail,
      updated: data.updated,
      designedBy: data.designedBy,
      developedBy: data.developedBy,
      releaseDateV1: data.releaseDateV1,
    };

    return {
      frontmatter: frontmatter,
      headings: headings,
      content: content,
    };
  } catch (error) {
    console.error(`Error reading or parsing MDX file ${slug}.mdx`, error);
    return null;
  }
}
