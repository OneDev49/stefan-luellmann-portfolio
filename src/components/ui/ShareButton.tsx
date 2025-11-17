'use client';

import { useEffect, useState } from 'react';

import GradientButton from './GradientButton';
import CheckIcon from '../icons/glyphs/CheckIcon';
import LinkIcon from '../icons/glyphs/LinkIcon';

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

  return (
    <GradientButton
      variant='green'
      as='button'
      type='button'
      onClick={handleCopy}
      disabled={isDisabled}
      title='Copy page link'
      className={className}
    >
      {isCopied ? (
        <>
          <CheckIcon />
          Copied!
        </>
      ) : (
        <>
          <LinkIcon /> Copy Link to Share
        </>
      )}
    </GradientButton>
  );
}
