import { Metadata } from 'next';

import CaseStudiesHero from './_components/CaseStudiesHero';
import CaseStudiesMain from './_components/CaseStudiesMain';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Read Case Studies of the Projects I developed. From Personal Projects to Client Projects, every project gets a individual Case Study.',

  openGraph: {
    title: 'Case Studies',
    description:
      'Read Case Studies of the Projects I developed. From Personal Projects to Client Projects, every project gets a individual Case Study.',
  },

  twitter: {
    title: 'Case Studies',
    description:
      'Read Case Studies of the Projects I developed. From Personal Projects to Client Projects, every project gets a individual Case Study.',
  },
};

export default function CaseStudiesPage() {
  return (
    <>
      <CaseStudiesHero />
      <CaseStudiesMain />
    </>
  );
}
