import React, { useContext } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeFormat } from './ThemeFormat';
import { ThemeContext } from '../layout/Intro';

const ProjectDetails = ({ title, tech, description, image, demo, source }) => {
  const { dark } = useContext(ThemeContext);
  const { Theading, TminiContent, TsubHeading, secondaryBgDark, FASizeIcon, primaryDColorText, primaryLColorText } = ThemeFormat;

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
    <div className={`flex items-center flex-col sm:flex-row p-1 justify-self-end`}>
      <article className={`flex flex-col justify-center items-center gap-2 relative sm:left-5 z-10`}>
        <section className='flex gap-2'>
          {projectButton.map((details, index) => {
            return (
              <button
                key={index}
                className={`bg-transparent hover:scale-125 transiton-all duration-[150ms] flex items-center`}
                onClick={() => {
                  window.open(`${details.redirect}`, '_blank');
                }}
              >
                <FontAwesomeIcon icon={details.icon} className={FASizeIcon} />
              </button>
            );
          })}
        </section>
        {title === 'MovieNotepad' ? (
          <h1 className={`${TsubHeading}  text-center rounded-md max-w-sm z-10 hover:scale-125`}>
            Movie <span className='text-red-600'>Notepad</span>
          </h1>
        ) : (
          <h1 className={`${TsubHeading}  text-center rounded-md max-w-sm z-10 hover:scale-125`}>{title}</h1>
        )}
      </article>
      <main className={`relative overflow-hidden group rounded-lg`}>
        <img src={image} alt='Photo' className={`aspect-video w-[400px] lg:max-w-[300px] xl:max-w-[400px] group-hover:blur-[2px] group-hover:scale-125 duration-[200ms]`} />
        <p className={`${TminiContent} ${dark ? primaryDColorText : primaryLColorText} absolute inset-0 flex items-center justify-center p-7 opacity-0 top-5 group-hover:top-0 group-hover:opacity-100 ${dark ? 'group-hover:bg-black/70' : 'group-hover:bg-white/70'} duration-[200ms]`}>{description}</p>
      </main>
    </div>
  );
};

export default ProjectDetails;
