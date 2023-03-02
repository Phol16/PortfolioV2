import { faCloudMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { ThemeContext } from '../layout/Intro';
import { FASizeIcon, primaryTextColor, primaryTextColorDark } from './ThemeRWD';
import hover from './style/Hover.module.css';

const DarkLight = () => {
  const { dark, setDark } = useContext(ThemeContext);
  const PTextColor = dark ? primaryTextColor : primaryTextColorDark;

  return (
    <button
      className={`${PTextColor} flex justify-center bg-transparent focus:outline-none hover:scale-125 transtion-all duration-[150ms] w-[60px] ${dark ? hover.DhoverFill : hover.LhoverFill}`}
      onClick={() => {
        setDark(!dark);
      }}
    >
      {dark ? <FontAwesomeIcon icon={faCloudSun} className={`${FASizeIcon} `} /> : <FontAwesomeIcon icon={faCloudMoon} className={`${FASizeIcon} `} />}
    </button>
  );
};

export default DarkLight;
