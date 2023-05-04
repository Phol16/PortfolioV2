'use client';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/HeroSection';

import { useSelector } from 'react-redux';
import { RootState } from '@/libs/store/store';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
      <Footer/>
    </main>
  );
}
