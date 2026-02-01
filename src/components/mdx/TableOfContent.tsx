'use client';

import { Heading } from '@/lib/mdx/mdx-utils';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utilities';

import CaretDownIcon from '../icons/ui/CaretDownIcon';

function useIntersectionObserver(headings: Heading[]) {
  const [activeId, setActiveId] = useState<string>('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      (entries) => {
        const intersectingEntry = entries.find((entry) => entry.isIntersecting);
        if (intersectingEntry) setActiveId(intersectingEntry.target.id);
      },
      { rootMargin: '0% 0% -80% 0%' }
    );

    const elements = headings
      .map((h) => document.getElementById(h.slug))
      .filter(Boolean);
    elements.forEach((element) => observer.current?.observe(element!));

    return () => observer.current?.disconnect();
  }, [headings]);

  return activeId;
}

interface TableOfContentProps {
  headings: Heading[];
  variant?: 'sidebar' | 'collapsible';
  listClassName?: string;
}

export default function TableOfContent({
  headings,
  variant = 'sidebar',
  listClassName,
}: TableOfContentProps) {
  const activeId = useIntersectionObserver(headings);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (headings.length === 0) return null;

  const renderLinks = () => (
    <ol className={`${listClassName} overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-background`}>
      {headings.map((heading) => {
        const isActive = activeId === heading.slug;

        const linkClassName = cn(
          'block py-1 px-3 text-white text-sm underline-none'
        );
        const listItemClassName = cn(
          'border-l-2 border-[#ffffff1f] transition-all duration-75 ease-in-out hover:bg-[#549eff77] hover:border-[#0050b9]',
          heading.level === 3 && 'pl-4',
          isActive &&
            'bg-[#549eff3f] border-[#003881] hover:bg-[#549eff77] hover:border-[#0050b9]'
        );
        return (
          <li key={heading.slug} className={listItemClassName}>
            <a href={`#${heading.slug}`} className={linkClassName}>
              {heading.text}
            </a>
          </li>
        );
      })}
    </ol>
  );

  if (variant === 'sidebar') {
    return (
      <nav>
        <h3 className='text-h4 underline mb-4'>Table of Content</h3>
        {renderLinks()}
      </nav>
    );
  }

  if (variant === 'collapsible') {
    return (
      <nav className='rounded-lg mb-8 max-w-[72ch] bg-[#00228a] shadow-[0_0_10px_5px_rgb(0,43,173)]'>
        <button
          type='button'
          className='underline flex justify-between items-center w-full px-4 py-3 bg-none text-white font-extrabold cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span className='text-lg'>Table of Content</span>
          <CaretDownIcon
            className={cn(
              'transition-transform duration-200 ease-in-out',
              isOpen && 'rotate-180'
            )}
          />
        </button>
        {isOpen && (
          <div className='px-4 pb-3 border-t border-[#4a4a4a] [&_ol]:pl-4 [&_ol]:marker:text-sm'>
            {renderLinks()}
          </div>
        )}
      </nav>
    );
  }
}
