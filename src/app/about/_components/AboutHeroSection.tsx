'use client';

import { personalData, siteData } from '@/config/siteData';
import { useModal } from '@/context/ModalContext';

import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import BlobOne from './background/BlobOne';
import BlobTwo from './background/BlobTwo';
import CTAButton from '@/components/ui/CTAButton';

export default function AboutHero() {
  const { openGetInTouch } = useModal();

  const buttonClassName =
    'gap-1 py-1 px-2 items-center rounded-md font-heading font-extrabold';

  return (
    <section className='relative min-h-[80svh] grid place-items-center overflow-hidden'>
      <div className='absolute inset-0'>
        <BlobOne className='absolute top-0 right-0' />
        <BlobTwo className='absolute left-0 bottom-0' />
      </div>
      <div className='py-20 max-w-7xl w-full mx-auto px-4 flex flex-col'>
        <div className='relative mx-auto w-full flex items-center justify-center lg:justify-between'>
          <div className='basis-[500px] gap-4 text-center flex flex-col lg:text-left lg:items-start xl:basis-[650px]'>
            <h1 className='grid capitalize'>
              <span className='text-h1 font-extrabold -mb-6 text-[rgba(173,173,173,0.6)]'>
                About Stefan Lüllmann
              </span>
              <div className='font-extrabold text-transparent text-h3'>
                <span className='bg-gradient-card bg-clip-text'>
                  Full-Stack Engineer & Technical Writer
                </span>
              </div>
            </h1>
            <p>
              Hello! I&apos;m a Software Engineer with a burning passion for
              building scalable, maintainable and highly performant digital
              experiences. I also love to write technical deep dives about
              projects, languages and everything in between.
            </p>
            <div className='gap-6 flex flex-col items-center justify-center sm:flex-row'>
              <CTAButton
                href='/work'
                animation='all'
                colorStyle='gradientBlue'
                className={buttonClassName}
              >
                <span>View My Work</span>
                <CaretRightIcon width={16} height={24} />
              </CTAButton>
              <CTAButton
                as='button'
                type='button'
                onClick={openGetInTouch}
                animation='all'
                colorStyle='gradientBlue'
                className={buttonClassName}
              >
                <span>Get In Touch</span>
                <CaretRightIcon width={16} height={24} />
              </CTAButton>
            </div>
          </div>
          <div className='hidden overflow-hidden rounded-full shadow-[0_0_30px_2px_rgb(0,119,255)] lg:block'>
            <ImageSkeletonLoader
              loading='eager'
              className='object-cover brightness-90'
              priority={true}
              draggable='false'
              src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
              alt="Hey, I'm Stefan!"
              height={400}
              width={400}
              sizes='25vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
