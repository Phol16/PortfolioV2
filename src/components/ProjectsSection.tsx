'use client';

import useObserver from '@/hooks/useObserver';
import { popUp, slideFromLeft, slideFromRight } from '@/libs/motion';
import { useAnimationControls } from 'framer-motion';
import Image from 'next/image';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaProjectDiagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface ProjectsInfo {
  title: string;
  description: string;
  image: string;
  tech: string;
  live: string;
  source: string;
}

interface redirects {
  icon: ReactElement;
  toolTip: string;
  redirect: string;
}

const projectsInfo: ProjectsInfo[] = [
  {
    title: 'Movie Notepad',
    description:
      'A fullstack application developed using MERN stack. It is an application where user can add movie or series by providing details/information about a specific movie. It is also an application where user can add movies to their watchlist and add notes to a specific movie in the watchlist.',
    image:
      'https://res.cloudinary.com/dy23rmhmq/image/upload/v1682244926/Portfolio/movienotepad_znvjx1.png',
    tech: 'MongoDb ExpressJS NodeJS ReactJS',
    live: 'https://movienotepadclient.onrender.com/',
    source: 'https://github.com/Phol16/MovieNotepadV2',
  },
  {
    title: 'Mini Messenger',
    tech: 'MongoDb ExpressJS SocketIO ReactJs',
    description: `A fullstack application developed using MERN stack with socketIO. It is a simple application that almost look like messenger where user can communicate with one another, it is a very simple application that uses socket io for realtime communication`,
    image:
      'https://res.cloudinary.com/dy23rmhmq/image/upload/v1679321037/Portfolio/Untitled_b3kuhi.png',
    live: 'https://minimessenger.onrender.com/',
    source: 'https://github.com/Phol16/ChatApp',
  },
  {
    title: 'Pokemon Pokedex',
    tech: 'NextJS TailwindCSS',
    description: `A Web-Based application developed using Next JS.
    It is an application the that display a list of pokemons.
    It has a feature where you can capture the pokemon.`,
    image:
      'https://res.cloudinary.com/dy23rmhmq/image/upload/v1683038461/Portfolio/pokedex_opbsp7.png',
    live: 'https://pokemonpokedex-nu.vercel.app/',
    source: 'https://github.com/Phol16/PokemonV2',
  },
  {
    title: 'Personal Portfolio',
    tech: 'ReactJS HTML CSS JS TailwindCSS',
    description: `A Web-Based application developed using ReactJS.
    The current website is this application.
    It is an application that shows the details and the projects`,
    image:
      'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680693756/Portfolio/portfolio_ofjuxl.png',
    live: 'https://phol.vercel.app/',
    source: 'https://github.com/Phol16/PortfolioV2',
  },
  {
    title: 'Eatstagram',
    tech: 'MongoDB ExpressJS ReactJS NodeJS Auth0',
    description: `A fullstack application developed using MERN stack.
    It is an application developed by UpliftCodeCamp Batch12.
    It is an application where you can upload photos of your favorite foods, you can interact to other photos that was uploaded by other users as well.`,
    image:
      'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680420740/Portfolio/eatstagram_o3q32x.png',
    live: 'https://proj6-fe.onrender.com/',
    source: 'https://github.com/Phol16',
  },
  {
    title: 'Weather App',
    tech: 'ReactJS RestfulAPI ',
    description: `A Web-Based application developed using ReactJS.
    It is an application where it shows information about the weather in zamboanga city.
    It is a simple application.`,
    image:
      'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680420728/Portfolio/wheaterApp_lehxrc.png',
    live: 'https://weather-app-7009.onrender.com/',
    source: 'https://github.com/Phol16/Weather-App',
  },
];
export const ProjectButton = ({
  live,
  source,
}: {
  live: string;
  source: string;
}) => {
  const [active, setActive] = useState('');

  const projectButtons: redirects[] = [
    {
      icon: <FaProjectDiagram />,
      toolTip: 'View Live',
      redirect: live,
    },
    {
      icon: <AiFillGithub />,
      toolTip: 'Source Code',
      redirect: source,
    },
  ];

  return (
    <section className='self-center flex gap-4 text-xl md:text-2xl'>
      {projectButtons.map((element) => (
        <section key={element.toolTip} className='relative flex justify-center'>
          {active === element.toolTip && (
            <p className='absolute text-sm bg-secondaryColorL dark:bg-secondaryColor text-white dark:text-black -top-12 w-32 p-2 text-center rounded-full font-semibold'>
              {element.toolTip}
            </p>
          )}
          <a
            href={element.redirect}
            target='_blank'
            title={element.toolTip}
            onMouseOver={() => {
              setActive(element.toolTip);
            }}
            onMouseOut={() => {
              setActive('');
            }}
          >
            <button aria-label={`${element.toolTip}`}>{element.icon}</button>
          </a>
        </section>
      ))}
    </section>
  );
};

