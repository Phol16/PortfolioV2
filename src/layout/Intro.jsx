import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Intro = () => {
  return (
    <div className='flex flex-col items-center'>
      <Navbar />
      <main className='flex justify-center items-center overflow-auto'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Intro;
