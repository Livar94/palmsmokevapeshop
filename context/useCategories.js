import { createContext, useContext, useState } from 'react';
import {
    useQuery,
  } from 'react-query'
const categoriesContext = createContext()

export function ProvideCategories({children}) {
const [categories, setCategories] = useState([]); 
const {refetch} = useQuery('getCategories', async () => {
    try {
      const response = await fetch('/api/category');
      
      const jsonRes = await response.json();

      if (response.ok) {
        return (jsonRes.data)
      } else {
        throw jsonRes
      }
    } catch (error) {
      toast.error(error.message);
    }
  }, {
    onError: (error) => {
        alert(error)
    }, 
    onSuccess: (data) => {
        setCategories(data)
    },
    // select: (data) => {
    //     console.log(data)
    //     return data.data
    // }
})

    return (
        <categoriesContext.Provider value={{
            refetch,
            categories,
        }}>
            {children}

        </categoriesContext.Provider>
    )
}

export const useCategories = () => {
    return useContext(categoriesContext)
}