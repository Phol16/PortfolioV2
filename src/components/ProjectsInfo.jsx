import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarouselImg from './CarouselImg';

const ProjectsInfo = ({ title, tech, description, image, demo, source }) => {
  console.log(title)
  return (
    <div className='max-w-md bg-black/30 p-5 rounded-md border border-sky-400'>
      <main className='flex justify-center gap-5 p-5'>
        <button onClick={()=>{window.open(demo, '_blank')}} className='bg-transparent flex justify-center items-center gap-1 hover:scale-110 transition-all dureation-[150ms] hover:text-sky-400 text-xs sm:text-sm focus:outline-none'>
          <FontAwesomeIcon icon={faHome} />
          Live Demo
        </button>
        <button onClick={()=>{window.open(source, '_blank')}} className='bg-transparent flex justify-center items-center gap-1 hover:scale-110 transition-all dureation-[150ms] hover:text-sky-400 text-xs sm:text-sm focus:outline-none'>
          <FontAwesomeIcon icon={faGithub} />
          Source Code
        </button>
      </main>
      <article className='flex flex-col gap-3 justify-center items-center'>
        {title === 'MovieNotepad' ? (
          <h2 className='sm:text-xl'>
            Movie<span className='text-red-600'>NotePad</span>
          </h2>
        ) : (
          <h2 className='sm:text-xl'>{title}</h2>
        )}
        <section className='text-sky-400 text-sm sm:text-base'>{tech}</section>
        <p className='text-sm sm:text-base'>{description}</p>
      </article>
      <div className='p-1'>
      <CarouselImg image={[...image]}/>
      </div>
    </div>
  );
};

export default ProjectsInfo;
