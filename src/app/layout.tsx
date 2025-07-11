import type { Metadata } from 'next';
import ParticleBackground from '@/components/effects/ParticleBackground';
import localFont from 'next/font/local';

import '@/styles/globals.scss';
import FooterSection from '@/components/layout/Footer';
import HeaderSection from '@/components/layout/Header';

const fontHeadings = localFont({
  src: [
    {
      path: '../assets/fonts/ibm-plex-sans-condensed-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm-plex-sans-condensed-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-heading',
  display: 'swap',
});

const fontTexts = localFont({
  src: [
    {
      path: '../assets/fonts/ibm-plex-sans-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm-plex-sans-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-text',
  display: 'swap',
});

const siteUrl = 'https://www.nordwebtec.com';

export const metadata: Metadata = {
  // Core Metadata
  title: {
    template: '%s | Stefan Lüllmann',
    default: 'Stefan Lüllmann | Full-Stack Software Developer',
  },
  description:
    'The personal portfolio of Stefan Lüllmann, a Full-Stack Developer specializing in Next.js, TypeScript and modern web architectures. Explore my Projects and Case Studies!',

  // Author & Keyword Metadata
  authors: [{ name: 'Stefan Lüllmann', url: siteUrl }],
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
      'The personal portfolio of Stefan Lüllmann, specializing in modern web development.',
    url: siteUrl,
    siteName: 'Stefan Lüllmann',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
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
      'Personal portfolio showcasing Full-Stack Projects with Next.js, React and TypeScript.',
    images: [`${siteUrl}/og-image.jpg`],
  },

  // Other Metadata
  metadataBase: new URL(siteUrl),
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${fontHeadings.variable} ${fontTexts.variable}`}
    >
      <body>
        <HeaderSection />
        <ParticleBackground particleCount={200} />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
