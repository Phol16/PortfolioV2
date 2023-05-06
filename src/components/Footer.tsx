'use client'

import React, { useEffect, useRef } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaDiscord } from 'react-icons/fa';
import { motion, useAnimationControls } from 'framer-motion';
import useObserver from '@/hooks/useObserver';
import { popUp } from '@/libs/motion';
import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store/store';

const currDate: number = new Date().getFullYear();

interface Accounts {
  label: string;
  icon: React.ReactElement;
  redirect?: string;
}

const accounts: Accounts[] = [
  {
    label: 'Github',
    icon: <AiFillGithub />,
    redirect: 'https://github.com/Phol16',
  },
  {
    label: 'LinkedIn',
    icon: <AiFillLinkedin />,
    redirect: 'https://www.linkedin.com/in/pholibert-lim-37a51323b/',
  },
  { label: 'Discord', icon: <FaDiscord /> },
];

const contactInfo: Record<string, string>[] = [
  { details: '09060447603' },
  { details: 'pholibertlim@gmail.com' },
];

const Footer = () => {
  const darkModeData = useSelector(
    (state: RootState) => state.darkModeData.darkMode
  );

  const footerRef = useRef(null);
  const footerAnimation = useAnimationControls();

  const footerInView = useObserver(footerRef);

  useEffect(() => {
    footerInView ? footerAnimation.start(popUp.show) : null;
  }, [footerInView]);

  return (
    <div className={darkModeData ? 'dark' : ''}>
    <footer className='bg-primaryColorL text-black dark:bg-primaryColor dark:text-white transition p-10 duration-200 border-t-[2px] border-primaryColor dark:border-primaryColorL'>
      <motion.section
        ref={footerRef}
        initial={popUp.hidden}
        animate={footerAnimation}
        className='flex flex-col items-center gap-8'
      >
        <main className='flex gap-5 text-3xl'>
          {accounts.map((e) => (
            <a
              aria-label={`${e.label}`}
              key={e.label}
              target='_blank'
              href={e.redirect}
              className='hover:scale-110'
            >
              <div title={e.label}>{e.icon}</div>
            </a>
          ))}
        </main>
        <aside className='flex flex-col'>
          {contactInfo.map((e) => (
            <div
              key={e.details}
              className='flex gap-4 justify-center items-center'
            >
              <p className='font-medium'> {e.details}</p>
            </div>
          ))}
        </aside>
        <h1 className=' font-semibold text-sm'>© Phol {currDate}</h1>
      </motion.section>
    </footer>
    </div>
  );
};

export default Footer;
