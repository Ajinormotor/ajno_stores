
'use client'


import Heading from "../reuseabale/Heading"


import ClipLoader from "react-spinners/ClipLoader";
import AllCategoryCard from "../card/AllCategoryCard/AllCategoryCard"
import { AllCategoryCardProps } from "../card/AllCategoryCard/AllCategoryCard.type"
import useGetAllCategory from "../hooks/useGetAllCategory"


const AllCategory = () => {
const {loading, allCategory} = useGetAllCategory()




  return (
<section className="flex flex-col md:px-5  py-4  gap-4 px-2  bg-[#F3F4F6]">

<div className="">
    <Heading  title={"All Category"} />
</div>


{

    loading?
    <div className="flex items-center justify-center ">
  <ClipLoader     loading={loading} color="black"/>
    </div>

:


<div className=" flex flex-col items-center justify-center w-full gap-4">


<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full gap-3 p-2"> 


{
    allCategory.map((c: AllCategoryCardProps) => (
        <div key={c.id} className="w-full">
            < AllCategoryCard
              id={c.id}
              title= {c.title}
         
           
            
            />
        </div>
    ))
    
}


</div>



</div>

}
</section>
  )
}

export default AllCategory
