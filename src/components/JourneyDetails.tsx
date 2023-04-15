import React, { useEffect, useRef, useState } from 'react';
import DotIcon from '../assets/svg/DotIcon';

type props = {
  title: string;
  year?: number;
  index: number;
};

const JourneyDetails = ({ title, year,  index }: props) => {
  const [visible, setVisible] = useState<boolean>();
  const ProjRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries[0].isIntersecting ? setVisible(true) : null;
    });
    if (ProjRef.current !== null) {
      observer.observe(ProjRef.current);
    }
  }, []);

  return (
    <main ref={ProjRef} key={index} className={` relative flex items-center px-5 ${index % 2 === 0 ? 'md:justify-end' : 'md:left-[100%]'} `}>
      <p className={`w-fit max-w-[16rem] ${visible ? 'slideTop': 'initialTop'}`} >{title}</p>
      {year ? <span className={`text-primaryTextColor ${visible ? 'slideTop': 'initialTop'}`}>{year}</span> : null}
      <span className={`absolute left-0 ${index % 2 === 0 ? 'md:left-[100%]' : ''}`}>
        <DotIcon />
      </span>
    </main>
  );
};

export default JourneyDetails;
