'use client';

import { useState, useEffect, Component } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import Link from 'next/link';
import GradientButton from '../ui/buttons/GradientButton';
import CaretRightIcon from '../icons/ui/CaretRightIcon';
import AnglesRightIcon from '../icons/ui/AnglesRightIcon';

export default function HeaderSection() {
  const [isAtTop, setIsAtTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    // Cleanup Function to prevent memory leaks if section is removed.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState(false);
  const [isPhoneNavClosed, setIsPhoneNavClosed] = useState(false);

  const openPhoneNav = () => {
    setIsPhoneNavClosed(false);
    setIsPhoneNavOpen(true);
  };
  const closePhoneNav = () => {
    setIsPhoneNavClosed(true);
    setTimeout(() => {
      setIsPhoneNavOpen(false);
      setIsPhoneNavClosed(false);
    }, 400);
  };

  // General Header ClassNames
  const headerMainClassName = clsx(styles.headerMain, 'nwt--flex-c-n-n');
  const headerClassName = clsx(styles.header, {
    [styles.headerAtTop]: isAtTop,
  });
  const headerNavPhoneClassName = clsx(styles.navPhone, 'nwt--flex-c-n-n');

  // Specific PhoneNavClassNames
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
    <>
      <header
        id='nwt-header'
        className={headerClassName}
        data-nwt-bg={isAtTop ? 'dark' : 'light'}
      >
        <div className={headerMainClassName}>
          <div className={styles.headerBackground}></div>
          <div className={styles.headerIcon}>
            <Link
              href='/'
              title='Stefan Lüllmann - Full-Stack Software Developer'
            >
              <img
                loading='eager'
                draggable='false'
                src='/images/logos/full_logo_white.webp'
                alt='Logo of my Personal Website'
                height='71'
                width='250'
              />
            </Link>
          </div>
          <div className={styles.navParent}>
            <nav className={styles.nav}>
              <div className={styles.navLeft}>
                <Link href='/' className={styles.navLinkBtn}>
                  Homepage
                </Link>
              </div>
              <div className={styles.navRight}>
                <Link href='/about' className={styles.navLinkBtn}>
                  About
                </Link>
                <GradientButton
                  href='/about'
                  variant='rainbow'
                  className={styles.navCTA}
                  children={
                    <>
                      <span>Get In Touch</span>
                      <CaretRightIcon />
                    </>
                  }
                />
              </div>
              <div className={headerNavPhoneClassName} onClick={openPhoneNav}>
                <button type='button' title='Open Mobile Navbar'>
                  <svg
                    className='nwt_header-sideButton-svg'
                    xmlns='http://www.w3.org/2000/svg'
                    width='17'
                    height='17'
                    viewBox='0 0 448 512'
                  >
                    <path
                      fill='#fff'
                      d='M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z'
                    />
                  </svg>
                </button>
                <GradientButton
                  href='/about'
                  variant='rainbow'
                  className={styles.navCTA}
                  children={
                    <>
                      <span>Get In Touch</span>
                      <CaretRightIcon />
                    </>
                  }
                />
              </div>
            </nav>
          </div>

          {isPhoneNavOpen && (
            <div className={styles.phoneNavParent}>
              <div className={overlayClassName} onClick={closePhoneNav}></div>
              <svg
                className={phoneNavCloseBtnClassName}
                width='30'
                height='30'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 384 512'
                onClick={closePhoneNav}
              >
                <path
                  fill='#fff'
                  d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z'
                />
              </svg>
              <nav className={phoneNavClassName}>
                <div className={styles.phoneNavHead}>
                  <Link
                    href='/'
                    title='Stefan Lüllmann - Full-Stack Software Developer'
                    onClick={closePhoneNav}
                  >
                    <img
                      loading='lazy'
                      decoding='async'
                      draggable='false'
                      src='/images/logos/full_logo_black.webp'
                      alt='Logo of my Personal Website'
                      height='106'
                      width='379'
                    />
                  </Link>
                </div>
                <div className={styles.phoneNavBody}>
                  <Link
                    href='/'
                    className={styles.sideNavHome}
                    onClick={closePhoneNav}
                  >
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
                            <span>
                              Learn more about me, my Skills and my Story.
                            </span>
                          </div>
                          <AnglesRightIcon height={15} width={15} />
                        </Link>
                        <Link
                          href='/about#get-in-touch'
                          className='nwt--anchor-img nwt--flex-c-n-n'
                          onClick={closePhoneNav}
                        >
                          <div className='nwt--flex-n-n-col'>
                            <span
                              className={`${styles.sideNavLIHeading} nwt--flex-c-n-n`}
                            >
                              Get In Touch
                            </span>
                            <span>
                              Download my CV or message me directly via GitHub
                              or LinkedIn.
                            </span>
                          </div>
                          <AnglesRightIcon height={15} width={15} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <hr />
                  <div className={styles.sideNavContent}>
                    <div className={`${styles.sideNavHeader} nwt--flex-c-n-n`}>
                      <span className='nwt--txt-gradient'>
                        More About Stefan
                      </span>
                    </div>
                    <ul className='nwt--ul-none'>
                      <li className={styles.sideNavLI}>
                        <a
                          href='https://github.com/OneDev49'
                          className='nwt--anchor-img nwt--flex-c-n-n'
                          onClick={closePhoneNav}
                        >
                          <div className='nwt--flex-n-n-col'>
                            My GitHub Page
                          </div>
                          <AnglesRightIcon height={15} width={15} />
                        </a>
                      </li>
                      <li className={styles.sideNavLI}>
                        <a
                          href='https://github.com/in/stefan-lüllmann'
                          className='nwt--anchor-img nwt--flex-c-n-n'
                          onClick={closePhoneNav}
                        >
                          <div className='nwt--flex-n-n-col'>
                            My LinkedIn Page
                          </div>
                          <AnglesRightIcon height={15} width={15} />
                        </a>
                      </li>
                      <li className={styles.sideNavLI}>
                        <Link
                          href='/'
                          className='nwt--anchor-img nwt--flex-c-n-n'
                          onClick={closePhoneNav}
                        >
                          <div className='nwt--flex-n-n-col'>Legal Notice</div>
                          <AnglesRightIcon height={15} width={15} />
                        </Link>
                      </li>
                      <li className={styles.sideNavLI}>
                        <Link
                          href='/'
                          className='nwt--anchor-img nwt--flex-c-n-n'
                          onClick={closePhoneNav}
                        >
                          <div className='nwt--flex-n-n-col'>
                            Privacy Policy
                          </div>
                          <AnglesRightIcon height={15} width={15} />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
