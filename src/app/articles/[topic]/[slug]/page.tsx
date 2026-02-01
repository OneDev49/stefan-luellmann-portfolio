import {
  Article,
  getAllArticles,
  getArticleByTopicAndSlug,
  getRelatedArticles,
} from '@/lib/mdx/articles';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import { personalData, siteData } from '@/config/siteData';
import { coreMdxComponents } from '@/components/mdx/mdxArticleComponents/mdxParentFile';
import { BackgroundNetworkParticles } from '@/components/effects/BackgroundNetworkParticles';

import Link from 'next/link';
import MobileTableOfContent from '@/components/mdx/MobileTableOfContent';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import TableOfContent from '@/components/mdx/TableOfContent';
import ArticleCard from '@/components/ui/ArticleCard';
import FormattedDate from '@/components/ui/FormattedDate';
import ShareButton from '@/components/ui/ShareButton';

interface PageProps {
  params: Promise<{ topic: string; slug: string }>;
}

export async function generateStaticParams() {
  const allArticles = await getAllArticles();
  return allArticles.map((article) => ({
    topic: article.topic,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { topic, slug } = await params;
  const result = await getArticleByTopicAndSlug(topic, slug);
  if (!result) return {};

  const { frontmatter } = result;

  const DESCRIPTION_TEXT =
    frontmatter.excerpt || 'A detailed article from Stefan Lüllmann';

  const THUMBNAIL = frontmatter.thumbnail
    ? [
        {
          url: `${siteData.uploadThingUrl}/${frontmatter.thumbnail}`,
        },
      ]
    : [];

  return {
    title: `${frontmatter.title}`,
    description: DESCRIPTION_TEXT,
    authors: [{ name: frontmatter.author }],

    openGraph: {
      title: `${frontmatter.title}`,
      description: DESCRIPTION_TEXT,
      url: `/articles/${topic}/${slug}`,
      images: THUMBNAIL,
    },

    twitter: {
      card: 'summary_large_image',
      title: `${frontmatter.title}`,
      description: DESCRIPTION_TEXT,
      images: THUMBNAIL,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { topic, slug } = await params;

  const mdxResult = (await getArticleByTopicAndSlug(topic, slug)) ?? notFound();

  const { content, frontmatter, headings } = mdxResult;

  const currentArticle: Article = {
    slug,
    topic,
    frontmatter: frontmatter,
  };

  const relatedArticles = await getRelatedArticles(currentArticle, 2);

  const personalLinksClassName =
    'underline transition-colors duration-300 ease-in-out hover:text-[#7fc1ff]';
  const maximumContentClassName = 'max-w-6xl mx-auto px-4 w-full';

  return (
    <>
      <article className='relative flex mb-36 flex-col gap-16'>
        <div className='relative'>
          <div className='absolute opacity-75 inset-0 [mask-image:linear-gradient(180deg,black_80%,transparent_100%)]'>
            <BackgroundNetworkParticles />
          </div>

          <div
            className={`${maximumContentClassName} mt-36 space-y-24 relative z-10`}
          >
            <div className='flex flex-col items-center text-center gap-6'>
              <div className='flex flex-col items-center gap-2 md:flex-row md:items-start'>
                <div>
                  <strong>Topic: </strong>
                  <span>{topic.charAt(0).toUpperCase() + topic.slice(1)}</span>
                </div>
                <span className='hidden md:inline'> • </span>
                <div>
                  <strong>Category: </strong>
                  <span>
                    {frontmatter.category.charAt(0).toUpperCase() +
                      frontmatter.category.slice(1)}
                  </span>
                </div>
              </div>
              <h1 className='text-h1 font-extrabold capitalize leading-[1.1]'>
                <span className='text-transparent bg-gradient-card bg-clip-text'>
                  {frontmatter.title}
                </span>
              </h1>
              <p>{frontmatter.excerpt}</p>
            </div>
            <div className='flex items-center flex-col gap-2 my-8'>
              <div className='rounded-full overflow-hidden shadow-[0_0_30px_2px_#0077ff] min-w-20 max-w-32'>
                <ImageSkeletonLoader
                  draggable={false}
                  priority={true}
                  src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
                  alt="I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives!"
                  height={75}
                  width={75}
                  sizes='10vw'
                  className='h-auto w-full object-cover'
                />
              </div>
              <div className='flex flex-col items-center gap-1'>
                <div className='flex flex-col leading-normal text-center md:flex-row md:gap-2'>
                  <strong>{frontmatter.author}</strong>
                  <span className='hidden md:inline'>•</span>
                  <div>
                    <FormattedDate dateString={frontmatter.published} />
                  </div>
                </div>
                <hr className='border border-[#656565] rounded-md w-9/12' />
                <div className='flex flex-wrap gap-3 md:gap-1'>
                  <a
                    href={personalData.social.linkedin}
                    rel='noopener noreferrer'
                    target='_blank'
                    className={personalLinksClassName}
                  >
                    LinkedIn
                  </a>
                  <span className='hidden md:inline'> • </span>
                  <a
                    href={personalData.social.github}
                    rel='noopener noreferrer'
                    target='_blank'
                    className={personalLinksClassName}
                  >
                    GitHub
                  </a>
                  <span className='hidden md:inline'> • </span>
                  <Link href='/about' className={personalLinksClassName}>
                    About Me
                  </Link>
                </div>
              </div>
            </div>
            {frontmatter.thumbnail && (
              <figure className='max-w-3xl mx-auto'>
                <ImageSkeletonLoader
                  draggable={false}
                  priority={true}
                  src={`${siteData.uploadThingUrl}/${frontmatter.thumbnail}`}
                  alt={frontmatter.title}
                  width={1200}
                  height={628}
                  sizes='(min-width: 1250px) 75vw, 100vw'
                  className='h-auto'
                />

                <figcaption className='flex gap-2 text-sm text-[#d3d3d3]'>
                  <span className='underline'>Picture:</span>
                  <span className='italic'>{frontmatter.title}</span>
                </figcaption>
              </figure>
            )}
            <div className='lg:hidden'>
              <MobileTableOfContent headings={headings} />
            </div>
            <div className='border-t border-[#0066ff] space-y-2 max-w-[72ch] mx-auto lg:max-w-[initial]'>
              <strong className='font-heading font-extrabold text-lg underline'>
                Share the Study
              </strong>
              <ul>
                <li>
                  {/* TODO: Create more Options to share */}
                  <ShareButton />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className={`${maximumContentClassName} lg:flex items-start justify-between gap-8`}
        >
          <div className='basis-[72ch] max-w-[72ch] mx-auto lg:mx-[initial]'>
            <MDXRemote source={content} components={coreMdxComponents} />
          </div>
          <aside
            className='basis-[290px] flex-shrink-0 pb-12 px-6 sticky top-[70px] hidden lg:block'
            aria-label='Table of contents'
          >
            <TableOfContent
              headings={headings}
              variant='sidebar'
              listClassName='max-h-80'
            />
          </aside>
        </div>
      </article>
      {relatedArticles.length > 0 && (
        <div className='max-w-7xl mx-auto px-4 my-36 flex flex-col items-center gap-8'>
          <div className='text-center'>
            <h2 className='text-h2 font-extrabold'>
              <span className='text-transparent bg-gradient-card bg-clip-text'>
                Related Articles
              </span>
            </h2>
            <p>Other articles related to this topic.</p>
          </div>
          <div className='grid grid-cols-1 gap-8 items-start md:grid-cols-2'>
            {relatedArticles.map((article, index) => (
              <ArticleCard key={index} post={article} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
