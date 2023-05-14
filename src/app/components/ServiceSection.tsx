import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useAnimationControls } from 'framer-motion';

import { popUp } from '@/libs/motion';
import useObserver from '@/hooks/useObserver';

type Service = {
  label: string;
  description: string;
  icons?: string;
};

export const service: Service[] = [
  {
    label: 'Front-End Development',
    description: `I'm knowledgeable in Developing front-end web application using:`,
    icons: 'html,css,js,ts,react,nextjs,vite,tailwind,redux',
  },
  {
    label: 'Back-End Development',
    description: `I'm knowledgeable in Developing back-end web application using:`,
    icons: 'git,js,ts,nextjs,express,nodejs,mongodb,postman,prisma',
  },
];

export const ServiceDetails = ({ details }: { details: Service }) => {
  const elemRef = useRef(null);
  const animation = useAnimationControls();

  const inView = useObserver(elemRef);

  useEffect(() => {
    if (inView) {
      animation.start(popUp.show);
    }
  }, [inView]);

  return (
    <motion.main
      ref={elemRef}
      transition={popUp.duration}
      initial={popUp.hidden}
      animate={animation}
      key={details.label}
      className='border-2 p-5 border-secondaryColorL dark:border-secondaryColor flex flex-col gap-4 rounded-lg max-w-xs'
    >
      <h1 className='font-semibold text-md text-center Slabel'>
        {details.label}
      </h1>
      <p className='font-medium Sdesc text-sm'>{details.description}</p>
      <Image
        src={`https://skillicons.dev/icons?i=${details.icons}`}
        alt={'skillIcon'}
        width={300}
        height={0}
        className=' max-w-[250px] h-auto m-auto'
      />
    </motion.main>
  );
};

const ServiceSection = () => {
  return (
    <div className='bg-primaryColorL text-black dark:bg-primaryColor dark:text-white transition duration-200 px-10 py-16'>
      <main className='flex gap-10 flex-wrap justify-center'>
        {service.map((e) => (
          <ServiceDetails details={e} key={e.label}/>
        ))}
      </main>
    </div>
  );
};

export default ServiceSection;
