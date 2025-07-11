import clsx from 'clsx';
import styles from './Header.module.scss';
import Link from 'next/link';

export default function HeaderSection() {
  const headerMainClassName = clsx(styles.headerMain, 'nwt--flex-c-n-n');

  const headerClassName = clsx(styles.header, styles.headerAtTop);

  return (
    <>
      <header className={headerClassName}>
        <div className={headerMainClassName}>
          <div className={styles.headerBackground}></div>
          <div className={styles.headerIcon}>
            <Link href='/' title='To the Mainpage'>
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
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
