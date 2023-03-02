import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown, faArrowDown19, faArrowDownShortWide, faArrowDownUpAcrossLine, faArrowDownUpLock, faArrowsDownToLine, faArrowTrendDown, faArrowTurnDown, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import ContactLinks from '../ContactLinks';
import { primaryTextColor, secondaryTextColor } from '../ThemeRWD';
import style from './style.module.css';


const Hero = () => {
  const [dynamicColor, setDynamicColor]=useState(style.dark)
  return (
    <div className={`${primaryTextColor} flex flex-col justify-center items-center h-[80vh]`}>
      <h1 className={style.mainText}>
        Hi ! My name is <span className={secondaryTextColor}>Phol</span>
      </h1>
      <div className={style.textAnimate}>
        I am a
        <span className='text-sky-400'>
          <ul className={style.dynamicText}>
            <li>
              <span className={dynamicColor}>Programmer</span>
            </li>
            <li>
              <span className={dynamicColor}>Web Developer</span>
            </li>
            <li>
              <span className={dynamicColor}>Computer Gamer</span>
            </li>
            <li>
              <span className={dynamicColor}>Movie Enthusiast</span>
            </li>
          </ul>
        </span>
      </div>
      <ContactLinks/>
      <div className='relative top-[30%] '>
        <a href="#About">
        <button className='bg-transparent focus:outline-none hover:scale-125 transition-all duration-[300ms] hover:text-sky-400 text-white'>
        <FontAwesomeIcon icon={faArrowDown} className='text-xl animate-bounce'/>
        </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
