'use client';

import { allProjects, clientProjects } from '@/config/projects';

import useEmblaCarousel from 'embla-carousel-react';
import styles from './ProjectsHeroSection.module.scss';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import AutoScroll from 'embla-carousel-auto-scroll';
import CTAButton from '@/components/ui/CTAButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';

const allImages = allProjects.flatMap((project) =>
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

  return (
    <section className='relative min-h-[80svh] grid grid-rows-[1fr_auto] gap-8 py-20'>
      <div className='relative flex items-center justify-center gap-4 mx-auto px-4 flex-col max-w-3xl text-center'>
        <h1 className='grid capitalize'>
          <span className='text-h1 font-extrabold -mb-6 text-[rgba(173,173,173,0.6)]'>
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
        <div className='flex gap-2 flex-col sm:gap-6 sm:flex-row'>
          <CTAButton
            href='#personal-projects'
            colorStyle='gradientBlue'
            animation='all'
            className='py-1 px-2 gap-1 font-heading font-extrabold'
          >
            <span>Personal Projects</span>
            <CaretRightIcon height={25} width={25} />
          </CTAButton>
          {clientProjects !== null && clientProjects.length > 0 && (
            <CTAButton
              href='#client-projects'
              colorStyle='gradientBlue'
              animation='all'
              className='py-1 px-2 gap-1 font-heading font-extrabold'
            >
              <span>Client Projects</span>
              <CaretRightIcon height={25} width={25} />
            </CTAButton>
          )}
        </div>
      </div>
      <div className='flex items-center bg-[rgb(2,82,255,0.22)] py-4 overflow-hidden'>
        <div className='overflow-hidden' ref={emblaRef}>
          <div className='flex items-center'>
            {loopedImages.map((image, index) => (
              <div className='px-2' key={index}>
                <div className='overflow-hidden mx-auto relative w-[300px] border border-[#686868] rounded-lg group'>
                  <a href={image.url} target='_blank' rel='noopener noreferrer'>
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
                      <span className='underline'>Visit</span>
                      <span>{image.title}</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
