import React, { useContext } from 'react';
import { ThemeContext } from '../layout/Intro';
import { miniHeading, miniContent, tertiaryTextColor, tertiaryTextColorDark } from './ThemeRWD';

const SkillGroup = ({ name, information }) => {
  const { dark } = useContext(ThemeContext);
  const TTextColor = dark ? tertiaryTextColor : tertiaryTextColorDark;
  return (
    <section className='p-2'>
      <h3 className={`${miniHeading} ${TTextColor} ${name ? 'mb-5' : null}`}>{name}</h3>
      <main className='flex justify-center gap-5 text-xs'>
        {information.map((details) => {
          return (
            <div className='flex flex-col justify-end xl:text-base' key={details.name}>
              {details.icon}
              <p className={miniContent}>{details.name}</p>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default SkillGroup;
