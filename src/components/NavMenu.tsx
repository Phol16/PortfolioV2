'use client';

import React, { useState } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { RxCross2 } from 'react-icons/rx';
import { NavButtons } from './Navbar';

import Footer from './Footer';

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className='z-20'>
      <div>
        <button
          onClick={() => {
            setOpen(true);
          }}
        >
          <HiOutlineBars3 className='text-5xl text-sky-500 hover:text-sky-800' />
        </button>
      </div>
      {open && (
        <main className='fixed top-0 left-0 w-full h-full flex justify-end'>
          <div
            onClick={() => {
              setOpen(false);
            }}
            className='fixed w-full h-full bg-black/60 -z-10'
          ></div>
          <nav className='bg-secondaryColorL text-black dark:bg-secondaryColor dark:text-white z-10 w-[90%] h-full sm:w-3/6 flex flex-col justify-between transition duration-200'>
            <header className='flex items-center text-xl w-full p-5 justify-between'>
              <h1 className=' font-semibold pl-5 '>Phol</h1>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                className='hover:text-red-500 hover:-translate-y-0.5'
              >
                <RxCross2 />
              </button>
            </header>
            <main className='flex flex-col gap-5 items-center z-50'>
              {NavButtons.map((e) => (
                <a
                  key={e.label}
                  href={e.redirect}
                  className=' p-4 hover:text-white dark:hover:text-black w-full flex flex-col items-center'
                >
                  <button className='flex items-center w-60 gap-1 px-5 p-2 text-xl font-medium'>
                    {e.icon}
                    {e.label}
                  </button>
                </a>
              ))}
            </main>
            <footer className='w-full'>
              <Footer />
            </footer>
          </nav>
        </main>
      )}
    </main>
  );
};

export default NavMenu;
