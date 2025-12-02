'use client';

import { useState, useMemo } from 'react';
import { BlogPost } from '@/lib/mdx';

import styles from './BlogHubClient.module.scss';
import ArticleCard from '@/components/ui/ArticleCard';

interface BlogHubClientProps {
  allPosts: BlogPost[];
  categories: string[];
}

export default function BlogHubClient({
  allPosts,
  categories,
}: BlogHubClientProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'all') return allPosts;
    return allPosts.filter((post) => post.category === activeCategory);
  }, [activeCategory, allPosts]);

  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>Browse all Articles I wrote</span>
        </h2>
        <p>
          Discover every article I have ever written, from Technical analysis to
          my personal opinion on Technical topics. It's all here, in one spot.
        </p>
      </div>
      <div className={styles.body}>
        <div className={styles.articleSort}>
          <h3 className='nwt--f-h4'>Sort by Article Category</h3>
          <nav>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                }}
                type='button'
                className={cat === activeCategory ? styles.active : ''}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        <ul className={styles.articleList}>
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
