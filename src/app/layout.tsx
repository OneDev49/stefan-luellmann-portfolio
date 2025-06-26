import type { Metadata } from "next";
import "@/styles/globals.css";
import ParticleBackground from "@/components/effects/ParticleBackground";



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
    <html lang="de">
      <body>
        <ParticleBackground particleCount={200} />
        {children}
      </body>
    </html>
  );
}
