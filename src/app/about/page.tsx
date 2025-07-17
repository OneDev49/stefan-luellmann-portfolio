import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import HeroSection from '@/components/sections/HeroSection';
import type { Metadata } from 'next';
import TimelineSection from './_components/TimelineSection';
import CTASection from '@/components/sections/CTASection';
import ToolkitSection from './_components/ToolkitSection';
import GradientButton from '@/components/ui/buttons/GradientButton';
import LinkedInIcon from '@/components/icons/brands/LinkedInIcon';
import GitHubIcon from '@/components/icons/brands/GitHubIcon';

export const metadata: Metadata = {
  title: 'About Me',
  description:
    "Learn more about Stefan Lüllmann's professional journey, from founding a Web Agency to specializing in modern Full-Stack Development with Next.js and TypeScript.",

  openGraph: {
    title: 'About Stefan Lüllmann',
    description:
      'A detailed look into my background, skills and professional philosophy.',
  },

  twitter: {
    title: 'About Stefan Lüllmann',
    description:
      'A detailed look into my background, skills and professional philosophy.',
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection
        heading='About Stefan Lüllmann'
        subheading='From Agency Founder to Full-Stack Developer'
        paragraph="Hello! I'm a software developer with a passion for building elegant, functional and highly performant digital experiences. My journey in tech has been quite a unique one, and this page tells a bit more about that story."
        variant='doubleColumn'
        doubleColumnImage={{
          src: '/images/professional_personal_image.webp',
          alt: 'Image of Stefan Lüllmann',
          height: '400',
          width: '400',
        }}
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
            href: '#get-in-touch',
            children: (
              <>
                <span>Get In Touch</span>
                <CaretRightIcon width={16} height={24} />
              </>
            ),
          },
        ]}
      />
      <TimelineSection />
      <ToolkitSection />
      <div id='get-in-touch' className='nwt--invisible-anchor'></div>
      <CTASection
        heading="Get in Touch and let's connect!"
        paragraphChildren={
          <>
            <span>
              Thank you for taking the time to learn more about my background.
            </span>
            <span>
              If you believe my skills and mindset would be a good fit for your
              team, I'd be exited to chat!
            </span>
          </>
        }
        buttonChildren={
          <>
            <GradientButton
              as='a'
              href='/files/Stefan_Luellmann_CV_English.pdf'
              variant='orange'
              download
              children={
                <>
                  <span>Download My CV</span>
                </>
              }
            />
            <div>
              <GradientButton
                as='a'
                href='mailto:hallo@nordwebtec.com'
                variant='blue'
                children={
                  <>
                    <span>hallo@nordwebtec.com</span>
                  </>
                }
              />
              <GradientButton
                as='a'
                href='https://www.linkedin.com/in/stefan-lüllmann'
                rel='noopener noreferrer'
                target='_blank'
                children={
                  <>
                    <LinkedInIcon />
                    <span>My LinkedIn</span>
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
                    <span>My GitHub</span>
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
