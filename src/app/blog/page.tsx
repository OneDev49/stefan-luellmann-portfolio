import { getAllBlogPosts } from '@/lib/mdx';
import { Metadata } from 'next';

import BlogHubClient from './_components/BlogHubClient';
import BlogHubHero from './_components/BlogHubHero';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Read Technical Articles I wrote on all sorts of different topics. From NextJS to React, from Prisma to PostgreSQL. I write about all technical topics as a Full-Stack Developer.',

  openGraph: {
    title: 'Articles',
    description:
      'Read Technical Articles I wrote on all sorts of different topics. From NextJS to React, from Prisma to PostgreSQL. I write about all technical topics as a Full-Stack Developer.',
  },

  twitter: {
    title: 'Articles',
    description:
      'Read Technical Articles I wrote on all sorts of different topics. From NextJS to React, from Prisma to PostgreSQL. I write about all technical topics as a Full-Stack Developer.',
  },
};

export default async function BlogPage() {
  const allPosts = await getAllBlogPosts();

  const categories = Array.from(
    new Set(allPosts.map((p) => p.category))
  ).sort();

  return (
    <>
      <BlogHubHero />
      <BlogHubClient allPosts={allPosts} categories={['all', ...categories]} />
    </>
  );
}
