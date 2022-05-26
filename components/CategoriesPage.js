import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ChevronLeftIcon } from '@heroicons/react/solid';

export default function CategoriesPage({ children, title, imgs, products }) {
  return <main className='min-h-screen my-5'>
      <div className="container">
        <div className="sm:hidden">
          <Link href="/products">
            <button className='flex items-center'>
              <ChevronLeftIcon className='w-7 h-7' />
              Go back
            </button>
          </Link>
        </div>
        
        <h2 className='mb-5 text-3xl font-semibold uppercase text-zinc-800'>{title}</h2>
      </div>
      {/* {children} */}
      <div className="container grid min-h-full grid-cols-1 gap-5 md:grid-cols-2">
        {products?.length > 0 && products.map((product, i) => (<div key={product?._id}><div className='overflow-hidden rounded-2xl' >
          <img src={product?.image} className="object-cover w-full h-full" alt='title' />
        </div>
          <h3 className='mt-2 text-2xl font-semibold'>{product?.name}</h3>
          <p>{product?.description}</p>
        </div>))}
      </div>
  </main>;
}
