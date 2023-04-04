import React from 'react';

type prop = {
  fill: string;
  transition: string,
};

const ProjectIcon = ({fill, transition}:prop) => {
  return (
    <svg width='25' height='20' viewBox='0 0 25 20' style={{transition: `${transition}`}} fill={fill} xmlns='http://www.w3.org/2000/svg'>
      <path d='M15 12.5H10C9.30977 12.5 8.75 13.0598 8.75 13.75V18.75C8.75 19.4402 9.30977 20 10 20H15C15.6902 20 16.25 19.4402 16.25 18.75V13.75C16.25 13.0598 15.6902 12.5 15 12.5ZM7.5 1.25C7.5 0.559766 6.94023 0 6.25 0H1.25C0.559766 0 0 0.559766 0 1.25V6.25C0 6.94023 0.559766 7.5 1.25 7.5H4.98906L7.84688 12.5016C8.28047 11.757 9.07812 11.25 10 11.25H10.0109L7.5 6.85586V5H16.25V2.5H7.5V1.25ZM23.75 0H18.75C18.0598 0 17.5 0.559766 17.5 1.25V6.25C17.5 6.94023 18.0598 7.5 18.75 7.5H23.75C24.4402 7.5 25 6.94023 25 6.25V1.25C25 0.559766 24.4402 0 23.75 0Z'/>
    </svg>
  );
};

export default ProjectIcon;