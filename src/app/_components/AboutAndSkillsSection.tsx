import styles from './AboutAndSkillsSection.module.scss';
import clsx from 'clsx';
import GradientButton from '@/components/ui/buttons/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import { TechIcon } from '@/components/icons/TechIconMap';

export default function AboutAndSkillsSection() {
  const sectionWrapper = clsx(styles.wrapper);

  const innerWrapper = clsx(
    styles.innerWrapper,
    'nwt--flex-n-n-col',
    'nwt--width'
  );

  const sectionBody = clsx(styles.body, 'nwt--ul-none');

  const sectionTechnologies = clsx(
    styles.technologies,
    'nwt--ul-none',
    'nwt--flex-n-n-col'
  );

  const sectionIconGroup = clsx(styles.iconGroup, 'nwt--flex-c-n-n');

  return (
    <section className={sectionWrapper}>
      <div className={innerWrapper}>
        <div className='nwt--txt-center'>
          <h2 className='nwt--f-h2'>
            <span className='nwt--txt-gradient'>About & Skills</span>
          </h2>
          <p>
            A brief summary of my background, and the primary tools and
            technologies I use to build modern web applications.
          </p>
        </div>
        <ul className={sectionBody}>
          <li className='nwt--flex-n-n-col'>
            <h3 className='nwt--f-h3'>
              <span className='nwt--txt-gradient'>About me</span>
            </h3>
            <p>
              <span>
                With three years of experience delivering web solutions for
                clients through my own agency, I developed a strong foundation
                in project management and PHP/WordPress development.
              </span>
              <span>
                I am now channelung that experience into building complex,
                full-stack applications with a focus on the modern JavaScript
                ecosystem. I thrive on solving challenging problems and am eager
                to contribute to a collaborative team environment.
              </span>
            </p>
            <GradientButton
              href='/about'
              children={
                <>
                  <span>Learn more About Me</span>
                  <CaretRightIcon width={16} height={24} />
                </>
              }
            />
          </li>
          <li className='nwt--flex-n-n-col'>
            <h3 className='nwt--f-h3'>
              <span className='nwt--txt-gradient'>Core Technologies</span>
            </h3>
            <ul className={sectionTechnologies}>
              <li className='nwt--flex-n-n-col'>
                <h4 className='nwt--f-h4'>Frontend</h4>
                <div className={sectionIconGroup}>
                  <div>
                    <TechIcon name='nextjs' />
                    <p>NextJS</p>
                  </div>
                  <div>
                    <TechIcon name='react' />
                    <p>React</p>
                  </div>
                  <div>
                    <TechIcon name='typescript' />
                    <p>TypeScript</p>
                  </div>
                  <div>
                    <TechIcon name='sass' />
                    <p>SASS</p>
                  </div>
                  <div>
                    <TechIcon name='tailwindcss' />
                    <p>TailwindCSS</p>
                  </div>
                </div>
              </li>
              <li className='nwt--flex-n-n-col'>
                <h4 className='nwt--f-h4'>Backend</h4>
                <div className={sectionIconGroup}>
                  <div>
                    <TechIcon name='nodejs' />
                    <p>NodeJS</p>
                  </div>
                  <div>
                    <TechIcon name='prisma' />
                    <p>Prisma</p>
                  </div>
                  <div>
                    <TechIcon name='postgresql' />
                    <p>PostgreSQL</p>
                  </div>
                  <div>
                    <TechIcon name='nextauthjs' />
                    <p>NextAuthJS</p>
                  </div>
                </div>
              </li>
              <li className='nwt--flex-n-n-col'>
                <h4 className='nwt--f-h4'>Other Tools</h4>
                <div className={sectionIconGroup}>
                  <div>
                    <TechIcon name='git' width={40} height={40} />
                    <p>Git</p>
                  </div>
                  <div>
                    <TechIcon name='docker' width={40} height={40} />
                    <p>Docker</p>
                  </div>
                  <div>
                    <TechIcon name='vercel' />
                    <p>Vercel</p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
