import React, { useContext } from 'react';
import SkillGroup from './SkillGroup';
import { design, programmingLanguage, repo, skills, techStack } from './SkillData';
import { ThemeContext } from '../layout/Intro';
import  {ThemeFormat}  from './ThemeFormat';

const Educ = [
  {
    title: 'Uplift Code Camp',
    info: 'Full Stack Development',
    year: ['2022'],
  },
  {
    title: 'Ateneo de Zamboanga University',
    info: 'Bachelor of Science in Computer Engineering',
    year: ['2015', '2021'],
  },
  {
    title: 'Technical Education and Skills Development Authority',
    info: 'NC II - Computer System Servicing',
    year: ['2019'],
  },
];

const groupSkill = [
  {
    name: 'Version Control System',
    information: repo,
  },
  {
    name: 'Web Development',
    information: skills,
  },
  {
    name: 'Programming Language',
    information: programmingLanguage,
  },
  {
    name: 'Tech Stack',
    information: techStack,
  },
  {
    name: 'Styling',
    information: design,
  },
];

const MainAbout = () => {
  const { dark } = useContext(ThemeContext);
  const {Theading,TminiHeading , primaryDColorText, primaryLColorText,secondaryDColorText, secondaryLColorText, TsubHeading} = ThemeFormat
  const PTextColor = dark ? primaryDColorText : primaryLColorText;
  const STextColor = dark ? secondaryDColorText : secondaryLColorText;

  return (
    <div className={`${PTextColor} flex flex-col  max-w-fit m-auto gap-10 p-2`} id='About'>
      <main className='max-w-4xl m-auto'>
        <h1 className={`${Theading} ${STextColor}`}>About Me</h1>
        <section className='flex gap-2 p-2'>
        <img width='300' alt='Coding' src='https://i.pinimg.com/originals/54/e3/7d/54e37d8074ebcde1d96c77d7b2a7f310.gif' className={` border-2 ${dark ? 'border-sky-400' : 'border-green-700'} rounded-lg hidden sm:flex`} />
        <p className={`${TminiHeading} m-auto p-2 `}>I am an aspiring software developer with experience using the MERN stack for web development. While I am not a seasoned professional, I am knowledgeable on how to use MongoDB, Express JS, React Js, and Node JS to build dynamic and engaging web applications. I am also eager to learn other technologies as well.</p>
        </section>
      </main>
      <section className='flex flex-col justify-center items-center gap-5'>
        <main className=''>
          <h2 className={`${TsubHeading} ${STextColor} xl:px-20`}>Skills</h2>
          <section className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {groupSkill.map((details, index) => {
              return <SkillGroup name={details.name} information={details.information} key={index} />;
            })}
          </section>
        </main>
      </section>
    </div>
  );
};

export default MainAbout;
