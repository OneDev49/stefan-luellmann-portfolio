'use client';

import { useState } from 'react';
import { cn } from '@/lib/utilities';

import Image, { ImageProps } from 'next/image';

interface ImageSkeletonLoaderProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export default function ImageSkeletonLoader({
  alt,
  className,
  wrapperClassName,
  ...props
}: ImageSkeletonLoaderProps) {
  const [loaded, setLoaded] = useState<boolean>(false);

  const imageClassName = cn(
    'opacity-0 transition-opacity duration-500 ease-in-out',
    loaded && 'opacity-100',
    className
  );

  const imageWrapperClassName = cn(
    'relative flex overflow-hidden w-full',
    wrapperClassName
  );

  return (
    <div className={imageWrapperClassName}>
      {!loaded && (
        <div
          className='absolute inset-0 bg-[#0d3c7a] bg-[linear-gradient(90deg,#00277c_8%,#0a3fb1_18%,#00277c_28%)] animate-image-skeleton-shimmer rounded-lg grid place-items-center bg-[length:1200px_100%]'
          aria-label='Image is loading'
          title='Image is loading'
        >
          <span className='opacity-75 text-lg font-extrabold text-[#74a7eb]'>
            Image is Loading
          </span>
        </div>
      )}
      <Image
        {...props}
        alt={alt ?? ''}
        onLoad={() => setLoaded(true)}
        className={imageClassName}
      />
    </div>
  );
}
