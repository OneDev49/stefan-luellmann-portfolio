import clsx from 'clsx';
import styles from './ToolkitSection.module.scss';
import DesktopIcon from '@/components/icons/glyphs/DesktopIcon';
import ServerIcon from '@/components/icons/glyphs/ServerIcon';
import DatabaseIcon from '@/components/icons/glyphs/DatabaseIcon';
import ScrewdriverWrenchIcon from '@/components/icons/glyphs/ScrewdriverWrenchIcon';
import { TechIcon } from '@/components/icons/TechIconMap';
import GitHubIcon from '@/components/icons/brands/GitHubIcon';

export default function ToolkitSection() {
  const sectionWrapperClassName = clsx(
    styles.wrapper,
    'nwt--width',
    'nwt--flex-n-n-col'
  );
  const sectionBodyClassName = clsx(styles.sectionBody, 'nwt--ul-none');

  return (
    <section className={sectionWrapperClassName}>
      <div className='nwt--txt-center'>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>My Technical Toolkit</span>
        </h2>
        <p>
          A look at the languages, frameworks and tools I use to bring ideas to
          life, from initial concept to final deployment.
        </p>
      </div>
      <ul className={sectionBodyClassName}>
        <li className='nwt--flex-n-n-col'>
          <div className={styles.images}>
            <DesktopIcon width={35} height={35} />
          </div>
          <div>
            <h3 className='nwt--f-h3'>Front-End</h3>
            <p>
              I focus on building performant, accessible and responsive user
              interfaces using modern, component-based architectures.
            </p>
          </div>
          <ul className='nwt--ul-none'>
            <li>
              <TechIcon name='typescript' />
              TypeScript
            </li>
            <li>
              <TechIcon name='javascript' />
              JavaScript
            </li>
            <li>
              <TechIcon name='nextjs' />
              Next.js
            </li>
            <li>
              <TechIcon name='react' />
              React
            </li>
            <li>
              <TechIcon name='html5' />
              HTML5
            </li>
            <li>
              <TechIcon name='css3' />
              CSS3
            </li>
            <li>
              <TechIcon name='sass' />
              SASS
            </li>
            <li>
              <TechIcon name='tailwindcss' />
              TailwindCSS
            </li>
          </ul>
        </li>
        <li className='nwt--flex-n-n-col'>
          <div className={styles.images}>
            <ServerIcon width={35} height={35} />
          </div>
          <div>
            <h3 className='nwt--f-h3'>Back-End</h3>
            <p>
              My backend experience involves creating robust, scalable and
              type-safe APIs and business logic.
            </p>
          </div>
          <ul className='nwt--ul-none'>
            <li>
              <TechIcon name='nodejs' />
              Node.js
            </li>
            <li>
              <TechIcon name='php' />
              PHP
            </li>
            <li>
              <TechIcon name='prisma' />
              Prisma
            </li>
            <li>
              <TechIcon name='nextauthjs' />
              NextAuth.js
            </li>
          </ul>
        </li>
        <li className='nwt--flex-n-n-col'>
          <div className={styles.images}>
            <DatabaseIcon height={35} width={35} />
          </div>
          <div>
            <h3 className='nwt--f-h3'>Database</h3>
            <p>
              I have hands-on experience with relational databases, from schema
              design to writing efficient, type-safe queries.
            </p>
          </div>
          <ul className='nwt--ul-none'>
            <li>
              <TechIcon name='postgresql' />
              PostgreSQL
            </li>
            <li>
              <TechIcon name='mysql' />
              MySQL
            </li>
            <li>
              <TechIcon name='supabase' />
              Supabase
            </li>
          </ul>
        </li>
        <li className='nwt--flex-n-n-col'>
          <div className={styles.images}>
            <ScrewdriverWrenchIcon height={35} width={35} />
          </div>
          <div>
            <h3 className='nwt--f-h3'>Tools & Platforms</h3>
            <p>
              These are the essential tools that power my development workflow,
              from version control to deployment.
            </p>
          </div>
          <ul className='nwt--ul-none'>
            <li>
              <TechIcon name='git' />
              Git
            </li>
            <li>
              <GitHubIcon height={35} width={35} />
              GitHub
            </li>
            <li>
              <TechIcon name='docker' />
              Docker
            </li>
            <li>
              <TechIcon name='vercel' />
              Vercel
            </li>
            <li>
              <TechIcon name='wordpress' />
              WordPress
            </li>
            <li>
              <TechIcon name='figma' />
              Figma
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
