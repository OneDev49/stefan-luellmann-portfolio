'use client';

import { useEffect } from 'react';

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (e: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    function listener(e: MouseEvent | TouchEvent) {
      if (!ref.current || ref.current.contains(e.target as Node)) {
        return;
      }
      handler(e);
    }
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}

export function useOnClickOutsideEscape(handler: () => void) {
  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === 'Escape') handler();
    }
    document.addEventListener('keydown', listener);
    return () => document.removeEventListener('keydown', listener);
  }, [handler]);
}
