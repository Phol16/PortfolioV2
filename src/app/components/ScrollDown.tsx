import React from 'react';
import { AiFillDownCircle } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { opacity } from '@/libs/motion';

const ScrollDown = () => {
  return (
    <a aria-label='Project Button' href='#Project'>
      <motion.div
        variants={opacity}
        initial={opacity.hidden}
        animate={opacity.show}
        className='text-sm absolute bottom-4 left-0 flex flex-col justify-center items-center animate-bounce'
      >
        <h1 className='relative rotate-[-90deg] -top-8 cursor-pointer'>
          Scroll Down
        </h1>
        <AiFillDownCircle className='text-secondaryColorL dark:text-secondaryColor' />
      </motion.div>
    </a>
  );
};

export default ScrollDown;
