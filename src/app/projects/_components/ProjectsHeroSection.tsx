'use client';
import useEmblaCarousel from 'embla-carousel-react';
import GradientButton from '@/components/ui/GradientButton';
import ChevronRightIcon from '@/components/icons/ui/ChevronRightIcon';
import { personalProjects } from '@/config/projects';
import styles from './ProjectsHeroSection.module.scss';
import ImageSkeletonLoader from '@/components/ui/ImageSkeletonLoader';
import AutoScroll from 'embla-carousel-auto-scroll';

const allImages = personalProjects.flatMap((project) =>
  project.images.map((image, index) => ({
    title: project.title,
    src: image,
    url: project.links.liveDemo,
    alt: `${project.title} Screenshot ${index + 1}`,
  }))
);

const loopedImages = [...allImages, ...allImages];

export default function ProjectHeroSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: 'start',
    },
    [
      AutoScroll({
        speed: 0.5,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      }),
    ]
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <h1 className='nwt--f-h1'>Project Showcase</h1>
          <h2 className='nwt--f-h3'>Full-Stack and Front-End Projects</h2>
        </div>
        <p>
          I develop a large variety of different projects, from Full-Stack
          E-Commerce Websites, to Front-End Projects. Here you can find all of
          them, both my personal Projects, and Projects I developed for clients.
        </p>
        <div className={styles.links}>
          <GradientButton href='#personal-projects' variant='orange'>
            <span>Personal Projects</span>
            <ChevronRightIcon />
          </GradientButton>
          <GradientButton href='#client-projects' variant='green'>
            <span>Client Projects</span>
            <ChevronRightIcon />
          </GradientButton>
        </div>
      </div>
      <div className={styles.carouselOuterWrapper}>
        <div className={styles.carouselWrapper} ref={emblaRef}>
          <div className={styles.carousel}>
            {loopedImages.map((image, index) => (
              <div className={styles.carouselItemWrapper} key={index}>
                <div className={styles.carouselItem}>
                  <a href={image.url}>
                    <ImageSkeletonLoader
                      loading='eager'
                      priority
                      src={`https://utfs.io/a/qnr34aa1vn/${image.src}`}
                      width={400}
                      height={200}
                      alt={image.alt}
                      className='w-full h-auto object-cover'
                    />
                    <div className={styles.anchorHover}>
                      <span>Visit</span>
                      <span>{image.title}</span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
