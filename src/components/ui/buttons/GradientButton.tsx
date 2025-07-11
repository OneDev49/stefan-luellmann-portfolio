import Link from 'next/link';
import clsx from 'clsx';
import styles from './GradientButton.module.scss';
import React from 'react';

export interface GradientButtonBaseProps {
  children: React.ReactNode;
  variant?: 'blue' | 'orange' | 'green' | 'rainbow';
  className?: string;
}

type GradientButtonProps<C extends React.ElementType> =
  GradientButtonBaseProps & {
    as?: C;
  } & Omit<React.ComponentPropsWithoutRef<C>, keyof GradientButtonBaseProps>;

export default function GradientButton<
  C extends React.ElementType = typeof Link
>({
  as,
  children,
  variant = 'blue',
  className,
  ...restProps
}: GradientButtonProps<C>) {
  const Component = as || Link;
  const buttonClassNames = clsx(
    variant === 'rainbow' ? '' : styles.nwtGradientButton,
    {
      [styles.nwtBlueGradient]: variant == 'blue',
      [styles.nwtOrangeGradient]: variant == 'orange',
      [styles.nwtGreenGradient]: variant == 'green',
      [styles.nwtRainbow]: variant == 'rainbow',
    },
    'nwt--flex-c-c-n',
    className
  );

  return (
    <Component className={buttonClassNames} {...(restProps as any)}>
      {children}
    </Component>
  );
}
