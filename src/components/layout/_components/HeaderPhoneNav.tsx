import { personalData, siteData } from '@/config/siteData';
import { cn } from '@/lib/utilities';

import AnglesRightIcon from '@/components/icons/ui/AnglesRightIcon';
import Link from 'next/link';
import clsx from 'clsx';
import CloseIcon from '@/components/icons/ui/CloseIcon';
import Image from 'next/image';
import GradientButton from '@/components/ui/GradientButton';
import GitHubIcon from '@/components/icons/brands/GitHubIcon';
import LinkedInIcon from '@/components/icons/brands/LinkedInIcon';

interface HeaderPhoneNavProps {
  isPhoneNavClosed: boolean;
  openGetInTouch: () => void;
  closePhoneNav: () => void;
}

export default function HeaderPhoneNav({
  isPhoneNavClosed,
  openGetInTouch,
  closePhoneNav,
}: HeaderPhoneNavProps) {
  const overlayClassName = clsx(
    'bg-black/90 h-full left-0 top-0 fixed w-full z-50 ',
    isPhoneNavClosed ? 'animate-opacity-hide' : 'animate-opacity-show'
  );
  const phoneNavClassName = clsx(
    'bg-gradient-to-b from-[#000645] via-[#000435] to-[#000216] h-full left-0 max-w-[380px] overflow-y-auto overflow-x-hidden fixed top-0 origin-left -translate-x-[380px] w-[85%] z-[100] border-r border-[#747474] overscroll-contain',
    isPhoneNavClosed ? 'animate-sideNav-collapse' : 'animate-sideNav-expand'
  );
  const closeBtnClassName = clsx(
    'cursor-pointer absolute top-5 -translate-y-[5px] z-[75] ml-0 right-[3%] left-auto sm:left-0 sm:ml-[390px] sm:right-[unset] hover:text-gray-400 transition-colors',
    isPhoneNavClosed ? 'animate-opacity-hide' : 'animate-opacity-show'
  );
  const hrElementClassName = 'bg-[#3d3d3d] border-0 h-[1px] mt-1';
  const anchorSectionHeaderClassName =
    'flex items-center font-extrabold gap-4 mt-1 text-xl p-2 sm:py-[10px] sm:px-[15px]';
  const anchorClassName =
    'p-2 transition-colors hover:bg-[#04188f] sm:py-[10px] sm:px-[15px]';
  const anchorUtilsClassName = 'flex items-center justify-between gap-3 group';
  const anchorContainerClassName = 'flex flex-col items-start gap-1 text-sm';
  const anchorSVGClassName =
    'min-w-[15px] group-hover:translate-x-1 transition-all duration-300 ease-in-out';
  const anchorHeading =
    'flex items-center text-[#63b2fd] text-lg font-heading font-extrabold gap-[10px]';
  const anchorAnnounce =
    'bg-[#0072b4] py-[0px] font-normal px-1 rounded-md text-[0.8rem] leading-6 text-white';

  return (
    <div className='[&_a]:text-white'>
      <div className={overlayClassName} onClick={closePhoneNav} />
      <div className={closeBtnClassName} onClick={closePhoneNav}>
        <CloseIcon height={30} width={30} />
      </div>
      <nav className={phoneNavClassName}>
        <div className='p-3 flex items-center justify-between gap-2'>
          <Link
            href='/'
            title='Stefan Lüllmann - Full-Stack Software Developer'
            onClick={closePhoneNav}
            className='w-full'
          >
            <Image
              decoding='async'
              draggable='false'
              className='max-h-16 h-auto w-auto min-w-full'
              src={`${siteData.uploadThingUrl}/x81VdwhEWe9Yjt17UDWZWS01vBYf3yHtizhn8IV2UdGeQlP5`}
              alt='Logo of my Personal Website'
              height={55}
              width={242}
              sizes='25vw'
            />
          </Link>
          <GradientButton
            as='button'
            variant='rainbow'
            className='text-sm font-normal flex-shrink-0'
            position='card'
            onClick={() => {
              closePhoneNav();
              openGetInTouch();
            }}
          >
            Get In Touch
          </GradientButton>
        </div>
        <div className='absolute w-full pb-5'>
          <Link
            href='/'
            className={`text-sm block ${anchorClassName}`}
            onClick={closePhoneNav}
          >
            HomePage
          </Link>
          <hr className={hrElementClassName} />
          <div>
            <div className={anchorSectionHeaderClassName}>
              <span className='bg-gradient-card text-transparent bg-clip-text'>
                Explore the Website
              </span>
            </div>
            <ul>
              <li>
                <Link
                  href='/work'
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  onClick={closePhoneNav}
                >
                  <div className={anchorContainerClassName}>
                    <span className={anchorHeading}>My Work</span>
                    <span>
                      View the Projects I did for Clients and personal Projects.
                    </span>
                  </div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href='/articles'
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  onClick={closePhoneNav}
                >
                  <div className={anchorContainerClassName}>
                    <span className={anchorHeading}>
                      Articles
                      <span className={anchorAnnounce}>New Releases!</span>
                    </span>
                    <span>
                      Technical Deep Dives, Playbook and the latest releases of
                      my Senior Series.
                    </span>
                  </div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href='/case-studies'
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  onClick={closePhoneNav}
                >
                  <div className={anchorContainerClassName}>
                    <span className={anchorHeading}>Case Studies</span>
                    <span>Read Case Studies on all of my Projects.</span>
                  </div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href='/about'
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  onClick={closePhoneNav}
                >
                  <div className={anchorContainerClassName}>
                    <span className={anchorHeading}>About me</span>
                    <span>
                      Learn more about me, who I am and how I became a
                      Full-Stack Developer.
                    </span>
                  </div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </Link>
              </li>
            </ul>
          </div>
          <hr className={hrElementClassName} />
          <div>
            <div className={anchorSectionHeaderClassName}>
              <div className='text-transparent'>
                <span className='bg-gradient-card bg-clip-text'>
                  Other Platforms
                </span>
              </div>
            </div>
            <ul>
              <li>
                <a
                  href={`${personalData.social.github}`}
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  rel='noopener noreferrer'
                  target='_blank'
                  onClick={closePhoneNav}
                >
                  <div
                    className={cn(anchorContainerClassName, 'flex-row gap-2')}
                  >
                    <GitHubIcon height={20} width={20} />
                    GitHub
                  </div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </a>
              </li>
              <li>
                <a
                  href={`${personalData.social.linkedin}`}
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  rel='noopener noreferrer'
                  target='_blank'
                  onClick={closePhoneNav}
                >
                  <div
                    className={cn(anchorContainerClassName, 'flex-row gap-2')}
                  >
                    <LinkedInIcon height={20} width={20} />
                    LinkedIn
                  </div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </a>
              </li>
            </ul>
          </div>
          <hr className={hrElementClassName} />
          <div>
            <div className={anchorSectionHeaderClassName}>
              <span className='bg-gradient-card text-transparent bg-clip-text'>
                Miscellaneous
              </span>
            </div>
            <ul>
              <li>
                <Link
                  href='/impressum'
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  onClick={closePhoneNav}
                >
                  <div className={anchorContainerClassName}>Legal Notice</div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </Link>
              </li>
              <li>
                <Link
                  href='/datenschutz'
                  className={`${anchorClassName} ${anchorUtilsClassName}`}
                  onClick={closePhoneNav}
                >
                  <div className={anchorContainerClassName}>Privacy Policy</div>
                  <AnglesRightIcon
                    height={15}
                    width={15}
                    className={anchorSVGClassName}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
