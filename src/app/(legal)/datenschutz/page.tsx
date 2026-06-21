import { getLegalFileBySlug } from '@/lib/mdx/legals';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { notFound } from 'next/navigation';

export async function generateMetadata() {
  const result = await getLegalFileBySlug('datenschutz');
  if (!result) return {};

  return {
    title: 'Datenschutz',

    alternates: {
      canonical: '/datenschutz',
    },

    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function DatenschutzPage() {
  const mdxResult = (await getLegalFileBySlug('datenschutz')) ?? notFound();
  const { content } = mdxResult;

  return <MDXRemote source={content} />;
}
