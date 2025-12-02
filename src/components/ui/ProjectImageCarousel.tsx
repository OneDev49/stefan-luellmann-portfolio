'use client';

import { Project } from '@/config/projects';
import { siteData } from '@/config/siteData';
import { useState } from 'react';

import ImageSkeletonLoader from './ImageSkeletonLoader';
import clsx from 'clsx';
import styles from './ProjectImageCarousel.module.scss';
import useEmblaCarousel from 'embla-carousel-react';

interface ImageCarouselProps {
  project: Project;
  bigImageSize: string;
}

export default function ImageCarousel({
  project,
  bigImageSize,
}: ImageCarouselProps) {
  const [mainIndex, setMainIndex] = useState<number>(0);
  const [emblaRef] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  return (
    <>
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
            sizes={bigImageSize}
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
                sizes='20vw'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
