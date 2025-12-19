import {
  fontHeadings,
  fontTexts,
  metadataConfig,
} from './_components/config/layoutConfig';
import { ModalProvider } from '@/context/ModalContext';

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
        <ModalProvider>
          <HeaderSection />
          <main>{children}</main>
          <FooterSection />
        </ModalProvider>
      </body>
    </html>
  );
}
