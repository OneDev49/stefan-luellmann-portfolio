import type { Metadata } from 'next';
import { personalData, siteData } from '@/config/siteData';

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

export const metadataConfig: Metadata = {
  // Core Metadata
  title: {
    template: '%s | Stefan Lüllmann',
    default: 'Stefan Lüllmann | Full-Stack Engineer & Technical Writer',
  },
  description:
    'Full-Stack Engineer & Technical Writer specializing in scalable Next.js architectures and high-performance databases. Technical Deep Dives, Playbooks and more on TypeScript, Zod, Prisma, System Design and more.',

  // Author & Keyword Metadata
  authors: [{ name: 'Stefan Lüllmann', url: personalData.url }],
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
    title: {
      template: '%s | Stefan Lüllmann',
      default: 'Stefan Lüllmann | Full-Stack Engineer & Technical Writer',
    },
    description:
      'Full-Stack Engineer & Technical Writer specializing in scalable Next.js architectures and high-performance databases. Technical Deep Dives, Playbooks and more on TypeScript, Zod, Prisma, System Design and more.',
    url: personalData.url,
    siteName: 'Stefan Lüllmann',
    images: [
      {
        url: `${siteData.uploadThingUrl}/x81VdwhEWe9YKbHRFQuwOLusU4nrYPKeglEHaIm1DQNjRA26`,
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
    title: {
      template: '%s | Stefan Lüllmann',
      default: 'Stefan Lüllmann | Full-Stack Engineer & Technical Writer',
    },
    description:
      'Full-Stack Engineer & Technical Writer specializing in scalable Next.js architectures and high-performance databases. Technical Deep Dives, Playbooks and more on TypeScript, Zod, Prisma, System Design and more.',
    images: [
      `${siteData.uploadThingUrl}/x81VdwhEWe9YKbHRFQuwOLusU4nrYPKeglEHaIm1DQNjRA26`,
    ],
  },

  // Other Metadata
  metadataBase: new URL(personalData.url),
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
