import React from 'react'
import { AllCategoryCardProps } from './AllCategoryCard.type'
import Image from 'next/image'

import mensClothing from "../../../public/Images/image.png"
import mensBg from "../../../public/Images/mens_bg.png"
import electronicsBg from "../../../public/Images/electric_bg.png"
import womensBg from "../../../public/Images/womensBg.png"
import jewelryBg from "../../../public/Images/jewelryBg.png"
import Link from 'next/link'


const AllCategoryCard = (props: AllCategoryCardProps) => {
  return (
<section className='flex flex-col  items-start justify-between md:w-[271px] w-full h-[289px] rounded-[24px] bg-white relative p-4'>





<div className="flex  w-full  justify-between items-center">

    {
        props.title === 'electronics'  &&
        <div className=' rounded-[50%] w-[80px] h-[80px] flex items-center justify-center bg-green-300'>
       <Image alt="products_image" src={mensClothing}
        className="w-full h-full rounded-sm object-contain"  />
        </div>

    }

{
        props.title === `men's clothing`  &&
        <div className=' rounded-[50%] w-[80px] h-[80px] flex items-center justify-center bg-blue-300'>
       <Image alt="products_image" src={mensClothing}
        className="w-full h-full rounded-sm object-contain"  />
        </div>

    }

{
        props.title === 'jewelery'  &&
        <div className=' rounded-[50%] w-[80px] h-[80px] flex items-center justify-center bg-yellow-300'>
       <Image alt="products_image" src={mensClothing}
        className="w-full h-full rounded-sm object-contain"  />
        </div>

    }
        {
        props.title === `women's clothing`  &&
        <div className=' rounded-[50%] w-[80px] h-[80px] flex items-center justify-center bg-orange-300'>
       <Image alt="products_image" src={mensClothing}
        className="w-full h-full rounded-sm object-contain"  />
        </div>

    }

    <div className=''>
        <h1 className='font-bold font-ibk'>155 products</h1>
    </div>

     </div>


<div className='w-full'>
    <h2 className='text-base text-[#64748B] font-ibk'>Manufacturer</h2>
<h1 className='text-black text-2xl font-redhart font-semibold'>{props.title.charAt(0).toUpperCase() + props.title.slice(1)}</h1>

</div>

<div className='flex'>
    <Link href={`/Category/${props.id}`} className=''>See Collection  <i className="ri-arrow-right-fill"></i></Link>
</div>


{
        props.title === 'electronics'  &&
<div className='max-w-[280px] max-h-[295px] absolute bottom-0 right-0'>
<Image alt="products_image" src={mensBg}
        className="w-full h-full rounded-sm object-contain"  />
</div>
}

{
        props.title === 'jewelery'  &&
        <div className='max-w-[280px] max-h-[295px] absolute bottom-0 right-0'>
        <Image alt="products_image" src={jewelryBg}
                className="w-full h-full rounded-sm object-contain"  />
        </div>

    }


{
        props.title === `men's clothing`  &&
        <div className='max-w-[280px] max-h-[295px] absolute bottom-0 right-0'>
        <Image alt="products_image" src={womensBg}
                className="w-full h-full rounded-sm object-contain"  />
        </div>

    }

    
        {
        props.title === `women's clothing`  &&
        <div className='max-w-[280px] max-h-[295px] absolute bottom-0 right-0'>
        <Image alt="products_image" src={electronicsBg}
                className="w-full h-full rounded-sm object-contain"  />
        </div>

    }

    </section>

  )
}

export default AllCategoryCard
