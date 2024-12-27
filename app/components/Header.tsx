
'use client'
import Link from "next/link"

import useHeader from "./useHeader"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTotalCart } from "../redux/cartSlice"
import CartBar from "../ui/CartBar"


const Header = () => {


    const {headerRef, 
        cartBarRef, toggleCartBar,cartBar, nav_link} =useHeader()


    const dispatch = useDispatch()
    const {totalItem} = useSelector((state: any)=> state.cart);
    console.log(totalItem)

    useEffect(()=> {
        dispatch(getTotalCart());
    },[dispatch])


  return (
<section ref={headerRef} className="flex">


{cartBar && <div className="bg-black opacity-40 fixed inset-0 z-30"></div>}


    <div className="flex  bg-black w-full items-center justify-between p-4 px-8">

        <div className="flex">
            <Link  href="/" className="text-white">Ajino<span>Stores</span></Link>
        </div>

        <div className="hidden lg:flex">
            <ul className="flex gap-2">
{
    nav_link.map((n) => (
        <li key={n.id} className="text-white">
            <Link href={n.path}>{n.display}</Link>
        </li>
    ))
}
            </ul>
        </div>

        <div className="flex gap-2">

        <i className="ri-user-3-line text-white text-xl font-medium"></i>

        <div className="flex  relative cursor-pointer
        "  onClick={()=>toggleCartBar()}>

        <i className="ri-shopping-cart-2-line text-white text-xl font-medium"></i>
            <div className="rounded-full bg-white w-[15px] h-[15px] flex items-center justify-center  absolute ml-4 mb-3">
                <h1 className="text-black font-normal text-sm">{totalItem}</h1>
            </div>
       
        </div>

        </div>
    </div>

    <div className={`absolute right-0 top-16  z-[1000]  ${cartBar? "block": "hidden cursor-pointer"}`}  ref={cartBarRef}>
        <CartBar />
    </div>
</section>

  )
}

export default Header
