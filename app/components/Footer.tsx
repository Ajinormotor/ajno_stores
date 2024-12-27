import { footerdata } from "../utility/data/foorterdata"


const Footer = () => {
  return (
<section className="flex flex-col bg-black w-full  justify-around relative  items-center">
    {/* News Letter Box */}
    <div className="flex flex-col lg:flex-row bg-black  px-[2rem] my-8 
  p-[10px]  shadow-md  border-[1px] border-white
    rounded-[30px] gap-[20px] items-center justify-center md:max-w-[80%] w-[95%]  lg:h-[100px]">

        <div>
            <h1 className="text-[#f9f9f9]">Sign Up For Newsletters</h1>
            <p className="text-[#f9f9f9] opacity-80">Be the Furst to Know. Sign up for newsletter today !</p>
        </div>

<div className="flex h-[50px]  rounded-[15px]  bg-[#f9f9f9]  max-w-[400px] w-full">
    <input type="text" className="bg-[#f9f9f9] outline-none w-full rounded-[15px] p-[7px]"  />
    <button className="bg-red-500  rounded-r-[15px] text-white text-center p-[10px]">Subscribe</button>
</div>


<div className="flex gap-[10px]">
    <ul className="flex gap-[10px]">

    <li className="rounded-[50%] w-[30px] h-[30px] items-center justify-center flex cursor-pointer bg-[#f9f9f9]"><i className="ri-facebook-circle-line  text-black text-[20px]"></i></li>
              <li className="rounded-[50%] w-[30px] h-[30px] items-center justify-center flex cursor-pointer bg-[#f9f9f9]"><i className="ri-linkedin-fill text-black text-[20px]"></i></li>
              <li className="rounded-[50%] w-[30px] h-[30px] items-center justify-center flex cursor-pointer bg-[#f9f9f9]"> <i className="ri-twitter-line text-[20px] text-black"></i> </li>
    </ul>

</div>


    </div>


    {/* Lower Footer */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full  p-[2rem]"> 

{/* logo */}
    <div className="flex flex-col gap-[10px] w-[270px]">

    <div className="flex items-center gap-[7px]">
        {/* <img src={logo}  alt="logo"  className="w-[35px] h-[35px] rounded-[5px] border-none " /> */}
        <h1 className="font-[700] text-white">Ajino<span className="">Stores</span></h1>
    </div>

 <p className=" text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

 </p>
</div>


<div className="flex flex-col gap-3 w-[270px] pt-9 md:pt-0">
<h1  className="border-b-[2px] border-white text-white font-[700] text-[22px] md:w-[130px]"> Contact Info</h1>

    <div className="flex flex-col gap-[15px]">

        <ul className="flex gap-[5px] items-center">
            <li className="bg-white w-[50px] h-[30px] flex items-center justify-center"> <i className="ri-gps-fill text-black"></i></li>
            <li className="text-white">Address : 123 Suspendis mattis, Sollicit District,</li>
        </ul>

        <ul className="flex gap-[5px] items-center">
        <li className="bg-white w-[33px] h-[30px] flex items-center justify-center"> <i className="ri-mail-line text-black"></i> </li>
            <li className="text-white">Email : support@domain.com</li>
        </ul>

        
        <ul className="flex gap-[5px] items-center">
        <li className="bg-white w-[53px] h-[30px] flex items-center justify-center"> <i className="ri-phone-line text-black"></i> </li>
            <li className=" text-white">Hotline 1 : 0123-456-78910
            Hotline 2: 0987-765-43210</li>
        </ul>

    </div>
</div>


    <div className="flex flex-col md:flex-row gap-[70px] pt-9 md:pt-0">
  {Object.keys(footerdata).map((key) => (
    footerdata[key].map((f, index) => (
      <div key={index} className="flex flex-col">
        <h1  className="border-b-[2px] border-black font-[700] text-[22px] text-white"> {f.display.heading}</h1>
        <ul className="flex flex-col gap-[7px] text-white">
          <li  className="opacity-[75%] text-[15px]"> {f.display.text}</li>
          <li  className="opacity-[75%] text-[15px]"> {f.display.textTwo}</li>
          <li  className="opacity-[75%] text-[15px]"> {f.display.textThree}</li>
          <li  className="opacity-[75%] text-[15px]"> {f.display.textFour}</li>
    
        </ul>
      </div>
    ))
  ))}
</div>


    </div>

    <div className="bg-white text-center justify-center items-center flex  rounded-t-[15px] h-[50px] w-full">
        <p className="text-center text-[17px] text-black">Copyright © Posthemes. All Rights Reserved.</p>
    </div>


</section>
  )
}

export default Footer
