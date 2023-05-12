'use client';

import React, { ReactElement, useEffect, useRef } from 'react';
import { CgProfile, CgCodeSlash, CgLaptop } from 'react-icons/cg';
import { AiOutlineFileProtect } from 'react-icons/ai';
import { motion } from 'framer-motion';

import NavMenu from './NavMenu';
import FixedNav from './FixedNav';

import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store/store';

import { useDispatch } from 'react-redux';
import { storeHomeMode } from '@/libs/store/features/homeSlice';

import { popDown } from '@/libs/motion';
import useObserver from '@/hooks/useObserver';
import Button from './Button';
import { usePathname, useRouter } from 'next/navigation';

type NavButtons = {
  label: string;
  redirect: string;
  icon?: ReactElement<any, any>;
};

export const NavButtons: NavButtons[] = [
  {
    label: 'CV/Resume',
    redirect: 'https://jmp.sh/QytJ74Fy',
    icon: <AiOutlineFileProtect />,
  },
  {
    label: 'About',
    redirect: '#About',
    icon: <CgProfile />,
  },
  {
    label: 'Projects',
    redirect: '#Project',
    icon: <CgCodeSlash />,
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const darkModeData = useSelector(
    (state: RootState) => state.darkModeData.darkMode
  );

  const navRef = useRef(null);
  const dispatch = useDispatch();

  const navInView = useObserver(navRef);

  useEffect(() => {
    !navInView ? dispatch(storeHomeMode(true)) : dispatch(storeHomeMode(false));
  }, [navInView]);

  return (
    <div className={darkModeData ? 'dark' : ''}>
      <div
        id='Home'
        ref={navRef}
        className={`dark:bg-primaryColor bg-primaryColorL w-full py-4 px-8 flex items-center justify-between transition-colors duration-200 z-10`}
      >
        <CgLaptop className='text-6xl dark:text-white text-black transition-colors duration-200' />
        <motion.nav
          variants={popDown}
          transition={{ duration: 0.8 }}
          initial={popDown.hidden}
          animate={popDown.show}
          className='gap-5 text-lg font-semibold hidden lg:flex'
        >
          {NavButtons.map((e,i) => (
            <a aria-label={`${e.label}`} href={e.redirect} key={e.label} className={`${pathname === '/about' && i >= 1 ? 'hidden': 'flex'}`}>
              <Button>
                {e.icon}
                {e.label}
              </Button>
            </a>
          ))}
        </motion.nav>
        <motion.nav
          variants={popDown}
          initial={popDown.hidden}
          animate={popDown.show}
          className='flex lg:hidden'
        >
          <NavMenu />
        </motion.nav>
        <FixedNav />
      </div>
    </div>
  );
};

export default Navbar;
