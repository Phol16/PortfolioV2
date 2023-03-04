import { faCss3, faGitAlt, faGithub, faGitlab, faHtml5, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC, faE, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FASizeIcon, SVGSizeWH } from './ThemeRWD';

export const programmingLanguage = [
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className={`${FASizeIcon} text-yellow-400`} />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faC} className={`${FASizeIcon} `} />,
    name: 'C++',
  },
  {
    icon: (
      <svg viewBox='0 0 87 87' xmlns='http://www.w3.org/2000/svg' className={`${SVGSizeWH} fill-blue-700 self-center`}>
        <path d='M0 43.14V86.28H86.28V0H0V43.14ZM69.5309 39.7032C71.7238 40.2496 73.3919 41.2239 74.927 42.8129C75.7215 43.6613 76.9006 45.2071 76.9941 45.581C77.0229 45.6889 73.2697 48.2054 70.9977 49.6182C70.915 49.6721 70.5842 49.3162 70.2175 48.7698C69.1031 47.152 67.9419 46.4546 66.1624 46.3324C63.5452 46.1526 61.8628 47.5223 61.8771 49.8087C61.8533 50.371 61.9799 50.9294 62.2438 51.4265C62.819 52.6164 63.8903 53.3318 67.2409 54.7806C73.4207 57.4409 76.063 59.1917 77.7059 61.683C79.5394 64.4619 79.9528 68.9018 78.7053 72.202C77.3392 75.7898 73.942 78.2272 69.1606 79.0325C67.6831 79.2949 64.1779 79.2554 62.5889 78.9678C59.1234 78.3494 55.8375 76.6382 53.81 74.3913C53.0155 73.5178 51.466 71.2277 51.5631 71.066C51.8123 70.8754 52.0768 70.7059 52.354 70.5591C52.7422 70.3398 54.191 69.5021 55.5607 68.7076L58.0413 67.2696L58.5626 68.039C59.2887 69.1462 60.8741 70.6669 61.834 71.1738C64.5878 72.6262 68.3661 72.4213 70.2283 70.7496C70.6028 70.4342 70.8992 70.0364 71.0944 69.5873C71.2896 69.1383 71.3783 68.6502 71.3536 68.1612C71.3536 67.1618 71.2277 66.7232 70.7065 65.9683C70.0378 65.012 68.6681 64.2067 64.7783 62.517C60.3277 60.6009 58.4116 59.411 56.6572 57.52C55.5622 56.2721 54.7536 54.7996 54.2881 53.206C53.9609 51.9873 53.8783 48.9315 54.1371 47.7021C55.0538 43.3988 58.3001 40.4042 62.9844 39.5126C64.5051 39.225 68.039 39.3329 69.5309 39.7032ZM49.2767 43.3054L49.3054 46.8393H38.0711V78.7485H30.1261V46.8393H18.9025V43.3737C18.9025 41.4539 18.9421 39.8506 18.996 39.8146C19.0391 39.7571 25.8732 39.7283 34.1561 39.7427L49.2371 39.7859L49.2767 43.3054Z' />
      </svg>
    ),
    name: 'TypeScript',
  },
];

