import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ProjectsButton from './ProjectsButton';

type Props = {
  title: string;
  description: string;
  image: string;
  tech: string;
  live: string;
  source: string;
  number: number;
};

const ProjectsDetails = ({ title, image, description, tech, live, source, number }: Props) => {
  const [visible, setVisible] = useState<boolean>();
  const ProjRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries[0].isIntersecting ? setVisible(true) : setVisible(false);
      },
      { threshold: 0.5 }
    );
    if (ProjRef.current !== null) {
      observer.observe(ProjRef.current);
    }
  }, []);

  return (
    <div className='max-w-fit overflow-x-hidden' ref={ProjRef}>
      <section className={`${visible ? (number % 2 === 0 ? 'slideRight' : 'slideLeft') : number % 2 === 0 ? 'initialRight' : 'initialLeft'}`}>
        <main className='flex flex-col justify-center items-center gap-1'>
          <section className='flex gap-3'>
            <ProjectsButton live={live} source={source} />
          </section>
          {title === 'Movie Notepad' ? (
            <h1 className='text-lg font-medium'>
              Movie <span className='text-red-600'>Notepad</span>
            </h1>
          ) : title === 'Mini Messenger' ? (
            <h1 className='text-lg font-medium'>
              Mini <span className='messenger'>Messenger</span>
            </h1>
          ) : (
            <h1 className='text-lg font-medium'>{title}</h1>
          )}
        </main>
        <div className='relative overflow-hidden group rounded-lg'>
          <a href={live} target='_blank' className='cursor-pointer'>
            <img loading='lazy' decoding='async' src={image} alt='Photo' className='aspect-video w-[450px] 2xl:w-[500px] group-hover:blur-[2px] group-hover:scale-125 duration-[500ms]' />
            <section className=' bg-black/80 text-left text-xs sm:text-sm lg:text-base absolute inset-0 flex flex-col gap-2 items-center justify-center p-3 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-transform duration-[500ms] '>
              <h2 className=' text-primaryTextColor'>{tech}</h2>
              <p>{description}</p>
            </section>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsDetails;
