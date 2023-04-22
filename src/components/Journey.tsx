import { useEffect } from 'react';
import DotIcon from '../assets/svg/DotIcon';
import { useRef } from 'react';
import { useState } from 'react';
import JourneyDetails from './JourneyDetails';

interface details {
  year?: number;
  content: string;
}

const Details: details[] = [{ content: '', year: 2021 }, { content: 'Graduated College' }, { content: 'Learning C#' }, { content: 'Learning Web Fundamentals' }, { content: '', year: 2022 }, { content: 'Enrolled in a Bootcamp' }, { content: 'Learning Git' }, { content: 'Re-Learning Web Fundamentals' }, { content: 'Javascript (Basic - Advance)' }, { content: 'React JS' }, { content: 'Node JS' }, { content: 'Express JS' }, { content: 'General Programming' }, { content: 'MongoDB' }, { content: 'Graduated from BootCamp' }, { content: '', year: 2023 }, { content: 'Re-Learning C#' }, { content: 'Learning TypeScript' }, { content: 'Currently Learning NextJS' }, { content: 'Will learn Relational Database Management System(RDBMS)' }];

const Journey = () => {
  return (
    <div className=' text-secondaryTextColor flex flex-col '>
      <div className='text-primaryTextColor'>Journey</div>
      <aside className=' relative -left-[25px] overflow-hidden my-8 py-2'>
        <section className='relative md:-left-[70px] w-fit text-xs md:text-base flex flex-col px-10 gap-8 '>
          {Details.map((element, index) => {
            return (
                <JourneyDetails title={element.content} year={element.year} index={index} />
            );
          })}
          <div className='absolute -top-2 line h-[97%] left-11 md:left-[90.5%]'></div>
        </section>
      </aside>
    </div>
  );
};

export default Journey;
