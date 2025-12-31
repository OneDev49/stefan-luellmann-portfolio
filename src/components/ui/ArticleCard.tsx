import { siteData } from '@/config/siteData';
import { Article } from '@/lib/mdx/articles';

import Link from 'next/link';
import ImageSkeletonLoader from './ImageSkeletonLoader';
import ArrowRightIcon from '../icons/ui/ArrowRightIcon';
import FormattedDate from './FormattedDate';

interface ArticleCardProps {
  post: Article;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const properCategory =
    post.topic.charAt(0).toUpperCase() + post.topic.slice(1);

  return (
    <Link
      href={`/articles/${post.topic}/${post.slug}`}
      className='bg-gradient-to-tr from-[#0077ff] to-[#000dff] block text-white rounded-2xl shadow-[0_0_15px_5px_#0051ff] overflow-hidden border-[#0059ff] border transition-all duration-300 ease-in-out max-w-lg hover:shadow-[0_0_15px_5px_#5289ff]'
    >
      <article className='flex flex-col'>
        {post.frontmatter.thumbnail && (
          <div className='p-4'>
            <div className='bg-black overflow-hidden rounded-2xl'>
              <ImageSkeletonLoader
                src={`${siteData.uploadThingUrl}/${post.frontmatter.thumbnail}`}
                alt={post.frontmatter.title}
                className='h-auto object-cover w-full'
                height={252}
                width={480}
                sizes='(min-width: 900px) 25vw, (min-width: 576px) 50vw, 100vw'
              />
            </div>
          </div>
        )}
        <div className='flex flex-col gap-4 p-4 bg-[#000830]'>
          <div className='text-[#9f9f9f] font-extrabold text-[14px]'>
            {post.topic && <span>Category: {properCategory} | </span>}
            {post.frontmatter.published && (
              <span>
                <FormattedDate dateString={post.frontmatter.published} />
              </span>
            )}
          </div>
          <h2 className='text-[22px] font-extrabold'>
            {post.frontmatter.title}
          </h2>
          {post.frontmatter.excerpt && <p>{post.frontmatter.excerpt}</p>}
          <div className='italic flex items-center font-extrabold gap-1 underline'>
            <span>To the {properCategory} Article</span>
            <ArrowRightIcon height={16} width={16} />
          </div>
        </div>
      </article>
    </Link>
  );
}
