'use client';

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const CategoryDetailPage = () => {
  const { id } = useParams(); // Update to match your route parameter
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [category, setCategory] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchCategory = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/category/${id}`);
        if (!res.ok) {
          throw new Error("Could not fetch category data");
        }
        const result = await res.json();
        console.log("Category products:", result);
        setCategory(result);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchCategory();
  }, [id]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Failed to load category products.</h1>;
  if (!category || category.length === 0) return <h1 className="text-center flex items-center justify-center">No products found in this category.</h1>;

  return (
    <section className="flex flex-col">
      <Header />
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category?.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default CategoryDetailPage;
