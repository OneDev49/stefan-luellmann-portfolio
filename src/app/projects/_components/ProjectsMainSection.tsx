import { clientProjects, personalProjects } from '@/config/projects';
import styles from './ProjectsMainSection.module.scss';
import BigProjectCard from '@/components/ui/BigProjectCard';

export default function ProjectsMainSection() {
  return (
    <section className={styles.sectionWrapper}>
      {personalProjects.length > 0 && (
        <div className={styles.personalBackground}>
          <div className={styles.areaWrapper}>
            <div className={styles.areaHead}>
              <h2 className='nwt--f-h2'>Personal Projects</h2>
              <p>
                Optimized, scalable, maintainable projects built for skill
                growth and to demonstrate professional capabilities.
              </p>
            </div>
            <ul>
              {personalProjects.map((project, index) => (
                <li key={index}>
                  <BigProjectCard
                    project={project}
                    projectCategory='personal'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {clientProjects !== null && clientProjects.length > 0 && (
        <div className={styles.clientBackground}>
          <div className={styles.areaWrapper}>
            <div className={styles.areaHead}>
              <h2 className='nwt--f-h2'>Client Projects</h2>
              <p>
                Fast, accessible and responsive projects created for a diverse
                range of clients.
              </p>
            </div>
            <ul>
              {clientProjects.map((project, index) => (
                <li key={index}>
                  <BigProjectCard project={project} projectCategory='client' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
