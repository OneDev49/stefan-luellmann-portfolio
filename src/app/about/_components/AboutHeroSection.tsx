'use client';

import { personalData, siteData } from '@/config/siteData';
import { useModal } from '@/context/ModalContext';

import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';
import styles from './AboutHeroSection.module.scss';
import GradientButton from '@/components/ui/GradientButton';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import BlobOne from './background/BlobOne';
import BlobTwo from './background/BlobTwo';

export default function AboutHeroSection() {
  const { openGetInTouch } = useModal();

  return (
    <section className={styles.wrapper}>
      <div className={styles.background}>
        <BlobOne className={styles.svgOne} />
        <BlobTwo className={styles.svgTwo} />
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.InnerLeft}>
            <div>
              <h1 className='nwt--f-h1'>About Stefan Lüllmann</h1>
              <h2 className='nwt--f-h3'>
                From Agency Founder to Full-Stack Developer
              </h2>
            </div>
            <p>
              Hello! I&apos;m a software developer with a passion for building
              elegant, functional and highly performant digital experiences. My
              journey in tech has been quite a unique one, and this page tells a
              bit more about that story.
            </p>
            <div className={styles.InnerBtns}>
              <GradientButton href='/projects' animation='all'>
                <span>View My Work</span>
                <CaretRightIcon width={16} height={24} />
              </GradientButton>
              <GradientButton
                as='button'
                type='button'
                onClick={openGetInTouch}
                animation='hover'
                variant='blue'
              >
                <span>Get In Touch</span>
                <CaretRightIcon width={16} height={24} />
              </GradientButton>
            </div>
          </div>
          <div className={styles.InnerRight}>
            <ImageSkeletonLoader
              loading='eager'
              priority={true}
              draggable='false'
              src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
              alt="Hey, I'm Stefan!"
              height={400}
              width={400}
              sizes='25vw'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
