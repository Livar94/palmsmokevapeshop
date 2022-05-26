import React, { useState } from 'react'
import AddedProducts from '../components/AddedProducts';
import AddProduct from '../components/AddProduct';
import LoginAdmin from '../components/LoginAdmin';
import { useUser } from '../context/useUser';

export default function Admin() {
  const [refetch, setRefetch] = useState(false);
    const { user, logout } = useUser()

  return (
    user ? <div className='min-h-screen'>
      <div className="container flex items-center justify-between p-2 bg-gray-200 ">
        <p className="font-bold">
          (admin) is logged in! 
        </p>
        
        <button onClick={logout}>Logout</button>
      </div>
        <AddProduct setRefetch={setRefetch} />
        <AddedProducts refetch={refetch} setRefetch={setRefetch} />
    </div> : <LoginAdmin />
  )
}
