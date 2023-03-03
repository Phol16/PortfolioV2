import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { primaryBgColor, primaryBgColorLight } from '../components/ThemeRWD';

export const ThemeContext = createContext({dark:true});

const Intro = () => {
  const local = localStorage.getItem('Mode')

  const value = local !== 'true' ? false : true
  const [dark, setDark] = useState( local === null ? true : value );
  console.log(dark);

  return (
    <ThemeContext.Provider value={{dark, setDark}}>
      <div className={`${dark ? primaryBgColor : primaryBgColorLight} flex flex-col items-center`}>
        <Navbar />
        <main className='flex justify-center items-center overflow-auto mb-10'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Intro;
