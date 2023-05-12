'use client';

import '../globals.css';
import { Poppins } from 'next/font/google';

import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store/store';

const poppins = Poppins({
  weight: ['200', '300', '400', '700', '800'],
  subsets: ['latin'],
});

export default function AboutPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const darkModeData = useSelector(
    (state: RootState) => state.darkModeData.darkMode
  );

  return <main className={`${darkModeData ? 'dark' : ''}`}>{children}</main>;
}
