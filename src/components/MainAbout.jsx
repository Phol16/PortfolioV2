import { faCanadianMapleLeaf, faCss3, faGit, faGitAlt, faGitSquare, faHtml5, faJs, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faDatabase, faE, faLeaf, faT, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MainAbout = () => {
  return (
    <div className='py-10 px-2 flex flex-col sm:items-center gap-5' id='About'>
      <main>
        <h1 className='text-sky-400 text-2xl xl:text-3xl'>About Me</h1>
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
          </ul>
        </div>
        <section className='sm:col-span-2 sm:justify-self-center'>
          <h2 className='text-sky-400 text-lg xl:text-xl mt-4'>Skills</h2>
          <div className='p-1 gap-5 flex flex-col'>
            <section className='flex text-xs gap-2 justify-center'>
              <div className='flex flex-col xl:text-base'>
                <FontAwesomeIcon icon={faHtml5} className='text-lg xl:text-2xl text-orange-500' />
                <p>HTML</p>
              </div>
              <div className='flex flex-col xl:text-base'>
                <FontAwesomeIcon icon={faCss3} className='text-lg xl:text-2xl text-blue-400' />
                <p>CSS</p>
              </div>
              <div className='flex flex-col xl:text-base'>
                <FontAwesomeIcon icon={faJsSquare} className='text-lg xl:text-2xl text-yellow-400' />
                <p>Javascript</p>
              </div>
              <div className='flex flex-col xl:text-base'>
                <FontAwesomeIcon icon={faGitAlt} className='text-lg xl:text-2xl text-orange-500' />
                <p>Git</p>
              </div>
            </section>
            <section>
              <h3 className='text-sm mb-2 text-sky-200'>Programming Language</h3>
              <main className='flex items-center justify-center gap-2 text-xs'>
                <div className='flex flex-col xl:text-base'>
                  <FontAwesomeIcon icon={faJsSquare} className='text-lg xl:text-2xl text-yellow-400' />
                  <p>Javascript</p>
                </div>
                <div className='flex flex-col xl:text-base'>
                  <FontAwesomeIcon icon={faC} className='text-lg xl:text-2xl text-blue-400' />
                  <p>C++</p>
                </div>
                <div className='flex flex-col xl:text-base'>
                  <FontAwesomeIcon icon={faT} className='text-lg xl:text-2xl text-blue-500' />
                  <p>Typescript</p>
                </div>
              </main>
            </section>
            <section>
              <h3 className='text-sm mb-2 text-sky-200'>Tech Stack</h3>
              <main className='flex items-center justify-center gap-2 text-xs'>
                <div className='flex flex-col xl:text-base'>
                  <FontAwesomeIcon icon={faLeaf} className='text-lg xl:text-2xl p-1 text-green-500' />
                  <p>MongoDB</p>
                </div>
                <div className='flex flex-col xl:text-base items-center '>
                  <div className='text-md p-1 xl:text-base xl:text-xl'>
                    <FontAwesomeIcon icon={faE} className='text-gray-400' />
                    <FontAwesomeIcon icon={faX} />
                  </div>
                  <p>ExpressJs</p>
                </div>
                <div className='flex flex-col xl:text-base'>
                  <FontAwesomeIcon icon={faReact} className='text-lg xl:text-2xl p-1 text-blue-400' />
                  <p>ReactJS</p>
                </div>
                <div className='flex flex-col xl:text-base'>
                  <FontAwesomeIcon icon={faNodeJs} className='text-lg xl:text-2xl p-1 text-green-400' />
                  <p>NodeJS</p>
                </div>
              </main>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default MainAbout;
