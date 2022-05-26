import React from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationMarkerIcon } from '@heroicons/react/outline';

const Find = () => {
  return (
    <section className='my-24' data-aos="fade-left">
      <div className="container">
        <h2 className='text-3xl uppercase font-semibold text-zinc-800 mb-5'>FIND <span className='font-thin'>Palm Smoke & Vape</span></h2>
        <div className="h-screen max-h-80 w-full rounded-3xl overflow-hidden">
          {/* <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyAZ2HJVjSJePfGSc07JNvaMH4RD1j6AZOU" }}
            defaultCenter={{
              lat: 32.583410,
              lng: -117.061070
            }}
            defaultZoom={14}
          >
            <div
              lat={32.583410}
              lng={-117.061070}
              className="rounded-full h-12 w-12 bg-red-900 opacity-50"
            />
          </GoogleMapReact> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13447.403241453087!2d-117.0604221!3d32.5835026!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7be4278a36ca38db!2sPalm%20Smoke%20and%20Vape%20Shop!5e0!3m2!1sen!2sus!4v1643565461317!5m2!1sen!2sus" width="100%" height="100%" allowFullScreen loading="lazy"></iframe>
        </div>
        
        <p className="uppercase font-medium mt-3 tracking-wider poppins flex items-center"> <span className='text-zinc-400 font-semibold flex items-center mr-2'> <LocationMarkerIcon className='h-[1em]' /> LOCATION:</span>  3331 Palm Ave, San Diego, CA 92154</p>
      </div>
    </section>
  );
}

export default Find;
