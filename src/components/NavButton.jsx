import React from 'react'

const NavButton = ({redirect, icon, text}) => {
  return (
    <a href={redirect}>
    <button className='bg-transparent focus:outline-none text-white transition-all hover:scale-110 duration-[150ms] hover:text-sky-300'>
      <div className='text-xl'>{icon}</div>
      <p className='text-sm'>{text}</p>
    </button>
  </a>
  )
}

export default NavButton