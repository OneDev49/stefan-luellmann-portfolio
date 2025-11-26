import { getMdxContent } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const result = await getMdxContent('impressum', 'legal');
  if (!result) return {};

  return {
    title: 'Impressum',
    description:
      'Impressum von stefan-luellmann.com - Meiner persönlichen Website.',
  };
}

export default async function ImpressumPage() {
  const mdxResult = (await getMdxContent('impressum', 'legal')) ?? notFound();
  const { content } = mdxResult;

  return (
    <div>
      <MDXRemote source={content} />
    </div>
  );
}
