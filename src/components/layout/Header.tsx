'use client';

import { useState, useEffect, Component } from 'react';
import clsx from 'clsx';
import styles from './Header.module.scss';
import Link from 'next/link';
import GradientButton from '../ui/buttons/GradientButton';

export default function HeaderSection() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup Function to prevent memory leaks if section is removed.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerMainClassName = clsx(styles.headerMain, 'nwt--flex-c-n-n');
  const headerClassName = clsx(styles.header, {
    [styles.headerAtTop]: isAtTop,
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
                src='./images/logos/full_logo_white.webp'
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
                <Link href='/blog' className={styles.navLinkBtn}>
                  Blog
                </Link>
                <Link href='/about' className={styles.navLinkBtn}>
                  About
                </Link>
                <GradientButton
                  href='/about'
                  variant='rainbow'
                  children={<span>Get In Touch</span>}
                />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
