'use client';

import {
  personalProjects,
  privateClientProjects,
  publicClientProjects,
} from '@/config/projects';
import { PerspectiveGrid } from '@/components/effects/PerspectiveGrid';

import useEmblaCarousel from 'embla-carousel-react';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import AutoScroll from 'embla-carousel-auto-scroll';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import WaveTransition from '@/components/effects/WaveTransition';
import Link from 'next/link';

const includedProjects = [...personalProjects, ...publicClientProjects];

const allImages = includedProjects.flatMap((project) =>
  project.images.map((image, index) => ({
    title: project.title,
    src: image,
    url: project.links.liveDemo,
    alt: `${project.title} Screenshot ${index + 1}`,
  }))
);

const loopedImages = [...allImages, ...allImages];

export default function WorkHero() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 0.5,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  const uniqueAnchorClassName =
    "border py-1 px-2 gap-1 font-heading font-extrabold hover:scale-105 relative overflow-hidden flex items-center justify-center rounded-md active:scale-[0.98] transition-all duration-200 ease-in-out hover:before:animate-custom-link-move before:content-[' '] before:absolute before:w-[100px] before:h-full before:bg-[linear-gradient(120deg,rgb(255,255,255,0)_30%,rgb(255,255,255,0.8),rgb(255,255,255,0)_70%)] before:top-0 before:-left-[100px] before:opacity-60";

  return (
    <section className='relative'>
      <div className='relative min-h-[100svh] grid grid-rows-[1fr_auto] gap-8 py-40 bg-black'>
        <PerspectiveGrid variant='hallway' />
        <div className='relative flex items-center justify-center gap-4 mx-auto px-4 flex-col max-w-3xl text-center'>
          <h1 className='grid capitalize'>
            <span className='text-h1 font-extrabold -mb-6 text-[rgba(173,173,173,0.6)] max-md:leading-loose'>
              Projects & Case Studies
            </span>
            <div className='font-extrabold text-transparent text-h3'>
              <span className='bg-gradient-card bg-clip-text'>
                Full-Stack and SaaS Projects
              </span>
            </div>
          </h1>
          <p>
            View the projects I have worked on or read the detailed case studies
            of each project.
          </p>
          <div className='flex gap-2 flex-col sm:gap-3 flex-wrap sm:flex-row'>
            <Link
              href='#personal-projects'
              className={`bg-[linear-gradient(90deg,#0025db,#001684)] border-[#4352ff] shadow-[0_0_12px_2px_#0028c8] ${uniqueAnchorClassName}`}
            >
              <span>Personal Projects</span>
              <CaretRightIcon height={25} width={25} />
            </Link>
            {publicClientProjects !== null &&
              publicClientProjects.length > 0 && (
                <Link
                  href='#public-client-projects'
                  className={`bg-[linear-gradient(90deg,#0063d3,#003b7e)] border-[#2a5cb9]  shadow-[0_0_12px_2px_#004899] ${uniqueAnchorClassName}`}
                >
                  <span>Public Client Projects</span>
                  <CaretRightIcon height={25} width={25} />
                </Link>
              )}
            {privateClientProjects !== null &&
              privateClientProjects.length > 0 && (
                <Link
                  href='#private-client-projects'
                  className={`bg-[linear-gradient(90deg,#220ce9,#100194)] border-[#3e29ff]  shadow-[0_0_12px_2px_#100194] ${uniqueAnchorClassName}`}
                >
                  <span>Private Client Projects</span>
                  <CaretRightIcon height={25} width={25} />
                </Link>
              )}
          </div>
        </div>
        <div className='flex items-center overflow-hidden'>
          <div className='flex items-center overflow-hidden'>
            <div className='overflow-hidden' ref={emblaRef}>
              <div className='flex items-center'>
                {loopedImages.map((image, index) => {
                  const Wrapper = image.url ? 'a' : 'div';

                  const wrapperProps = image.url
                    ? {
                        href: image.url,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                      }
                    : {};

                  return (
                    <div className='px-4' key={index}>
                      <div className='overflow-hidden mx-auto relative w-[275px] border border-[#363636] my-8 shadow-lg shadow-gray-800 rounded-sm group'>
                        <Wrapper {...wrapperProps}>
                          <ImageSkeletonLoader
                            loading='eager'
                            priority={true}
                            src={`https://utfs.io/a/qnr34aa1vn/${image.src}`}
                            width={400}
                            height={200}
                            alt={image.alt}
                            className='w-full h-full object-cover transition-transform duration-300 ease-in-out select-none hover:scale-105'
                            sizes='(max-width: 576px) 100vw, 25vw'
                          />
                          <div className='absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 ease-in-out text-white flex items-center justify-center flex-col text-center group-hover:opacity-100'>
                            <strong className='underline text-lg font-extrabold'>
                              {image.url ? 'Visit:' : 'Image of:'}
                            </strong>
                            <span className='text-sm'>{image.title}</span>
                          </div>
                        </Wrapper>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveTransition
        position='bottom'
        color='#000414'
        variant='inner'
        config={{
          height: 95,
        }}
      />
    </section>
  );
}
