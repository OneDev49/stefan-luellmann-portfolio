'use client';

import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import styles from './AboutCTASection.module.scss';
import GradientButton from '@/components/ui/GradientButton';
import { useModal } from '@/context/ModalContext';
import AnglesRightIcon from '@/components/icons/ui/AnglesRightIcon';

export default function AboutCTASection() {
  const { openGetInTouch } = useModal();

  return (
    <section className={styles.wrapper}>
      <div>
        <div className={styles.left}>
          <ImageSkeletonLoader
            loading='lazy'
            draggable='false'
            decoding='async'
            src='https://utfs.io/a/qnr34aa1vn/x81VdwhEWe9YNoamfXUJOoHBgmDrVu9kl6dW42XtInKGhaJT'
            alt='Hey, I am Stefan!'
            height={400}
            width={400}
          />
        </div>
        <div className={styles.right}>
          <h2 className='nwt--f-h2'>
            <span className='nwt--txt-gradient'>Let's Connect!</span>
          </h2>
          <p>
            <span>
              Thank you for taking the time to learn more about my background. I
              love to plan, design, develop and optimize Websites and
              Applications of all kinds.
            </span>
            <span>
              If you believe that my skills and mindset would be a great fit for
              your Team or Project, I'd be exited to Chat!
            </span>
          </p>
          <div className={styles.links}>
            <GradientButton
              as='button'
              type='button'
              variant='green'
              onClick={openGetInTouch}
            >
              <span>Get In Touch</span>
              <AnglesRightIcon />
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
