import React, { useContext, useState } from 'react';
import { faDownload, faHamburger, faInfoCircle, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../layout/Intro';
import { ThemeFormat } from './ThemeFormat';
import Logo from '../assets/svg/Logo';
import PDF from '../assets/Lim_Pholibert_CV.pdf';
import NavButton from './NavButton';
import ContactLinks from './ContactLinks';
import FixedNav from './FixedNav';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { dark } = useContext(ThemeContext);
  const { secondaryBgDark, secondaryBgLight } = ThemeFormat;

  const SBGColor = dark ? secondaryBgDark : secondaryBgLight;

  return (
    <>
      <div className={`${SBGColor} p-5 flex justify-between w-full items-center z-30`} id='Home'>
        <Logo />
        <nav className=' gap-5 pr-2 hidden md:flex'>
          <NavButton redirect={PDF} icon={<FontAwesomeIcon icon={faDownload} />} text={'CV/Resume'} />
          <NavButton redirect={'#About'} icon={<FontAwesomeIcon icon={faInfoCircle} />} text={'About Me'} />
          <NavButton redirect={'#Projects'} icon={<FontAwesomeIcon icon={faProjectDiagram} />} text={'Projects'} />
        </nav>
        <section className='flex flex-col md:hidden text-white'>
          <button
            className='bg-transparent focus:outline-none'
            onClick={() => {
              setOpen(!open);
            }}
          >
            <FontAwesomeIcon icon={faHamburger} className={` text-3xl hover:scale-125 transition-all duration-[150ms]`} />
          </button>
        </section>
      </div>
      <nav className={`${SBGColor} text-white flex flex-col md:hidden items-center gap-5 pt-5 absolute right-2 rounded-md w-40 z-20 ${open ? 'top-[98px]' : 'top-[-100%]'}`}>
        <h1 className='text-xl'>Phol</h1>
        <main className='flex flex-col gap-3 py-20'>
          <NavButton redirect={PDF} icon={<FontAwesomeIcon icon={faDownload} />} text={'CV/Resume'} />
          <NavButton redirect={'#About'} icon={<FontAwesomeIcon icon={faInfoCircle} />} text={'About Me'} />
          <NavButton redirect={'#Projects'} icon={<FontAwesomeIcon icon={faProjectDiagram} />} text={'Projects'} />
        </main>
        <section className={` flex justify-center items-center flex-col rounded-b-md p-2 w-full`}>
          <ContactLinks />
          <p className='text-xs'>pholibertlim@gmail.com</p>
        </section>
      </nav>
      <nav className='fixed bottom-20 right-0 z-10'>
        <FixedNav />
      </nav>
    </>
  );
};

export default Navbar;