export const techStack = [
  {
    icon: (
      <svg viewBox='0 0 87 193' xmlns='http://www.w3.org/2000/svg' className={`w-3 fill-green-700 self-center`}>
        <path d='M84.6856 76.315C74.5589 31.7351 50.6733 17.0863 48.1076 11.4817C45.2853 7.52887 42.2304 0 42.2304 0L42.1903 0.39288V0.497114H42.1823C42.1681 0.600952 42.1574 0.705246 42.1502 0.809815V0.930084H42.1342L42.1182 1.13855V1.34702H42.0941C42.0861 1.41116 42.0861 1.49134 42.0701 1.54747V1.71585H42.054C42.054 1.77197 42.054 1.83611 42.038 1.88422V2.04458H42.0219L42.0059 2.30116V2.31719L41.9337 2.71809V2.78223H41.9177L41.8937 2.87845V3.01476H41.8696V3.19115H41.8295V3.33547H41.7894V3.50385H41.7574V3.65619H41.7253V3.7925H41.6772V3.90475H41.6451V4.04907H41.613V4.16133H41.5729V4.26556H41.5489V4.38583H41.5168L41.5088 4.4179V4.49808H41.4847L41.4767 4.54619V4.5943H41.4607C41.4522 4.62031 41.4469 4.64722 41.4446 4.67448L41.3645 4.84285V4.85889C41.3485 4.87557 41.335 4.89448 41.3244 4.91501V4.97916H41.2923V5.0433H41.2522V5.10745H41.2282V5.18763H41.1801V5.29988H41.148V5.33195H41.1159V5.39609H41.0838V5.48429H41.0518V5.54843H41.0037V5.63663H40.9716V5.70078H40.9315V5.76492H40.9074V5.8451H40.8674V5.90924H40.8353V5.95735H40.8032V6.02149H40.7551V6.09366H40.723V6.14176H40.6829V6.20591H40.6509V6.29411H40.6108V6.32618H40.5867V6.39032H40.5386V6.42239H40.5066V6.50257H40.4745V6.53464H40.4424V6.59879H40.4023V6.6469H40.3783L40.3622 6.67897V6.71104H40.3462L40.3302 6.74311L40.3221 6.75113C40.3164 6.77227 40.3054 6.79159 40.2901 6.80725V6.83131L40.1858 6.97563C40.1698 6.99167 40.1297 7.03176 40.1137 7.06383V7.07987H40.1057L40.0816 7.10392V7.12797H40.0656L40.0415 7.15203L40.0335 7.16005L40.0094 7.19212V7.22419H39.9854L39.9693 7.24023V7.25626H39.9533C39.9533 7.2723 39.9373 7.2723 39.9373 7.28032V7.30437H39.9052L39.8892 7.32842V7.37653H39.8651V7.4086H39.833V7.45671H39.801V7.52085H39.7609V7.45671H39.7208V7.48878H39.6887V7.53689H39.6486V7.60103H39.6085V7.63311H39.5765V7.68121H39.5444V7.71329H39.5123V7.77743H39.4642V7.8095H39.4321V7.85761H39.3921V7.88968H39.36V7.92977H39.3199V8.00995H39.3039V8.04202H39.2557V8.08211H39.2237V8.09815H39.1916V8.13022H39.1515V8.2104H39.1194V8.24247H39.0793V8.27454H39.0473V8.32265H39.0072V8.35472H38.9671V8.38679H38.935V8.41887H38.903V8.49905H38.8709V8.53914H38.8228V8.57121H38.7907V8.60328H38.7506V8.65139H38.7185V8.68346H38.6785V8.73959H38.6464V8.77166H38.5983V8.81977H38.5822V8.85184H38.5502V8.88391H38.5101V8.91598H38.478V8.96409H38.4379V8.99616H38.4139L38.4058 9.0122V9.02823H38.3898L38.3577 9.0603L38.3257 9.08436V9.13247H38.2936V9.17256H38.2615V9.20463H38.2294V9.2367H38.2054L38.1813 9.26075V9.28481H38.1653L38.1493 9.30084V9.3249H38.1332C38.0931 9.373 38.0771 9.40508 38.021 9.45318C37.8748 9.55288 37.7379 9.66559 37.6121 9.78994L37.4357 9.92624L37.4277 9.93426C37.2979 10.0399 37.1669 10.1442 37.0348 10.247V10.255L36.4414 10.7521L36.4254 10.7441C35.9684 11.1209 35.4873 11.5459 34.9341 12.0189V12.027H34.926C33.571 13.2136 31.9594 14.737 30.1554 16.5812L30.0351 16.7014L30.003 16.7335C19.0986 28.0148 1.91607 51.5235 0.104009 89.5126C-0.0563507 92.6556 -0.0242785 95.7105 0.152117 98.6851V98.7573C1.02608 113.727 5.7246 126.508 11.6018 136.891C13.943 141.028 16.4687 144.796 19.0264 148.164C27.8622 159.83 36.8824 166.75 39.1836 168.425C42.7195 176.628 42.3908 190.707 42.3908 190.707L47.5543 192.431C47.5543 192.431 46.504 178.793 47.9793 172.21C48.4363 170.149 49.5187 168.393 50.7776 166.902C53.0112 165.31 55.1453 163.583 57.1679 161.73C57.3122 161.578 57.3924 161.442 57.5207 161.297C69.716 149.928 92.4951 121.929 84.6856 76.315Z' />
      </svg>
    ),
    name: 'MongoDB',
  },
  {
    icon: (
      <div className={`${FASizeIcon} flex justify-center`}>
        <FontAwesomeIcon icon={faE} className='text-gray-400' />
        <FontAwesomeIcon icon={faX} />
      </div>
    ),
    name: 'ExpressJS',
  },
  {
    icon: <FontAwesomeIcon icon={faReact} className={`${FASizeIcon} text-blue-400`} />,
    name: 'ReactJS',
  },
  {
    icon: <FontAwesomeIcon icon={faNodeJs} className={`${FASizeIcon} text-green-400`} />,
    name: 'NodeJS',
  },
];

