import { useCallback, useState } from 'react';
import githubIcon from '../assets/svg/githubIcon.svg';
import sourceIcon from '../assets/svg/sourceCodeIcon.svg';

type Props = {
  live: string;
  source: string;
};

interface redirects {
  icon: string;
  toolTip: string;
  redirect: string;
}

const ProjectsButton = ({ live, source }: Props) => {
  const [info, setInfo] = useState<string | null>(null);

  const ProjectButtons: redirects[] = [
    {
      icon: sourceIcon,
      toolTip: 'View Live',
      redirect: live,
    },
    {
      icon: githubIcon,
      toolTip: 'Source Code',
      redirect: source,
    },
  ];

  const handleMouseOver = useCallback(
    (toolTip: string) => {
      if (toolTip) setInfo(toolTip);
    },
    [info]
  );

  return (
    <>
      {ProjectButtons.map((element, index) => {
        return (
          <main className='relative flex flex-col justify-center items-center mt-8' key={index}>
            {info === element.toolTip && <p className='border absolute text-xs w-24 rounded-lg p-1 text-center -top-8'>{element.toolTip}</p>}
            <a
              className='cursor-pointer' 
              href={element.redirect}
              target='_blank'
              title={element.toolTip}
              onMouseOut={useCallback(() => {
                setInfo(null);
              }, [info])}
              onMouseOver={() => {
                handleMouseOver(element.toolTip);
              }}
            >
              <img src={element.icon} alt='Icon' className={element.icon === sourceIcon ? `w-4 h-6` : `w-5 h-7`} />
            </a>
          </main>
        );
      })}
    </>
  );
};

export default ProjectsButton;
