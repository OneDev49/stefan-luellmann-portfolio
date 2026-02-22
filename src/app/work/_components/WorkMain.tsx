import {
  personalProjects,
  privateClientProjects,
  publicClientProjects,
} from '@/config/projects';

import WaveTransition from '@/components/effects/WaveTransition';
import ProjectCard from '@/components/ui/ProjectCard';

export default function WorkMain() {
  return (
    <section className='relative my-36'>
      {personalProjects.length > 0 && (
        <div className='bg-gradient-to-b from-[#00117e] to-[#00000000] py-16 mb-48 relative'>
          <WaveTransition
            position='top'
            color='#000414'
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
                <span className='bg-gradient-card bg-clip-text underline'>
                  Personal Projects
                </span>
              </h2>
              <p>
                Projects and SaaS tools I have designed, developed and deployed
                myself, during my free time. Both collaboration projects and
                solo-projects are included in this. Not included are projects I
                developed for clients.
              </p>
            </div>
            <ul className={`grid gap-12 ${personalProjects.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
              {personalProjects.map((project, index) => (
                <li key={index}>
                  <ProjectCard project={project} projectCategory='personal' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {publicClientProjects !== null && publicClientProjects.length > 0 && (
        <div className='bg-gradient-to-b from-[#003479] to-[#00000000] py-16 relative mt-36 mb-48'>
          <WaveTransition
            position='top'
            color='#000414'
            variant='inner'
            config={{
              height: 75,
            }}
          />
          <div
            id='public-client-projects'
            className='max-w-6xl mx-auto px-4 py-12 flex flex-col gap-20 scroll-m-20'
          >
            <div className='text-center max-w-xl mx-auto flex flex-col gap-4'>
              <h2 className='text-h2 text-transparent font-extrabold capitalize text-center'>
                <span className='bg-gradient-card bg-clip-text underline'>
                  Public Client Projects
                </span>
              </h2>
              <p className='grid'>
                <span>Projects I worked on for public clients.</span>
                <span>
                  These include projects in which I held a Lead Position,
                  projects in which I was an Engineer within a larger team and
                  projects where I was the sole-engineer working on the project.
                </span>
              </p>
            </div>
            <ul className={`grid gap-12 ${publicClientProjects.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
              {publicClientProjects.map((project, index) => (
                <li key={index}>
                  <ProjectCard
                    project={project}
                    projectCategory='publicClient'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {privateClientProjects !== null && privateClientProjects.length > 0 && (
        <div className='bg-gradient-to-b from-[#0b0d85] to-[#00000000] py-16 relative mt-36 mb-48'>
          <WaveTransition
            position='top'
            color='#000414'
            variant='inner'
            config={{
              height: 75,
            }}
          />
          <div
            id='private-client-projects'
            className='max-w-6xl mx-auto px-4 py-12 flex flex-col gap-20 scroll-m-20'
          >
            <div className='text-center max-w-xl mx-auto flex flex-col gap-4'>
              <h2 className='text-h2 text-transparent font-extrabold capitalize text-center'>
                <span className='bg-gradient-card bg-clip-text'>
                  Private Client Projects
                </span>
              </h2>
              <p className='grid'>
                <span>NDA-signed projects I worked on for clients.</span>
                <span>
                  These include projects in which I held a Lead Position,
                  projects in which I was an Engineer within a larger team and
                  projects where I was the sole-engineer working on the project.
                </span>
              </p>
            </div>
            <ul className={`grid gap-12 ${privateClientProjects.length > 1 ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1'}`}>
              {privateClientProjects.map((project, index) => (
                <li key={index}>
                  <ProjectCard
                    project={project}
                    projectCategory='privateClient'
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
