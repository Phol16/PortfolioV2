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

import ProgrammingSkill from '@/app/about/components/ProgrammingSkill';
import Tools from '@/components/Tools';
import Button from '@/components/Button';

interface Skills {
  title: string;
  icon: ReactElement;
  color: string;
}
interface Tools {
  title: string;
  icon: string;
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
  { title: 'redux', icon: 'redux' },
  { title: 'prisma', icon: 'prisma' },
];

const AboutPage = () => {
  return (
    <div className='relative px-4 py-40 w-full flex flex-col gap-10  justify-center items-center bg-primaryColorL text-black dark:bg-primaryColor dark:text-white'>
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
          <h2 className='text-base lg:text-lg font-semibold'>Programming Language</h2>
          <main className='flex flex-wrap gap-3 justify-center items-center p-1'>
            {programmingLanguage.map((element) => (
              <ProgrammingSkill
                title={element.title}
                icon={element.icon}
                color={element.color}
                key={element.title}
              />
            ))}
          </main>
        </aside>
        <aside className='p-5 space-y-5'>
          <h2 className='text-base lg:text-lg font-semibold'>Tools / Technology</h2>
          <main className='flex flex-wrap gap-2 justify-center items-center p-2 max-w-3xl'>
            {tools.map((element) => (
              <Tools title={element.title} icon={element.icon} key={element.title} />
            ))}
          </main>
        </aside>
      </section>
      <section>
        <h1 className='text-lg lg:text-xl font-semibold'>Certifications</h1>
        <main className='flex gap-5 flex-wrap items-center justify-center p-5 my-5'>
          <Image
            src={
              'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680583345/Portfolio/uplift_ymob3e.png'
            }
            alt='certPhoto'
            width={300}
            height={0}
            className='h-auto'
          />
          <Image
            src={
              'https://res.cloudinary.com/dy23rmhmq/image/upload/v1680583169/Portfolio/Image_11_geuqux.jpg'
            }
            alt='certPhoto'
            width={300}
            height={0}
            className='h-auto'
          />
        </main>
      </section>
      <section className='flex flex-col gap-3 p-5'>
        <h1 className='text-lg lg:text-xl font-semibold'>Github Stats</h1>
        <a
          href='https://github.com/Phol16'
          target='_blank'
          className=' font-medium flex gap-2 items w-fit self-end'
        >
          <Button>
            <h1>Phol16</h1>
            <FaGithub className='text-xl' />
          </Button>
        </a>
        <Image
          src='https://github-readme-stats.vercel.app/api?username=phol16&theme=graywhite&count_private=true&show_icons=true'
          alt='Gstatus'
          width={400}
          height={0}
          className='h-auto'
        />
        <Image
          src='https://github-readme-stats.vercel.app/api/top-langs/?username=phol16&hide_progress=true&theme=graywhite'
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
