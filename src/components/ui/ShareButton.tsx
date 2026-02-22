'use client';

import { useEffect, useState } from 'react';

import CheckIcon from '../icons/glyphs/CheckIcon';
import LinkIcon from '../icons/glyphs/LinkIcon';
import CTAButton from './CTAButton';
import LinkedInIcon from '../icons/brands/LinkedInIcon';
import NewTwitterIcon from '../icons/brands/NewTwitterIcon';
import RedditIcon from '../icons/brands/RedditIcon';

interface ShareButtonProps {
  variant?: 'compact' | 'full';
  position?: 'article' | 'study';
  title?: string;
}

export default function ShareButton({
  variant = 'compact',
  position = 'article',
  title = '',
}: ShareButtonProps) {
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

  const shareOnTwitter = () => {
    const text = `Check out this ${position === 'article' ? `article` : `case study`}: ${title}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const shareOnReddit = () => {
    const url = `https://reddit.com/submit?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`;
    window.open(url, '_blank', 'width=550,height=420');
  };

  const isDisabled = !currentUrl;

  const anchorClassName =
    'px-2 py-1 font-heading font-extrabold flex gap-2 text-white';

  const anchorChildClassName = 'flex items-center gap-2';

  return (
    <div className='flex flex-wrap gap-2'>
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
        <span className={anchorChildClassName}>
          {isCopied ? (
            <>
              <CheckIcon />
              Study Link Copied!
            </>
          ) : (
            <>
              <LinkIcon />
              Copy Link to Share
            </>
          )}
        </span>
      </CTAButton>

      {variant === 'full' && (
        <>
          <CTAButton
            colorStyle={false}
            animation='all'
            as='button'
            type='button'
            onClick={shareOnTwitter}
            disabled={isDisabled}
            title='Share on Twitter'
            className={`${anchorClassName} bg-[#1DA1F2]`}
          >
            <span className={anchorChildClassName}>
              <NewTwitterIcon height={20} width={20} />
              Twitter
            </span>
          </CTAButton>

          <CTAButton
            colorStyle={false}
            animation='all'
            as='button'
            type='button'
            onClick={shareOnLinkedIn}
            disabled={isDisabled}
            title='Share on LinkedIn'
            className={`${anchorClassName} bg-[#0A66C2]`}
          >
            <span className={anchorChildClassName}>
              <LinkedInIcon variant='solid' height={20} width={20} />
              LinkedIn
            </span>
          </CTAButton>

          <CTAButton
            colorStyle={false}
            animation='all'
            as='button'
            type='button'
            onClick={shareOnReddit}
            disabled={isDisabled}
            title='Share on Reddit'
            className={`${anchorClassName} bg-[#bd3200]`}
          >
            <span className={anchorChildClassName}>
              <RedditIcon height={20} width={20} />
              Reddit
            </span>
          </CTAButton>
        </>
      )}
    </div>
  );
}
