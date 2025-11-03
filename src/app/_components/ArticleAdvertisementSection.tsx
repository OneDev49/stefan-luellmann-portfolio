import { siteData } from '@/config/siteData';

import Link from 'next/link';
import styles from './ArticleAdvertisementSection.module.scss';
import Image from 'next/image';

export default function ArticleAdvertisementSection() {
  return (
    <section className={styles.wrapper}>
      <div>
        <div className={styles.background}></div>
        <Image
          loading='lazy'
          decoding='async'
          draggable='false'
          src={`${siteData.uploadThingUrl}/x81VdwhEWe9YIbfJ5lEl9J5WbN6XohyduFKaOCUP3BDAsHkp`}
          alt='Areas I write Articles in'
          height={360}
          width={450}
          sizes='25vw'
        />
      </div>
      <div className={styles.content}>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>
            Teaching, Explaining and Showcasing
          </span>
        </h2>
        <p>
          Writing about my Projects, the technologies I use and the solutions I
          have found to problems is what makes me happy. Especially if my
          articles help others with their problems.
        </p>
        <p>
          Check out the{' '}
          <Link className='nwt--anchor-under' href='/case-studies'>
            Case Studies of my Projects
          </Link>{' '}
          to read up on my Projects, solutions to problems I faced or to find
          out more about the technologies used in them!
        </p>
      </div>
    </section>
  );
}
