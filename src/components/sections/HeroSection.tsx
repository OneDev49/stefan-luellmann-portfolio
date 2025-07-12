import styles from './HeroSection.module.scss';
import GradientButton from '@/components/ui/buttons/GradientButton';
import clsx from 'clsx';
import MultiThinWaves from '../effects/MultiThinWave';
import { ComponentProps } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
}

interface HeroProps {
  heading?: string;
  subheading?: string;
  multiThinWave?: 0 | 1;
  paragraph?: string;
  gradientButton: SingleButtonProps[];
  variant?: 'singleColumn' | 'doubleColumn';
  doubleColumnImage?: ImageProps;
}

type SingleButtonProps = ComponentProps<typeof GradientButton>;

export default function HeroSection({
  heading,
  subheading,
  multiThinWave = 0,
  paragraph,
  gradientButton,
  variant = 'singleColumn',
  doubleColumnImage,
}: HeroProps) {
  const contentClassNames = clsx(styles.content, 'nwt--flex-c-c-n');

  if (variant === 'singleColumn') {
    const contentInnerClassName = clsx(
      styles.contentInner,
      'nwt--flex-c-n-col',
      'nwt--txt-center'
    );
    return (
      <section className={styles.wrapper} data-type='single'>
        {multiThinWave === 1 && (
          <div className={styles.sectionMultiThinWave}>
            <MultiThinWaves />
          </div>
        )}

        <div className={`${contentClassNames}`}>
          <div className={`${contentInnerClassName}`}>
            <div>
              <h1 className='nwt--f-h1'>{heading}</h1>
              <h2 className='nwt--f-h2'>{subheading}</h2>
            </div>
            <p>{paragraph}</p>
            <div className='nwt--flex-c-n-col'>
              {gradientButton.map((button, index) => (
                <GradientButton key={index} {...button} />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'doubleColumn') {
    const contentInnerClassName = clsx(styles.contentInner, 'nwt--flex-c-c-n');

    const contentDoubleLeftClassName = clsx(
      styles.doubleLeft,
      'nwt--flex-c-n-col',
      'nwt--txt-center'
    );
    return (
      <section className={styles.wrapper} data-type='double'>
        {multiThinWave === 1 && (
          <div className={styles.sectionMultiThinWave}>
            <MultiThinWaves />
          </div>
        )}

        <div className={contentClassNames}>
          <div className={contentInnerClassName}>
            <div className={contentDoubleLeftClassName}>
              <div>
                <h1 className='nwt--f-h1'>{heading}</h1>
                <h2 className='nwt--f-h3'>{subheading}</h2>
              </div>
              {paragraph}
              <div className='nwt--flex-c-n-col'>
                {gradientButton.map((button, index) => (
                  <GradientButton key={index} {...button} />
                ))}
              </div>
            </div>
            <div className={styles.doubleRight}>
              {doubleColumnImage && (
                <img
                  loading='eager'
                  draggable='false'
                  src={doubleColumnImage.src}
                  alt={doubleColumnImage.alt}
                  height={doubleColumnImage.height}
                  width={doubleColumnImage.width}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
