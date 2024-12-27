
'use client'

import useGetAllProdutc from "../hooks/useGetAllProduct"
import Heading from "../reuseabale/Heading"
 import AllProductCard from "../card/AllProductCard/AllProductCard"
import { AllProductCardProps } from "../card/AllProductCard/AllProductCard.types"
import Pagination from "../reuseabale/Pagination"
import ClipLoader from "react-spinners/ClipLoader";
import useGetAllProduct from "../hooks/useGetAllProduct"


const AllProduct = () => {
const {
  allProducts, loading,
  ITEM_PER_PAGE, paginate, realAllProduct, currentPage


} = useGetAllProduct()




  return (
<section className="flex flex-col md:px-5  py-4  gap-4 px-2">

<div className="">
    <Heading  title={"All Product"} />
</div>


{

    loading?
    <div className="flex items-center justify-center ">
  <ClipLoader     loading={loading} color="black"/>
    </div>

:


<div className=" flex flex-col items-center justify-center w-full gap-4">


<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full gap-10 p-2"> 


{
    realAllProduct.map((a: AllProductCardProps) => (
        <div key={a.id} className="">
            < AllProductCard
              id={a.id}
              title= {a.title}
              image= {a.image}
              description = {a.description}
              price={a.price}
            
            />
        </div>
    ))
    
}


</div>



<div className="flex items-center justify-center w-full  mx-auto">
  <Pagination 
  itemPerPage={ITEM_PER_PAGE}
  paginate={paginate}
  totalPage={allProducts.length}
  currentPage={currentPage}
  />
</div>
</div>
}
</section>
  )
}

export default AllProduct
