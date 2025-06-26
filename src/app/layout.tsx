import type { Metadata } from "next";
import ParticleBackground from "@/components/effects/ParticleBackground";
import localFont from 'next/font/local';

import "@/styles/globals.scss";


const fontHeadings = localFont({
  src: [
    {
      path: '../assets/fonts/ibm-plex-sans-condensed-regular.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm-plex-sans-condensed-regular.woff2',
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
      path: '../assets/fonts/ibm-plex-sans-regular.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/ibm-plex-sans-regular.woff2',
      weight: '700',
      style: 'normal',
    },
  ],

  variable: '--font-text',
  display: 'swap',
})



export const metadata: Metadata = {
  title: {
    template: '%s | NordWebTec - Webstudio von Stefan Lüllmann',
    default: 'NordWebTec - Webstudio von Stefan Lüllmann',
  },
  description: 'NordWebTec - Webstudio von Stefan Lüllmann. Erkunden Sie moderne Lösungen, intelligentens Webdesign und Weblösungen die WordPress und Next.js zusammen bringen, persönlich entwickelt und designed von Stefan Lüllmann',
  authors: [{ name: 'Stefan', url: 'https://www.nordwebtec.com/'}],
  creator: 'Stefan Lüllmann',
  keywords: ['Stefan Lüllmann', 'Headless WordPress', 'WordPress', 'Next.js', 'React', 'JavaScript'],
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fontHeadings.variable} ${fontTexts.variable}`}>
      <body>
        <ParticleBackground particleCount={200} />
        {children}
      </body>
    </html>
  );
}
