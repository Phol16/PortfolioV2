'use client';

import React, { useState } from 'react';
import { FaMoon, FaSun, FaHome } from 'react-icons/fa';

import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store/store';

import { useDispatch } from 'react-redux';
import { storeDarkMode } from '@/libs/store/features/darkModeSlice';

const FixedNav = () => {
  const darkModeData = useSelector(
    (state: RootState) => state.darkModeData.darkMode
  );
  const homeData = useSelector((state: RootState) => state.homeData.inView);

  const dispatch = useDispatch();

  return (
    <div className='fixed bottom-10 right-7 flex flex-col items-center justify-center gap-5 text-3xl z-10 text-black dark:text-white transition duration-200'>
      <a href='#Home'>
        <FaHome className={`${homeData ? 'flex' : 'hidden'} hover:scale-110`} />
      </a>
      <button
        onClick={() => {
          dispatch(storeDarkMode(!darkModeData));
        }}
        className={`transition duration-200`}
      >
        {darkModeData ? (
          <FaSun className='hover:scale-110' />
        ) : (
          <FaMoon className='hover:scale-110' />
        )}
      </button>
    </div>
  );
};

export default FixedNav;
