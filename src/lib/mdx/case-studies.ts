import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import {
  CONTENT_DIR,
  extractHeadings,
  getFilesRecursively,
  Heading,
} from './mdx-utils';

const CASE_STUDIES_DIR = path.join(CONTENT_DIR, 'case-studies');

export interface CaseStudyFrontmatter {
  author: string;
  published: string;
  updated?: string;
  designedBy: string;
  developedBy: string;
  releaseDateV1: string;
}

export interface CaseStudy {
  slug: string;
  frontmatter: CaseStudyFrontmatter;
  content?: string;
}

export async function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const filePaths = getFilesRecursively(CASE_STUDIES_DIR);

    const caseStudies = filePaths.map((absolutePath) => {
      const fileContents = fs.readFileSync(absolutePath, 'utf8');
      const { data } = matter(fileContents);

      const slug = path.basename(absolutePath, '.mdx');

      return {
        slug,
        frontmatter: {
          title: data.title,
          author: data.author,
          published: data.published || new Date().toISOString(),
          updated: data.updated,
          designedBy: data.designedBy,
          developedBy: data.developedBy,
          releaseDateV1: data.releaseDateV1,
        },
      };
    });

    return caseStudies.sort(
      (a, b) =>
        new Date(b.frontmatter.published).getTime() -
        new Date(a.frontmatter.published).getTime()
    );
  } catch (error) {
    console.error('Error getting case studies:', error);
    return [];
  }
}

export async function getCaseStudyBySlug(
  slug: string
): Promise<(CaseStudy & { headings: Heading[]; content: string }) | null> {
  const filePath = path.join(CASE_STUDIES_DIR, `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const headings = extractHeadings(content);

    const frontmatter: CaseStudyFrontmatter = {
      author: data.author || 'Stefan Lüllmann',
      published: data.published || new Date().toISOString(),
      updated: data.updated,
      designedBy: data.designedBy || 'Stefan Lüllmann',
      developedBy: data.developedBy || 'Stefan Lüllmann',
      releaseDateV1: data.releaseDateV1 || '',
    };

    return {
      slug,
      frontmatter,
      headings,
      content,
    };
  } catch (error) {
    console.error(`Error reading case study ${slug}.mdx`, error);
    return null;
  }
}

export async function getLatestCaseStudies(
  limit: number = 10
): Promise<CaseStudy[]> {
  const allCaseStudies = await getAllCaseStudies();
  return allCaseStudies.slice(0, limit);
}
