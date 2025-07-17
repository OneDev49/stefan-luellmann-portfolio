import Link from 'next/link';
import styles from './NotFound.module.scss';
import clsx from 'clsx';

export default function NotFound() {
  const wrapperClassName = clsx(styles.wrapper, 'nwt--width');

  return (
    <main>
      <div className={wrapperClassName}>
        <h1 className='nwt--f-h1'>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <div>
          <Link className='nwt--anchor-under' href='/'>
            Return to Homepage
          </Link>
          ,{' '}
          <Link className='nwt--anchor-under' href='/about'>
            Check out my Projects
          </Link>{' '}
          or{' '}
          <Link className='nwt--anchor-under' href='/about'>
            Learn more about me
          </Link>
          !
        </div>
      </div>
    </main>
  );
}
