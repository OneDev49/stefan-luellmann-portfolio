'use client';

import { Heading } from '@/lib/mdx';
import { useEffect, useRef, useState } from 'react';

import TableOfContent from './TableOfContent';
import styles from './MobileTableOfContent.module.scss';
import clsx from 'clsx';
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

  return (
    <>
      <div ref={initialTocRef}>
        <TableOfContent headings={headings} variant='collapsible' />
      </div>

      <button
        type='button'
        className={clsx(
          styles.floatingButton,
          isFloatingButtonVisible && styles.visible
        )}
        onClick={handleOpen}
        title='Open Table Of Contents'
      >
        <HamburgerIcon width='25px' height='25px' />
      </button>

      {isOverlayVisible && (
        <>
          <div
            className={clsx(
              styles.overlayBackdrop,
              isOverlayOpen && styles.open
            )}
            onClick={handleClose}
          />
          <div
            className={clsx(
              styles.overlayContent,
              isOverlayOpen && styles.open
            )}
          >
            <div className={styles.overlayHeader}>
              <h3 className='font-bold'>On this page</h3>
              <button onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
            <TableOfContent headings={headings} variant='sidebar' />
          </div>
        </>
      )}
    </>
  );
}
