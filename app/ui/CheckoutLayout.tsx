
'use client'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCart, removeItemCart, updateItemCart } from "../redux/cartSlice";
import Link from "next/link";
import { CartItemProps } from "../utility/types/CartItemProps.type";
import { RootState } from "../redux/store";
import CheckoutForm from "../ui/CheckoutForm";





const CheckoutLayout = () => {



    const dispatch = useDispatch()
    const {data,totalAmount,totalItem} = useSelector((state:RootState)=>state.cart)

    useEffect(()=>{
   dispatch(getTotalCart());
    },[dispatch])


    const removeItem =(id:string)=> {
        dispatch(removeItemCart({id}))
    }


    const decreaseQuantity = (itemId: string, quantity: number) => {
        if (quantity > 1) {
          const newQty = quantity - 1;
          dispatch(updateItemCart({ id: itemId, quantity: newQty }));
        }
      };
      
      const increaseQuantity = (itemId: string, quantity: number) => {
        const newQty = quantity + 1;
        dispatch(updateItemCart({ id: itemId, quantity: newQty }));
      };
      

      const totalOrder = Math.ceil(totalAmount * 5)


  return (
<section className="flex flex-col justify-center lg:flex-row gap-3 p-5   relative py-5">

    <div className="flex  md:max-w-[900px] w-full">
        <CheckoutForm  />
    </div>



    <div className="flex flex-col gap-3 items-start  max-w-[450px] w-full">




<div className="flex  gap-3  md:max-w-[800px] w-full overflow auto">


{

    data.length > 0 ?


(



<div className="flex flex-col gap-3 max-w-full w-full">



{

    data.map((d:CartItemProps)=> (
<div key={d.id} className="flex  justify-between gap-3  border-[1px] border-black rounded-[10px] max-w-full w-full p-2">

    <div className="flex gap-3">

<div className="bg-slate-400 flex items-center justify-center w-[100px] h-[90px] rounded">
    <img src={d.image} alt="product_img" className="w-[80px] h-[50px] object-contain"  />
</div>

<div className="flex flex-col">
    <h1 className="text-black">{d.title}</h1>
    <h1 className="text-black">${d.price}</h1>
    <h2 className="text-black">Qty: {d.quantity}</h2>
    
    </div>

</div>

<div className="flex flex-col justify-between items-center">

<div className=" flex items-center justify-center gap-2 border-[1.5px] border-black rounded-[10px] max-w-[80px] w-full h-[40px]">
        <h2 className="cursor-pointer" onClick={()=>decreaseQuantity(d.id,d.quantity)}>-</h2>
        <h1>{d.quantity}</h1>
        <h2 className="cursor-pointer" onClick={()=>increaseQuantity(d.id,d.quantity)}>+</h2>
    </div>

    <div className="">
        
<button onClick={()=> removeItem(d.id)} className="w-[150px] h-[40px] bg-transparent  border-[1px] border-white hover:bg-white group cursor-pointer rounded-[12px] px-4 py-2 flex items-center justify-center">
    <h1  className=" font-bold text-black  text-base">Remove</h1>
</button>

    </div>
</div>


</div>

    ))
}

</div>


)
: (
<div className="p-4">
    <h1 className="text- text-center">No item added to cart</h1>
</div>
)

}
</div>




{/* SUb total */}
<div  className="flex flex-col gap-2  border-[1px] border-black w-full rounded-[10px] ">





    <div className="flex flex-col p-3">

    <ul className="flex justify-between items-center">
    <li className="text-black">Subtotal</li>
    <li className="text-black">${totalAmount ? totalAmount.toFixed(2) : '0.00'}</li>

</ul>

              
        <ul  className="flex justify-between items-center">
            <li  className="text-black">Shipping estimate</li>
            <li className="text-black">$5.00</li>
        </ul>

              
        <ul  className="flex justify-between items-center">
            <li  className="text-black">Order Total</li>
            <li className="text-black">${totalOrder}</li>
        </ul>
            
 
    </div>

    <div className="flex items-center justify-center gap-3 p-3">
        




<button className="w-full h-[40px] bg-black  border-[1px]  group-hover:border-black hover:bg-transparent cursor-pointer group rounded-[12px] px-4 py-2 flex items-center justify-center">
<Link href={ `${totalItem === 0 ? "#" : "/Checkout"}  `} className=" font-bold group-hover:text-black text-white  text-base"> <i className="ri-shopping-cart-fill group-hover:text-black text-white text-base"></i>  Confirm order</Link>
</button>


    </div>
</div>

</div>

</section>
  )
}

export default CheckoutLayout
