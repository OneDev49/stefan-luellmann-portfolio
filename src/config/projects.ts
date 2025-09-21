import { TechnologyName } from '@/components/icons/TechIconMap';

export interface Project {
  slug: string;
  title: string;
  description: string;
  techStack: TechnologyName[];
  shortCaseStudy: string;
  links: {
    github: string;
    liveDemo: string;
    caseStudy: string;
  };
  thumbnail: string;
  images: string[];
}

export const personalProjects: Project[] = [
  {
    slug: 'personal-website',
    title: 'Personal Website',
    description:
      'My own personal portfolio Website, built with NextJS, React, TypeScript and SCSS. Responsive, scalable and easily maintainable. Built to showcase not only my personal projects, but the projects I built for my clients, as well as writing articles and case studies about my projects.',
    techStack: ['nextjs', 'react', 'typescript', 'sass', 'mdx'],
    shortCaseStudy:
      'Developed a fully responsive Portfolio Website, from conceptualisation to design to development.',
    links: {
      github: 'https://github.com/OneDev49/stefan-luellmann-portfolio',
      liveDemo: 'https://stefan-luellmann.com/',
      caseStudy: '',
    },
    thumbnail: 'x81VdwhEWe9YNXWlewJOoHBgmDrVu9kl6dW42XtInKGhaJT3',
    images: ['x81VdwhEWe9YNXWlewJOoHBgmDrVu9kl6dW42XtInKGhaJT3'],
  },
  {
    slug: 'entro-ecommerce-store',
    title: 'Entro - ECommerce Computer Store',
    description:
      'A Full-Stack E-Commerce Computer Store designed with Figma, developed with NextJS, React, TypeScript, Prisma, PostgreSQL and TailwindCSS.',
    techStack: [
      'nextjs',
      'react',
      'typescript',
      'prisma',
      'tailwindcss',
      'zustand',
      'postgresql',
      'supabase',
      'vercel',
      'zod',
      'redis',
    ],
    shortCaseStudy:
      'Designed, Developed and Deployed a Full-Stack E-Commerce Computer Store - Entro. Developed using SSG, ISR and SSR and a relational Database with Prisma.',
    links: {
      github: 'https://github.com/OneDev49/stefan-luellmann-ecommerce-app',
      liveDemo: 'https://ecommerce.stefan-luellmann.com/',
      caseStudy: '',
    },
    thumbnail: '',
    images: [''],
  },
];
