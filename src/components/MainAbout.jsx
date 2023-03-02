import React from 'react';
import SkillGroup from './SkillGroup';
import { programmingLanguage, skills, techStack } from './SkillData';

const groupSkill = [
  {
    name: null,
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
];

const Educ = [
  {
    title: 'Uplift Code Camp',
    info: 'Full Stack Development',
    year: ['2022'],
  },
  {
    title: 'Ateneo de Zamboanga University',
    info: 'Bachelor of Science in Computer Engineering',
    year: ['2015', '2022'],
  },
  {
    title: 'Technical Education and Skills Development Authority',
    info: 'NC II - Computer System Servicing',
    year: ['2019'],
  },
];

const MainAbout = () => {
  return (
    <div className='py-10 px-2 flex flex-col sm:items-center gap-5' id='About'>
      <main>
        <h1 className='text-sky-400 text-xl xl:text-wxl'>About Me</h1>
        <p className='p-1 text-sm md:max-w-lg xl:text-base xl:max-w-xl 2xl:max-w-3xl'>I am an aspiring software developer with experience using the MERN stack for web development. While I am not a seasoned professional, I am knowledgeable on how to use MongoDB, ExpressJS, ReactJs, and NodeJS to build dynamic and engaging web applications.</p>
      </main>
      <section className='grid sm:grid-cols-2 gap-5 md:gap-10 items-center '>
        <div className='p-1 gap-4 flex flex-col'>
          <h2 className='text-sky-400 text-lg xl:text-xl'>Education</h2>
          {Educ.map((details) => {
            return (
              <div>
                <h3 className='text-sky-300'>{details.title}</h3>
                <p className='p-1 text-sm xl:text-base '>
                  {details.info} /{' '}
                  {details.year.map((e, index) => {
                    return index !== details.year.length - 1 ? <span>{e} - </span> : <span>{e}</span>;
                  })}
                </p>
              </div>
            );
          })}
        </div>
        <div className='md:justify-self-end'>
          <h2 className='text-sky-400 text-lg xl:text-xl'>Random Facts</h2>
          <ul className='text-sm p-2 xl:text-base flex flex-col gap-2'>
            <li> I lived in the southern Philippines</li>
            <li> Favorite colors are black and white </li>
            <li> Silver Rank in Valorant </li>
          </ul>
        </div>
        <main className='col-span-2'>
        <h2 className='text-sky-400 text-lg xl:text-xl'>Skills</h2>
          {groupSkill.map((details) => {
            return <SkillGroup name={details.name} information={details.information} />;
          })}
        </main>
      </section>
    </div>
  );
};

export default MainAbout;
