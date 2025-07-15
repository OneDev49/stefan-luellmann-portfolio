import fs from 'fs';
import path from 'path';

export async function getMdxContent(fileName: string) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const filePath = path.join(contentDirectory, fileName);

  try {
    const source = fs.readFileSync(filePath, 'utf8');
    return source;
  } catch (error) {
    console.error(`Error reading MDX File ${fileName}`, error);
    return null;
  }
}
