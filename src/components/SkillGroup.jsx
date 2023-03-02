import React from 'react'

const SkillGroup = ({name, information}) => {
  return (
    <section className='p-2'>
    <h3 className='text-sm mb-2 text-sky-200'>{name}</h3>
    <main className='flex justify-center gap-5 text-xs'>
      {information.map((details) => {
        return (
          <div className='flex flex-col xl:text-base'>
            {details.icon}
            <p>{details.name}</p>
          </div>
        );
      })}
    </main>
  </section>
  )
}

export default SkillGroup