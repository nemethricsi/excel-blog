import type { Metadata } from 'next';
import './globals.css';
import { SITE_NAME } from '@/constants';

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
      <body className="leading-relaxed">{children}</body>
    </html>
  );
}
