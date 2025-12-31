import { TechnologyName } from '@/components/icons/TechIconMap';

// New Topics are added here
export const VALID_TOPICS = [
  'database',
  'nextjs',
  'react',
  'typescript',
] as const;

// Type and Interfaces for the Topics
export type Topic = (typeof VALID_TOPICS)[number];
export interface TopicMetadata {
  title: string;
  description: string;
  images: string;
}
export interface TopicPagedata {
  hero: {
    heading: string;
    subHeading: string;
    paragraph: string;
    technologyName: TechnologyName;
  };
  main: { heading: string; paragraph: string };
}

// Config Objects for all Topics
// 1. Metadata of Topics
export const topicMetadata: Record<Topic, TopicMetadata> = {
  database: {
    title: 'Database Strategy & Design',
    description:
      'Relational architecture and data integrity for full-stack systems. Senior-level modules, architectural playbooks, and opinionated takes on modern data strategy.',
    images: '',
  },
  nextjs: {
    title: 'Next.js & Full-Stack Orchestration',
    description:
      'Mastering the App Router and production-scale architecture. Deep-dive modules, engineering playbooks, and opinions on the future of Next.js.',
    images: '',
  },
  react: {
    title: 'React Systems & Architecture',
    description:
      'Building maintainable frontend ecosystems. A collection of senior patterns, architectural playbooks, and opinionated modules for the modern React engineer.',
    images: '',
  },
  typescript: {
    title: 'TypeScript & Type-Safe Engineering',
    description:
      'Architecting bulletproof codebases. Explore senior-level playbooks and modules on leveraging TypeScript for enterprise-grade full-stack development.',
    images: '',
  },
} as const;

// 2. Pagedata of Topics
export const topicPagedata: Record<Topic, TopicPagedata> = {
  nextjs: {
    hero: {
      heading: 'Next.js & Full-Stack Orchestration',
      subHeading: 'The Application Pillar',
      paragraph:
        'Navigating the shift from simple routing to complex server-side orchestration. This pillar explores the App Router, data-fetching strategies, and the trade-offs of modern deployment.',
      technologyName: 'nextjs',
    },
    main: {
      heading: 'Engineering for Production',
      paragraph:
        'Explore a collection of senior-level modules for technical mastery, architectural playbooks for team success, and opinionated takes on where the ecosystem is heading.',
    },
  },
  database: {
    hero: {
      heading: 'Database Design & Data Strategy',
      subHeading: 'The Persistence Pillar',
      paragraph:
        'Building the foundation of resilient systems. We move beyond basic CRUD to focus on relational integrity, query performance, and scaling data for enterprise-level demands.',
      technologyName: 'postgresql',
    },
    main: {
      heading: 'Architecting Data Flow',
      paragraph:
        'Dive into playbooks for schema migrations, deep-dive modules on performance optimization, and critical opinions on SQL vs. NoSQL in modern full-stack systems.',
    },
  },
  react: {
    hero: {
      heading: 'React Systems & Architecture',
      subHeading: 'The Interface Pillar',
      paragraph:
        'Managing the complexity of modern UIs. This section focuses on component lifecycle patterns, state management at scale, and building resilient frontend architectures.',
      technologyName: 'react',
    },
    main: {
      heading: 'Scalable Component Engineering',
      paragraph:
        'Access modular lessons on React internals, playbooks for building design systems, and senior perspectives on the evolving landscape of client-side logic.',
    },
  },
  typescript: {
    hero: {
      heading: 'TypeScript & Type-Safe Engineering',
      subHeading: 'The Reliability Pillar',
      paragraph:
        'Leveraging types as a tool for architectural clarity and runtime security. This pillar is about moving from "syntax awareness" to building bulletproof, self-documenting codebases.',
      technologyName: 'typescript',
    },
    main: {
      heading: 'The Logic of Type Systems',
      paragraph:
        'Comprehensive modules on advanced generics, architectural playbooks for large-scale migrations, and opinions on maintaining type-safety in a full-stack context.',
    },
  },
} as const;
