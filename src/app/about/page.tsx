import type { Metadata } from 'next';

import AboutHero from './_components/AboutHeroSection';
import AboutTimeline from './_components/AboutTimeline';
import AboutToolkit from './_components/AboutToolkit';
import LatestArticles from '@/components/sections/LatestArticles';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn about my full professional journey and how I became a Full-Stack Engineer & a Technical Writer.',

  openGraph: {
    title: 'About Stefan Lüllmann',
    description:
      'Learn about my full professional journey and how I became a Full-Stack Engineer & a Technical Writer.',
  },

  twitter: {
    title: 'About Stefan Lüllmann',
    description:
      'Learn about my full professional journey and how I became a Full-Stack Engineer & a Technical Writer.',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutTimeline />
      <AboutToolkit />
      <LatestArticles heading='Read my latest Technical Deep Dives' />
    </>
  );
}
