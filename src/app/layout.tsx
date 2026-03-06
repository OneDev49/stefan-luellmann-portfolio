import {
  fontHeadings,
  fontMono,
  fontTexts,
  metadataConfig,
  viewportConfig,
} from './_components/config/layoutConfig';
import { MainProvider } from '@/providers/MainProvider';

import './globals.css';
import FooterSection from '@/components/layout/Footer';
import HeaderSection from '@/components/layout/Header';

export const metadata = metadataConfig;
export const viewport = viewportConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${fontHeadings.variable} ${fontTexts.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <MainProvider>
          <HeaderSection />
          <main>{children}</main>
          <FooterSection />
        </MainProvider>
      </body>
    </html>
  );
}
