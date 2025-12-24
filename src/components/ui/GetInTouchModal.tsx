'use client';

import { useEffect, useState } from 'react';
import { personalData, siteData } from '@/config/siteData';
import { cn } from '@/lib/utilities';

import GitHubIcon from '@/components/icons/brands/GitHubIcon';
import GlobeIcon from '@/components/icons/glyphs/GlobeIcon';
import Link from 'next/link';
import LinkedInIcon from '@/components/icons/brands/LinkedInIcon';
import CloseIcon from '@/components/icons/ui/CloseIcon';
import ImageSkeletonLoader from './ImageSkeletonLoader';
import EnvelopeIcon from '../icons/glyphs/EnvelopeIcon';
import LinkIcon from '../icons/glyphs/LinkIcon';
import PDFIcon from '../icons/glyphs/PDFIcon';
import CTAButton from './CTAButton';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ANIMATION_MS = 300;

export default function GetInTouchModal({
  isOpen,
  onClose,
}: GetInTouchModalProps) {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(personalData.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    let timerMount: ReturnType<typeof setTimeout> | null = null;
    let timerUnmount: ReturnType<typeof setTimeout> | null = null;

    if (isOpen) {
      setIsMounted(true);
      timerMount = setTimeout(() => setIsVisible(true), 20);
    } else {
      setIsVisible(false);
      timerUnmount = setTimeout(() => setIsMounted(false), ANIMATION_MS);
    }

    return () => {
      if (timerMount) clearTimeout(timerMount);
      if (timerUnmount) clearTimeout(timerUnmount);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isMounted) return null;

  const overlayClassName = cn(
    'fixed inset-0 bg-black/80 transition-opacity duration-300 ease-in-out',
    isVisible ? 'opacity-100' : 'opacity-0'
  );

  const containerClassName = cn(
    'relative flex flex-col justify-center items-center bg-[linear-gradient(30deg,#002bff,#a100ff)] p-1 min-w-[300px] max-w-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out sm:min-w-[360px]',
    isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  );

  const emailClassName =
    'flex-1 px-2 py-1 flex gap-2 items-center font-extrabold transition-colors duration-300 ease-in-out justify-center';

  const anchorClassName =
    'shadow-[inset_0_2px_4px_2px_rgb(255,255,255,0.25)] py-1.5 px-2 flex gap-2 text-base';

  return (
    <div className='fixed inset-0 z-[999]' aria-hidden={!isVisible}>
      <div
        className='fixed inset-0 z-[100] grid place-items-center overflow-y-auto text-sm py-4'
        role='dialog'
        aria-modal='true'
      >
        <div className={overlayClassName} onClick={onClose} />
        <div className={containerClassName}>
          <div className='absolute w-[1000px] h-[1000px] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_50%,rgb(190,190,190,0.5)_100%)]' />
          <div className='relative z-50 w-full h-full flex-1 bg-[#161616] rounded-lg p-4 flex flex-col gap-6'>
            <div className='flex flex-col items-center text-center gap-2 border-b border-[#767676] pb-3'>
              <div className='rounded-full overflow-hidden border border-white shadow-[0_0_15px_2px_#0066ff] mb-1'>
                <ImageSkeletonLoader
                  draggable={false}
                  className='h-28 w-28 object-cover'
                  src={`${siteData.uploadThingUrl}/${personalData.personalImage}`}
                  height={118}
                  width={118}
                  alt="Hey, I'm Stefan, a Full-Stack Engineer & Technical Writer!"
                  title="Hey, I'm Stefan, a Full-Stack Engineer & Technical Writer!"
                  sizes='10vw'
                />
              </div>
              <h2 className='text-[36px] font-extrabold'>Stefan Lüllmann</h2>
              <strong className='font-heading underline'>
                Full-Stack Engineer & Technical Writer
              </strong>
              <p className='grid'>
                <span>Based in Germany.</span>
                <span>Open to remote opportunities.</span>
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <CTAButton
                  as='a'
                  rel='noopener noreferrer'
                  href={`mailto:${personalData.email}`}
                  animation='all'
                  className={`${anchorClassName} bg-[#00b2ff]`}
                >
                  Direct E-Mail
                  <EnvelopeIcon variant='solid' height={25} width={25} />
                </CTAButton>
                <CTAButton
                  as='button'
                  type='button'
                  onClick={handleCopy}
                  animation='all'
                  className={`${anchorClassName} bg-[#00b2ff]`}
                >
                  {isCopied ? 'Copied!' : 'Copy E-Mail'}
                  <LinkIcon height={25} width={25} />
                </CTAButton>
              </div>
              <CTAButton
                as='a'
                href='/files/Stefan_Luellmann_CV_16.09.2025.pdf'
                download
                rel='noopener noreferrer'
                target='_blank'
                className={`${anchorClassName} bg-[#00812b]`}
                animation='all'
              >
                Download my CV
                <PDFIcon height={25} width={25} />
              </CTAButton>
              <div className='flex flex-col gap-4'>
                <CTAButton
                  as='a'
                  rel='noopener noreferrer'
                  target='_blank'
                  href={`${personalData.social.linkedin}`}
                  animation='all'
                  className={`${anchorClassName} bg-[#00089f]`}
                >
                  LinkedIn
                  <LinkedInIcon height={25} width={25} />
                </CTAButton>
                <CTAButton
                  as='a'
                  href={`${personalData.social.github}`}
                  rel='noopener noreferrer'
                  target='_blank'
                  animation='all'
                  className={`${anchorClassName} bg-[#00089f]`}
                >
                  My GitHub
                  <GitHubIcon height={25} width={25} />
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
