import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarouselImg from './CarouselImg';
import { subHeading, miniHeading, miniContent, FontSizeIcon, tertiaryTextColor, primaryBgColor } from './ThemeRWD';

const ProjectsInfo = ({ title, tech, description, image, demo, source }) => {
  const projectButton = [
    {
      icon: faHome,
      title: 'Live Demo',
      redirect: demo,
    },
    {
      icon: faGithub,
      title: 'Source Code',
      redirect: source,
    },
  ];
  return (
    <div className={`${primaryBgColor} max-w-md p-5 rounded-md border border-sky-400 flex flex-col justify-between`}>
      <main>
        <section className='flex justify-center gap-5 p-5'>
          {projectButton.map((details) => {
            return (
              <button
                key={details.title}
                className={`bg-transparent hover:scale-110 transiton-all duration-[150ms] flex items-center`}
                onClick={() => {
                  window.open(`${details.redirect}`, '_blank');
                }}
              >
                <FontAwesomeIcon icon={details.icon} className={`${FontSizeIcon}`} />
                <p className={`${miniContent}`}>{details.title}</p>
              </button>
            );
          })}
        </section>
        <article className='flex flex-col gap-3 justify-center items-center self-start'>
          {title === 'MovieNotepad' ? (
            <h2 className={`${subHeading}`}>
              Movie<span className='text-red-600'>NotePad</span>
            </h2>
          ) : (
            <h2 className={`${subHeading}`}>{title}</h2>
          )}
          <section className={`${miniHeading} ${tertiaryTextColor}`}>{tech}</section>
          <p className={`${miniContent}`}>{description}</p>
        </article>
      </main>
      <div className='p-1'>
        <CarouselImg image={[...image]} />
      </div>
    </div>
  );
};

export default ProjectsInfo;
