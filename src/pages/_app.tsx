import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const activeTheme = stored || 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(activeTheme);
    setTheme(activeTheme);
  }, []);

  return <Component {...pageProps} />;
}
