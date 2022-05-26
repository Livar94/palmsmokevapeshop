import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from '../context/useUser';

export default function LoginAdmin() {
  const { login, user } = useUser()
  const router = useRouter()
  /* const loggedIn = false; */
  const [password, setPassword] = useState("");
  let [isOpen, setIsOpen] = useState(true)

  useEffect(() => console.log(user, "***"), [user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('/api/auth', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                password
            }) // body data type must match "Content-Type" header
        });
        
        const jsonRes = await response.json();

        if (response.ok) {
            login(jsonRes?.token)
            console.log("set token, user is logged in")
        } else {
            throw jsonRes
        }
    } catch (error) {
        toast.error(error.message);
    }
  }

  return (
    <Dialog open={isOpen} onClose={() => user && setIsOpen(false)} className=" z-50 fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-[#e9e9e9c4] flex justify-center items-center">
      <Dialog.Overlay />
      <div className="bg-[#107B45] p-10 max-w-max rounded-3xl">
        <Dialog.Title className="text-2xl font-semibold text-zinc-100">Admin Login</Dialog.Title>

        <form onSubmit={handleSubmit}>

            <input type="password" required value={password} onChange={({ target }) => setPassword(target.value)} />

            <div className="">  
                <button type='submit' className='px-3 py-2 mr-2 font-medium rounded-md text-zinc-50 bg-zinc-800' onClick={() => user && setIsOpen(false)}>Login</button>
                <button className='px-3 py-2 font-medium rounded-md text-zinc-50 bg-zinc-800' onClick={() => router.replace('https://google.com')}>Go back</button>
            </div>
        </form>

      </div>
      <ToastContainer />
    </Dialog>
  )
}
