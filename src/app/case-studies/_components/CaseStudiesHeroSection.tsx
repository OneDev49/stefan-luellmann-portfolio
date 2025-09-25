import BackgroundBlob from './background/BackgroundBlob';
import BackgroundShapeOne from './background/BackgroundShapeOne';
import BackgroundShapeTwo from './background/BackgroundShapeTwo';
import styles from './CaseStudiesHeroSection.module.scss';

export default function CaseStudiesHeroSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.background}>
        <BackgroundBlob className={styles.blobOne} />
        <BackgroundShapeOne className={styles.shapeOne} />
        <BackgroundShapeTwo className={styles.shapeTwo} />
      </div>
      <div className={styles.content}>
        <strong>Detailed, Precise, Extensive</strong>
        <h1 className='nwt--f-h1'>Case Studies for each Project</h1>
        <p>
          I write Case Studies for all my Projects, both Personal and Client
          Projects.
        </p>
      </div>
    </section>
  );
}
