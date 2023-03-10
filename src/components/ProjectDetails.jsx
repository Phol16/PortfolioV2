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
  const { TminiContent, TsubHeading, FASizeIcon, primaryDColorText, primaryLColorText, primaryBGDark, primaryBGLight,secondaryDColorText, secondaryLColorText } = ThemeFormat;

  const PTextColor = dark ? primaryDColorText : primaryLColorText;
  const STextColor = dark ? secondaryDColorText : secondaryLColorText;
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
                  {info === details.title && <p className={`${PTextColor} ${BG} ${dark ? 'border-white' : 'border-black'} border absolute text-xs w-24 rounded-lg p-1 text-center -top-8`}>{details.title}</p>}
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
          <a href={demo} target='_blank'>
          <img decoding='async' loading='lazy' src={image} alt='Photo' className={`aspect-video w-[400px] group-hover:blur-[2px] group-hover:scale-125 duration-[500ms]`} />
          <section className={`${TminiContent} ${PTextColor} absolute inset-0 flex flex-col gap-2 items-center justify-center p-7 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0  ${dark ? 'group-hover:bg-black/90' : 'group-hover:bg-white/90'} transition-transform duration-[500ms]`}>
            <p className={`${STextColor} text-justify`}>{tech}</p>
            <p>{description}</p>
            </section>
            </a>
        </main>
      </section>
    </div>
  );
};

export default ProjectDetails;
