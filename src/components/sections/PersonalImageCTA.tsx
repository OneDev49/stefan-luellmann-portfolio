'use client';

import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import styles from './PersonalImageCTA.module.scss';
import GradientButton from '@/components/ui/GradientButton';
import { useModal } from '@/context/ModalContext';
import AnglesRightIcon from '@/components/icons/ui/AnglesRightIcon';
import clsx from 'clsx';
import { siteData } from '@/config/siteData';
import WaveTransition from '../effects/WaveTransition';

interface CTASectionProps {
  heading: string;
  paragraph: string | React.ReactNode;
  getInTouchButton?: boolean;
  buttonChildren?: React.ReactNode;
  background?: boolean;
  backgroundWaves?: boolean;
}

export default function PersonalImageCTA({
  heading,
  paragraph,
  getInTouchButton = false,
  buttonChildren,
  background = false,
  backgroundWaves = false,
}: CTASectionProps) {
  const { openGetInTouch } = useModal();

  return (
    <section
      className={clsx(styles.wrapper, {
        [styles.background]: background === true,
      })}
    >
      {backgroundWaves && (
        <WaveTransition
          position='top'
          color='rgba(0, 28, 88, 0.5)'
          positionOffset='-50px'
          variant='outer'
        />
      )}

      <div className={styles.content}>
        <div className={styles.left}>
          <ImageSkeletonLoader
            loading='lazy'
            draggable='false'
            decoding='async'
            src={`https://utfs.io/a/qnr34aa1vn/${siteData.personalImage}`}
            alt='Hey, I am Stefan!'
            height={400}
            width={400}
          />
        </div>
        <div className={styles.right}>
          <h2 className='nwt--f-h2'>
            <span className='nwt--txt-gradient'>{heading}</span>
          </h2>
          <p>{paragraph}</p>
          <div className={styles.links}>
            {getInTouchButton && (
              <GradientButton
                as='button'
                type='button'
                variant='green'
                onClick={openGetInTouch}
              >
                Get In Touch
                <AnglesRightIcon />
              </GradientButton>
            )}
            {buttonChildren}
          </div>
        </div>
      </div>
      {backgroundWaves && (
        <WaveTransition
          position='bottom'
          color='rgba(0, 28, 88, 0.5)'
          positionOffset='-50px'
          variant='outer'
        />
      )}
    </section>
  );
}
