import React from 'react';

type fill = {
  fill: string;
};

const DesktopIcon = ({ fill }: fill) => {
  return (
    <svg width='30' height='25' viewBox='0 0 30 25' fill={fill} xmlns='http://www.w3.org/2000/svg'>
      <path d='M27.5 0.291992H2.5C1.11979 0.291992 0 1.31252 0 2.57038V17.7597C0 19.0175 1.11979 20.0381 2.5 20.0381H12.5L11.6667 22.3165H7.91667C7.22396 22.3165 6.66667 22.8243 6.66667 23.4556C6.66667 24.087 7.22396 24.5948 7.91667 24.5948H22.0833C22.776 24.5948 23.3333 24.087 23.3333 23.4556C23.3333 22.8243 22.776 22.3165 22.0833 22.3165H18.3333L17.5 20.0381H27.5C28.8802 20.0381 30 19.0175 30 17.7597V2.57038C30 1.31252 28.8802 0.291992 27.5 0.291992ZM26.6667 17.0002H3.33333V3.32985H26.6667V17.0002Z' />
    </svg>
  );
};

export default DesktopIcon;
