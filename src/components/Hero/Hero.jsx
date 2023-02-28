import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faArrowDown, faArrowDown19, faArrowDownShortWide, faArrowDownUpAcrossLine, faArrowDownUpLock, faArrowsDownToLine, faArrowTrendDown, faArrowTurnDown, faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import ContactLinks from '../ContactLinks';
import style from './style.module.css';

const Hero = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[80vh]'>
      <h1 className={style.mainText}>
        Hi ! My name is <span className='text-sky-400'>Phol</span>
      </h1>
      <p className={style.textAnimate}>
        I am a
        <span className='text-sky-400'>
          <ul className={style.dynamicText}>
            <li>
              <span>Programmer</span>
            </li>
            <li>
              <span>Web Developer</span>
            </li>
            <li>
              <span>Computer Gamer</span>
            </li>
            <li>
              <span>Movie Enthusiast</span>
            </li>
          </ul>
        </span>
      </p>
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
