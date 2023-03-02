import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import DarkLight from './DarkLight';
import { FASizeIcon, primaryTextColor, primaryTextColorDark } from './ThemeRWD';
import hover from './style/hover.module.css';
import { ThemeContext } from '../layout/Intro';

const contact = [
  {
    icon: faGithub,
    redirect: 'https://github.com/Phol16',
  },
  {
    icon: faLinkedin,
    redirect: 'https://www.linkedin.com/in/pholibert-lim-37a51323b/',
  },
];

const FixedNav = () => {
  const { dark } = useContext(ThemeContext);
  const PTextColor = dark ? primaryTextColor : primaryTextColorDark;
  return (
    <div className='flex flex-col gap-2'>
      {contact.map((details) => {
        return (
          <button
            key={details.redirect}
            className={`${PTextColor} bg-transparent hover:scale-125 transition-all duration-[150ms] focus:outline-none ${dark ? hover.DhoverFill : hover.LhoverFill}`}
            onClick={() => {
              window.open(details.redirect, '_blank');
            }}
          >
            <FontAwesomeIcon icon={details.icon} className={`${FASizeIcon}`} />
          </button>
        );
      })}
      <DarkLight />
    </div>
  );
};

export default FixedNav;
