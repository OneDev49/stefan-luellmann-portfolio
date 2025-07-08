import GradientButton from '@/components/ui/buttons/GradientButton';
import styles from './CTASection.module.scss';
import clsx from 'clsx';
import LinkedInIcon from '@/components/icons/brands/LinkedInIcon';
import GitHubIcon from '@/components/icons/brands/GitHubIcon';

export default function CTASection() {
  const sectionWrapper = clsx(styles.wrapper, 'nwt--txt-center');

  const sectionRight = clsx(styles.right, 'nwt--flex-n-n-col');

  const sectionLinks = clsx(styles.links, 'nwt--flex-n-n-col');

  return (
    <section className={sectionWrapper}>
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
            <span className='nwt--txt-gradient'>Let's Connect</span>
          </h2>
          <p>
            <span>
              I am currently looking for work as a Full-Stack Developer.
            </span>
            <span>
              If my work and skills align with what you're looking for, I'd be
              exited to hear from you.
            </span>
          </p>
          <div className={sectionLinks}>
            <GradientButton
              href='mailto:hallo@nordwebtec.com'
              variant='orange'
              children={
                <>
                  <span>hallo@nordwebtec.com</span>
                </>
              }
            />
            <div>
              <GradientButton
                href='https://www.linkedin.com/in/stefan-lüllmann'
                rel='noopener noreferrer'
                target='_blank'
                children={
                  <>
                    <LinkedInIcon />
                    <span>Stefan Lüllmann on LinkedIn</span>
                  </>
                }
              />
              <GradientButton
                href='https://github.com/OneDev49'
                rel='noopener noreferrer'
                target='_blank'
                children={
                  <>
                    <GitHubIcon />
                    <span>OneDev49 on GitHub</span>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
