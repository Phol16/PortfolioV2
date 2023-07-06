import Image from 'next/image';
import React from 'react';
import Me from '../../public/assets/me.jpg'

const PeelMe = () => {
  return (
    <div id='Awesome' className='anim750'>
      <div className='reveal circle_wrapper'>
        <div className='circle overflow-hidden'>
          <Image src={Me} alt='image' width={150} height={0} className='h-auto'/>
        </div>
      </div>

      <div className='sticky anim750'>
        <div className='front circle_wrapper anim750'>
          <div className='circle anim750'></div>
        </div>
      </div>

      <h4 className=' font-bold '>Peel Me!</h4>

      <div className='sticky anim750'>
        <div className='back circle_wrapper anim750'>
          <div className='circle anim750'></div>
        </div>
      </div>
    </div>
  );
};

export default PeelMe;
