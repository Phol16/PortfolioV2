import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const CarouselImg = ({ image }) => {
  return (
    <>{image.length ? (
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      <img src={image[0]} alt="Photo" className='max-h-40 max-w-md'/>
      <img src={image[1]} alt="Photo" className='max-h-40 max-w-md'/>
      <img src={image[2]} alt="Photo" className='max-h-40 max-w-md'/>
      </Carousel>
      ):(<div>Loading...</div>)
}
    </>
  );
};

export default CarouselImg;
