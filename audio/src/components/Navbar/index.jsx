import React from 'react';
import logo from '../../assets/home/desktop/image-hero.jpg';
const Navbar = () => {
  return (
    <div className={`bg-hero-pattern h-auto`}>
      <div className={`flex justify-between mx-40 py-8`}>
        <div>
          <p className='text-3xl font-bold text-white'>audiophile</p>
        </div>
        <div className='flex gap-12 mr-40 items-center'>
          <p className='text-sm text-white'>HOME</p>
          <p className='text-sm text-white'>HEADPHONES</p>
          <p className='text-sm text-white'>SPEAKERS</p>
          <p className='text-sm text-white'>EARPHONES</p>
        </div>
        <div className='text-white'>ICON</div>
      </div>
      <div className={`flex h-0.5 mx-40 bg-sky`}></div>
      <div className='mx-40 max-w-xs'>
        <p className='text-sm text-white mt-32'>NEW PRODUCT</p>
        <p className='text-7xl text-white mt-6'>XX99 MARK II</p>
        <p className='text-5xl text-white mt-1'>HEADPHONES</p>
        <p className='text-base text-white mt-4'>
          Experience natural, lifelike audio and exceptional build quality made for passionate music enthusiast.
        </p>
        <button className='text-base text-white mb-32 mt-10'>SEE PRODUCT</button>
      </div>
    </div>
  );
};

export default Navbar;
