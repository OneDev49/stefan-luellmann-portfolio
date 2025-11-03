'use client';

import { Project } from '@/config/projects';
import { useRef, useState } from 'react';
import {
  useOnClickOutside,
  useOnClickOutsideEscape,
} from '@/lib/useOnClickOutside';
import { siteData } from '@/config/siteData';

import clsx from 'clsx';
import CaretDownIcon from '../icons/ui/CaretDownIcon';
import ImageSkeletonLoader from './ImageSkeletonLoader';
import GradientButton from './GradientButton';
import Link from 'next/link';
import TechnologyContainer from './TechnologyContainer';
import styles from './SmallProjectCard.module.scss';

interface SmallProjectCardProps {
  project: Project;
}

export default function SmallProjectCard({ project }: SmallProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(wrapperRef, () => setIsExpanded(false));
  useOnClickOutsideEscape(() => setIsExpanded(false));

  return (
    <div className={styles.cardWrapper}>
      <a
        href={project.links.liveDemo}
        className={styles.cardImageAnchor}
        target='_blank'
        rel='noopener noreferrer'
      >
        <ImageSkeletonLoader
          decoding='async'
          src={`${siteData.uploadThingUrl}/${project.thumbnail}`}
          alt={`${project.title} Thumbnail`}
          height={600}
          width={1000}
          sizes='(max-width: 992px) 100vw, 40vw'
        />
      </a>
      <div className={styles.contentWrapper}>
        <div className={styles.topWrapper}>
          <h3 className='nwt--f-h3-small'>{project.title}</h3>
          <ul className={`${styles.technologyList} nwt--ul-none`}>
            {project.techStack.length > 0 &&
              project.techStack.map((tech, index) => (
                <li key={index}>
                  <TechnologyContainer technology={tech} />
                </li>
              ))}
          </ul>
          <p>{project.description}</p>
        </div>
        <div ref={wrapperRef} className={styles.linksWrapper}>
          <GradientButton
            as='button'
            onClick={() => setIsExpanded((p) => !p)}
            position='card'
            animation='none'
          >
            Project Links
            <span
              className={clsx(styles.caret, isExpanded && styles.caretOpen)}
            >
              <CaretDownIcon height={20} />
            </span>
          </GradientButton>
          {isExpanded && (
            <div
              className={clsx(styles.linksDropdown, isExpanded && styles.open)}
            >
              <a
                href={project.links.liveDemo}
                rel='noopener noreferrer'
                target='_blank'
              >
                Live Demo
              </a>
              {project.caseStudyStatus === 'released' && (
                <Link href={`/case-studies/${project.slug}`}>Case Study</Link>
              )}
              <a
                href={project.links.github}
                rel='noopener noreferrer'
                target='_blank'
              >
                GitHub
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
