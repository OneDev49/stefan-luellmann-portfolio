import { TopicPagedata } from '@/config/topics';
import { getArticlesByTopic } from '@/lib/mdx/articles';

import ArticleCard from '@/components/ui/ArticleCard';
import ExclamationIcon from '@/components/icons/glyphs/ExclamationIcon';

interface TopicsMainProps {
  pageData: TopicPagedata;
  topic: string;
}

export default async function TopicsMain({ pageData, topic }: TopicsMainProps) {
  const allTopicArticles = await getArticlesByTopic(topic);

  return (
    <section
      id='relatedArticles'
      className='mt-26 mb-36 mx-auto max-w-7xl px-4 scroll-mt-20 space-y-12'
    >
      <div className='text-center space-y-2'>
        <h2 className='text-h3 text-transparent font-extrabold capitalize'>
          <span className='bg-gradient-card bg-clip-text'>
            {pageData.main.heading}
          </span>
        </h2>
        <p>{pageData.main.paragraph}</p>
      </div>
      <div className='flex flex-col gap-8'>
        {allTopicArticles.length > 0 ? (
          <ul className='grid grid-cols-1 justify-items-center gap-8 mx-auto max-w-lg md:grid-cols-2 md:max-w-[initial]'>
            {allTopicArticles.map((article, index) => (
              <li key={index}>
                <ArticleCard post={article} />
              </li>
            ))}
          </ul>
        ) : (
          <div className='text-center pt-8 flex items-center justify-center gap-4'>
            <ExclamationIcon width={15} height={20} />
            <strong className='underline'>
              There are currently no articles published for this Topic!
            </strong>
            <ExclamationIcon width={15} height={20} />
          </div>
        )}
      </div>
    </section>
  );
}
