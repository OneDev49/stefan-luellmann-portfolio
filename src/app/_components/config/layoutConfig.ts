import type { Metadata } from 'next';
import { siteData } from '@/config/siteData';
import localFont from 'next/font/local';

export const fontHeadings = localFont({
  src: [
    {
      path: '../../../assets/fonts/ibm-plex-sans-condensed-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/ibm-plex-sans-condensed-700.woff2',
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
      path: '../../../assets/fonts/ibm-plex-sans-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../assets/fonts/ibm-plex-sans-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-text',
  display: 'swap',
});

export const metadataConfig: Metadata = {
  // Core Metadata
  title: {
    template: '%s | Stefan Lüllmann',
    default: 'Stefan Lüllmann | Full-Stack Software Developer',
  },
  description:
    'The personal portfolio of Stefan Lüllmann, a Full-Stack Developer specializing in Next.js, TypeScript and modern web architectures. Explore my Projects, Case Studies and Articles!',

  // Author & Keyword Metadata
  authors: [{ name: 'Stefan Lüllmann', url: siteData.url }],
  creator: 'Stefan Lüllmann',
  keywords: [
    'Stefan Lüllmann',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'TypeScript',
    'Prisma',
    'Portfolio',
    'Germany',
  ],

  // Favicons & Icon Metadata
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },

  // Open Graph Metadata
  openGraph: {
    title: 'Stefan Lüllmann | Full-Stack Software Developer',
    description:
      'Personal portfolio of Stefan Lüllmann, showcasing Full-Stack and Front-End Projects with Next.js, React, TypeScript and other languages.',
    url: siteData.url,
    siteName: 'Stefan Lüllmann',
    images: [
      {
        url: `${siteData.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Stefan Lüllmann - Personal Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card Metadata
  twitter: {
    card: 'summary_large_image',
    title: 'Stefan Lüllmann | Full-Stack Software Developer',
    description:
      'Personal portfolio of Stefan Lüllmann, showcasing Full-Stack and Front-End Projects with Next.js, React, TypeScript and other languages.',
    images: [`${siteData.url}/og-image.jpg`],
  },

  // Other Metadata
  metadataBase: new URL(siteData.url),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
