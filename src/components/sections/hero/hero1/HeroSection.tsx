import styles from './HeroSection.module.scss';
import GradientButton, {
  GradientButtonProps,
} from '@/components/ui/buttons/gradientbutton/GradientButton';
import clsx from 'clsx';

interface HeroProps {
  heading?: string;
  subheading?: string;
  paragraph?: string;
  gradientButton: GradientButtonProps[];
}

export default function HeroSection({
  heading,
  subheading,
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
      <div className={`${contentClassNames}`}>
        <div className={`${contentInnerClassName}`}>
          <div>
            <h1 className='nwt--f-h1'>{heading}</h1>
            <h2 className='nwt--f-h2'>{subheading}</h2>
          </div>
          <p>{paragraph}</p>
          <div className='nwt--flex-c-n-n'>
            {gradientButton.map((button, index) => (
              <GradientButton
                key={index}
                href={button.href}
                children={button.children}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
