import type { Metadata } from 'next';
import './globals.css';
import { COLOR_THEME_COOKIE, SITE_NAME } from '@/constants';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { cookies } from 'next/headers';
import { Karla } from 'next/font/google';

const mainFont = Karla({
  subsets: ['latin-ext'],
  weight: 'variable',
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
  const theme = cookies().get(COLOR_THEME_COOKIE)?.value || 'light';

  return (
    <html lang="hu" className={`h-full ${theme} ${mainFont.className}`}>
      <body className="flex h-full flex-col bg-neutral-100 text-gray-800 dark:bg-slate-800 dark:text-slate-200">
        <Header initialTheme={theme} />
        <main className="p-4 md:p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
