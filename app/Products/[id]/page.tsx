'use client';

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { addItemCart, getTotalCart, removeItemCart, updateItemCart } from "@/app/redux/cartSlice";
import { RootState } from "@/app/redux/store";
import ProdutcdetailsFaq from "@/app/ui/ProdutcdetailsFaq";

interface ProductProps {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  // quantity: number;
}

interface CartItem extends ProductProps {
  // quantity: number;
  totalPrice: number;
}

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.cart);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<ProductProps | null>(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {

    const fetchProduct = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          throw new Error("Could not fetch product data");
        }
        const result = await res.json();
        setProduct(result);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  useEffect(() => {
    dispatch(getTotalCart());
  }, [dispatch]);

  const handleAddToCart = (product: ProductProps) => {
    const totalPrice = qty * product.price;
    const tempCart = {
      ...product,
      quantity: qty,
      totalPrice,
    };

    toast.success("Item has been added to cart");
    dispatch(addItemCart(tempCart));
    dispatch(getTotalCart());
  };

  const decreaseQuantity = (itemId: string) => {
    if (qty > 1) {
      const newQty = qty - 1;

      setQty(newQty)
      dispatch(updateItemCart({ id: itemId, quantity: newQty }));
    }
  };

  const increaseQuantity = (itemId: string) => {
    const newQty = qty + 1;
    setQty(newQty)
    dispatch(updateItemCart({ id: itemId, quantity: newQty }));
  };

  const removeItem = (id: string) => {
    dispatch(removeItemCart({ id }));
  };

  return (
    <div>
      <Header />
      <section className="flex flex-col items-center gap-4 max-w-4xl mx-auto py-10 p-2">
        <ToastContainer />
        {loading && (
          <div className="flex justify-center items-center h-screen">
            <h1>Loading...</h1>
          </div>
        )}
        {error && (
          <div className="flex justify-center items-center h-screen">
            <h1>Failed to load product details.</h1>
          </div>
        )}
        {!loading && !error && product && (

          <div className="flex flex-col md:flex-row gap-6">

            <div className="max-w-[500px] w-full">
              <Image
                alt="Product Image"
                width={300}
                height={300}
                src={product.image}
                className="w-full h-full object-fill"
              />
            </div>

            <div className="flex flex-col gap-3">

              <div className="flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-center md:text-start">{product.title}</h1>
                <p className="text-lg text-gray-700">${product.price}</p>
                <p className="text-gray-600 text-center md:text-start">{product.description}</p>
              </div>

              <div className="flex items-center gap-3">

                
              <div className="flex items-center justify-center gap-2 border-[1.5px] border-black rounded-[10px] max-w-[80px] w-full h-[40px]">
  <h2
    className="cursor-pointer"
    onClick={() => decreaseQuantity(product?.id)}
  >
    -
  </h2>
  <h1>{qty}</h1>
  <h2
    className="cursor-pointer"
    onClick={() => increaseQuantity(product?.id )}
  >
    +
  </h2>
</div>


{  data.length > 0 ? 




(
  <button
    className="bg-black w-[160px] h-[40px] rounded-[10px] px-4 py-3 flex items-center justify-center" >
    <h1 className="font-normal text-base leading-[px] text-white">View Cart</h1>
  </button>
)

:

(
  <button
    className="bg-black w-[160px] h-[40px] rounded-[10px] px-4 py-3 flex items-center justify-center"
    onClick={() => handleAddToCart(product)}
  >
    <h1 className="font-normal text-base leading-[px] text-white">ADD TO CART</h1>
  </button>
)



        }
                <div className="border-black border-[1px] rounded-[50%] w-[40px] h-[40px] flex items-center justify-center">
                  <i className="ri-heart-2-line text-black text-xl"></i>
                </div>

              </div>


<div className="flex flex-col w-full">
  <ProdutcdetailsFaq  />
</div>

            </div>


          </div>
        )}
      </section>


      <Footer />
    </div>
  );
};

export default ProductDetailPage;
