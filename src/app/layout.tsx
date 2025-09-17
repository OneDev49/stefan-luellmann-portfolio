import ParticleBackground from '@/components/effects/ParticleBackground';
import {
  fontHeadings,
  fontTexts,
  metadataConfig,
} from './_components/config/layoutConfig';

import '@/styles/globals.scss';
import FooterSection from '@/components/layout/Footer';
import HeaderSection from '@/components/layout/Header';

export const metadata = metadataConfig;

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
