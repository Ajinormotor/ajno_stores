
'use client'
import { useEffect, useState } from "react"

interface AllCategoryProps {
  id:string
  title: string
}



const useGetAllCategory = () => {

    const [loading, setLoading]  = useState(false);
    const [errors, setErrors] = useState(false)
    const [allCategory, setAllCategory] = useState<AllCategoryProps[]>([]);

    useEffect(() => {
    const getAllProduct = async ( )  => {
        
   setLoading(true);
   try {

    const res = await fetch(`https://fakestoreapi.com/products/categories`, {
        method: 'GET',
        headers:{
           "Content-Type" : "application/json"
        }
        
    });

    if(!res.ok){
        throw new Error('Couldnt Fetch data')
    }
    const result = await res.json()

    console.log('Category',result)
    setAllCategory(result.map((category: string, index: number) => ({
        id: index.toString(),
        title: category,
      })));
    
   } catch (error) {
     setErrors(true)
   } finally{

    setErrors(false)
    setLoading(false)
   }

    };

   getAllProduct()
},[])




  return { 
    loading, errors ,allCategory
  }
}

export default useGetAllCategory
