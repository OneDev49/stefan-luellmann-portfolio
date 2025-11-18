import { getMdxContent, Heading, slugify } from '@/lib/mdx';
import { personalProjects, clientProjects } from '@/config/projects';
import { notFound } from 'next/navigation';
import { siteData } from '@/config/siteData';
import { MDXRemote } from 'next-mdx-remote/rsc';

import TechnologyContainer from '@/components/ui/TechnologyContainer';
import GradientButton from '@/components/ui/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import styles from './CaseStudy.module.scss';
import TableOfContent from '@/components/mdx/TableOfContent';
import TextBlock from '@/components/mdx/TextBlock';
import ImageCarousel from '@/components/ui/ImageCarousel';
import MobileTableOfContent from '@/components/mdx/MobileTableOfContent';
import ShareButton from '@/components/ui/ShareButton';
import Highlight from '@/components/mdx/Highlight';

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

  return {
    title: `Case Study: ${project?.title}`,
    description: project?.caseStudyBrief,
    authors: [{ name: frontmatter.author }],
    openGraph: {
      title: `Case Study: ${project?.title}`,
      description: project?.caseStudyBrief,
      url: `/case-studies/${slug}`,
      images: project?.thumbnail
        ? [{ url: `${siteData.uploadThingUrl}/${project?.thumbnail}` }]
        : [],
    },
  };
}

const H2 = ({ children }: { children?: React.ReactNode }) => {
  if (typeof children !== 'string') return <h2>{children}</h2>;
  const slug = slugify(children);
  return (
    <h2 id={slug} className={styles.caseStudyHeading}>
      {children}
    </h2>
  );
};

const H3 = ({ children }: { children?: React.ReactNode }) => {
  if (typeof children !== 'string') return <h3>{children}</h3>;
  const slug = slugify(children);
  return (
    <h3 id={slug} className={styles.caseStudyHeading}>
      {children}
    </h3>
  );
};

const P = (props: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={styles.caseStudyParagraph} {...props} />
);

const mdxComponents = {
  TextBlock,
  Highlight,
  h2: H2,
  h3: H3,
  p: P,
};

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;
  const mdxResult = (await getMdxContent(slug, 'case-studies')) ?? notFound();
  const { frontmatter, headings, content } = mdxResult;

  const allProjects = [...personalProjects, ...clientProjects];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const projectThumbnailHeading: Heading = {
    level: 2,
    text: 'Project Images',
    slug: 'project-images',
  };

  const studyOverviewHeading: Heading = {
    level: 2,
    text: 'Study Overview',
    slug: 'study-overview',
  };

  const extendedHeadings: Heading[] = [
    projectThumbnailHeading,
    studyOverviewHeading,
    ...headings,
  ];

  return (
    <article className={styles.wrapper}>
      <div className={styles.mainHeading}>
        <h1 className='nwt--f-h1'>
          <span className='nwt--txt-gradient'>Case Study: {project.title}</span>
        </h1>
        <div>
          <MobileTableOfContent headings={extendedHeadings} />
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          {project.thumbnail && (
            <div className={styles.thumbnailOverview}>
              <div>
                <h2 id='project-images' className='nwt--f-h2'>
                  Project Images
                </h2>
                <hr />
              </div>
              <div>
                <ImageCarousel project={project} bigImageSize='75vw' />
              </div>
            </div>
          )}
          <div className={styles.studyOverview}>
            <div>
              <h2 id='study-overview' className='nwt--f-h2'>
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
                    <span>{frontmatter.published}</span>
                  </li>
                  {frontmatter.updated && (
                    <li>
                      <span>Updated:</span>
                      <span>{frontmatter.updated}</span>
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
                        <span>{frontmatter.releaseDateV1}</span>
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
          <div className={styles.article}>
            <MDXRemote source={content} components={mdxComponents} />
          </div>
        </div>
        <aside className={styles.tableOfContent}>
          <TableOfContent headings={extendedHeadings} variant='sidebar' />
        </aside>
      </div>
    </article>
  );
}
