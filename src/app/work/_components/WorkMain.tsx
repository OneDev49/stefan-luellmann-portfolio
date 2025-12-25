import { clientProjects, personalProjects } from '@/config/projects';

import WaveTransition from '@/components/effects/WaveTransition';
import ProjectCard from '@/components/ui/ProjectCard';

export default function WorkMain() {
  return (
    <section className='relative my-36'>
      {personalProjects.length > 0 && (
        <div className='bg-[rgb(0,18,91,0.4)] py-16 relative'>
          <WaveTransition
            position='top'
            color='rgba(0, 9, 46, 1)'
            variant='inner'
            config={{
              height: 75,
            }}
          />
          <div
            id='personal-projects'
            className='max-w-6xl mx-auto px-4 py-12 flex flex-col gap-20 scroll-m-20'
          >
            <div className='text-center max-w-xl mx-auto flex flex-col gap-4'>
              <h2 className='text-h2 text-transparent font-extrabold capitalize text-center'>
                <span className='bg-gradient-card bg-clip-text'>
                  Private Projects
                </span>
              </h2>
              <p>
                Personal Projects and SaaS tools I have developed for free
                public use or for specialized B2B or B2C use for SMB companies.
              </p>
            </div>
            <ul className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
              {personalProjects.map((project, index) => (
                <li key={index}>
                  <ProjectCard project={project} projectCategory='personal' />
                </li>
              ))}
            </ul>
          </div>
          <WaveTransition
            position='bottom'
            color='rgba(0, 9, 46, 1)'
            variant='inner'
            config={{
              height: 75,
            }}
          />
        </div>
      )}
      {clientProjects !== null && clientProjects.length > 0 && (
        <div className='bg-[rgb(0,37,78,0.4)] py-16 relative my-36'>
          <WaveTransition
            position='top'
            color='rgba(0, 9, 46, 1)'
            variant='inner'
            config={{
              height: 75,
            }}
          />
          <div
            id='client-projects'
            className='max-w-6xl mx-auto px-4 py-12 flex flex-col gap-20 scroll-m-20'
          >
            <div className='text-center max-w-xl mx-auto flex flex-col gap-4'>
              <h2 className='text-h2 text-transparent font-extrabold capitalize text-center'>
                <span className='bg-gradient-card bg-clip-text'>
                  Client Projects
                </span>
              </h2>
              <p>
                Special solutions and projects I worked on for SMB companies
              </p>
            </div>
            <ul className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
              {clientProjects.map((project, index) => (
                <li key={index}>
                  <ProjectCard project={project} projectCategory='client' />
                </li>
              ))}
            </ul>
          </div>
          <WaveTransition
            position='bottom'
            color='rgba(0, 9, 46, 1)'
            variant='inner'
            config={{
              height: 75,
            }}
          />
        </div>
      )}
    </section>
  );
}
