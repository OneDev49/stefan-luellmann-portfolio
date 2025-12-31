import {
  allProjects,
  clientProjects,
  personalProjects,
} from '@/config/projects';

import ProjectCard from '@/components/ui/ProjectCard';

export default function CaseStudiesMain() {
  return (
    <section className='relative z-[99] mb-36 mt-28 mx-auto max-w-7xl px-4'>
      {allProjects.length > 0 && (
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {personalProjects.length > 0 &&
            personalProjects.map((project, index) => (
              <li key={index}>
                <ProjectCard
                  project={project}
                  projectCategory='personal'
                  cardVariant='caseStudy'
                />
              </li>
            ))}
          {clientProjects.length > 0 &&
            clientProjects.map((project, index) => (
              <li key={index}>
                <ProjectCard
                  project={project}
                  projectCategory='client'
                  cardVariant='caseStudy'
                />
              </li>
            ))}
        </ul>
      )}
    </section>
  );
}
