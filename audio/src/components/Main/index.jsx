import React from 'react';
import data from '../../data.json';
import logo1 from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import logo2 from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import logo3 from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
const Main = () => {
  return (
    <div className="mb-80">
      <div className='flex mx-40 justify-evenly mt-10'>
        <div className='flex flex-col bg-split-white-black items-center'>
          <img className='pt-10' src={logo1}></img>
          <p className="-mt-14 font-bold text-xl">HEADPHONES</p>
          <button className="mb-2">
            <span className="text-xs font-bold text-orange mr-2">SHOP</span>
            {'>'}
          </button>
        </div>
        <div className='flex flex-col bg-split-white-black items-center'>
          <img className='pt-12' src={logo2}></img>
          <p className="-mt-14 font-bold text-xl">SPEAKERS</p>
          <button>
            <span className="text-xs font-bold text-orange mr-2">SHOP</span>
            {'>'}
          </button>
        </div>
        <div className='flex flex-col bg-split-white-black items-center'>
          <img className='pt-12' src={logo3}></img>
          <p className="-mt-8 font-bold text-xl">EARPHONES</p>
          <button className="">
            <span className="text-xs font-bold text-orange mr-2">SHOP</span>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
