'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';
import styles from './ImageSkeletonLoader.module.scss';

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
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={clsx(styles.wrapper, wrapperClassName)}>
      {!loaded && (
        <div
          className={styles.skeleton}
          aria-label='Image is loading'
          title='Image is loading'
        >
          <span>Image is Loading</span>
        </div>
      )}
      <Image
        {...props}
        alt={alt ?? ''}
        onLoad={() => setLoaded(true)}
        className={clsx(styles.image, loaded && styles.visible, className)}
      />
    </div>
  );
}
