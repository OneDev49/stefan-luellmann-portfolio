import { getMdxContent } from '@/lib/mdx';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const result = await getMdxContent('datenschutz', 'legal');

  if (!result) {
    return {};
  }

  return {
    title: 'Datenschutz',
    description:
      'Datenschutzerklärung von meiner Website - stefan-luellmann.com',
  };
}

export default async function DatenschutzPage() {
  const result = await getMdxContent('datenschutz', 'legal');

  if (!result) {
    notFound();
  }

  return <div>{result.content}</div>;
}
