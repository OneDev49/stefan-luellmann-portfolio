import ParticleBackground from '@/components/effects/ParticleBackground';
import {
  fontHeadings,
  fontTexts,
  metadataConfig,
} from './_components/config/layoutConfig';

import '@/styles/globals.scss';
import FooterSection from '@/components/layout/Footer';
import HeaderSection from '@/components/layout/Header';
import { ModalProvider } from '@/context/ModalContext';

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
        <ModalProvider>
          <HeaderSection />
          <ParticleBackground particleCount={150} />
          {children}
          <FooterSection />
        </ModalProvider>
      </body>
    </html>
  );
}
