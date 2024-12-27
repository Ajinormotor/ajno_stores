'use client'
import { useEffect, useState } from "react";

interface AllProductProps {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
}

const useGetAllProduct = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const [allProducts, setAllProducts] = useState<AllProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const ITEM_PER_PAGE = 8;

  useEffect(() => {
    const getAllProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Couldn't fetch data");
        }
        const result = await res.json();
        setAllProducts(result);
        setErrors(false);
      } catch (error) {
        setErrors(true);
      } finally {
        setLoading(false);
      }
    };

    getAllProduct();
  }, []);

  const firstIndex = (currentPage - 1) * ITEM_PER_PAGE;
  const lastIndex = firstIndex + ITEM_PER_PAGE;
  const realAllProduct = allProducts.slice(firstIndex, lastIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return {
    loading,
    errors,
    allProducts,
    realAllProduct,
    paginate,
    ITEM_PER_PAGE,
    currentPage,
  };
};

export default useGetAllProduct;
