import type { Metadata } from 'next';
import TimelineSection from './_components/TimelineSection';
import ToolkitSection from './_components/ToolkitSection';
import AboutHeroSection from './_components/AboutHeroSection';
import PersonalImageCTA from '@/components/sections/PersonalImageCTA';

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
      <PersonalImageCTA
        heading={`Let's Connect!`}
        paragraph={
          <>
            <span>
              Thank you for taking the time to learn more about my background. I
              love to plan, design, develop and optimize Websites and
              Applications of all kinds.
            </span>
            <span>
              If you believe that my skills and mindset would be a great fit for
              your Team or Project, I'd be exited to Chat!
            </span>
          </>
        }
        getInTouchButton={true}
        background={true}
      />
    </main>
  );
}
