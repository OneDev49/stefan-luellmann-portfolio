import type { Metadata } from 'next';
import TimelineSection from './_components/TimelineSection';
import ToolkitSection from './_components/ToolkitSection';
import AboutHeroSection from './_components/AboutHeroSection';
import AboutCTASection from './_components/AboutCTASection';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about my professional journey, from founding a Web Agency to specializing in modern Full-Stack Development with Next.js and TypeScript.',

  openGraph: {
    title: 'About Stefan Lüllmann',
    description:
      'A detailed look into my background, skills and professional philosophy.',
  },

  twitter: {
    title: 'About Stefan Lüllmann',
    description:
      'A detailed look into my background, skills and professional philosophy.',
  },
};

export default function Home() {
  return (
    <main>
      <AboutHeroSection />
      <TimelineSection />
      <ToolkitSection />
      <AboutCTASection />
    </main>
  );
}
