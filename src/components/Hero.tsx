import { useState, useRef, useEffect } from 'react';
import arrowDownSVG from '../assets/svg/arrowDown.svg';
import avatar from '../assets/svg/AvatarIcon.svg';
import cube from '../assets/svg/CubeIcon.svg'
import triangle from '../assets/svg/TriangleIcon.svg'

type timeOutIDs = ReturnType<typeof setTimeout>;

const Hero = () => {
  const [displayInfo, setDisplayInfo] = useState<string[]>([]);
  const [deleteMode, setDeleteMode] = useState<boolean>(false);
  const currIndex = useRef(0);
  const currChar = useRef(0);

  useEffect(() => {
    const detailInfo: string[] = ['Software Developer', 'Full-Stack Developer', 'Movie Enthusiast'];
    let dispalyTimeoutId: timeOutIDs;
    let delayCursorId: timeOutIDs;

    detailInfo.map((element, index) => {
      //will restart to the begining if the current index is at the last index
      if (currIndex.current === detailInfo.length) {
        currIndex.current = 0;
      }

      if (currIndex.current === index) {
        //determine which mode will be activated
        if (currChar.current === element.length) {
          //will change the current index of the detailsInfo to be display
          if (deleteMode && currChar.current === element.length) {
            currChar.current = 0;
            setDeleteMode(!deleteMode);
            currIndex.current = currIndex.current + 1;
          }

          //added delay before changing delete mode
          delayCursorId = setTimeout(() => {
            setDeleteMode(!deleteMode);
            currChar.current = 0;
          }, 500);
        } else {
          //displaying the information
          dispalyTimeoutId = setTimeout(() => {
            if (deleteMode) {
              setDisplayInfo(displayInfo.slice(0, displayInfo.length - 1));
              currChar.current = currChar.current + 1;
            } else {
              setDisplayInfo([...displayInfo, element.charAt(currChar.current)]);
              currChar.current = currChar.current + 1;
            }
          }, 100);
        }
      }
    });

    //cleanup function
    return () => {
      clearTimeout(delayCursorId);
      clearTimeout(dispalyTimeoutId);
    };
  }, [displayInfo, deleteMode]);

  return (
    <main className='relative'>
    <div className=' relative flex flex-col justify-center space-y-2 items-center h-[calc(100vh-82px)] p-1 z-10'>
      <h1 className='font-medium text-3xl md:text-4xl relative'>
        <a href='#About' className='cursor-pointer absolute -top-14 md:-top-16 right-0 hover:translate-y-0.5 transition-transform duration-150'>
          <img src={avatar} alt='Photo' loading='lazy' decoding='async' className='w-14 h-14 md:w-16 md:h-16' title='Phol' />
        </a>
        Hi! My name is <span className='text-primaryTextColor'>Phol</span>
      </h1>
      <main className=' px-6 max-w-xs md:max-w-sm text-xs md:text-sm'>
        <h2 className='text-primaryTextColor my-1'>
          {displayInfo} <span className={`cursor text-secondaryTextColor`}>|</span>
        </h2>
        <p>I`m a MERN stack developer. I`m knowledgeable in creating front-end and back-end and I`m eager to learn more advance technologies</p>
      </main>
      <a href='#Project'>
        <section className='absolute bottom-4 left-0 flex flex-col items-center justify-center gap-6 cursor-pointer animate-bounce'>
          <p className=' rotate-[270deg] font-normal text-[10px]'>Scroll Down</p>
          <img src={arrowDownSVG} alt='arrowDown' className='w-3 h-3' />
        </section>
      </a>
    </div>
    <section className='absolute top-0 -z-40 w-full h-[100svh]'>
      <img loading='lazy' decoding='async' src={cube} alt="cube" className='absolute top-[75%] left-[220px] w-20 h-20 opacity-20'/>
      <img loading='lazy' decoding='async' src={triangle} alt="cube" className='absolute top-[15%] right-[220px] w-20 h-20 opacity-20'/>
    </section>
    </main>
  );
};

export default Hero;
