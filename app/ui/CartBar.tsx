import Link from "next/link"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTotalCart, removeItemCart } from "../redux/cartSlice"
import { CartItemProps } from "../utility/types/CartItemProps.type"
import { RootState } from "../redux/store"


const CartBar = () => {

const dispatch = useDispatch()
    
const {data,totalAmount,totalItem}  = useSelector((state: RootState)=> state.cart)

useEffect(()=> {
  dispatch(getTotalCart())
},)

const removeItem =  (id: string) => {
    dispatch(removeItemCart({id}))
}

  return (
<section className="flex flex-col max-w-[450px] w-full shadow-lg rounded-[10px] bg-black">



    <div className="flex flex-col p-4">
    <h1 className="text-white font-bold">Shopping cart</h1>

    </div>


 <div className="flex p-4  gap-3 ">


    {

        data.length > 0 ?
    

(
<div className="flex flex-col gap-4  ">


<div className="flex flex-col gap-3 max-h-[200px] h-full overflow-auto">



    {

        data.map((d: CartItemProps)=> (
 <div key={d.id} className="flex justify-between gap-3 w-full">


    <div className="flex gap-2">

    <div className="bg-slate-400 flex items-center justify-center w-[100px] h-[90px] rounded">
        <img src={d.image} alt="product_img" className="w-[80px] h-[50px] object-contain"  />
    </div>



    <div className="flex flex-col">
        <h1 className="text-white">{d.title}</h1>
        <h1 className="text-white">${d.price}</h1>
        <h2 className="text-white">QTY: {d.quantity}</h2>
        
        </div>

        </div>

<div className="flex justify-end ">
    
<button onClick={() => removeItem(d.id)} className="w-[100px] h-[40px] bg-transparent  border-[1px] border-white hover:bg-white group cursor-pointer rounded-[12px] px-3 py-1 flex items-center justify-center">
    <h1 className=" font-bold group-hover:text-black text-white  text-sm">Remove</h1>
</button>
</div>


 </div>

        ))
    }

</div>


    {/* bottom */}

(

    <div  className="flex flex-col   gap-2  border-t-[2px] border-white">


        <div className="flex flex-col p-3">
            <ul  className="flex justify-between items-center">
                <li  className="text-white">Subtotal</li>
                <li className="text-white">${totalAmount}</li>
            </ul>
            <p className="text-start text-sm font-light text-white">Shipping and taxes calculated  at checkout.</p>
        </div>

        <div className="flex items-center justify-center gap-3 p-3">
            

<button className="w-[150px] h-[40px] bg-transparent  border-[1px] border-white hover:bg-white group cursor-pointer rounded-[12px] px-4 py-2 flex items-center justify-center">
    <Link href="/Cart"  className=" font-bold group-hover:text-black text-white  text-base">View Cart</Link>
</button>


<button className="w-[150px] h-[40px] bg-white  border-[1px] border-white hover:bg-transparent cursor-pointer group rounded-[12px] px-4 py-2 flex items-center justify-center">
    <Link href={ `${totalItem === 0 ? "#" : "/Checkout"}  `}  className=" font-bold text-black group-hover:text-white  text-base">Check out</Link>
</button>


        </div>
    </div>





    
</div>
)
: (
    <div className="p-4">
        <h1 className="text-white text-center">No item added to cart</h1>
    </div>
)

}
</div>

</section>
  )
}

export default CartBar
