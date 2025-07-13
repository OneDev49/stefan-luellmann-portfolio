import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import HeroSection from '@/components/sections/HeroSection';
import AboutAndSkillsSection from './_components/AboutAndSkillsSection';
import FeaturedWorkSection from './_components/FeaturedWorkSection';
import CTASection from '@/components/sections/CTASection';
import GradientButton from '@/components/ui/buttons/GradientButton';
import LinkedInIcon from '@/components/icons/brands/LinkedInIcon';
import GitHubIcon from '@/components/icons/brands/GitHubIcon';

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
      <CTASection
        heading="Let's Conntect"
        paragraphChildren={
          <>
            <span>
              I am currently looking for work as a Full-Stack Developer.
            </span>
            <span>
              If my work and skills align with what you're looking for, I'd be
              exited to hear from you.
            </span>
          </>
        }
        buttonChildren={
          <>
            <GradientButton
              as='a'
              href='mailto:hallo@nordwebtec.com'
              variant='orange'
              children={
                <>
                  <span>hallo@nordwebtec.com</span>
                </>
              }
            />
            <div>
              <GradientButton
                as='a'
                href='https://www.linkedin.com/in/stefan-lüllmann'
                rel='noopener noreferrer'
                target='_blank'
                children={
                  <>
                    <LinkedInIcon />
                    <span>Stefan Lüllmann on LinkedIn</span>
                  </>
                }
              />
              <GradientButton
                as='a'
                href='https://github.com/OneDev49'
                rel='noopener noreferrer'
                target='_blank'
                children={
                  <>
                    <GitHubIcon />
                    <span>OneDev49 on GitHub</span>
                  </>
                }
              />
            </div>
          </>
        }
      />
    </main>
  );
}
