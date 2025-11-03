import { personalProjects } from '@/config/projects';

import SmallProjectCard from '@/components/ui/SmallProjectCard';
import styles from './ProjectShowcaseSection.module.scss';

export default function ProjectShowcaseSection() {
  return (
    <section className={`${styles.wrapper} nwt--width`}>
      <div className={styles.header}>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>Project Showcase</span>
        </h2>
        <p>
          High scale Projects with great performance, design and architecture.
          Discover what I have been working on, and read up on the Case Studies
          of my Projects as well!
        </p>
      </div>
      <ul className={styles.projectList}>
        {personalProjects.length > 0 &&
          personalProjects.map((project, index) => (
            <li key={index}>
              <SmallProjectCard project={project} />
            </li>
          ))}
      </ul>
    </section>
  );
}
