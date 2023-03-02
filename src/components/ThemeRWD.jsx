import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ThemeContext } from "../layout/Intro";

export const ThemeRWD = () => {
  const [dark, setDark] = useContext(ThemeContext)
  return (
    <button
    className=' bg-transparent'
    onClick={() => {
      setDark(!dark);
    }}
  >
    <FontAwesomeIcon icon={faCloudMoon} />
  </button>
  )
}
export const LD =()=>{
  const [dark] =useContext(ThemeContext)
  return dark
}

export const heading = 'text-lg md:text-xl xl:text-2xl';
export const subHeading = 'text-base md:text-lg xl:text-xl';
export const miniHeading = 'text-xs md:text-sm xl:text-base';
export const miniContent = 'text-xs xl:text-sm p-1';

export const FontSizeIcon = 'text-xl xl:text-2xl p-1'

export const primaryTextColor = 'text-white'
export const secondaryTextColor =  'text-sky-400'
export const tertiaryTextColor = 'text-sky-300'

export const primaryBgColor = 'bg-zinc-900'
export const secondaryBgColor = 'bg-sky-800'