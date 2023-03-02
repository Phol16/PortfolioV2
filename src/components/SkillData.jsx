import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faE, faLeaf, faS, faT, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FontSizeIcon } from './ThemeRWD';

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
