import React, { useContext } from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../layout/Intro';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { ThemeFormat } from './ThemeFormat';
import DarkLight from './DarkLight';
import hover from './style/Hover.module.css';

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

const FixedNav = ({navVisible}) => {
  const { dark } = useContext(ThemeContext);
  const { primaryDColorText, primaryLColorText, FASizeIcon } = ThemeFormat;

  const PTextColor = dark ? primaryDColorText : primaryLColorText;

  return (
    <div className='flex flex-col gap-2'>
      <section className={`flex flex-col gap-2 ${navVisible ? 'hidden' : 'flex'}`}>
      <a href='#Home' className={`${PTextColor} hover:scale-125 focus:outline-none ${dark ? hover.DhoverFill : hover.LhoverFill}`}>
        <button className='bg-transparent focus:outline-none'>
          <FontAwesomeIcon icon={faHome} className={FASizeIcon} />
        </button>
      </a>
      {contact.map((details) => {
        return (
          <button
            key={details.redirect}
            className={`${PTextColor} bg-transparent hover:scale-125 focus:outline-none ${dark ? hover.DhoverFill : hover.LhoverFill}`}
            onClick={() => {
              window.open(details.redirect, '_blank');
            }}
          >
            <FontAwesomeIcon icon={details.icon} className={`${FASizeIcon}`} />
          </button>
        );
      })}
      </section>
      <DarkLight />
    </div>
  );
};

export default FixedNav;
