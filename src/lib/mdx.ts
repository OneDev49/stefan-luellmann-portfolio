import { compileMDX } from 'next-mdx-remote/rsc';

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

export async function getMdxContent(
  slug: string,
  folder: string = 'case-studies'
) {
  const workingDirectory = process.cwd();

  const filePath = path.join(
    workingDirectory,
    'content',
    folder,
    `${slug}.mdx`
  );

  try {
    const source = fs.readFileSync(filePath, 'utf-8');

    const { content, data } = matter(source);

    const mdxSource = await compileMDX({ source: content });

    const frontmatter: Frontmatter = {
      author: data.author,
      published: data.published,
      updated: data.updated ?? '',
      designedBy: data.designedBy ?? '',
      developedBy: data.developedBy ?? '',
      releaseDateV1: data.releaseDateV1 ?? '',
    };

    return {
      content: mdxSource.content,
      frontmatter: frontmatter,
    };
  } catch (error) {
    console.error(`Error reading or parsing MDX file ${slug}.mdx`, error);
    return null;
  }
}
