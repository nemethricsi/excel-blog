'use client';

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
      <h1>Excel Blog</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};
