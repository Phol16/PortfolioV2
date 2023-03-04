import React, { useContext } from 'react';
import SkillGroup from './SkillGroup';
import { design, programmingLanguage, repo, skills, techStack } from './SkillData';
import { Theading, TsubHeading, TminiHeading, TminiContent, secondaryTextColor, tertiaryTextColor, primaryTextColor, primaryTextColorDark, secondaryTextColorDark, tertiaryTextColorDark } from './ThemeRWD';
import { ThemeContext } from '../layout/Intro';

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
    name: null,
    information: repo,
  },
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
  {
    name: 'Styling',
    information: design,
  },
];

const MainAbout = () => {
  const { dark } = useContext(ThemeContext);
  const PTextColor = dark ? primaryTextColor : primaryTextColorDark;
  const STextColor = dark ? secondaryTextColor : secondaryTextColorDark;
  const TTextColor = dark ? tertiaryTextColor : tertiaryTextColorDark;

  return (
    <div className={`${PTextColor} py-10 px-2 flex flex-col m-auto gap-5 max-w-md md:max-w-xl xl:max-w-7xl`} id='About'>
      <main className='max-w-4xl m-auto'>
        <h1 className={`${Theading} ${STextColor}`}>About Me</h1>
        <p className={`${TsubHeading} m-auto p-2 `}>I am an aspiring software developer with experience using the MERN stack for web development. While I am not a seasoned professional, I am knowledgeable on how to use MongoDB, Express JS, React Js, and Node JS to build dynamic and engaging web applications.</p>
      </main>
      <section className='flex flex-col justify-center items-center gap-5'>
        <article className='grid md:grid-cols-2 gap-5 md:gap-10 p-2'>
        <div className=' gap-4 flex flex-col max-w-sm '>
          <h2 className={`${TsubHeading} ${STextColor}`}>Education</h2>
          {Educ.map((details) => {
            return (
              <div key={details.title}>
                <h3 className={`${TminiHeading} ${TTextColor}`}>{details.title}</h3>
                <p className={TminiContent}>
                  {details.info} <br />/{' '}
                  {details.year.map((e, index) => {
                    return index !== details.year.length - 1 ? <span key={e}>{e} - </span> : <span key={e}>{e}</span>;
                  })}
                </p>
              </div>
            );
          })}
        </div>
      <div className='md:self-center md:justify-self-center'>
          <h2 className={`${TsubHeading} ${STextColor}`}>Random Facts</h2>
          <ul className={`${TminiContent} flex flex-col gap-2`}>
            <li> I lived in the southern Philippines</li>
            <li> Favorite colors are black and white </li>
            <li> Silver Rank in Valorant </li>
          </ul>
        </div>
        </article>
        <main className=''>
          <h2 className={`${TsubHeading} ${STextColor} xl:px-20`}>Skills</h2>
          <section className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
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
