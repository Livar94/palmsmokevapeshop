import  React, { useState, useEffect, Fragment } from 'react';
import UploadImage from './UploadImage';
import { Menu, Dialog, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCategories } from '../context/useCategories';

export default function AddProduct({ setRefetch }) {
  const [productName, setProductName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [img, setImg] = useState('');

  let [isOpen, setIsOpen] = useState(false)
  const {refetch} = useCategories()

  useEffect(() => getCategories(), [])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  async function getCategories() {
    try {
      const response = await fetch('/api/category');
      
      const jsonRes = await response.json();

      if (response.ok) {
        setCategories(jsonRes.data)
      } else {
        throw jsonRes
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function createCategory() {
    try {
      const response = await fetch('/api/category', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
              name: categoryName
          }) // body data type must match "Content-Type" header
      });
      
      const jsonRes = await response.json();

      if (response.ok) {
          closeModal()
          getCategories()
          setCategoryName("")
          window.location.reload(false);
      } else {
          throw jsonRes
      }
    } catch (error) {
        toast.error(error.message);
    }
  }

  async function createProduct(e) {
    e.preventDefault()
    if (!productCategory || !img) return;
    try {
      const response = await fetch('/api/product', {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
              categoryId: productCategory._id,
              name: productName,
              description: productDescription,
              image: img
          }) // body data type must match "Content-Type" header
      });
      
      const jsonRes = await response.json();

      if (response.ok) {
        toast.success("Product created!");
        setProductName("");
        setProductDescription("");
        setImg("");
        setProductCategory(null)
        /* window.location.reload(false); */
        // setRefetch(true)
        refetch()
      } else {
        throw jsonRes
      }
    } catch (error) {
        toast.error(error.message);
    }
  }

  return (
    <div className='container py-5'>
      <h2 className='mb-2 text-2xl'>
        Add product
      </h2>

    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-[#11111182]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Create category
                </Dialog.Title>
                <div className="mt-2">
                  <input value={categoryName} onChange={(e)=>setCategoryName(e.target.value)} type="text" placeholder='Write Category Name' className='w-full px-3 py-2 border rounded-md'/>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={createCategory}
                  >
                    Create category
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      </>

      
      <Menu as="menu" className="relative">
        <Menu.Button className={'bg-gray-800 text-white px-3 py-2 rounded-md font-medium flex items-center group'}>
          {productCategory ? productCategory.name : "Choose product category"}
          <ChevronDownIcon
            className="w-5 h-5 text-white"
            aria-hidden="true"
          />
        </Menu.Button>
        <Menu.Items className="absolute left-0 z-10 flex flex-col w-40 gap-3 p-2 rounded-md top-full bg-zinc-50">
          <Menu.Item className="">
            {({ active }) => (
              <button onClick={openModal}>
                <div className="px-2 py-1 font-semibold underline rounded-md cursor-pointer text-zinc-800 bg-zinc-200">
                  Create category
                </div>
              </button>
            )}
          </Menu.Item>
          {categories?.map(category => (
            <Menu.Item key={category._id}>
              {({ active }) => (
                <button
                  onClick={() => setProductCategory(category)}
                >
                  <div className="px-2 py-1 font-semibold rounded-md cursor-pointer text-zinc-800 bg-zinc-200">
                    {category.name}
                  </div>
                  
                </button>
              )}
            </Menu.Item> 
          ))}
          
        </Menu.Items>
      </Menu>

      <form onSubmit={createProduct} className='mt-1'>
        <div className="flex flex-col gap-1 mb-1">
          <input value={productName} onChange={(e)=>setProductName(e.target.value)} type="text" placeholder='Write Product Name' className='px-3 py-2 border rounded-md'/>
          <textarea value={productDescription} onChange={(e)=>setProductDescription(e.target.value)} name="" className='p-3 border rounded-md' placeholder='Write Product Description'></textarea>
          <UploadImage img={img} setImg={setImg} />
        </div>
        <button type="submit" className="flex items-center px-3 py-2 font-medium text-white bg-gray-800 rounded-md">Add product</button>
      </form>
      
        
      <ToastContainer />
    </div>
  )
}
