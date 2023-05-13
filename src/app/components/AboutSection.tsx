'use client'

import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { popUp } from '@/libs/motion';
import useObserver from '@/hooks/useObserver';
import Link from 'next/link';
import Button from '../../components/Button';

const AboutSection = () => {
  const aboutRef = useRef(null);
  const detailsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutAnimation = useAnimationControls();
  const detailsAnimation = useAnimationControls();
  const skillsAnimation = useAnimationControls();

  const aboutInView = useObserver(aboutRef);
  const detailsInView = useObserver(detailsRef);
  const skillsInView = useObserver(skillsRef);

  useEffect(() => {
    aboutInView ? aboutAnimation.start(popUp.show) : null;
    detailsInView ? detailsAnimation.start(popUp.show) : null;
    skillsInView ? skillsAnimation.start(popUp.show) : null;
  }, [aboutInView, detailsInView, skillsInView]);

  return (
    <section className='bg-primaryColorL text-black px-2 py-10 dark:bg-primaryColor dark:text-white transition-colors duration-200 w-full'>
      <div id='About' className='w-fit m-auto'>
        <main className='max-w-xl md:max-w-6xl m-auto px-5 py-2 flex flex-col gap-5'>
          <motion.header
            ref={aboutRef}
            transition={popUp.duration}
            initial={popUp.hidden}
            animate={aboutAnimation}
          >
            <h1 className='text-xl md:text-3xl font-semibold'>About Me</h1>
          </motion.header>
          <main className='flex flex-wrap gap-10 justify-center text-sm md:text-base'>
            <motion.aside
              ref={detailsRef}
              transition={popUp.duration}
              initial={popUp.hidden}
              animate={detailsAnimation}
              className='max-w-md text-justify whitespace-break-spaces space-y-3 p-3'
            >
              <h1 className='text-md md:text-lg font-semibold'>
                Get to Know Me.
              </h1>
              <p>
                Greetings! My name is <b>Phol</b>. I am passionate about
                programming and developing application that solves real-world
                problems. <br />
                <br /> I am knowledgeable in using JavaScript and TypeScript,
                two highly versatile and in-demand programming language.
                JavaScript is a widely-used language for front-end web
                development, while TypeScript adds type checking and other
                features to make it even more powerful. I also have some basic
                knowledge of C#, which is commonly used for building Windows
                application and back-end services. <br />
                <br /> I am excited to continue honing my skills and exploring
                new ways to use technology to make a difference in the world.
              </p>
            </motion.aside>
            <motion.aside
              ref={skillsRef}
              transition={popUp.duration}
              initial={popUp.hidden}
              animate={skillsAnimation}
              className='max-w-md text-justify self-center whitespace-break-spaces p-3 flex flex-col gap-5'
            >
              <h1 className='text-md md:text-lg font-semibold'>Skills</h1>
              <h2 className=' font-medium'>Programming Language</h2>
              <Image
                src={`https://skillicons.dev/icons?i=git,html,css,js,ts,cs&perline=3`}
                alt='Icon'
                width={150}
                height={0}
                className='h-auto'
              />
              <Link
                aria-label='Learn More'
                href={'/about'}
              >
                <Button>View More</Button>
              </Link>
            </motion.aside>
          </main>
        </main>
      </div>
    </section>
  );
};

export default AboutSection;
