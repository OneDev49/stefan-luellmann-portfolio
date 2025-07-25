import Link from 'next/link';
import GitHubIcon from '../icons/brands/GitHubIcon';
import LinkedInIcon from '../icons/brands/LinkedInIcon';
import styles from './Footer.module.scss';
import EnvelopeIcon from '../icons/glyphs/EnvelopeIcon';
import clsx from 'clsx';

export default function FooterSection() {
  const date = new Date().getFullYear();

  const footerTop = clsx(styles.footerTop, 'nwt--flex-n-n-col');

  const footerLeft = clsx(styles.footerLeft, 'nwt--flex-c-n-col');

  return (
    <footer>
      <div className={styles.svg}>
        <svg
          viewBox='0 0 1440 110'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
        >
          <path
            opacity='0.25'
            d='M0 110.441L4.0468e-06 64.1514C57.348 41.9513 124.308 31.9813 189.6 36.1514C274.032 41.5214 353.196 69.4614 437.76 73.6514C526.368 78.0114 614.808 56.7714 699.6 38.3914C782.724 20.3914 865.56 13.5114 950.88 25.3114C994.26 31.3114 1034.7 43.1514 1076.22 54.6514C1187.39 85.4415 1335.6 124.732 1440 57.9715L1440 110.442L0 110.441Z'
            fill='url(#paint0_linear_2338_169)'
          />
          <path
            opacity='0.5'
            d='M0 110.441L1.38216e-06 94.6314C15.6 73.5214 33.168 53.5813 57.228 38.3913C119.292 -0.828707 198 -0.558697 269.496 18.8613C306.876 29.0113 341.604 44.9314 377.1 58.6614C426.204 77.6614 478.776 104.661 534.096 108.331C577.608 111.181 619.176 98.9114 652.416 76.7714C690.54 51.3814 727.2 14.7714 776.772 3.77136C825.3 -7.01865 874.392 10.4614 919.728 28.0514C965.064 45.6414 1009.92 67.0514 1060.03 71.1015C1131.71 76.9515 1195.97 48.2214 1262.71 32.2614C1298.95 23.6014 1333.51 26.0914 1367.22 39.7614C1394.14 50.6515 1424.82 66.6915 1440 89.0015L1440 110.442L0 110.441Z'
            fill='url(#paint1_linear_2338_169)'
          />
          <path
            d='M0 110.441L4.92191e-07 104.811C179.916 51.4414 376.908 39.1214 570.996 67.8714C622.596 75.5114 672.072 87.9914 724.128 94.3315C794.928 102.961 859.104 82.0915 922.8 58.9314C993.516 33.2214 1063.2 15.2014 1141.44 20.4414C1245.28 27.4414 1348.39 66.1515 1440 105.252L1440 110.442L0 110.441Z'
            fill='url(#paint2_linear_2338_169)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_2338_169'
              x1='3.97708e-06'
              y1='64.9489'
              x2='1440'
              y2='64.949'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#000386' />
              <stop offset='1' stopColor='#00478D' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_2338_169'
              x1='4.80779e-06'
              y1='55.4467'
              x2='1440'
              y2='55.4469'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#000386' />
              <stop offset='1' stopColor='#00478D' />
            </linearGradient>
            <linearGradient
              id='paint2_linear_2338_169'
              x1='3.97376e-06'
              y1='64.9869'
              x2='1440'
              y2='64.987'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#000386' />
              <stop offset='1' stopColor='#00478D' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.footerMain}>
        <div className={footerTop}>
          <div className={footerLeft}>
            <Link href='/' title='To the Mainpage'>
              <img
                loading='lazy'
                decoding='async'
                draggable='false'
                src='/images/logos/full_logo_white.webp'
                alt='Logo of my Personal Website'
                height='75'
                width='500'
              />
            </Link>
            <div className='nwt--flex-n-n-col'>
              <strong>How to Reach out to me</strong>
              <ul className='nwt--ul-none nwt--flex-n-n-col'>
                <li className='nwt--flex-c-n-n'>
                  <EnvelopeIcon variant='solid' />
                  <a
                    href='mailto:hallo@nordwebtec.com'
                    className='nwt--anchor-under'
                  >
                    hallo@nordwebtec.com
                  </a>
                </li>
                <li className='nwt--flex-c-n-n'>
                  <LinkedInIcon />
                  <a
                    href='https://www.linkedin.com/in/stefan-lüllmann'
                    rel='noopener noreferrer'
                    target='_blank'
                    className='nwt--anchor-under'
                  >
                    LinkedIn: Stefan Lüllmann
                  </a>
                </li>
                <li className='nwt--flex-c-n-n'>
                  <GitHubIcon />
                  <a
                    href='https://github.com/OneDev49'
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
              <ul className='nwt--ul-none'>
                <li>
                  <Link href='/' className='nwt--anchor-under'>
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link href='/#projects' className='nwt--anchor-under'>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href='/about' className='nwt--anchor-under'>
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about#get-in-touch'
                    className='nwt--anchor-under'
                  >
                    Get In Touch
                  </Link>
                </li>
              </ul>
            </div>
            {/* <div>
              <strong>Articles</strong>
              <ul className='nwt--ul-none'>
                <li>
                  <Link href='/' className='nwt--anchor-under'>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href='/' className='nwt--anchor-under'>
                    Blog
                  </Link>
                </li>
              </ul>
            </div> */}
            <div>
              <strong>Other</strong>
              <ul className='nwt--ul-none'>
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
