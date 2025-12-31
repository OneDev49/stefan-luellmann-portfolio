import { cn } from '@/lib/utilities';

import Link from 'next/link';
import React from 'react';

export interface GradientButtonBaseProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  styling?: 'standard' | false;
  colorStyle?:
    | 'gradientBlue'
    | 'gradientOrange'
    | 'gradientGreen'
    | 'borderPurple'
    | false;

  animation?: 'all' | 'hover' | 'move' | 'line' | false;
}

type GradientButtonProps<C extends React.ElementType> =
  GradientButtonBaseProps & {
    as?: C;
  } & Omit<React.ComponentPropsWithoutRef<C>, keyof GradientButtonBaseProps>;

export default function CTAButton<C extends React.ElementType = typeof Link>({
  as,
  children,
  className,
  disabled = false,
  styling = 'standard',
  colorStyle = false,
  animation = false,

  ...restProps
}: GradientButtonProps<C>) {
  const Component = (as || Link) as React.ElementType;

  const hoverAniClassName = 'hover:scale-105';
  const lineAniClassName =
    "hover:before:animate-custom-link-move before:content-[' '] before:absolute before:w-[100px] before:h-full before:bg-[linear-gradient(120deg,rgb(255,255,255,0)_30%,rgb(255,255,255,0.8),rgb(255,255,255,0)_70%)] before:top-0 before:-left-[100px] before:opacity-60";
  const moveAniClassName = '';

  const buttonClassNames = cn(
    'relative overflow-hidden',
    styling === 'standard' && 'flex items-center justify-center rounded-md',
    disabled ? 'cursor-not-allowed' : 'cursor-pointer',

    animation &&
      !disabled &&
      'active:scale-[0.98] transition-all duration-200 ease-in-out',
    animation === 'hover' && !disabled && hoverAniClassName,
    animation === 'line' && !disabled && lineAniClassName,
    animation === 'move' && !disabled && moveAniClassName,
    animation === 'all' &&
      !disabled &&
      `${hoverAniClassName} ${lineAniClassName} ${moveAniClassName}`,

    colorStyle === 'gradientBlue' && disabled
      ? 'bg-[linear-gradient(270deg,#185e74,#0011a8)] text-gray-400'
      : colorStyle === 'gradientBlue' &&
          'bg-[linear-gradient(270deg,#36cfff,#001aff)] text-white shadow-[0_0_12px_2px_#004aff]',

    colorStyle === 'gradientOrange' && disabled
      ? 'bg-[linear-gradient(90deg,#b68b00,#a86800)] text-black'
      : colorStyle === 'gradientOrange' &&
          'bg-[linear-gradient(90deg,#ffc300,#ff9d00)] text-black shadow-[0_0_12px_2px_#ffc401cb]',

    colorStyle === 'gradientGreen' && disabled
      ? 'bg-[linear-gradient(90deg,#004d03,#1c6400)] text-gray-300'
      : colorStyle === 'gradientGreen' &&
          'bg-[linear-gradient(90deg,#009105,#42e100)] text-white shadow-[0_0_12px_2px_#06bd00]',

    colorStyle === 'borderPurple' &&
      'relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50',

    className
  );

  if (colorStyle === 'borderPurple') {
    return (
      <Component className={buttonClassNames} {...restProps}>
        <span className='absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a6d3ff_0%,#3949b2_50%,#a6d3ff_100%)]' />

        <span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-zinc-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
          {children}
        </span>
      </Component>
    );
  }

  return (
    <Component className={buttonClassNames} {...restProps}>
      {children}
    </Component>
  );
}
