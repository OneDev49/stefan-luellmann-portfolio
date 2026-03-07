'use client';

import { FontSize, useAccessibilityStore } from '@/store/useAccessibilityStore';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utilities';

import UniversalAccessIcon from '../icons/glyphs/UniversalAccessIcon';

export default function AccessibilityMenu() {
  const { fontSize, setFontSize } = useAccessibilityStore();
  const [mounted, setMounted] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed bottom-20 right-0 flex items-center transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={
            isOpen ? 'Close Accessibility Panel' : 'Open Accessibility Panel'
          }
          title={
            isOpen ? 'Close Accessibility Panel' : 'Open Accessibility Panel'
          }
          className='fixed bottom-0 right-full z-40 p-3 rounded-l-md text-white hover:cursor-pointer hover:bg-[#0043fa] bg-[#4a77ff] dark:bg-[#00228a] border border-r-0 dark:border-blue-600 border-blue-700 hover:dark:bg-[#0043fa]'
        >
          <UniversalAccessIcon width={20} height={20} />
        </button>

        <div
          className='bg-[#4a77ff] dark:bg-[#00228a] px-4 py-4 rounded-tl-md border border-r-0 dark:border-blue-600 border-blue-700'
          role='region'
          aria-label='Reading settings'
        >
          <div className='flex flex-col items-center gap-3 w-full text-white'>
            <p className='text-sm font-bold uppercase text-center'>
              Adjust Font Size
            </p>
            <div className='flex flex-col gap-1.5 w-full'>
              {(['small', 'normal', 'large'] as FontSize[]).map((size) => {
                const adjustedSizeName =
                  size.charAt(0).toUpperCase() + size.slice(1);

                return (
                  <button
                    key={size}
                    onClick={() => setFontSize(size)}
                    aria-label={`Set Content Font Size to ${adjustedSizeName}`}
                    title={`Set Content Font Size to ${adjustedSizeName}`}
                    className={cn(
                      'w-full py-1.5 rounded text-xs text-center border transition-all duration-150',
                      fontSize === size
                        ? 'bg-[#308affa8] border-[#65a8ff]'
                        : 'bg-[#549eff3f] border-[#003881]'
                    )}
                  >
                    {adjustedSizeName}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 z-40'
          onClick={() => setIsOpen(false)}
          aria-hidden='true'
        />
      )}
    </>
  );
}
