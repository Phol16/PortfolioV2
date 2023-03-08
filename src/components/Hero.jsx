import React, { useContext, useEffect, useRef, useState } from 'react';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../layout/Intro';
import { ThemeFormat } from './ThemeFormat';
import ContactLinks from './ContactLinks';
import topBoxDesign from './style/TopBoxDesign.module.css';
import typing from './style/Typing.module.css';

const Hero = () => {
  const { dark } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [displayInfo, setDisplayInfo] = useState([]);
  const [count, setCount] = useState(false);
  const currIndex = useRef(0);
  const currChar = useRef(0);
  const heroRef = useRef(null);
  const { primaryDColorText, primaryLColorText, secondaryDColorText, secondaryLColorText, tertiaryDColorText, tertiaryLColorText, DMain, DSub, DMini } = ThemeFormat;
  const PTextColor = dark ? primaryDColorText : primaryLColorText;
  const STextColor = dark ? secondaryDColorText : secondaryLColorText;
  const TTextColor = dark ? tertiaryDColorText : tertiaryLColorText;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? setVisible(true) : setVisible(false);
      },
      { threshold: 0.5 }
    );
    observer.observe(heroRef.current);
  }, []);

  useEffect(() => {
    const detailInfo = [' Software Developer', ' Full-stack Developer', ' Movie Enthusiast'];
    let displayCharId;
    let delayCursorId;

    detailInfo.map((element, index) => {
      //typing effect
      //if index is the same with the currIndex number
      if (index === currIndex.current) {
        //if the current char is at the last/first character
        if (currChar.current === element.length) {
          //if all text has been deleted using splice method
          if (count && currChar.current === element.length) {
            //proceed to the next element
            (currIndex.current = currIndex.current + 1), setCount(!count), (currChar.current = 0);
          }
          //will change state to delete mode
          else {
            //delay effect when changing to delete mode
            delayCursorId = setTimeout(() => {
              setCount(!count), (currChar.current = 0);
            }, 1500);
          }
        }
        //will display with delay timer
        else {
          displayCharId = setTimeout(() => {
            //count is true delete elements 
            if (count) {
              setDisplayInfo(displayInfo.slice(0, displayInfo.length - 1)), (currChar.current = currChar.current + 1);
            }
            //display elements 
            else {
              setDisplayInfo([...displayInfo, element.charAt(currChar.current)]), (currChar.current = currChar.current + 1);
            }
          }, 50);
        }
      }
      //loop back to first element
      if (currIndex.current === detailInfo.length) {
        currIndex.current = 0;
      }
    });

    //cleanup code 
    return () => {
      clearTimeout(displayCharId);
      clearTimeout(delayCursorId);
    };
  }, [displayInfo, count]);

  return (
    <div className={`${PTextColor} h-[85vh] flex flex-col justify-center p-1 `}>
      <article className={`relative flex flex-col gap-2 m-auto ${visible ? (dark ? topBoxDesign.Dbox : topBoxDesign.Lbox) : null}`}>
        <h1 className={`${DMain}`} ref={heroRef}>
          Hi ! My name is <span className={`${STextColor}`}>Phol</span>
        </h1>
        <section className=' flex flex-col gap-1 px-2'>
          <h2 className={`${DSub} ${STextColor}`}>
            {displayInfo}
            <span className={`${PTextColor} ${typing.cursor}`}>|</span>
          </h2>
          <p className={`${DMini} ${TTextColor} max-w-xs md:max-w-[400px]`}>I am a MERN stack developer. I am knowledgeable in creating front-end and back-end and I am eager to learn more advance technologies</p>
        </section>
        <ContactLinks />
      </article>
      <div className=' relative w-fit animate-bounce bottom '>
        <a href='#Projects' className='flex flex-col gap-4 hover:scale-125'>
          <p className='transform rotate-[270deg] text-xs font-medium'>Go Down</p>
          <FontAwesomeIcon icon={faCaretDown} className='' />
        </a>
      </div>
    </div>
  );
};

export default Hero;
