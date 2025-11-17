'use client';

import { Heading } from '@/lib/mdx';
import { useEffect, useRef, useState } from 'react';

import styles from './TableOfContent.module.scss';
import clsx from 'clsx';
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
}

export default function TableOfContent({
  headings,
  variant = 'sidebar',
}: TableOfContentProps) {
  const activeId = useIntersectionObserver(headings);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  if (headings.length === 0) return null;

  const renderLinks = () => (
    <ul>
      {headings.map((heading) => {
        const isActive = activeId === heading.slug;
        const linkClassName = isActive
          ? `${styles.tocLink} ${styles.active}`
          : styles.tocLink;
        const listItemClassName = clsx(styles.tocListItem, {
          [styles.tocIndentLv3]: heading.level === 3,
          [styles.active]: isActive,
        });
        return (
          <li key={heading.slug} className={listItemClassName}>
            <a href={`#${heading.slug}`} className={linkClassName}>
              {heading.text}
            </a>
          </li>
        );
      })}
    </ul>
  );

  if (variant === 'sidebar') {
    return (
      <nav className={styles.sidebarNav}>
        <h3 className={`nwt--f-h3 ${styles.tocHeading}`}>Table of Content</h3>
        {renderLinks()}
      </nav>
    );
  }

  if (variant === 'collapsible') {
    return (
      <nav className={styles.collapsibleNav}>
        <button
          type='button'
          className={styles.collapsibleHeader}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <span>On this page</span>
          <CaretDownIcon
            className={clsx(styles.caret, isOpen && styles.caretOpen)}
          />
        </button>
        {isOpen && (
          <div className={styles.collapsibleContent}>{renderLinks()}</div>
        )}
      </nav>
    );
  }
}
