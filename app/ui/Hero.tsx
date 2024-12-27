'use client';
import Slider from "react-slick";
import { herodata } from "../utility/data/herodata";
import Image from "next/image";
import heroTwo from "../../public/Images/hero_pics2.svg"

const Hero = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay:true,
    autoplaySpeed: 3000
  };

  return (
    <section className="hero_bg h-screen md:h-full xl:h-screen w-full flex flex-col md:flex-row items-center justify-center
     md:justify-around overflow-hidden bg-gray-50 md:py-6 md:px-4">

<div className="flex flex-col md:items-start items-center justify-center  gap-4  w-full">

              <h1 className="text-sm font-medium font-ibk">Discover the season's best 🔥</h1>
              <h2 className="text-5xl font-extrabold font-redhart text-center md:text-start ">Discover our exclusive collection, crafted for everyone this season</h2>

              
<button className="bg-zinc-900 w-[160px] h-[40px]  rounded-lg px-5 py-2 flex items-center justify-center"
>
    <h1  className=" font-bold text-sm text-white">Shop Now <i className="ri-run-line text-white"></i></h1>
</button>

            
           
</div>


      <div className="hidden md:block">
      <Slider
        className="w-full max-w-[500px]"
        {...settings}
      >
        {herodata.map((h) => (
          <div
            key={h.id}
            className="flex gap-6 space-y-7 items-center justify-center text-start p-6 py-5 h-full w-full "
          >
        
      

            {/* Image Section */}
            <div className="flex justify-center rounded-[50%] w-full">
              <Image
                src={h.image}
                alt="hero_pics"
                className="object-cover md:w-[500px] md:h-[400px] rounded-[50%]"
              />
            </div>
          </div>
        ))}
      </Slider>
      </div>

      <div className=" justify-center rounded-[50%] w-full block md:hidden">
              <Image
                src={heroTwo}
                alt="hero_pics"
                className="object-cover w-full rounded-[50%] -ml-7"
              />
            </div>

    </section>
  );
};

export default Hero;
