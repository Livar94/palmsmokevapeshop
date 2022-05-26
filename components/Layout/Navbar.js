import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import Logo from '../../assets/logo.png'
import Image from 'next/image';
import ProductsMenu from './ProductsMenu';
import Link from 'next/link';

const navigation = [
  { name: 'Products', href: '/products', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

const Navbar = () => {
  return (
    <Disclosure as="nav" className="">
          {({ open }) => (
            <>
              <div className="container ">
                <div className="relative flex items-center justify-between py-3">

                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block w-6 h-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>

                  <div className="flex items-center justify-center flex-1 lg:justify-between">

                    <div className="flex items-center">
                      <Link passHref href="/">
                      <Image
                        src={Logo}
                        alt="Palm Smoke & Vape"
                        height={125}
                        width={125}
                        objectFit="contain"
                        className="cursor-pointer"
                      />
                      </Link>
                    </div>

                    <div className="hidden sm:block">
                      <div className="relative flex items-center space-x-4">
                        <ProductsMenu />
                      
                        {navigation.slice(1).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={''}
                            passHref
                          >
                            <p className='px-3 py-2 font-medium text-gray-700 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white'>{item.name}</p>
                            
                          </Link>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
    
              <Disclosure.Panel className="relative z-50 sm:hidden bg-zinc-100">
                {({ close }) => (
                <div className="flex flex-col gap-5 px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      passHref
                      href={item.href}
                      
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <p className={'text-gray-700 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'} onClick={() => close()}>{item.name}</p>
                    </Disclosure.Button>
                  ))}
                </div>
                )}
              </Disclosure.Panel>

            </>
          )}
    </Disclosure>
  );
}

export default Navbar;
