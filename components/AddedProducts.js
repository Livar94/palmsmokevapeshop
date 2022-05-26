import React, { useState, useEffect, useCallback } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCategories } from '../context/useCategories';

export default function AddedProducts({ setRefetch }) {
  // const [categories, setCategories] = useState([]);

  // useEffect(() => getCategories(), [refetch])

  // async function getCategories() {
  //   try {
  //     const response = await fetch('/api/category');
      
  //     const jsonRes = await response.json();

  //     if (response.ok) {
  //       setCategories(jsonRes.data)
  //       setRefetch(false)
  //     } else {
  //       throw jsonRes
  //     }
  //   } catch (error) {
  //     toast.error(error.message);
  //   }
  // }
  const {categories, refetch} = useCategories()

  const deleteProduct = useCallback(async (productId, categoryId) => {
    try {
        const response = await fetch(`/api/product/${productId}`, {
          method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
          headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
              categoryId
          }) // body data type must match "Content-Type" header
      });
        
        const jsonRes = await response.json();

        if (response.ok) {
          window.location.reload(false);
        } else {
          throw jsonRes
        }
    } catch (error) {
        toast.error(error.message);
    }
}, [])

  return (
    <div className='container py-5'>
      <h2 className='mb-2 text-2xl'>
        Added products
      </h2>

      {categories?.map(category => (<div key={category?._id} className="mb-2">
        <h3 className='mb-2 text-lg font-semibold'>{category?.name}</h3>
        <div className="flex flex-col gap-2">
          {category?.products?.map(product => (<div key={product?._id} className="flex items-center gap-2 mb-2 border-b-2">
            <img src={product?.image} alt="product image" className='object-cover w-16 h-16' />
            <p className='font-semibold'>Product Name: <br /> {product?.name || "N/A"}</p>
            <p>Product Description: <br /> {product?.description ? product?.description?.substr(0, 30)+"..." : "N/A"}</p>
            <button onClick={() => deleteProduct(product?._id, category?._id)} className='flex items-center px-3 py-2 ml-auto font-medium text-white bg-red-700 rounded-md'>Delete product</button>
          </div>))}
        </div>
      </div>))}
      <ToastContainer />
    </div>
  )
}
