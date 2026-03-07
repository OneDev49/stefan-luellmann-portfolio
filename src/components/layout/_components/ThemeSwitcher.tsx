'use client';

import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';

import DesktopIcon from '@/components/icons/glyphs/DesktopIcon';
import MoonIcon from '@/components/icons/glyphs/MoonIcon';
import SunIcon from '@/components/icons/glyphs/SunIcon';

type Theme = 'light' | 'dark' | 'system';

interface ThemeOption {
  value: Theme;
  label: string;
}

const themeOptions: ThemeOption[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!mounted) return null;

  const iconSize: number = 20;

  return (
    <div ref={ref} className='relative'>
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label='Toggle Theme Menu'
        title='Toggle Theme Menu'
        aria-expanded={open}
        aria-haspopup='true'
        className='flex items-center justify-center w-8 h-8 rounded-md opacity-70 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--global-text-color))]  transition-colors duration-150 ease-linear'
      >
        {theme === 'light' && <SunIcon height={iconSize} width={iconSize} />}
        {theme === 'dark' && <MoonIcon height={iconSize} width={iconSize} />}
        {theme === 'system' && (
          <DesktopIcon height={iconSize} width={iconSize} />
        )}
      </button>
      {open && (
        <div
          role='menu'
          className='absolute right-0 top-full mt-4 w-28 border border-gray-400 dark:border-gray-600 rounded-md shadow-md overflow-hidden z-50'
        >
          <div className='backdrop-blur-sm absolute -z-10 inset-0 bg-white/75 dark:bg-black/75 ' />
          {themeOptions.map(({ value, label }) => (
            <button
              key={value}
              role='menuitem'
              onClick={() => {
                setTheme(value);
                setOpen(false);
              }}
              className='w-full text-left px-3 py-2 text-xs transition-colors duration-100 dark:hover:bg-white/30 hover:bg-black/30'
              aria-label={`Switch to ${label} Theme`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
