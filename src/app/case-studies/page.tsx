import { Metadata } from 'next';

import CaseStudiesHero from './_components/CaseStudiesHero';
import CaseStudiesMain from './_components/CaseStudiesMain';

const title: string = `Case Studies`;
const description: string = `Read Case Studies of the Projects I developed. From Personal Projects to Client Projects, every project gets a individual Case Study.`;

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
    canonical: '/case-studies',
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
