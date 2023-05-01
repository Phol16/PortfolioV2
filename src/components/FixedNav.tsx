import GitHubIcon from '../assets/svg/GitHubIcon';
import LinkedInIcon from '../assets/svg/LinkedInIcon';

type prop = {
  fill: string;
};

type nav = {
  redirect: string;
  Icon: ({ fill }: prop) => JSX.Element;
};

const Nav: nav[] = [
  {
    redirect: 'https://www.linkedin.com/in/pholibert-lim-37a51323b/',
    Icon: LinkedInIcon,
  },
  {
    redirect: 'https://github.com/Phol16',
    Icon: GitHubIcon,
  },
];

const FixedNav = () => {
  return (
    <div className='fixed bottom-16 right-5 z-20 flex flex-col items-center gap-5'>
      {Nav.map(({ redirect, Icon }, index) => {
        return (
          <a
            key={index}
            href={redirect}
            target='_blank'
            className='hover:scale-110 transition-transform duration-150'
            aria-label='nav-Link'
          >
            <Icon fill='#05B2DC' />
          </a>
        );
      })}
    </div>
  );
};

export default FixedNav;
