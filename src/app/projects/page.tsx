import { Metadata } from 'next';
import ProjectsHeroSection from './_components/ProjectsHeroSection';
import ProjectsMainSection from './_components/ProjectsMainSection';
import PersonalImageCTA from '@/components/sections/PersonalImageCTA';
import GradientButton from '@/components/ui/GradientButton';

/* ADD METADATA HERE */
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

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHeroSection />
      <ProjectsMainSection />
      <PersonalImageCTA
        heading='Get In Touch!'
        paragraph='Interested in my Projects or want to learn more about me? Reach out to me! I am currently looking for a full-time position as a Web Developer. So if you think that my skills and my mindset aligns well with you or your team, hit me up! I am always happy to have a chat.'
        getInTouchButton={true}
      />
    </main>
  );
}
