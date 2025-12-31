'use client';

import { personalData, siteData } from '@/config/siteData';
import { useModal } from '@/context/ModalContext';

import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import RocketIcon from '@/components/icons/glyphs/RocketIcon';
import CodeIcon from '@/components/icons/glyphs/CodeIcon';
import BriefcaseIcon from '@/components/icons/glyphs/BriefcaseIcon';
import GlobeIcon from '@/components/icons/glyphs/GlobeIcon';
import Image from 'next/image';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import CTAButton from '@/components/ui/CTAButton';

export default function AboutTimeline() {
  const { openGetInTouch } = useModal();

  const listClassName =
    'grid grid-cols-[50px_1fr] items-center gap-4 md:grid-cols-[1fr_50px_1fr]';

  const h3ClassName = 'text-h3-small font-extrabold pb-2 underline';

  const middleContainerClassName =
    'h-[50px] w-[50px] grid place-items-center bg-[linear-gradient(225deg,#0059ff,#00d9ff)] border rounded-2xl relative shadow-[0_4px_15px_5px_rgb(0,111,255)]';

  return (
    <section id='timeline' className='scroll-mt-20'>
      <div className='flex flex-col max-w-6xl w-full mx-auto px-4'>
        <div className='max-w-4xl mx-auto border-b-4 border-[#0095ff] rounded-3xl pb-5 text-center px-4 md:px-0 md:border-b-0 md:rounded-none'>
          <h2 className='text-h2 text-transparent font-extrabold capitalize'>
            <span className='bg-gradient-card bg-clip-text'>
              My Professional Journey
            </span>
          </h2>
          <p>
            From international Software Development to building scalable
            websites and SaaS tools for SMB companies in the whole DACH-Region,
            this is my complete professional timeline.
          </p>
        </div>
        <ol className='relative gap-32 pl-2 flex flex-col m-0 py-16 sm:py-36 md:items-center md:pl-0'>
          <div className='absolute w-[5px] top-0 bottom-0 left-[33px] bg-[linear-gradient(180deg,#0095ff,#006fff)] md:rounded-[25px_25px_0_0] md:left-[initial]' />
          <li className={listClassName}>
            <div className='hidden mr-[70px] md:justify-self-end md:block'>
              <Image
                draggable='false'
                className='max-h-[300px] h-auto w-auto'
                alt='Git, PHP, HTML, CSS and JavaScript Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YjttSNuFZWS01vBYf3yHtizhn8IV2UdGeQlP5`}
                height={163}
                width={356}
                sizes='25vw'
              />
            </div>
            <div className={middleContainerClassName}>
              <GlobeIcon height={35} width={35} />
            </div>
            <div
              className='justify-self-start md:max-w-[550px]'
              data-cont='txt'
            >
              <h3 className={h3ClassName}>
                2020 - 2022: International Software Developer
              </h3>
              <p>
                After my Abitur, I worked two years for different NGOs in Turkey
                and Northern Macedonia, developing accessible (WCAG 2.1)
                websites, leading teams and giving technical consultation where
                needed. This international setting taught me to collaborate
                effectively across different teams and cultures while applying
                my skills in the modern JavaScript Ecosystem to solve real-world
                problems.
              </p>
            </div>
          </li>
          <li className={listClassName}>
            <div
              className='order-3 md:justify-self-end md:order-[initial] md:max-w-[550px]'
              data-cont='txt'
            >
              <h3 className={h3ClassName}>
                2022 - Present: Full-Stack Engineer
              </h3>
              <p>
                Upon returning to Germany, I started developing websites for
                SMBs in my own region (Hannover). I managed the full project
                lifecycle for clients, from consultation to development and
                deployment, primarily using React. This experience was a
                masterclass in delivering products that met the specific
                business goals of the clients.
              </p>
            </div>
            <div className={middleContainerClassName}>
              <BriefcaseIcon height={35} width={35} />
            </div>
            <div className='hidden justify-self-start ml-[70px] md:block'>
              <Image
                draggable='false'
                className='max-h-[300px] h-auto w-auto'
                alt='Figma, PHP, SASS, WordPress and MySQL Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YpTYaLTPza72S4sGQjluxBXMe3morRIc0UAfW`}
                height={185}
                width={385}
                sizes='25vw'
              />
            </div>
          </li>
          <li className={listClassName}>
            <div className='hidden mr-[70px] md:justify-self-end md:block'>
              <Image
                draggable='false'
                className='max-h-[300px] h-auto w-auto'
                alt='Prisma, NextJS, Vercel and PostgreSQL Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YqmSDcqHq0ru9WKvaM2UeYoRJO1fsNpbcGhL6`}
                height={188}
                width={365}
                sizes='25vw'
              />
            </div>
            <div className={middleContainerClassName}>
              <CodeIcon height={35} width={35} />
            </div>
            <div
              className='justify-self-start md:max-w-[550px]'
              data-cont='txt'
            >
              <h3 className={h3ClassName}>
                2024 - Present: Technical Deep Dives and Writer
              </h3>
              <p>
                After working with different sized teams and giving talks at
                different meetups, I discovered my burning passion for writing
                technical deep dives, case studies and documentations for my
                projects as well as teaching others about modern technologies
                from the perspective of a seasoned Engineer. I have been
                actively building my own library called &quot;The Senior Guide
                to Full-Stack Development&quot; since late 2024.
              </p>
            </div>
          </li>
          <li className={listClassName}>
            <div
              className='order-3 md:justify-self-end md:order-[initial] md:max-w-[550px]'
              data-cont='txt'
            >
              <h3 className={h3ClassName}>
                Future: Full-Time Engineering Role
              </h3>
              <p>
                I am now seeking a Full-Time position where I can join a
                collaborative team, contribute to meaningful projects and
                continue to grow as a Software Engineer under the mentorship of
                senior developers.
              </p>
            </div>
            <div className={middleContainerClassName}>
              <RocketIcon height={35} width={35} />
            </div>
            <div className='hidden justify-self-start ml-[70px] md:block'>
              <Image
                draggable='false'
                className='max-h-[300px] h-auto w-auto'
                alt='React, TailwindCSS and TypeScript Technology Icons'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9YMKiHhMx3N5G8HJPjlc0ZDwIpSvm1iOK7nqh2`}
                height={152}
                width={361}
                sizes='25vw'
              />
            </div>
          </li>
        </ol>
      </div>
      <div className='bg-[#001c58] border-t-4 border-[#006fff] py-16'>
        <div className='w-full mx-auto px-4 max-w-6xl flex gap-8 flex-col md:flex-row md:text-left text-center items-center'>
          <div className='flex border-2 border-white rounded-full overflow-hidden shadow-lg shadow-blue-600'>
            <ImageSkeletonLoader
              loading='eager'
              className='h-auto max-h-[250px] sm:max-h-[330px] w-auto min-w-[250px] sm:min-w-[330px]'
              priority={true}
              draggable='false'
              src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
              alt="I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives!"
              title="Hey there, I'm Stefan, a Full-Stack Software Engineer. Enjoy my Deep Dives"
              height={330}
              width={330}
              sizes='(max-width: 768px) 100vw, 25vw'
            />
          </div>
          <div className='flex-1 space-y-6 lg:ml-12'>
            <h2 className='text-h2 text-transparent font-extrabold capitalize'>
              <span className='bg-gradient-card bg-clip-text'>
                Reach out and Connect with me
              </span>
            </h2>
            <p className='grid gap-6'>
              <span>
                I am always open for interesting opportunities, whether it is
                building scalable and efficient Software solutions or
                collaborating in a Team to architect something new and exciting.
              </span>
              <span>
                Feel free to reach out to me via my media channels, or book a
                quick free introduction call directly with me via Calendly.
              </span>
            </p>
            <div>
              <CTAButton
                as='button'
                onClick={openGetInTouch}
                animation='all'
                colorStyle='gradientBlue'
                className='py-1 px-2 gap-2 font-extrabold'
              >
                Reach out to Me
                <CaretRightIcon height={32} width={16} />
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
