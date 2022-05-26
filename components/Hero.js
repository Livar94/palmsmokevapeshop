import React from 'react';
import { SunIcon } from '@heroicons/react/outline';

const Hero = () => {
  return (
    <div className="relative px-2 -my-12 shadow-inner -z-50">
      <div id="hero" className="px-2 py-32 rounded-lg" alt="Photo by Brett Sayles from Pexels">
        <h2 className='text-3xl font-medium text-center md:text-5xl lobster text-neutral-50 animate-pulse'>Welcome to <span className='text-5xl font-black underline poppins md:text-7xl '>Palm <br /> Smoke & Vape Shop!</span></h2>
      </div>
    </div>
  );
}

export default Hero;
