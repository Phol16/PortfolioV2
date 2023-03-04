import React, { useContext } from 'react';
import typing from './style/Typing.module.css';
import { ThemeFormat } from './ThemeFormat';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../layout/Intro';

const Hero = () => {
  const { dark } = useContext(ThemeContext);
  const { primaryDColorText, primaryLColorText, secondaryDColorText, secondaryLColorText, tertiaryDColorText, tertiaryLColorText, DMain, DSub, DMini } = ThemeFormat;
  return (
    <div className={`${dark ? primaryDColorText : primaryLColorText} h-[80vh] flex flex-col justify-center p-1`}>
      <article className=' flex flex-col gap-2 m-auto'>
        <h1 className={`${DMain}`}>
          Hi ! My name is <span className={`${dark ? secondaryDColorText : secondaryLColorText}`}>Phol</span>
        </h1>
        <section className=' flex flex-col gap-1'>
          <h2 className={`${DSub} ${dark ? tertiaryDColorText : tertiaryLColorText} ${typing.List}`}>
            <ul>
              <li>
                <span className={dark ? typing.Dark : typing.Light}>Full-stack developer</span>
              </li>
              <li>
                <span className={dark ? typing.Dark : typing.Light}>MERN stack developer</span>
              </li>
            </ul>
          </h2>
          <p className={`${DMini} ${dark ? tertiaryDColorText : tertiaryLColorText} max-w-xs md:max-w-[400px]`}>I am a MERN stack developer. I am knowledgeable in creating front-end and back-end and I am eager to learn more advance technologies</p>
        </section>
      </article>
      <div className=' relative w-fit animate-bounce bottom'>
        <a href="#About" className='flex flex-col gap-4'>
        <p className='transform rotate-[270deg] text-xs font-medium'>Go Down</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </a>
      </div>
    </div>
  );
};

export default Hero;
