import { clientProjects, personalProjects } from '@/config/projects';

import styles from './CaseStudiesMainSection.module.scss';
import TechnologyContainer from '@/components/ui/TechnologyContainer';
import GradientButton from '@/components/ui/GradientButton';
import CaretRightIcon from '@/components/icons/ui/CaretRightIcon';

const allProjects = [...personalProjects, ...clientProjects];

export default function CaseStudiesMainSection() {
  return (
    <section className={styles.wrapper}>
      {allProjects && (
        <ul className={styles.gridContainer}>
          {allProjects.map((project, index) => (
            <li key={index} className={styles.gridItem}>
              <div className={styles.gridItemTop}>
                <h2 className='nwt--f-h3-small'>Case Study: {project.title}</h2>
                <ul>
                  {project.techStack.map((tech) => (
                    <li key={tech}>
                      <TechnologyContainer technology={tech} variant='small' />
                    </li>
                  ))}
                </ul>
              </div>
              <p>{project.caseStudyBrief}</p>
              {project.caseStudyStatus === 'released' ? (
                <GradientButton
                  href={`/case-studies/${project.slug}`}
                  variant='blue'
                >
                  Read {project.title} Case Study
                  <CaretRightIcon />
                </GradientButton>
              ) : (
                <GradientButton
                  as='button'
                  type='button'
                  variant='blue'
                  animation='none'
                  mode='disabled'
                  title='Project Case Study not yet released'
                  aria-label='Project Case Study not yet released'
                >
                  Case Study for this Project is not yet released
                </GradientButton>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
