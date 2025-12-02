import { getMdxContent, Heading } from '@/lib/mdx';
import { personalProjects, clientProjects } from '@/config/projects';
import { notFound } from 'next/navigation';
import { siteData } from '@/config/siteData';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { coreMdxComponents } from '@/components/mdx/mdxArticleComponents/mdxParentFile';

import TechnologyContainer from '@/components/ui/TechnologyContainer';
import GradientButton from '@/components/ui/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import styles from './CaseStudy.module.scss';
import TableOfContent from '@/components/mdx/TableOfContent';
import ImageCarousel from '@/components/ui/ProjectImageCarousel';
import MobileTableOfContent from '@/components/mdx/MobileTableOfContent';
import ShareButton from '@/components/ui/ShareButton';
import FormattedDate from '@/components/ui/FormattedDate';

interface CaseStudyPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const allProjects = [...personalProjects, ...clientProjects];

  return allProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const result = await getMdxContent(slug, 'case-studies');
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
  const mdxResult = (await getMdxContent(slug, 'case-studies')) ?? notFound();
  const { frontmatter, headings, content } = mdxResult;

  const allProjects = [...personalProjects, ...clientProjects];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className='nwt--f-h1'>
          <span className='nwt--txt-gradient'>Case Study: {project.title}</span>
        </h1>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyTop}>
          <div className={styles.studyOverview}>
            <div>
              <h2 id='study-overview' className='nwt--f-h3'>
                Study Overview
              </h2>
              <hr />
            </div>
            <div className={styles.details}>
              <div>
                <strong>Study Details:</strong>
                <ul>
                  <li>
                    <span>Author:</span>
                    <span>{frontmatter.author}</span>
                  </li>
                  <li>
                    <span>Published:</span>
                    <span>
                      <FormattedDate dateString={frontmatter.published} />
                    </span>
                  </li>
                  {frontmatter.updated && (
                    <li>
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
                <div>
                  <strong>Project Details:</strong>
                  <ul>
                    {frontmatter.designedBy && (
                      <li>
                        <span>Design:</span>
                        <span>{frontmatter.designedBy}</span>
                      </li>
                    )}
                    {frontmatter.developedBy && (
                      <li>
                        <span>Developed:</span>
                        <span>{frontmatter.developedBy}</span>
                      </li>
                    )}
                    {frontmatter.releaseDateV1 && (
                      <li>
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
            <div className={styles.techStack}>
              <strong>Project Technology Stack:</strong>
              <ul>
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <TechnologyContainer technology={tech} variant='small' />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.links}>
              <strong>Important Links:</strong>
              <div>
                <GradientButton
                  as='a'
                  href={project.links.liveDemo}
                  target='_blank'
                  rel='noopener noreferrer'
                  variant='orange'
                  position='card'
                >
                  Live Demo
                  <CaretRightIcon />
                </GradientButton>
                <GradientButton
                  as='a'
                  href={project.links.github}
                  variant='blue'
                  target='_blank'
                  rel='noopener noreferrer'
                  position='card'
                >
                  GitHub
                  <CaretRightIcon />
                </GradientButton>
                <ShareButton />
              </div>
            </div>
          </div>
          {project.thumbnail && (
            <div className={styles.thumbnailOverview}>
              <div>
                <h2 id='project-images' className='nwt--f-h3'>
                  Project Images
                </h2>
                <hr />
              </div>
              <div>
                <ImageCarousel project={project} bigImageSize='75vw' />
              </div>
            </div>
          )}
          <nav
            className={styles.mobileTableOfContent}
            aria-label='Table of contents'
          >
            <MobileTableOfContent headings={headings} />
          </nav>
        </div>
        <div className={styles.bodyBottom}>
          <div className={styles.article}>
            <MDXRemote source={content} components={coreMdxComponents} />
          </div>
          <aside
            className={styles.tableOfContent}
            aria-label='Table of contents'
          >
            <TableOfContent headings={headings} variant='sidebar' />
          </aside>
        </div>
      </div>
    </article>
  );
}