export const skills = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} className={`${FASizeIcon} text-orange-500`} />,
    name: 'HTML',
  },
  {
    icon: <FontAwesomeIcon icon={faCss3} className={`${FASizeIcon} text-blue-400`} />,
    name: 'CSS',
  },
  {
    icon: <FontAwesomeIcon icon={faJsSquare} className={`${FASizeIcon} text-yellow-400`} />,
    name: 'Javascript',
  },
  {
    icon: <FontAwesomeIcon icon={faGitAlt} className={`${FASizeIcon} text-orange-500`} />,
    name: 'Git',
  },
];

export const design = [
  {
    icon: <FontAwesomeIcon icon={faCss3} className={`${FASizeIcon} text-blue-400`} />,
    name: 'CSS',
  },
  {
    icon: (
      <svg viewBox='0 0 87 52' xmlns='http://www.w3.org/2000/svg' className={`${SVGSizeWH} self-center fill-blue-500`}>
        <path d='M43.14 0C31.636 0 24.446 5.752 21.57 17.256C25.884 11.504 30.917 9.347 36.669 10.785C39.9512 11.6047 42.2952 13.9845 44.8944 16.6233C49.1257 20.9157 54.0185 25.884 64.71 25.884C76.214 25.884 83.404 20.132 86.28 8.628C81.966 14.38 76.933 16.537 71.181 15.099C67.8988 14.2793 65.5548 11.8994 62.9556 9.26072C58.7279 4.96829 53.8351 0 43.14 0ZM21.57 25.884C10.066 25.884 2.876 31.636 0 43.14C4.314 37.388 9.347 35.231 15.099 36.669C18.3812 37.4887 20.7252 39.8686 23.3244 42.5073C27.5557 46.7997 32.4485 51.768 43.14 51.768C54.644 51.768 61.834 46.016 64.71 34.512C60.396 40.264 55.363 42.421 49.611 40.983C46.3288 40.1633 43.9848 37.7835 41.3856 35.1447C37.1579 30.8523 32.2651 25.884 21.57 25.884Z' />
      </svg>
    ),
    name: 'TailwindCSS',
  },
  {
    icon: (
      <svg viewBox='0 0 87 69' xmlns='http://www.w3.org/2000/svg' className={`${SVGSizeWH} self-center fill-blue-700 `}>
        <path d='M0 0.00359474V37.3556L10.785 43.5858V18.6796L32.355 31.1363L53.925 18.6796V31.1363L32.355 43.5858V56.0389L53.925 68.4883L86.28 49.8123V24.9062L75.495 31.1363V43.5858L53.925 56.0389L43.14 49.8123L64.71 37.3556V0.00359474L32.355 18.6796L0 0.00359474ZM86.28 0.00359474L75.495 6.22294V18.6796L86.28 12.4531V0.00359474Z' />
      </svg>
    ),
    name: 'Material UI',
  },
];

export const repo = [
  {
    icon: <FontAwesomeIcon icon={faGithub} className={`${FASizeIcon}`} />,
    name: 'GitHub',
  },
  {
    icon: <FontAwesomeIcon icon={faGitlab} className={`${FASizeIcon} text-orange-500`} />,
    name: 'GitLab',
  },
];
