import type { Metadata } from 'next';
import { Karla } from 'next/font/google';
import './globals.css';
import { SITE_NAME } from '@/constants';

const karla = Karla({
  subsets: ['latin'],
});

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
    <html lang="en">
      <body className={`leading-relaxed ${karla.className}`}>
        {children}
      </body>
    </html>
  );
}
