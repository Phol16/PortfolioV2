import { faCss3, faFigma, faGitAlt, faGithub, faGitlab, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faE, faLeaf, faS, faT, faWind, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontSizeIcon, FontSizeWH } from './ThemeRWD';

export const programmingLanguage = [
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className={`${FontSizeIcon} text-yellow-400`} />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faC} className={`${FontSizeIcon} text-blue-400`} />,
    name: 'C++',
  },
  {
    icon: (
      <section className={`${FontSizeIcon} text-blue-400 text-blue-500 flex justify-center`}>
        <FontAwesomeIcon icon={faT} />
        <FontAwesomeIcon icon={faS} />
      </section>
    ),
    name: 'TypeScript',
  },
];

export const techStack = [
  {
    icon: <FontAwesomeIcon icon={faLeaf} className={`${FontSizeIcon} text-green-500`} />,
    name: 'MongoDB',
  },
  {
    icon: (
      <div className={`${FontSizeIcon} flex justify-center`}>
        <FontAwesomeIcon icon={faE} className='text-gray-400' />
        <FontAwesomeIcon icon={faX} />
      </div>
    ),
    name: 'Express JS',
  },
  {
    icon: <FontAwesomeIcon icon={faReact} className={`${FontSizeIcon} text-blue-400`} />,
    name: 'React JS',
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs} className={`${FontSizeIcon} text-green-400`} />,
    name: 'Node JS',
  },
];

export const skills = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} className={`${FontSizeIcon} text-orange-500`} />,
    name: 'HTML',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} className={`${FontSizeIcon} text-blue-400`} />,
    name: 'CSS',
  },
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className={`${FontSizeIcon} text-yellow-400`} />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} className={`${FontSizeIcon} text-orange-500`} />,
    name: 'Git',
  },
];

export const design = [
  {
    icon: <FontAwesomeIcon icon={faCss3} className={`${FontSizeIcon} text-blue-400`} />,
    name: 'CSS',
  },
  {
    icon: (
      <svg viewBox='0 0 87 52' xmlns='http://www.w3.org/2000/svg' className={`${FontSizeWH} self-center fill-blue-500`}>
        <path d='M43.14 0C31.636 0 24.446 5.752 21.57 17.256C25.884 11.504 30.917 9.347 36.669 10.785C39.9512 11.6047 42.2952 13.9845 44.8944 16.6233C49.1257 20.9157 54.0185 25.884 64.71 25.884C76.214 25.884 83.404 20.132 86.28 8.628C81.966 14.38 76.933 16.537 71.181 15.099C67.8988 14.2793 65.5548 11.8994 62.9556 9.26072C58.7279 4.96829 53.8351 0 43.14 0ZM21.57 25.884C10.066 25.884 2.876 31.636 0 43.14C4.314 37.388 9.347 35.231 15.099 36.669C18.3812 37.4887 20.7252 39.8686 23.3244 42.5073C27.5557 46.7997 32.4485 51.768 43.14 51.768C54.644 51.768 61.834 46.016 64.71 34.512C60.396 40.264 55.363 42.421 49.611 40.983C46.3288 40.1633 43.9848 37.7835 41.3856 35.1447C37.1579 30.8523 32.2651 25.884 21.57 25.884Z' />
      </svg>
    ),
    name: 'TailwindCSS',
  },
  {
    icon: (
      <svg viewBox='0 0 87 69' xmlns='http://www.w3.org/2000/svg' className={`${FontSizeWH} self-center fill-blue-700 `}>
        <path d='M0 0.00359474V37.3556L10.785 43.5858V18.6796L32.355 31.1363L53.925 18.6796V31.1363L32.355 43.5858V56.0389L53.925 68.4883L86.28 49.8123V24.9062L75.495 31.1363V43.5858L53.925 56.0389L43.14 49.8123L64.71 37.3556V0.00359474L32.355 18.6796L0 0.00359474ZM86.28 0.00359474L75.495 6.22294V18.6796L86.28 12.4531V0.00359474Z' />
      </svg>
    ),
    name: 'Material UI',
  },
];

export const repo = [
  {
    icon: <FontAwesomeIcon icon={faGithub} className={`${FontSizeIcon}`}/>,
    name:'GitHub'
  },
  {
    icon:<FontAwesomeIcon icon={faGitlab} className={`${FontSizeIcon} text-orange-500`}/>,
    name:'GitLab'
  }

]