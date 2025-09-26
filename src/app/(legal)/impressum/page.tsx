import { getMdxContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const result = await getMdxContent('impressum', 'legal');

  if (!result) {
    return {};
  }

  return {
    title: 'Impressum',
    description:
      'Impressum von stefan-luellmann.com - Meiner professionellen Portfolio Website.',
  };
}

export default async function ImpressumPage() {
  const result = await getMdxContent('impressum', 'legal');

  if (!result) {
    notFound();
  }

  return <div>{result.content}</div>;
}
