import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Products() {

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
    <div className='min-h-screen'>
                {categories?.map(category => (<div key={category?._id} className="mb-2">
            <Link
              passHref
              href={`/category/${category?._id}`}
            >
              <div className="px-2 py-1 font-semibold text-center rounded-md cursor-pointer text-zinc-800 bg-zinc-200">
                {category?.name}
              </div>
              
            </Link>
        </div>))}
    </div>
  )
}
