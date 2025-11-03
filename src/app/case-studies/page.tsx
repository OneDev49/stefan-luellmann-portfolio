import { Metadata } from 'next';

import CaseStudiesHeroSection from './_components/CaseStudiesHeroSection';
import CaseStudiesMainSection from './_components/CaseStudiesMainSection';

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
    <main>
      <CaseStudiesHeroSection />
      <CaseStudiesMainSection />
    </main>
  );
}
