import { personalProjects, clientProjects } from '@/config/projects';
import { notFound } from 'next/navigation';
import { siteData } from '@/config/siteData';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { coreMdxComponents } from '@/components/mdx/mdxArticleComponents/mdxParentFile';
import { getCaseStudyBySlug } from '@/lib/mdx/case-studies';
import { BackgroundNetworkParticles } from '@/components/effects/BackgroundNetworkParticles';

import TechnologyContainer from '@/components/ui/TechnologyContainer';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import TableOfContent from '@/components/mdx/TableOfContent';
import ShareButton from '@/components/ui/ShareButton';
import FormattedDate from '@/components/ui/FormattedDate';
import CTAButton from '@/components/ui/CTAButton';
import MobileTableOfContent from '@/components/mdx/MobileTableOfContent';

interface CaseStudyPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const allProjects = [...personalProjects, ...clientProjects];

  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const result = await getCaseStudyBySlug(slug);
  if (!result) return {};

  const { frontmatter } = result;

  const allProjects = [...personalProjects, ...clientProjects];
  const project = allProjects.find((p) => p.slug === slug);

  const DESCRIPTION_TEXT =
    project?.caseStudyBrief || 'A detailed case study from Stefan Lüllmann';

  const THUMBNAIL = project?.thumbnail
    ? [{ url: `${siteData.uploadThingUrl}/${project?.thumbnail}` }]
    : [];

  return {
    title: `Case Study: ${project?.title}`,
    description: DESCRIPTION_TEXT,
    authors: [{ name: frontmatter.author }],

    openGraph: {
      title: `Case Study: ${project?.title}`,
      description: DESCRIPTION_TEXT,
      url: `/case-studies/${slug}`,
      images: THUMBNAIL,
    },

    twitter: {
      card: 'summary_large_image',
      title: `Case Study: ${project?.title}`,
      description: DESCRIPTION_TEXT,
      images: THUMBNAIL,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const mdxResult = (await getCaseStudyBySlug(slug)) ?? notFound();
  const { frontmatter, headings, content } = mdxResult;

  const allProjects = [...personalProjects, ...clientProjects];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const maximumContentClassName = 'max-w-6xl mx-auto px-4 w-full';
  const anchorClassName = 'px-2 py-1 font-heading font-extrabold';
  const detailsHeadingClassName =
    'font-heading font-extrabold underline text-center';
  const detailsLiClassName = 'grid grid-cols-[1fr_auto] gap-8 text-sm';

  return (
    <article className='relative flex mb-36 flex-col gap-16'>
      <div className='relative'>
        <div className='absolute inset-0 [mask-image:linear-gradient(180deg,black_80%,transparent_100%)]'>
          <BackgroundNetworkParticles />
        </div>

        <div
          className={`${maximumContentClassName} mt-36 space-y-24 relative z-10`}
        >
          <div className='flex flex-col items-center text-center gap-6'>
            <h1 className='text-h1 font-extrabold capitalize leading-[1.1]'>
              <span className='text-h3 font-mono'>Case Study</span>
              <div className='text-transparent'>
                <span className='bg-gradient-card bg-clip-text'>
                  {project.title}
                </span>
              </div>
            </h1>
            <ul className='flex flex-wrap justify-center gap-2'>
              {project.techStack.map((tech) => (
                <li key={tech}>
                  <TechnologyContainer
                    technology={tech}
                    svgHeight={25}
                    svgWidth={25}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col items-center max-w-xl mx-auto gap-4'>
            <div className='w-full flex flex-col items-center text-center gap-1'>
              <h2 className='text-h3-small font-extrabold capitalize'>
                Study Overview
              </h2>
              <hr className='border-[#b3b3b3] w-3/5' />
            </div>
            <div className='flex flex-col gap-4 justify-between items-start sm:gap-16 sm:flex-row'>
              <div className='space-y-1'>
                <div className={detailsHeadingClassName}>
                  <strong>Study Details:</strong>
                </div>
                <ul>
                  <li className={detailsLiClassName}>
                    <span>Author:</span>
                    <span>{frontmatter.author}</span>
                  </li>
                  <li className={detailsLiClassName}>
                    <span>Published:</span>
                    <span>
                      <FormattedDate dateString={frontmatter.published} />
                    </span>
                  </li>
                  {frontmatter.updated && (
                    <li className={detailsLiClassName}>
                      <span>Updated:</span>
                      <span>
                        <FormattedDate dateString={frontmatter.updated} />
                      </span>
                    </li>
                  )}
                </ul>
              </div>
              {(frontmatter.designedBy ||
                frontmatter.developedBy ||
                frontmatter.releaseDateV1) && (
                <div className='space-y-1'>
                  <div className={detailsHeadingClassName}>
                    <strong>Project Details:</strong>
                  </div>
                  <ul>
                    {frontmatter.designedBy && (
                      <li className={detailsLiClassName}>
                        <span>Design:</span>
                        <span>{frontmatter.designedBy}</span>
                      </li>
                    )}
                    {frontmatter.developedBy && (
                      <li className={detailsLiClassName}>
                        <span>Developed:</span>
                        <span>{frontmatter.developedBy}</span>
                      </li>
                    )}
                    {frontmatter.releaseDateV1 && (
                      <li className={detailsLiClassName}>
                        <span>Release Date V1:</span>
                        <span>
                          <FormattedDate
                            dateString={frontmatter.releaseDateV1}
                          />
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className='space-y-1'>
              <div className={detailsHeadingClassName}>
                <strong>Important Links:</strong>
              </div>
              <div className='flex gap-4 flex-col sm:flex-row'>
                {project.status === 'Not Released' ? (
                  <CTAButton
                    as='button'
                    type='button'
                    colorStyle='gradientBlue'
                    animation='all'
                    className={anchorClassName}
                    disabled={true}
                    title={`Live-Demo of ${project.title} not yet released`}
                    aria-label={`Live-Demo of ${project.title} not yet released`}
                  >
                    Project Live-Demo
                    <CaretRightIcon />
                  </CTAButton>
                ) : (
                  <CTAButton
                    as='a'
                    href={project.links.liveDemo}
                    colorStyle='gradientBlue'
                    target='_blank'
                    rel='noopener noreferrer'
                    animation='all'
                    className={anchorClassName}
                  >
                    Project Live-Demo
                    <CaretRightIcon />
                  </CTAButton>
                )}
                {project.links.github !== null ? (
                  <CTAButton
                    as='a'
                    href={project.links.github}
                    colorStyle='gradientBlue'
                    animation='all'
                    target='_blank'
                    rel='noopener noreferrer'
                    className={anchorClassName}
                  >
                    Project GitHub
                    <CaretRightIcon />
                  </CTAButton>
                ) : (
                  <CTAButton
                    as='button'
                    type='button'
                    colorStyle='gradientBlue'
                    disabled={true}
                    title={`GitHub of ${project.title} not public`}
                    aria-label={`GitHub of ${project.title} not public`}
                    className={anchorClassName}
                  >
                    Project GitHub
                    <CaretRightIcon />
                  </CTAButton>
                )}
              </div>
            </div>
          </div>
          <div className='lg:hidden'>
            <MobileTableOfContent headings={headings} />
          </div>
          <div className='border-t border-[#0066ff] space-y-2'>
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
        className={`${maximumContentClassName} flex items-start justify-between gap-8`}
      >
        <div className='basis-[72ch] max-w-[72ch]'>
          <MDXRemote source={content} components={coreMdxComponents} />
        </div>
        <aside
          className='basis-[290px] flex-shrink-0 pt-4 pb-12 px-6 sticky t-[70px] hidden lg:block'
          aria-label='Table of contents'
        >
          <TableOfContent headings={headings} variant='sidebar' />
        </aside>
      </div>
    </article>
  );
}
