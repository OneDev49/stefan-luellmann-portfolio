import { siteData } from '@/config/siteData';

import styles from './TimelineSection.module.scss';
import GradientButton from '@/components/ui/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import RocketIcon from '@/components/icons/glyphs/RocketIcon';
import CodeIcon from '@/components/icons/glyphs/CodeIcon';
import BriefcaseIcon from '@/components/icons/glyphs/BriefcaseIcon';
import GlobeIcon from '@/components/icons/glyphs/GlobeIcon';
import Image from 'next/image';

export default function TimelineSection() {
  return (
    <section className={`${styles.wrapper} nwt--width`}>
      <div className={styles.sectionHead}>
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
        <ol>
          <div className={styles.timeline}></div>
          <li data-item='1'>
            <div className={styles.leftContainer} data-cont='img'>
              <Image
                draggable='false'
                alt='Git, PHP, HTML, CSS and JavaScript Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YjttSNuFZWS01vBYf3yHtizhn8IV2UdGeQlP5`}
                height={163}
                width={356}
                sizes='25vw'
              />
            </div>
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
            <div className={styles.rightContainer} data-cont='img'>
              <Image
                draggable='false'
                alt='Figma, PHP, SASS, WordPress and MySQL Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YHXWCmv3AULrIv19p0qBfTKZdXzJemEya26uS`}
                height={185}
                width={385}
                sizes='25vw'
              />
            </div>
          </li>
          <li data-item='3'>
            <div className={styles.leftContainer} data-cont='img'>
              <Image
                draggable='false'
                alt='Prisma, NextJS, Vercel and PostgreSQL Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YqmSDcqHq0ru9WKvaM2UeYoRJO1fsNpbcGhL6`}
                height={188}
                width={365}
                sizes='25vw'
              />
            </div>
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
                to my current focus: the modern JavaScript Ecosystem. I am now
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
            <div className={styles.rightContainer} data-cont='img'>
              <Image
                draggable='false'
                alt='React, TailwindCSS and TypeScript Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YQy0ydLDI1O7Cd2btZFA38iaKMH6vwWBzDNJk`}
                height={152}
                width={361}
                sizes='25vw'
              />
            </div>
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
              <GradientButton href='/projects' variant='orange'>
                <span>Explore my Work</span>
                <CaretRightIcon height={20} width={20} />
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
