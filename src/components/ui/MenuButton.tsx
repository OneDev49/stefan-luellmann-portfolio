'use client';

import { Project } from '@/config/projects';
import { useRef, useState } from 'react';
import {
  useOnClickOutside,
  useOnClickOutsideEscape,
} from '@/lib/useOnClickOutside';
import { cn } from '@/lib/utilities';

import CaretDownIcon from '../icons/ui/CaretDownIcon';
import GradientButton from './GradientButton';
import Link from 'next/link';

interface MenuButtonProps {
  project: Project;
}

export default function MenuButton({ project }: MenuButtonProps) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(wrapperRef, () => setIsExpanded(false));
  useOnClickOutsideEscape(() => setIsExpanded(false));

  const anchorClassName =
    'text-white no-underline text-sm transition-colors duration-300 ease-in-out py-1 px-2 hover:bg-[#0059ff]';

  return (
    <div ref={wrapperRef} className='inline-block relative'>
      <GradientButton
        as='button'
        onClick={() => setIsExpanded((p) => !p)}
        position='card'
        animation='none'
        className='gap-1 py-1 px-2 items-center rounded-md font-heading'
      >
        Quick Links of this Project
        <span
          className={cn(
            'inline-block transition-transform duration-300 ease-in-out origin-center',
            isExpanded && 'rotate-180'
          )}
        >
          <CaretDownIcon height={25} />
        </span>
      </GradientButton>
      {isExpanded && (
        <div
          className={cn(
            'absolute top-[80%] left-0 right-0 z-[999] mt-2 bg-[#0a0f3c] border border-gray-700 rounded-md flex flex-col min-w-[180px] -translate-y-[10px] pointer-events-none transition-all duration-300 ease-in-out text-center overflow-hidden',
            isExpanded
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0'
          )}
        >
          <a
            href={project.links.liveDemo}
            rel='noopener noreferrer'
            target='_blank'
            className={anchorClassName}
          >
            Live Demo
          </a>
          {project.caseStudyStatus === 'released' && (
            <Link
              href={`/case-studies/${project.slug}`}
              className={anchorClassName}
            >
              Case Study
            </Link>
          )}
          <a
            href={project.links.github}
            rel='noopener noreferrer'
            target='_blank'
            className={anchorClassName}
          >
            GitHub
          </a>
        </div>
      )}
    </div>
  );
}
