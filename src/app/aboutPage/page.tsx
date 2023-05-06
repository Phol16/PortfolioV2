import React, { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandCSharp,
} from 'react-icons/tb';
import { BiArrowBack } from 'react-icons/bi';

interface Skills {
  title: string;
  icon?: ReactElement;
  color?: string;
}
interface Tools {
  title: string;
  icon?: string;
}

const programmingLanguage: Skills[] = [
  {
    title: 'HTML',
    icon: <TbBrandHtml5 />,
    color: 'hover:bg-html',
  },
  {
    title: 'CSS',
    icon: <TbBrandCss3 />,
    color: 'hover:bg-css',
  },
  {
    title: 'JavaScript',
    icon: <TbBrandJavascript />,
    color: 'hover:bg-js',
  },
  {
    title: 'TypeScript',
    icon: <TbBrandTypescript />,
    color: 'hover:bg-ts',
  },
  {
    title: 'C Sharp',
    icon: <TbBrandCSharp />,
    color: 'hover:bg-cs',
  },
];

const tools: Tools[] = [
  { title: 'git', icon: 'git' },
  { title: 'github', icon: 'github' },
  { title: 'gitlab', icon: 'gitlab' },
  { title: 'tailwindcss', icon: 'tailwind' },
  { title: 'vite', icon: 'vite' },
  { title: 'nextJS', icon: 'nextjs' },
  { title: 'ReactJS', icon: 'react' },
  { title: 'expressJS', icon: 'expressjs' },
  { title: 'nodeJS', icon: 'nodejs' },
  { title: 'mongoDB', icon: 'mongodb' },
  { title: 'postman', icon: 'postman' },
  { title: 'vscode', icon: 'vscode' },
  { title: 'vs', icon: 'visualstudio' },
  { title: 'figma', icon: 'figma' },
  { title: 'vercel', icon: 'vercel' },
];

const AboutPage = () => {
  return (
    <div className='relative px-4 py-10 w-full flex flex-col gap-10  justify-center items-center bg-primaryColorL text-black dark:bg-primaryColor dark:text-white transition duration-200'>
      <header className='relative flex justify-center items-center'>
        <Link
          aria-label='Home Page'
          href={'/'}
          className='absolute -left-[60px] flex items-center gap-1 px-5 py-2  text-lg lg:text-2xl'
        >
          <BiArrowBack />
        </Link>
        <section className='text-2xl lg:text-4xl font-semibold'>
          <h1>About Me</h1>
        </section>
      </header>
      <section className='p-5'>
        <h1 className='text-xl lg:text-2xl font-bold'>Skills</h1>
        <aside className='p-2 space-y-5'>
          <h2 className='text-base lg:text-lg font-semibold'>
            Programming Language
          </h2>
          <main className='flex flex-wrap gap-3 justify-center items-center p-1'>
            {programmingLanguage.map((element) => (
              <div
                key={element.title}
                className={`${element.color} hover:text-white flex flex-col justify-center items-center gap-5 border border-secondaryColorL dark:secondaryColor rounded-lg p-5 w-[130px] hover:scale-110 cursor-pointer transition-transform duration-200`}
              >
                <h1 className=' font-semibold'>{element.title}</h1>
                <section className='text-4xl'>{element.icon}</section>
              </div>
            ))}
          </main>
        </aside>
        <aside className='p-5 space-y-5'>
          <h2 className='text-base lg:text-lg font-semibold'>
            Tools / Technology
          </h2>
          <main className='flex flex-wrap gap-2 justify-center items-center p-2'>
            {tools.map((element) => (
              <Image
                src={`https://skillicons.dev/icons?i=${element.icon}`}
                alt={'skillIcon'}
                width={50}
                height={0}
                className=' max-w-[250px] h-auto'
                title={element.title}
              />
            ))}
          </main>
        </aside>
      </section>
      <section className='flex flex-col gap-3 p-5'>
        <h1 className='text-lg lg:text-xl font-semibold'>Github Stats</h1>
        <a href='https://github.com/Phol16' target='_blank' className=' font-medium flex gap-2 items w-fit self-end px-5 py-2 rounded-full dark:bg-secondaryColor bg-secondaryColorL text-white hover:bg-secondaryColor hover:text-black dark:hover:text-white dark:hover:bg-secondaryColorL dark:text-black hover:rounded-2xl transition-all  duration-200'>
            <h1>Phol16</h1>
            <FaGithub className='text-xl' />
        </a>
        <Image
          src='https://github-readme-stats.vercel.app/api?username=phol16&theme=graywhite&count_private=true&show_icons=true'
          alt='Gstatus'
          width={400}
          height={0}
          className='h-auto'
        />
                <Image
          src=' https://github-readme-stats.vercel.app/api/top-langs/?username=phol16&hide_progress=true&theme=graywhite'
          alt='Gstatus'
          width={400}
          height={0}
          className='h-auto'
        />
      </section>
    </div>
  );
};

export default AboutPage;
