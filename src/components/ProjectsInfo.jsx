import React, { useContext } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CarouselImg from './CarouselImg';
import { subHeading, miniHeading, miniContent, FASizeIcon, tertiaryTextColor, primaryBgColor, tertiaryTextColorDark, primaryBgColorLight } from './ThemeRWD';
import { ThemeContext } from '../layout/Intro';

const ProjectsInfo = ({ title, tech, description, image, demo, source }) => {
  const { dark } = useContext(ThemeContext);
  const BGColor = dark ? primaryBgColor : primaryBgColorLight;
  const TTextColor = dark ? tertiaryTextColor : tertiaryTextColorDark;
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
    <div className={`${BGColor} max-w-md p-2 rounded-md border ${dark ? 'border-white' : 'border-black'} flex flex-col justify-between`}>
      <main>
        <section className='flex justify-center gap-5 py-4'>
          {projectButton.map((details, index) => {
            return (
              <button
                key={details.title}
                className={`bg-transparent hover:scale-110 transiton-all duration-[150ms] flex items-center`}
                onClick={() => {
                  window.open(`${details.redirect}`, '_blank');
                }}
              >
                <FontAwesomeIcon icon={details.icon} className={`${FASizeIcon}`} />
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
          <section className={`${miniHeading} ${TTextColor}`}>{tech}</section>
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
