'use client';

import { useModal } from '@/context/ModalContext';
import { siteData } from '@/config/siteData';

import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import GradientButton from '@/components/ui/GradientButton';
import styles from './CTASection.module.scss';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import WaveTransition from '@/components/effects/WaveTransition';

export default function CTASection() {
  const { openGetInTouch } = useModal();

  return (
    <section className={styles.wrapper}>
      <WaveTransition
        position='top'
        color='rgba(1, 46, 143, 0.5)'
        positionOffset='-50px'
        variant='outer'
      />
      <div className={`${styles.contentWrapper} nwt--width`}>
        <div className={styles.image}>
          <ImageSkeletonLoader
            loading='lazy'
            decoding='async'
            draggable='false'
            src={`${siteData.uploadThingUrl}/x81VdwhEWe9YiVsuEM0mxJPz0TqguADyd2SlvBtYRebXojs9`}
            alt='Technologies I use for my Projects'
            height={300}
            width={530}
            sizes='(max-width: 768px) 100vw, 25vw'
          />
        </div>
        <div className={styles.content}>
          <h2 className='nwt--f-h2'>Get in Touch with me!</h2>
          <p>
            I am currently looking for a Full-Stack or Front-End Developer role.
            If my profile aligns with what you are looking for in a Developer,
            reach out to me and let us talk! I am always happy to have a chat.
          </p>
          <GradientButton
            as='button'
            type='button'
            onClick={openGetInTouch}
            variant='orange'
          >
            Get in Touch
            <CaretRightIcon />
          </GradientButton>
        </div>
      </div>
      <WaveTransition
        position='bottom'
        color='rgba(1, 46, 143, 0.5)'
        positionOffset='-38px'
        variant='outer'
        config={{
          height: 75,
        }}
      />
    </section>
  );
}
