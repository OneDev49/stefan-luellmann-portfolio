'use client';

import { TopicPagedata } from '@/config/topics';
import { TechIcon } from '@/components/icons/TechIconMap';
import { BackgroundNetworkParticles } from '@/components/effects/BackgroundNetworkParticles';

import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import CTAButton from '@/components/ui/CTAButton';

interface TopicsHeroProps {
  pageData: TopicPagedata;
  topic: string;
}

export default function TopicsHero({ pageData, topic }: TopicsHeroProps) {
  const buttonClassName =
    'gap-1 py-1 px-2 items-center rounded-md font-heading font-extrabold';

  const adjustedTopicName = topic.charAt(0).toUpperCase() + topic.slice(1);

  return (
    <section className='relative min-h-[80svh] grid place-items-center overflow-hidden'>
      <div className='absolute inset-0 [mask-image:linear-gradient(180deg,black_90%,transparent_100%)]'>
        <BackgroundNetworkParticles />
      </div>
      <div className='py-20 max-w-7xl w-full mx-auto px-4 flex flex-col'>
        <div className='relative mx-auto w-full flex items-center justify-center lg:justify-between'>
          <div className='basis-[500px] gap-4 text-center flex flex-col lg:text-left lg:items-start xl:basis-[750px]'>
            <h1 className='grid capitalize'>
              <div className='text-h2 font-extrabold text-transparent'>
                <span className='bg-gradient-card bg-clip-text'>
                  {pageData.hero.heading}
                </span>
              </div>
              <div className='text-transparent text-h3 font-mono'>
                <span className='bg-gradient-card bg-clip-text'>
                  {pageData.hero.subHeading}
                </span>
              </div>
            </h1>
            <p>{pageData.hero.paragraph}</p>
            <div className='gap-6 flex flex-col items-center justify-center sm:flex-row'>
              <CTAButton
                href='#relatedArticles'
                animation='all'
                colorStyle='gradientBlue'
                className={buttonClassName}
              >
                <span>Dive Deep into {adjustedTopicName}</span>
                <CaretRightIcon width={16} height={24} />
              </CTAButton>
              <CTAButton
                href='/articles'
                animation='all'
                colorStyle='gradientGreen'
                className={buttonClassName}
              >
                <span>Read more Articles</span>
                <CaretRightIcon width={16} height={24} />
              </CTAButton>
            </div>
          </div>
          <div className='hidden overflow-hidden shadow-[0_0_8px_0px_rgb(255,255,255,0.5)] rounded-xl py-2 px-4 bg-black lg:block text-center border border-[#363636]'>
            <TechIcon
              name={pageData.hero.technologyName}
              height={250}
              width={250}
              className='opacity-90'
            />
            <span className='font-mono text-h3'>{adjustedTopicName}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
