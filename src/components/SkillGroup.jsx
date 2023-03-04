import React, { useContext } from 'react';
import { ThemeContext } from '../layout/Intro';
import { TminiHeading, TminiContent, tertiaryTextColor, tertiaryTextColorDark } from './ThemeRWD';

const SkillGroup = ({ name, information }) => {
  const { dark } = useContext(ThemeContext);
  const TTextColor = dark ? tertiaryTextColor : tertiaryTextColorDark;
  return (
    <section className='p-1 self-end'>
      <h3 className={`${TminiHeading} ${TTextColor} ${name ? 'mb-5' : null}`}>{name}</h3>
      <main className='flex justify-center gap-5 '>
        {information.map((details) => {
          return (
            <div className='flex flex-col justify-end ' key={details.name}>
              {details.icon}
              <p className={`${TminiContent}`}>{details.name}</p>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default SkillGroup;
