import React from 'react';
import Hero from '../components//Hero';
import MainAbout from '../components/MainAbout';
import Projects from '../components/Projects';

const MainPage = () => {
  return (
    <div className='flex flex-col gap-20 pb-10'>
      <Hero />
      <Projects />
      <MainAbout />
    </div>
  );
};

export default MainPage;
