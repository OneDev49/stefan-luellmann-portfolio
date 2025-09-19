import GitHubIcon from '@/components/icons/brands/GitHubIcon';
import GradientButton from '@/components/ui/GradientButton';
import { siteData } from '@/config/siteData';
import Image from 'next/image';
import styles from './HeaderModal.module.scss';
import GlobeIcon from '@/components/icons/glyphs/GlobeIcon';
import Link from 'next/link';
import LinkedInIcon from '@/components/icons/brands/LinkedInIcon';
import CloseIcon from '@/components/icons/ui/CloseIcon';

interface HeaderModalProps {
  closeGetInTouch: () => void;
}

export default function HeaderModal({ closeGetInTouch }: HeaderModalProps) {
  return (
    <div className={styles.headerModal} role='dialog' aria-modal='true'>
      <div className={styles.overlay} onClick={closeGetInTouch}></div>
      <div className={styles.container}>
        <div className={styles.containerTop}>
          <div className={styles.containerImage}>
            <Image
              src='https://utfs.io/a/qnr34aa1vn/x81VdwhEWe9YNoamfXUJOoHBgmDrVu9kl6dW42XtInKGhaJT'
              height={600}
              width={600}
              alt="Hey, I'm Stefan!"
            />
          </div>
          <div className={styles.containerTopContent}>
            <div className={styles.containerTopInner}>
              <h2 className='nwt--f-h3'>Get In Touch!</h2>
              <div
                className={styles.modalCloseBtn}
                onClick={closeGetInTouch}
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
                  href={`mailto:${siteData.email}`}
                  variant='blue'
                  position='card'
                >
                  {siteData.email}
                </GradientButton>
                <GradientButton
                  as='a'
                  rel='noopener noreferrer'
                  href={`tel:${siteData.phone}`}
                  variant='blue'
                  position='card'
                >
                  {siteData.phone}
                </GradientButton>
              </div>
              <GradientButton
                as='a'
                href='https://utfs.io/a/qnr34aa1vn/x81VdwhEWe9YtE55xSLnupRKAS2XigqF3JvI7VjwM5WrNfhO'
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
              <Link
                className='nwt--anchor-under'
                href='/'
                onClick={closeGetInTouch}
              >
                stefan-luellmann.com
              </Link>
            </li>
            <li>
              <div>
                <GitHubIcon />
                GitHub:
              </div>
              <a
                href={`${siteData.social.github}`}
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
                  href={`${siteData.social.linkedin}`}
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
  );
}
