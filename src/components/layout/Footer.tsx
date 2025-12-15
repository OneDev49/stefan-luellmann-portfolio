import { personalData, siteData } from '@/config/siteData';

import Link from 'next/link';
import Image from 'next/image';
import GitHubIcon from '../icons/brands/GitHubIcon';
import LinkedInIcon from '../icons/brands/LinkedInIcon';
import EnvelopeIcon from '../icons/glyphs/EnvelopeIcon';
import FooterBackground from './_components/background/FooterBackground';

export default function FooterSection() {
  const anchorClassName = 'custom-hover-underline-swipe';
  const strongClassName = 'underline text-xl';
  const divClassName = 'max-w-7xl w-full mx-auto px-4';
  const listClassName = 'flex items-center gap-1';

  return (
    <footer>
      <div className='relative -bottom-[5px]'>
        <FooterBackground />
      </div>
      <div className='bg-gradient-to-r from-[#000386] to-[#00478d] text-center md:text-left'>
        <div
          className={`${divClassName} flex flex-col pt-8 pb-4 border-b-white border-b md:flex-row md:justify-between`}
        >
          <div className='flex flex-col items-center gap-2 md:items-start'>
            <Link href='/' title='To the Homepage' aria-label='To the Homepage'>
              <Image
                draggable='false'
                className='w-auto h-auto max-h-20 sm:min-h-16'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9Yjt17UDWZWS01vBYf3yHtizhn8IV2UdGeQlP5`}
                alt='Logo of my Personal Website'
                height={75}
                width={500}
                sizes='(max-width: 768px) 100vw, 25vw'
              />
            </Link>
            <div className='flex flex-col gap-2'>
              <strong className={strongClassName}>
                How to Reach out to me
              </strong>
              <ul className='gap-2 flex flex-col items-center md:items-start lg:gap-6 lg:flex-row'>
                <li className={listClassName}>
                  <EnvelopeIcon variant='solid' />
                  <a
                    href={`mailto:${personalData.email}`}
                    className={anchorClassName}
                    rel='noopener noreferrer'
                  >
                    {personalData.email}
                  </a>
                </li>
                <li className={listClassName}>
                  <LinkedInIcon />
                  <a
                    href={`${personalData.social.linkedin}`}
                    rel='noopener noreferrer'
                    target='_blank'
                    className={anchorClassName}
                  >
                    LinkedIn: Stefan Lüllmann
                  </a>
                </li>
                <li className={listClassName}>
                  <GitHubIcon />
                  <a
                    href={`${personalData.social.github}`}
                    rel='noopener noreferrer'
                    target='_blank'
                    className={anchorClassName}
                  >
                    GitHub: OneDev49
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex justify-center gap-4 pt-8 md:grid md:grid-cols-3 md:justify-center md:pt-0'>
            <div>
              <strong className={strongClassName}>General</strong>
              <ul>
                <li>
                  <Link href='/' className={anchorClassName}>
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href='/work' className={anchorClassName}>
                    My Work
                  </Link>
                </li>
                <li>
                  <Link href='/about' className={anchorClassName}>
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <strong className={strongClassName}>Articles</strong>
              <ul>
                <li>
                  <Link href='/articles' className={anchorClassName}>
                    Articles Hub
                  </Link>
                </li>
                <li>
                  <Link href='/case-studies' className={anchorClassName}>
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <strong className={strongClassName}>Misc.</strong>
              <ul>
                <li>
                  <Link href='/impressum' className={anchorClassName}>
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link href='/datenschutz' className={anchorClassName}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${divClassName} py-4`}>
          <p className='text-sm grid text-center'>
            <span>Designed and Developed by Stefan Lüllmann</span>
            <span>
              Copyright © 2022 - Present - Stefan Lüllmann - All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
