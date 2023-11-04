import type { Metadata } from 'next';
import './globals.css';
import { SITE_NAME } from '@/constants';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: `Az ${SITE_NAME} táblázatokról szól, mert szeretjük a táblázatokat, és könnyebbé akarjuk tenni az életet.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" className="h-full">
      <body className="flex h-full flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
