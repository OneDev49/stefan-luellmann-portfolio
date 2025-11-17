import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Frontmatter {
  author: string;
  published: string;
  updated?: string;
  designedBy?: string;
  developedBy?: string;
  releaseDateV1?: string;
}

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

export async function getMdxContent(
  slug: string,
  folder: string = 'case-studies'
) {
  const contentDirectory = process.cwd();
  const filePath = path.join(
    contentDirectory,
    'content',
    folder,
    `${slug}.mdx`
  );

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const headingLines = content.match(/^(##|###)\s(.+)/gm) || [];

    const headings: Heading[] = headingLines.map((line) => {
      const level = line.startsWith('###') ? 3 : 2;
      const text = line.replace(/^(##|###)\s/, '').trim();
      const slug = slugify(text);
      return { level, text, slug };
    });

    const frontmatter: Frontmatter = {
      author: data.author || 'Unknown Author',
      published: data.published || new Date().toISOString,
      ...(data.updated && { updated: data.updated }),
      ...(data.designedBy && { designedBy: data.designedBy }),
      ...(data.developedBy && { developedBy: data.developedBy }),
      ...(data.releaseDateV1 && { releaseDateV1: data.releaseDateV1 }),
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
