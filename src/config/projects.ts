import { TechnologyName } from '@/components/icons/TechIconMap';

export interface Project {
  slug: string;
  title: string;
  status:
    | 'Not Released'
    | 'V1 - Released'
    | 'V2 - Released'
    | 'V3 - Released'
    | 'Demo Released'
    | 'Finished';
  description: string;
  techStack: TechnologyName[];
  caseStudyStatus: 'Not Released' | 'Released';
  caseStudyBrief: string;
  links: {
    github: string | null;
    liveDemo: string | null;
  };
  thumbnail: string;
  images: string[];
}

export const personalProjects: Project[] | [] = [
  {
    slug: 'professional-portfolio',
    title: 'Professional Portfolio',
    status: 'V2 - Released',
    description:
      'My own personal portfolio Website, built with NextJS, React, TypeScript and SCSS. Responsive, scalable and easily maintainable. Built to showcase not only my personal projects, but the projects I built for my clients, as well as writing articles and case studies about my projects.',
    techStack: ['nextjs', 'react', 'typescript', 'sass', 'mdx', 'netlify'],
    caseStudyStatus: 'Released',
    caseStudyBrief:
      'Case Study of my Professional Portfolio Website, its conception, design, development and deployment. The Case Study goes into detail about challenges, such as MDX Integration and Website-wide Modal development as well as technological decisions.',
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
    status: 'Demo Released',
    description:
      'A Full-Stack E-Commerce Computer Store designed with Figma, developed with NextJS, React, TypeScript, Prisma, PostgreSQL and TailwindCSS. Responsive, scalable and easily maintainable. Built to showcase FullStack Capabilities beyond the detailed deep dives and case studies that exist on my website.',
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
      'Case Study of my E-Commerce Computer Store Project - Entro, its complete conception, design, development and deployment. The Case Study goes into detail about challenges, such as complex data modelling, scope management, resource costs, data shapes and type-safety across a larger application.',
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

export const publicClientProjects: Project[] | [] = [];

export const privateClientProjects: Project[] | [] = [
  {
    slug: 'nda-gaming-studio-web-application',
    title: 'NDA: Gaming Studio Web Application',
    status: 'Finished',
    description:
      'Complete development of a Gaming Website for a Business Client. The Website served both as a E-Commerce Store for InGame content and a place for players to manage their account. Development of the Project was done in different Teams for the different areas (Design, Frontend, Backend). The Project was started in early 2024 and finished near the end of April 2024.',
    techStack: [
      'nextjs',
      'typescript',
      'react',
      'tailwindcss',
      'zod',
      'redux',
      'nodejs',
      'postgresql',
    ],
    caseStudyStatus: 'Released',
    caseStudyBrief:
      'Case Study of the NDA Project: Gaming Studio Web Application I worked on as a Lead Frontend Engineer. The Case Study goes into detail about challenges, such as loading screen animation between pages, payment integrations, code coverage standards and user dashboard loading animations.',
    links: {
      github: null,
      liveDemo: null,
    },
    thumbnail: 'x81VdwhEWe9Ys2TkTt5g4AQNzRB9T0SYaxsXweUFyrl8PdJv',
    images: [],
  },
];

export const clientProjects: Project[] = [
  ...publicClientProjects,
  ...privateClientProjects,
];
export const allProjects: Project[] = [
  ...publicClientProjects,
  ...privateClientProjects,
  ...personalProjects,
];
