import styles from './CTASection.module.scss';
import clsx from 'clsx';

interface CTASectionProps {
  heading: string;
  paragraphChildren: React.ReactNode;
  buttonChildren: React.ReactNode;
  pageAnchorName?: string;
}

export default function CTASection({
  heading,
  paragraphChildren,
  buttonChildren,
  pageAnchorName,
}: CTASectionProps) {
  const sectionWrapper = clsx(styles.wrapper, 'nwt--txt-center');

  const sectionRight = clsx(styles.right, 'nwt--flex-n-n-col');

  const sectionLinks = clsx(styles.links, 'nwt--flex-n-n-col');

  return (
    <section className={sectionWrapper}>
      {pageAnchorName && (
        <div id={pageAnchorName} className='nwt--invisible-anchor'></div>
      )}
      <div className='nwt--width nwt--flex-c-n-col'>
        <div className={styles.left}>
          <img
            loading='lazy'
            draggable='false'
            decoding='async'
            src='./images/professional_personal_image.webp'
            alt='Image of Stefan Lüllmann'
            height='400'
            width='400'
          />
        </div>
        <div className={sectionRight}>
          <h2 className='nwt--f-h2'>
            <span className='nwt--txt-gradient'>{heading}</span>
          </h2>
          <p>{paragraphChildren}</p>
          <div className={sectionLinks}>{buttonChildren}</div>
        </div>
      </div>
    </section>
  );
}
