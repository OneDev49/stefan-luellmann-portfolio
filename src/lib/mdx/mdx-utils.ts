import fs from 'fs';
import path from 'path';

export interface Heading {
  level: number;
  text: string;
  slug: string;
}

// General content directory constant
export const CONTENT_DIR = path.join(process.cwd(), 'content');

// Helper function to slugify text
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '');

// Fetch files recursively from mdx directory
export function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];

  if (!fs.existsSync(dir)) return results;

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

// Extract headings from MDX content
export function extractHeadings(content: string): Heading[] {
  const headingLines = content.match(/^(##|###)\s(.+)/gm) || [];

  return headingLines.map((line) => {
    const level = line.startsWith('###') ? 3 : 2;
    const text = line.replace(/^(##|###)\s/, '').trim();
    const slug = slugify(text);
    return { level, text, slug };
  });
}
