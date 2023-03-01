import { faCanadianMapleLeaf, faCss3, faGit, faGitAlt, faGitSquare, faHtml5, faJs, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase, faE, faLeaf, faS, faT, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const skills = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} className='text-2xl xl:text-4xl text-orange-500' />,
    name: 'HTML',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} className='text-2xl xl:text-4xl text-blue-400' />,
    name: 'CSS',
  },
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className='text-2xl xl:text-4xl text-yellow-400' />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} className='text-2xl xl:text-4xl text-orange-500' />,
    name: 'Git',
  },
];

const programmingLanguage = [
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className='text-2xl xl:text-4xl text-yellow-400' />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faC} className='text-2xl xl:text-4xl text-blue-400' />,
    name: 'C++',
  },
  {
    icon: (
      <section className='text-2xl xl:text-4xl text-blue-500 flex justify-center'>
        <FontAwesomeIcon icon={faT} />
        <FontAwesomeIcon icon={faS} />
      </section>
    ),
    name: 'TypeScript',
  },
];

const techStack = [
  {
    icon: <FontAwesomeIcon icon={faLeaf} className='text-2xl xl:text-4xl p-1 text-green-500' />,
    name: 'MongoDB',
  },
  {
    icon: (
      <div className='text-sm p-1 xl:text-lg xl:text-2xl'>
        <FontAwesomeIcon icon={faE} className='text-gray-400' />
        <FontAwesomeIcon icon={faX} />
      </div>
    ),
    name: 'Express JS',
  },
  {
    icon: <FontAwesomeIcon icon={faReact} className='text-2xl xl:text-4xl p-1 text-blue-400' />,
    name: 'React JS',
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs} className='text-2xl xl:text-4xl p-1 text-green-400' />,
    name: 'Node JS',
  },
];

const MainAbout = () => {
  return (
    <div className='py-10 px-2 flex flex-col sm:items-center gap-5' id='About'>
      <main>
        <h1 className='text-sky-400 text-xl xl:text-wxl'>About Me</h1>
        <p className='p-1 text-sm md:max-w-lg xl:text-base xl:max-w-xl'>I am an aspiring software developer with experience using the MERN stack for web development. While I am not a seasoned professional, I am knowledgeable on how to use MongoDB, ExpressJS, ReactJs, and NodeJS to build dynamic and engaging web applications.</p>
      </main>
      <section className='grid sm:grid-cols-2 gap-5 md:gap-10 items-center '>
        <div className='p-1'>
          <h2 className='text-sky-400 text-lg xl:text-xl'>Education</h2>
          <h3>Ateneo de Zamboanga University</h3>
          <p className='p-1 text-sm xl:text-base'>
            LaPurisima St., Zamboanga City <br />
            Bachelor of Science in Computer Engineering <br />
            June 2015 - March 2021
          </p>
          <h2 className='text-sky-400 text-lg xl:text-xl mt-4'>Training</h2>
          <h3>Uplift CodeCamp</h3>
          <p className='p-1 text-sm xl:text-base'>
            <span className='text-sky-200'>MERN Stack</span> <br /> July 16, 2022 - Dec 23, 2022
          </p>
        </div>
        <div className='md:justify-self-center'>
          <h2 className='text-sky-400 text-lg xl:text-xl'>Random Facts</h2>
          <ul className='text-sm p-2 xl:text-base'>
            <li>I lived in the southern Philippines</li>
            <li>Favorite colors are black and white </li>
            <li>Silver Rank in Valorant </li>
          </ul>
        </div>
        <section className='sm:col-span-2 sm:justify-self-center'>
          <h2 className='text-sky-400 text-lg xl:text-xl mt-4'>Skills</h2>
          <div className='p-1 gap-5 flex flex-col py-4'>
            <section className='flex text-xs gap-5 justify-center'>
              {skills.map((details) => {
                return (
                  <div className='flex flex-col xl:text-base'>
                    {details.icon}
                    <p>{details.name}</p>
                  </div>
                );
              })}
            </section>
            <section>
              <h3 className='text-sm mb-2 text-sky-200'>Programming Language</h3>
              <main className='flex items-center justify-center gap-5 text-xs'>
                {programmingLanguage.map((details) => {
                  return (
                    <div className='flex flex-col xl:text-base'>
                      {details.icon}
                      <p>{details.name}</p>
                    </div>
                  );
                })}
              </main>
            </section>
            <section>
              <h3 className='text-sm mb-2 text-sky-200'>Tech Stack</h3>
              <main className='flex items-center justify-center gap-5 text-xs'>
                {techStack.map((details) => {
                  return (
                    <div className='flex flex-col xl:text-base'>
                      {details.icon}
                      <p>{details.name}</p>
                    </div>
                  );
                })}
              </main>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainAbout;
