import { getAllArticles } from '@/lib/mdx/articles';
import { Metadata } from 'next';

import ArticlesHubMain from './_components/ArticleHubMain';
import ArticleHubHero from './_components/ArticleHubHero';

const title: string = `Articles`;
const description: string = `Read Technical Articles I wrote on all sorts of different topics. From NextJS to React, from Prisma to PostgreSQL. I write about all technical topics as a Full-Stack Developer.`;

export const metadata: Metadata = {
  title: title,
  description: description,

  openGraph: {
    title: title,
    description: description,
  },

  twitter: {
    title: title,
    description: description,
  },

  alternates: {
    canonical: '/articles',
  },
};

export default async function ArticlesHubPage() {
  const allArticles = await getAllArticles();

  const topics = Array.from(new Set(allArticles.map((p) => p.topic))).sort();

  return (
    <>
      <ArticleHubHero />
      <ArticlesHubMain allArticles={allArticles} topics={['all', ...topics]} />
    </>
  );
}
