import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { primaryBgColor } from '../components/ThemeRWD';

export const ThemeContext = createContext();

const Intro = () => {
  const [dark, setDark] = useState(true);

  return (
    <ThemeContext.Provider value={[dark, setDark]}>
      <div className={`${primaryBgColor} flex flex-col items-center`}>
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
