import { faCircle, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { ThemeFormat } from '../components/ThemeFormat'
import { ThemeContext } from '../layout/Intro'

const ConnectingPage = () => {
  const {primaryBGDark ,primaryDColorText,primaryBGLight ,primaryLColorText ,TsubHeading}=ThemeFormat
  const {dark}=useContext(ThemeContext)

  const BG = dark ? primaryBGDark : primaryBGLight
  const Text = dark? primaryDColorText : primaryLColorText
  

  return (
    <div className={`${BG} ${Text} ${TsubHeading} min-w-screen min-h-screen flex gap-2 justify-center items-center duration-[500ms]`}>
      <h1>Connecting</h1>
      <FontAwesomeIcon icon={faCircle} className={`animate-[bounce_0.9s_infinite]`}/>
      <FontAwesomeIcon icon={faCircle} className={`animate-[bounce_1s_infinite]`}/>
      <FontAwesomeIcon icon={faCircle} className={`animate-[bounce_1.1s_infinite]`}/>
    </div>
  )
}

export default ConnectingPage