import { getLatestArticles } from '@/lib/mdx/articles';

import ArticleCard from '@/components/ui/ArticleCard';

export default async function HomepageLatestArticle() {
  const latestArticles = await getLatestArticles(2);

  return (
    <section className='max-w-6xl w-full mx-auto px-4 space-y-10 mb-36'>
      <h2 className='text-h2 text-transparent font-extrabold capitalize text-center'>
        <span className='bg-gradient-card bg-clip-text'>
          Discover my latest Technical Deep Dives
        </span>
      </h2>
      <ul className='flex justify-center flex-col items-center md:items-start md:flex-row gap-8'>
        {latestArticles.map((article, index) => (
          <li key={index}>
            <ArticleCard post={article} />
          </li>
        ))}
      </ul>
    </section>
  );
}
