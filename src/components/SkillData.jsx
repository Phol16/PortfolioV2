import { faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faE, faLeaf, faS, faT, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const programmingLanguage = [
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className='text-2xl xl:text-4xl text-yellow-400' />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faC} className='text-2xl xl:text-4xl text-blue-400' />,
    name: 'C++',
  },
  {
    icon: (
      <section className='text-2xl xl:text-4xl text-blue-500 flex justify-center'>
        <FontAwesomeIcon icon={faT} />
        <FontAwesomeIcon icon={faS} />
      </section>
    ),
    name: 'TypeScript',
  },
];

export const techStack = [
  {
    icon: <FontAwesomeIcon icon={faLeaf} className='text-2xl xl:text-4xl p-1 text-green-500' />,
    name: 'MongoDB',
  },
  {
    icon: (
      <div className='text-sm p-1 xl:text-lg xl:text-2xl'>
        <FontAwesomeIcon icon={faE} className='text-gray-400' />
        <FontAwesomeIcon icon={faX} />
      </div>
    ),
    name: 'Express JS',
  },
  {
    icon: <FontAwesomeIcon icon={faReact} className='text-2xl xl:text-4xl p-1 text-blue-400' />,
    name: 'React JS',
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs} className='text-2xl xl:text-4xl p-1 text-green-400' />,
    name: 'Node JS',
  },
];

export const skills = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} className='text-2xl xl:text-4xl text-orange-500' />,
    name: 'HTML',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} className='text-2xl xl:text-4xl text-blue-400' />,
    name: 'CSS',
  },
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className='text-2xl xl:text-4xl text-yellow-400' />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} className='text-2xl xl:text-4xl text-orange-500' />,
    name: 'Git',
  },
];
