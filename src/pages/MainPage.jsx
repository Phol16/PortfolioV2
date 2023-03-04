import React from 'react';
import Hero from '../components//Hero';
import MainAbout from '../components/MainAbout';
import MainProjects from '../components/MainProjects';

const MainPage = () => {
  return (
    <div>
      <Hero />
      <MainAbout />
      <MainProjects />
    </div>
  );
};

export default MainPage;
