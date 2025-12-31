import { getLatestArticles } from '@/lib/mdx/articles';
import { InteractiveGrid } from '../effects/InteractiveGrid';

import ArticleCard from '@/components/ui/ArticleCard';

interface LatestArticlesProps {
  heading: string;
  articleAmount?: number;
}

export default async function LatestArticles({
  heading,
  articleAmount = 2,
}: LatestArticlesProps) {
  const latestArticles = await getLatestArticles(articleAmount);

  return (
    <section className='relative'>
      <div
        className='absolute inset-0
                [mask-image:radial-gradient(100%_200px_at_100%_60%,black_30%,transparent_100%),radial-gradient(200px_300px_at_100%_50%,black_30%,transparent_100%),radial-gradient(200px_300px_at_0%_50%,black_30%,transparent_100%)] hidden lg:block'
      >
        <InteractiveGrid />
      </div>
      <div className='relative z-10 max-w-6xl w-full mx-auto px-4 space-y-10 mb-36'>
        <h2 className='text-h2 text-transparent font-extrabold capitalize text-center'>
          <span className='bg-gradient-card bg-clip-text'>{heading}</span>
        </h2>
        <ul className='flex justify-center flex-col items-center md:items-start md:flex-row gap-8'>
          {latestArticles.map((article, index) => (
            <li key={index}>
              <ArticleCard post={article} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
