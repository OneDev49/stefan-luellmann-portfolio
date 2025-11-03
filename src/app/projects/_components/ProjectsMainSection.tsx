import { clientProjects, personalProjects } from '@/config/projects';

import styles from './ProjectsMainSection.module.scss';
import BigProjectCard from '@/components/ui/BigProjectCard';
import WaveTransition from '@/components/effects/WaveTransition';

export default function ProjectsMainSection() {
  return (
    <section className={styles.sectionWrapper}>
      <WaveTransition
        position='top'
        color='rgba(0, 18, 91, 0.4)'
        positionOffset='-50px'
        variant='outer'
      />
      {personalProjects.length > 0 && (
        <div className={styles.personalBackground}>
          <div id='personal-projects' className={styles.areaWrapper}>
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
      <WaveTransition
        position='bottom'
        color='rgba(0, 18, 91, 0.4)'
        positionOffset='-50px'
        variant='outer'
      />
      {clientProjects !== null && clientProjects.length > 0 && (
        <div className={styles.clientBackground}>
          <div id='client-projects' className={styles.areaWrapper}>
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
