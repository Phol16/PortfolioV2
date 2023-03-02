import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../layout/Intro';
import ContactLinks from '../ContactLinks';
import { primaryTextColor, primaryTextColorDark, secondaryTextColor, secondaryTextColorDark } from '../ThemeRWD';
import style from './style.module.css';

const Hero = () => {
  const {dark} = useContext(ThemeContext);
  const PTextColor = dark ? primaryTextColor : primaryTextColorDark
  const STextColor = dark ? secondaryTextColor : secondaryTextColorDark

  return (
    <div className={`${PTextColor} flex flex-col justify-center items-center h-[80vh]`}>
      <h1 className={style.mainText}>
        Hi ! My name is <span className={STextColor}>Phol</span>
      </h1>
      <div className={style.textAnimate}>
        I am a
        <span className={STextColor}>
          <ul className={style.dynamicText}>
            <li>
              <span className={dark ? style.dark : style.light}>Programmer</span>
            </li>
            <li>
              <span className={dark ? style.dark : style.light}>Web Developer</span>
            </li>
            <li>
              <span className={dark ? style.dark : style.light}>Computer Gamer</span>
            </li>
            <li>
              <span className={dark ? style.dark : style.light}>Movie Enthusiast</span>
            </li>
          </ul>
        </span>
      </div>
      <ContactLinks />
      <div className='relative top-[30%] '>
        <a href='#About'>
          <button className={`${PTextColor} bg-transparent focus:outline-none hover:scale-125 transition-all duration-[300ms] `}>
            <FontAwesomeIcon icon={faArrowDown} className='text-xl animate-bounce' />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
