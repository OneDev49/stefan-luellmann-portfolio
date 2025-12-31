'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utilities';

import CheckIcon from '../icons/glyphs/CheckIcon';
import LinkIcon from '../icons/glyphs/LinkIcon';
import CTAButton from './CTAButton';

interface ShareButtonProps {
  className?: string;
}

export default function ShareButton({ className }: ShareButtonProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    if (isCopied) return;

    try {
      await navigator.clipboard.writeText(currentUrl);

      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      console.log('Failed to copy URL:', error);
    }
  };

  const isDisabled = !currentUrl;

  const anchorClassName = cn(
    'px-2 py-1 font-heading font-extrabold flex gap-2',
    className
  );

  return (
    <CTAButton
      colorStyle='gradientGreen'
      animation='all'
      as='button'
      type='button'
      onClick={handleCopy}
      disabled={isDisabled}
      title='Copy page link'
      className={anchorClassName}
    >
      {isCopied ? (
        <>
          Study Link Copied!
          <CheckIcon />
        </>
      ) : (
        <>
          Copy Link to Share
          <LinkIcon />
        </>
      )}
    </CTAButton>
  );
}
