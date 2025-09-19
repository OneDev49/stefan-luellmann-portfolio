import ChevronRightIcon from '@/components/icons/ui/ChevronRightIcon';
import GradientButton from '@/components/ui/GradientButton';
import Image from 'next/image';
import styles from './IntroductionSection.module.scss';
import clsx from 'clsx';

export default function IntroductionSection() {
  const wrapperClassName = clsx(styles.wrapper, 'nwt--width');

  return (
    <section className={wrapperClassName}>
      <div>
        <Image
          loading='lazy'
          decoding='async'
          src='https://utfs.io/a/qnr34aa1vn/x81VdwhEWe9YNoamfXUJOoHBgmDrVu9kl6dW42XtInKGhaJT'
          height={400}
          width={400}
          alt="Hey, I'm Stefan!"
        />
      </div>
      <div className='nwt--flex-n-n-col'>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>Building and Optimizing</span>
        </h2>
        <p>
          <span>
            Hello! I am Stefan, a Full-Stack Web Developer, and ths is my
            personal Website.
          </span>
          <span>
            I am a Web Developer with 5 years of professional experience. I
            worked with a variety of different technologies, but ultimately
            found my home inside the JavaScript Ecosystem, using technologies
            like NextJS, React, TypeScript and Prisma.
          </span>
          <span>
            In my time I worked with different NGOs and had the opportunity to
            run my own Web Development Agency.
          </span>
          <span>
            Now I am looking for a full-time position as a Web Developer.
          </span>
        </p>
        <div>
          <GradientButton href='/about'>
            Learn more about me
            <ChevronRightIcon />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
