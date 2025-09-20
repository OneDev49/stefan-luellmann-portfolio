import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import HeroSection from '@/components/sections/HeroSection';
import IntroductionSection from './_components/IntroductionSection';
import ArticleAdvertisementSection from './_components/ArticleAdvertisementSection';
import ProjectShowcaseSection from './_components/ProjectShowcaseSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection
        heading='Stefan Lüllmann'
        subheading='Full-Stack Software Developer'
        multiThinWave={1}
        paragraph='I build performant and scalable web applications with a focus on the Next.js, TypeScript, and Prisma ecosystem.'
        gradientButton={[
          {
            href: '/projects',
            children: (
              <>
                <span>View My Work</span>
                <CaretRightIcon width={16} height={24} />
              </>
            ),
          },
        ]}
      />
      <IntroductionSection />
      <ArticleAdvertisementSection />
      <ProjectShowcaseSection />
    </main>
  );
}
