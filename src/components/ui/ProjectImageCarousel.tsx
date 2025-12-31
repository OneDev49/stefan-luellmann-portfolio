'use client';

import { Project } from '@/config/projects';
import { siteData } from '@/config/siteData';
import { useState } from 'react';
import { cn } from '@/lib/utilities';

import ImageSkeletonLoader from './ImageSkeletonLoader';
import useEmblaCarousel from 'embla-carousel-react';

interface ImageCarouselProps {
  project: Project;
  bigImageRenderSize: string;
}

export default function ImageCarousel({
  project,
  bigImageRenderSize,
}: ImageCarouselProps) {
  const [mainIndex, setMainIndex] = useState<number>(0);
  const [emblaRef] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  return (
    <>
      <div className='relative rounded-lg border border-[#313131] overflow-hidden shadow-[0_0_15px_2px_#0051ff40] group'>
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
            sizes={bigImageRenderSize}
            className='object-top h-auto w-full transition-transform duration-300 ease-in-out max-h-[512px] group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 ease-in-out text-white grid place-items-center text-center group-hover:opacity-100'>
            <div className='flex flex-col items-center'>
              <span className='underline text-lg font-extrabold'>Visit:</span>
              <span>{project.title}</span>
            </div>
          </div>
        </a>
      </div>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-2'>
          {project.images.map((image, index) => (
            <div
              key={index}
              className={cn(
                'cursor-pointer border-2 border-transparent flex-[0_0_auto] h-20 max-w-20 rounded-md [&_div]:h-full [&_div]:rounded-md [&_div]:border [&_div]:border-[#0144d6]',
                index === mainIndex && 'border-[#0144d6]'
              )}
              onClick={() => setMainIndex(index)}
            >
              <ImageSkeletonLoader
                src={`${siteData.uploadThingUrl}/${image}`}
                alt={`${project.title} Thumbnail ${index + 1}`}
                width={120}
                height={120}
                style={{ objectFit: 'cover' }}
                sizes='20vw'
                className='object-cover h-auto'
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
