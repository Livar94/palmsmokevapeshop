import React from 'react';
import Image from 'next/image';
import About from '../assets/about.jpeg';
import Pattern from '../assets/pattern.png';
import Link from 'next/link';

const AboutPreview = () => {
  return (
    <section className='my-24'>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-7 " data-aos="fade-left">

        <div className="relative z-10 overflow-hidden shadow-xl rounded-xl">
          <Image src={About} layout="responsive" alt="about" />
        </div>
        <div className="relative flex flex-col items-start justify-center">
          {/* <Image src={Pattern} layout="fill" alt="pattern" objectFit='' className='absolute top-0 left-0 opacity-[3%] -z-40' /> */}
          <div className="relative -z-30">
            <h2 className='relative z-10 text-3xl font-semibold uppercase text-zinc-800'>About <span className='font-thin'>Palm Smoke & Vape</span></h2>
            <p className='relative z-10 my-5 text-lg font-medium leading-8 tracking-wide text-zinc-600 poppins'>The services we specialize in at Palm smoke and Vape include the selling of tobacco products at an affordable price. We sell water pipes, hand pipes, hookahs, grinders vaporizers, puff bars, cbd, rolling papers, sanitation and cleaning products for all your smoking needs and essentials.</p>
            
          </div><Link passHref href="/about" className="relative z-50 "><button className="px-3 py-2 font-medium text-white bg-gray-800 rounded-md cursor-pointer hover:text-gray-800 hover:bg-gray-100">Read more</button></Link>
        </div>

      </div>
    </section>
  );
}

export default AboutPreview;
