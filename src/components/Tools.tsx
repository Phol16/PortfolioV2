'use client';

import useObserver from '@/hooks/useObserver';
import { popUp } from '@/libs/motion';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Tools = ({ title, icon }: { title: string; icon: string }) => {
  const ToolsRef = useRef(null);
  const ToolsAnimation = useAnimationControls();

  const ToolsInView = useObserver(ToolsRef);

  useEffect(() => {
    ToolsInView ? ToolsAnimation.start(popUp.show) : null;
  }, [ToolsInView]);
  return (
    <motion.div ref={ToolsRef} initial={popUp.hidden} animate={ToolsAnimation}>
      <Image
        key={title}
        src={`https://skillicons.dev/icons?i=${icon}`}
        alt={'skillIcon'}
        width={50}
        height={0}
        className=' max-w-[250px] h-auto'
        title={title}
      />
    </motion.div>
  );
};

export default Tools;
