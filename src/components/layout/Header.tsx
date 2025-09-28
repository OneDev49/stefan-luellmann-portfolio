'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import Link from 'next/link';
import GradientButton from '../ui/GradientButton';
import CaretRightIcon from '../icons/ui/CaretRightIcon';
import Image from 'next/image';
import HamburgerIcon from '../icons/ui/HamburgerIcon';
import HeaderPhoneNav from './_components/HeaderPhoneNav';
import { useModal } from '@/context/ModalContext';

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

  const { openGetInTouch } = useModal();

  // General Header ClassNames
  const headerMainClassName = clsx(styles.headerMain, 'nwt--flex-c-n-n');
  const headerClassName = clsx(styles.header, {
    [styles.headerAtTop]: isAtTop,
  });
  const headerNavPhoneClassName = clsx(styles.navPhone, 'nwt--flex-c-n-n');

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
              <Image
                loading='eager'
                draggable='false'
                src='https://utfs.io/a/qnr34aa1vn/x81VdwhEWe9Yjt17UDWZWS01vBYf3yHtizhn8IV2UdGeQlP5'
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
                <Link href='/projects' className={styles.navLinkBtn}>
                  Projects
                </Link>
                <Link href='/case-studies' className={styles.navLinkBtn}>
                  Case Studies
                </Link>
              </div>
              <div className={styles.navRight}>
                <Link href='/about' className={styles.navLinkBtn}>
                  About
                </Link>
                <GradientButton
                  as='button'
                  variant='rainbow'
                  className={styles.navCTA}
                  position='card'
                  onClick={openGetInTouch}
                >
                  <span>Get In Touch</span>
                  <CaretRightIcon />
                </GradientButton>
              </div>
              <div className={headerNavPhoneClassName}>
                <button
                  className={styles.navButton}
                  type='button'
                  title='Open Mobile Navbar'
                  onClick={openPhoneNav}
                >
                  <HamburgerIcon
                    color='#fff'
                    className='nwt_header-sideButton-svg'
                  />
                </button>
                <GradientButton
                  as='button'
                  variant='rainbow'
                  className={styles.navCTA}
                  position='card'
                  onClick={openGetInTouch}
                >
                  <span>Get In Touch</span>
                  <CaretRightIcon />
                </GradientButton>
              </div>
            </nav>
          </div>
          {isPhoneNavOpen && (
            <HeaderPhoneNav
              closePhoneNav={closePhoneNav}
              isPhoneNavClosed={isPhoneNavClosed}
              openGetInTouch={openGetInTouch}
            />
          )}
        </div>
      </header>
    </>
  );
}
