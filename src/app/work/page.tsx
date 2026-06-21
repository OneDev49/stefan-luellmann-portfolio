import { Metadata } from 'next';

import WorkHero from './_components/WorkHero';
import WorkMain from './_components/WorkMain';

const title: string = `Project Showcase`;
const extendedDescription: string = `Explore both Personal and Client Projects made by me. Designed, Developed and deployed entirely by myself.`;
const shortDescription: string = `Explore every personal and client project I designed, developed and deployed.`;

export const metadata: Metadata = {
  title: title,
  description: extendedDescription,

  openGraph: {
    title: title,
    description: shortDescription,
  },

  twitter: {
    title: title,
    description: shortDescription,
  },

  alternates: {
    canonical: '/work',
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
