import { useRouter } from 'next/router'
import { useEffect, useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CategoriesPage from '../../components/CategoriesPage';
import BounceLoader from "react-spinners/BounceLoader";

export default function Category() {
    const [category, setCategory] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    const getCategory = useCallback(async () => {
        try {
            const response = await fetch(`/api/product/${id}`);
            
            const jsonRes = await response.json();

            if (response.ok) {
                setCategory(jsonRes.data)
            } else {
                throw jsonRes
            }
        } catch (error) {
            toast.error(error.message);
        }
    }, [id])

    useEffect(() => id && getCategory(), [id, getCategory])
    useEffect(() => console.log(category), [category])

  return (
    <>
    {category ? <CategoriesPage title={category?.name} products={category?.products} /> : <div className="flex items-center justify-center min-h-screen my-5">
        <BounceLoader loading={true} size={50} color="#86E7D4" />
    </div>}
    </>
  )
}
