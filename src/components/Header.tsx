'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Sun, Moon } from 'react-feather';
import Cookie from 'js-cookie';
import { COLOR_THEME_COOKIE } from '@/constants';

export const Header = ({ initialTheme }: { initialTheme: string }) => {
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    Cookie.set(COLOR_THEME_COOKIE, newTheme, { expires: 1000 });

    const root = document.documentElement;
    root.classList.remove(theme);
    root.classList.add(newTheme);
  };

  return (
    <header className="sticky top-0 flex items-center justify-between gap-8 bg-white p-8 shadow dark:bg-slate-900 dark:shadow-slate-400">
      <Link href="/" className="flex-shrink-0 flex-wrap">
        <div className="flex items-center gap-2">
          <div className="grid place-content-center rounded-full p-3 dark:bg-slate-50">
            <Image
              src="/excel-logo.svg"
              alt="Excel Logo"
              className="-translate-x-1"
              width={40}
              height={24}
              priority
            />
          </div>
          <h1 className="hidden text-3xl sm:block">Excel Blog</h1>
        </div>
      </Link>
      <div className="flex items-center gap-12">
        <ul className="gap=3 flex flex-wrap items-center gap-8 text-xl font-extrabold tracking-wider">
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/fuggvenyek">Függvények</Link>
          </li>
        </ul>
        <button onClick={toggleTheme}>
          {theme === 'light' ? <Sun /> : <Moon />}
        </button>
      </div>
    </header>
  );
};
