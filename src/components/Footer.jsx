import React, { useContext } from 'react';
import { ThemeContext } from '../layout/Intro';
import { primaryTextColor, primaryTextColorDark } from './ThemeRWD';

const Footer = () => {
  const {dark, setDark} = useContext(ThemeContext);
  const PTextColor = dark ? primaryTextColor : primaryTextColorDark
  
  return (
    <div className={`${PTextColor} absolute bottom-1 text-sm w-full flex items-center hidden sm:flex`}>
      <p className='absolute flex justify-center w-full'>© Phol 2023</p>
      <section className='flex items-center justify-between w-full px-5'>
        <h1 className='text-xs'>Aspiring Web Developer</h1>
        <section className='text-sm flex flex-col'>
          <p>Contact: 09060447603</p>
          <p>Email: pholibertlim@gmail.com</p>
          <p>Location: Zamboanga City</p>
        </section>
      </section>
    </div>
  );
};

export default Footer;
