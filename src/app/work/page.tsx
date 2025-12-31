import { Metadata } from 'next';

import WorkHero from './_components/WorkHero';
import WorkMain from './_components/WorkMain';

export const metadata: Metadata = {
  title: 'Project Showcase',
  description:
    'Explore both Personal and Client Projects made by me. Designed, Developed and deployed entirely by myself.',

  openGraph: {
    title: 'Project Showcase',
    description:
      'Explore every personal and client project I designed, developed and deployed.',
  },

  twitter: {
    title: 'Project Showcase',
    description:
      'Explore every personal and client project I designed, developed and deployed.',
  },
};

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkMain />
    </>
  );
}
