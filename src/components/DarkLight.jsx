import React, { useContext } from 'react';
import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeContext } from '../layout/Intro';
import { ThemeFormat } from './ThemeFormat';
import hover from './style/Hover.module.css';

const DarkLight = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const { primaryDColorText, primaryLColorText, FASizeIcon } = ThemeFormat;

  const PTextColor = dark ? primaryDColorText : primaryLColorText;

  localStorage.setItem('Mode', dark);

  return (
    <button
      className={`${PTextColor} bg-transparent focus:outline-none hover:scale-125 w-[60px] ${dark ? hover.DhoverFill : hover.LhoverFill}`}
      onClick={() => {
        setDark(!dark);
      }}
    >
      {dark ? <FontAwesomeIcon icon={faCloudSun} className={`${FASizeIcon} `} /> : <FontAwesomeIcon icon={faCloudMoon} className={`${FASizeIcon} `} />}
    </button>
  );
};

export default DarkLight;
