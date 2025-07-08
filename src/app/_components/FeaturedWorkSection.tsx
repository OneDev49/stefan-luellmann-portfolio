import { TechIcon } from '@/components/icons/TechIconMap';
import styles from './FeaturedWorkSection.module.scss';
import clsx from 'clsx';
import GradientButton from '@/components/ui/buttons/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';

export default function FeaturedWorkSection() {
  const sectionWrapper = clsx(
    styles.wrapper,
    'nwt--width',
    'nwt--flex-n-n-col'
  );

  const sectionBigCard = clsx(styles.bigCard, 'nwt--flex-n-n-col');

  const sectionBigCardMiddle = clsx('nwt--flex-n-n-col', styles.techContainer);

  const sectionBigCardBottom = clsx(styles.bottom, 'nwt--flex-c-n-col');

  const sectionSmallCard = clsx(styles.smallCard, 'nwt--flex-n-n-col');

  const sectionSmallCardTech = clsx(styles.techContainer, 'nwt--flex-n-n-col');

  const sectionSmallCardBottom = clsx(styles.bottom, 'nwt--flex-c-n-col');
  return (
    <section className={sectionWrapper}>
      <div className='nwt--txt-center'>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>Featured Work</span>
        </h2>
        <p>
          A closer look at my capabilities in building Full-Stack Applications.
        </p>
      </div>
      <div className={styles.body}>
        <div className={sectionBigCard}>
          <div className={styles.top}>
            <div className={styles.topLeft}></div>
            <div>
              <h3 className='nwt--f-h3'>Full-Stack E-Commerce Platform</h3>
              <p>
                An end-to-end web application built with a modern, type-safe
                technology stack.
              </p>
              <p>
                This project demonstrates my ability to architect and build a
                complete, production-ready application. It includes a
                custom-designed database schema, a secure authentication system,
                complex server-side logic for product configuration, and a
                performant, server-rendered frontend deployed on Vercel.
              </p>
              <div>
                <h4 className='nwt--f-h4'>Key Features</h4>
                <ul>
                  <li>Secure User Authentication</li>
                  <li>PostgreSQL & Prisma ORM</li>
                  <li>Custom PC Compatibility Engine</li>
                  <li>Presistent Shopping Cart & State Management</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={sectionBigCardMiddle}>
            <h4 className='nwt--f-h4'>Technology Stack</h4>
            <ul className='nwt--ul-none'>
              <li>
                <TechIcon name='nextjs' />
                <p>Next.js</p>
              </li>
              <li>
                <TechIcon name='react' />
                <p>React</p>
              </li>
              <li>
                <TechIcon name='typescript' />
                <p>TypeScript</p>
              </li>
              <li>
                <TechIcon name='postgresql' />
                <p>PostgreSQL</p>
              </li>
              <li>
                <TechIcon name='prisma' />
                <p>Prisma</p>
              </li>
              <li>
                <TechIcon name='nodejs' />
                <p>Node.js</p>
              </li>
              <li>
                <TechIcon name='nextauthjs' />
                <p>NextAuthJS</p>
              </li>
            </ul>
          </div>
          <div className={sectionBigCardBottom}>
            <GradientButton
              href='/'
              variant='orange'
              children={
                <>
                  <span>Live-Demo of the E-Commerce Platform</span>
                  <CaretRightIcon />
                </>
              }
            />
            <GradientButton
              href='/'
              variant='green'
              children={
                <>
                  <span>View Code on GitHub</span>
                  <CaretRightIcon />
                </>
              }
            />
            <GradientButton
              href='/'
              children={
                <>
                  <span>Read Case Study of the E-Commerce Platform</span>
                  <CaretRightIcon />
                </>
              }
            />
          </div>
        </div>
        <div className={styles.bodyInnerGrid}>
          <div className={sectionSmallCard}>
            <div className={styles.top}>
              <img
                loading='lazy'
                draggable='false'
                decoding='async'
                src='./images/projects/personal_portfolio_website.png'
                alt=''
                width='540'
                height='270'
              />
            </div>
            <div>
              <h3 className='nwt--f-h3'>Personal Portfolio & Blog</h3>
              <p>
                A high-performance personal website built with Next.js and SSG
                to achieve optimal performance and accessibility.
              </p>
            </div>
            <div className={sectionSmallCardTech}>
              <h4 className='nwt--f-h4'>Technology Stack</h4>
              <ul className='nwt--ul-none'>
                <li>
                  <TechIcon name='nextjs' />
                  <p>Next.js</p>
                </li>
                <li>
                  <TechIcon name='react' />
                  <p>React</p>
                </li>
                <li>
                  <TechIcon name='typescript' />
                  <p>TypeScript</p>
                </li>
                <li>
                  <TechIcon name='sass' />
                  <p>SASS</p>
                </li>
                <li>
                  <TechIcon name='mdx' />
                  <p>MDX</p>
                </li>
              </ul>
            </div>
            <div className={sectionSmallCardBottom}>
              <GradientButton
                href='/'
                variant='green'
                children={
                  <>
                    <span>View Code on GitHub</span>
                    <CaretRightIcon />
                  </>
                }
              />
              <GradientButton
                href='/'
                children={
                  <>
                    <span>Read Case Study</span>
                    <CaretRightIcon />
                  </>
                }
              />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
