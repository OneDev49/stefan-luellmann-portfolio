import styles from './HeroSection.module.scss';
import GradientButton from '@/components/ui/buttons/GradientButton';
import clsx from 'clsx';
import MultiThinWaves from '../effects/MultiThinWave';
import { ComponentProps } from 'react';

interface HeroProps {
  heading?: string;
  subheading?: string;
  multiThinWave?: 0 | 1;
  paragraph?: string;
  gradientButton: SingleButtonProps[];
}

type SingleButtonProps = ComponentProps<typeof GradientButton>;

export default function HeroSection({
  heading,
  subheading,
  multiThinWave = 0,
  paragraph,
  gradientButton,
}: HeroProps) {
  const contentClassNames = clsx(
    styles.content,
    'nwt--flex-c-c-n',
    'nwt--txt-center'
  );
  const contentInnerClassName = clsx(
    styles.contentInner,
    'nwt--flex-c-n-col',
    'nwt--txt-center'
  );

  return (
    <section className={styles.wrapper}>
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
          <div className='nwt--flex-c-n-n'>
            {gradientButton.map((button, index) => (
              <GradientButton key={index} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
