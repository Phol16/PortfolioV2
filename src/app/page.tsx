'use client';
import { Inter } from 'next/font/google';

import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store/store';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ServiceSection from '@/app/components/ServiceSection';


export default function Home() {
  const darkModeData = useSelector(
    (state: RootState) => state.darkModeData.darkMode
  );

  return (
    <main className={`${darkModeData ? 'dark' : ''}`}>
      <HeroSection />
      <ServiceSection />
      <ProjectsSection />
      <AboutSection />
    </main>
  );
}
