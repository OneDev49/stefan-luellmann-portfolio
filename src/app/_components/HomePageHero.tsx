import { HeroNetwork } from '@/components/effects/NewParticleBackground';

import GradientButton from '@/components/ui/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';

export default function HomePageHero() {
  return (
    <section className='relative min-h-[80svh] grid place-items-center'>
      <div className='absolute inset-0 [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]'>
        <HeroNetwork />
      </div>

      <div className='py-20 max-w-7xl w-full mx-auto px-4 flex flex-col items-center text-center gap-4'>
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
          <GradientButton href='/articles'>
            <span className='font-heading'>Read my Articles</span>
            <CaretRightIcon width={16} height={32} />
          </GradientButton>
          <GradientButton href='/case-studies' variant='green'>
            <span className='font-heading'>View Selected Work</span>
            <CaretRightIcon width={16} height={32} />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
