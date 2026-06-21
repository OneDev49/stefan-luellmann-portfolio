import localFont from 'next/font/local';

export const fontHeadings = localFont({
  src: [
    {
      path: '../../../../public/fonts/ibm-plex-sans-condensed-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/ibm-plex-sans-condensed-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-heading',
  display: 'swap',
});

export const fontTexts = localFont({
  src: [
    {
      path: '../../../../public/fonts/ibm-plex-sans-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/ibm-plex-sans-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-text',
  display: 'swap',
});

export const fontMono = localFont({
  src: [
    {
      path: '../../../../public/fonts/ibm-plex-mono-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../../public/fonts/ibm-plex-mono-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-mono',
  display: 'swap',
});
