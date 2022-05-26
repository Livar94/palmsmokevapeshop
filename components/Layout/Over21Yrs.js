import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { useRouter } from 'next/router'

const Over21Yrs = () => {
  const router = useRouter()
  let [isOpen, setIsOpen] = useState(true)

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className=" z-50 fixed top-0 left-0 w-screen h-screen backdrop-blur-sm bg-[#e9e9e9c4] flex justify-center items-center">
      <Dialog.Overlay />
      <div className="bg-[#107B45] p-10 max-w-max rounded-3xl">
        <Dialog.Title className="text-2xl font-semibold text-zinc-100">Verify your age</Dialog.Title>
        <Dialog.Description className="text-xl text-zinc-100 my-2">
          You must be 21+ years old to enter!
        </Dialog.Description>

        <p className='uppercase text-zinc-50 font-semibold mb-1'>
          Are you 21+ years old?
        </p>

        <button className='text-zinc-50 px-3 py-2 rounded-md font-medium bg-zinc-800 mr-2' onClick={() => setIsOpen(false)}>Yes</button>
        <button className='text-zinc-50 px-3 py-2 rounded-md font-medium bg-zinc-800' onClick={() => router.replace('https://google.com')}>No</button>
      </div>

    </Dialog>
  )
}

export default Over21Yrs;
