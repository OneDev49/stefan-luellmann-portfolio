import type { Metadata } from 'next';

import AboutHero from './_components/AboutHeroSection';
import AboutTimeline from './_components/AboutTimeline';
import AboutToolkit from './_components/AboutToolkit';
import LatestArticles from '@/components/sections/LatestArticles';

const title: string = `About Stefan Lüllmann`;
const description: string = `Learn about my full professional journey and how I became a Full-Stack Engineer & a Technical Writer.`;

export const metadata: Metadata = {
  title: title,
  description: description,

  openGraph: {
    title: title,
    description: description,
  },

  twitter: {
    title: title,
    description: description,
  },

  alternates: {
    canonical: '/about',
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
