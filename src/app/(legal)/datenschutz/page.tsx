import { getMdxContent } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function ImpressumPage() {
  const mdxSource = await getMdxContent('datenschutz.mdx');

  if (!mdxSource) {
    notFound();
  }

  return <MDXRemote source={mdxSource} />;
}
