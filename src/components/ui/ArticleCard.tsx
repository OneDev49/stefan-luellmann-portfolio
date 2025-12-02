import { BlogPost } from '@/lib/mdx';
import { siteData } from '@/config/siteData';

import Link from 'next/link';
import styles from './ArticleCard.module.scss';
import ImageSkeletonLoader from './ImageSkeletonLoader';
import ArrowRightIcon from '../icons/ui/ArrowRightIcon';
import FormattedDate from './FormattedDate';

interface ArticleCardProps {
  post: BlogPost;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const properCategory =
    post.category.charAt(0).toUpperCase() + post.category.slice(1);

  return (
    <Link href={`/blog/${post.slug}`} className={styles.container}>
      <article>
        {post.frontmatter.thumbnail && (
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <ImageSkeletonLoader
                src={`${siteData.uploadThingUrl}/${post.frontmatter.thumbnail}`}
                alt={post.frontmatter.title}
                height={252}
                width={480}
                sizes='(min-width: 900px) 25vw, (min-width: 576px) 50vw, 100vw'
              />
            </div>
          </div>
        )}
        <div className={styles.contentContainer}>
          <div className={styles.misc}>
            {post.category && <span>Category: {properCategory} | </span>}
            {post.frontmatter.published && (
              <span>
                <FormattedDate dateString={post.frontmatter.published} />
              </span>
            )}
          </div>
          <h2 className='nwt--f-h4'>{post.frontmatter.title}</h2>
          {post.frontmatter.excerpt && <p>{post.frontmatter.excerpt}</p>}
          <div className={styles.navLink}>
            <span>To the {properCategory} Article</span>

            <ArrowRightIcon height={16} width={16} />
          </div>
        </div>
      </article>
    </Link>
  );
}
