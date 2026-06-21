import type { Metadata, Viewport } from 'next';
import { personalData, siteData } from '@/config/siteData';

const name: string = `Stefan Lüllmann`;
const titleTemplate: string = `%s | ${name}`;
const titleDefault: string = `${name} | Full-Stack Engineer & Technical Writer`;
const description: string = `Full-Stack Engineer & Technical Writer specializing in scalable Next.js architectures and high-performance databases. Technical Deep Dives, Playbooks and more on TypeScript, Zod, Prisma, System Design and more.`;
const thumbnailUrl: string = `${siteData.uploadThingUrl}/x81VdwhEWe9YKbHRFQuwOLusU4nrYPKeglEHaIm1DQNjRA26`;

export const metadataConfig: Metadata = {
  // Core Metadata
  title: {
    template: titleTemplate,
    default: titleDefault,
  },
  description: description,

  // Author & Keyword Metadata
  authors: [{ name: name, url: personalData.url }],
  creator: name,
  publisher: name,
  keywords: [
    name,
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
      template: titleTemplate,
      default: titleDefault,
    },
    description: description,
    url: personalData.url,
    siteName: name,
    images: [
      {
        url: thumbnailUrl,
        width: 1200,
        height: 630,
        alt: `${name} - My Personal Website. Learn more about who I am and my work.`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card Metadata
  twitter: {
    card: 'summary_large_image',
    title: {
      template: titleTemplate,
      default: titleDefault,
    },
    description: description,
    images: [thumbnailUrl],
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

  // Alternates for better Search Indexing
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
    },
  },

  applicationName: name,
};

export const viewportConfig: Viewport = {
  themeColor: '#000414',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};
