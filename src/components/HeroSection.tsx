'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import avatar from '../../public/avatar.svg';
import Image from 'next/image';
import ScrollDown from './ScrollDown';
import { opacity } from '@/libs/motion';

type timeOutIDs = ReturnType<typeof setTimeout>;

const HeroSection = () => {
  const [displayInfo, setDisplayInfo] = useState<string[]>([]);
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const currIndex = useRef(0);
  const currChar = useRef(0);

  useEffect(() => {
    const detailInfo: string[] = [
      'Software Developer',
      'Full-Stack Developer',
      'Movie Enthusiast',
    ];
    let dispalyTimeoutId: timeOutIDs;
    let delayCursorId: timeOutIDs;

    detailInfo.map((element, index) => {
      //will restart to the begining if the current index is at the last index
      if (currIndex.current === detailInfo.length) {
        currIndex.current = 0;
      }

      if (currIndex.current === index) {
        //determine which mode will be activated
        if (currChar.current === element.length) {
          //will change the current index of the detailsInfo to be display
          if (deleteMode && currChar.current === element.length) {
            currChar.current = 0;
            setDeleteMode(!deleteMode);
            currIndex.current = currIndex.current + 1;
          }

          //added delay before changing delete mode
          delayCursorId = setTimeout(() => {
            setDeleteMode(!deleteMode);
            currChar.current = 0;
          }, 500);
        } else {
          //displaying the information
          dispalyTimeoutId = setTimeout(() => {
            if (deleteMode) {
              setDisplayInfo(displayInfo.slice(0, displayInfo.length - 1));
              currChar.current = currChar.current + 1;
            } else {
              setDisplayInfo([
                ...displayInfo,
                element.charAt(currChar.current),
              ]);
              currChar.current = currChar.current + 1;
            }
          }, 100);
        }
      }
    });

    //cleanup function
    return () => {
      clearTimeout(delayCursorId);
      clearTimeout(dispalyTimeoutId);
    };
  }, [displayInfo, deleteMode]);

  return (
    <div className='relative p-1 w-full h-[calc(95svh_-_5rem)] flex flex-col  justify-center items-center bg-primaryColorL text-black dark:bg-primaryColor dark:text-white transition duration-200'>
      <motion.section
        variants={opacity}
        initial={opacity.hidden}
        animate={opacity.show}
        className=' space-y-3'
      >
        <header className='text-3xl md:text-5xl 2xl:text-6xl font-bold flex flex-col'>
          <a href='#About'  className='self-end hover:-translate-y-0.5'>
            <Image src={avatar} alt='Photo' className='w-[70px]'/>
          </a>
          <h1>
            Hi! My name is{' '}
            <span className='text-secondaryColorL dark:text-secondaryColor'>
              Phol
            </span>
          </h1>
        </header>
        <main className='max-w-xs md:max-w-md 2xl:max-w-lg flex flex-col gap-2 px-5 text-xs md:text-base'>
          <h2 className='font-medium text-secondaryColorL dark:text-secondaryColor'>
            {displayInfo}
            <span className='dark:text-white text-black'>|</span>
          </h2>
          <p>
            I`m a MERN stack developer. I`m knowledgeable in creating front-end
            and back-end and I`m eager to learn more advance technologies
          </p>
        </main>
      </motion.section>
      <ScrollDown />
    </div>
  );
};

export default HeroSection;
