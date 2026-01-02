'use client';

import { personalData, siteData } from '@/config/siteData';
import { useModal } from '@/context/ModalContext';

import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import CTAButton from '@/components/ui/CTAButton';
import WaveTransition from '@/components/effects/WaveTransition';

export default function HomePageCTA() {
  const { openGetInTouch } = useModal();

  return (
    <section className='relative bg-[#020d7e] mb-36'>
      <WaveTransition
        position='top'
        color='#000414'
        variant='inner'
        config={{
          height: 75,
        }}
      />
      <div className='max-w-6xl w-full mx-auto px-4 flex gap-8 flex-col md:flex-row md:text-left text-center items-center py-20'>
        <div className='flex border-2 border-white rounded-full overflow-hidden shadow-lg shadow-blue-600'>
          <ImageSkeletonLoader
            loading='eager'
            className='h-auto max-h-[250px] sm:max-h-[330px] w-auto min-w-[250px] sm:min-w-[330px]'
            priority={true}
            draggable='false'
            src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
            alt="I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives!"
            title="Hey there, I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives"
            height={330}
            width={330}
            sizes='(max-width: 768px) 100vw, 25vw'
          />
        </div>
        <div className='flex-1 flex flex-col items-center gap-6 md:items-start lg:ml-12'>
          <h2 className='text-h2 text-transparent font-extrabold capitalize'>
            <span className='bg-gradient-card bg-clip-text'>
              Reach out and Connect with me
            </span>
          </h2>
          <p className='grid gap-6'>
            <span>
              I am always open for interesting opportunities, whether it is
              building scalable and efficient Software solutions or
              collaborating in a Team to architect something new and exciting.
            </span>
            <span>
              Feel free to reach out to me via LinkedIn, through E-Mail or
              contact me for a quick introduction call.
            </span>
          </p>
          <CTAButton
            as='button'
            colorStyle='gradientBlue'
            animation='all'
            onClick={() => {
              openGetInTouch();
            }}
            className='gap-1 py-1 px-2 items-center rounded-md font-heading font-extrabold'
          >
            Reach out to Me
            <CaretRightIcon height={24} width={14} />
          </CTAButton>
        </div>
      </div>
      <WaveTransition
        position='bottom'
        color='#000414'
        variant='inner'
        config={{
          height: 75,
        }}
      />
    </section>
  );
}
