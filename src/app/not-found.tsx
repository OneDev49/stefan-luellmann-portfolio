import { BackgroundNetworkParticles } from '@/components/effects/BackgroundNetworkParticles';
import Link from 'next/link';

export default function NotFound() {
  const anchorClassName = 'custom-hover-underline-swipe text-[#4dedff]';

  return (
    <section className='relative [mask-image:linear-gradient(180deg,black_90%,transparent_100%)]'>
      <BackgroundNetworkParticles />
      <div className='relative min-h-[calc(100svh-345px)] flex flex-col justify-center max-w-7xl mx-auto px-4 gap-6'>
        <h1 className='text-h1 font-extrabold'>404 - Page Not Found</h1>
        <div>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>
            <Link className={anchorClassName} href='/'>
              Return to Homepage
            </Link>
            ,{' '}
            <Link className={anchorClassName} href='/work'>
              Check out my Projects
            </Link>{' '}
            ,{' '}
            <Link className={anchorClassName} href='/articles'>
              Read my Technical Deep Dives
            </Link>{' '}
            or{' '}
            <Link className={anchorClassName} href='/about'>
              Learn more about me
            </Link>
            !
          </p>
        </div>
      </div>
    </section>
  );
}
