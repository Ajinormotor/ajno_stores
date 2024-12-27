import Image from "next/image"
import { AllProductCardProps } from "./AllProductCard.types"
import Link from "next/link"
import { useDispatch,  }  from "react-redux"
import { useState } from "react"
import { addItemCart, getTotalCart } from "@/app/redux/cartSlice"
import { ToastContainer,toast }  from "react-toastify"

const allProductCard = (props: AllProductCardProps) => {


  const dispatch = useDispatch()
  const [ qty, setQty] = useState(1)

  const handleAddToCart = (product: AllProductCardProps) => {
    const totalPrice = qty * product.price; 
    const tempCart = {
     ...product,
      quantity: qty,
      totalPrice,
    };

    toast.success("item has been added to cart")

  dispatch(addItemCart(tempCart))
  dispatch(getTotalCart())
}



  return (
    <section className="max-h-[300px] h-full flex flex-col cursor-pointer group gap-2 hover:border-b-[3px]
     hover:border-slate-700 items-center justify-center rounded-sm relative">

<div className=" absolute left-0 top-10">
<ToastContainer />
</div>
      

        <div className="flex relative  rounded-lg  w-full">
    
      <ul className="absolute z-10 left-[-10px] space-y-2  hidden group-hover:block gap-2">
  <li className="bg-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center"><i className="ri-heart-2-line text-white text-base"></i></li>
  <li  onClick={()=> handleAddToCart(props)}  className="bg-black rounded-[50%] w-[30px] h-[30px] flex items-center justify-center"> <i className="ri-shopping-cart-fill text-white text-base"></i> </li>
</ul>

    <div className="flex  w-full ">
    {props.image && <Image alt="products_image" width={100} height={200} objectFit="contain" src={props.image} 
     className="w-full h-[150px] rounded-sm object-contain "  /> }
      {/* <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-sm"></div> */}
    </div>


      </div>


      <div className="py-1 gap-3">

      <Link href={`/Products/${props.id}`} >
      <h1 className="font-normal text-base text-[#222222] ">{props.title.substring(0,20)}</h1>  </Link>
      <p  className="font-normal text-base  text-[#696969]">${props.price}</p>
      </div>
    </section>
  )
}

export default allProductCard
