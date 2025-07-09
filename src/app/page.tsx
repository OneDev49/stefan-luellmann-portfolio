import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import HeroSection from '@/components/sections/HeroSection';
import AboutAndSkillsSection from './_components/AboutAndSkillsSection';
import FeaturedWorkSection from './_components/FeaturedWorkSection';
import CTASection from './_components/CTASection';

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
            href: '/#projects',
            children: (
              <>
                <span>View My Work</span>
                <CaretRightIcon width={16} height={24} />
              </>
            ),
          },
          {
            href: '/contact',
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
