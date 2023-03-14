import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeFormat } from '../components/ThemeFormat';
import ConnectingPage from '../pages/ConnectingPage';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const ThemeContext = createContext({ dark: true });

const Intro = () => {
  const local = localStorage.getItem('Mode');

  const value = local !== 'true' ? false : true;
  const [dark, setDark] = useState(local === null ? true : value);
  const [load, setLoad] = useState(false);

  const { primaryBGDark, primaryBGLight } = ThemeFormat;
  const BG = dark ? primaryBGDark : primaryBGLight;

  setTimeout(() => {
    setLoad(true);
  }, 1500);

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {load ? (
        <div className={`${BG}`}>
          <Navbar />
          <main className='pb-10'>
            <Outlet />
          </main>
          <Footer />
        </div>
      ) : (
        <ConnectingPage />
      )}
    </ThemeContext.Provider>
  );
};

export default Intro;
