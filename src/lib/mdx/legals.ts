import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { CONTENT_DIR, getFilesRecursively } from './mdx-utils';

const LEGAL_FILES_DIR = path.join(CONTENT_DIR, 'legal');

export interface LegalFile {
  slug: string;
  content?: string;
}

export async function getAllLegalFiles(): Promise<LegalFile[]> {
  try {
    const filePaths = getFilesRecursively(LEGAL_FILES_DIR);

    const legalFiles = filePaths.map((absolutePath) => {
      const slug = path.basename(absolutePath, '.mdx');

      return {
        slug,
      };
    });

    return legalFiles;
  } catch (error) {
    console.error('Error getting legal file:', error);
    return [];
  }
}

export async function getLegalFileBySlug(
  slug: string
): Promise<(LegalFile & { content: string }) | null> {
  const filePath = path.join(LEGAL_FILES_DIR, `${slug}.mdx`);

  try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { content } = matter(fileContent);
    return {
      slug,
      content,
    };
  } catch (error) {
    console.error(`Error reading legal file ${slug}.mdx`, error);
    return null;
  }
}
