import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faCloudMoon, faCloudSun, faHomeAlt, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../layout/Intro';
import { FontSizeIcon, primaryTextColor, primaryTextColorDark } from './ThemeRWD';

const DarkLight = () => {
  const {dark, setDark} = useContext(ThemeContext);
  const PTextColor = dark ? primaryTextColor : primaryTextColorDark

  return (
    <div className='flex flex-col gap-2 items-center'>
      <a href='#Top'><button className={`${PTextColor} bg-transparent focus:outline-none`}>
        <FontAwesomeIcon icon={faHomeAlt} className={`${FontSizeIcon} hover:scale-125 transtion-all duration-[150ms]`}/>
        </button></a>
    <button
    className={`${PTextColor} bg-transparent focus:outline-none`}
    onClick={() => {
      setDark(!dark);
    }}
  >
    {dark?
    <FontAwesomeIcon icon={faCloudSun} className={`${FontSizeIcon} hover:scale-125 transtion-all duration-[150ms]`}/>
    :
    <FontAwesomeIcon icon={faCloudMoon}  className={`${FontSizeIcon} hover:scale-125 transtion-all duration-[150ms]`}/>
    }
    </button>
    </div>
  )
}

export default DarkLight