import { TechnologyName } from '@/components/icons/TechIconMap';

export interface Project {
  slug: string;
  title: string;
  status:
    | 'Not Released'
    | 'Released'
    | 'V1 - Released'
    | 'V2 - Released'
    | 'V3 - Released';
  description: string;
  techStack: TechnologyName[];
  caseStudyStatus: 'notReleased' | 'released';
  caseStudyBrief: string;
  links: {
    github: string;
    liveDemo: string;
  };
  thumbnail: string;
  images: string[];
}

export const personalProjects: Project[] | [] = [
  {
    slug: 'professional-portfolio',
    title: 'Professional Portfolio',
    status: 'V1 - Released',
    description:
      'My own personal portfolio Website, built with NextJS, React, TypeScript and SCSS. Responsive, scalable and easily maintainable. Built to showcase not only my personal projects, but the projects I built for my clients, as well as writing articles and case studies about my projects.',
    techStack: ['nextjs', 'react', 'typescript', 'sass', 'mdx', 'netlify'],
    caseStudyStatus: 'released',
    caseStudyBrief:
      'A Case Study on the planning, design, development and deployment of my Professional Portfolio Website. The Case Study goes into detail about different designs, challenges and solutions for a variety of problems, like deciding which Technologies to use and why certain Technologies were used.',
    links: {
      github: 'https://github.com/OneDev49/stefan-luellmann-portfolio',
      liveDemo: 'https://stefan-luellmann.com/',
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
    status: 'Not Released',
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
    caseStudyStatus: 'notReleased',
    caseStudyBrief:
      'Designed, Developed and Deployed a Full-Stack E-Commerce Computer Store - Entro. Developed using SSG, ISR and SSR and a relational Database with Prisma.',
    links: {
      github: 'https://github.com/OneDev49/stefan-luellmann-ecommerce-app',
      liveDemo: 'https://ecommerce.stefan-luellmann.com/',
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

export const clientProjects: Project[] | [] = [];
