import clsx from 'clsx';
import styles from './TimelineSection.module.scss';
import GradientButton from '@/components/ui/buttons/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import RocketIcon from '@/components/icons/glyphs/RocketIcon';
import CodeIcon from '@/components/icons/glyphs/CodeIcon';
import BriefcaseIcon from '@/components/icons/glyphs/BriefcaseIcon';
import GlobeIcon from '@/components/icons/glyphs/GlobeIcon';

export default function TimelineSection() {
  const sectionWrapperClassName = clsx(
    styles.wrapper,
    'nwt--width',
    'nwt--flex-n-n-col'
  );

  const sectionHeadClassName = clsx(styles.sectionHead, 'nwt--txt-center');

  return (
    <section className={sectionWrapperClassName}>
      <div className={sectionHeadClassName}>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>My Professional Journey</span>
        </h2>
        <p>
          From international pro-bono work to founding a web agency, this
          timeline highlights the key experiences that have shaped my focus on
          modern, Full-Stack Software Engineering.
        </p>
      </div>
      <div className={styles.sectionBody}>
        <ol className='nwt--ul-none nwt--flex-n-n-col'>
          <div className={styles.timeline}></div>
          <li data-item='1'>
            <div className={styles.leftContainer} data-cont='img'></div>
            <div className={styles.middleContainer}>
              <div>
                <GlobeIcon height={35} width={35} />
              </div>
            </div>
            <div className={styles.rightContainer} data-cont='txt'>
              <h3 className='nwt--f-h3-small'>
                2020 - 2022: International Pro-Bono Work
              </h3>
              <p>
                After my Abitur, I spent two years with NGOs in Turkey and
                Northern Macedonia, developing accessible (WCAG 2.1) websites.
                This international setting taught me to collaborate effectively
                across different teams and cultures while applying my skills in
                PHP and JavaScript to solve real-world problems.
              </p>
            </div>
          </li>
          <li data-item='2'>
            <div className={styles.leftContainer} data-cont='txt'>
              <h3 className='nwt--f-h3-small'>
                2022 - Present: Agency & Project Delivery
              </h3>
              <p>
                Upon returning to Germany, I founded NordWebTec to apply my
                skills commercially. I managed the full project lifecycle for
                clients, from consultation to development and deployment,
                primarily using WordPress. This experience was a masterclass in
                delivering products that meet the specific business goals of the
                clients.
              </p>
            </div>
            <div className={styles.middleContainer}>
              <div>
                <BriefcaseIcon height={35} width={35} />
              </div>
            </div>
            <div className={styles.rightContainer} data-cont='img'></div>
          </li>
          <li data-item='3'>
            <div className={styles.leftContainer} data-cont='img'></div>
            <div className={styles.middleContainer}>
              <div>
                <CodeIcon height={35} width={35} />
              </div>
            </div>
            <div className={styles.rightContainer} data-cont='txt'>
              <h3 className='nwt--f-h3-small'>
                Present: Full-Stack Specialization
              </h3>
              <p>
                My drive to build more complex and scalable applications led me
                to my current focus: the modern JavaScript ecosystem. I am now
                centered on developing with Next.js, React and Prisma, with a
                passion for performance optimization and building scalable,
                reusable components.
              </p>
            </div>
          </li>
          <li data-item='4'>
            <div className={styles.leftContainer} data-cont='txt'>
              <h3 className='nwt--f-h3-small'>
                Future: Full-Time Engineering Role
              </h3>
              <p>
                I am now seeking a Full-Time position where I can join a
                collaborative team, contribute to meaningful projects and
                continue to grow as a Software Engineer under the mentorship of
                senior developers.
              </p>
            </div>
            <div className={styles.middleContainer}>
              <div>
                <RocketIcon height={35} width={35} />
              </div>
            </div>
            <div className={styles.rightContainer} data-cont='img'></div>
          </li>
        </ol>
        <div className={styles.sectionFoot}>
          <div className={styles.sectionFootInner}>
            <div>
              <h3 className='nwt--f-h3'>Where I am Today</h3>
              <p>
                My journey has provided me with a unique blend of client-facing
                project management and deep, modern technical skills. I am now
                focused on applying this Full-Stack toolkit to build robust,
                user-centric and scalable applications.
              </p>
              <GradientButton
                href='/'
                variant='orange'
                children={
                  <>
                    <span>Explore my Work</span>
                    <CaretRightIcon height={16} width={16} />
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
