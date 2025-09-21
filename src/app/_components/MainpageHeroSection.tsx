import styles from './MainpageHeroSection.module.scss';
import GradientButton from '@/components/ui/GradientButton';
import MultiThinWaves from '@/components/effects/MultiThinWave';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';

export default function MainpageHeroSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sectionMultiThinWave}>
        <MultiThinWaves />
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div>
            <h1 className='nwt--f-h1'>Stefan Lüllmann</h1>
            <h2 className='nwt--f-h2'>Full-Stack Software Developer</h2>
          </div>
          <p>
            I build performant and scalable web applications with a focus on the
            Next.js, TypeScript, and Prisma ecosystem.
          </p>
          <div className={styles.links}>
            <GradientButton href='/projects'>
              <span>View my Work</span>
              <CaretRightIcon width={16} height={24} />
            </GradientButton>
            <GradientButton href='/case-studies' variant='green'>
              <span>Read my Case Studies</span>
              <CaretRightIcon width={16} height={24} />
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
