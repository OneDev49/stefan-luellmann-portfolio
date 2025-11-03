import { techStack } from './config/techstackConfig';

import styles from './ToolkitSection.module.scss';
import TechnologyContainer from '@/components/ui/TechnologyContainer';

export default function ToolkitSection() {
  return (
    <section className={styles.wrapper}>
      <div>
        <h2 className='nwt--f-h2'>
          <span className='nwt--txt-gradient'>My Technical Toolkit</span>
        </h2>
        <p>
          A look at the languages, frameworks and tools I use to bring ideas to
          life, from initial concept to final deployment.
        </p>
      </div>
      <ul className={styles.sectionBody}>
        {techStack &&
          techStack.map((area) => (
            <li key={area.area}>
              <div className={styles.images}>
                <area.icon width={35} height={35} />
              </div>
              <div>
                <h3 className='nwt--f-h3'>{area.heading}</h3>
                <p>{area.paragraph}</p>
              </div>
              <ul>
                {area.technologies.map((tech) => (
                  <li key={tech}>
                    <TechnologyContainer variant='big' technology={tech} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </section>
  );
}
