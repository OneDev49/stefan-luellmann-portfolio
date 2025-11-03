import { personalData, siteData } from '@/config/siteData';

import AnglesRightIcon from '@/components/icons/ui/AnglesRightIcon';
import Link from 'next/link';
import styles from './HeaderPhoneNav.module.scss';
import clsx from 'clsx';
import CloseIcon from '@/components/icons/ui/CloseIcon';
import Image from 'next/image';
import GradientButton from '@/components/ui/GradientButton';

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
  const overlayClassName = clsx(styles.overlay, {
    [styles.closing]: isPhoneNavClosed,
  });
  const phoneNavClassName = clsx(styles.phoneNav, {
    [styles.closing]: isPhoneNavClosed,
  });
  const phoneNavCloseBtnClassName = clsx(styles.closeBtn, {
    [styles.closing]: isPhoneNavClosed,
  });

  return (
    <div className={styles.phoneNavParent}>
      <div className={overlayClassName} onClick={closePhoneNav}></div>
      <div className={phoneNavCloseBtnClassName} onClick={closePhoneNav}>
        <CloseIcon height={30} width={30} />
      </div>
      <nav className={phoneNavClassName}>
        <div className={styles.phoneNavHead}>
          <Link
            href='/'
            title='Stefan Lüllmann - Full-Stack Software Developer'
            onClick={closePhoneNav}
          >
            <Image
              decoding='async'
              draggable='false'
              src={`${siteData.uploadThingUrl}/x81VdwhEWe9Yjt17UDWZWS01vBYf3yHtizhn8IV2UdGeQlP5`}
              alt='Logo of my Personal Website'
              height={106}
              width={379}
              sizes='25vw'
            />
          </Link>
          <GradientButton
            as='button'
            variant='rainbow'
            position='card'
            onClick={() => {
              closePhoneNav();
              openGetInTouch();
            }}
          >
            Get In Touch
          </GradientButton>
        </div>
        <div className={styles.phoneNavBody}>
          <Link href='/' className={styles.sideNavHome} onClick={closePhoneNav}>
            HomePage
          </Link>
          <hr />
          <div className={styles.sideNavContent}>
            <div className={`${styles.sideNavHeader} nwt--flex-c-n-n`}>
              <span className='nwt--txt-gradient'>General</span>
            </div>
            <ul className='nwt--ul-none'>
              <li className={styles.sideNavLI}>
                <Link
                  href='/projects'
                  className='nwt--anchor-img nwt--flex-c-n-n'
                  onClick={closePhoneNav}
                >
                  <div className='nwt--flex-n-n-col'>
                    <span
                      className={`${styles.sideNavLIHeading} nwt--flex-c-n-n`}
                    >
                      Portfolio and Projects
                    </span>
                    <span>My Portfolio and my Projects that I work on.</span>
                  </div>
                  <AnglesRightIcon height={15} width={15} />
                </Link>
              </li>
              <li className={styles.sideNavLI}>
                <Link
                  href='/case-studies'
                  className='nwt--anchor-img nwt--flex-c-n-n'
                  onClick={closePhoneNav}
                >
                  <div className='nwt--flex-n-n-col'>
                    <span
                      className={`${styles.sideNavLIHeading} nwt--flex-c-n-n`}
                    >
                      Case Studies
                    </span>
                    <span>Case Studies on all of my Projects.</span>
                  </div>
                  <AnglesRightIcon height={15} width={15} />
                </Link>
              </li>
              <li className={styles.sideNavLI}>
                <Link
                  href='/about'
                  className='nwt--anchor-img nwt--flex-c-n-n'
                  onClick={closePhoneNav}
                >
                  <div className='nwt--flex-n-n-col'>
                    <span
                      className={`${styles.sideNavLIHeading} nwt--flex-c-n-n`}
                    >
                      About me
                    </span>
                    <span>Learn more about me, my Skills and my Story.</span>
                  </div>
                  <AnglesRightIcon height={15} width={15} />
                </Link>
              </li>
            </ul>
          </div>
          <hr />
          <div className={styles.sideNavContent}>
            <div className={`${styles.sideNavHeader} nwt--flex-c-n-n`}>
              <span className='nwt--txt-gradient'>More About Stefan</span>
            </div>
            <ul className='nwt--ul-none'>
              <li className={styles.sideNavLI}>
                <a
                  href={`${personalData.social.github}`}
                  className='nwt--anchor-img nwt--flex-c-n-n'
                  rel='noopener noreferrer'
                  target='_blank'
                  onClick={closePhoneNav}
                >
                  <div className='nwt--flex-n-n-col'>My GitHub Page</div>
                  <AnglesRightIcon height={15} width={15} />
                </a>
              </li>
              <li className={styles.sideNavLI}>
                <a
                  href={`${personalData.social.linkedin}`}
                  className='nwt--anchor-img nwt--flex-c-n-n'
                  rel='noopener noreferrer'
                  target='_blank'
                  onClick={closePhoneNav}
                >
                  <div className='nwt--flex-n-n-col'>My LinkedIn Page</div>
                  <AnglesRightIcon height={15} width={15} />
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className={styles.sideNavContent}>
            <div className={`${styles.sideNavHeader} nwt--flex-c-n-n`}>
              <span className='nwt--txt-gradient'>Legal and More</span>
            </div>
            <ul className='nwt--ul-none'>
              <li className={styles.sideNavLI}>
                <Link
                  href='/impressum'
                  className='nwt--anchor-img nwt--flex-c-n-n'
                  onClick={closePhoneNav}
                >
                  <div className='nwt--flex-n-n-col'>Legal Notice</div>
                  <AnglesRightIcon height={15} width={15} />
                </Link>
              </li>
              <li className={styles.sideNavLI}>
                <Link
                  href='/datenschutz'
                  className='nwt--anchor-img nwt--flex-c-n-n'
                  onClick={closePhoneNav}
                >
                  <div className='nwt--flex-n-n-col'>Privacy Policy</div>
                  <AnglesRightIcon height={15} width={15} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
