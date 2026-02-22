'use client';

import { Project } from '@/config/projects';
import { siteData } from '@/config/siteData';
import { useEffect, useState } from 'react';
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

  const Wrapper = project.links.liveDemo ? 'a' : 'div';

  const wrapperProps = project.links.liveDemo
    ? {
        href: project.links.liveDemo,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  useEffect(() => {
    const imageElements: HTMLImageElement[] = [];

    project.images.forEach((image) => {
      const img = new Image();
      img.src = `${siteData.uploadThingUrl}/${image}`;
      imageElements.push(img);
    });

    return () => {
      imageElements.forEach((img) => {
        img.src = '';
      });
    };
  }, [project.images]);

  return (
    <div className='space-y-2'>
      <figure>
        <div className='relative rounded-md border border-[#1f1f1f] overflow-hidden shadow-[0_0_15px_2px_#0051ff40] group'>
          <Wrapper {...wrapperProps}>
            <ImageSkeletonLoader
              src={`${siteData.uploadThingUrl}/${project.images.length === 0 ? project.thumbnail : project.images[mainIndex]}`}
              alt={`${project.title} ${project.images.length === 0 ? `Thumbnail` : `Screenshot ${mainIndex + 1}`}`}
              style={{ objectFit: 'cover' }}
              width={500}
              height={300}
              sizes={bigImageRenderSize}
              className={`object-top h-auto w-full transition-transform duration-300 ease-in-out max-h-[512px] ${project.images.length > 0 && 'group-hover:scale-105'}`}
            />
            {project.images.length > 0 && (
              <div className='absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 ease-in-out text-white grid place-items-center text-center group-hover:opacity-100'>
                <div className='flex flex-col items-center'>
                  <span className='underline text-lg font-extrabold'>
                    {project.links.liveDemo ? 'Visit:' : 'Thumbnail of:'}
                  </span>
                  <span>{project.title}</span>
                </div>
              </div>
            )}
          </Wrapper>
        </div>
        {project.images.length === 0 && (
          <figcaption className='flex gap-2 text-sm text-[#d3d3d3]'>
            <span className='underline'>Picture:</span>
            <span className='italic'>Thumbnail of the Project</span>
          </figcaption>
        )}
      </figure>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-2'>
          {project.images.map((image, index) => (
            <button
              key={index}
              className={cn(
                'cursor-pointer border-2 border-transparent flex-[0_0_auto] h-20 max-w-20 rounded-md [&_div]:h-full [&_div]:rounded-md [&_div]:border [&_div]:border-[#0144d6]',
                index === mainIndex && 'border-[#0144d6]'
              )}
              onClick={() => setMainIndex(index)}
              aria-label={`Switch to ${project.title} Image ${index + 1}`}
              title={`Switch to ${project.title} Image ${index + 1}`}
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
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
