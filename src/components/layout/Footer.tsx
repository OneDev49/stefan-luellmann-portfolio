import { personalData, siteData } from '@/config/siteData';

import Link from 'next/link';
import GitHubIcon from '../icons/brands/GitHubIcon';
import LinkedInIcon from '../icons/brands/LinkedInIcon';
import styles from './Footer.module.scss';
import EnvelopeIcon from '../icons/glyphs/EnvelopeIcon';
import Image from 'next/image';
import FooterBackground from './_components/background/FooterBackground';

export default function FooterSection() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className={styles.svg}>
        <FooterBackground />
      </div>
      <div className={styles.footerMain}>
        <div className={styles.footerTop}>
          <div className={styles.footerLeft}>
            <Link href='/' title='To the Mainpage' aria-label='To the Mainpage'>
              <Image
                draggable='false'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9Yjt17UDWZWS01vBYf3yHtizhn8IV2UdGeQlP5`}
                alt='Logo of my Personal Website'
                height={75}
                width={500}
                sizes='(max-width: 768px) 100vw, 25vw'
              />
            </Link>
            <div>
              <strong>How to Reach out to me</strong>
              <ul>
                <li>
                  <EnvelopeIcon variant='solid' />
                  <a
                    href={`mailto:${personalData.email}`}
                    className='nwt--anchor-under'
                    rel='noopener noreferrer'
                  >
                    {personalData.email}
                  </a>
                </li>
                <li>
                  <LinkedInIcon />
                  <a
                    href={`${personalData.social.linkedin}`}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='nwt--anchor-under'
                  >
                    LinkedIn: Stefan Lüllmann
                  </a>
                </li>
                <li>
                  <GitHubIcon />
                  <a
                    href={`${personalData.social.github}`}
                    rel='noopener noreferrer'
                    target='_blank'
                    className='nwt--anchor-under'
                  >
                    GitHub: OneDev49
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footerRight}>
            <div>
              <strong>General</strong>
              <ul>
                <li>
                  <Link href='/' className='nwt--anchor-under'>
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href='/projects' className='nwt--anchor-under'>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='nwt--anchor-under'>
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <strong>Articles</strong>
              <ul>
                <li>
                  <Link href='/case-studies' className='nwt--anchor-under'>
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <strong>Other</strong>
              <ul>
                <li>
                  <Link href='/impressum' className='nwt--anchor-under'>
                    Legal Notice
                  </Link>
                </li>
                <li>
                  <Link href='/datenschutz' className='nwt--anchor-under'>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            <span>Designed and Developed by Stefan Lüllmann</span>
            <span>
              Copyright © 2022 - {date} - Stefan Lüllmann - All rights reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
