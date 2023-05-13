'use client';

import useObserver from '@/hooks/useObserver';
import { popUp } from '@/libs/motion';
import { useAnimationControls } from 'framer-motion';
import React, { ReactElement, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  color: string;
  icon: ReactElement;
};

const ProgrammingSkill = ({ title, color, icon }: Props) => {
  const progSkillRef = useRef(null);
  const progSkillAnimation = useAnimationControls();

  const progSkillInView = useObserver(progSkillRef);

  useEffect(() => {
    progSkillInView ? progSkillAnimation.start(popUp.show) : null;
  }, [progSkillInView]);

  return (
    <motion.div
      ref={progSkillRef}
      initial={popUp.hidden}
      animate={progSkillAnimation}
    >
      <main
        className={`${color} hover:text-white flex flex-col justify-center items-center gap-5 border border-secondaryColorL dark:secondaryColor rounded-lg p-5 w-[130px] hover:scale-110 cursor-pointer transition-transform duration-200`}
      >
        <h1 className=' font-semibold'>{title}</h1>
        <section className='text-4xl'>{icon}</section>
      </main>
    </motion.div>
  );
};

export default ProgrammingSkill;
