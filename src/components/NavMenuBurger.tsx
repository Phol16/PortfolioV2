import { useCallback, useState } from 'react';
import { Menu } from './NavMenu';
import GitHubIcon from '../assets/svg/GitHubIcon';
import LinkedInIcon from '../assets/svg/LinkedInIcon';

const NavMenuBurger = () => {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className='fixed top-0 right-0 w-[60vw] bg-white text-primaryBackground h-[100dvh] z-40 flex flex-col justify-between py-10'>
      <h1 className='self-center font-bold text-2xl'>Phol</h1>
      <main>
        <ul className='flex flex-col gap-5'>
          {Menu.map(({ redirect, Icon, title }, index) => {
            return (
              <li className=' cursor-pointer transition-colors duration-150' key={index}>
                <a href={redirect} className='w-[8rem]'>
                  <button
                    className='flex justify-center hover:bg-primaryBackground w-full py-5 hover:text-secondaryTextColor'
                    onMouseOver={useCallback(() => {
                      setHover(title);
                    }, [title])}
                    onMouseOut={useCallback(() => {
                      setHover(null);
                    }, [title])}
                  >
                    <section className='flex gap-1 w-[8rem]'>
                      {Icon ? <Icon fill={hover === title ? 'white' : 'black'} transition='ease 100ms' /> : null}
                      <p>{title}</p>
                    </section>
                  </button>
                </a>
              </li>
            );
          })}
        </ul>
      </main>
      <footer className='flex justify-center items-center gap-5'>
        <a href='https://github.com/Phol16' target='_blank'>
          <GitHubIcon fill='black' />
        </a>
        <a href='https://www.linkedin.com/in/pholibert-lim-37a51323b/' target='_blank'>
          <LinkedInIcon fill='black' />
        </a>
      </footer>
    </div>
  );
};

export default NavMenuBurger;
