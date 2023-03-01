import { faDownload, faHamburger, faInfoCircle, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Logo from '../assets/svg/Logo';
import NavButton from './NavButton';
import PDF from '../assets/Lim_Pholibert_CV.pdf';
import ContactLinks from './ContactLinks';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-sky-700 p-5 flex justify-between w-full items-center'>
      <Logo />
      <nav className=' gap-5 pr-2 hidden md:flex'>
        <NavButton redirect={PDF} icon={<FontAwesomeIcon icon={faDownload} />} text={'CV/Resume'} />
        <NavButton redirect={'#About'} icon={<FontAwesomeIcon icon={faInfoCircle} />} text={'About Me'} />
        <NavButton redirect={'#Projects'} icon={<FontAwesomeIcon icon={faProjectDiagram} />} text={'Projects'} />
      </nav>
      <section className='flex flex-col md:hidden'>
        <button
          className='bg-transparent focus:outline-none'
          onClick={() => {
            setOpen(!open);
          }}
        >
          <FontAwesomeIcon icon={faHamburger} className='text-3xl hover:scale-125 transition-all duration-[150ms]' />
        </button>
        {open && (
          <nav className=' flex flex-col items-center gap-5 pt-5 absolute right-2 top-[98px] bg-sky-700 rounded-md w-40 z-10'>
            <h1 className='text-xl'>Phol</h1>
            <main className='flex flex-col justify-center items-center gap-3 py-20'>
              <NavButton redirect={PDF} icon={<FontAwesomeIcon icon={faDownload} />} text={'CV/Resume'} />
              <NavButton redirect={'#About'} icon={<FontAwesomeIcon icon={faInfoCircle} />} text={'About Me'} />
              <NavButton redirect={'#Projects'} icon={<FontAwesomeIcon icon={faProjectDiagram} />} text={'Projects'} />
            </main>
            <section className='bg-black/80 flex justify-center items-center flex-col rounded-b-md p-2'>
              <ContactLinks />
              <p className='text-xs'>pholibertlim@gmail.com</p>
            </section>
          </nav>
        )}
      </section>
    </div>
  );
};

export default Navbar;
