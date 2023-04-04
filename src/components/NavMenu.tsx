import { useCallback, useState } from 'react';
import DownloadIcon from '../assets/svg/DownloadIcon';
import AboutMeIcon from '../assets/svg/AboutMeIcon';
import ProjectIcon from '../assets/svg/ProjectIcon';
import BarsIcon from '../assets/svg/BarsIcon';
import NavMenuBurger from './NavMenuBurger';
import CV from '../assets/Lim_Pholibert_CV.pdf'

type prop = {
  fill: string;
  transition: string;
};

type menu = {
  title: string;
  Icon?: ({ fill, transition }: prop) => JSX.Element;
  redirect?: string;
};

export const Menu: menu[] = [
  {
    title: 'CV/Resume',
    Icon: DownloadIcon,
    redirect: CV,
  },
  {
    title: 'About Me',
    Icon: AboutMeIcon,
    redirect: '#About',
  },
  {
    title: 'Projects',
    Icon: ProjectIcon,
    redirect: '#Project',
  },
];

const NavMenu = () => {
  const [hover, setHover] = useState<string | null>(null);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className='text-black hidden md:flex'>
        <ul className='flex gap-5 font-semibold'>
          {Menu.map(({ title, Icon, redirect }, index) => {
            return (
              <li className='hover:text-secondaryTextColor cursor-pointer transition-colors duration-150' key={index}>
                <a href={redirect}>
                  <button
                    className='flex justify-center items-center gap-1'
                    onMouseOver={useCallback(() => {
                      setHover(title);
                    }, [title])}
                    onMouseOut={useCallback(() => {
                      setHover(null);
                    }, [title])}
                  >
                    {Icon ? <Icon fill={hover === title ? 'white' : 'black'} transition='ease 100ms' /> : null}
                    <p>{title}</p>
                  </button>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='flex flex-col md:hidden relative'>
        <button
          onClick={useCallback(() => {
            setOpen(true);
          }, [open])}
        >
          <BarsIcon />
        </button>
        {open && (
          <>
            <section
              className='fixed top-0 left-0 w-[100vw] h-[100vh] bg-black/30 z-30'
              onClick={() => {
                setOpen(false);
              }}
            ></section>
            <NavMenuBurger />
          </>
        )}
      </div>
    </>
  );
};

export default NavMenu;
