import { ClockIcon } from '@heroicons/react/outline';
import React from 'react';
import Ticker from 'react-ticker';
import Navbar from './Navbar';

const Header = () => {
  //[#107B45]
  return (
    <header className='relative z-10'> 
      <div className="bg-[#107B45] max-h-6">
        <div className="container py-1">
          <Ticker mode='smooth'>
              {({ index }) => (
                  <>
                      <p className='text-white font-semibold text-xs whitespace-nowrap tracking-wide flex items-center'> <ClockIcon className='h-[1em] inline-block mr-1' /> SUNDAY - THURSDAY: 10AM - 10PM &nbsp;&nbsp;•&nbsp;&nbsp; FRIDAY & SATURDAY: 10AM - 11PM</p>
                  </>
              )}
          </Ticker>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