export const ProjectDetails = ({
  details,
  index,
}: {
  details: ProjectsInfo;
  index: number;
}) => {
  const projDetailsRef = useRef(null);
  const projImageRef = useRef(null);
  const projDetailsAnimation = useAnimationControls();
  const projImageAnimation = useAnimationControls();

  const projDetailsInView = useObserver(projDetailsRef);
  const projImageInView = useObserver(projImageRef);

  useEffect(() => {
    projDetailsInView && index % 2 === 0
      ? projDetailsAnimation.start(slideFromLeft.show)
      : null;
    projDetailsInView && index % 2 !== 0
      ? projDetailsAnimation.start(slideFromRight.show)
      : null;
    projImageInView && index % 2 === 0
      ? projImageAnimation.start(slideFromRight.show)
      : null;
    projImageInView && index % 2 !== 0
      ? projImageAnimation.start(slideFromLeft.show)
      : null;
  }, [projDetailsInView, projImageInView]);

  return (
    <div className='p-5 m-auto'>
      <section
        className={`w-fit group flex flex-wrap items-center gap-5 justify-center ${
          index % 2 === 0 ? 'lg:flex-row-reverse' : ''
        }`}
      >
        <motion.aside
          ref={projImageRef}
          initial={
            index % 2 === 0 ? slideFromRight.hidden : slideFromLeft.hidden
          }
          animate={projImageAnimation}
        >
          <Image
            src={details.image}
            alt='ProjPhoto'
            width={500}
            height={0}
            className='h-auto aspect-video rounded-md border-[2px] border-primaryColorL dark:border-primaryColor group-hover:border-secondaryColorL dark:group-hover:bg-secondaryColor group-hover:scale-105 transition duration-200'
          />
        </motion.aside>
        <motion.aside
          ref={projDetailsRef}
          initial={
            index % 2 === 0 ? slideFromLeft.hidden : slideFromRight.hidden
          }
          animate={projDetailsAnimation}
          className='max-w-md p-5 flex flex-col gap-2 shadow-md rounded-lg shadow-black dark:shadow-white group-hover:shadow-secondaryColorL dark:group-hover:shadow-secondaryColor'
        >
          <ProjectButton live={details.live} source={details.source} />
          <div className='font-semibold text-md md:text-xl text-center'>
            {details.title === 'Movie Notepad' ? (
              <h1>
                Movie <span className='text-red-600'>Notepad</span>
              </h1>
            ) : details.title === 'Mini Messenger' ? (
              <h1>
                Mini <span className='messenger'>Messenger</span>
              </h1>
            ) : (
              <h1>{details.title}</h1>
            )}
          </div>
          <p className='text-sm md:text-base'>{details.description}</p>
        </motion.aside>
      </section>
    </div>
  );
};

const ProjectsSection = () => {
  const projRef = useRef(null);
  const projAnimation = useAnimationControls();

  const projInView = useObserver(projRef);

  useEffect(() => {
    projInView ? projAnimation.start(popUp.show) : null;
  }, [projInView]);

  return (
    <div className='px-5 py-10 bg-primaryColorL text-black dark:bg-primaryColor dark:text-white transition-colors duration-200'>
      <section id='Project' className='max-w-xl md:max-w-6xl m-auto p-4'>
        <motion.h1
          ref={projRef}
          initial={popUp.hidden}
          animate={projAnimation}
          className='text-xl md:text-3xl font-semibold'
        >
          Projects
        </motion.h1>
        <main className='flex flex-col gap-10 justify-center w-full pb-15 pt-20'>
          {projectsInfo.map((element, index) => (
            <ProjectDetails
              details={element}
              index={index}
              key={element.title}
            />
          ))}
        </main>
      </section>
    </div>
  );
};

export default ProjectsSection;
