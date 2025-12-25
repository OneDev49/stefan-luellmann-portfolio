import { Project } from '@/config/projects';
import { TechIcon } from '../icons/TechIconMap';
import { cn } from '@/lib/utilities';
import { siteData } from '@/config/siteData';

import CaretRightIcon from '../icons/ui/CaretRightIcon';
import CTAButton from './CTAButton';
import ImageSkeletonLoader from './ImageSkeletonLoader';

interface ProjectCardProps {
  projectCategory: 'personal' | 'client';
  project: Project;
  cardVariant?: 'caseStudy' | 'all';
}

export default function ProjectCard({
  projectCategory,
  project,
  cardVariant = 'all',
}: ProjectCardProps) {
  const wrapperClassName = cn(
    'rounded-xl border grid grid-cols-1 max-w-[550px] mx-auto overflow-hidden',
    projectCategory === 'personal' &&
      'shadow-[0_0_20px_2px_rgb(0,81,255)] border-[#0059ff]',
    projectCategory === 'client' &&
      'shadow-[0_0_20px_2px_rgb(0,81,255)] border-[#0084ff]'
  );
  const imageContainerClassName = cn(
    'flex flex-col gap-2 relative border-b',
    projectCategory === 'personal' && 'border-[#0059ff] ',
    projectCategory === 'client' && 'border-[#0084ff]'
  );
  const imageOverlayClassName = cn(
    'absolute inset-0 z-30',
    projectCategory === 'personal' &&
      'shadow-[inset_0_-4px_15px_0_rgb(0,60,255)]',
    projectCategory === 'client' &&
      'shadow-[inset_0_-4px_15px_0_rgb(0,120,255)]'
  );
  const projectStatusClassName = cn(
    'absolute z-40 top-0 left-0 m-2 border px-3 rounded-md shadow-[0_4px_4px_0_rgb(0,0,0,0.25)]',
    (project.status === 'Not Released' && cardVariant === 'all') ||
      (project.caseStudyStatus === 'Not Released' &&
        cardVariant === 'caseStudy')
      ? 'bg-[#a90000]  border-[#550000]'
      : 'bg-[#00a92d] border-[#115500]'
  );

  const contentClassName = cn(
    'flex-auto flex flex-col gap-4 justify-between p-4',
    projectCategory === 'personal' &&
      'bg-[linear-gradient(-15deg,#001684_6%,#000830_27%,#000b43_68%,#001996_100%)]',
    projectCategory === 'client' &&
      'bg-[linear-gradient(-15deg,#003e84_6%,#000830_27%,#000b43_68%,#003e84_100%)]'
  );

  const anchorClassName = 'px-2 py-2 font-heading font-extrabold';

  return (
    <div className={wrapperClassName}>
      <div className={imageContainerClassName}>
        <div className={projectStatusClassName}>
          {cardVariant === 'caseStudy'
            ? `Case Study: ${project.caseStudyStatus}`
            : `Demo: ${project.status}`}
        </div>
        <div className={imageOverlayClassName} />
        <ImageSkeletonLoader
          className=''
          draggable='false'
          src={`${siteData.uploadThingUrl}/${project.thumbnail}`}
          alt={`Thumbnail for: ${project.title}`}
          title={project.title}
          height={320}
          width={550}
          sizes='50vw'
        />
      </div>
      <div className={contentClassName}>
        <div className='space-y-2'>
          {cardVariant === 'caseStudy' && (
            <strong className='underline font-mono'>
              {projectCategory.charAt(0).toUpperCase() +
                projectCategory.slice(1)}{' '}
              Project
            </strong>
          )}
          <div className='space-y-4'>
            <h3 className='text-h3-small font-extrabold underline'>
              {project.title}
            </h3>
            {project.techStack.length > 0 && (
              <ul className='flex flex-wrap gap-4'>
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <TechIcon height={30} width={30} name={tech} />
                  </li>
                ))}
              </ul>
            )}
            <p>
              {cardVariant === 'caseStudy'
                ? project.caseStudyBrief
                : project.description}
            </p>
          </div>
        </div>
        <div className='flex gap-4 flex-col justify-center'>
          {cardVariant === 'all' && (
            <>
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
                  Live-Demo of {project.title}
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
                  Live-Demo of {project.title}
                  <CaretRightIcon />
                </CTAButton>
              )}
            </>
          )}

          <div
            className={cn(
              'grid',
              cardVariant === 'caseStudy' ? 'grid-cols-1' : 'grid-cols-2 gap-4'
            )}
          >
            {project.caseStudyStatus === 'Released' ? (
              <CTAButton
                href={`/case-studies/${project.slug}`}
                colorStyle='gradientBlue'
                animation='all'
                className={anchorClassName}
              >
                {cardVariant === 'caseStudy'
                  ? `${project.title} Case Study`
                  : 'Project Case Study'}
                <CaretRightIcon />
              </CTAButton>
            ) : (
              <CTAButton
                as='button'
                type='button'
                colorStyle='gradientBlue'
                disabled={true}
                title={`Case Study of ${project.title} not yet released`}
                aria-label={`Case Study of ${project.title} not yet released`}
                className={anchorClassName}
              >
                {cardVariant === 'caseStudy'
                  ? `${project.title} Case Study`
                  : 'Project Case Study'}
                <CaretRightIcon />
              </CTAButton>
            )}
            {cardVariant === 'all' && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
