import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryPreview = ({data}) => {
  return (
    <Link className="relative" passHref href={`/category/${data.path}`}>
    <div className='relative min-h-[150px] rounded-md overflow-hidden shadow-2xl cursor-pointer md:hover:scale-105 transition-transform duration-105 ease-in-out '>
      <div className="relative flex items-center justify-center w-full h-full p-3 text-xl text-neutral-50 bg-gradient-to-t from-black"><p className='text-2xl font-semibold tracking-wider'>{data.name}</p></div>
      <Image src={data.image} alt="" layout='fill'  objectFit="cover" className='absolute top-0 left-0 -z-10' />
    </div>
    </Link>
  );
}

export default CategoryPreview;
