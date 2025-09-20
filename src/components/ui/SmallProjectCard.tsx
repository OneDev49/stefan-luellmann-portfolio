'use client';

import { Project } from '@/config/projects';
import TechnologyContainer from './TechnologyContainer';
import styles from './SmallProjectCard.module.scss';
import { useRef, useState } from 'react';
import GradientButton from './GradientButton';
import Link from 'next/link';
import {
  useOnClickOutside,
  useOnClickOutsideEscape,
} from '@/lib/useOnClickOutside';
import clsx from 'clsx';
import CaretDownIcon from '../icons/ui/CaretDownIcon';
import ImageSkeletonLoader from './ImageSkeletonLoader';

interface SmallProjectCardProps {
  project: Project;
}

export default function SmallProjectCard({ project }: SmallProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(wrapperRef, () => setIsExpanded(false));
  useOnClickOutsideEscape(() => setIsExpanded(false));

  return (
    <div className={styles.cardWrapper}>
      <Link
        href={`/projects/${project.slug}`}
        className={styles.cardImageAnchor}
      >
        <ImageSkeletonLoader
          loading='lazy'
          decoding='async'
          src={`https://utfs.io/a/qnr34aa1vn/${project.thumbnail}`}
          alt={`${project.title} Thumbnail`}
          height={600}
          width={1000}
        />
      </Link>
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
              <Link href={`/projects/${project.slug}`}>Project Page</Link>
              <a
                href={project.links.liveDemo}
                rel='noopener noreferrer'
                target='_blank'
              >
                Live Demo
              </a>
              <a
                href={project.links.caseStudy}
                rel='noopener noreferrer'
                target='_blank'
              >
                Case Study
              </a>
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
