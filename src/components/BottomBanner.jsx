import React from 'react';
import { assets } from '../assets/assets';

const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
        <img src={assets.bottom_banner_image} alt="banner" className='w-full hidden md:block' />
        <img src={assets.bottom_banner_image_sm} alt="banner" className='w-full md:hidden' />

        <div className='absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24'>
            <div>
                <h1 className='text-2xl md:text-3xl font-semibold text-primary mb-8 lg:text-6xl'>Why We Are The Best?</h1>
            </div>
        </div>
    </div>
  )
}

export default BottomBanner;
