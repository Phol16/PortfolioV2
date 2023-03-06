import React from 'react';
import { ThemeFormat } from './ThemeFormat';

const NavButton = ({ redirect, icon, text }) => {
  const { primaryDColorText } = ThemeFormat;

  return (
    <a href={redirect}>
      <button className={`${primaryDColorText} bg-transparent focus:outline-none transition-all hover:scale-110 duration-[150ms] flex items-center gap-1`}>
        <div className='text-xl'>{icon}</div>
        <p className='text-sm font-semibold'>{text}</p>
      </button>
    </a>
  );
};

export default NavButton;
