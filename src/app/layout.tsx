import type { Metadata } from 'next';
import './globals.css';
import { COLOR_THEME_COOKIE, SITE_NAME } from '@/constants';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { cookies } from 'next/headers';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: `Az ${SITE_NAME} táblázatokról szól, mert szeretjük a táblázatokat, és könnyebbé akarjuk tenni az életet.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get(COLOR_THEME_COOKIE)?.value || 'light';

  return (
    <html lang="hu" className={`h-full ${theme}`}>
      <body className="flex h-full flex-col bg-white text-gray-800 dark:bg-slate-900 dark:text-slate-200">
        <Header initialTheme={theme} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
