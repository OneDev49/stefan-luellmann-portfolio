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
  caseStudyStatus: 'Not Released' | 'Released';
  caseStudyBrief: string;
  links: {
    github: string | null;
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
    caseStudyStatus: 'Released',
    caseStudyBrief:
      'A Case Study on the planning, design, development and deployment of my Professional Portfolio Website. The Case Study goes into detail about different designs, challenges and solutions for a variety of problems, like deciding which Technologies to use and why certain Technologies were used.',
    links: {
      github: 'https://github.com/OneDev49/stefan-luellmann-portfolio',
      liveDemo: 'https://stefan-luellmann.com/',
    },
    thumbnail: 'x81VdwhEWe9YufWdMOGMBAJTXcEpiqxV9sKO42Lv6SlI3wGY',
    images: [
      'x81VdwhEWe9YufWdMOGMBAJTXcEpiqxV9sKO42Lv6SlI3wGY',
      'x81VdwhEWe9Y7QQ5DrMG9IrZQzFSojw6XBRq1ykehxCNiHDa',
      'x81VdwhEWe9Yzhp9loLGJkZPVfc7xgeIMDRHBQATbjKFOhyl',
      'x81VdwhEWe9YIUq98PEl9J5WbN6XohyduFKaOCUP3BDAsHkp',
      'x81VdwhEWe9Y3VPvhljJCGjLPhAUmYrb6IkV2ZcMgWv8DTot',
    ],
  },
  {
    slug: 'entro-ecommerce-store',
    title: 'Entro - ECommerce Computer Store',
    status: 'V1 - Released',
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
    caseStudyStatus: 'Released',
    caseStudyBrief:
      'Designed, Developed and Deployed a Full-Stack E-Commerce Computer Store - Entro. Developed using SSG, ISR and SSR and a relational Database with Prisma.',
    links: {
      github: 'https://github.com/OneDev49/stefan-luellmann-ecommerce-app',
      liveDemo: 'https://ecommerce.stefan-luellmann.com/',
    },
    thumbnail: 'x81VdwhEWe9YckOJoCM4M8poqWTerm6fO7QFyAIYbhZiXjRB',
    images: [
      'x81VdwhEWe9YckOJoCM4M8poqWTerm6fO7QFyAIYbhZiXjRB',
      'x81VdwhEWe9Yc0MawA4M8poqWTerm6fO7QFyAIYbhZiXjRB2',
      'x81VdwhEWe9YiII0CzmxJPz0TqguADyd2SlvBtYRebXojs93',
      'x81VdwhEWe9Y3Ps6hvjJCGjLPhAUmYrb6IkV2ZcMgWv8DTot',
      'x81VdwhEWe9YU94jsAii4qTnHxOUe6kSWA2PvBzlj53NdRhC',
      'x81VdwhEWe9YcNsrIc4M8poqWTerm6fO7QFyAIYbhZiXjRB2',
      'x81VdwhEWe9YH1VBi23AULrIv19p0qBfTKZdXzJemEya26uS',
      'x81VdwhEWe9Yz7uBnPLGJkZPVfc7xgeIMDRHBQATbjKFOhyl',
      'x81VdwhEWe9YxW5jwAhEWe9YUi5auBoV1qRjKnb2ps8Mc4wC',
    ],
  },
];

export const clientProjects: Project[] | [] = [];

export const allProjects: Project[] = [...personalProjects, ...clientProjects];
