import { getMdxContent } from '@/lib/mdx';
import { personalProjects, clientProjects } from '@/config/projects';
import { notFound } from 'next/navigation';
import { siteData } from '@/config/siteData';

import TechnologyContainer from '@/components/ui/TechnologyContainer';
import GradientButton from '@/components/ui/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import styles from './CaseStudy.module.scss';

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

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;

  const { content, frontmatter } =
    (await getMdxContent(slug, 'case-studies')) ?? notFound();

  const allProjects = [...personalProjects, ...clientProjects];
  const project = allProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className={styles.wrapper}>
      <h1 className='nwt--f-h1'>Case Study: {project.title}</h1>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <div className={styles.studyOverview}>
            <h2 className='nwt--f-h2'>Study Overview</h2>
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
              </div>
            </div>
          </div>
          <div className={styles.article}>{content}</div>
        </div>
        <aside className={styles.tableOfContent}></aside>
      </div>
    </article>
  );
}
