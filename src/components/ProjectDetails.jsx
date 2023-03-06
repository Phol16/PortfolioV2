import React, { useContext, useEffect, useRef, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeFormat } from './ThemeFormat';
import { ThemeContext } from '../layout/Intro';
import slide from './style/Slide.module.css';

const ProjectDetails = ({ title, tech, description, image, demo, source, number }) => {
  const [info, setInfo] = useState(false);
  const [visible, setVisible] = useState();
  const { dark } = useContext(ThemeContext);
  const ProjRef = useRef(null);
  const infoRef = useRef(null);
  const { TminiContent, TsubHeading, FASizeIcon, primaryDColorText, primaryLColorText, primaryBGDark, primaryBGLight } = ThemeFormat;

  const PTextColor = dark ? primaryDColorText : primaryLColorText;
  const BG = dark ? primaryBGDark : primaryBGLight;

  const projectButton = [
    {
      icon: faHome,
      title: 'View Live',
      redirect: demo,
    },
    {
      icon: faGithub,
      title: 'Source Code',
      redirect: source,
    },
  ];

  useEffect(() => {
    console.log(infoRef.current.onMouseOver);
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? setVisible(true) : setVisible(false);
      },
      { threshold: 0.5 }
    );
    observer.observe(ProjRef.current);
  }, []);

  return (
    <div className={`p-1 justify-self-end `} ref={ProjRef}>
      <section className={`${visible ? (number % 2 === 0 ? slide.slideRight : slide.slideLeft) : number % 2 === 0 ? slide.initialRight : slide.initialLeft} flex items-center flex-col sm:flex-row`}>
        <article className={`flex flex-col justify-center items-center gap-2 relative sm:left-5 z-10`}>
          <section className='flex gap-2'>
            {projectButton.map((details, index) => {
              return (
                <section className='relative flex flex-col items-center' key={index}>
                  {info === details.title && <p className={`${PTextColor} ${BG} border absolute text-xs w-24 rounded-lg p-1 text-center -top-8`}>{details.title}</p>}
                  <button
                    ref={infoRef}
                    onMouseOut={() => {
                      setInfo(false);
                    }}
                    onMouseOver={() => {
                      setInfo(details.title);
                    }}
                    key={index}
                    className={`bg-transparent hover:scale-125 transiton-all duration-[150ms] flex items-center`}
                    onClick={() => {
                      window.open(`${details.redirect}`, '_blank');
                    }}
                  >
                    <FontAwesomeIcon icon={details.icon} className={FASizeIcon} />
                  </button>
                </section>
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
          <img decoding='async' loading='lazy' src={image} alt='Photo' className={`aspect-video w-[400px] lg:max-w-[300px] xl:max-w-[400px] group-hover:blur-[2px] group-hover:scale-125 duration-[200ms]`} />
          <p className={`${TminiContent} ${PTextColor} absolute inset-0 flex items-center justify-center p-7 opacity-0 top-5 group-hover:top-0 group-hover:opacity-100 ${dark ? 'group-hover:bg-black/70' : 'group-hover:bg-white/70'} duration-[200ms]`}>{description}</p>
        </main>
      </section>
    </div>
  );
};

export default ProjectDetails;
