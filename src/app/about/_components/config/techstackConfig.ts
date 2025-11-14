import { TechnologyName } from '@/components/icons/TechIconMap';
import { ComponentType, SVGProps } from 'react';

import DesktopIcon from '@/components/icons/glyphs/DesktopIcon';
import ServerIcon from '@/components/icons/glyphs/ServerIcon';
import DatabaseIcon from '@/components/icons/glyphs/DatabaseIcon';
import ScrewdriverWrenchIcon from '@/components/icons/glyphs/ScrewdriverWrenchIcon';

export interface TechnologyArea {
  area: 'frontend' | 'backend' | 'database' | 'tools';
  heading: string;
  paragraph: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  technologies: TechnologyName[];
}

export const techStack: TechnologyArea[] = [
  {
    area: 'frontend',
    heading: 'Front-End',
    paragraph:
      'I focus on building performant, accessible and responsive user interfaces using modern, component-based architectures.',
    icon: DesktopIcon,
    technologies: [
      'typescript',
      'javascript',
      'nextjs',
      'react',
      'html5',
      'css3',
      'sass',
      'tailwindcss',
      'zustand',
    ],
  },
  {
    area: 'backend',
    heading: 'Back-End',
    paragraph:
      'My backend experience involves creating robust, scalable and type-safe APIs and business logic.',
    icon: ServerIcon,
    technologies: ['nodejs', 'php', 'prisma', 'nextauthjs', 'zod', 'redis'],
  },
  {
    area: 'database',
    heading: 'Database',
    paragraph:
      'I have hands-on experience with relational databases, from schema design to writing efficient, type-safe queries.',
    icon: DatabaseIcon,
    technologies: ['postgresql', 'mysql', 'supabase'],
  },
  {
    area: 'tools',
    heading: 'DevOps & Design',
    paragraph:
      'These are the essential tools that power my development workflow, from version control to deployment.',
    icon: ScrewdriverWrenchIcon,
    technologies: ['git', 'docker', 'vercel', 'wordpress', 'figma', 'netlify'],
  },
];
