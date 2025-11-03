'use client';

import { useState } from 'react';
import { Project } from '@/config/projects';
import { TechIcon } from '../icons/TechIconMap';
import { siteData } from '@/config/siteData';

import styles from './BigProjectCard.module.scss';
import GradientButton from './GradientButton';
import CaretRightIcon from '../icons/ui/CaretRightIcon';
import clsx from 'clsx';
import ImageSkeletonLoader from './ImageSkeletonLoader';
import useEmblaCarousel from 'embla-carousel-react';

interface BigProjectCardProps {
  projectCategory: 'personal' | 'client';
  project: Project;
}

export default function BigProjectCard({
  projectCategory,
  project,
}: BigProjectCardProps) {
  const [mainIndex, setMainIndex] = useState<number>(0);
  const [emblaRef] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const statusStyle =
    project.status === 'Not Released' ? styles.notReleased : styles.released;

  return (
    <div
      className={clsx(
        styles.projectWrapper,
        projectCategory === 'personal'
          ? styles.personalProject
          : styles.clientProject
      )}
    >
      <div className={styles.imageWrapper}>
        <div className={styles.mainImageWrapper}>
          <a
            href={project.links.liveDemo}
            target='_blank'
            rel='noopener noreferrer'
          >
            <ImageSkeletonLoader
              src={`${siteData.uploadThingUrl}/${project.images[mainIndex]}`}
              alt={`${project.title} Screenshot ${mainIndex + 1}`}
              style={{ objectFit: 'cover' }}
              width={500}
              height={300}
              sizes='25vw'
            />
            <div className={styles.mainImageForeground}>
              <span>Visit:</span>
              <span>{project.title}</span>
            </div>
          </a>
        </div>
        <div className={styles.thumbnailCarousel} ref={emblaRef}>
          <div className={styles.thumbnails}>
            {project.images.map((image, index) => (
              <div
                key={index}
                className={clsx(styles.thumbnailItem, {
                  [styles.activeThumbnail]: index === mainIndex,
                })}
                onClick={() => setMainIndex(index)}
              >
                <ImageSkeletonLoader
                  src={`${siteData.uploadThingUrl}/${image}`}
                  alt={`${project.title} Thumbnail ${index + 1}`}
                  width={120}
                  height={120}
                  style={{ objectFit: 'cover' }}
                  sizes='10vw'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h3 className='nwt--f-h3'>{project.title}</h3>
          <div className={`${styles.status} ${statusStyle}`}>
            <strong>Status:</strong>
            <div>{project.status}</div>
          </div>
          {project.techStack.length > 0 && (
            <div className={styles.techStack}>
              <strong>Used Tech-Stack:</strong>
              <ul>
                {project.techStack.map((tech) => (
                  <li key={tech}>
                    <TechIcon height={40} width={40} name={tech} />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>{project.description}</div>
        </div>
        <div className={styles.links}>
          <GradientButton
            as='a'
            href={project.links.liveDemo}
            variant='orange'
            position='card'
            target='_blank'
            rel='noopener noreferrer'
          >
            Project Live-Demo
            <CaretRightIcon />
          </GradientButton>
          {project.caseStudyStatus === 'released' ? (
            <GradientButton
              href={`/case-studies/${project.slug}`}
              variant='green'
              position='card'
            >
              Project Case Study
              <CaretRightIcon />
            </GradientButton>
          ) : (
            <GradientButton
              as='button'
              type='button'
              variant='green'
              position='card'
              mode='disabled'
              animation='none'
              title='Project Case Study not yet released'
              aria-label='Project Case Study not yet released'
            >
              Project Case Study
            </GradientButton>
          )}
          <GradientButton
            as='a'
            href={project.links.github}
            variant='blue'
            position='card'
            target='_blank'
            rel='noopener noreferrer'
          >
            Project GitHub
            <CaretRightIcon />
          </GradientButton>
        </div>
      </div>
    </div>
  );
}
