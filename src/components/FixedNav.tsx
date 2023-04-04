import GitHubIcon from '../assets/svg/GitHubIcon';
import LinkedInIcon from '../assets/svg/LinkedInIcon';

const FixedNav = () => {
  return (
    <div className='fixed bottom-16 right-5 z-20 flex flex-col items-center gap-5'>
      <a href='https://www.linkedin.com/in/pholibert-lim-37a51323b/' target='_blank'>
        <LinkedInIcon fill='#05B2DC' />
      </a>
      <a href='https://github.com/Phol16' target='_blank'>
        <GitHubIcon fill='#05B2DC' />
      </a>
    </div>
  );
};

export default FixedNav;
