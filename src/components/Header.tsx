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
    <header className="flex justify-between border p-8">
      <Link href="/">
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
          <h1 className="text-3xl">Excel Blog</h1>
        </div>
      </Link>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};
