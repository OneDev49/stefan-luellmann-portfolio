import {
  getBlogPostBySlug,
  getRelatedPosts,
  BlogPost,
  getAllBlogPosts,
} from '@/lib/mdx';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { personalData, siteData } from '@/config/siteData';
import { coreMdxComponents } from '@/components/mdx/mdxArticleComponents/mdxParentFile';

import Link from 'next/link';
import styles from './BlogPost.module.scss';
import MobileTableOfContent from '@/components/mdx/MobileTableOfContent';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import TableOfContent from '@/components/mdx/TableOfContent';
import ArticleCard from '@/components/ui/ArticleCard';
import FormattedDate from '@/components/ui/FormattedDate';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const allPosts = await getAllBlogPosts();
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const result = await getBlogPostBySlug(slug);
  if (!result) return {};

  const { frontmatter } = result;

  const DESCRIPTION_TEXT =
    result.frontmatter.excerpt || 'A detailed article from Stefan Lüllmann';

  const THUMBNAIL = result.frontmatter.thumbnail
    ? [
        {
          url: `${siteData.uploadThingUrl}/${result.frontmatter.thumbnail}`,
        },
      ]
    : [];

  return {
    title: `${result.frontmatter.title}`,
    description: DESCRIPTION_TEXT,
    authors: [{ name: frontmatter.author }],

    openGraph: {
      title: `${result.frontmatter.title}`,
      description: DESCRIPTION_TEXT,
      url: `/blog/${slug}`,
      images: THUMBNAIL,
    },

    twitter: {
      card: 'summary_large_image',
      title: `${result.frontmatter.title}`,
      description: DESCRIPTION_TEXT,
      images: THUMBNAIL,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = params;

  const mdxResult = (await getBlogPostBySlug(slug)) ?? notFound();

  const { content, frontmatter, headings, category } = mdxResult;

  const currentPost: BlogPost = {
    slug,
    category,
    frontmatter: frontmatter,
  };

  const relatedPosts = await getRelatedPosts(currentPost, 2);

  return (
    <>
      <article className={styles.wrapper}>
        <div className={styles.header}>
          {(currentPost.category || currentPost.frontmatter.tags) && (
            <div className={styles.miscs}>
              {currentPost.category && (
                <div>
                  <strong>Category: </strong>
                  <span>
                    {currentPost.category.charAt(0).toUpperCase() +
                      currentPost.category.slice(1)}
                  </span>
                </div>
              )}
              {currentPost.category && currentPost.frontmatter.tags && (
                <span> • </span>
              )}
              {currentPost.frontmatter.tags && (
                <div className={styles.tags}>
                  <strong>Tags: </strong>
                  <div>
                    {currentPost.frontmatter.tags
                      .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
                      .join(' - ')}
                  </div>
                </div>
              )}
            </div>
          )}
          <div className={styles.headingPara}>
            <h1 className='nwt--f-h1'>{currentPost.frontmatter.title}</h1>
            <p>{currentPost.frontmatter.excerpt}</p>
          </div>
          <div className={styles.personalCard}>
            <div className={styles.personalImage}>
              <ImageSkeletonLoader
                draggable={false}
                priority={true}
                src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
                alt='Hey, I am Stefan!'
                height={75}
                width={75}
                sizes='10vw'
              />
            </div>
            <div className={styles.personalCardContent}>
              <div className={styles.personalText}>
                <strong>{currentPost.frontmatter.author}</strong>
                <span>•</span>
                <div>
                  <FormattedDate
                    dateString={currentPost.frontmatter.published}
                  />
                </div>
              </div>
              <hr />
              <div className={styles.personalLinks}>
                <a
                  href={personalData.social.linkedin}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  LinkedIn
                </a>
                <span> • </span>
                <a
                  href={personalData.social.github}
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  GitHub
                </a>
                <span> • </span>
                <Link href='/about'>About Me</Link>
              </div>
            </div>
          </div>
        </div>
        {currentPost.frontmatter.thumbnail && (
          <figure className={styles.thumbnail}>
            <ImageSkeletonLoader
              draggable={false}
              priority={true}
              src={`${siteData.uploadThingUrl}/${currentPost.frontmatter.thumbnail}`}
              alt={currentPost.frontmatter.title}
              width={1200}
              height={628}
              sizes='(min-width: 1250px) 75vw, 100vw'
            />
            <figcaption>
              <span>Picture:</span>
              <span className={styles.thumbnailCaption}>
                {currentPost.frontmatter.title}
              </span>
            </figcaption>
          </figure>
        )}
        <div className={styles.mobileTableOfContent}>
          <MobileTableOfContent headings={headings} />
        </div>
        <div className={styles.body}>
          <div className={styles.content}>
            <MDXRemote source={content} components={coreMdxComponents} />
          </div>
          <div className={styles.tableOfContentContainer}>
            <aside className={styles.tableOfContent}>
              <TableOfContent headings={headings} variant='sidebar' />
            </aside>
          </div>
        </div>
      </article>
      {relatedPosts.length > 0 && (
        <div className={styles.relatedArticles}>
          <div className={styles.relArtHeader}>
            <h2 className='nwt--f-h2'>Related Articles</h2>
            <p>My other Technical Articles that are related to this one.</p>
          </div>
          <div className={styles.relArtBody}>
            {relatedPosts.map((post, index) => (
              <ArticleCard key={index} post={post} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
