import React from 'react';
import { primaryTextColor } from './ThemeRWD';

const NavButton = ({ redirect, icon, text }) => {
  return (
    <a href={redirect}>
      <button className={`${primaryTextColor} bg-transparent focus:outline-none transition-all hover:scale-110 duration-[150ms]`}>
        <div className='text-xl'>{icon}</div>
        <p className='text-sm'>{text}</p>
      </button>
    </a>
  );
};

export default NavButton;
