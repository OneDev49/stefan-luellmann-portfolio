import { Project } from '@/config/projects';
import { TechIcon } from '../icons/TechIconMap';
import { cn } from '@/lib/utilities';
import { siteData } from '@/config/siteData';

import CaretRightIcon from '../icons/ui/CaretRightIcon';
import CTAButton from './CTAButton';
import ImageSkeletonLoader from './ImageSkeletonLoader';

interface BigProjectCardProps {
  projectCategory: 'personal' | 'client';
  project: Project;
}

export default function BigProjectCard({
  projectCategory,
  project,
}: BigProjectCardProps) {
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
    project.status === 'Not Released'
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
        <div className={projectStatusClassName}>{project.status}</div>
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
        <div className='flex flex-col gap-6'>
          <h3 className='text-h3-small font-extrabold underline'>
            {project.title}
          </h3>
          {project.techStack.length > 0 && (
            <ul className='flex flex-wrap gap-4'>
              {project.techStack.map((tech) => (
                <li key={tech}>
                  <TechIcon height={40} width={40} name={tech} />
                </li>
              ))}
            </ul>
          )}
          <div>{project.description}</div>
        </div>
        <div className='flex gap-4 flex-col justify-center'>
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

          <div className='grid grid-cols-2 gap-4'>
            {project.caseStudyStatus === 'released' ? (
              <CTAButton
                href={`/case-studies/${project.slug}`}
                colorStyle='gradientBlue'
                animation='all'
                className={anchorClassName}
              >
                Project Case Study
                <CaretRightIcon />
              </CTAButton>
            ) : (
              <CTAButton
                as='button'
                type='button'
                colorStyle='gradientBlue'
                disabled={true}
                title='Project Case Study not yet released'
                aria-label='Project Case Study not yet released'
                className={anchorClassName}
              >
                Project Case Study
              </CTAButton>
            )}
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
          </div>
        </div>
      </div>
    </div>
  );
}
