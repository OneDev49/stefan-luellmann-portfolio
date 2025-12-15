'use client';

import { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { siteData } from '@/config/siteData';
import { cn } from '@/lib/utilities';

import Link from 'next/link';
import GradientButton from '../ui/GradientButton';
import CaretRightIcon from '../icons/ui/CaretRightIcon';
import Image from 'next/image';
import HamburgerIcon from '../icons/ui/HamburgerIcon';
import HeaderPhoneNav from './_components/HeaderPhoneNav';

export default function HeaderSection() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isPhoneNavOpen, setIsPhoneNavOpen] = useState<boolean>(false);
  const [isPhoneNavClosed, setIsPhoneNavClosed] = useState<boolean>(false);

  const openPhoneNav = () => {
    setIsPhoneNavClosed(false);
    setIsPhoneNavOpen(true);
  };
  const closePhoneNav = () => {
    setIsPhoneNavClosed(true);
    setTimeout(() => {
      setIsPhoneNavOpen(false);
      setIsPhoneNavClosed(false);
    }, 400);
  };

  const { openGetInTouch } = useModal();

  const headerClassName = cn(
    'fixed top-0 right-0 left-0 w-full mx-auto z-[999] transition-all duration-300',
    !isAtTop && 'min-[1280px]:w-[1280px]'
  );
  const headerMainClassName = cn(
    'flex items-center transition-all duration-300 relative',
    isAtTop && 'bg-transparent border-transparent',
    !isAtTop &&
      'bg-black/75 border-b border-gray-600 min-[1280px]:border-x min-[1280px]:border-gray-600 min-[1280px]:rounded-b-2xl'
  );
  const headerBackgroundClassName = cn(
    'backdrop-blur-sm absolute -z-10 inset-0',
    isAtTop && 'backdrop-blur-none'
  );
  const navLinkBtn =
    'rounded-md py-1 px-2 font-heading font-extrabold transition-colors duration-100 ease-linear hover:bg-[#74bcff80]';

  const navCTA = 'hidden sm:flex';

  return (
    <>
      <header
        id='nwt-header'
        className={headerClassName}
        data-nwt-bg={isAtTop ? 'dark' : 'light'}
      >
        <div className={headerMainClassName}>
          <div className={headerBackgroundClassName} />
          <div className='py-1 px-2'>
            <Link
              href='/'
              title='Stefan Lüllmann - Full-Stack Software Developer'
            >
              <Image
                loading='eager'
                priority={true}
                draggable='false'
                src={`${siteData.uploadThingUrl}/x81VdwhEWe9Yjt17UDWZWS01vBYf3yHtizhn8IV2UdGeQlP5`}
                alt='Logo of my Personal Website'
                height='71'
                width='250'
                sizes='25vw'
                className='w-[200px]'
              />
            </Link>
          </div>
          <div className='flex-1'>
            <nav className='flex justify-end px-4 min-[1100px]:justify-between'>
              <div className='hidden items-center gap-2 min-[1100px]:flex'>
                <Link href='/' className={navLinkBtn}>
                  Homepage
                </Link>
                <Link href='/work' className={navLinkBtn}>
                  Work
                </Link>
              </div>
              <div className='hidden items-center gap-2 min-[1100px]:flex'>
                <Link href='/articles' className={navLinkBtn}>
                  Articles
                </Link>
                <Link href='/about' className={navLinkBtn}>
                  About
                </Link>
                <GradientButton
                  as='button'
                  variant='blue'
                  className={navCTA}
                  position='card'
                  onClick={openGetInTouch}
                >
                  <span>Get In Touch</span>
                </GradientButton>
              </div>
              <div className='flex items-center gap-4 min-[1100px]:hidden'>
                <button
                  className='bg-transparent p-2 rounded-md cursor-pointer transition-colors duration-100 ease-out w-9 hover:bg-[#74bcff80] hover:text-white'
                  type='button'
                  title='Open Mobile Navbar'
                  onClick={openPhoneNav}
                >
                  <HamburgerIcon
                    color='#fff'
                    className='nwt_header-sideButton-svg'
                    height={20}
                    width={20}
                  />
                </button>
                <GradientButton
                  as='button'
                  variant='blue'
                  className={navCTA}
                  position='card'
                  onClick={openGetInTouch}
                >
                  <span>Get In Touch</span>
                </GradientButton>
              </div>
            </nav>
          </div>
          {isPhoneNavOpen && (
            <HeaderPhoneNav
              closePhoneNav={closePhoneNav}
              isPhoneNavClosed={isPhoneNavClosed}
              openGetInTouch={openGetInTouch}
            />
          )}
        </div>
      </header>
    </>
  );
}
