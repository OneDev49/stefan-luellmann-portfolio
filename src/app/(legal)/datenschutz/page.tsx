import { getMdxContent } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const result = await getMdxContent('datenschutz', 'legal');
  if (!result) return {};

  return {
    title: 'Datenschutz',
    description:
      'Datenschutzerklärung von meiner Website - stefan-luellmann.com',
  };
}

export default async function DatenschutzPage() {
  const mdxResult = (await getMdxContent('datenschutz', 'legal')) ?? notFound();
  const { content } = mdxResult;

  return (
    <div>
      <MDXRemote source={content} />
    </div>
  );
}
