'use client';

import { useEffect, useState } from 'react';
import { personalData, siteData } from '@/config/siteData';

import GitHubIcon from '@/components/icons/brands/GitHubIcon';
import GradientButton from '@/components/ui/GradientButton';
import styles from './GetInTouchModal.module.scss';
import GlobeIcon from '@/components/icons/glyphs/GlobeIcon';
import Link from 'next/link';
import LinkedInIcon from '@/components/icons/brands/LinkedInIcon';
import CloseIcon from '@/components/icons/ui/CloseIcon';
import ImageSkeletonLoader from './ImageSkeletonLoader';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_MS = 300;

export default function GetInTouchModal({
  isOpen,
  onClose,
}: GetInTouchModalProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    let timerMount: ReturnType<typeof setTimeout> | null = null;
    let timerUnmount: ReturnType<typeof setTimeout> | null = null;

    if (isOpen) {
      setIsMounted(true);
      timerMount = setTimeout(() => setIsVisible(true), 20);
    } else {
      setIsVisible(false);
      timerUnmount = setTimeout(() => setIsMounted(false), ANIMATION_MS);
    }

    return () => {
      if (timerMount) clearTimeout(timerMount);
      if (timerUnmount) clearTimeout(timerUnmount);
    };
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <div className={styles.modalWrapper} aria-hidden={!isVisible}>
      <div
        className={`${styles.headerModal} ${
          isVisible ? styles.open : styles.closed
        }`}
        role='dialog'
        aria-modal='true'
      >
        <div className={styles.overlay} onClick={onClose}></div>
        <div className={styles.container}>
          <div className={styles.containerTop}>
            <div className={styles.containerImage}>
              <ImageSkeletonLoader
                draggable={false}
                src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
                height={600}
                width={600}
                alt="Hey, I'm Stefan!"
                sizes='10vw'
              />
            </div>
            <div className={styles.containerTopContent}>
              <div className={styles.containerTopInner}>
                <h2 className='nwt--f-h3'>Get In Touch!</h2>
                <div
                  className={styles.modalCloseBtn}
                  onClick={onClose}
                  title="Close the 'Get In Touch' Window"
                  aria-label="Close the 'Get in Touch' Window"
                >
                  <CloseIcon height={30} width={30} />
                </div>
              </div>
              <p>Always available and open for a talk!</p>
            </div>
          </div>
          <div className={`${styles.containerBottom}`}>
            <div>
              <p>
                Reach out to me via <strong>E-Mail</strong>,{' '}
                <strong>Phone</strong> or through other means!
              </p>
              <div className={`${styles.containerBtns}`}>
                <div>
                  <GradientButton
                    as='a'
                    rel='noopener noreferrer'
                    href={`mailto:${personalData.email}`}
                    variant='blue'
                    position='card'
                  >
                    {personalData.email}
                  </GradientButton>
                  <GradientButton
                    as='a'
                    rel='noopener noreferrer'
                    href={`tel:${personalData.phone}`}
                    variant='blue'
                    position='card'
                  >
                    {personalData.phone}
                  </GradientButton>
                </div>
                <GradientButton
                  as='a'
                  href='/files/Stefan_Luellmann_CV_16.09.2025.pdf'
                  variant='green'
                  download
                  rel='noopener noreferrer'
                  target='_blank'
                  position='card'
                >
                  Download my CV
                </GradientButton>
              </div>
            </div>
            <hr />
            <ul className='nwt--ul-none'>
              <li>
                <div>
                  <GlobeIcon />
                  My Website:
                </div>
                <Link className='nwt--anchor-under' href='/' onClick={onClose}>
                  stefan-luellmann.com
                </Link>
              </li>
              <li>
                <div>
                  <GitHubIcon />
                  GitHub:
                </div>
                <a
                  href={`${personalData.social.github}`}
                  className='nwt--anchor-under'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  github.com/OneDev49
                </a>
              </li>
              <li>
                <div>
                  <LinkedInIcon />
                  LinkedIn:
                </div>
                <span>
                  <a
                    href={`${personalData.social.linkedin}`}
                    className='nwt--anchor-under'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    linkedin.com/in/stefan-lüllmann
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
