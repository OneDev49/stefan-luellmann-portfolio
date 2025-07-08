import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import HeroSection from '@/components/sections/HeroSection';
import AboutAndSkillsSection from './_components/AboutAndSkillsSection';
import FeaturedWorkSection from './_components/FeaturedWorkSection';
import { ProjectCardLongProps } from '@/components/ui/cards/ProjectCardLong';
import CTASection from './_components/CTASection';

export default function HomePage() {
  const myProjects: ProjectCardLongProps[] = [
    {
      children: (
        <>
          <span>Stefan Lüllmann's</span>
          <span>Personal Portfolio Website</span>
        </>
      ),
      imageURL: '/images/projects/personal_portfolio_website.png',
      imageAlt: "Stefan Lüllmann's Personal Portfolio Website",
      paragraph:
        'The Personal Portfolio Website of me. It is the Website you are currently on. Fast, Accessible and Responsive to all Devices.',
      gradientButtonLiveDemo: {
        href: '/',
        children: (
          <>
            <span>To the Live-Demo of the Personal Project Website</span>
          </>
        ),
        variant: 'orange',
      },
      gradientButtonGitHub: {
        href: '/test2',
        children: (
          <>
            <span>Project's GitHub</span>
          </>
        ),
        variant: 'green',
      },
      gradientButtonBlogArticle: {
        href: '/test3',
        children: (
          <>
            <span>Project's Blog Article</span>
          </>
        ),
        variant: 'green',
      },
      technologies: [
        { name: 'nextjs', displayName: 'NextJS', width: 40, height: 40 },
        { name: 'react', displayName: 'React', width: 40, height: 40 },
        {
          name: 'typescript',
          displayName: 'TypeScript',
          width: 40,
          height: 40,
        },
        { name: 'sass', displayName: 'SASS', width: 54, height: 40 },
        { name: 'mdx', displayName: 'MDX', width: 98, height: 40 },
        { name: 'vercel', displayName: 'Vercel', width: 47, height: 40 },
      ],
    },
    {
      children: (
        <>
          <span>Full-Stack E-Commerce</span>
          <span>Computer Online-Shop</span>
        </>
      ),
      imageURL: '/images/projects/personal_portfolio_website.png',
      imageAlt: "Stefan Lüllmann's Personal Portfolio Website",
      paragraph:
        'The Personal Portfolio Website of me. It is the Website you are currently on. Fast, Accessible and Responsive to all Devices.',
      gradientButtonLiveDemo: {
        href: '/',
        children: (
          <>
            <span>To the Live-Demo of the Online-Shop</span>
          </>
        ),
        variant: 'orange',
      },
      gradientButtonGitHub: {
        href: '/test2',
        children: (
          <>
            <span>Project's GitHub</span>
          </>
        ),
        variant: 'green',
      },
      gradientButtonBlogArticle: {
        href: '/test3',
        children: (
          <>
            <span>Project's Blog Article</span>
          </>
        ),
        variant: 'green',
      },
      technologies: [
        { name: 'nextjs', displayName: 'NextJS', width: 40, height: 40 },
        { name: 'react', displayName: 'React', width: 40, height: 40 },
        {
          name: 'typescript',
          displayName: 'TypeScript',
          width: 40,
          height: 40,
        },
        {
          name: 'postgresql',
          displayName: 'PostgreSQL',
          width: 40,
          height: 40,
        },
        { name: 'prisma', displayName: 'Prisma', width: 40, height: 40 },
        { name: 'nodejs', displayName: 'NodeJS', width: 40, height: 40 },
        {
          name: 'nextauthjs',
          displayName: 'NextAuthJS',
          width: 40,
          height: 40,
        },
        {
          name: 'tailwindcss',
          displayName: 'TailwindCSS',
          width: 40,
          height: 40,
        },
        {
          name: 'supabase',
          displayName: 'Supabase',
          width: 40,
          height: 40,
        },
        {
          name: 'zustand',
          displayName: 'Zusand',
          width: 40,
          height: 40,
        },
        { name: 'vercel', displayName: 'Vercel', width: 47, height: 40 },
      ],
    },
  ];

  return (
    <main>
      <HeroSection
        heading='Stefan Lüllmann'
        subheading='Full-Stack Software Developer'
        multiThinWave={1}
        paragraph='I build performant and scalable web applications with a focus on the Next.js, TypeScript, and Prisma ecosystem.'
        gradientButton={[
          {
            href: '/test',
            children: (
              <>
                <span>View My Work</span>
                <CaretRightIcon width={16} height={24} />
              </>
            ),
          },
          {
            href: '/test',
            children: (
              <>
                <span>Get In Touch</span>
                <CaretRightIcon width={16} height={24} />
              </>
            ),
          },
        ]}
      />
      <AboutAndSkillsSection />
      <FeaturedWorkSection />
      <CTASection />
    </main>
  );
}
