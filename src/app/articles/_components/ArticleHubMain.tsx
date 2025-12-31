'use client';

import { useState, useMemo } from 'react';
import { Article } from '@/lib/mdx/articles';
import { cn } from '@/lib/utilities';

import ArticleCard from '@/components/ui/ArticleCard';

interface ArticlesHubMainProps {
  allArticles: Article[];
  topics: string[];
}

export default function ArticlesHubMain({
  allArticles,
  topics,
}: ArticlesHubMainProps) {
  const [activeTopic, setActiveTopic] = useState<string>('all');

  const filteredPosts = useMemo(() => {
    if (activeTopic === 'all') return allArticles;
    return allArticles.filter((article) => article.topic === activeTopic);
  }, [activeTopic, allArticles]);

  return (
    <section
      id='allArticles'
      className='relative z-50 max-w-7xl mx-auto px-4 flex flex-col gap-8 my-36 scroll-mt-20'
    >
      <div className='text-center'>
        <h2 className='text-h2 text-transparent font-extrabold capitalize'>
          <span className='bg-gradient-card bg-clip-text'>
            Browse all Articles I wrote
          </span>
        </h2>
        <p>
          Discover every article I have ever written, from Technical analysis to
          my personal opinion on Technical topics. It&apos;s all here, in one
          spot.
        </p>
      </div>
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col items-center gap-2'>
          <h3 className='text-h4 font-extrabold'>Sort by Article Category</h3>
          <nav className='rounded-t-2xl overflow-hidden'>
            {topics.map((topic) => (
              <button
                key={topic}
                onClick={() => {
                  setActiveTopic(topic);
                }}
                type='button'
                className={cn(
                  'py-2 px-3 cursor-pointer bg-none text-white border-b-2 border-[#b9b9b9] hover:bg-[#0059ff62]',
                  topic === activeTopic &&
                    'bg-[#00359762] border-b-2 border-[#0059ff]'
                )}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <ul className='grid grid-cols-1 justify-items-center gap-8 mx-auto max-w-lg md:grid-cols-2 md:max-w-[initial]'>
          {filteredPosts.map((post) => (
            <li key={post.slug}>
              <ArticleCard post={post} />
            </li>
          ))}
        </ul>

        {filteredPosts.length === 0 && (
          <p className='text-gray-400'>No posts found in this category.</p>
        )}
      </div>
    </section>
  );
}
