import clsx from 'clsx';
import styles from './ProjectCardLong.module.scss';
import GradientButton, {
  GradientButtonProps,
} from '@/components/ui/buttons/gradientbutton/GradientButton';
import { TechIcon, TechnologyName } from '@/components/icons/TechIconMap';
import React from 'react';

export interface TechnologyInfo {
  name: TechnologyName;
  displayName: string;
  width?: number;
  height?: number;
}

export interface ProjectCardLongProps {
  children: React.ReactNode;
  imageURL: string;
  imageAlt: string;
  gradientButtonLiveDemo: GradientButtonProps;
  gradientButtonBlogArticle: GradientButtonProps;
  gradientButtonGitHub: GradientButtonProps;
  paragraph: string;
  technologies: TechnologyInfo[];
}

export default function ProjectCardLong({
  imageURL,
  imageAlt,
  children,
  paragraph,
  gradientButtonLiveDemo,
  gradientButtonBlogArticle,
  gradientButtonGitHub,
  technologies,
}: ProjectCardLongProps) {
  const textContainerClassNames = clsx(
    styles.projectCardContent,
    'nwt--flex-n-n-col'
  );

  const linkBlockClassNames = clsx(
    styles.projectCardLinks,
    'nwt--flex-n-n-col'
  );

  const techBlockClassNames = clsx(styles.projectCardTech, 'nwt--ul-none');

  return (
    <div className={styles.projectCard}>
      <div className={`${textContainerClassNames}`}>
        <h3 className='nwt--f-h3 nwt--flex-n-n-col'>{children}</h3>
      </div>

      <div className={styles.projectCardImage}>
        <img
          loading='lazy'
          src={imageURL}
          alt={imageAlt}
          width='800'
          height='200'
        />
      </div>

      <div className={`${textContainerClassNames}`}>
        <div className={`${linkBlockClassNames}`}>
          <GradientButton {...gradientButtonLiveDemo} />
          <div className=''>
            <GradientButton {...gradientButtonBlogArticle} />
            <GradientButton {...gradientButtonGitHub} />
          </div>
        </div>
        <div>
          <strong>Description of the Project</strong>
          <p>{paragraph}</p>
        </div>
        <div>
          <strong>Technologies Used:</strong>
          <ul className={`${techBlockClassNames}`}>
            {technologies.map((tech, index) => (
              <li
                className='nwt--flex-c-n-n'
                title={`${tech.displayName} was used for this Project`}
                key={index}
              >
                <TechIcon
                  name={tech.name}
                  height={tech.height}
                  width={tech.width}
                />
                {tech.displayName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
