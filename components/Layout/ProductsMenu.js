import { useState, useEffect } from 'react'
import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link';

const menuItems = [
  {
    name: "Puff Bars ETC",
    path: "puff-bars-etc"
  }, {
    name: "Bongs",
    path: "bongs"
  }, {
    name: "Vape Juice",
    path: "vape-juice"
  }, {
    name: "Vapes",
    path: "vapes"
  }, {
    name: "Hookah",
    path: "hookah"
  }, {
    name: "Accessories",
    path: "accessories"
  }
];


const ProductsMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => getCategories(), [])

  async function getCategories() {
    try {
      const response = await fetch('/api/categories');
      
      const jsonRes = await response.json();

      if (response.ok) {
        setCategories(jsonRes.data)
      } else {
        throw jsonRes
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Menu as="menu" className="relative">
      <Menu.Button className={'text-gray-700 hover:bg-gray-800 hover:text-white px-3 py-2 rounded-md font-medium flex items-center group'}>
        Products
        <ChevronDownIcon
          className="w-5 h-5 text-gray-700 group-hover:text-white"
          aria-hidden="true"
        />
      </Menu.Button>
      <Menu.Items className="absolute left-0 flex flex-col w-40 gap-3 p-2 rounded-md top-full bg-zinc-50">
        {categories?.map(category => (<Menu.Item key={category?._id} className="">
          {({ active }) => (
            <Link
              passHref
              href={`/category/${category?._id}`}
            >
              <div className="px-2 py-1 font-semibold rounded-md cursor-pointer text-zinc-800 bg-zinc-200">
                {category?.name}
              </div>
              
            </Link>
          )}
        </Menu.Item>))}
      </Menu.Items>
    </Menu>
  );
}

export default ProductsMenu;
