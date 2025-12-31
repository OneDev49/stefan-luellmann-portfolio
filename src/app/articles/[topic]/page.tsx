import { Topic, topicMetadata, topicPagedata } from '@/config/topics';
import { getAllTopics } from '@/lib/mdx/articles';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import TopicsHero from './_components/TopicsHero';
import TopicsMain from './_components/TopicsMain';

interface PageProps {
  params: { topic: string };
}

export async function generateStaticParams() {
  const topics = await getAllTopics();

  return topics.map((topic) => ({
    topic: topic,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const topicSlug = params.topic.toLowerCase();
  const metadata = topicMetadata[topicSlug as Topic];

  if (!metadata) {
    return {
      title: 'Topic Not Found',
      description:
        'Unfortunately, the topic you are looking for does not seem to exist!',
    };
  }

  return {
    title: metadata.title,
    description: metadata.description,
    authors: [{ name: 'Stefan Lüllmann' }],
    alternates: {
      canonical: `/articles/${topicSlug}`,
    },

    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `/articles/${topicSlug}`,
      images: [metadata.images],
    },

    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [metadata.images],
    },
  };
}

export default async function ArticleTopicPage({ params }: PageProps) {
  const topicSlug = params.topic.toLowerCase();
  const topicsFromFs = await getAllTopics();

  if (!topicsFromFs.includes(topicSlug)) notFound();

  const pageData = topicPagedata[topicSlug as Topic];

  if (!pageData) notFound();

  return (
    <>
      <TopicsHero topic={topicSlug} pageData={pageData} />
      <TopicsMain topic={topicSlug} pageData={pageData} />
    </>
  );
}
