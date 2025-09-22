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
      caseStudy: '/case-studies/personal-website',
    },
    thumbnail: 'x81VdwhEWe9YglBJ9iXWUim2kHTLC3nG7P9fwtheso8Sp1IE',
    images: [
      'x81VdwhEWe9YglBJ9iXWUim2kHTLC3nG7P9fwtheso8Sp1IE',
      'x81VdwhEWe9YPw0HMULrk2i6cgS3Y9p8FLUOsheVEWmzZloG',
      'x81VdwhEWe9YLgMvrVdInMrjeXmBiTPth46N1ogxlyE7cGJp',
    ],
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
      caseStudy: '/case-studies/entro-ecommerce-store',
    },
    thumbnail: 'x81VdwhEWe9Ygmp6ZZXWUim2kHTLC3nG7P9fwtheso8Sp1IE',
    images: [
      'x81VdwhEWe9Ygmp6ZZXWUim2kHTLC3nG7P9fwtheso8Sp1IE',
      'x81VdwhEWe9Yk6xvyNRfP1gF2n5dtA9WmjYOaITxQJVwBzLo',
      'x81VdwhEWe9YmncacBN9P4VmtRyDwqsTxWXaG0lOzr9IC5Lo',
      'x81VdwhEWe9YBtFXS7KeYfw57tzND9qVBJrFHu6XOnMahs34',
    ],
  },
];
