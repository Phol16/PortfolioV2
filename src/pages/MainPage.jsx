import React from 'react'
import Hero from '../components/Hero/Hero'
import MainAbout from '../components/MainAbout'
import MainProjects from '../components/MainProjects'
import { primaryBgColor } from '../components/ThemeRWD'

const MainPage = () => {
  return (
    <div>
      <Hero/>
      <MainAbout/>
      <MainProjects/>
    </div>
  )
}

export default MainPage