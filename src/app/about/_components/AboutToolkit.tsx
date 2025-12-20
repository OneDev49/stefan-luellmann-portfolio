import { TechnologyName } from '@/components/icons/TechIconMap';

import TechnologyContainer from '@/components/ui/TechnologyContainer';

export default function AboutToolkit() {
  const techStack: TechnologyName[] = [
    'typescript',
    'javascript',
    'nextjs',
    'react',
    'html5',
    'css3',
    'sass',
    'tailwindcss',
    'zustand',
    'nodejs',
    'php',
    'prisma',
    'nextauthjs',
    'zod',
    'redis',
    'postgresql',
    'mysql',
    'supabase',
    'git',
    'docker',
    'vercel',
    'figma',
    'netlify',
  ];

  return (
    <section
      id='techstack'
      className='flex flex-col max-w-6xl w-full mx-auto px-4 my-36 gap-8 scroll-mt-20'
    >
      <div className='max-w-4xl mx-auto text-center px-4'>
        <h2 className='text-h2 text-transparent font-extrabold capitalize'>
          <span className='bg-gradient-card bg-clip-text'>My Environment</span>
        </h2>
        <p>
          All the languages, frameworks and tools I am using to build efficient
          applications.
        </p>
      </div>
      <ul className='grid grid-cols-2 gap-8 justify-items-center sm:grid-cols-4 md:grid-cols-6'>
        {techStack.map((tech) => (
          <li className='relative group flex justify-center' key={tech}>
            <TechnologyContainer
              technology={tech}
              svgHeight={75}
              svgWidth={75}
              background={false}
              variant='icon'
              className='grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out'
            />
            <div className="absolute top-[110%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gradient-to-r from-[#0059ff] to-[#00d9ff] rounded-lg px-2 py-1 after:content-[' '] after:absolute after:bottom-full after:left-1/2 after:-ml-[7px] after:border-8 after:border-[transparent_transparent_#00d9ff_transparent] z-20">
              <p>{tech.charAt(0).toUpperCase() + tech.slice(1)}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
