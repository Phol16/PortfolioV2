'use client';

import React, { useState, Fragment } from 'react';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import { NavButtons } from './Navbar';

import Footer from './Footer';
import { usePathname } from 'next/navigation';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';

const NavMenu = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className='z-20'>
      <div>
        <button
          aria-label='Nav Menu'
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <HiOutlineBars3 className='text-5xl text-sky-500 hover:text-sky-800' />
        </button>
      </div>
      {
        <Transition show={isOpen} as={Fragment}>
          <Dialog onClose={() => setIsOpen(false)}>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className=' fixed inset-0 bg-gray-500 bg-opacity-75 transtion-opacity' />
            </Transition.Child>
            <div className='pointer-events-none fixed inset-y-0 right-0 z-20 flex max-w-full h-full'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto max-w-md'>
                  <div className='flex flex-col overflow-y-auto h-full bg-primaryColor dark:bg-secondaryColorL text-white dark:text-secondaryColorL py-6 shadow-xl max-w-full z-20'>
                    <div className='px-4 sm:px-6 flex flex-col justify-between h-full'>
                      <div className=' flex items-center justify-between p-2'>
                        <h1>Phol</h1>
                        <button onClick={()=>setIsOpen(false)} className='hover:scale-110 hover:text-rose-500'>
                          <IoMdClose />
                        </button>
                      </div>
                      <main>
                        {NavButtons.map((e, i) => (
                          <Link
                            href={e.redirect}
                            key={e.label}
                            className={` flex p-3 items-center ${
                              pathname === '/about' && i >= 1
                                ? 'hidden'
                                : 'flex'
                            } hover:bg-gray-800 rounded-lg`}
                          >
                            {e.label}
                          </Link>
                        ))}
                      </main>
                      <footer className='rounded-lg overflow-hidden'>
                        <Footer />
                      </footer>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition>
      }
    </main>
  );
};

export default NavMenu;
