import { TechnologyName } from '@/components/icons/TechIconMap';
import { allProjects, Project } from '@/config/projects';
import { personalData, siteData } from '@/config/siteData';
import {
  Article,
  getArticlesByCategory,
  getLatestArticles,
} from '@/lib/mdx/articles';

import LinkedInIconWithName from '@/components/icons/brands/LinkedInIconWithName';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import FormattedDate from '@/components/ui/FormattedDate';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import MenuButton from '@/components/ui/MenuButton';
import TechnologyContainer from '@/components/ui/TechnologyContainer';
import Link from 'next/link';
import CTAButton from '@/components/ui/CTAButton';

export default async function HomePageBento() {
  const latestArticle: Article[] = await getLatestArticles(1);
  const latestOpinionArticle: Article[] = await getArticlesByCategory(
    'opinion',
    1
  );
  const latestPlaybookArticle: Article[] = await getArticlesByCategory(
    'playbook',
    1
  );
  const latestProject: Project | undefined =
    allProjects[allProjects.length - 1];
  const maximumTechStack = latestProject?.techStack.slice(0, 6);

  const techIcons: TechnologyName[] = [
    'nextjs',
    'react',
    'typescript',
    'vercel',
    'netlify',
    'prisma',
    'postgresql',
  ];

  const listClassName =
    'bg-gradient-to-br from-[#003cff] via-[#5e00ff] to-[#003cff] min-h-[250px] p-0.5 rounded-md shadow-lg shadow-blue-800';
  const listBgClassName = 'bg-[#001456] h-full rounded-md p-4';
  const hrClassName =
    'max-w-[75%] h-0.5 border-0 bg-gradient-to-br from-[#0033ff] to-[#0059ff]';
  const listHeadingClassName = 'text-[26px] font-extrabold capitalize';
  const listButtonClassName =
    'gap-1 py-1 px-2 items-center rounded-md font-heading font-extrabold';
  const contentSkeletonClassName = 'h-2 bg-neutral-50/25 rounded-full';

  return (
    <section className='max-w-6xl space-y-6 w-full mx-auto px-4 mb-36'>
      <div className='space-y-2'>
        <h2 className='text-h2 text-transparent font-extrabold capitalize text-center'>
          <span className='bg-gradient-card bg-clip-text'>
            Explore my Website
          </span>
        </h2>
        <hr className='border-gray-400' />
      </div>
      <ul className='grid lg:grid-cols-3 lg:grid-rows-3 gap-6'>
        <li className={`${listClassName} col-span-2`}>
          <div
            className={`${listBgClassName} flex flex-col gap-4 text-center sm:text-left`}
          >
            <div className='w-full'>
              <h3 className={listHeadingClassName}>
                My Latest Technical Deep Dive
              </h3>
              <hr className={`${hrClassName} mx-auto sm:mx-0`} />
            </div>
            {latestArticle.map((article) => (
              <div
                key={article.frontmatter.title}
                className='flex flex-1 items-center gap-2'
              >
                <div className='flex flex-col gap-4 items-center sm:items-start flex-1'>
                  <div className='sm:hidden'>
                    <Link href={`/articles/${article.topic}/${article.slug}`}>
                      <ImageSkeletonLoader
                        loading='eager'
                        draggable={false}
                        alt={article.frontmatter.title}
                        title={article.frontmatter.title}
                        src={`${siteData.uploadThingUrl}/x81VdwhEWe9Y9GUnOvVSpGcn3VJg5sjiNkum8Iy2dAoabDQT`}
                        width={307}
                        height={160}
                        className='h-auto w-full'
                      />
                    </Link>
                  </div>
                  <div className='space-x-2 text-sm'>
                    <strong>Published:</strong>
                    <FormattedDate dateString={article.frontmatter.published} />
                  </div>
                  <div>
                    <h4 className='line-clamp-1 text-[18px] font-extrabold underline'>
                      {article.frontmatter.title}
                    </h4>
                    <p className='line-clamp-2 text-sm'>
                      {article.frontmatter.excerpt}
                    </p>
                  </div>
                  <CTAButton
                    href={`/articles/${article.topic}/${article.slug}`}
                    className={listButtonClassName}
                    animation='all'
                    colorStyle='gradientBlue'
                  >
                    Read latest Deep Dive
                    <CaretRightIcon height={24} width={14} />
                  </CTAButton>
                </div>
                <div className='flex-1 hidden sm:block'>
                  <Link href={`/articles/${article.topic}/${article.slug}`}>
                    <ImageSkeletonLoader
                      loading='eager'
                      draggable={false}
                      alt={article.frontmatter.title}
                      title={article.frontmatter.title}
                      src={`${siteData.uploadThingUrl}/x81VdwhEWe9Y9GUnOvVSpGcn3VJg5sjiNkum8Iy2dAoabDQT`}
                      width={307}
                      height={160}
                      className='h-auto w-full'
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </li>
        <li className={`${listClassName} col-span-2 col-start-1 row-start-2`}>
          <div
            className={`${listBgClassName} flex flex-col gap-4 text-center sm:text-left`}
          >
            <div className='w-full'>
              <h3 className={listHeadingClassName}>My Latest Project</h3>
              <hr className={`${hrClassName} mx-auto sm:mx-0`} />
            </div>
            {latestProject && maximumTechStack ? (
              <div className='flex flex-1 items-center gap-2'>
                <div className='flex flex-col gap-4 items-center sm:items-start flex-1'>
                  <div className='sm:hidden'>
                    <a
                      href={latestProject.links.liveDemo}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <ImageSkeletonLoader
                        draggable={false}
                        alt={latestProject.title}
                        title={latestProject.title}
                        src={`${siteData.uploadThingUrl}/${latestProject.thumbnail}`}
                        width={307}
                        height={160}
                        className='h-auto w-full'
                      />
                    </a>
                  </div>
                  <h4 className='line-clamp-1 text-[18px] font-extrabold underline'>
                    {latestProject.title}
                  </h4>
                  <ul className='flex flex-wrap items-center gap-1'>
                    {maximumTechStack.map((tech) => (
                      <li key={tech} title={tech}>
                        <TechnologyContainer
                          technology={tech}
                          svgHeight={20}
                          svgWidth={20}
                          styleSize='small'
                          variant='icon'
                          className='text-sm px-1'
                        />
                      </li>
                    ))}
                    {latestProject.techStack.length > 5 && (
                      <li className='text-[12px] underline'>and more...</li>
                    )}
                  </ul>
                  <p className='line-clamp-2 text-sm'>
                    {latestProject.description}
                  </p>
                  <MenuButton
                    project={latestProject}
                    className='font-extrabold'
                  />
                </div>
                <div className='flex-1 hidden sm:block'>
                  <a
                    href={latestProject.links.liveDemo}
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    <ImageSkeletonLoader
                      draggable={false}
                      alt={latestProject.title}
                      title={latestProject.title}
                      src={`${siteData.uploadThingUrl}/${latestProject.thumbnail}`}
                      width={307}
                      height={160}
                      className='h-auto w-full'
                    />
                  </a>
                </div>
              </div>
            ) : (
              <div className='max-w-sm animate-pulse space-y-2'>
                <div className={`${contentSkeletonClassName} max-w-36`} />
                <div className={`${contentSkeletonClassName} max-w-40`} />
                <div className={`${contentSkeletonClassName} max-w-48`} />
                <div className={`${contentSkeletonClassName} max-w-24`} />
                <div className={`${contentSkeletonClassName} max-w-64`} />
                <div className={`${contentSkeletonClassName} max-w-72`} />
                <div className='h-8 max-w-24 bg-neutral-50/25 rounded-md' />
              </div>
            )}
          </div>
        </li>

        <li
          className={`${listClassName} row-start-3 col-span-2 row-span-1 md:col-span-2 md:col-start-1 lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:col-span-1`}
        >
          <div className={`${listBgClassName} flex gap-2`}>
            <div className='flex flex-col gap-4 flex-1 justify-between'>
              <div>
                <h3 className={listHeadingClassName}>My Latest Articles</h3>
                <hr className={hrClassName} />
                <p className='mt-2'>
                  I write 3 articles each week, each one being technical in
                  nature.
                </p>
              </div>
              <div className='flex gap-4 sm:items-start flex-col sm:flex-row lg:flex-col lg:items-stretch'>
                <div className='grid gap-1 flex-1'>
                  <h4 className='line-clamp-1 text-[18px]'>Opinion Article:</h4>
                  <hr className='border-gray-600' />
                  {latestOpinionArticle.length > 0 ? (
                    latestOpinionArticle.map((article) => (
                      <Link
                        href={`/articles/${article.topic}/${article.slug}`}
                        key={article.frontmatter.title}
                      >
                        <ImageSkeletonLoader
                          loading='eager'
                          draggable={false}
                          alt={article.frontmatter.title}
                          title={article.frontmatter.title}
                          src={`${siteData.uploadThingUrl}/x81VdwhEWe9Y9GUnOvVSpGcn3VJg5sjiNkum8Iy2dAoabDQT`}
                          width={260}
                          height={135}
                          className='h-auto w-full'
                        />
                      </Link>
                    ))
                  ) : (
                    <div className='grid place-items-center h-[135px] w-full bg-white/25 animate-pulse rounded-md'>
                      <span>Loading...</span>
                    </div>
                  )}
                </div>
                <div className='grid gap-1 flex-1'>
                  <h4 className='line-clamp-1 text-[18px]'>
                    Playbook Article:
                  </h4>
                  <hr className='border-gray-600' />
                  {latestPlaybookArticle.length > 0 ? (
                    latestPlaybookArticle.map((article) => (
                      <Link
                        href={`/articles/${article.topic}/${article.slug}`}
                        key={article.frontmatter.title}
                      >
                        <ImageSkeletonLoader
                          loading='eager'
                          draggable={false}
                          alt={article.frontmatter.title}
                          title={article.frontmatter.title}
                          src={`${siteData.uploadThingUrl}/x81VdwhEWe9Y9GUnOvVSpGcn3VJg5sjiNkum8Iy2dAoabDQT`}
                          width={260}
                          height={135}
                          className='h-auto w-full'
                        />
                      </Link>
                    ))
                  ) : (
                    <div className='grid place-items-center h-[135px] w-full bg-white/25 animate-pulse rounded-md'>
                      <span>Loading...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </li>
        <li
          className={`${listClassName} col-span-2 row-start-4 md:col-span-1 md:row-start-4 lg:row-start-3`}
        >
          <div className={`${listBgClassName} flex gap-2`}>
            <div className='flex-1 flex flex-col gap-4 items-center'>
              <div className='w-full flex flex-col items-center gap-2'>
                <h3 className={listHeadingClassName}>
                  <LinkedInIconWithName />
                </h3>
                <div className='w-full'>
                  <hr className={`${hrClassName} mx-auto`} />
                </div>
              </div>
              <article className='flex gap-3 items-center'>
                <div
                  className={`flex-1 max-w-[70px] overflow-hidden rounded-full shadow-[0_0_15px_2px_rgb(0,119,255)]`}
                >
                  <ImageSkeletonLoader
                    loading='eager'
                    className='w-auto'
                    priority={true}
                    draggable='false'
                    src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
                    alt="I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives!"
                    title="Hey there, I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives"
                    height={70}
                    width={70}
                    sizes='50vw'
                  />
                </div>
                <div className='flex-1 justify-center flex flex-col gap-1'>
                  <strong className='text-2xl font-extrabold underline font-heading'>
                    Stefan Lüllmann
                  </strong>
                  <div className='text-[10px] space-x-1'>
                    <span className='font-extrabold'>@stefanluellmann</span>
                    <span>|</span>
                    <span>Full-Stack Developer</span>
                  </div>
                  <ul className='flex gap-2'>
                    {techIcons.map((tech) => (
                      <li key={tech}>
                        <TechnologyContainer
                          svgHeight={18}
                          svgWidth={18}
                          technology={tech}
                          variant='icon'
                          background={false}
                          styleSize='none'
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              <p className='space-x-1'>
                <strong className='underline'>30+</strong>
                <span>Current Technical Posts</span>
              </p>
              <CTAButton
                as='a'
                href={`${personalData.social.linkedin}`}
                rel='noopener noreferrer'
                target='_blank'
                className={listButtonClassName}
                animation='all'
                colorStyle='gradientBlue'
              >
                Connect on LinkedIn
                <CaretRightIcon height={24} width={14} />
              </CTAButton>
            </div>
          </div>
        </li>
        <li
          className={`${listClassName} col-span-2 row-start-5 md:col-span-1 md:row-start-4 lg:row-start-3`}
        >
          <div
            className={`${listBgClassName} flex flex-col justify-center gap-4 items-center`}
          >
            <div className='w-full flex flex-col items-center gap-2'>
              <h3 className={listHeadingClassName}>More About Me</h3>
              <div className='w-full'>
                <hr className={`${hrClassName} mx-auto`} />
              </div>
            </div>
            <p className='text-center'>
              Learn more about me, how I became a Full-Stack Engineer and my
              full journey to who I am now.
            </p>
            <CTAButton
              href='/about'
              className={listButtonClassName}
              animation='all'
              colorStyle='gradientBlue'
            >
              To my About Page
              <CaretRightIcon height={24} width={14} />
            </CTAButton>
          </div>
        </li>
        <li
          className={`${listClassName} col-span-2 row-start-6 md:col-span-2 md:row-start-5 lg:col-span-1 lg:row-start-3`}
        >
          <div
            className={`${listBgClassName} flex flex-col justify-center gap-4 items-center`}
          >
            <div className='w-full flex flex-col items-center gap-2'>
              <h3 className={listHeadingClassName}>My Technology Stack</h3>
              <div className='w-full'>
                <hr className={`${hrClassName} mx-auto`} />
              </div>
            </div>
            <p className='text-center'>
              Discover which technologies I use to architect scalable,
              maintainable projects for SMBs of all types.
            </p>
            <CTAButton
              href='/about#techstack'
              className={listButtonClassName}
              animation='all'
              colorStyle='gradientBlue'
            >
              View my TechStack
              <CaretRightIcon height={24} width={14} />
            </CTAButton>
          </div>
        </li>
      </ul>
    </section>
  );
}
