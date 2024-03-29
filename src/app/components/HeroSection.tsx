'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import ScrollDown from './ScrollDown';
import { opacity, popUp } from '@/libs/motion';
import Lottie from 'lottie-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store/store';

import HeroAnimation from '../../../public/assets/lightRobot.json';
import PeelMe from '@/components/PeelMe';

export const detailInfo: string[] = [
  ' Front-End Developer',
  ' Back-End Developer',
  ' Movie Enthusiast',
];

const HeroSection = () => {
  const [displayInfo, setDisplayInfo] = useState<string[]>([]);
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const [hoverRobot, setHoverRobot] = useState<boolean>(false);
  const currIndex = useRef(0);
  const currChar = useRef(0);

  const darkModeData = useSelector((state: RootState) => state.darkModeData.darkMode);

  useEffect(() => {
    let dispalyTimeoutId: number;
    let delayCursorId: number;

    if (!deleteMode) {
      //displayMode
      dispalyTimeoutId = window.setTimeout(() => {
        setDisplayInfo([
          ...displayInfo,
          detailInfo[currIndex.current].charAt(currChar.current),
        ]);
      }, 100);
    } else {
      //DeleteMode
      dispalyTimeoutId = window.setTimeout(() => {
        setDisplayInfo([
          detailInfo[currIndex.current].slice(
            0,
            detailInfo[currIndex.current].length - currChar.current
          ),
        ]);
      }, 100);
    }

    //cleanup function
    return () => {
      clearTimeout(delayCursorId);
      clearTimeout(dispalyTimeoutId);

      currChar.current += 1;

      if (currChar.current > detailInfo[currIndex.current]?.length && deleteMode) {
        //switching between arrays.
        setDeleteMode(false);
        currIndex.current += 1;
        currChar.current = 0;
      }
      if (currChar.current > detailInfo[currIndex.current]?.length && !deleteMode) {
        //changing to deleteMode with delay
        delayCursorId = window.setTimeout(() => {
          currChar.current = 0;
          setDeleteMode(true);
        }, 300);
      }

      //reverting to the start of the array to make it loop
      currIndex.current > detailInfo.length - 1
        ? ((currIndex.current = 0), (currChar.current = 0))
        : null;
    };
  }, [displayInfo, deleteMode, currIndex.current]);

  return (
    <div className='relative bg-gradient-to-br from-[#6bb9eb] from-5% via-primaryColorL via-40% to-primaryColorL to-[90%] text-black dark:bg-gradient-to-br dark:from-[#003841] dark:from-5% dark:via-primaryColor dark:via-40% dark:to-primaryColor dark:to-[90%] dark:text-white transition duration-200'>
      <div className='p-1 w-full h-[95svh] flex flex-col md:flex-row md:max-w-[870px] justify-center items-center m-auto'>
        <motion.section
          variants={opacity}
          transition={{ duration: 0.8 }}
          initial={opacity.hidden}
          animate={opacity.show}
          className=' space-y-3 mt-28 md:mt-0 md:flex-1 self-center'
        >
          <header className='text-3xl md:text-5xl 2xl:text-6xl font-bold flex flex-col w-fit m-auto'>
            <a
              aria-label='About Button'
              href='#About'
              className='relative self-end mr-4 md:mr-0 hover:-translate-y-0.5 flex justify-center items-center'
            >
              {hoverRobot && (
                <motion.p
                  initial={popUp.hidden}
                  animate={popUp.show}
                  className='absolute text-xs lg:text-sm -top-8 hidden sm:inline-block px-4 py-2 bg-primaryColor rounded-full text-primaryColorL dark:bg-primaryColorL dark:text-primaryColor w-[169px] lg:w-[210px] text-center'
                >
                  Hey! Nice to meet you
                </motion.p>
              )}
              <Lottie
                onMouseOver={() => setHoverRobot(true)}
                onMouseOut={() => setHoverRobot(false)}
                animationData={HeroAnimation}
                className='w-[50px] md:w-[70px] h-auto backShadow'
              />
            </a>
            <h1 className='text-center '>
              Hi! My name is{' '}
              <span className='backShadow text-secondaryColorL dark:text-secondaryColor transition-colors duration-[1000]'>
                Phol
              </span>
            </h1>
          </header>
          <main className=' max-w-xs md:max-w-md 2xl:max-w-lg flex flex-col gap-2 px-5 text-xs md:text-base m-auto'>
            <h2 className=' font-semibold text-secondaryColorL dark:text-secondaryColor transition duration-200'>
              {displayInfo}
              <span className='dark:text-white text-black '>|</span>
            </h2>
            <p>
              I`m knowledgeable in creating front-end and back-end application and I`m
              eager to learn more advance technologies
            </p>
          </main>
        </motion.section>
        <motion.section
          initial={popUp.hidden}
          animate={popUp.show}
          transition={{ duration: 0.8 }}
          className='md:flex-[0.5] mt-5'
        >
          <PeelMe />
        </motion.section>
      </div>
      <ScrollDown />
    </div>
  );
};

export default HeroSection;
