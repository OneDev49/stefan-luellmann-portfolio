'use client';

import { Heading } from '@/lib/mdx/mdx-utils';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utilities';
import { createPortal } from 'react-dom';

import TableOfContent from './TableOfContent';
import HamburgerIcon from '../icons/ui/HamburgerIcon';
import CloseIcon from '../icons/ui/CloseIcon';

interface MobileTableOfContentProps {
  headings: Heading[];
}

export default function MobileTableOfContent({
  headings,
}: MobileTableOfContentProps) {
  const [isFloatingButtonVisible, setIsFloatingButtonVisible] =
    useState<boolean>(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const initialTocRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOverlayVisible(true);
    setTimeout(() => setIsOverlayOpen(true), 10);
  };

  const handleClose = () => {
    setIsOverlayOpen(false);
    setTimeout(() => setIsOverlayVisible(false), 300);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFloatingButtonVisible(!entry.isIntersecting);
      },
      { rootMargin: '0px 0px 100% 0px' }
    );

    const currentRef = initialTocRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const floatingButtonClassName = cn(
    'fixed bottom-6 right-6 z-40 bg-[#0033be] text-white p-3 border border-[#6e6e6e] rounded-full shadow-[0_0_15px_2px_rgb(255,255,255,0.1)] opacity-0 scale-90 transition-all duration-300 pointer-events-none hover:text-white hover:cursor-pointer hover:bg-[#0043fa]',
    isFloatingButtonVisible && 'opacity-100 scale-100 pointer-events-auto'
  );

  const overlayClassName = cn(
    'fixed inset-0 bg-black/75 z-[1000] backdrop-blur-sm opacity-0 transition-opacity duration-300 ease-out',
    isOverlayOpen && 'opacity-100'
  );

  const contentClassName = cn(
    'fixed top-0 bottom-0 right-0 w-[85%] max-w-80 z-[1000] bg-[linear-gradient(180deg,#000645_0%,#000435_60%,#000216_100%)] border-l border-[#747474] p-4 flex flex-col translate-x-full transition-transform duration-300 ease-in-out [&_nav]:overflow-y-auto [&_nav]:flex-grow',
    isOverlayOpen && 'translate-x-0'
  );

  return (
    <>
      <div ref={initialTocRef} className='w-full max-w-lg mx-auto'>
        <TableOfContent headings={headings} variant='collapsible' />
      </div>

      <button
        type='button'
        className={floatingButtonClassName}
        onClick={handleOpen}
        title='Open Table Of Contents'
      >
        <HamburgerIcon width={20} height={20} />
      </button>

      {isOverlayVisible &&
        createPortal(
          <>
            <div className={overlayClassName} onClick={handleClose} />
            <div className={contentClassName}>
              <div className='flex justify-between items-center pb-4 mb-4 border-b border-[#5e5e5e] flex-shrink-0'>
                <h3 className='font-bold text-h4 capitalize'>
                  Table of Content
                </h3>
                <button
                  className='bg-none border-none text-[#a0aec0] cursor-pointer p-1 hover:text-white'
                  onClick={handleClose}
                >
                  <CloseIcon height={25} width={25} />
                </button>
              </div>
              <TableOfContent headings={headings} variant='sidebar' />
            </div>
          </>,
          document.body
        )}
    </>
  );
}
