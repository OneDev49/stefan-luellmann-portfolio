import { Metadata } from 'next';
import ProjectsHeroSection from './_components/ProjectsHeroSection';
import ProjectsMainSection from './_components/ProjectsMainSection';

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
    </main>
  );
}
