import React from 'react'
import { heading, subHeading, miniHeading, miniContent, tertiaryTextColor } from './ThemeRWD';

const SkillGroup = ({name, information}) => {
  return (
    <section className='p-2'>
    <h3 className={`${miniHeading} ${tertiaryTextColor}`}>{name}</h3>
    <main className='flex justify-center gap-5 text-xs'>
      {information.map((details) => {
        return (
          <div className='flex flex-col xl:text-base' key={details.name}>
            {details.icon}
            <p className={miniContent}>{details.name}</p>
          </div>
        );
      })}
    </main>
  </section>
  )
}

export default SkillGroup