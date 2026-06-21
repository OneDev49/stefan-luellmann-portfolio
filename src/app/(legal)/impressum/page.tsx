import { getLegalFileBySlug } from '@/lib/mdx/legals';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const result = await getLegalFileBySlug('impressum');
  if (!result) return {};

  return {
    title: 'Impressum',

    alternates: {
      canonical: '/impressum',
    },

    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function ImpressumPage() {
  const mdxResult = (await getLegalFileBySlug('impressum')) ?? notFound();
  const { content } = mdxResult;

  return <MDXRemote source={content} />;
}
