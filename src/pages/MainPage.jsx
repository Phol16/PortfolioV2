import React from 'react';
import Hero from '../components//Hero';
import MainAbout from '../components/MainAbout';
import Projects from '../components/Projects';

const MainPage = () => {
  return (
    <div>
      <Hero />
      <Projects/>
      <MainAbout />
    </div>
  );
};

export default MainPage;
