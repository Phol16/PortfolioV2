import React from 'react';

type fill = {
  fill: string;
};

const ExpressIcon = ({fill}:fill) => {
  return (
    <svg width='19' height='24' viewBox='0 0 19 24' fill={fill} xmlns='http://www.w3.org/2000/svg'>
      <path d='M18.75 16.648C18.6646 17.2026 18.0786 22.3233 17.9932 23.4584C12.2374 23.2366 7.2561 23.2137 0 23.4584V22.1427C2.21958 21.6811 2.9603 21.729 2.97852 20.324C3.06606 16.5926 3.15059 7.7277 2.97852 3.71075C2.92827 2.24238 2.38623 2.32983 0 1.85336V0.537716C3.60771 0.659375 12.4967 0.978896 17.7246 0.344238C17.5537 2.31771 17.3461 6.87088 17.3461 6.87088H16.2109C15.6712 4.66085 15.295 2.20162 13.5376 2.20162H6.84814C6.34766 2.20162 6.32324 2.3822 6.32324 2.70466V11.1532C9.15527 11.179 10.6445 11.0242 10.6445 11.0242C12.0981 10.9751 11.9902 10.5855 12.6343 7.65764H13.8916C13.6764 12.8867 13.7007 10.8476 13.8062 15.9256H12.5488C12.1018 13.8574 12.1062 12.776 10.6201 12.7526C10.6201 12.7526 9.57026 12.6494 6.32319 12.6494V19.8209C6.32319 21.1624 7.01899 21.7944 8.48384 21.7944H12.8418C15.949 21.7944 16.092 20.5048 17.6636 16.6479H18.75V16.648Z' />
    </svg>
  );
};

export default ExpressIcon;