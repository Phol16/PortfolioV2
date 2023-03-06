import React from 'react';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactLinks = () => {
  return (
    <div className='text-2xl md:text-4xl gap-2 flex m-auto'>
      <button
        className='bg-transparent hover:scale-125 transition-all duration-[150ms] focus:outline-none'
        onClick={() => {
          window.open('https://github.com/Phol16', '_blank');
        }}
      >
        <FontAwesomeIcon icon={faGithub} />
      </button>
      <button
        className='bg-transparent hover:scale-125 transition-all duration-[150ms] hover:text-blue-600 focus:outline-none'
        onClick={() => {
          window.open('https://www.linkedin.com/in/pholibert-lim-37a51323b/', '_blank');
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </button>
    </div>
  );
};

export default ContactLinks;
