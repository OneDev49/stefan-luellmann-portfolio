import { BackgroundNetworkParticles } from '@/components/effects/BackgroundNetworkParticles';

import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import CTAButton from '@/components/ui/CTAButton';

export default function HomePageHero() {
  return (
    <section className='relative min-h-[80svh] grid place-items-center'>
      <div className='absolute inset-0 [mask-image:linear-gradient(180deg,black_90%,transparent_100%)]'>
        <BackgroundNetworkParticles />
      </div>

      <div className='relative py-20 max-w-7xl w-full mx-auto px-4 flex flex-col items-center text-center gap-4'>
        <div className='flex flex-col items-center gap-2'>
          <h1 className='grid capitalize'>
            <span className='text-h3'>Stefan Lüllmann</span>
            <div className='text-[40px] font-extrabold text-transparent'>
              <span className='bg-gradient-card bg-clip-text'>
                Full-Stack Engineer & Technical Writer
              </span>
            </div>
          </h1>
          <p className='max-w-xl grid'>
            <span>Specializing in the Next.js Ecosystem.</span>
            <span>
              I build scalable, type-safe applications and write technical
              articles, Playbook and Deep Dives to help developers do the same.
            </span>
          </p>
        </div>
        <div className='flex gap-4 flex-col sm:flex-row'>
          <CTAButton
            href='/articles'
            colorStyle='gradientBlue'
            animation='all'
            className='py-1 px-2 font-heading font-extrabold'
          >
            <span>Read my Articles</span>
            <CaretRightIcon width={25} height={25} />
          </CTAButton>
          <CTAButton
            href='/case-studies'
            colorStyle='gradientGreen'
            animation='all'
            className='py-1 px-2 font-heading font-extrabold'
          >
            <span className='font-heading'>View Selected Work</span>
            <CaretRightIcon width={25} height={25} />
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
